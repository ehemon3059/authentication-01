"use client";
import { useFormState } from "react-dom";

export function LoginForm(){
    return (
        <form className="flex max-w-[300px] flex-col gap-2">
            <div className="flex flex-col gap-2">
                <input id="name" name="name" placeholder="Name" />
            </div>

        </form>
    )
}