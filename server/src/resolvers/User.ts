import { Context, UserParentType } from '../interface'

export const User = {
	posts: async (parent: UserParentType, args: any, { userId, PostModel }: Context) => {
		const isOwnProfile = parent.id === userId
		if (isOwnProfile) {
			return PostModel.find({ author: userId }).sort({ createdAt: 1 })
		} else {
			return PostModel.find({ author: userId, published: true }).sort({ createdAt: 1 })
		}
	}
}
 