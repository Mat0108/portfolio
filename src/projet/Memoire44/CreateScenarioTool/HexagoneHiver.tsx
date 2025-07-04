import { SnowAirField, SnowAirFieldX, SnowBarracks, SnowBridge, SnowBunker, SnowCamp, SnowCasemate, SnowCemetery, SnowChurch, SnowCountry, SnowDam, SnowDepot, SnowDragonTeeth, SnowFactory, SnowForest, SnowFortress, SnowHedgerow, SnowHill, SnowLakeA, SnowLakeB, SnowLakeC, SnowLightHouse, SnowLoco, SnowMarshes, SnowMountain, SnowPond, SnowRiverBranchLeft, SnowRiverBranchRight, SnowRiversCurve, SnowRiversRight, SnowRiverY, SnowRoadBlock, SnowRoadBranchLeft, SnowRoadBranchRight, SnowRoadCurve, SnowRoadHillCurve, SnowRoadHillRight, SnowRoadRight, SnowRoadX, SnowRoadY, SnowStation, SnowTrainBranchLeft, SnowTrainBranchRight, SnowTrainCurve, SnowTrainRight, SnowTrainX, SnowTrainXRoad, SnowVillage, SnowWagon } from "../haxagone/snow" 
import { Pontoon, RailBridge } from "../haxagone/terrain"
import { Mine } from "../haxagone/base"

export const HexagoneHiver = ()=>{
    return [
        new SnowCountry(),
        new SnowHill(),
        new SnowMountain(),
        new SnowForest(),
        new SnowHedgerow(),
        new SnowRiversRight(),
        new SnowRiversCurve(),
        new SnowRiverBranchLeft(),
        new SnowRiverBranchRight(),
        new SnowRiverY(),
        new SnowDam(),
        new SnowPond(),
        new SnowLakeA(),
        new SnowLakeB(),
        new SnowLakeC(),
        new SnowRoadRight(),
        new SnowRoadCurve(),
        new SnowRoadBranchLeft(),
        new SnowRoadBranchRight(),
        new SnowRoadX(),
        new SnowRoadY(),
        new SnowRoadHillRight(),
        new SnowRoadHillCurve(),
        new SnowAirField(),
        new SnowAirFieldX(),
        new SnowVillage(),
        new SnowChurch(),
        new SnowBarracks(),
        new SnowCamp(),
        new SnowCemetery(),
        new SnowDepot(),
        new SnowFactory(),
        new SnowFortress(),
        new SnowLightHouse(),
        new SnowMarshes(),
        new SnowTrainRight(),
        new SnowTrainCurve(),
        new SnowTrainBranchLeft(),
        new SnowTrainBranchRight(),
        new SnowTrainX(),
        new SnowTrainXRoad(),
        new SnowStation()

    ]
}

export const DiversHiver = ()=>{
    return [
        new SnowCountry(),
        new SnowBunker(),
        new SnowDragonTeeth(),
        new SnowCasemate(),
        new SnowBridge(),
        new SnowRoadBlock(),
        new Pontoon(),
        new RailBridge(),
        new SnowLoco(),
        new SnowWagon(),
        new Mine() 
    ]
}
