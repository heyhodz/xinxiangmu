import React, { Component } from 'react';
import {HashRouter as Router,Route,Switch,NavLink,Redirect} from "react-router-dom";
import home from "./components/home"
import list from "./components/list"
import order from "./components/order"
import my from "./components/my"
import "./style/style.css"
class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Switch>
                <Route path="/home" component={home}/>
                <Route path="/list" component={list}/>
                <Route path="/order" component={order}/>
                <Route path="/my" component={my}/>
                <Redirect path="/" to="/home" />>
            </Switch>
           

            <footer>
              <ul>
                 <li> <NavLink to="/home">首页</NavLink></li>
                <li><NavLink to="/list">详情</NavLink></li>
                <li><NavLink to="/order">菜单</NavLink></li>
                <li> <NavLink to="/my">我的</NavLink></li>
              </ul>
             
            </footer>
          </div>
        </Router>
    );
  }
}

export default App;
