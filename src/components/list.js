import React, { Component } from 'react';
import store from '../store';
import dispatcher from '../store/dispatcher';
import {mod_action} from "../action/actionCreator"

class list extends Component {
  constructor(){
    super();
    this.state = store.getState();
    store.handleUpdate(this.handleUpdate.bind(this))
  }
  componentWillMount(){
      this.flag=true
  }
  render() {
    let {list}=this.state
    return (
      <div>
        <ul>
          {
            list.map((item,index)=>{
                return <li key={index}>
                <p>{item.name}</p>
                 <p>{item.age}</p>
                  <p>{item.sign}</p>
                  <button onClick={this.handleModify.bind(this,index)}>修改</button>
                </li>
            })
          }
        </ul>
      </div>
    );
  }
  handleUpdate(){
    if(this.flag){
      this.setState(store.getState())
    }
  }
  componentWillUnmount(){
    this.flag=false
  }
  handleModify(index){
    dispatcher.dispatch(mod_action(index));
    this.props.history.push("/order");
  }
}

export default list;