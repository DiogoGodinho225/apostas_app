import axios from "axios";

export const getProfilePic = async (id) =>{

    try{
        const result = await axios.get('/api/user/profile-pic', {
            params: {id}
        })

        if(result.status === 200){
            return result.data.url;
        }else{
            return result.status;
        }
        
    }catch(error){
        console.log(error);
    }
}