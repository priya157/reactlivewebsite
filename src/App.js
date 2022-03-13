import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';
import Linechart from './Linechart';
import Barchart from './Barchart';
import Doughnutchart from './Doughnutchart';


import { Switch , Route, Redirect} from 'react-router-dom';
import TodoList from './TodoList';

function App() {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Service" component={Service}/>
        <Route exact path="/Contact" component={Contact}/>
        <Redirect to="/" />
      </Switch>
    <TodoList/>
    <div className="chart">
    <Linechart/>
    <Barchart/>
    <Doughnutchart />
    </div>
      <Footer/>
    </>
  );
}

        export default App;
