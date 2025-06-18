import axios from "axios";

export const login = async (user) =>{

    try{
        const response = await axios.post('http://localhost:3000/api/auth/login', {
            username: user.username,
            password: user.password
        });

        return response;

    }catch(error){
        console.error('Error:', error);
        throw error;
    }

}