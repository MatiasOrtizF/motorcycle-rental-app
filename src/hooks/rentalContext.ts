import { useContext } from "react";
import { RentalContext } from "../context/useRental";

export const userRental = () => {
    const context = useContext(RentalContext)

    return context
}