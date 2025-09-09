"use server";

import {z} from "zod";

const testUser = {
    id: "1",
    email: "ehemon@gmail.com",
    pasword: "123123123",
}

const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }).trim(),
    pasword: z
    .string()
    .min(8, {message: "Password must be at least 8 characters"})
    .trim(),
});

export async function login(prevState: any, formData: FormData){
    const result = loginSchema.safeParse(Object.fromEntries(formData));

    if(!result.success){
        return{

            errors: result.error.flatten().fieldErrors,
        }
        
    }

    const { email, pasword} = result.data;
    if(email !== testUser.email || pasword !== testUser.pasword){
        return{
            erors:{
                email: ["Invalid email or Pasword"],
            }
        }
    }
}

export async function logout(){

}