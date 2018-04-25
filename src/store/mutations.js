import * as types from './mutationType'

const mutations = {
  [types.SET_SIDE_STATE](state, flag) {
    state.sideState = flag
  },
  [types.SET_NOW_ITEM](state, item) {
    state.nowItem = item
  },
  [types.SET_ITEM_LIST](state,index) {
    state.nowItem.list[index]['state']=!state.nowItem.list[index]['state']
  },
  [types.ADD_ITEM_LIST](state,item) {
    state.nowItem.list.push(item)
  },
  [types.REMOVE_ITEM_LIST](state,index) {
    state.nowItem.list.splice(index,1)
  },
  [types.ADD_LIST](state,item) {
    state.list.push(item)
  },
  [types.SET_FIRST_LIST](state,index) {
    if(state.list.length>0)
    state.nowItem=state.list[index]
    else
    state.nowItem={}
  },
  [types.DEL_LIST](state,index) {
    if(state.list.length>0)
    state.list.splice(index,1)
    else
    state.list={}
  },
  [types.RESET_NOW_ITEM](state) {
    if(state.list.length>0)
    state.nowItem=state.list[0]
    else
    state.nowItem={}
  }
}

export default mutations
