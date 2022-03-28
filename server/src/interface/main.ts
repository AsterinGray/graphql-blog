export interface Post {
    _id: string,
    title: string,
    content: string,
    published: boolean,
    author: Profile
}

export interface User {
    _id: string,
    email: string,
    name: string,
    password: string,
    posts: Post[],
    profile: Profile
}

export interface Profile {
    _id: string,
    bio: string,
    user: Profile
}