import axios from "axios";

export const createTeam = async (formData) =>{
    try {

        const response = await axios.post('/api/teams', formData);

        return response;
        
    } catch (error) {
        console.error(error);
    }

    return null;
}

export const getTeams = async () => {

    try {
        const response = await axios.get('/api/teams');

        return response;
    } catch (error) {
        console.error(error);
    }

    return null;
}


export const deleteTeam = async (teamId) => {
    try {
        const response = await axios.delete(`/api/teams/${teamId}`);

        return response;
    } catch (error) {
        console.error(error);
    }

    return null;
}

export const getTeam = async (teamId) => {
    try {
        const response = await axios.get(`/api/teams/${teamId}`);

        return response;
    } catch (error) {
        console.error(error);
    }

    return null;
} 

export const updateTeam = async (formData) => {
    try {
        const response = await axios.put(`/api/teams`, formData);

        return response;
    } catch (error) {
        console.error(error);
    }
}