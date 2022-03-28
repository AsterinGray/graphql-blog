import { Context, PostParentType } from '../interface'

export const Post = {
	user: async ({ author }: PostParentType, args: any, { UserModel }: Context) => {
		return UserModel.findById(author)
	}
}
 