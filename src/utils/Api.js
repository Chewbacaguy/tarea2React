const axios = require('axios');



export const endpoint = "https://openlibrary.org/isbn/";
//b043df5a
class Api {

  
    static GET = (url, onSuccess=()=>{} ) => {
        axios.get(endpoint + url)
          .then(function (response) {
            console.log(response);
            onSuccess(response.data)
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          });  
        
    }

    static PUT = (url, data) => {
      // axios.put(endpoint + codigoLibro + ".json")
      // .then(function (response) {
      //   console.log(response);
      //   onSuccess(response.data)
      // })
      // .catch(function (error) {
      //   console.log(error);
      // })
      // .then(function () {
      //   // always executed
      // });  
    }

    static POST = (url, data) => {

    }

    static DELETE = (url, data) => {

    }
}

export default Api