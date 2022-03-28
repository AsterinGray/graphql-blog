import { User } from './main'

export interface PostParentType {
    author: User
}

export interface UserParentType {
    id: string
}

export interface ProfileParentType {
    id: string
    bio: string
    userId: string
}