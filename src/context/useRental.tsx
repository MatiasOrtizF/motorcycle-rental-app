import { createContext, ReactNode, useState } from "react";
import { motorcycle } from "../service/MotorcycleService";

export const RentalContext = createContext({});

interface Props {
    children: ReactNode;
}

export function RentalProvider({children}: Props) {
    const [motorcycles, setMotorcycles] = useState([]);
    const [config, setConfig] = useState({
        headers: {
            'Authorization': "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwiaWF0IjoxNjk3ODMwNDg0LCJzdWIiOiJqdWFuLnBlcmV6QGVtYWlsLmNvbSIsImlzcyI6Ik1haW4iLCJleHAiOjE2OTg0MzUyODR9.BDdxCLFb7ZObpl9qx54_4JDfNr8zHWfPRoZMfHjmSnM",
            'Content-Type': 'application/json'
        }
    })

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
            getAllMotorcycles
        }}>
            {children}
        </RentalContext.Provider>
    )
}