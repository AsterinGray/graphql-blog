import { Schema, model, models } from 'mongoose'
import { Post } from '../interface'

const PostSchema = new Schema<Post>({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	published: {
		type: Boolean,
		required: true,
		default: false
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
}, { timestamps: true })

const PostModel = models.Post || model<Post>('Post', PostSchema)

export default PostModel