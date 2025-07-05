import { CaseGenerique, SoldatGenerique } from "../divers/Generique";
import { Country } from "../haxagone/base";


export class Bullet extends CaseGenerique{
    constructor(orientation,state){
        super(`images/Memoire44/base/bullet-0${state ?? 3}.webp`,null,null,true,false,true,false,false,false,`${orientation} w-8 h-8 `)
    }
}
export function SoldatVariation(variation,orientation){
    switch(variation){
        case "Axis": 
            return `images/Memoire44/base/${orientation ? "u_gerinf_top":"u_gerinf_bottom"}.webp`
        case "Allies":
            return `images/Memoire44/base/${orientation ? "u_usinf_top":"u_usinf_bottom"}.webp`
        case "Eastern":
            return `images/Memoire44/snow/${orientation ? "u_ruinf_top":"u_ruinf_bottom"}.webp`
        default:
            return `images/Memoire44/base/${orientation ? "u_usinf_top":"u_usinf_bottom"}.webp`
        
    }
}
export function CharVariation(variation,orientation){
    switch(variation){
        case "Axis": 
            return `images/Memoire44/base/${orientation ? "u_gertank_top":"u_gertank_bottom"}.webp`
        case "Allies":
            return `images/Memoire44/base/${orientation ? "u_ustank_top":"u_ustank_bottom"}.webp`
        case "Eastern":
            return `images/Memoire44/snow/${orientation ? "u_rutank_top":"u_rutank_bottom"}.webp`
        default:
            return `images/Memoire44/base/${orientation ? "u_ustank_top":"u_ustank_bottom"}.webp`
        
    }
}

export function ArtillerieVariation(variation,orientation){
    switch(variation){
        case "Axis": 
            return `images/Memoire44/base/${orientation ? "u_gergun_top":"u_gergun_bottom"}.webp`
        case "Allies":
            return `images/Memoire44/base/${orientation ? "u_usgun_top":"u_usgun_bottom"}.webp`
        case "Eastern":
            return `images/Memoire44/snow/${orientation ? "u_rugun_top":"u_rugun_bottom"}.webp`
        default:
            return `images/Memoire44/base/${orientation ? "u_usgun_top":"u_usgun_bottom"}.webp`
        
    }
}
function returnTypeCamp(variation){
        switch(variation){
        case "Axis": 
            return 'Axis'
        case "Allies":
        case 'Esatern':
            return "Allies"
        default:
            return `Allies`
        
    }
}
export class SoldatType extends SoldatGenerique {
    constructor(nb,portée,deplacement,variation,orientation,taille,path){        
        super(SoldatVariation(variation,orientation),nb ? nb : 4,portée ? portée : [3,2,1],deplacement ? deplacement:[1,2],taille ?? "w-[38%]","Soldat",returnTypeCamp(variation),path)
        this._variation = variation;
        this._orientation = orientation;
    }
    getVariation(){
        return this._variation;
    }
    getOrientation(){
        return this._orientation;
    }
}
export class CharType extends SoldatGenerique {
    constructor(nb,portée,deplacement,variation,orientation,taille,path){
        super(CharVariation(variation,orientation),nb ? nb : 3,portée ? portée : [3,3,3],deplacement ? deplacement:[1,1,1],taille ?? "w-[40%]","Tank",returnTypeCamp(variation),path)
        this._variation = variation;
        this._orientation = orientation;
    }
    getVariation(){
        return this._variation;
    }
    getOrientation(){
        return this._orientation;
    }
}
export class ArtillerieType extends SoldatGenerique {
    constructor(nb,portée,deplacement,variation,orientation,taille,path){
        super(ArtillerieVariation(variation,orientation),nb ? nb : 2,portée ? portée:[3,3,2,2,1,1],deplacement ? deplacement:[2],taille ?? null,"Artillerie",returnTypeCamp(variation),path)
        this._variation = variation;
        this._orientation = orientation;
    }
    getVariation(){
        return this._variation;
    }
    getOrientation(){
        return this._orientation;
    }
}
export class SoldatAllies extends SoldatType {
    constructor(nb, portée, deplacement) {
        let orientation = false;
        super(nb, portée, deplacement, "Allies", orientation,null,`new SoldatAllies(`)
    }
}

export class CharAllies extends CharType {
    constructor(nb, portée, deplacement) {
        let orientation = false;
        super(nb, portée, deplacement, "Allies", orientation,null,`new CharAllies(`);
    }
}

export class ArtillerieAllies extends ArtillerieType {
    constructor(nb, portée, deplacement) {
        let orientation = false;
        super(nb, portée, deplacement, "Allies", orientation,"",`new ArtillerieAllies(`);
    }
}

export class SoldatAxis extends SoldatType {
    constructor(nb, portée, deplacement) {
        let orientation = true;
        super(nb, portée, deplacement, "Axis", orientation,null,`new SoldatAxis(`);
    }
}

