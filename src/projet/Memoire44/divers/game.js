import { createModelSchema, list, object, optional, primitive, raw } from "serializr";
import { CaseGenerique, SoldatGenerique } from "./Generique";
import { Attacking, Move, Retreat, Selected, SelectHexa, Target } from "../haxagone/highlight";


export class GridCell {
  constructor(case1, bunker,defense,unité,medal,action = null,highlight = null,select = null) {  
    this.case = case1;
    this.bunker = bunker;
    this.defense = defense;
    this.unité = unité;
    this.medal = medal;
    this.action = action;
    this.highlight = highlight;
    this.select = select;
  }
  
}

createModelSchema(GridCell, {
  _case: optional(object(CaseGenerique)),
  _bunker: optional(object(CaseGenerique)),
  _defense: optional(object(CaseGenerique)),
  _unité: optional(object(SoldatGenerique)),
  _medal: optional(object(CaseGenerique)),
});



export class Game {
    constructor(width, height,grille,terrain,campMine) {
        this._width = width;
        this._height = height;
        this._terrain = terrain;
        this._campMine = campMine;
        this._grille = grille ?? Array.from({ length: height }, () =>
            Array.from({ length: width }, () => new GridCell(new CaseGenerique()))
            );
        this._listeners = new Set();
    }

    subscribe(listener) {
        this._listeners.add(listener);
        return () => this._listeners.delete(listener);
    }

    notify(cond) {
        if(cond)console.log("notify",cond)

        this._listeners.forEach(l => l(this));
    }

    getGrille() {
        return this._grille;
    }
    getInfo(){
        return {terrain:this.terrain,grille:this.grid,campMine:this.campMine}
    }
    getCell(x,y){
        return this._grille[x][y]
    }
    getItemCell(item){
        return this._grille[item.x][item.y]   
    }
    getTerrain(){
        return this._terrain;
    }
    getCampMine(){
        return this._campMine;
    }
    updateCell(x, y, newCell) {
        this._grille[x][y] = newCell;
        this.notify()
    }
    updateItemCell(item,newCell){
        this._grille[item.x][item.y] = newCell;
    }
    clearHighlightAtPos(x,y){
        this._grille[x][y].highlight = null;
        this._grille[x][y].select = null; 
        this.notify();
    }

    clearTerrain(clearAction,clearHightlight,clearSelect){
        this._grille.forEach((e,pos)=>{
            e.forEach((f,pos2)=>{
                if(clearAction && f.action){
                    f.action = null;
                }
                if(clearHightlight && f.highlight && (f.highlight instanceof Move  || f.highlight instanceof Target || f.highlight instanceof Retreat)){
                f.highlight = null;
                f.action = null
                }
                if(clearSelect && f.select && (f.select instanceof Selected || f.select instanceof SelectHexa || f.select instanceof Attacking)){
                    f.select = null;
                }
            })
        })
        this.notify();
    }
    clearCell(x,y,clearDefense,clearUnit,clearAction,clearHightlight,clearSelect){
        let cell = this._grille[x][y]
        if(clearDefense) cell.defense = null;
        if(clearUnit) cell.unité = null;
        if(clearAction) cell.action = null;
        if(clearHightlight) cell.highlight = null;
        if(clearSelect) cell.select = null
    }
    RemoveHighlight(){
        this.clearTerrain(false,true,false,false)    
    }
    updateUnit(x,y,unité){
        this._grille[x][y].unité = unité
        this.notify()    
    }
    clearUnit(x,y){
        this._grille[x][y].unité = null;
    }
}

// Schéma pour Serializr
createModelSchema(Game, {
  _width: primitive(),
  _height: primitive(),
  _terrain: primitive(),
  _campMine: primitive(),
  _grille: list(list(object(GridCell))),
});
