import {z} from "zod"
export const signUpSchema  = z.object({
    email: z.string().email(),
    firstname:z.string().min(3),
    lastname:z.string().min(3),
    password: z.string().min(8),
})
export const logInSchema = z.object({
    email:z.string().email(),
    password:z.string().min(8)
})