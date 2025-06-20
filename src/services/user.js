import axios from "axios";

export const getProfilePic = async (id) =>{
    try{
        const result = await axios.get('/api/user/profile-pic', {
            params: {id}
        })

        return result.data.url;
    }catch(error){
        console.log(error);
    }
}