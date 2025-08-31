import { setDefaultModelSchema, getDefaultModelSchema } from "serializr";
import { CaseGenerique, test2, test3, test6 } from "../divers/Generique";

export class Mountain extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/terrain/h_mountain.webp`, 1, {Soldat:-2,Tank:-2}, true, false, true, false, false, false, "brightness-[90%]", undefined, `new Mountain(`);
    }
}
setDefaultModelSchema(Mountain, getDefaultModelSchema(CaseGenerique));

export class RoadRight extends CaseGenerique {
    constructor(orientation){
        super(test3("terrain","h_road",orientation), 3, false, false, false, false, false, false, false, "darker", undefined, `new RoadRight(`);
    }
}
setDefaultModelSchema(RoadRight, getDefaultModelSchema(CaseGenerique));

export class RoadCurve extends CaseGenerique {
    constructor(orientation){
        super(test6("terrain","h_roadcurve",orientation), 6, false, false, false, false, false, false, false, "darker", undefined, `new RoadCurve(`);
    }
}
setDefaultModelSchema(RoadCurve, getDefaultModelSchema(CaseGenerique));

export class RoadHillRight extends CaseGenerique {
    constructor(orientation){
        super(test3("terrain","h_hillroad",orientation), 3, false, false, false, false, false, false, false, "darker", undefined, `new RoadHillRight(`);
    }
}
setDefaultModelSchema(RoadHillRight, getDefaultModelSchema(CaseGenerique));

export class RoadHillCurve extends CaseGenerique {
    constructor(orientation){
        super(test6("terrain","h_hillcurve",orientation), 6, false, false, false, false, false, false, false, "darker", undefined, `new RoadHillCurve(`);
    }
}
setDefaultModelSchema(RoadHillCurve, getDefaultModelSchema(CaseGenerique));

export class RoadBranchLeft extends CaseGenerique {
    constructor(orientation){
        super(test6("terrain","h_roadFL",orientation), 6, false, false, false, false, false, false, false, "darker", undefined, `new RoadBranchLeft(`);
    }
}
setDefaultModelSchema(RoadBranchLeft, getDefaultModelSchema(CaseGenerique));

export class RoadBranchRight extends CaseGenerique {
    constructor(orientation){
        super(test6("terrain","h_roadFR",orientation), 6, false, false, false, false, false, false, false, "darker", undefined, `new RoadBranchRight(`);
    }
}
setDefaultModelSchema(RoadBranchRight, getDefaultModelSchema(CaseGenerique));

export class RoadX extends CaseGenerique {
    constructor(orientation){
        super(test3("terrain","h_roadX",orientation), 3, false, false, false, false, false, false, false, "darker", undefined, `new RoadX(`);
    }
}
setDefaultModelSchema(RoadX, getDefaultModelSchema(CaseGenerique));

export class RoadY extends CaseGenerique {
    constructor(orientation){
        super(test2("terrain","h_roadY",orientation), 2, false, false, false, false, false, false, false, "darker", undefined, `new RoadY(`);
    }
}
setDefaultModelSchema(RoadY, getDefaultModelSchema(CaseGenerique));

export class RiverBranchLeft extends CaseGenerique {
    constructor(orientation){
        super(test6("terrain","h_riverFL",orientation), 6, false, false, false, false, false, false, false, " brightness-[0.80] contrast-[1.2] saturate-[1.2] ", undefined, `new RiverBranchLeft(`);
    }
}
setDefaultModelSchema(RiverBranchLeft, getDefaultModelSchema(CaseGenerique));

export class RiverBranchRight extends CaseGenerique {
    constructor(orientation){
        super(test6("terrain","h_riverFR",orientation), 6, false, false, false, false, false, false, false, " brightness-[0.80] contrast-[1.2] saturate-[1.2] ", undefined, `new RiverBranchRight(`);
    }
}
setDefaultModelSchema(RiverBranchRight, getDefaultModelSchema(CaseGenerique));

export class RiverY extends CaseGenerique {
    constructor(orientation){
        super(test2("terrain","h_riverY",orientation), 2, false, false, false, false, false, false, false, "brightness-[0.80] contrast-[1.2] saturate-[1.2]  ", undefined, `new RiverY(`);
    }
}
setDefaultModelSchema(RiverY, getDefaultModelSchema(CaseGenerique));

export class AirField extends CaseGenerique {
    constructor(orientation){
        super(test3("terrain","h_airfield",orientation), 3, false, false, false, false, false, false, false, "brightness-[0.7] ", undefined, `new AirField(`);
    }
}
setDefaultModelSchema(AirField, getDefaultModelSchema(CaseGenerique));

export class AirFieldX extends CaseGenerique {
    constructor(orientation){
        super(test3("terrain","h_airfieldX",orientation), 3, false, false, false, false, false, false, false, "brightness-[0.7] ", undefined, `new AirFieldX(`);
    }
}
setDefaultModelSchema(AirFieldX, getDefaultModelSchema(CaseGenerique));

export class Church extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/terrain/h_church.webp`, 1, false, false, false, false, false, false, false, "brightness-[0.7] ", undefined, `new Church(`);
    }
}
setDefaultModelSchema(Church, getDefaultModelSchema(CaseGenerique));

export class Barracks extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/terrain/h_barracks.webp`, 1, false, false, false, false, false, false, false, "brightness-[0.7] ", undefined, `new Barracks(`);
    }
}
setDefaultModelSchema(Barracks, getDefaultModelSchema(CaseGenerique));

export class Camp extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/terrain/h_camp.webp`, 1, false, false, false, false, false, false, false, "brightness-[0.7] ", undefined, `new Camp(`);
    }
}
setDefaultModelSchema(Camp, getDefaultModelSchema(CaseGenerique));

export class Cemetery extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/terrain/h_cemetery.webp`, 1, false, false, false, false, false, false, false, "brightness-[0.7] ", undefined, `new Cemetery(`);
    }
}
setDefaultModelSchema(Cemetery, getDefaultModelSchema(CaseGenerique));

export class Dam extends CaseGenerique {
    constructor(orientation){
        super(test6('terrain',"h_dam",orientation), 6, false, false, false, false, false, false, false, " brightness-[0.80] contrast-[1.2] saturate-[1.2]  ", undefined, `new Dam(`);
    }
}
setDefaultModelSchema(Dam, getDefaultModelSchema(CaseGenerique));

export class LakeA extends CaseGenerique {
    constructor(orientation){
        super(test6('terrain',"h_lakeA",orientation), 6, false, false, false, false, false, false, false, " brightness-[0.80] contrast-[1.2] saturate-[1.2] ", undefined, `new LakeA(`);
    }
}
setDefaultModelSchema(LakeA, getDefaultModelSchema(CaseGenerique));

export class LakeB extends CaseGenerique {
    constructor(orientation){
        super(test6('terrain',"h_lakeB",orientation), 6, false, false, false, false, false, false, false, " brightness-[0.80] contrast-[1.2] saturate-[1.2] ", undefined, `new LakeB(`);
    }
}
setDefaultModelSchema(LakeB, getDefaultModelSchema(CaseGenerique));

export class LakeC extends CaseGenerique {
    constructor(orientation){
        super(test6('terrain',"h_lakeC",orientation), 6, false, false, false, false, false, false, false, " brightness-[0.80] contrast-[1.2] saturate-[1.2]  ", undefined, `new LakeC(`);
    }
}
setDefaultModelSchema(LakeC, getDefaultModelSchema(CaseGenerique));

export class Pond extends CaseGenerique {
    constructor(orientation){
        super(test6('terrain',"h_pond",orientation), 6, false, false, false, false, false, false, false, " brightness-[0.80] contrast-[1.2] saturate-[1.2]  ", undefined, `new Pond(`);
    }
}
setDefaultModelSchema(Pond, getDefaultModelSchema(CaseGenerique));

export class Depot extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/terrain/h_depot.webp`, 1, false, false, false, false, false, false, false, "brightness-[0.7] ", undefined, `new Depot(`);
    }
}
setDefaultModelSchema(Depot, getDefaultModelSchema(CaseGenerique));

export class Factory extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/terrain/h_factory.webp`, 1, false, false, false, false, false, false, false, "brightness-[0.7] ", undefined, `new Factory(`);
    }
}
setDefaultModelSchema(Factory, getDefaultModelSchema(CaseGenerique));

export class Fortress extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/terrain/h_fortress.webp`, 1, false, false, false, false, false, false, false, "brightness-[0.7] ", undefined, `new Fortress(`);
    }
}
setDefaultModelSchema(Fortress, getDefaultModelSchema(CaseGenerique));

export class LightHouse extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/terrain/h_lighthouse.webp`, 1, false, false, false, false, false, false, false, "brightness-[0.7] ", undefined, `new LightHouse(`);
    }
}
setDefaultModelSchema(LightHouse, getDefaultModelSchema(CaseGenerique));

export class Marshes extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/terrain/h_marshes.webp`, 1, false, false, false, false, false, false, false, "brightness-[0.7] ", undefined, `new Marshes(`);
    }
}
setDefaultModelSchema(Marshes, getDefaultModelSchema(CaseGenerique));

export class TrainRight extends CaseGenerique {
    constructor(orientation){
        super(test3("terrain","h_rail",orientation), 3, false, false, false, false, false, false, false, "brightness-[0.7] ", undefined, `new TrainRight(`);
    }
}
setDefaultModelSchema(TrainRight, getDefaultModelSchema(CaseGenerique));

export class TrainCurve extends CaseGenerique {
    constructor(orientation){
        super(test6("terrain","h_railcurve",orientation), 6, false, false, false, false, false, false, false, "brightness-[0.7] ", undefined, `new TrainCurve(`);
    }
}
setDefaultModelSchema(TrainCurve, getDefaultModelSchema(CaseGenerique));

export class TrainBranchLeft extends CaseGenerique {
    constructor(orientation){
        super(test6("terrain","h_railFL",orientation), 6, false, false, false, false, false, false, false, "brightness-[0.7] ", undefined, `new TrainBranchLeft(`);
    }
}
setDefaultModelSchema(TrainBranchLeft, getDefaultModelSchema(CaseGenerique));

export class TrainBranchRight extends CaseGenerique {
    constructor(orientation){
        super(test6("terrain","h_railFR",orientation), 6, false, false, false, false, false, false, false, "brightness-[0.7] ", undefined, `new TrainBranchRight(`);
    }
}
setDefaultModelSchema(TrainBranchRight, getDefaultModelSchema(CaseGenerique));

export class TrainX extends CaseGenerique {
    constructor(orientation){
        super(test3("terrain","h_railX",orientation), 3, false, false, false, false, false, false, false, "brightness-[0.7] ", undefined, `new TrainX(`);
    }
}
setDefaultModelSchema(TrainX, getDefaultModelSchema(CaseGenerique));

export class TrainXRoad extends CaseGenerique {
    constructor(orientation){
        super(test3("terrain","h_railroad",orientation), 3, false, false, false, false, false, false, false, "brightness-[0.7] ", undefined, `new TrainXRoad(`);
    }
}
setDefaultModelSchema(TrainXRoad, getDefaultModelSchema(CaseGenerique));

export class Station extends CaseGenerique {
    constructor(orientation){
        super(test3("terrain","h_station",orientation), 3, false, false, false, false, false, false, false, "brightness-[0.7] ", undefined, `new Station(`);
    }
}
setDefaultModelSchema(Station, getDefaultModelSchema(CaseGenerique));

export class Pontoon extends CaseGenerique {
    constructor(orientation){
        super(test6("terrain","o_pontoon",orientation), 6, false, false, false, false, false, false, false, "brightness-[0.7] ", undefined, `new Pontoon(`);
    }
}
setDefaultModelSchema(Pontoon, getDefaultModelSchema(CaseGenerique));

export class RailBridge extends CaseGenerique {
    constructor(orientation){
        super(test6("terrain","o_railbridge",orientation), 6, false, false, false, false, false, false, false, "", undefined, `new RailBridge(`);
    }
}
setDefaultModelSchema(RailBridge, getDefaultModelSchema(CaseGenerique));

export class Loco extends CaseGenerique {
    constructor(orientation){
        super(test6("terrain","o_loco",orientation), 6, false, false, false, false, false, false, false, "", undefined, `new Loco(`);
    }
}
setDefaultModelSchema(Loco, getDefaultModelSchema(CaseGenerique));

export class Wagon extends CaseGenerique {
    constructor(orientation){
        super(test6("terrain","o_wagon",orientation), 6, false, false, false, false, false, false, false, "", undefined, `new Wagon(`);
    }
}
setDefaultModelSchema(Wagon, getDefaultModelSchema(CaseGenerique));

export class Ford extends CaseGenerique {
    constructor(orientation){
        super(test3("terrain","o_ford",orientation), 3, false, false, false, false, false, false, false, "", undefined, `new Ford(`);
    }
}
setDefaultModelSchema(Ford, getDefaultModelSchema(CaseGenerique));

export class RoadBlock extends CaseGenerique {
    constructor(orientation){
        super(test3("terrain","o_roadblock",orientation), 3, false, false, false, false, false, false, false, "", undefined, `new RoadBlock(`);
    }
}
setDefaultModelSchema(RoadBlock, getDefaultModelSchema(CaseGenerique));

export class Casemate extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/terrain/o_casemate.webp`, 1, false, false, false, false, false, false, false, "", undefined, `new Casemate(`);
    }
}
setDefaultModelSchema(Casemate, getDefaultModelSchema(CaseGenerique));
