import axios from "axios";

export const getUserBets = async(userId) =>{
    try {
        const response = await axios.get(`/api/bets/${userId}`);

        return response;
    } catch (error) {
        console.error(error);
    }

    return null;
}

export const makeBet = async(bet) =>{
    try {
        const response = await axios.post('/api/bets', bet);

        return response;
    } catch (error) {
        console.error(error);
    }

    return null;
}

export const betStatus = async(betId, betLineId, status)=>{
    try{
        const response = await axios.put(`/api/bets/${betId}/betLine/${betLineId}`, {status: status});

        return response;
    }catch(error){
        console.error(error)
    }
}