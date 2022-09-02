const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express()
dotenv.config()

const database = require('./app/models/apps_model')
database.mongoose.connect(process.env.DATABASE_ACCESS, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connection success')
    })
    .catch((error) => {
        console.log('Not Connected', error)
    })

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({message:'welcome'})
})

require('./app/routes/apps_route')(app)

const PORT = process.env.APP_PORT || 3030
app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`))