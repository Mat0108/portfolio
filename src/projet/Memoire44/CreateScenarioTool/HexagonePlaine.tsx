
import { ArtillerieAllies, ArtillerieAxis, ArtillerieEastern, CharAllies, CharAxis, CharEastern, SoldatAllies, SoldatAxis, SoldatEastern } from "../army/army"
import { Bridge, Bunker, CountryVide, Forest, Hedgehow, Hedgerow, Hills, Mine, RiversCurve, RiversRight, SandBag, Village, Wire } from "../haxagone/base"
import { Medal } from "../haxagone/highlight"
import { AirField, AirFieldX, Barracks, Camp, Casemate, Cemetery, Church, Dam, Depot, Factory, Ford, Fortress, LakeA, LakeB, LakeC, LightHouse, Loco, Marshes, Mountain, Pond, Pontoon, RailBridge, RiverBranchLeft, RiverBranchRight, RiverY, RoadBlock, RoadBranchLeft, RoadBranchRight, RoadCurve, RoadHillCurve, RoadHillRight, RoadRight, RoadX, RoadY, Station, TrainBranchLeft, TrainBranchRight, TrainCurve, TrainRight, TrainX, TrainXRoad, Wagon } from "../haxagone/terrain"

export const HexagonePlaine = ()=>{
    return [
        new CountryVide(),
        new Hills(),
        new Mountain(),
        new Forest(),
        new Hedgerow(),
        new RiversRight(),
        new RiversCurve(),
        new RiverBranchLeft(),
        new RiverBranchRight(),
        new RiverY(),
        new Dam(),
        new Pond(),
        new LakeA(),
        new LakeB(),
        new LakeC(),
        new RoadRight(),
        new RoadCurve(),
        new RoadBranchLeft(),
        new RoadBranchRight(),
        new RoadX(),
        new RoadY(),
        new RoadHillRight(),
        new RoadHillCurve(),
        new AirField(),
        new AirFieldX(),
        new Village(),
        new Church(),
        new Barracks(),
        new Camp(),
        new Cemetery(),
        new Depot(),
        new Factory(),
        new Fortress(),
        new LightHouse(),
        new Marshes(),
        new TrainRight(),
        new TrainCurve(),
        new TrainBranchLeft(),
        new TrainBranchRight(),
        new TrainX(),
        new TrainXRoad(),
        new Station() 
    ]
}
export const DiversPlaine = () => {
    return [
        new CountryVide(),
        new Bunker(),
        new Casemate(),
        new Bridge(),
        new Ford(),
        new RoadBlock(),
        new Pontoon(),
        new RailBridge(),
        new Loco(),
        new Wagon(),
        new Mine()   
    ]
}
export const HexaDefense = () =>{
    return [
        new CountryVide(),
        new SandBag(),
        new Hedgehow(),
        new Wire()
    ]
}

export const HexaUnité = () => {
    return [
        new CountryVide(),
        new SoldatAxis(),
        new CharAxis(),
        new ArtillerieAxis(),
        new CountryVide(),
        new SoldatAllies(),
        new CharAllies(),
        new ArtillerieAllies(),
        new CountryVide(),
        new SoldatEastern(),
        new CharEastern(),
        new ArtillerieEastern()
    ]
}
export const HexaMedal = ()=>{
    return [
        new CountryVide(),
        new Medal(true),
        new Medal(false)
    ]
}