import {z} from "zod"


export const registerSchema = z.object({
	name :z.string().min(3,"Name Must be at least 3 characters"),
	email :z.string().email("Invalid email adress"),
	password:z.string().min(6, "password ,must be at least 6 characters"),
	role:z.enum([
		"CLIENT",
		"FREELANCER"
	]),
})

export const loginSchema = z.object({
	email :z.string().email("Invalid email adress"),
	password:z.string().min(6, "password ,must be at least 6 characters"),
})

export type RegisterInput =z.infer<typeof registerSchema>

export type loginSchema = z.infer<typeof loginSchema>

