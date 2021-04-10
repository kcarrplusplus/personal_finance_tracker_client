import React from "react";
import Nav from 'react-bootstrap/Nav';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import LoginForm from './Forms/LoginForm';
import SignupForm from './Forms/SignupForm';
import TransactionForm from './Forms/CreateTransaction';

const NavMenuHome = () => {
    return (
        <Router>
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/">Home</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/signup">Sign-Up</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/login">Log-In</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/transaction">Create Transaction</Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>

            <Switch>
                <Route path="/login">
                    <LoginForm />
                </Route>
                <Route path="/signup">
                    <SignupForm />
                </Route>
                <Route path="/transaction">
                    <TransactionForm />
                </Route>
                {/* <Route path="/">
                    <Home />
                </Route> */}
            </Switch>
        </Router>
    );
}

export default NavMenuHome;