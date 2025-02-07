import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AuthGaurd =({children}:{children: React.ReactNode})=>{
const [isLoading, setIsLoading] = useState(true);
const {isSignedIn}=useUser()
const router= useRouter();


useEffect(() => {
    if (isSignedIn === false){
        router.replace ("signIn")
    }else {
        setIsLoading(false)
    }
} ,[isSignedIn, router])

if (isLoading) return <div>Loading...</div>
return <>{children}</>
}
export default AuthGaurd