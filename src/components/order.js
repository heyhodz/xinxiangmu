import React, { Component } from 'react';
import dispatcher from "../store/dispatcher"
import store from "../store"
import {update_action,modify_action} from "../action/actionCreator"

class order extends Component {
  constructor(){
    super();
    this.state = store.getState();
    store.handleUpdate(this.handleUpdate.bind(this))
}
componentWillMount(){
  this.flag = true;
}
  render(){
    let {modItem} = this.state;
    return (
      <div>
          <label>
            <input type="text" value={modItem.name} onChange={this.handleModchange.bind(this,1)}/>
          </label>
          <br/>
          <label>
            <input type="text" value={modItem.age} onChange={this.handleModchange.bind(this,2)}/>
          </label>
          <br/>
          <label>
            <input type="text" value={modItem.sign} onChange={this.handleModchange.bind(this,3)}/>
          </label>
          <br/>
          <button onClick={this.handleModifyok.bind(this)}>确认修改</button>
      </div>
    );
  }

  handleModchange(type,e){
    let val = e.target.value;
    dispatcher.dispatch(update_action(val,type))
}
  handleUpdate(){
    if(this.flag){
      this.setState(store.getState())
  }
  }
  componentWillUnmount(){
    this.flag = false;
}
  handleModifyok(){
    dispatcher.dispatch(modify_action())
    this.props.history.push("./list")
  }
}

export default order;