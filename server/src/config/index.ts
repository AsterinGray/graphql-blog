import 'dotenv/config'

export const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/graphql-blog'
export const JWT_SECRET = process.env.JWT_SECRET || 'secret'