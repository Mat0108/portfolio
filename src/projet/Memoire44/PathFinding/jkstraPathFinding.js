
import { algos,Graph } from 'jkstra'


export function jkstraPathFinding(grille, start, end,testingRoad) {
    
    const graph = new Graph()
    const allNodes = new Array(9).fill(null).map(() => []);

    
    // Helper to get node, creating it if it doesn't exist
    function getNode(x, y) {
        
        if (x < 0 || x >= 9 || y < 0 || y >= (x % 2 === 1 ? 12 : 13)) return null;
        let soldatType = grille[start.x][start.y].unité ? grille[start.x][start.y].unité._type : "Soldat";
        let isArmyBlockingCase = false;
        if(grille[x][y].defense && typeof grille[x][y].defense._byentering === 'object') {
            isArmyBlockingCase =  (grille[x][y].defense && grille[x][y].defense._byentering )?  grille[x][y].defense._byentering[soldatType] : false;
        }



        let isBlockingCase = grille[x][y].case ? grille[x][y].case._byentering ? true : false : false; //case qui stop le mouvement
        let isSoldatCase = ( !!grille[x][y].unité ?? false ) ? true : false; //case avec un soldat présent
        let isUpperCaseStart = grille[start.x][start.y].case ? grille[start.x][start.y].case?._isUpperCase : false; //Le start est une case en hauteur
        let isUpperCase = grille[x][y].case ? grille[x][y].case?._isUpperCase : false; // case en hauteur

   
        let complexCond = (isArmyBlockingCase ? isArmyBlockingCase : (isUpperCaseStart ? !isUpperCase :  isBlockingCase)) || isSoldatCase ;


        let cond = complexCond;
        let isBegin = (x === start.x && y === start.y)
        let isEnd = (x === end.x && y === end.y)

        if(cond && !isBegin && !isEnd ) return null
        if (!allNodes[x][y]) {
            allNodes[x][y] = graph.addVertex({ x, y });
        }
        return allNodes[x][y];
        
    }
    
    // Create nodes and connect them
    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < (x % 2 === 1 ? 12 : 13); y++) {
            const current = getNode(x, y);
            if (!current) continue;
            // Connecting the six surrounding hexes
            
            [[x-1, x % 2 === 1 ? y : y-1], [x-1, x % 2 === 1 ? y+1 : y],
             [x, y-1], [x, y+1],
             [x+1, x % 2 === 1 ? y : y-1], [x+1, x % 2 === 1 ? y+1 : y]].forEach(([nx, ny]) => {
                const neighbor = getNode(nx, ny);
                if (neighbor) {
                    const preferRoad = testingRoad({x:nx,y:ny});                 
                    const weight = preferRoad ? 0.8 : 1; // favorise route
                    graph.addEdge(current, neighbor, weight );
                }
            });
        }
    }

    const dijkstra = new algos.Dijkstra(graph);
    let soldatType = grille[start.x][start.y].unité ? grille[start.x][start.y].unité._type : "Soldat";
    let isArmyBlockingCase = false;
    if(grille[end.x][end.y].defense && typeof grille[end.x][end.y].defense._byentering === 'object') {
        isArmyBlockingCase =  (grille[end.x][end.y].defense && grille[end.x][end.y].defense._byentering )?  grille[end.x][end.y].defense._byentering[soldatType] : false;
    }
    if(soldatType === "Tank" && isArmyBlockingCase) return null
    let path = dijkstra.shortestPath(getNode(start.x, start.y), getNode(end.x, end.y),{
    edgeCost: function (e) {
        return e.data;
    },
    });
    if(end.x === 2 && end.y === 7){console.log('path: ',path)}
    
    if(path === null || path.length === 0) return null
    let chemin = [] 
    path.forEach(node => {
        
        chemin.push(node.from.data);
    })
    chemin.push(end)
    if(end.x === 2 && end.y === 7){console.log('chemin: ',chemin)}
    
    return {item:path,path:chemin}
    
    
}