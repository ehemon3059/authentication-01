"use client";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "./action";

export function LoginForm(){
    const [state, loginAction] = useActionState(login, undefined);
    
    return (
        <form className="flex max-w-[300px] flex-col gap-2">
            <div className="flex flex-col gap-2">
                <input id="name" name="name" placeholder="Name" />
            </div>
            <div className="flex flex-col gap-2">
                <input id="email" name="email" placeholder="Email" />
            </div>

            <div className="flex flex-col gap-2">

                <input id="password" type="password" 
                placeholder="Pasword" />
                
            </div>
            <SubmitButon />
        </form>
    )
}

function SubmitButon(){
    const {pending} = useFormStatus();
    return(
        <button disabled={pending} type="submit">Login</button>
    );
}