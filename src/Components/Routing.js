import React from 'react'
import LazyImport from './LazyImport'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//LAZY LOAD MODULES
const Header = LazyImport({
    loader: () => import('../shared/Header/Header'/* webpackChunkName: 'header' */),
})
const Home = LazyImport({
    loader: () => import('../pages/Home'/* webpackChunkName: 'home' */),
})
const Planos = LazyImport({
    loader: () => import('../pages/Planos/Planos'/* webpackChunkName: 'planos' */),
})

const Erro = LazyImport({
    loader: () => import('../pages/404'/* webpackChunkName: 'erro' */),
})
const Routing = () => {
    return (
        <BrowserRouter>
            <>
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/home" component={Home} />
                    <Route path="/planos" component={Planos} />
                    <Route component={Erro} />
                </Switch>
            </>
        </BrowserRouter>

    );
}
export default Routing;

    
