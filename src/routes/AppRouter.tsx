import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Login } from '../components/pages/auth/Login';
import { Agregar } from '../components/pages/paciente/Agregar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/agregar-paciente" component={Agregar} />
                </Switch>
            </div>
        </Router>
    )
}
