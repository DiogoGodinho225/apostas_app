import axios from "axios";

export const getUser = async (id) =>{

    try{
        const result = await axios.get('/api/user/getUser', {
            params: {id}
        })

        return result;
        
    }catch(error){
        console.log(error);
    }

    return null;
}