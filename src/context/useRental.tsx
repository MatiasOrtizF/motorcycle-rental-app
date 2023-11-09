import { createContext, ReactNode, useState } from "react";
import { motorcycle } from "../service/MotorcycleService";
import { AxiosRequestConfig } from "axios";
import Motorcycle from "../types/index";
import { save } from "../service/SaveService";

export const RentalContext = createContext({
    motorcycles: [] as Motorcycle[],
    motorcyclesSave: [] as Motorcycle[],
    priceRange: 0,
    setPriceRange: (value: number) => {},
    gpsSelected: 'all',
    setGpsSelected: (value: string | boolean) => {},
    setConfig: (config: AxiosRequestConfig)=> {},
    getAllMotorcycles: () => {},
    getAllSaveMotorcycles: ()=> {},
    saveMotorcycle: (motorcycleId: number)=> {},
    setIsSinged: (value: boolean) => {},
    isSinged: false,
    filteredMotorcycle: [] as Motorcycle[]
});

interface Props {
    children: ReactNode;
}

export function RentalProvider({children}: Props) {
    const [motorcycles, setMotorcycles] = useState<Array<Motorcycle>>([]);
    const [priceRange, setPriceRange] = useState<number>(0);
    const [gpsSelected, setGpsSelected] = useState<string | boolean>('all');
    const [motorcyclesSave, setMotorcyclesSave] = useState<Array<Motorcycle>>([]); 
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

    const getAllSaveMotorcycles = () => {
        save.getAllByUser(config).then(response=> {
            const motorcyclesData = response.data.map((item: any) => item.motorcycle)
            setMotorcyclesSave(motorcyclesData);
        }).catch(error=> {
            console.log(error);
        })
    }

    const saveMotorcycle = (motorcycleId: number) => {
        save.saveMotorcycle(config, motorcycleId).then(response=> {

        }).catch(error=> {
            console.log(error);
        })
    }

    const filtersMotorcycles = (motorcycles: Motorcycle[]) => {
        return motorcycles.filter((motorcycle: Motorcycle)=> {
            return (
                (gpsSelected === "all" || motorcycle.gps == gpsSelected) &&
                (motorcycle.price >= priceRange)
            )
        })
    }

    const filteredMotorcycle = filtersMotorcycles(motorcycles);

    return(
        <RentalContext.Provider value={{
            motorcycles,
            priceRange,
            setPriceRange,
            gpsSelected: String(gpsSelected),
            setGpsSelected,
            setConfig,
            getAllMotorcycles,
            setIsSinged,
            isSinged,
            getAllSaveMotorcycles,
            motorcyclesSave,
            saveMotorcycle,
            filteredMotorcycle
        }}>
            {children}
        </RentalContext.Provider>
    )
}