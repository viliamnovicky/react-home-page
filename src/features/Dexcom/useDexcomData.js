import { useQuery } from "@tanstack/react-query";
import { getDexcomData } from "../../services/apiDexcom";


  export function useDexcomData(key) {
    const {isLoading: isLoadingDexcomData, data: dexcomData, error: errorDexcom} = useQuery({
        queryKey:"dexcom",
        queryFn: () => getDexcomData(key)
    })

    return {isLoadingDexcomData, dexcomData, errorDexcom}
  }