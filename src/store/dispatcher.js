import {Dispatcher} from "flux"
import store from "./index"

const dispatcher = new Dispatcher()

dispatcher.register((action)=>{
    switch(action.type){
        case "INPUT_CHANGE":
            store.handleChange(action.value,action.style);
            break;
        case "ADD_ITEM":
            store.handleAdd();
            break;
        case "MOD_ITEM":
            store.handleMod(action.value);
            break;
        case "UPDATE_CHANGE":
            store.handleUp(action.value,action.style);
            break;
        case "MODIFY_OK" :
            store.handleModify()
    }
})
export default dispatcher