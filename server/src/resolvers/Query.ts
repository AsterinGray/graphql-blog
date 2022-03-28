import { Context } from '../interface'

export const Query = {
	user: async (parent: any,  args: any, { userId, UserModel }: Context) => {
		return UserModel.findById(userId)
	},
	profile: async (parent: any, args: any, { userId, ProfileModel }: Context) => {
		return ProfileModel.find({ user: userId })
	},
	posts: async (parent: any, args: any, { PostModel }: Context) => {
		return PostModel.find({ published: true }).sort({ createdAt: 1 })
	}
}