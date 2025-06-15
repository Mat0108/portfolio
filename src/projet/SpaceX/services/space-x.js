import axios from "axios";
export const getCapsules = async () => {
    const res = await axios.get(`https://api.spacexdata.com/v4/capsules`);
    return res.data;
}
export const getLaunches = async () => {
    const res = await axios.get(`https://api.spacexdata.com/v4/launches`);
    return res.data;
}

export const getRocket = async(id) =>{
    const res = await axios.get(`https://api.spacexdata.com/v4/rockets/${id}`);
    return res.data;    
}
export const getLaunchpads = async(id) =>{
    const res = await axios.get(`https://api.spacexdata.com/v4/launchpads/${id}`);
    return res.data;    
}
export const getOneCapsule = async(id) =>{
    const res = await axios.get(`https://api.spacexdata.com/v4/capsules/${id}`);
    return res.data;    
}
export const getPayload = async(id) =>{
    const res = await axios.get(`https://api.spacexdata.com/v4/payloads/${id}`);
    return res.data;
}

export const getLaunch = async(id)=>{
    const res = await axios.get(`https://api.spacexdata.com/v4/launches/${id}`);
    return res.data;
}