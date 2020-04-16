import React from 'react';
import './App.css';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Preloader from "./components/common/Preloader/Preloader";
import Main from "./components/Main/Main";
import {compose} from "redux";
import Parents from "./components/Parents/Parents";
import ParentContainer from "./components/Parents/MalesParents/ParentContainer";
import {useSelector} from "react-redux";


const App = () => {
    const parents = useSelector((state) => state.parents.parents);
    return (
        <div className='app-wrapper'>
            <Header/>
            <div className='app-wrapper-content'>
                <React.Suspense fallback={<Preloader/>}>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={'/main'}/>}/>
                        <Route exact path='/main' render={() => <Main/>}/>
                        <Route exact path='/parents/' render={() => <Parents/>}/>
                        {parents.map((parent, i) => <Route exact path={`/parents/${parent.name}`} render={() =>
                            <ParentContainer key={i} sliderArray={parent.sliderArray}
                                             name={parent.name}
                                             birthDate={parent.birthDate}
                                             color={parent.color}
                                             youtube={parent.youtube}/>}>
                        </Route>)}
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
