import axios from "axios";

export const getLeagues = async () => {

    try {
        const response = await axios.get('/api/leagues/getLeagues');

        return response;
    } catch (error) {
        console.error(error);
    }

    return null;
}

export const getLeague = async (id) =>{
    try{
        const response = await axios.get(`/api/leagues/getLeague?id=${id}`);

        return response;
    }catch(error){
        console.error(error);
    }

    return null;
}

export const deleteLeague = async (leagueId) => {
    try {
        const response = await axios.delete(`/api/leagues/delete?id=${leagueId}`);

        return response;
    } catch (error) {
        console.error(error);
    }

    return null;
}

export const createLeague = async (formData) => {
    try{
        const response = await axios.post('/api/leagues/create', formData);

        return response;
    }catch(error){
        console.error(error);
    }

    return null;
}

export const updateLeague = async (formData) => {
    try{
        const response = await axios.put('/api/leagues/update', formData);

        return response;
    }catch(error){
        console.error(error);
    }

    return null;
}