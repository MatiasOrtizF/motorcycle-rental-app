import exp from "constants"

export interface Motorcycle {
    id: number
    image: string
    motorcycleName: string
    price: number
    gps: boolean | string
    rating: number
    length: number
    torque: number
    weight: number
    fuel: number
}

export interface UserLoginData {
    email: string,
    password: string
}

export interface UserData {
    name: string
    lastName: string
    email: string
}

export interface MyRentals {
    id: number
    dateRental: Date
    dateReturn: Date
    totalPrice: number
    user: UserData
    motorcycle: Motorcycle
}

export interface RentalData {
    dateRental: Date
    dateReturn: Date
    totalPrice: number
    motorcycle: {
        id: number
    }
}

export interface Features {
    title: string,
    value: number
}

export interface PaymentStatus {
    title: string,
    value: string | number
}