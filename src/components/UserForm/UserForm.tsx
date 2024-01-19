import React, { useState } from 'react';
import { Dish } from '../../../types';

interface Props {
    onSubmit: (dish: Dish) => void;
}

const UserForm: React.FC<Props> = ({ onSubmit }) => {
    const [dish, setDish] = useState({
        name: '',
        email: '',
        active: '',
        role: '',
    });

    const changeDish = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setDish((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            id: Math.random().toString(),
            ...dish,
        });
    };

    return (
        <form onSubmit={onFormSubmit}>
            <h4>Add new dish</h4>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    value={dish.name}
                    onChange={changeDish}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    id="email"
                    className="form-control"
                    value={dish.email}
                    onChange={changeDish}
                />
            </div>
            <div className="form-group">
                <label htmlFor="active">Active</label>
                <input
                    name="active"
                    id="active"
                    className="form-control"
                    value={dish.active}
                    onChange={changeDish}
                />
            </div>
            <div className="form-group">
                <label htmlFor="role">Role</label>
                <select
                    name="role"
                    id="role"
                    className="form-control"
                    value={dish.role}
                    onChange={changeDish}
                >
                    <option value="user">User</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary mt-3">
                Create
            </button>
        </form>
    );
};

export default UserForm;
