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

export const deleteLeague = async (leagueId) => {
    try {
        const response = await axios.delete(`/api/leagues/delete?id=${leagueId}`);

        return response;
    } catch (error) {
        console.error(error);
    }

    return null;
}