export class CharAxis extends CharType {
    constructor(nb, portée, deplacement) {
        let orientation = true;
        super(nb, portée, deplacement, "Axis", orientation,null,`new CharAxis(`);
    }
}

export class ArtillerieAxis extends ArtillerieType {
    constructor(nb, portée, deplacement) {
        let orientation = true;
        super(nb, portée, deplacement, "Axis", orientation,null,`new ArtillerieAxis(`);
    }
}

export class SoldatEastern extends SoldatType {
    constructor(nb, portée, deplacement) {
        let orientation = false;
        super(nb, portée, deplacement, "Eastern", orientation, "w-[50%]",`new SoldatEastern(`);
    }
}

export class CharEastern extends CharType {
    constructor(nb, portée, deplacement) {
        let orientation = false;
        super(nb, portée, deplacement, "Eastern", orientation, "w-[50%]",`new CharEastern(`);
    }
}

export class ArtillerieEastern extends ArtillerieType {
    constructor(nb, portée, deplacement) {
        let orientation = false;
        super(nb, portée, deplacement, "Eastern", orientation, "w-[60%]",`new ArtillerieEastern(`);
    }
}

export function HitUnit(unit, nb) {
    let portée = unit.getPortée();
    let deplacement = unit.getDeplacement()
    let variation = unit.getVariation()
    let orientation = unit.getOrientation()
    if (nb) {
        if (unit instanceof SoldatType) {
            return new SoldatType(nb,portée,deplacement,variation,orientation);
        } else if (unit instanceof CharType) {
            return new CharType(nb,portée,deplacement,variation,orientation);
        } else if (unit instanceof ArtillerieType) {
            return new ArtillerieAxis(nb,portée,deplacement,variation,orientation);
        } else {
            return new SoldatType(nb,portée,deplacement,variation,orientation);// default case
        }
    } else {
        return null;
    }
}

export function AddDice(unit, nb, portée, deplacement) {
    let variation = unit.getVariation()
    let orientation = unit.getOrientation()
    if (unit instanceof SoldatType) {
        return new SoldatType(nb, portée, deplacement,variation,orientation);
    } else if (unit instanceof CharType) {
        return new CharType(nb, portée, deplacement,variation,orientation);
    } else if (unit instanceof ArtillerieType) {
        return new ArtillerieType(nb, portée, deplacement,variation,orientation);
    } else {
        return new SoldatType(nb, portée, deplacement, variation, orientation); // default case
    }
}

//use only in old editor
export function ReturnArmy(unit, nb) {
    if( unit instanceof Country){
        return {hexagone: new Country()}
    }else if (unit instanceof SoldatAxis) {
        return { hexagone: new SoldatAxis(nb), orientation: 4, max: 4 };
    } else if (unit instanceof CharAxis) {
        return { hexagone: new CharAxis(nb), orientation: 3, max: 4 };
    } else if (unit instanceof ArtillerieAxis) {
        return { hexagone: new ArtillerieAxis(nb), orientation: 2, max: 2 };
    } else if (unit instanceof SoldatAllies) {
        return { hexagone: new SoldatAllies(nb), orientation: 4, max: 4 };
    } else if (unit instanceof CharAllies) {
        return { hexagone: new CharAllies(nb), orientation: 3, max: 4 };
    } else if (unit instanceof ArtillerieAllies) {
        return { hexagone: new ArtillerieAllies(nb), orientation: 2, max: 4 };
    } else {
        return { hexagone: new SoldatAxis(4),orientation: 4, max: 4 }; // default case
    }
}

export class Mortar extends SoldatGenerique {
        constructor(nb,portée,deplacement,variation,orientation,taille,before1942){        
            super(SoldatVariation(variation,orientation),nb ? nb : 4,portée ? portée : [3,2,1],before1942 ? [2,2]:[1,2],taille ?? "w-[38%]","Soldat",returnTypeCamp(variation),'new Mortar(',`images/Memoire44/army/mortar_${!orientation ? "top":"bottom"}.webp`,"w-14")
        this._variation = variation;
        this._orientation = orientation;
    }
    getVariation(){
        return this._variation;
    }
    getOrientation(){
        return this._orientation;
    }

}

export class UnitEliteAxis extends SoldatGenerique {
    constructor(nb,portée,deplacement,taille){        
        super(SoldatVariation("Axis",true),nb ? nb : 4,portée ? portée : [3,2,1],deplacement ?? [1,1],taille ?? "w-[38%]","Soldat",returnTypeCamp('Axis'),'new UnitEliteAxis(',null,null,"images/Memoire44/badge/badge4.webp")
    }

}
export class UnitGenieAllies extends SoldatGenerique {
    constructor(badge = "badge12",nb,portée,deplacement,taille){        
            super(SoldatVariation("Allies",false),nb ? nb : 4,portée ? portée : [3,2,1],deplacement ?? [1,1],taille ?? "w-[38%]","Soldat",returnTypeCamp('Axis'),'new UnitEliteAxis(',null,null,`images/Memoire44/badge/${badge}.webp`)
    }
}