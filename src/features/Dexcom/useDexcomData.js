import { useQuery } from "@tanstack/react-query";
import { getDexcomData, getDexcomToken } from "../../services/apiDexcom";


  export function useDexcomData(key) {
    const {isLoading: isLoadingDexcomData, data: dexcomData, error: errorDexcom} = useQuery({
        queryKey:"dexcom",
        queryFn: () => getDexcomData(key)
    })

    return {isLoadingDexcomData, dexcomData, errorDexcom}
  }

  export function useDexcomToken(code) {
    const {isLoading: isLoadingDexcomToken, data: dexcomToken, error: errorDexcomToken} = useQuery({
        queryKey:"dexcom",
        queryFn: () => getDexcomToken(code)
    })

    return {isLoadingDexcomToken, dexcomToken, errorDexcomToken}
  }