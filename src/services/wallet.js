import axios from "axios";

export const deposit = async (id, depositValue) =>{

    try{
        const result = await axios.put(` /api/wallet/${id}`, {
            depositValue: depositValue,
        })

        return result;
        
    }catch(error){
        console.log(error);
    }

    return null;
}