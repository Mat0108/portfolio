import React from "react";
import { jkstraPathFinding } from "../PathFinding/jkstraPathFinding";
import ReactDOM from 'react-dom';
import { createModelSchema, optional, primitive, raw, serialize, setDefaultModelSchema } from "serializr";
export class Position{
    constructor(posx,posy){
        this._posx = posx;
        this._posy = posy;
        // this._portéetir = portéetir;
        // this._portéedeplacementavectir = portéedeplacementavectir;
        // this._portéedeplacementsanstir = portéedeplacementsanstir;
    }
    getX(){
        return this._posx;
    }
    getY(){
        return this._posy;
    }
    setX(){
        return this._posx;
    }
    setY(){
        return this._posy;
    }

}
export class SoldatGenerique  {
    constructor(image,nombre,portée,deplacement,taille,type,camp,path,weapon = null,cssweapon,badge,cssbadge){
        this._nombre = nombre;
        this._portée = portée;
        this._deplacement = deplacement;
        this._image = image;
        this._taille = taille ? taille : "w-1/2"
        this._type = type ? type : "1"
        this._camp = camp ? camp : "Axis"
        this._path = path;
        this._weapon = weapon ?? null
        this._cssweapon = cssweapon ?? ""
        this._badge = badge
        this._cssbadge = cssbadge;
    }
    render(medal,nb,css,cssimage){
        let elem = <img src={this._image} alt={"Soldat"} className={cssimage ?? (medal ?? this._taille)}/>
        let elemWeapon = <img src={this._weapon} alt={"weapon"} className={this._cssweapon}/>
        let elemBadge = <img src={this._badge} alt={"badge"} className={this._cssbadge} />
        if((nb ?? this._nombre) === 4){ 
            return (
            <div className="flex  w-full">
                <div className={`absolute ${this._type === "Tank"?"top-2":"top-0" } z-[20] w-full`}>
                    <div className="flex flex-row center">
                        {elem}
                        {elem}
                    </div>
                </div>
                {this._weapon ? <div className={`absolute w-[90px] h-[90px] flex center z-[30]`}>
                    {elemWeapon}
                </div>:""}
                {this._badge ? <div className={`absolute -top-6 -left-6 flex center z-[10]`}>
                    {elemBadge}
                </div>:""}
                <div className={`absolute ${this._weapon ? "mt-2":""} ${this._type === "Tank"?"top-11":"top-9"}  z-[40]`}>
                    <div className="flex flex-row center">                    
                        {elem}
                        {elem}
                    </div>
                </div>
            </div>)
        }
        if((nb ?? this._nombre) === 3){
                        
            return (
            <div className="flex  w-full">
                <div className="absolute top-2 w-full">
                    <div className="flex flex-row center ">
                        {elem}
                    </div>
                </div>
                {this._weapon ? <div className={`absolute w-[90px] h-[90px] flex center z-[20]`}>
                    {elemWeapon}
                </div>:""}
                {this._badge ? <div className={`absolute -top-6 -left-6 flex center z-[10]`}>
                    {elemBadge}
                </div>:""}
                <div className="absolute top-12 z-[40]">
                    <div className="flex flex-row center">                    
                        {elem}
                        {elem}
                    </div>
                </div>
            </div>)
        }
        if((nb ?? this._nombre) === 2){
                        
            return (
            <div className="flex w-full">
                <div className="absolute top-7 z-[40]">
                    <div className="flex flex-row center">                    
                        {elem}
                        {elem}
                    </div>
                </div>
                {this._weapon ? <div className={`absolute w-[90px] h-[90px] flex center z-[20]`}>
                    {elemWeapon}
                </div>:""}
                {this._badge ? <div className={`absolute -top-6 -left-6 flex center z-[10]`}>
                    {elemBadge}
                </div>:""}
            </div>)
        
       }
        if((nb ?? this._nombre) === 1){
                        
        return (
        <div className={`${css ?? "flex w-full"} `}>
            <div className="absolute top-7 z-[40]">
                <div className="flex flex-row center">                    
                    {elem}
                </div>
            </div>
            {this._weapon ? <div className={`absolute w-[90px] h-[90px] flex center z-[20]`}>
                {elemWeapon}
            </div>:""}
            {this._badge ? <div className={`absolute -top-6 -left-6 flex center z-[10]`}>
                {elemBadge}
            </div>:""}
        </div>)
    
}
        return <div></div>
    }
    getPortée(){
        return this._portée;
    }
    getDeplacement(){
        return this._deplacement;
    }
    getPath() {
        return `${this._path}${this._nombre},${this._portée ? `[${this._portée}]`:""},${this._deplacement ? `[${this._deplacement}]`:""})`;
    }
    toJSON() {
        // Serialize avec serializr
        return serialize(this);
    }
    clone(number) {
        
        return new SoldatGenerique(
            this._image,
            number ?? this._nombre,
            this._portée,
            this._deplacement,
            this._taille,
            this._type,
            this._camp,
            this._path,
            this._weapon,
            this._cssweapon,
            this._badge,
            this._cssbadge
        );
}

}
createModelSchema(SoldatGenerique, {
  _image: optional(primitive()),
  _nombre: optional(primitive()),
  _portée: optional(raw()),
  _deplacement: optional(raw()),
  _taille: optional(primitive()),
  _type: optional(primitive()),
  _camp: optional(primitive()),
  _path: optional(primitive()),
  _weapon: optional(primitive()),     // ou object(Weapon) si weapon est une classe
  _cssweapon: optional(primitive()),
  _badge: optional(primitive()),
  _cssbadge: optional(primitive())
});

