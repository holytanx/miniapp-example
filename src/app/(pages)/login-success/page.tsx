"use client";

import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
    
    const redirect = (e: any) => {
        router.push("/")
    }

    return <div>
        <h1>Login success!</h1>
        <button onClick={(e) => redirect(e)}>Redirect</button>
    </div>
}

export default Page;