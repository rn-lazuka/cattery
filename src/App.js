import React from 'react';
import './App.css';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Preloader from "./components/common/Preloader/Preloader";
import Main from "./components/Main/Main";
import {compose} from "redux";
import Parents from "./components/Parents/Parents";
import FemalesParents from "./components/Parents/FemalesParents/FemalesParents";
import MaleParentContainer from "./components/Parents/MalesParents/MaleParentContainer";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <div className='app-wrapper-content'>
                <React.Suspense fallback={<Preloader/>}>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={'/main'}/>}/>
                        <Route exact path='/main' render={() => <Main/>}/>
                        <Route exact path='/parents' render={() => <Parents/>}/>
                        <Route  path='/parents/females' render={() => <FemalesParents/>}/>
                        <Route  path='/parents/males' render={() => <MaleParentContainer/>}/>
                        {/*<Route path='/kittens' render={() => <Kittens/>}/>*/}
                        {/*<Route path='/exhibitions' render={() => <Exhibitions/>}/>*/}
                        {/*<Route path='/reviews' render={() => <Reviews/>}/>*/}
                        {/*<Route path='/about-us'  render={() => <AboutUs/>}/>*/}
                        {/*<Route path='/blog'  render={() => <Blog/>}/>*/}
                        {/*<Route path='/contacts' render={() => <Contacts/>}/>*/}
                    </Switch>
                </React.Suspense>
            </div>
        </div>
    );
}


export default compose(
    withRouter)(App);