export class CaseGenerique {
    constructor(image,orientation,malus,deplacmentmax,ignoreflag,lineofsight,byentering,imageexplicatif,hover,className,isUpperCase,path,currentOrientation ) {
        this._orientation = orientation;
        this._image = image;
        this._malus = malus ? malus :null;
        this._deplacmentmax = deplacmentmax ? deplacmentmax : null;
        this._ignoreflag = ignoreflag ? ignoreflag : null;
        this._lineofsight = lineofsight ? lineofsight : false;
        this._byentering = byentering ? byentering : null;
        this._imageexplicatif = imageexplicatif ? imageexplicatif : null;
        this._hover = hover ? hover : null;
        this._className = className ? className : null; 
        this._isUpperCase = isUpperCase ? isUpperCase : false;
        this._mountTarget = null; 
        this._path = path;
        this._currentOrientation = currentOrientation;

    }

    render(){
        return <div onMouseEnter={()=>this._hover ? this._hover({card:this._imageexplicatif,showing:true}):""} onMouseLeave={()=>this._hover ? this._hover({card:"",showing:false}):""} ><img src={this._image} alt={"Case"} className={this._className}/></div>
    }
    medal(){
      return <div className="relative w-full h-full flex ">
        <div className="absolute top-2 left-0 ml-[70px] w-[45%]  ">{this.render()}</div>
        
      </div>  
    }

    mount(domElement) {
        this._mountTarget = domElement;
        ReactDOM.render(this.render(), domElement);
    }
    
    rerender() {
        if (this._mountTarget) {
            ReactDOM.render(this.render(), this._mountTarget);
        } else {
            console.warn("rerender() called but no mountTarget set.");
        }
    }

    updateImageRotation(chiffre) {
        let currentOrientation = this._image.match(/(\d)(?=\.webp)/);
        if(!currentOrientation || parseInt(currentOrientation[0]) === (chiffre > this._orientation ? chiffre - this._orientation : chiffre)){
            return false;
        }else {
            this._currentOrientation = chiffre;
            this._image = this._image.replace(/(\d)(?=\.webp)/g, (match) =>
                chiffre > this._orientation ? chiffre - this._orientation : chiffre
            );
            return true;
        }
    }
    getPath() {
        return `${this._path}${this._currentOrientation ?? ""})`;
    }

    toJSON() {
        // Serialize avec serializr
        return serialize(this);
    }
    

    clone() {
        return new CaseGenerique(
            this._image,
            this._orientation,
            this._malus,
            this._deplacmentmax,
            this._ignoreflag,
            this._lineofsight,
            this._byentering,
            this._imageexplicatif,
            this._hover,
            this._className,
            this._isUpperCase,
            this._mountTarget,
            this._path,
            this._currentOrientation,
        );
    }
}

