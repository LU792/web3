import React from 'react';
import home from './style/home';
import contatos from './style/contatos';
import ferramentas from './style/ferramentas';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function Router() {

    return(
        <BrowserRouter>
        <switch>
        <Route path="/" exact component={home} />
        <Route path="/contatos" exact component={contatos} />
        <Route path="/ferramentas" exact component={ferramentas} />
        
        </switch>
            </BrowserRouter>
            
    );
}
export default Router;