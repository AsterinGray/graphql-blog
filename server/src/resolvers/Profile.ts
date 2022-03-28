import { Context, ProfileParentType } from '../interface'

export const Profile = {
	user: async (parent: ProfileParentType, args: any, { userId, UserModel }: Context) => {
		return UserModel.findById(userId)
	}
}
 