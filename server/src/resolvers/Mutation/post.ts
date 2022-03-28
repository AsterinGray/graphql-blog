import { Context, PostArgs, PostIdArgs, PostPayload, UpdatePostArgs } from '../../interface'
import { validatePostMutation } from '../../utils'

export const post = {
	postCreate: async (parent: any, { post }: PostArgs, { userId, PostModel }: Context): Promise<PostPayload> => {
		if(!userId) return { error: 'Forbidden', post: null }

		const { title, content } = post
		if(!title || !content) return { error: 'Title and Content needed', post: null }

		const createdPost = new PostModel({ title, content, author: userId })
		await createdPost.save()
		return { error: null, post: createdPost }
	},
	postUpdate: async (parent: any, { post, postId }: UpdatePostArgs, { userId, PostModel, UserModel }: Context): Promise<PostPayload> => {
		const mutationValidationError = await validatePostMutation(userId, postId, PostModel, UserModel)
		if(mutationValidationError) return mutationValidationError

		const { title, content } = post
		if(!title && !content) return { error: 'At least Title or Content needed', post: null }

		const updatedPost = await PostModel.findByIdAndUpdate(postId, post, { new: true })
		return { error: null, post: updatedPost }
	},
	postDelete: async (parent: any, { postId }: PostIdArgs, { userId, PostModel, UserModel }: Context): Promise<PostPayload> => {
		const mutationValidationError = await validatePostMutation(userId, postId, PostModel, UserModel)
		if(mutationValidationError) return mutationValidationError

		await PostModel.findByIdAndDelete(postId)
		return { error: null, post: null }
	},
	postPublish: async (parent: any, { postId }: PostIdArgs, { userId, PostModel, UserModel }:Context): Promise<PostPayload> => {
		const mutationValidationError = await validatePostMutation(userId, postId, PostModel, UserModel)
		if(mutationValidationError) return mutationValidationError

		const updatedPost = await PostModel.findByIdAndUpdate(postId, { published: true }, { new: true })
		return { error: null, post: updatedPost }
	},
	postUnpublish: async (parent: any, { postId }: PostIdArgs, { userId, PostModel, UserModel }: Context): Promise<PostPayload> => {
		const mutationValidationError = await validatePostMutation(userId, postId, PostModel, UserModel)
		if(mutationValidationError) return mutationValidationError

		const updatedPost = await PostModel.findByIdAndUpdate(postId, { published: false }, { new: true })
		return { error: null, post: updatedPost }
	},
}
 