import { setDefaultModelSchema, getDefaultModelSchema } from "serializr";
import { CaseGenerique, test3, test6 } from "../divers/Generique";

export class Country extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/base/h_country-1-1.webp`, 1, {Soldat:-1,Tank:-1}, false, true, false, false, undefined, undefined, undefined, undefined, `new Country(`);
    }
}
setDefaultModelSchema(Country, getDefaultModelSchema(CaseGenerique));

export class CountryVide extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/base/h_countryvide.webp`, 1, {Soldat:-1,Tank:-1}, false, true, false, false, undefined, undefined, undefined, undefined, `new CountryVide(`);
    }
}
setDefaultModelSchema(CountryVide, getDefaultModelSchema(CaseGenerique));

export class SandBag extends CaseGenerique {
    constructor(orientation){
        super(`images/Memoire44/base/${orientation === 1 ?"o_sand1":"o_sand2"}.webp`, 2, {Soldat:-1,Tank:-1}, false, true, false, false, "images/Memoire44/card/base/sandbags-fr.webp", undefined, undefined, undefined, `new SandBag(`);
    }
}
setDefaultModelSchema(SandBag, getDefaultModelSchema(CaseGenerique));

export class Wire extends CaseGenerique{
    constructor (){
        super("images/Memoire44/base/o_wire.webp", 1, {Soldat:-1}, false, false, false, {Soldat:true}, undefined, undefined, undefined, undefined, `new Wire(`);
    }
}
setDefaultModelSchema(Wire, getDefaultModelSchema(CaseGenerique));

export class Hedgehog extends CaseGenerique{
    constructor (){
        super("images/Memoire44/base/o_hedgehog.webp", 1, true, false, false, false, {Tank:true}, undefined, undefined, undefined, undefined, `new Hedgehog(`);
    }
}
setDefaultModelSchema(Hedgehog, getDefaultModelSchema(CaseGenerique));

export class Hedgerow extends CaseGenerique{
    constructor (){
        super("images/Memoire44/base/h_hedgerow.webp", 1, true, false, false, false, undefined, undefined, undefined, undefined,undefined, `new Hedgerow(`);
    }
}
setDefaultModelSchema(Hedgerow, getDefaultModelSchema(CaseGenerique));

export class Bunker extends CaseGenerique{
    constructor (){
        super("images/Memoire44/base/o_bunker.webp", 1, {Soldat:-1,Tank:-2}, true, true, true, undefined, undefined, undefined,undefined,undefined, `new Bunker(`);
    }
}
setDefaultModelSchema(Bunker, getDefaultModelSchema(CaseGenerique));

export class Hills extends CaseGenerique {
    constructor (){
        super("images/Memoire44/base/h_hills.webp", 1, {Soldat:-1,Tank:-1}, false, false, true, true, "images/Memoire44/card/base/hill-fr.webp", false, " ", true, `new Hills(`);
    }
}
setDefaultModelSchema(Hills, getDefaultModelSchema(CaseGenerique));

export class Forest extends CaseGenerique {
    constructor (){
        super("images/Memoire44/base/h_forest.webp", 1, {Soldat:-1,Tank:-2}, true, false, true, true, "images/Memoire44/card/base/forest-fr.webp", false, "", undefined, `new Forest(`);
    }
}
setDefaultModelSchema(Forest, getDefaultModelSchema(CaseGenerique));

export class Village extends CaseGenerique{
    constructor() {
        super("images/Memoire44/base/h_village.webp", 1, {Soldat:-1,Tank:-2}, true, false, true, true, "images/Memoire44/card/base/village-fr.webp", false, "", undefined, `new Village(`);
    }
}
setDefaultModelSchema(Village, getDefaultModelSchema(CaseGenerique));

export class Bridge extends CaseGenerique{
    constructor(orientation){
        super(test6("base","o_bridge",orientation), 6, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, `new Bridge(`);
    }
}
setDefaultModelSchema(Bridge, getDefaultModelSchema(CaseGenerique));

export class RiversRight extends CaseGenerique{
    constructor(orientation){
        super(test3("base","h_river",orientation), 3, false, false, false, false, false, false, false, "brightness-[0.9] contrast-[1.2] saturate-[1.2] ", undefined, `new RiversRight(`); 
    }
}
setDefaultModelSchema(RiversRight, getDefaultModelSchema(CaseGenerique));

export class RiversCurve extends CaseGenerique{
    constructor(orientation){
        super(test6("base","h_curve",orientation), 6, false, false, false, false, false, false, false, "brightness-[0.9] contrast-[1.2] saturate-[1.2] ", undefined, `new RiversCurve(`);
    }
}
setDefaultModelSchema(RiversCurve, getDefaultModelSchema(CaseGenerique));

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
setDefaultModelSchema(Mine, getDefaultModelSchema(CaseGenerique));


//        case "":
// return {hexagone: null,orientation:0}

