import { Model } from 'mongoose'

import { Post, PostPayload, User } from '../interface'

export const validateEmail = (email: string) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		)
}

export const validatePassword = (password: string) => {
	return password.length >= 8
}

export const validatePostMutation = async (userId: string|null, postId: string, PostModel: Model<Post>, UserModel: Model<User>): Promise<PostPayload | void> => {
	if(!userId) return { error: 'Forbidden', post: null }

	const _user = await UserModel.findById(userId)
	if(!_user) return { error: 'User not found', post: null }

	const _post = await PostModel.findById(postId)
	if(!_post) return { error: 'Post Not Found', post: null }

	if(_post.author._id.toString() !== _user.id) return { error: 'Forbidden', post: null }
}