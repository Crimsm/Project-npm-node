#!/usr/bin/env node
// import axios from 'axios';


const axios = require("axios");

const { getCode, getName } = require('country-list');

let countryCode = getCode(process.argv[2]);
 


// le () de la fonction represente l'endroit ou la variable dois aller

 async function getdates(a) {
   let resp = await axios.get("https://date.nager.at/api/v3/PublicHolidays/2017/AT");
   console.log(resp.data);
   for (let i = 0; i<resp.data.length; i++) {console.log();} 
}

getdates(countryCode);
