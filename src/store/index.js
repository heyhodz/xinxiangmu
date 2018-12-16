const EventMitter =require ("events");
const store = Object.assign(EventMitter.prototype,{
    state: {
        name: "",
        age: "",
        sign: "",
        list:[],
        modIndex:-1,
        modItem:{
            name:"",
            age:"",
            sign:""
        }
    },
    getState(){
      return this.state
  },
  handleChange(val,type){
        switch(type){
            case 1:
            this.state.name=val;
            break;
            case 2:
            this.state.age=val;
            break;
            case 3:
            this.state.sign=val;
            break;
        }
        this.emit("update")
  },
  handleUpdate(cb){
      this.on("update",cb)
  },
  handleAdd(){
    let obj={}
    obj.name = this.state.name;
    obj.age = this.state.age;
    obj.sign = this.state.sign;

this.state.list.push(obj);
this.emit("update")
this.clearInput()
  },
  clearInput(){
      this.state.name="";
      this.state.age="";
      this.state.sign=""
  },
  handleMod(index){
    this.state.modIndex=index;
    let obj=this.state.list[index];
    this.state.modItem={
        name:obj.name,
        age:obj.age,
        sign:obj.sign
    }
    this.emit("update");
  },
  handleUp(val,type){
    switch(type){
        case 1:
        this.state.modItem.name=val;
        break;
        case 2:
        this.state.modItem.age=val;
        break;
        case 3:
        this.state.modItem.sign=val;
        break;
    }
    this.emit("update")
  },
  handleModify(){
    this.state.list.splice(this.state.modifyIndex,1,this.state.modItem);
    this.emit("update")
  }
})
export default store