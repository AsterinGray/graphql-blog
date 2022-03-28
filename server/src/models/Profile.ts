import { Schema, model, models } from 'mongoose'
import { Profile } from '../interface'

const ProfileSchema = new Schema<Profile>({
	bio: {
		type: String,
		required: true
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
}, { timestamps: true })

const ProfileModel = models.Profile || model<Profile>('Profile', ProfileSchema)

export default ProfileModel