import { Model } from 'mongoose'

import { Post, Profile, User } from './main'

export interface Context {
    userId: string | null
    PostModel: Model<Post>
    ProfileModel: Model<Profile>
    UserModel: Model<User>
}

export interface SignupArgs {
    credentials: {
        email: string;
        password: string;
    };
    name: string;
    bio: string;
}

export interface SigninArgs {
    credentials: {
        email: string;
        password: string;
    };
}

export interface PostArgs {
    post: {
        title?: string;
        content?: string;
    };
}

export interface PostIdArgs {
    postId: string
}

export interface UpdatePostArgs extends PostArgs, PostIdArgs{
}

export interface UserPayload {
    error: string | null;
    token: string | null;
}

export interface PostPayload {
    error: string | null;
    post: Post | null;
}