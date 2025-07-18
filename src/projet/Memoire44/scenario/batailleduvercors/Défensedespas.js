import { Mortar, SoldatAllies } from "../../army/army";
import { SoldatAxis } from "../../army/army";

import { Forest, Hills, Mine, SandBag, Village } from "../../haxagone/base";
import { Medal } from "../../haxagone/highlight";
import { Barracks, Mountain } from "../../haxagone/terrain";
export const Défensedespas= {
    name:"Défense des pas",
    terrain:"terrain0",
    medalAllies:5,
    medalAxe:5,
    camp:"Axis",
    cardAxis:5,
    cardAllies:6,
    hexa:[
    {x:0,y:0,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:0,y:1,contenu:{case: new Village(),bunker: null,defense: null, unité:new Mortar(4,null,null,"Axis",true),action:null,highlight:null,select:null,medal:null}}, 
    {x:0,y:2,contenu:{case: new Forest(),bunker: null,defense: null, unité:new SoldatAxis(4),action:null,highlight:null,select:null,medal:null}}, 
    {x:0,y:3,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:0,y:4,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:0,y:5,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:0,y:6,contenu:{case: new Forest(),bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:0,y:7,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:0,y:8,contenu:{case: new Forest(),bunker: null,defense: null, unité:new SoldatAxis(4),action:null,highlight:null,select:null,medal:null}}, 
    {x:0,y:9,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:0,y:10,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:0,y:11,contenu:{case: new Forest(),bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:0,y:12,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    
    {x:1,y:0,contenu:{case: new Forest(),bunker: null,defense: null, unité:new SoldatAxis(4),action:null,highlight:null,select:null,medal:null}}, 
    {x:1,y:1,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:1,y:2,contenu:{case: new Forest(),bunker: null,defense: null, unité:new SoldatAxis(4),action:null,highlight:null,select:null,medal:null}}, 
    {x:1,y:3,contenu:{case: new Forest(),bunker: null,defense: null, unité:new SoldatAxis(4),action:null,highlight:null,select:null,medal:null}}, 
    {x:1,y:4,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:1,y:5,contenu:{case: new Forest(),bunker: null,defense: null, unité:new SoldatAxis(4),action:null,highlight:null,select:null,medal:null}}, 
    {x:1,y:6,contenu:{case: new Forest(),bunker: null,defense: null, unité:new SoldatAxis(4),action:null,highlight:null,select:null,medal:null}}, 
    {x:1,y:7,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:1,y:8,contenu:{case: new Mountain(),bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:1,y:9,contenu:{case: new Forest(),bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:1,y:10,contenu:{case: new Village(),bunker: null,defense: null, unité:new SoldatAxis(4),action:null,highlight:null,select:null,medal:null}}, 
    {x:1,y:11,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:1,y:12,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    
    {x:2,y:0,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:2,y:1,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:2,y:2,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:2,y:3,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:2,y:4,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:2,y:5,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:2,y:6,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:2,y:7,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:2,y:8,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:2,y:9,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:2,y:10,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:2,y:11,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:2,y:12,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    
    {x:3,y:0,contenu:{case: new Mountain(),bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:3,y:1,contenu:{case: new Mountain(),bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:3,y:2,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:3,y:3,contenu:{case: new Mountain(),bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:3,y:4,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:3,y:5,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:3,y:6,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:3,y:7,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:3,y:8,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:3,y:9,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:3,y:10,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:3,y:11,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:3,y:12,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    
    {x:4,y:0,contenu:{case: new Mountain(),bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:4,y:1,contenu:{case: new Hills(),bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:4,y:2,contenu:{case: new Mountain(),bunker: null,defense: new SandBag(), unité:new SoldatAllies(3),action:null,highlight:null,select:null,medal:null}}, 
    {x:4,y:3,contenu:{case: new Hills(),bunker: new Mine(),defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:4,y:4,contenu:{case: new Mountain(),bunker: null,defense: new SandBag(), unité:new SoldatAllies(3),action:null,highlight:null,select:null,medal:null}}, 
    {x:4,y:5,contenu:{case: new Hills(),bunker: new Mine(),defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:4,y:6,contenu:{case: new Mountain(),bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:4,y:7,contenu:{case: new Hills(),bunker: new Mine(),defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:4,y:8,contenu:{case: new Mountain(),bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:4,y:9,contenu:{case: new Mountain(),bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:4,y:10,contenu:{case: new Mountain(),bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:4,y:11,contenu:{case: new Hills(),bunker: new Mine(),defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:4,y:12,contenu:{case: new Mountain(),bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    
    {x:5,y:0,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:5,y:1,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:5,y:2,contenu:{case: new Hills(),bunker: null,defense: new SandBag(), unité:new SoldatAllies(3),action:null,highlight:null,select:null,medal:null}}, 
    {x:5,y:3,contenu:{case: new Hills(),bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:5,y:4,contenu:{case: new Hills(),bunker: null,defense: new SandBag(), unité:new SoldatAllies(3),action:null,highlight:null,select:null,medal:null}}, 
    {x:5,y:5,contenu:{case: new Mountain(),bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:5,y:6,contenu:{case: new Mountain(),bunker: null,defense: new SandBag(), unité:new SoldatAllies(3),action:null,highlight:null,select:null,medal:null}}, 
    {x:5,y:7,contenu:{case: new Mountain(),bunker: null,defense: new SandBag(), unité:new SoldatAllies(3),action:null,highlight:null,select:null,medal:null}}, 
    {x:5,y:8,contenu:{case: new Hills(),bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:5,y:9,contenu:{case: new Hills(),bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:5,y:10,contenu:{case: new Mountain(),bunker: null,defense: new SandBag(), unité:new SoldatAllies(3),action:null,highlight:null,select:null,medal:null}}, 
    {x:5,y:11,contenu:{case: new Mountain(),bunker: null,defense: new SandBag(), unité:new SoldatAllies(3),action:null,highlight:null,select:null,medal:null}}, 
    {x:5,y:12,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    
    {x:6,y:0,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:6,y:1,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:6,y:2,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:6,y:3,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:6,y:4,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:6,y:5,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:6,y:6,contenu:{case: new Hills(),bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:6,y:7,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:6,y:8,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:6,y:9,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:6,y:10,contenu:{case: new Hills(),bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:6,y:11,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:6,y:12,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    
    {x:7,y:0,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:7,y:1,contenu:{case: new Forest(),bunker: null,defense: null, unité:new SoldatAllies(3),action:null,highlight:null,select:null,medal:null}}, 
    {x:7,y:2,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:7,y:3,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:7,y:4,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:7,y:5,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:7,y:6,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:7,y:7,contenu:{case: new Forest(),bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:7,y:8,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:7,y:9,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:7,y:10,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:7,y:11,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:7,y:12,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    
    {x:8,y:0,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:8,y:1,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:8,y:2,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:8,y:3,contenu:{case: new Forest(),bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:8,y:4,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:8,y:5,contenu:{case: new Barracks(),bunker: null,defense: new SandBag(), unité:new SoldatAllies(3),action:null,highlight:null,select:null,medal:new Medal(true)}}, 
    {x:8,y:6,contenu:{case: new Forest(),bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:8,y:7,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:8,y:8,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:8,y:9,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:8,y:10,contenu:{case: new Forest(),bunker: null,defense: null, unité:new SoldatAllies(3),action:null,highlight:null,select:null,medal:null}}, 
    {x:8,y:11,contenu:{case: new Forest(),bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}, 
    {x:8,y:12,contenu:{case: null,bunker: null,defense: null, unité:null,action:null,highlight:null,select:null,medal:null}}
    
       ]
    }
    