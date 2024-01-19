import React from 'react';
import UserItem from "./UserItem";
import {Dish} from "../../../types";

interface Props {
    dishes: Dish[];
}

const User: React.FC<Props> = ({dishes}) => {
    return (
        <>
            <h4>Dishes</h4>
            {dishes.map(dish => (
                <UserItem
                    key={dish.id}
                    dish={dish}
                />
            ))}

        </>
    );
};

export default User;