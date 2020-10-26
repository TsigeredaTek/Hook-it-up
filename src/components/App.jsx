import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
const App = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        let res = await
        fetch("https://jsonplaceholder.typicode.com/users");
        let users = await res.json();
        setUsers(users);
    };

    useEffect(() =>{
        getUsers();
    }, []);
    return (
        <div classNamme="container">
            <div className="row">
                <div className="col-md-12">
                    <ul className="list-group">
                        {users.map(user => (
                            <React.Fragment key={user.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">{user.name}</h3>
                                        <Link to={`/${user.id}/details`}>
                                            <button>More details</button>
                                        </Link>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default App;
