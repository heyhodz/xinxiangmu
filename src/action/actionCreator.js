export const change_action = (val,type)=>({
    type:"INPUT_CHANGE",
    value:val,
    style:type
})
export const add_action = ()=>({
    type:"ADD_ITEM"
})
export const mod_action =(val)=>({
    type:"MOD_ITEM",
    value:val
})
export const update_action=(val,type)=>({
    type:"UPDATE_CHANGE",
    value:val,
    style:type
})
export const modify_action=()=>({
    type:"MODIFY_OK"
})