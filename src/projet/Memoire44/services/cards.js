import axios from "axios";
export const CreateGame = async (gamename) => {
    console.log('gamename : ', gamename)
    const res = await axios.post(`https://memoire44back.onrender.com/game/new`,{gamename:gamename});
    return res.data;
}
export const getGame = async (gamename) => {
    const res = await axios.get(`https://memoire44back.onrender.com/game/getCard/${gamename}`);
    console.log(res)
    return res.data;
}
export const drawCard = async (gamename,userPlay,RemoveCardIndex,) => {
    const res = await axios.post(`https://memoire44back.onrender.com/game/play/${gamename}`,{userPlay:userPlay,RemoveCardIndex});
    return res.data;
}
