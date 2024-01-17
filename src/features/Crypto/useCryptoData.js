import { useQuery } from "@tanstack/react-query";
import { getCryptoData } from "../../services/apiCrypto";

export function useCryptoData() {
    const {isLoading, data: cryptoData, error} = useQuery({
        queryKey: ["crypto"],
        queryFn: getCryptoData
    })
    return {isLoading, error, cryptoData}
} 