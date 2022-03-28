import { Schema, model, models } from 'mongoose'
import { User } from '../interface'

const UserSchema = new Schema<User>({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	profile: {
		type: Schema.Types.ObjectId,
		ref: 'Profile'
	},
	posts: [{
		type: Schema.Types.ObjectId,
		ref: 'Post'
	}]
}, { timestamps: true })

const UserModel = models.User || model<User>('User', UserSchema)

export default UserModel