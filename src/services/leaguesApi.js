import axios from "axios";

export const getLeagues = async () => {

    try {
        const response = await axios.get('/api/leagues');

        return response;
    } catch (error) {
        console.error(error);
    }

    return null;
}

export const getLeague = async (id) =>{
    try{
        const response = await axios.get(`/api/leagues/${id}`);

        return response;
    }catch(error){
        console.error(error);
    }

    return null;
}

export const deleteLeague = async (leagueId) => {
    try {
        const response = await axios.delete(`/api/leagues/${leagueId}`);

        return response;
    } catch (error) {
        console.error(error);
    }

    return null;
}

export const createLeague = async (formData) => {
    try{
        const response = await axios.post('/api/leagues', formData);

        return response;
    }catch(error){
        console.error(error);
    }

    return null;
}

export const updateLeague = async (formData) => {
    try{
        const response = await axios.put('/api/leagues', formData);

        return response;
    }catch(error){
        console.error(error);
    }

    return null;
}

export const AddTeam = async (teamId, leagueId) => {
    try {
        const response = await axios.post(`/api/leagues/${leagueId}/teams`, {teamId});

        return response;
    } catch (error) {
        console.error(error);
    }

    return null;
}

export const DeleteTeam = async(teamId, leagueId) =>{
    try {
        const response = await axios.delete(`/api/leagues/${leagueId}/teams`, {data: {teamId}})
        
        return response;
    } catch (error) {
        console.error(error)
    }

    return null;
}