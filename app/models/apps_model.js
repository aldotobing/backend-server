const mongoose = require('mongoose')
const dbConfig = require('../../config/db_config.js')

mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = process.env.DATABASE_ACCESS || dbConfig.url

db.userModel = require('./user_model')(mongoose)

module.exports = db