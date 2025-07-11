import { CaseGenerique,test3, test6 } from "../divers/Generique";
import { Medal } from "./highlight";
import { SnowAirField, SnowAirFieldX, SnowBarracks, SnowBunker, SnowCamp, SnowCemetery, SnowChurch, SnowDam, SnowDepot, SnowDragonTeeth, SnowFactory, SnowForest, SnowFortress, SnowHedgerow, SnowHill, SnowLakeA, SnowLakeB, SnowLakeC, SnowLightHouse, SnowMarshes, SnowMountain, SnowPond, SnowRiverBranchLeft, SnowRiverBranchRight, SnowRiverY, SnowRiversCurve, SnowRiversRight, SnowRoadBranchLeft, SnowRoadBranchRight, SnowRoadCurve, SnowRoadHillCurve, SnowRoadHillRight, SnowRoadRight, SnowRoadX, SnowRoadY, SnowStation, SnowTrainBranchLeft, SnowTrainBranchRight, SnowTrainCurve, SnowTrainRight, SnowTrainX, SnowTrainXRoad, SnowVillage } from "./snow";
import { AirField, AirFieldX, Barracks, Camp, Casemate, Cemetery, Church, Dam, Depot, Factory, Ford, Fortress, LakeA, LakeB, LakeC, LightHouse, Loco, Marshes, Mountain, Pond, Pontoon, RailBridge, RiverBranchLeft, RiverBranchRight, RiverY, RoadBlock, RoadBranchLeft, RoadBranchRight, RoadCurve, RoadHillCurve, RoadHillRight, RoadRight, RoadX, RoadY, Station, TrainBranchLeft, TrainBranchRight, TrainCurve, TrainRight, TrainX, TrainXRoad, Wagon } from "./terrain";

export class Country extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/base/h_country-1-1.webp`, 1, {Soldat:-1,Tank:-1}, false, true, false, false, undefined, undefined, undefined, undefined, `new Country(`);
    }
}

export class CountryVide extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/base/h_countryvide.webp`, 1, {Soldat:-1,Tank:-1}, false, true, false, false, undefined, undefined, undefined, undefined, `new CountryVide(`);
    }
}

export class SandBag extends CaseGenerique {
    constructor(orientation){
        super(`images/Memoire44/base/${orientation === 1 ?"o_sand1":"o_sand2"}.webp`, 2, {Soldat:-1,Tank:-1}, false, true, false, false, "images/Memoire44/card/base/sandbags-fr.webp", undefined, undefined, undefined, `new SandBag(`);
    }
}

export class Wire extends CaseGenerique{
    constructor (){
        super("images/Memoire44/base/o_wire.webp", 1, {Soldat:-1}, false, false, false, {Soldat:true}, undefined, undefined, undefined, undefined, `new Wire(`);
    }
}

export class Hedgehog extends CaseGenerique{
    constructor (){
        super("images/Memoire44/base/o_hedgehog.webp", 1, true, false, false, false, {Tank:true}, undefined, undefined, undefined, undefined, `new Hedgehog(`);
    }
}

export class Hedgerow extends CaseGenerique{
    constructor (){
        super("images/Memoire44/base/h_hedgerow.webp", 1, true, false, false, false, undefined, undefined, undefined, undefined,undefined, `new Hedgerow(`);
    }
}

export class Bunker extends CaseGenerique{
    constructor (){
        super("images/Memoire44/base/o_bunker.webp", 1, {Soldat:-1,Tank:-2}, true, true, true, undefined, undefined, undefined,undefined,undefined, `new Bunker(`);
    }
}

export class Hills extends CaseGenerique {
    constructor (){
        super("images/Memoire44/base/h_hills.webp", 1, {Soldat:-1,Tank:-1}, false, false, true, true, "images/Memoire44/card/base/hill-fr.webp", false, " ", true, `new Hills(`);
    }
}

export class Forest extends CaseGenerique {
    constructor (hover){
        super("images/Memoire44/base/h_forest.webp", 1, {Soldat:-1,Tank:-2}, true, false, true, true, "images/Memoire44/card/base/forest-fr.webp", false, "", undefined, `new Forest(`);
    }
}

export class Village extends CaseGenerique{
    constructor() {
        super("images/Memoire44/base/h_village.webp", 1, {Soldat:-1,Tank:-2}, true, false, true, true, "images/Memoire44/card/base/village-fr.webp", false, "", undefined, `new Village(`);
    }
}

export class Bridge extends CaseGenerique{
    constructor(orientation){
        super(test6("base","o_bridge",orientation), 6, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, `new Bridge(`);
    }
}

export class RiversRight extends CaseGenerique{
    constructor(orientation){
        super(test3("base","h_river",orientation), 3, false, false, false, false, false, false, false, "brightness-[0.9] contrast-[1.2] saturate-[1.2] ", undefined, `new RiversRight(`); 
    }
}

export class RiversCurve extends CaseGenerique{
    constructor(orientation){
        super(test6("base","h_curve",orientation), 6, false, false, false, false, false, false, false, "brightness-[0.9] contrast-[1.2] saturate-[1.2] ", undefined, `new RiversCurve(`);
        }
}

