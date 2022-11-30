import { useRouter } from "next/router";
import { useEffect } from "react";

export const useRedirest = (address: string) => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/' + address)
        },
            3000
        )
    }, [router])
}