createModelSchema(CaseGenerique, {
        _orientation: optional(primitive()),
        _image: optional(primitive()),
        _malus: optional(raw()),
        _deplacmentmax: optional(primitive()),
        _ignoreflag: optional(primitive()),
        _lineofsight: optional(primitive()),
        _byentering: optional(primitive()),
        _imageexplicatif: optional(primitive()),
        _hover:optional(primitive()),
        _className: optional(primitive()), 
        _isUpperCase: optional(primitive()),
        _mountTarget:optional(primitive()),
        _path:optional(primitive()),
        _currentOrientation:optional(primitive())
});
export class CardGenerique {
    // {card:"",img:"",nbunit:1,zone:2,type:"ALL",showing:false}
    constructor(titre,image,nbunit,zone,type,type2,ignoreterrain,countstar,extradice){
        this._titre = titre;
        this._image = image;
        this._nbunit = nbunit ? nbunit : "ALL";
        this._zone = zone ? zone : "ALL";
        this._type = type ? type : "ALL";
        this._type = type2 ? type2 : type ? type:"ALL";
        this._ignoreterrain = ignoreterrain ? ignoreterrain : false;
        this._countstar = countstar ? countstar : false;
        this._extradice = extradice ? extradice : false; 
        
    }
} 

export function test6(path,name,orientation){
    return `images/Memoire44/${path}/${orientation === 6 ? `${name}6`:orientation === 5 ? `${name}5` : orientation === 4 ?
    `${name}4`:orientation === 3 ? `${name}3`:orientation === 2 ? `${name}2`:`${name}1`}.webp`
}
export function test4(path,name,orientation){
    return `images/Memoire44/${path}/${orientation === 4 ? `${name}4`:orientation === 3 ? `${name}3`:orientation === 2 ? `${name}2` : `${name}1`}.webp`
}
export function test3(path,name,orientation){
    return `images/Memoire44/${path}/${orientation === 3 ? `${name}3`:orientation === 2 ? `${name}2` : `${name}1`}.webp`
}
export function test2(path,name,orientation){
    return `images/Memoire44/${path}/${orientation === 2 ? `${name}2` : `${name}1`}.webp`
}
export function calculDistance(x,y,x2,y2){
    return Math.abs(Math.sqrt(Math.pow(x-x2,2)+Math.pow(y-y2,2)))
}
export function pointproche(x,y){
    return VerList([
        {x:x-1,y: x %2  === 1 ? y : y-1},
        {x:x+1,y: x %2  === 1 ? y : y-1},
        {x:x,y:y-1},
        {x:x,y:y+1},
        {x:x-1,y:x %2  === 1 ? y+1:y},
        {x:x+1,y:x %2  === 1 ? y+1:y}
    ])
}
export function isCombatRapproche(x,y,x2,y2){
    let list = pointproche(x,y);
    let cond = false;
    list.forEach(item=>{
        if(item.x === x2 && item.y === y2){
            cond = true;
        }
    })
    return cond;
}
function VerifCanAttackAfterMalus(x,y,list,game){
    let newlist = []
    let origin = game.getCell(x,y)
    list.map(item=>{
        let cell =  game.getCell(item.x,item.y)
        let malus = 0;
        if(cell.case && cell.case._malus){
            if(origin.unité._type === "Soldat"){malus = cell.case._malus.Soldat}
            else if(origin.unité._type === "Tank"){malus = cell.case._malus.Tank}
        }
        if(cell.defense && cell.defense._malus){
            if(origin.unité._type === "Soldat"){malus = cell.case._malus.Soldat+malus}
            else if(origin.unité._type === "Tank"){malus = cell.case._malus.Tank+malus}
        }
        if(item.dés + malus  > 0){ newlist.push(item)}

    })
    return newlist;
}

