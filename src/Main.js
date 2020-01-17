import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SignIn from "./SignIn";
import Page from "./Page";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={SignIn}/>
            <Route path='/page' component={Page}/>
        </Switch>
    </main>
)

export default Main
