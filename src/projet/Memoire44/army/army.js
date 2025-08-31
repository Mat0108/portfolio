import { setDefaultModelSchema, getDefaultModelSchema, optional, primitive, createModelSchema } from "serializr";
import { CaseGenerique, SoldatGenerique } from "../divers/Generique";
import { Country } from "../haxagone/base";

export class Bullet extends CaseGenerique {
    constructor(orientation, state) {
        super(`images/Memoire44/base/bullet-0${state ?? 3}.webp`, null, null, true, false, true, false, false, false, `${orientation} w-8 h-8 `);
        this._orientation = orientation;
        this._state = state ?? 3;
    }
}
setDefaultModelSchema(Bullet,getDefaultModelSchema(CaseGenerique));

function returnTypeCamp(variation){
    switch(variation){
        case "Axis": return 'Axis';
        case "Allies":
        case 'Eastern': return "Allies";
        default: return "Allies";
    }
}

export function SoldatVariation(variation, orientation) {
    switch(variation){
        case "Axis": return `images/Memoire44/base/${orientation ? "u_gerinf_top":"u_gerinf_bottom"}.webp`;
        case "Allies": return `images/Memoire44/base/${orientation ? "u_usinf_top":"u_usinf_bottom"}.webp`;
        case "Eastern": return `images/Memoire44/snow/${orientation ? "u_ruinf_top":"u_ruinf_bottom"}.webp`;
        default: return `images/Memoire44/base/${orientation ? "u_usinf_top":"u_usinf_bottom"}.webp`;
    }
}

export function CharVariation(variation, orientation) {
    switch(variation){
        case "Axis": return `images/Memoire44/base/${orientation ? "u_gertank_top":"u_gertank_bottom"}.webp`;
        case "Allies": return `images/Memoire44/base/${orientation ? "u_ustank_top":"u_ustank_bottom"}.webp`;
        case "Eastern": return `images/Memoire44/snow/${orientation ? "u_rutank_top":"u_rutank_bottom"}.webp`;
        default: return `images/Memoire44/base/${orientation ? "u_ustank_top":"u_ustank_bottom"}.webp`;
    }
}

export function ArtillerieVariation(variation, orientation) {
    switch(variation){
        case "Axis": return `images/Memoire44/base/${orientation ? "u_gergun_top":"u_gergun_bottom"}.webp`;
        case "Allies": return `images/Memoire44/base/${orientation ? "u_usgun_top":"u_usgun_bottom"}.webp`;
        case "Eastern": return `images/Memoire44/snow/${orientation ? "u_rugun_top":"u_rugun_bottom"}.webp`;
        default: return `images/Memoire44/base/${orientation ? "u_usgun_top":"u_usgun_bottom"}.webp`;
    }
}

export class SoldatType extends SoldatGenerique {
    constructor(nb, portée, deplacement, variation, orientation, taille, path) {
        super(SoldatVariation(variation, orientation), nb ?? 4, portée ?? [3,2,1], deplacement ?? [1,2], taille ?? "w-[38%]", "Soldat", returnTypeCamp(variation), path);
        this._variation = variation;
        this._orientation = orientation;
    }
    getVariation(){ return this._variation; }
    getOrientation(){ return this._orientation; }
}
createModelSchema(SoldatType, {
    nb: optional(primitive()),
    portée: optional(primitive()),
    deplacement: optional(primitive()),
    variation: optional(primitive()),
    orientation: optional(primitive()),
    taille: optional(primitive()),
    path: optional(primitive())
});

export class CharType extends SoldatGenerique {
    constructor(nb, portée, deplacement, variation, orientation, taille, path){
        super(CharVariation(variation,orientation), nb ?? 3, portée ?? [3,3,3], deplacement ?? [1,1,1], taille ?? "w-[40%]", "Tank", returnTypeCamp(variation), path);
        this._variation = variation;
        this._orientation = orientation;
    }
    getVariation(){ return this._variation; }
    getOrientation(){ return this._orientation; }
}
createModelSchema(CharType, {
    nb: optional(primitive()),
    portée: optional(primitive()),
    deplacement: optional(primitive()),
    variation: optional(primitive()),
    orientation: optional(primitive()),
    taille: optional(primitive()),
    path: optional(primitive())
});

export class ArtillerieType extends SoldatGenerique {
    constructor(nb, portée, deplacement, variation, orientation, taille, path){
        super(ArtillerieVariation(variation,orientation), nb ?? 2, portée ?? [3,3,2,2,1,1], deplacement ?? [2], taille ?? null, "Artillerie", returnTypeCamp(variation), path);
        this._variation = variation;
        this._orientation = orientation;
    }
    getVariation(){ return this._variation; }
    getOrientation(){ return this._orientation; }
}
createModelSchema(ArtillerieType, {
    nb: optional(primitive()),
    portée: optional(primitive()),
    deplacement: optional(primitive()),
    variation: optional(primitive()),
    orientation: optional(primitive()),
    taille: optional(primitive()),
    path: optional(primitive())
});

// --- Classes spécialisées ---
export class SoldatAllies extends SoldatType {
    constructor(nb, portée, deplacement){ super(nb, portée, deplacement, "Allies", false, null, `new SoldatAllies(`); }
}
createModelSchema(SoldatAllies, { nb: optional(primitive()), portée: optional(primitive()), deplacement: optional(primitive()) });

export class CharAllies extends CharType {
    constructor(nb, portée, deplacement){ super(nb, portée, deplacement, "Allies", false, null, `new CharAllies(`); }
}
createModelSchema(CharAllies, { nb: optional(primitive()), portée: optional(primitive()), deplacement: optional(primitive()) });

