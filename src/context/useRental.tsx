import { createContext, ReactNode, useState } from "react";
import { motorcycle } from "../service/MotorcycleService";
import { AxiosRequestConfig } from "axios";

export const RentalContext = createContext({
    motorcycles: [] as Motorcycle[],
    setConfig: (config: AxiosRequestConfig)=> {},
    getAllMotorcycles: () => {},
    setIsSinged: (value: boolean) => {},
    isSinged: false,
});

interface Props {
    children: ReactNode;
}

interface Motorcycle {
    id: number,
    motorcycleName: string,
    image: string,
    gps: boolean,
    price: number
}

export function RentalProvider({children}: Props) {
    const [motorcycles, setMotorcycles] = useState<Array<Motorcycle>>([]);
    const [config, setConfig] = useState<AxiosRequestConfig>({
        headers: {
            'Authorization': "",
            'Content-Type': 'application/json'
        }
    })
    const [isSinged, setIsSinged] = useState<boolean>(false);

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
            isSinged
        }}>
            {children}
        </RentalContext.Provider>
    )
}