export function showPortee(game,portée,posx,posy,dés,deplacement,pathFinding,testingRoad){
    
    let list = [
        {x:posx-1,y: posx %2  === 1 ? posy : posy-1,dés: dés ? dés[0] : 0,deplacement:deplacement ? deplacement[0]:null}, //partie haut gauche
        {x:posx-1,y:posx %2  === 1 ? posy+1:posy,dés:dés ? dés[0] : 0,deplacement:deplacement ? deplacement[0]:null}, //partie haute droite
        {x:posx,y:posy-1,dés:dés ? dés[0] : 0,deplacement:deplacement ? deplacement[0]:null}, //partie gauche
        {x:posx,y:posy+1,dés:dés ? dés[0] : 0,deplacement:deplacement ? deplacement[0]:null}, //partie droite 
        {x:posx+1,y: posx %2  === 1 ? posy : posy-1,dés:dés ? dés[0] : 0,deplacement:deplacement ? deplacement[0]:null}, //partie bas gauche
        {x:posx+1,y:posx %2  === 1 ? posy+1:posy,dés:dés ? dés[0] : 0,deplacement:deplacement ? deplacement[0]:null}, //partie bas droite
    ]
    function betterPush(x,y,nb,local){
        let locallist = local ? local : list;
        locallist.push({x:x,y:y,dés:dés ? dés[nb]:null,deplacement:deplacement ? deplacement[nb]:null})
    }
    if(portée >= 2){        
        betterPush(posx-2,posy,1);
        betterPush(posx-2,posy-1,1);
        betterPush(posx-2,posy+1,1); //partie gauche du cercle

        betterPush(posx-1,posx %2  === 1 ? posy-1:posy-2,1); //partie haute et bas du cercle
        betterPush(posx+1,posx %2  === 1 ? posy-1:posy-2,1);
        betterPush(posx,posy-2,1);
        betterPush(posx,posy+2,1);
        betterPush(posx-1,posx %2  === 1 ? posy+2:posy+1,1);
        betterPush(posx+1,posx %2  === 1 ? posy+2:posy+1,1);
        
        betterPush(posx+2,posy,1); //partie droite du cercle
        betterPush(posx+2,posy-1,1);
        betterPush(posx+2,posy+1,1);

    }
    if(portée >= 3){
        list.push({x:posx-3,y:posy,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null}); //partie gauche du cercle
        list.push({x:posx-3,y:posy-1,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx-3,y:posy+1,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx-3,y:posx %2  === 1 ? posy+2 : posy-2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});


        list.push({x:posx-2,y:posy-2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx-2,y:posy+2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx+2,y:posy-2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx+2,y:posy+2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});

        list.push({x:posx+3,y:posy,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null}); //partie droite du cercle
        list.push({x:posx+3,y:posy-1,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx+3,y:posy+1,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx+3,y:posx %2  === 1 ? posy+2 :posy-2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});

        

        list.push({x:posx-1,y:posx %2  === 1 ? posy+3:posy+2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx,y:posy+3,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx+1,y:posx %2  === 1 ? posy+3:posy+2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});

        list.push({x:posx-1,y:posx %2  === 1 ? posy-2:posy-3,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx,y:posy-3,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx+1,y:posx %2  === 1 ? posy-2:posy-3,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        
        
        // list3.forEach(item=>{
        //     if(deplacement && Object.keys(deplacement).length){
        //         pointproche(item.x,item.y).forEach(ptproche=>{
        //             if(ptproche.x >= 0 && ptproche.x <= 8 && ptproche.y >= 0 && ptproche.y <= 12){
        //                 if(!grille.grille[ptproche.x][ptproche.y].case){
        //                     if(calculDistance(ptproche.x,ptproche.y,posx,posy) <= (deplacement === 3 ? 2.4 : 2) && VerificationLineOfSight(ptproche.x,ptproche.y,posx,posy,grille)){
        //                         list.push(item)
        //                     }
        //             }
        //             }
                    
        //         })
        //     }else{
        //         list.push(item)
        //     }
            
        
        // })
    
    }
    if(portée >=4){
        betterPush(posx-4,posy,3);//partie gauche du cercle
        betterPush(posx-4,posy-1,3);
        betterPush(posx-4,posy+1,3);
        betterPush(posx-4,posy-2,3);
        betterPush(posx-4,posy+2,3);

        betterPush(posx-3,posx%2===1 ?posy-2:posy-3,3);
        betterPush(posx-3,posx%2===1 ?posy+3:posy+2,3);

        betterPush(posx+4,posy,3); //partie droite du cercle
        betterPush(posx+4,posy-1,3);
        betterPush(posx+4,posy+1,3);
        betterPush(posx+4,posy-2,3);
        betterPush(posx+4,posy+2,3);

        betterPush(posx+3,posx%2===1 ?posy-2:posy-3,3);
        betterPush(posx+3,posx%2===1 ?posy+3:posy+2,3);

        betterPush(posx-2,posy+3,3); //partie haute du cercle
        betterPush(posx-1,posx%2===1 ?posy+4:posy+3,3);
        betterPush(posx,posy+4,3);
        betterPush(posx+1,posx%2===1 ?posy+4:posy+3,3);
        betterPush(posx+2,posy+3,3);

        betterPush(posx-2,posy-3,3); //partie basse du cercle
        betterPush(posx-1,posx%2===1 ?posy-3:posy-4,3);
        betterPush(posx,posy-4,3);
        betterPush(posx+1,posx%2===1 ?posy-3:posy-4,3);
        betterPush(posx+2,posy-3,3);
    }
    if(portée >=5){
        betterPush(posx-4,posy,4);   
        betterPush(posx-4,posy-1,4); 
        betterPush(posx-4,posy+1,4); 
        betterPush(posx-4,posy-2,4);
        betterPush(posx-4,posy+2,4); 
        betterPush(posx-4,posy-3,4); 
        betterPush(posx-4,posy+3,4);

        betterPush(posx+4,posy,4);  
        betterPush(posx+4,posy-1,4); 
        betterPush(posx+4,posy+1,4); 
        betterPush(posx+4,posy-2,4);
        betterPush(posx+4,posy+2,4); 
        betterPush(posx+4,posy-3,4); 
        betterPush(posx+4,posy+3,4);

        betterPush(posx,posy-5,4);
        betterPush(posx-1,posx%2===1 ?posy-4:posy-5,4);
        betterPush(posx+1,posx%2===1 ?posy-4:posy-5,4);
        betterPush(posx-2,posy-4,4);
        betterPush(posx+2,posy-4,4);
        betterPush(posx-3,posx%2===1 ?posy-3:posy-4,4);
        betterPush(posx+3,posx%2===1 ?posy-3:posy-4,4);
        
        betterPush(posx,posy+5,4);
        betterPush(posx-1,posx%2===1 ?posy+5:posy+4,4);
        betterPush(posx+1,posx%2===1 ?posy+5:posy+4,4);
        betterPush(posx-2,posy+4,4);
        betterPush(posx+2,posy+4,4);
        betterPush(posx-3,posx%2===1 ?posy+4:posy+3,4);
        betterPush(posx+3,posx%2===1 ?posy+4:posy+3,4);
    }
    if(portée >=6){
        betterPush(posx-5,posy,5);   
        betterPush(posx-5,posy-1,5); 
        betterPush(posx-5,posy+1,5); 
        betterPush(posx-5,posy-2,5);
        betterPush(posx-5,posy+2,5); 
        betterPush(posx-5,posy-3,5); 
        betterPush(posx-5,posy+3,5); 
        betterPush(posx-5,posx%2===1 ?posy+4:posy-4,5); 
        
        betterPush(posx+5,posy,5);   
        betterPush(posx+5,posy-1,5); 
        betterPush(posx+5,posy+1,5); 
        betterPush(posx+5,posy-2,5);
        betterPush(posx+5,posy+2,5); 
        betterPush(posx+5,posy-3,5); 
        betterPush(posx+5,posy+3,5); 
        betterPush(posx+5,posx%2===1 ?posy+4:posy-4,5); 

        betterPush(posx,posy-6,5);
        betterPush(posx-1,posx%2===1 ?posy-5:posy-6,5);
        betterPush(posx+1,posx%2===1 ?posy-5:posy-6,5);
        betterPush(posx-2,posy-5,5);
        betterPush(posx+2,posy-5,5);
        betterPush(posx-3,posx%2===1 ?posy-4:posy-5,5);
        betterPush(posx+3,posx%2===1 ?posy-4:posy-5,5);
        betterPush(posx-4,posy-4,5);
        betterPush(posx+4,posy-4,5);

        betterPush(posx,posy+6,5);
        betterPush(posx-1,posx%2===1 ?posy+6:posy+5,5);
        betterPush(posx+1,posx%2===1 ?posy+6:posy+5,5);
        betterPush(posx-2,posy+5,5);
        betterPush(posx+2,posy+5,5);
        betterPush(posx-3,posx%2===1 ?posy+5:posy+4,5);
        betterPush(posx+3,posx%2===1 ?posy+5:posy+4,5);
        betterPush(posx-4,posy+4,5);
        betterPush(posx+4,posy+4,5);
    }
    if(!pathFinding){return VerifCanAttackAfterMalus(posx,posy,VerList(list),game)}
    
    let list2 = []
    VerList(list).forEach(item=>{
        
        let path = jkstraPathFinding(game.getGrille(),{x:posx,y:posy},item,testingRoad)

        if(path !== null && path.item.length <= portée){
            list2.push({item:item, path:path.path})
        }
    }) 
    return list2;
}


export function VerList(list){
    let newlist = [];
    list.forEach(e=>{
        if(e.x >= 0 && e.x <= 8 && e.y >= 0 && e.y <=(e.x % 2 === 1 ?  11 : 12)){
            newlist.push(e)
        }     
    })
    return newlist;
}
export function VerificationLineOfSight(x,y,x2,y2,game){
    console.log('x,y,x2,y2 : ', x,y,x2,y2)
    let angle0 = [{x:x,y:y-1},{x:x,y:y-2},{x:x,y:y-3},{x:x,y:y-4},{x:x,y:y-5},{x:x,y:y-6}]
    let angle60 = [{x:x-1,y:x%2 === 1 ? y : y-1},{x:x-2,y:y-1},{x:x-3,y:x%2 === 1 ? y-1:y-2},{x:x-4,y:y-2},{x:x-5,y:x%2 === 1 ? y-2:y-3},{x:x-6,y:y-3}]
    let angle120 = [{x:x-1,y:x%2 === 1 ? y+1 : y},{x:x-2,y:y+1},{x:x-3,y:x%2 === 1 ? y+2:y+1},{x:x-4,y:y+2},{x:x-5,y:x%2 === 1 ? y+3:y+2},{x:x-6,y:y+3}]
    let angle180 = [{x:x,y:y+1},{x:x,y:y+2},{x:x,y:y+3},{x:x,y:y+4},{x:x,y:y+5},{x:x,y:y+6}]
    let angle240 = [{x:x+1,y:x%2 === 1 ? y+1 : y},{x:x+2,y:y+1},{x:x+3,y:x%2 === 1 ? y+2:y+1},{x:x+4,y:y+2},{x:x+5,y:x%2 === 1 ? y+3:y+2},{x:x+6,y:y+3}]
    let angle300 = [{x:x+1,y:x%2 === 1 ? y : y-1},{x:x+2,y:y-1},{x:x+3,y:x%2 === 1 ? y-1:y-2},{x:x+4,y:y-2},{x:x+5,y:x%2 === 1 ? y-2:y-3},{x:x+6,y:y-3}]
    let allangle = [angle0,angle60,angle120,angle180,angle240,angle300]
    
    let cond = false
    pointproche(x,y).forEach(item=>{
        if(item.x === x2 && item.y === y2){
            cond = true;
        }
    })
    if(cond){return true}
    let cond1 = []
    let cond2 = [];
    allangle.forEach(beta=>{
        beta.forEach((alpha,pos)=>{
            if(alpha.x === x2 && alpha.y === y2){
                cond1 = beta.slice(0,pos);
        }
        }) 
    })
    
    if(Object.keys(cond1).length>0){
        let cond = true;
        cond1.forEach(item=>{
            let cell = game.getItemCell(item)
            if((cell.case && cell.case._lineofsight) || cell.unité){
                cond = false
            } 
        })
        return cond;
    }else{
        
        if(x-x2>=0 && y-y2>=0){
            if(x2%2 === 1){
                cond2 = [{x:x2+1,y:y2+1},{x:x2+1,y:y2}]
            }else{
                cond2 = [{x:x2+1,y:y2},{x:x2,y:y2+1}]
            }  
        }else if(x-x2<=0 && y-y2>=0){
            if(x2%2 === 1){
                cond2 = [{x:x2-1,y:y2+1},{x:x2,y:y2+1}]
            }else{
                cond2 = [{x:x2-1,y:y2},{x:x2,y:y2+1}]
            }  
        }else if(x-x2 >= 0 && y-y2<=0){
            if(x2%2 === 1){
                cond2 = [{x:x2,y:y2-1},{x:x2+1,y:y2}]
            }else{
                cond2 = [{x:x2,y:y2-1},{x:x2+1,y:y2-1}]
            }  
        }else if(x-x2<=0 && y-y2<=0){
            if(x2%2 === 1){
                cond2 = [{x:x2-1,y:y2},{x:x2,y:y2-1}]
            }else{
                cond2 = [{x:x2-1,y:y2-1},{x:x2,y:y2-1}]
            } 
        }
        if(x-x2>0 && y === y2){
            if(x2%2 === 1){
                cond2 = [{x:x2+1,y:y2},{x:x2+1,y:y2+1}]
            }else{
                cond2 = [{x:x2+1,y:y2-1},{x:x2+1,y:y2}]
            } 
        }
        if(x-x2<0 && y === y2){
            if(x2%2 === 1){
                cond2 = [{x:x2-1,y:y2},{x:x2-1,y:y2+1}]
            }else{
                cond2 = [{x:x2-1,y:y2-1},{x:x2-1,y:y2}]
            } 
        }

        console.log(x,y,x2,y2)
        let case1 = game.getItemCell(cond2[0])
        let blockedbycase1 = (case1 && case1.case && case1.case._lineofsight ) || (case1 && !!case1.unité);
        let case2 = game.getItemCell(cond2[1])
        let blockedbycase2 = (case2 && case2.case && case2.case._lineofsight ) || (case2 && !!case2.unité);

        if(blockedbycase1 && blockedbycase2){
            return false
        }else{
            return true
        }

    

    }
    
}

export function switchResult(unité,Star,Grenade){
    let ran = Math.floor(Math.random() * 6) + 1
    switch(ran){
        case 1:
            return {result:"Soldat",dice:unité._type === "Soldat"};
        case 2:
            return {result:"Grenade",dice:Grenade};  
        case 3:
            return {result:"Soldat",dice:unité._type === "Soldat"};
        case 4:
            return {result:"Tank",dice:unité._type === "Tank"};
        case 5:
            return {result:"Flag",dice:false}
        case 6:
            return {result:"Star",dice:Star};
        default:
            return {result:"Soldat",dice:unité._type === "Soldat"};    
    }
}
export function Dice(nb,unité,setAnimation,Star,Grenade){
    let animation = new Array(6)
    let LoseLife = 0;
    let nbflag = 0
    for (let index = 0; index < nb; index++) {
        let dice = switchResult(unité,Star,Grenade);
        if(dice.dice){LoseLife += 1}
        if(dice.result === "Flag"){nbflag += 1}
        animation[index]=dice.result;
        
    }
    setAnimation(animation)
    return {LoseLife:LoseLife,nbflag:nbflag};
}

export function Flag(x,y,nbflag,camp){ 
    //1 pos toucé 2 pos tiré
    let list = []
    if(camp === "Axis"){
        if(nbflag >= 1){
            list.push({x:x-1,y:x%2===1 ?y+1:y,flag:1});
            list.push({x:x-1,y:x%2===1 ?y:y-1,flag:1});
        }
        if(nbflag >= 2){
            list.push({x:x-2,y:y-1,flag:2});
            list.push({x:x-2,y:y,flag:2});
            list.push({x:x-2,y:y+1,flag:2});
        }
        if(nbflag >= 3){
            list.push({x:x-3,y:x%2===1 ?y-1:y-2,flag:3});
            list.push({x:x-3,y:x%2===1 ?y:y-1,flag:3});
            list.push({x:x-3,y:x%2===1 ?y+1:y,flag:3});
            list.push({x:x-3,y:x%2===1 ?y+2:y+1,flag:3});
        }
    }else{
        if(nbflag >= 1){
            list.push({x:x+1,y:x%2===1 ?y+1:y,flag:1});
            list.push({x:x+1,y:x%2===1 ?y:y-1,flag:1});
        }
        if(nbflag >= 2){
            list.push({x:x+2,y:y-1,flag:2});
            list.push({x:x+2,y:y,flag:2});
            list.push({x:x+2,y:y+1,flag:2});
        }
        if(nbflag >= 3){
            list.push({x:x+3,y:x%2===1 ?y-1:y-2,flag:3});
            list.push({x:x+3,y:x%2===1 ?y:y-1,flag:3});
            list.push({x:x+3,y:x%2===1 ?y+1:y,flag:3});
            list.push({x:x+3,y:x%2===1 ?y+2:y+1,flag:3});
        }
    }
    return VerList(list)
}

// list.push({x:x,y:y})

export function LogList(list){
    let list2 = [...list]
    list2.sort((a, b) => {
        if (a.x === b.x) {
            return a.y - b.y;
        }
        return a.x - b.x;
    });
    console.log(list2)
}