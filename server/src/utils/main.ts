import jwt, { JwtPayload } from 'jsonwebtoken'

import { JWT_SECRET } from '../config'

interface UserJwtPayload extends JwtPayload {
    id: string
}

export function getUserId(token: string | undefined) {
	if(token) {
		try {
			const { userId }  = jwt.verify(token, JWT_SECRET) as UserJwtPayload
			return userId
		} catch (e) {
			return null
		}
	}
	return null
}