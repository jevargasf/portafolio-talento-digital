import Sequelize from 'sequelize'
import * as dotenv from 'dotenv'
dotenv.config()

const database = new Sequelize('postgres://pgalenmw:8YBRya0aQWD2ePnDxd-ZudGcDBj2XzdE@babar.db.elephantsql.com/pgalenmw', {
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

export default database