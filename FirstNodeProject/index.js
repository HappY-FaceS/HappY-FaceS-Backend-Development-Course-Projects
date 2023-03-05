// const axios = require('axios');
import axios from 'axios';

//axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=47d243f2').then((response)=>{console.log(response);});

async function fetch()
{
    const response= await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=47d243f2');

    // console.log(response);
    console.log(response.data);


};

fetch();