export class ArtillerieAllies extends ArtillerieType {
    constructor(nb, portée, deplacement){ super(nb, portée, deplacement, "Allies", false, "", `new ArtillerieAllies(`); }
}
createModelSchema(ArtillerieAllies, { nb: optional(primitive()), portée: optional(primitive()), deplacement: optional(primitive()) });

export class SoldatAxis extends SoldatType {
    constructor(nb, portée, deplacement){ super(nb, portée, deplacement, "Axis", true, null, `new SoldatAxis(`); }
}
createModelSchema(SoldatAxis, { nb: optional(primitive()), portée: optional(primitive()), deplacement: optional(primitive()) });

export class CharAxis extends CharType {
    constructor(nb, portée, deplacement){ super(nb, portée, deplacement, "Axis", true, null, `new CharAxis(`); }
}
createModelSchema(CharAxis, { nb: optional(primitive()), portée: optional(primitive()), deplacement: optional(primitive()) });

export class ArtillerieAxis extends ArtillerieType {
    constructor(nb, portée, deplacement){ super(nb, portée, deplacement, "Axis", true, null, `new ArtillerieAxis(`); }
}
createModelSchema(ArtillerieAxis, { nb: optional(primitive()), portée: optional(primitive()), deplacement: optional(primitive()) });

export class SoldatEastern extends SoldatType {
    constructor(nb, portée, deplacement){ super(nb, portée, deplacement, "Eastern", false, "w-[50%]", `new SoldatEastern(`); }
}
createModelSchema(SoldatEastern, { nb: optional(primitive()), portée: optional(primitive()), deplacement: optional(primitive()) });

export class CharEastern extends CharType {
    constructor(nb, portée, deplacement){ super(nb, portée, deplacement, "Eastern", false, "w-[50%]", `new CharEastern(`); }
}
createModelSchema(CharEastern, { nb: optional(primitive()), portée: optional(primitive()), deplacement: optional(primitive()) });

export class ArtillerieEastern extends ArtillerieType {
    constructor(nb, portée, deplacement){ super(nb, portée, deplacement, "Eastern", false, "w-[60%]", `new ArtillerieEastern(`); }
}
createModelSchema(ArtillerieEastern, { nb: optional(primitive()), portée: optional(primitive()), deplacement: optional(primitive()) });

// --- Fonctions utilitaires ---
export function HitUnit(unit, nb) {
    if (!unit) return null;
    const [portée, deplacement, variation, orientation] = [unit.getPortée(), unit.getDeplacement(), unit.getVariation(), unit.getOrientation()];
    if (unit instanceof SoldatType) return new SoldatType(nb, portée, deplacement, variation, orientation);
    if (unit instanceof CharType) return new CharType(nb, portée, deplacement, variation, orientation);
    if (unit instanceof ArtillerieType) return new ArtillerieType(nb, portée, deplacement, variation, orientation);
    return new SoldatType(nb, portée, deplacement, variation, orientation);
}

export function AddDice(unit, nb, portée, deplacement) {
    const [variation, orientation] = [unit.getVariation(), unit.getOrientation()];
    if (unit instanceof SoldatType) return new SoldatType(nb, portée, deplacement, variation, orientation);
    if (unit instanceof CharType) return new CharType(nb, portée, deplacement, variation, orientation);
    if (unit instanceof ArtillerieType) return new ArtillerieType(nb, portée, deplacement, variation, orientation);
    return new SoldatType(nb, portée, deplacement, variation, orientation);
}

// --- Mortar ---
export class Mortar extends SoldatGenerique {
    constructor(nb, portée, deplacement, variation, orientation, taille, before1942){
        super(SoldatVariation(variation, orientation), nb ?? 4, portée ?? [3,2,1], before1942 ? [2,2] : [1,2], taille ?? "w-[38%]", "Soldat", returnTypeCamp(variation), 'new Mortar(', `images/Memoire44/army/mortar_${!orientation ? "top":"bottom"}.webp`, "w-14");
        this._variation = variation;
        this._orientation = orientation;
    }
    getVariation(){ return this._variation; }
    getOrientation(){ return this._orientation; }
}
createModelSchema(Mortar, {
    nb: optional(primitive()),
    portée: optional(primitive()),
    deplacement: optional(primitive()),
    variation: optional(primitive()),
    orientation: optional(primitive()),
    taille: optional(primitive()),
    before1942: optional(primitive())
});

// --- Units d'élite ---
export class UnitEliteAxis extends SoldatGenerique {
    constructor(nb, portée, deplacement, taille){
        super(SoldatVariation("Axis",true), nb ?? 4, portée ?? [3,2,1], deplacement ?? [1,1], taille ?? "w-[38%]", "Soldat", returnTypeCamp('Axis'), 'new UnitEliteAxis(', null, null, "images/Memoire44/badge/badge4.webp");
    }
}
createModelSchema(UnitEliteAxis, { nb: optional(primitive()), portée: optional(primitive()), deplacement: optional(primitive()), taille: optional(primitive()) });

export class UnitGenieAllies extends SoldatGenerique {
    constructor(badge = "badge12", nb, portée, deplacement, taille){
        super(SoldatVariation("Allies", false), nb ?? 4, portée ?? [3,2,1], deplacement ?? [1,1], taille ?? "w-[38%]", "Soldat", returnTypeCamp('Axis'), 'new UnitEliteAxis(', null, null, `images/Memoire44/badge/${badge}.webp`);
        this._badge = badge;
    }
}
createModelSchema(UnitGenieAllies, { badge: optional(primitive()), nb: optional(primitive()), portée: optional(primitive()), deplacement: optional(primitive()), taille: optional(primitive()) });
