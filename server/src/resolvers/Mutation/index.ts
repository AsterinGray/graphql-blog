import { auth } from './auth'
import { post } from './post'
 
export const Mutation = { ...auth, ...post }