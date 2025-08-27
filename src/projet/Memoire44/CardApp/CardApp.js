

import React, { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router";
import { CreateGame, drawCard, getGame } from "../services/cards";
import MenuSelector from "../../../composant/MenuSelector.tsx";
import Loading from "../../SpaceX/composants/Loading.js";

const CardApp = ()=>{
    let [gameid,setGameid] = useState("");
    let [game,setGame] = useState()
    let [displayState,setDisplayState] = useState(0);
    let [camp,setCamp] = useState('Choix du camp')
    let [selectedCard,setSelectedCard] = useState()
    let [loadingCard,setLoadingCard] = useState(false)
    
    
    const params = useParams();
    // useEffect(()=>{
    //     if(params.gameid){
    //         setGameid(gameid)
    //         async function fetchData(){
    //             let result = await getGame(gameid)
    //             setGame(result)
    //         }
    //         fetchData();
    //     }else {
            
    //         async function fetchData(){
    //             let result = await CreateGame("gamename")
    //             console.log('result : ', result)
                
    //         }
    //         fetchData();
    //     }
    // },[gameid,params])
    function initGame(){
        async function fetchData(){

                let result = await CreateGame(gameid)
                console.log('result : ', result)
                setGame(result)
                setDisplayState(1)
            }
            fetchData();
    }
    function LoadGame(){
        async function fetchData(){
            let result = await getGame(gameid)
            console.log('result : ', result)
            if(result){
                console.log('here ',)
                
                setGame(result)
                setDisplayState(1);    
            }else{
                initGame();
            }
        }
        fetchData();
    }
    function Play(){
        async function fetchData() {
            let result = await drawCard(gameid,camp,selectedCard)
            setGame(result)
            setSelectedCard(null)        
            setLoadingCard(false)
        }
        fetchData()
        
    }
    
    const element = useMemo(()=>{
        if(displayState === 0){
            return <div className="w-full h-full flex flex-col center gap-2">
                <div className="flex flex-row gap-4">
                    <input className="w-[200px] bg-grey text-white font-mt-bold p-2 rounded-xl text-xs" placeholder="Saisir l'identifiant de partie" value={gameid} onChange={e=>setGameid(e.target.value)}/>
                    <MenuSelector boutonStyle="bg-grey text-white rounded-xl" fixedWidth="w-[165px]"  title={camp ? camp : "Choix du camp"} options={["Axe","Allies"].map(item=><div onClick={()=>setCamp(item === camp ? null : item)}>{item}</div>)}/>
                </div>
                <div className="flex flex-row gap-4">
                    <div onClick={()=>LoadGame()} className="bg-dark_blue text-white font-mt-bold border-2 border-white rounded-xl p-2">Se connecter</div>
                    <div onClick={()=>initGame()} className="bg-dark_blue text-white font-mt-bold bg-gray border-2 border-white rounded-xl p-2">Creer une partie</div>
                </div>
            </div>
        }else if(displayState === 1 && game){
            return <div className="w-full h-full flex flex-col items-center">
                <div className="w-[70%] h-[80%] flex flex-row justify-between flex-wrap gap-2">
                    {camp === 'Axe' ? game.CardsAxe.map((item,pos)=>
                    <div className="flex flex-col gap-1 center w-fit"> 
                        {loadingCard && pos === selectedCard? <div className="relative flex">
                            <div className="absolute flex center w-[30vw] h-full"><Loading size={"w-10"} darkMode={true}/></div>
                            <img src={`images/Memoire44/cards/commandement/back-fr-large.webp`} alt={`${item}-card`} className="w-[30vw] "/>
                        
                        </div>:
                        <img onClick={()=>{setSelectedCard(pos === selectedCard ? null : pos)}} src={`images/Memoire44/cards/commandement/${item}-large.webp`} alt={`${item}-card`} className="w-[30vw] "/>
                        }
                        {selectedCard !== pos ? "":<div onClick={()=>{setLoadingCard(true);Play()}} className="bg-blue text-white w-[30vw] rounded-lg text-center text-xs ">Confirmation d'avoir jouer cette carte </div>}
                    </div>):game.CardsAllies.map((item,pos)=>
                    <div className="flex flex-col gap-1 center w-fit"> 
                        {loadingCard && pos === selectedCard? <div className="relative flex">
                            <div className="absolute flex center w-[30vw] h-full"><Loading size={"w-10"} darkMode={true}/></div>
                            <img src={`images/Memoire44/cards/commandement/back-fr-large.webp`} alt={`${item}-card`} className="w-[30vw] "/>
                        
                        </div>:
                        <img onClick={()=>{setSelectedCard(pos === selectedCard ? null : pos)}} src={`images/Memoire44/cards/commandement/${item}-large.webp`} alt={`${item}-card`} className="w-[30vw] "/>
                        }
                        {selectedCard !== pos ? "":<div onClick={()=>{setLoadingCard(true);Play()}} className="bg-blue text-white w-[30vw] rounded-lg text-center text-xs ">Confirmation d'avoir jouer cette carte </div>}
                    </div>)}
                </div>
            </div>
        }
    },[displayState, game, gameid, camp,loadingCard, selectedCard])
    return element
}
export default CardApp