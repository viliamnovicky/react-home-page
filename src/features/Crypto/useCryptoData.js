import { useQuery } from "@tanstack/react-query";
import { getCoinData, getCryptoData } from "../../services/apiCrypto";

export function useCryptoData() {
    const {isLoading, data: cryptoData, error} = useQuery({
        queryKey: ["crypto"],
        queryFn: getCryptoData
    })
    return {isLoading, error, cryptoData}
} 

export function useCoinData(coinId) {
    const {isLoading, data: coinData, error} = useQuery({
        queryKey: ["coin"],
        queryFn: getCoinData(coinId)
    })
    return {isLoading, error, coinData}
}