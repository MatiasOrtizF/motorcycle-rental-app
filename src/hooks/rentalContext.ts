import { useContext } from "react";
import { RentalContext } from "../context/useRental";

export const useRental = () => {
    const context = useContext(RentalContext)

    return context
}