import { CaseGenerique, test3, test4 } from "../divers/Generique";

export class SelectHexa extends CaseGenerique {
    constructor(){
        super("images/Memoire44/divers/activated.webp")
    }
}
export class Move extends CaseGenerique {
    constructor(item){
        super(`images/Memoire44/divers/move_${item ? item : 1}.webp`,false,null,false,false,false,false,false,false,false,"opacity-60")
    }
}
export class Attacking extends CaseGenerique {
    constructor(){
        super("images/Memoire44/divers/attacking.webp")
    }
}
export class Selected extends CaseGenerique {
    constructor(){
        super("images/Memoire44/divers/attacking_selected.webp")
    }
}
export class Target extends CaseGenerique{
    constructor(nb){
        super(nb ? test4("divers","target-",nb):"images/Memoire44/divers/target.webp",nb)
    }
}
export class Retreat extends CaseGenerique{
    constructor(nb,nb2){
        super(nb === 0 ? "images/Memoire44/divers/retreat_0.webp" : test3("divers","retreat_",nb),nb)
        this._nb = nb2;
    }
    render(){
      return <div className="relative w-fit h-fit">
        <div className="absolute bottom-0 text-center text-white text-[20px] w-[80px]">
             {this._nb} vie
        </div>
        {super.render()}
      </div>  
    }
}
export class Medal extends CaseGenerique{
    constructor(cond){
        super(cond ? "images/Memoire44/divers/medalaxis.webp" : "images/Memoire44/divers/medalallies.webp",cond,null,null,null,null,null,null,null,null,null,"new Medal(",cond)
    }
    render(){
      return <div className="relative w-full h-full flex ">
        <div className="absolute top-2 left-0 ml-[70px] w-[45%]  ">{super.render()}</div>
        
      </div>  
    }
}
export class HexaVide extends CaseGenerique {
    constructor(){
        super("images/Memoire44/divers/vide.webp")
    }
}