import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom'
import  HomePage  from './views/HomePage'
import  SignUpPage  from './modules/user/views/SignUpPage'
import  ContactPage  from './modules/contact/views/ContactPage'
import { StatisticPage } from './views/StatisticPage'
import ContactDetailsPage from './modules/contact/views/ContactDetailsPage'
import ContactEditPage from './modules/contact/views//ContactEditPage'
import Header from './cmps/Header'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/signUp" component={SignUpPage}></Route>
        <Route exact path="/contact" component={ContactPage}></Route>
        <Route exact path="/contact/edit/:id?" component={ContactEditPage}></Route>
        <Route exact path="/contact/:id" component={ContactDetailsPage}></Route>
        <Route exact path="/statistic" component={StatisticPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
