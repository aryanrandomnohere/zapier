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

export const ZapCreateSchema = z.object({
    triggerId: z.string(),
    triggerMetadata: z.any().optional(),
    actions:z.array(z.object({
        actionId:z.string(),
        actonMetadata:z.any().optional()
    })),
    })
