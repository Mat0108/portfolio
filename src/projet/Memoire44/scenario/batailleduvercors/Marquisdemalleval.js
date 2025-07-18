import { Mortar, SoldatAllies } from "../../army/army";
import { SoldatAxis } from "../../army/army";
import { Forest, Hills, Village } from "../../haxagone/base";
import { Mountain } from "../../haxagone/terrain";

export const Marquisdemalleval = {
    name:"Marquisdemalleval",
    terrain:"terrain0",
    medal:5,
    camp:"Axis",
    cardAxis:5,
    cardAllies:5,
    hexa:[
        {x:0,y:0,contenu:{case:null,defense:null,unité:new SoldatAxis(),action:null,highlight:null,select:null}},
        {x:0,y:2,contenu:{case:null,defense:null,unité:new SoldatAxis(),action:null,highlight:null,select:null}},
        {x:0,y:3,contenu:{case:new Forest(),defense:null,unité:new Mortar(4,null,null,"Axis",true),action:null,highlight:null,select:null}},
        {x:0,y:5,contenu:{case:null,defense:null,unité:new SoldatAxis(),action:null,highlight:null,select:null}},
        {x:0,y:6,contenu:{case:new Hills(),defense:null,unité:new SoldatAxis(),action:null,highlight:null,select:null}},
        {x:0,y:7,contenu:{case:null,defense:null,unité:new SoldatAxis(),action:null,highlight:null,select:null}},
        {x:0,y:8,contenu:{case:new Hills(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:0,y:10,contenu:{case:null,defense:null,unité:new SoldatAxis(),action:null,highlight:null,select:null}},
        {x:0,y:11,contenu:{case:new Forest(),defense:null,unité:new SoldatAxis(),action:null,highlight:null,select:null}},
        {x:0,y:12,contenu:{case:null,defense:null,unité:new SoldatAxis(),action:null,highlight:null,select:null}},
        {x:1,y:0,contenu:{case:new Village(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:1,y:1,contenu:{case:null,defense:null,unité:new SoldatAxis(),action:null,highlight:null,select:null}},
        {x:1,y:3,contenu:{case:new Forest(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:1,y:6,contenu:{case:new Hills(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:1,y:11,contenu:{case:new Forest(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:2,y:2,contenu:{case:new Hills(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:2,y:3,contenu:{case:new Hills(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:2,y:4,contenu:{case:new Hills(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:2,y:6,contenu:{case:new Forest(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:2,y:8,contenu:{case:new Village(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:3,y:0,contenu:{case:new Forest(),defense:null,unité:new SoldatAllies(3),action:null,highlight:null,select:null}},
        {x:3,y:3,contenu:{case:new Forest(),defense:null,unité:new SoldatAllies(3),action:null,highlight:null,select:null}},
        {x:3,y:9,contenu:{case:new Hills(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:3,y:10,contenu:{case:new Hills(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:3,y:11,contenu:{case:new Forest(),defense:null,unité:new SoldatAllies(3),action:null,highlight:null,select:null}},
        {x:4,y:5,contenu:{case:new Village(),defense:null,unité:new SoldatAllies(3),action:null,highlight:null,select:null}},
        {x:4,y:6,contenu:{case:new Village(),defense:null,unité:new SoldatAllies(3),action:null,highlight:null,select:null}},
        {x:4,y:8,contenu:{case:new Forest(),defense:null,unité:new SoldatAllies(3),action:null,highlight:null,select:null}},
        {x:4,y:11,contenu:{case:new Hills(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:5,y:0,contenu:{case:new Forest(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:5,y:1,contenu:{case:new Forest(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:5,y:3,contenu:{case:new Forest(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:5,y:5,contenu:{case:new Hills(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:5,y:6,contenu:{case:new Hills(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:5,y:9,contenu:{case:new Forest(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:6,y:1,contenu:{case:new Hills(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:6,y:3,contenu:{case:new Village(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:6,y:5,contenu:{case:new Forest(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:6,y:7,contenu:{case:new Hills(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:6,y:8,contenu:{case:new Hills(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:6,y:9,contenu:{case:new Hills(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:6,y:10,contenu:{case:new Forest(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:6,y:11,contenu:{case:new Village(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:7,y:0,contenu:{case:new Mountain(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:7,y:1,contenu:{case:new Hills(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:7,y:2,contenu:{case:new Hills(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:7,y:5,contenu:{case:new Mountain(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:7,y:6,contenu:{case:new Mountain(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:7,y:7,contenu:{case:new Mountain(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:7,y:8,contenu:{case:new Mountain(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:7,y:9,contenu:{case:new Hills(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:8,y:1,contenu:{case:new Mountain(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:8,y:2,contenu:{case:new Mountain(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:8,y:3,contenu:{case:new Mountain(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:8,y:4,contenu:{case:new Mountain(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:8,y:5,contenu:{case:new Mountain(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:8,y:9,contenu:{case:new Mountain(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:8,y:10,contenu:{case:new Mountain(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:8,y:11,contenu:{case:new Mountain(),defense:null,unité:null,action:null,highlight:null,select:null}},
        {x:8,y:12,contenu:{case:new Mountain(),defense:null,unité:null,action:null,highlight:null,select:null}},
       
        
    ]
}