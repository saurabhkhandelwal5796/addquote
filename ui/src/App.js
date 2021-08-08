import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import AddQuote from './AddQuote'
import Quote from './Quote'
import WellLiked from './WellLiked'
import PrimarySearchAppBar from './NavBar.material'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <>
    <PrimarySearchAppBar/>
         <br/>
         <br/>
        <Switch>
        <Route exact path="/"       render={() => (<Redirect to="/home" />)} />   
        <Route exact path = "/home" component = {Quote} />
        <Route path = "/wellLiked"  component = {WellLiked} />
        <Route path = "/addQuote"   component = {AddQuote} />   
        <Route path="*"             component={Quote} />  
        </Switch>  
    </>
  )
}

export default App
