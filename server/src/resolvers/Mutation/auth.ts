import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { Context, SigninArgs, SignupArgs, UserPayload } from '../../interface'
import { validateEmail, validatePassword } from '../../utils'
import { JWT_SECRET } from '../../config'

export const auth = {
	signup: async (parent: any, { credentials, name, bio }: SignupArgs, { UserModel, ProfileModel }: Context): Promise<UserPayload> => {
		const { email, password } = credentials

		const emailIsValid = validateEmail(email)
		if (!emailIsValid) return { error: 'Invalid Email', token: null }

		const passwordIsValid = validatePassword(password)
		if (!passwordIsValid) return { error: 'Invalid Password', token: null }

		if(!name || !bio) return { error: 'Invalid name or bio', token: null }

		const hashedPassword =  await bcrypt.hash(password, 10)

		const user = await UserModel.create({ name, bio, email, password: hashedPassword })
		await ProfileModel.create({ bio, user })

		return { error: '',  token: jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1d' }) }
	},
	signin: async (parent: any, { credentials }: SigninArgs, { UserModel }: Context): Promise<UserPayload> => {
		const { email, password } = credentials

		const user = await UserModel.findOne({ email })

		if(!user) return { error: 'Invalid credential', token: null }

		const isPasswordMatch = await bcrypt.compare(password, user.password)
		if(!isPasswordMatch) return { error: 'Invalid credential', token: null }

		return { error: '', token: jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1d' }) }
	}
}
