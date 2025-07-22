import axios from "axios";

export const createTeam = async (formData) =>{
    try {

        const response = await axios.post('/api/teams/create', formData);

        return response;
        
    } catch (error) {
        console.error(error);
    }

    return null;
}

export const getTeams = async () => {

    try {
        const response = await axios.get('/api/teams/getTeams');

        return response;
    } catch (error) {
        console.error(error);
    }

    return null;
}


export const deleteTeam = async (teamId) => {
    try {
        const response = await axios.delete(`/api/teams/delete?id=${teamId}`);

        return response;
    } catch (error) {
        console.error(error);
    }

    return null;
}

export const getTeam = async (teamId) => {
    try {
        const response = await axios.get(`/api/teams/getTeam?id=${teamId}`);

        return response;
    } catch (error) {
        console.error(error);
    }

    return null;
} 

export const updateTeam = async (formData) => {
    try {
        const response = await axios.put(`/api/teams/update`, formData);

        return response;
    } catch (error) {
        console.error(error);
    }
}