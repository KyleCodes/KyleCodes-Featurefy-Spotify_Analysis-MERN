///////////////////////////////////////////////////////////////
//                   SERVICE STARTUP                         //
///////////////////////////////////////////////////////////////

const Config = require('./src/config/serverConfig')
const express = require("express")
const cors = require('cors')
const SpotifyController = require('./src/controller/SpotifyController')

const app = express() // create express app

app.use(cors())
app.use('/api', SpotifyController)

// start express server on port 
app.listen(Config.PORT_NUMBER, () => {
  console.log(`server started on port ${Config.PORT_NUMBER}`);
});
