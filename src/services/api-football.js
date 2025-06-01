import axios from 'axios';
const API_URL = 'https://v3.football.api-sports.io';
const API_HOST = 'v3.football.api-sports.io';
const API_KEY = '490bf22cd984e0f6833767a6676e1fe3';


function getSeason(){
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;

    if(month >= 1 && month <= 6){
        return year - 1;
    }else{
        return year;
    }
}

const currentSeason = getSeason();

export const fetchTPortugalTeams = async () =>{
    try {
        const response = await axios.get(`${API_URL}/leagues`, {
            headers: {
                'X-RapidAPI-Host': API_HOST,
                'X-RapidAPI-Key': API_KEY
            },
        });
        return response.data;
    }catch (error) {
        console.error('Error fetching teams:', error);
        throw error;
    }
}