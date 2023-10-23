import { createContext, ReactNode, useState } from "react";
import { motorcycle } from "../service/MotorcycleService";
import { AxiosRequestConfig } from "axios";

export const RentalContext = createContext({});

interface Props {
    children: ReactNode;
}

export function RentalProvider({children}: Props) {
    const [motorcycles, setMotorcycles] = useState([]);
    const [config, setConfig] = useState<AxiosRequestConfig>({
        headers: {
            'Authorization': "",
            'Content-Type': 'application/json'
        }
    })
    const [isSinged, setIsSinged] = useState(true);

    const getAllMotorcycles = () => {
        motorcycle.getAll(config).then(response=> {
            setMotorcycles(response.data);
        }).catch(error=> {
            console.log(error);
        })
    }

    return(
        <RentalContext.Provider value={{
            motorcycles,
            setConfig,
            getAllMotorcycles,
            setIsSinged,
            isSinged,
        }}>
            {children}
        </RentalContext.Provider>
    )
}