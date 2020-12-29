import React, { Component } from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './components/Home';
import Login from './reducers/features/profile/Login';
import Signup from './reducers/features/profile/Signup';
import './styles/app.css';


class App extends Component {
    render() {
        return (
            <Container>
                <Switch>                    
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Container>
        )
    }
}

export default App