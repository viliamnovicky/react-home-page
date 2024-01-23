import { useQuery } from "@tanstack/react-query";
import { getDieselPriceAustria, getDieselPriceGermany } from "../../services/apiDieselPrice";

export function useDieselGermanyData() {
    const {isLoading: isLoadingDieselGermany, data: dieselGermanyData, error: errorGermany} = useQuery({
        queryKey:"dieselGermany",
        queryFn: getDieselPriceGermany
    })
    
    return {isLoadingDieselGermany, errorGermany, dieselGermanyData}
}

export function useDieselAustriaData() {
    const {isLoading: isLoadingDieselAustria, data: dieselAustriaData, error: errorAustria} = useQuery({
        queryKey:"dieselAustria",
        queryFn: getDieselPriceAustria
    })
    
    return {isLoadingDieselAustria, errorAustria, dieselAustriaData}
}