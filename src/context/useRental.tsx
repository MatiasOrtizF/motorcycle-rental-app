import { createContext, ReactNode, useState } from "react";
import { motorcycle } from "../service/MotorcycleService";
import { AxiosRequestConfig } from "axios";
import { Motorcycle, MyRentals, RentalData, UserData } from "../types/index";
import { save } from "../service/SaveService";
import { user } from "../service/UserService";
import { error } from "console";
import { Alert } from "react-native";

export const RentalContext = createContext({
    motorcycles: [] as Motorcycle[],
    motorcyclesSave: [] as Motorcycle[],
    priceRange: 0,
    setPriceRange: (value: number)=> {},
    gpsSelected: 'all',
    setGpsSelected: (value: string | boolean)=> {},
    setConfig: (config: AxiosRequestConfig)=> {},
    getAllMotorcycles: ()=> {},
    getAllSaveMotorcycles: ()=> {},
    saveMotorcycle: (motorcycleId: number)=> {},
    unsaveMotorcycle: (motorcycleId: number) => {},
    setIsSinged: (value: boolean)=> {},
    isSinged: false,
    filteredMotorcycle: [] as Motorcycle[],
    userData: {} as UserData,
    setUserData: (value: UserData)=> {},
    myRentals: [] as MyRentals[],
    myRentalsByUser: ()=> {},
    rentalData: {} as RentalData,
    logOut: ()=> {}
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
            'Authorization': '',
            'Content-Type': 'application/json'
        }
    })
    const [isSinged, setIsSinged] = useState<boolean>(false);
    const [userData, setUserData] = useState<UserData>({
        email: '',
        lastName: '',
        name: ''
    });
    const [myRentals, setMyRentals] = useState<Array<MyRentals>>([]);
    const [rentalData, setRentalData] = useState<RentalData>({
        dayRental: '',
        dayReturn: '',
        totalPrice: 0,
        motorcycle: {
            id: 0
        },
    });

    const getAllMotorcycles = () => {
        motorcycle.getAll(config).then(response=> {
            setMotorcycles(response.data);
        }).catch(error=> {
            if(error.response.status === 401) {
                alert("Your session has expired. Please log in again.");
                logOut();
            }
            console.log(error);
        })
    }

    const getAllSaveMotorcycles = () => {
        save.getAllByUser(config).then(response=> {
            const motorcyclesData = response.data.map((item: any) => item.motorcycle)
            setMotorcyclesSave(motorcyclesData);
        }).catch(error=> {
            if(error.response.status === 401) {
                alert("Your session has expired. Please log in again.");
                logOut();
            }
            console.log(error);
        })
    }

    const saveMotorcycle = (motorcycleId: number) => {;
        save.saveMotorcycle(config, motorcycleId).then(response=> {
            getAllSaveMotorcycles();
        }).catch(error=> {
            if(error.response.status === 400) {
                alert("This motorcycle Has already saved."); //The user has already saved this motorcycle
            } else if(error.response.status === 404) {
                alert(error.response.data); //Motorcycle or User does not exist
            } else if(error.response.status === 401) {
                alert("Your session has expired. Please log in again.");
                logOut();
            }
            else {
                console.error("Error", error);
            }
        })
    }

    const unsaveMotorcycle = (motorcycleId: number) => {
        save.unsaveMotorcycle(config, motorcycleId).then(response=> {
            getAllSaveMotorcycles();
        }).catch(error=> {
            if(error.response.status === 403) {
                alert(error.response.data); //User Mismatch
            } else if(error.response.status === 404) {
                alert(error.response.data); //Motorcycle or User does not exist
            } else if(error.response.status === 401) {
                alert("Your session has expired. Please log in again.");
                logOut();
            }
            else {
                console.error("Error", error);
            }
        })
    }

    const myRentalsByUser = () => {
        user.getRentalByUser(config).then(response=> {
            setMyRentals(response.data);
        }).catch(error=> {
            if(error.response.status === 401) {
                alert("Your session has expired. Please log in again.");
                logOut();
            }
            console.log(error); 
        })
    }

    const logOut = () => {
        setConfig({
            headers: {
                'Authorization': '',
            }
        });
        setIsSinged(false);
        setUserData({
            email: '',
            lastName: '',
            name: ''
        });
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
            unsaveMotorcycle,
            filteredMotorcycle,
            userData,
            setUserData,
            myRentals,
            myRentalsByUser,
            rentalData,
            logOut
        }}>
            {children}
        </RentalContext.Provider>
    )
}