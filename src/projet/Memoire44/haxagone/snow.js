import { CaseGenerique, test2, test3, test6 } from "../divers/Generique";

export class SnowCountry extends CaseGenerique{
    constructor(){
        super(`images/Memoire44/snow/h_wintervide.webp`,1,false,true,false,true,false,false,false," ")
    }
}
export class SnowTrainRight extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowrail",orientation),3,false,false,false,false,false,false,false," ")
    }
}
export class SnowTrainCurve extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowrailcurve",orientation),6,false,false,false,false,false,false,false," ")
    }
}
export class SnowTrainBranchLeft extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowrailFL",orientation),6,false,false,false,false,false,false,false," ")
    }
}

export class SnowTrainBranchRight extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowrailFR",orientation),6,false,false,false,false,false,false,false," ")
    }
}
export class SnowStation extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowstation",orientation),6,false,false,false,false,false,false,false," ")
    }
}

export class SnowForest extends CaseGenerique{
    constructor(orientation){
        super(`images/Memoire44/snow/h_wforest.webp`,1,{Soldat:-2,Tank:-2},true,false,true,false,false,false," ")
    }
}
export class SnowHill extends CaseGenerique{
    constructor(orientation){
        super(`images/Memoire44/snow/h_whill.webp`,1,{Soldat:-2,Tank:-2},true,false,true,false,false,false," ")
    }
}
export class SnowVillage extends CaseGenerique{
    constructor(orientation){
        super(`images/Memoire44/snow/h_wvillage.webp`,1,{Soldat:-2,Tank:-2},true,false,true,false,false,false," ")
    }
}

export class SnowRiversRight extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowriver",orientation),3,false,false,false,false,false,false,false,"")   
    }
}
export class SnowRiversCurve extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowcurved",orientation),6,false,false,false,false,false,false,false," ")
           }
}
export class SnowRiverBranchLeft extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowriverFL",orientation),6,false,false,false,false,false,false,false," ")
    }
}
export class SnowRiverBranchRight extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowriverFR",orientation),6,false,false,false,false,false,false,false," ")
    }
}
export class SnowFactory extends CaseGenerique{
    constructor(orientation){
        super(`images/Memoire44/snow/h_wfactory.webp`,1,{Soldat:-2,Tank:-2},true,false,true,false,false,false," ")
    }
}

export class SnowAirField extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_wairfield",orientation),3,false,false,false,false,false,false,false,"")   
    }
}
export class SnowAirFieldX extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_wairfieldX",orientation),3,false,false,false,false,false,false,false,"")   
    }
}
export class SnowRoadRight extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowroad",orientation),3,false,false,false,false,false,false,false," ")
    }
}
export class SnowRoadCurve extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowroadcurve",orientation),6,false,false,false,false,false,false,false," ")
    }
}
export class SnowRiverY extends CaseGenerique {
    constructor(orientation){
        super(test2("snow","h_snowriverY",orientation),2,false,false,false,false,false,false,false,"  ")
    }
}
export class SnowTrainX extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowrailX",orientation),3,false,false,false,false,false,false,false," ")
    }
}
export class SnowTrainXRoad extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowrailroad",orientation),3,false,false,false,false,false,false,false," ")
    }
}

export class SnowRoadX extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowroadX",orientation),3,false,false,false,false,false,false,false,"")
    }
}
export class SnowRoadY extends CaseGenerique{
    constructor(orientation){
        super(test2("snow","h_snowroadY",orientation),2,false,false,false,false,false,false,false,"")
    }
}
export class SnowRoadBranchLeft extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowroadFL",orientation),6,false,false,false,false,false,false,false,"")
    }
}

export class SnowRoadBranchRight extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowroadFR",orientation),6,false,false,false,false,false,false,false,"")
    }
}
export class SnowMountain extends CaseGenerique{
    constructor(orientation){
        super(`images/Memoire44/snow/h_snowmountain.webp`,null,{Soldat:-2,Tank:-2},true,false,true,false,false,false," ")
    }
}
export class SnowHedgerow extends CaseGenerique{
    constructor(orientation){
        super(`images/Memoire44/snow/h_snowhedgerow.webp`,null,{Soldat:-2,Tank:-2},true,false,true,false,false,false," ")
    }
}

export class SnowRoadHillRight extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowhillroad",orientation),3,false,false,false,false,false,false,false,"")
    }
}
export class SnowRoadHillCurve extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowhillcurve",orientation),6,false,false,false,false,false,false,false,"")
    }
}
export class SnowFortress extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/snow/h_snowfortress.webp`,1,false,false,false,false,false,false,false," ")
    }
}
export class SnowLightHouse extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/snow/h_snowlighthouse.webp`,1,false,false,false,false,false,false,false,"")
    }
}
export class SnowMarshes extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/snow/h_snowmarshes.webp`,1,false,false,false,false,false,false,false,"")
    }
}
export class SnowChurch extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/snow/h_snowchurch.webp`,1,false,false,false,false,false,false,false,"")
    }
}

export class SnowBarracks extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/snow/h_snowbarracks.webp`,1,false,false,false,false,false,false,false,"")
    }
}

export class SnowCamp extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/snow/h_snowcamp.webp`,1,false,false,false,false,false,false,false,"")
    }
}

export class SnowCemetery extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/snow/h_snowcemetery.webp`,1,false,false,false,false,false,false,false,"")
    }
}

export class SnowDepot extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/snow/h_snowdepot.webp`,1,false,false,false,false,false,false,false,"")
    }
}

export class SnowDam extends CaseGenerique {
    constructor(orientation){
        super(test6('snow',"h_snowdam",orientation),1,false,false,false,false,false,false,false,"")
    }
}

export class SnowLakeA extends CaseGenerique {
    constructor(orientation){
        super(test6('snow',"h_snowlakeA",orientation),6,false,false,false,false,false,false,false,"")
    }
}
export class SnowLakeB extends CaseGenerique {
    constructor(orientation){
        super(test6('snow',"h_snowlakeB",orientation),6,false,false,false,false,false,false,false," ")
    }
}
export class SnowLakeC extends CaseGenerique {
    constructor(orientation){
        super(test6('snow',"h_snowlakeC",orientation),6,false,false,false,false,false,false,false,"")
    }
}
export class SnowPond extends CaseGenerique {
    constructor(orientation){
        super(test6('snow',"h_snowpond",orientation),6,false,false,false,false,false,false,false," ")
    }
}
export class SnowBunker extends CaseGenerique{
    constructor (orientation){
        super(test2("snow","o_wbunker",orientation),2,{Soldat:-1,Tank:-2},true,true,true)
    }
}
export class SnowDragonTeeth extends CaseGenerique{
    constructor (orientation){
        super(test3("snow","o_dragonteeth",orientation),3,null,true,true,true)
    }
}
export class SnowLoco extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","o_wloco",orientation),6,null,true,true,true)
    }
}
export class SnowWagon extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","w_wagon",orientation),3,null,true,true,true)
    }
}
export class SnowCasemate extends CaseGenerique{
    constructor(){
        super(`images/Memoire44/snow/w_casemate.webp`,1,null,true,true,true)
    }
}
export class SnowBridge extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","w_bridge",orientation),1,null,true,true,true)
    }
}
export class SnowRoadBlock extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","w_roadblock",orientation),6,null,true,true,true)
    }
}
//how edit snow image
// saturation -16 87 0
// baguette magique tolerance 31