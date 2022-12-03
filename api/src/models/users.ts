import mongoose from 'mongoose'

interface IUser {
  firstName: string;
  lastName: string;
  uid: string;
  dob: string;
  phone: string;
  role: string;
}

interface UserModelInterface extends mongoose.Model<UserDoc> {
  build(attr: IUser): UserDoc
}

interface UserDoc extends mongoose.Document {
  firstName: string;
  lastName: string;
  uid: string;
  dob: string;
  phone: string;
  role: string;
}

const userSchema = new mongoose.Schema({
  firstName: {
    type: String, 
    required: true
  },
  lastName: {
    type: String, 
    required: true
  },
  uid: {
    type: String, 
    required: true
  },
  dob: {
    type: String, 
    required: true
  },
  phone: {
    type: String, 
    required: true
  },
  role: {
    type: String, 
    required: false
  },
})

userSchema.statics.build = (attr: IUser) => {
  return new User(attr)
}

const User = mongoose.model<UserDoc, UserModelInterface>('users', userSchema)

export { User }