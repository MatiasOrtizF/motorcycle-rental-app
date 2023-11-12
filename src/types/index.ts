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