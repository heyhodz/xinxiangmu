import React, { Component } from 'react';
import dispatcher from "../store/dispatcher"
import store from "../store"
import {change_action,add_action} from "../action/actionCreator"

class home extends Component {
    constructor(){
        super();
        this.state = store.getState();
        store.handleUpdate(this.handleUpdate.bind(this))
    }
    componentWillMount(){
      this.flag=true
    }
  render() {
    let {name,age,sign} = this.state;
    return (
      <div>
          <label>
            姓名  <input type="text" value={name} onChange={this.handleChange.bind(this,1)}/>
          </label>
          <br/>
          <label>
             年龄 <input type="text" value={age} onChange={this.handleChange.bind(this,2)} />
          </label>
          <br/>
          <label>
             格言 <input type="text" value={sign} onChange={this.handleChange.bind(this,3)} />
          </label>
          <br/>
          <button onClick={this.handleAdd.bind(this)}>添加</button>
      </div>
    );
  }
  handleChange(type,e){
    let val = e.target.value
    dispatcher.dispatch(change_action(val,type))
  }
  handleUpdate(){
    if(this.flag){
       this.setState(store.getState())
    }
  }
  handleAdd(){
    dispatcher.dispatch(add_action());
    this.props.history.push("./list")
  }
  componentWillUnmount(){
    this.flag=false
  }
}

export default home;