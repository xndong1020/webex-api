const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    isRequired: true
  },
  email: {
    type: String,
    isRequired: true
  },
  password: {
    type: String,
    isRequired: true
  },
  devices: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Device' }]
})

UserSchema.pre('save', async function() {
  let user = this
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(user.password, salt)
  user.password = hashedPassword
})

const User = mongoose.model('User', UserSchema)

module.exports = User
