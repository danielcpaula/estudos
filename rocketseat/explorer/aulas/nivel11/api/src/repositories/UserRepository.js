const sqliteConnection = require("../database/sqlite")

class UserRepository {
  async  findByEmail(email) {
    const database = await sqliteConnection()
    const user = await database.get("SELECT * FROM users WHERE EMAIL = (?)", [email])
  }
}

module.exports = UserRepository