export class Mine extends CaseGenerique{
    constructor(orientation) {
        super(orientation >= 0 ? orientation === 0 ? "images/Memoire44/terrain/mine_0.webp" : test3("terrain","mine_",orientation):"images/Memoire44/terrain/mine.webp", 1, true, false, true, true, "", undefined, undefined, undefined,undefined, `new Mine(`);
        this._nb = null;
    }
    reveal(){
        let nb = Math.floor(Math.random()*4)
        this._nb = nb;
        return {bunker:new Mine(nb),nb:nb}
    }
    getNb(){
        return this._nb;
    }
}

export function returnHexagone(text,orientation){
    

    switch(text){
        case "Country":
            return {hexagone:new Country(),orientation:0}
        case "Hills":
            return {hexagone: new Hills(),orientation:0}
        case "Forest":
            return {hexagone: new Forest(),orientation:0}
        case "Hedgerow":
            return {hexagone: new Hedgerow(),orientation:0}
        case "Village":
            return {hexagone: new Village(),orientation:0}
        case "RiversRight":
            return {hexagone: new RiversRight(orientation),orientation:3}
        case "RiversCurve":
            return {hexagone: new RiversCurve(orientation),orientation:6}
        case "Bridge":
            return {hexagone: new Bridge(orientation),orientation:6}
        case "Bunker":
            return {hexagone: new Bunker(orientation),orientation:6}
        case "SandBag":
            return {hexagone: new SandBag(orientation),orientation:2}
        case "Hedgehog":
            return {hexagone: new Hedgehog(),orientation:0}
        case "Wire":
            return {hexagone: new Wire(),orientation:0}
        case "RoadRight":
            return {hexagone: new RoadRight(orientation),orientation:3}
        case "RoadCurve":
            return {hexagone: new RoadCurve(orientation),orientation:6}
        case "RoadHillRight":
            return {hexagone: new RoadHillRight(orientation),orientation:3}
        case "RoadHillCurve":
            return {hexagone: new RoadHillCurve(orientation),orientation:6}
        case "RoadBranchLeft":
            return {hexagone: new RoadBranchLeft(orientation),orientation:6}
        case "RoadBranchRight":
            return {hexagone: new RoadBranchRight(orientation),orientation:6}
        case "RoadX":
            return {hexagone: new RoadX(orientation),orientation:6}
        case "RoadY":
            return {hexagone: new RoadY(orientation),orientation:2}
        case "RiverBranchLeft":
            return {hexagone: new RiverBranchLeft(orientation),orientation:6}
        case "RiverBranchRight":
            return {hexagone: new RiverBranchRight(orientation),orientation:6}
        case "RiverY":
            return {hexagone: new RiverY(orientation),orientation:2}
        case "AirField":
            return {hexagone: new AirField(orientation),orientation:3}
        case "AirFieldX":
            return {hexagone: new AirFieldX(orientation),orientation:3}
        case "Church":
            return {hexagone: new Church(),orientation:0}      
        case "Mine":
            return {hexagone: new Mine(),orientation:0} 
        case "Mountain":
            return {hexagone: new Mountain(),orientation:0} 
        case "MedalAxe":
            return {hexagone: new Medal(true),orientation:0} 
        case "MedalAllies":
            return {hexagone: new Medal(false),orientation:0} 
        case "Barracks":
            return {hexagone: new Barracks(),orientation:0}
        case "Camp":
            return {hexagone: new Camp(),orientation:0}
        case "Cemetery":
            return {hexagone: new Cemetery(),orientation:0}
        case "Dam":
            return {hexagone: new Dam(orientation),orientation:6}
        case "LakeA":
            return {hexagone: new LakeA(orientation),orientation:6}
        case "LakeB":
            return {hexagone: new LakeB(orientation),orientation:6}
        case "LakeC":
            return {hexagone: new LakeC(orientation),orientation:6}
        case "Pond":
            return {hexagone: new Pond(orientation),orientation:6}
        case "Depot":
            return {hexagone: new Depot(),orientation:0}
        case "Factory":
            return {hexagone: new Factory(),orientation:0}
        case "Fortress":
            return {hexagone: new Fortress(),orientation:0}
        case "LightHouse":
            return {hexagone: new LightHouse(),orientation:0}
        case "Marshes":
            return {hexagone: new Marshes(),orientation:0}
        case "TrainRight":
            return {hexagone: new TrainRight(orientation),orientation:3}
        case "TrainCurve":
            return {hexagone: new TrainCurve(orientation),orientation:6}
        case "TrainBranchLeft":
            return {hexagone: new TrainBranchLeft(orientation),orientation:6}
        case "TrainBranchRight":
            return {hexagone: new TrainBranchRight(orientation),orientation:6}
        case "TrainX":
            return {hexagone: new TrainX(orientation),orientation:3}
        case "TrainXRoad":
            return {hexagone: new TrainXRoad(orientation),orientation:3}
        case "Station":
            return {hexagone: new Station(orientation),orientation:3}
        case "Pontoon":
            return {hexagone: new Pontoon(orientation),orientation:6}
        case "RailBridge":
            return {hexagone: new RailBridge(orientation),orientation:6}
        case "Loco":
            return {hexagone: new Loco(orientation),orientation:6}
        case "Wagon":
            return {hexagone: new Wagon(orientation),orientation:6}
        case "Ford":
            return {hexagone: new Ford(orientation),orientation:6}
        case "RoadBlock":
            return {hexagone: new RoadBlock(orientation),orientation:6}
        case "Casemate":
            return {hexagone: new Casemate(),orientation:0}
        case "SnowTrainRight":
            return {hexagone:new SnowTrainRight(orientation),orientation:3}
        case "SnowTrainCurve":
            return {hexagone:new SnowTrainCurve(orientation),orientation:6}
        case "SnowTrainBranchLeft":
            return {hexagone: new SnowTrainBranchLeft(orientation),orientation:6}
        case "SnowTrainBranchRight":
            return {hexagone: new SnowTrainBranchRight(orientation),orientation:6}
        case "SnowStation":
            return {hexagone: new SnowStation(orientation),orientation:3}
        case "SnowForest":
            return {hexagone: new SnowForest(),orientation:0}
        case "SnowHill":
            return {hexagone: new SnowHill(),orientation:0}
        case "SnowVillage":
            return {hexagone: new SnowVillage(),orientation:0}
        case "SnowRiversRight":
            return {hexagone: new SnowRiversRight(orientation),orientation:3}
        case "SnowRiversCurve":
            return {hexagone: new SnowRiversCurve(orientation),orientation:6}
        case "SnowRiverY":
            return {hexagone: new SnowRiverY(orientation),orientation:3}
        case "SnowFactory":
            return {hexagone: new SnowFactory(),orientation:0}
        case "SnowAirField":
            return {hexagone: new SnowAirField(orientation),orientation:3}
        case "SnowAirFieldX":
            return {hexagone: new SnowAirFieldX(orientation),orientation:3}
        case "SnowRoadRight":
            return {hexagone: new SnowRoadRight(orientation),orientation:3}
        case "SnowRoadCurve":
            return {hexagone: new SnowRoadCurve(orientation),orientation:6}
        case "SnowRiverBranchLeft":
            return {hexagone: new SnowRiverBranchLeft(orientation),orientation:6}
        case "SnowRiverBranchRight":
            return {hexagone: new SnowRiverBranchRight(orientation),orientation:6}
        case "SnowTrainX":
            return {hexagone: new SnowTrainX(orientation),orientation:3}
        case "SnowTrainXRoad":
            return {hexagone: new SnowTrainXRoad(orientation),orientation:3}  
        case "SnowRoadBranchRight":
            return {hexagone: new SnowRoadBranchRight(orientation),orientation:6}
        case "SnowRoadBranchLeft":
            return {hexagone: new SnowRoadBranchLeft(orientation),orientation:6} 
        case "SnowRoadX":
            return {hexagone: new SnowRoadX(orientation),orientation:3} 
        case "SnowRoadY":
            return {hexagone: new SnowRoadY(orientation),orientation:3} 
        case "SnowMountain":
            return {hexagone: new SnowMountain(),orientation:0} 
        case "SnowHedgerow":
            return {hexagone: new SnowHedgerow(),orientation:0} 
        case "SnowRoadHillRight":
            return {hexagone: new SnowRoadHillRight(orientation),orientation:3}  
        case "SnowRoadHillCurve":
            return {hexagone: new SnowRoadHillCurve(orientation),orientation:6}
        case "SnowFortress":
            return {hexagone: new SnowFortress(),orientation:0}
        case "SnowLightHouse":
            return {hexagone: new SnowLightHouse(),orientation:0}
        case "SnowMarshes":
            return {hexagone: new SnowMarshes(),orientation:0}
        case "SnowChurch":
            return {hexagone: new SnowChurch(),orientation:0}
        case "SnowBarracks":
            return {hexagone: new SnowBarracks(),orientation:0}
        case "SnowCamp":
            return {hexagone: new SnowCamp(),orientation:0}
        case "SnowCemetery":
            return {hexagone: new SnowCemetery(),orientation:0}
        case "SnowDepot":
            return {hexagone: new SnowDepot(),orientation:0}
        case "SnowDam":
            return {hexagone: new SnowDam(orientation),orientation:6}
        case "SnowPond":
            return {hexagone: new SnowPond(orientation), orientation:6}
        case "SnowLakeA":
            return {hexagone: new SnowLakeA(orientation), orientation:6}
        case "SnowLakeB":
            return {hexagone: new SnowLakeB(orientation), orientation:6}
        case "SnowLakeC":
            return {hexagone: new SnowLakeC(orientation), orientation:6}
        case "SnowBunker":
            return {hexagone: new SnowBunker(orientation),orientation:2}
        case "SnowDragonTeeth":
            return {hexagone: new SnowDragonTeeth(orientation),orientation:3}
        case "":
            return {hexagone: null,orientation:0}
        default:
            return null;
    }
}

//        case "":
// return {hexagone: null,orientation:0}

