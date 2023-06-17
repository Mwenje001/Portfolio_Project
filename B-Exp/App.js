const express = require('express');
const cors = require('cors');
const data_base = require('./Database/datab');
const { readdirSync} = require('fs');
const { route } = require('./Routes/Transactions');
const app = express();

require('dotenv').config()

require ('dotenv').config()

const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

const server = () => {
    data_base()

    app.listen(PORT, () => {
        console.log('listening on port', PORT)
    })
}

server()