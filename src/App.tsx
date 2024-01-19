import UserForm from "./components/UserForm/UserForm";
import User from "./components/User/User";
import {useState} from "react";
import {Dish} from "../types";

function App() {
    const [dishes, setDishes] = useState<Dish[]>([]);

    const addDish = (dish: Dish) => {
        setDishes(prevState => [...prevState, dish])
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-2">
                    <UserForm className="col-5" onSubmit={addDish} />
                    <div className="col-6">
                        <User dishes={dishes}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
