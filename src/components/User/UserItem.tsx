import React from 'react';
import {Dish} from "../../../types";

interface Props {
    dish: Dish;
}

const UserItem: React.FC<Props> = ({dish}) => {

    return (
        <div className="card mb-2">
            <div className="row g-0">
                <div className="col-sm-4 rounded-start" />
                <div className="col-sm-8">
                    <div className="card-body">
                        <h5 className="card-title">{dish.name}</h5>
                        <p className="card-text small">{dish.email}</p>
                        <p className="card-text small">{dish.active}</p>
                        <p className="card-text small">{dish.role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserItem;