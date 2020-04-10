const axios = require("axios");

axios
  .get(
    "http://api.openweathermap.org/data/2.5/forecast?q=Seoul&appid=18869f4f01a37ac87f4c23f6fc1c6a21"
  )
  .then((res) => console.log(res.data.list));
