import axios from "axios";

export const register = async (user) =>{
    try{
        const response = await axios.post('/api/auth/register', {
            username: user.username,
            email: user.email,
            password: user.password,
        });

        return response;

    }catch(error){
        console.error('Error:', error);
        throw error;
    }

    return null;
}