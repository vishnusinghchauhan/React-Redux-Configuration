const express = require('express');
const axios = require('axios');
const router = express.Router();

/*
 * This function is used to get list of all guardian
 * @param taking {number} pageIndex  to page index
 * @param return {Array} of all gurdian  
 */
router.get('/getlist', (req, res) => {
	console.log("getlist calling")
   return axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
          console.log("response", response.data.length)
          //return response
          return res.send(response.data)
    }).catch(err => {
          console.log("ERR",err)
          return res.send(err)

    });
});

module.exports = router;