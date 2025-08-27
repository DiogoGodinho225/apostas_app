import axios from "axios";

export const getUser = async (id) =>{

    try{
        const result = await axios.get(`/api/user/${id}`)

        return result;
        
    }catch(error){
        console.log(error);
    }

    return null;
}

export const getUserTransactions = async (id) =>{
    try {
        const result = await axios.get(`/api/user/${id}/transactions`);

        return result;
    } catch (error) {
        console.error(error);
    }
}

export const updateUserImage = async (userId, formData) =>{
    try {
        const result = await axios.put(`/api/user/${userId}`, formData)

        return result;
    } catch (error) {
        console.error(error);
    }
}