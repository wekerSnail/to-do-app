<template>
<div>
  <ul class='note-list'>
      <li class="each-note" v-for="(item,index) in nowItem.list" :key="index">
          <i class="iconfont icon" @click="selectIt(item,index)" :class="item.state?'icon-roundcheckfill green':'icon-round theme-color'"></i><span class="text" :class="item.state?'decoration':''">{{item.content}}</span><i @click="remove(item,index)" class='icon iconfont icon-icon-'></i>
      </li>
  </ul>
   <audio :src="mp3" style="display:none" ref='mp3'/>
   </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {data(){
    return{
        mp3:'https://raw.githubusercontent.com/wekerSnail/react-music/master/datas/dingdong.mp3'
    }
},
  computed: {
    ...mapGetters(["nowItem"])
  },
  methods: {
    selectIt(item, index) {
        if(!item.state){
            this.$refs.mp3.play()
        }
      this.setItem(index);
    },
    remove(item, index) {
      this.delItem(index);
    },
    ...mapMutations({
      setItem: "SET_ITEM_LIST",
      delItem: "REMOVE_ITEM_LIST"
    })
  }
};
</script>

<style scoped>
.note-list {
  padding: 0 0.5rem;
  background: #fff
}
.each-note {
  display: flex;
  padding: 0.2rem 0;
  border-bottom: 1px solid #e0e0e0;
  justify-content: space-between;
  align-items: center;
  transition: all 0.25s;
}
.text {
  font-size: 0.55rem;
  width: 70%;
}
.decoration {
  text-decoration: line-through;
  color: #797373;
}
.icon {
  width: 12%;
  font-size: 0.7rem;
}

.remove-enter,
.remove-leave-to {
  opacity: 0;
  -moz-transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.remove-enter-to,
.remove-leave {
  opacity: 1;
  -moz-transform: translate3d(100%, 0, 0);
  -webkit-transform: translate3d(100%, 0, 0);
  -o-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
}
</style>


