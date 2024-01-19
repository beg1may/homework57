export interface Dish {
    id: string;
    name: string;
    email: string;
    active: boolean;
    role: string;
}

export interface DishMutation {
    name: string;
    email: string;
    active: boolean;
    role: string;
}