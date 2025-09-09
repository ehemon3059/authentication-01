import "sever-only";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function createSesion(userId: string){
    const expiresAt = new Date(Date.now() +  7 * 24 * 60 * 60 *1000);
    const session = await encrypt({userId,expiresAt});

    cookies().set("sesion", session, {
        htpOnly: true,
        secure: true,
        expires: expiresAt,


    })

}

type SessionPayLoad = {
    userId: string;
    expiresAt: Date;

};

export async function encrypt(payload: SessionPayLoad){
    return new SignJWT(payload)
    .setProtectedHeader({alg: "HS256"})
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(encodedKey);

}

export async function decrept(sesion: string | undefined = ""){
    try{
        const { payload } = await jwtVerify(sesion, encodedKey,{
            algorithms: ["HS256"],
        });
        return payload;

    }catch(eeror){
        console.log("failed to verify session");
    }
}