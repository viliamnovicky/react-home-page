import { useQuery } from "@tanstack/react-query";
import { getDieselPriceAustria, getDieselPriceGermany } from "../../services/apiDieselPrice";

export function useDieselGermanyData() {
    const {isLoading: isLoadingDieselGermany, data: dieselGermanyData, error: errorGermany} = useQuery({
        queryKey:"dieselGermany",
        queryFn: getDieselPriceGermany
    })
    console.log(dieselGermanyData)
    return {isLoadingDieselGermany, dieselGermanyData, errorGermany}
}

export function useDieselAustriaData() {
    const {isLoading: isLoadingDieselAustria, data: dieselAustriaData, error: errorAustria} = useQuery({
        queryKey:"dieselAustria",
        queryFn: getDieselPriceAustria
    })
    console.log(dieselAustriaData)
    return {isLoadingDieselAustria, dieselAustriaData, errorAustria}
}