import axios from 'axios';

const url ="https://covid19.mathdro.id/api"

export const fetchData =async(country)=>{
    let changeableUrl = url;
    if(country){
        changeableUrl=`${url}/countries/${country}`
    }
    try{
        const {data :{confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeableUrl)
        
        return { confirmed,recovered, deaths,lastUpdate}

    }catch(error){
        console.log("something went wrong")
    }
}

export const fetchCountries =async()=>{
    try {
        const {data:{countries}} =await axios.get(`${url}/countries`)
        // console.log(response)
        return countries.map((country)=>country.name)
    } catch (error) {
        console.log("something went wrong in fetching countries")
    }
}