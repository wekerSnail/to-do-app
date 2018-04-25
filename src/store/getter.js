export const sideState = state=> state.sideState 

export const nowItem = state=> state.nowItem 

export const list = state=> state.list 

export const firstList = state=> {
    if(state.list.length>0){
        return state.list[0]
    }else{
        return {}
    }
} 

export const itemIdex = state=>{
    let index=state.list.indexOf(state.nowItem)
    return index
}