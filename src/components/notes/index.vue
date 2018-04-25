<template>
  <div class="notes">
    <del-popup @popState='changeState' @doit='del' :show='moreShow'></del-popup>
    <div class="top theme-background" ref='top'>
      <div class="top-btn-panel theme-background" ref='topTitle'>
        <button class="iconfont icon-sort" @click='menu'></button>
        <span class='myday'>{{showTitle}}</span>
        <button @click="more" class="iconfont icon-moreandroid"></button>
      </div>
      <h1 class="title" ref='title'>{{nowItem.title}}</h1>
    </div>
    <div class="bottom"></div>
    <div class="mian" style='top:35%'>
      <scroll class="note-warrps" @scroll="scroll" :data='nowItem' :listenScroll='true' :probeType='probeType'>
        <note-list></note-list>
        <transition name='add'>
          <div v-show="addShow" class="add-panel">
            <i class="icon iconfont icon-round gray"></i>
            <input class="add-text" v-model.trim="nowInput" placeholder="添加待办事项" type="text">
            <i class="icon iconfont icon-squarecheckfill" @click="pushNote" :class="btnColor?'theme-color':'gray'"></i>
          </div>
        </transition>
      </scroll>
    </div>
    <button v-show="!addShow" class="iconfont icon-roundaddfill addBtn theme-color" @click='addNote'></button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import scroll from "baseCom/scroll";
import noteList from "components/note-list";
import delPopup from "components/del-popup";
export default {
  data() {
    return {
      nowInput: "",
      btnColor: false,
      addShow: false,
      scrollY: 0,
      probeType: 3,
      showTitle: "",
      moreShow: false
    };
  },
  components: {
    noteList,
    scroll,
    delPopup
  },
  methods: {
    del() {
      this.delList(this.itemIdex);
    },
    changeState(val) {
      this.moreShow = val;
    },
    more() {
      this.moreShow = true;
    },
    menu() {
      this.setSideState(true);
    },
    addNote() {
      this.addShow = true;
    },
    pushNote() {
      if (this.nowInput) {
        this.addList({
          state: false,
          content: this.nowInput
        });
        this.nowInput = "";
        this.addShow = false;
      }
    },
    scroll(pos) {
      this.scrollY = pos.y;
    },
    ...mapMutations({
      setSideState: "SET_SIDE_STATE",
      addList: "ADD_ITEM_LIST",
      setFirstList: "SET_FIRST_LIST",
      delList: "DEL_LIST",
      resetNowItem:'RESET_NOW_ITEM'
    })
  },
  computed: {
    ...mapGetters(["nowItem", "list", "itemIdex"])
  },
  watch: {
    list(){
      this.resetNowItem()
    },
    itemIdex() {
      this.$refs.top.style.height = this.topHeight + "px";
      this.$refs.title.style.transform = "";
      this.showTitle = "";
    },
    nowInput(newVal) {
      if (newVal) {
        this.btnColor = true;
      } else {
        this.btnColor = false;
      }
    },
    scrollY(newVal) {
      let translateY = Math.max(this.minTransalteY, newVal);
      let prenc = -translateY / this.topHeight / 6;
      this.$refs.title.style.transform = `translate3d(0,${translateY}px,0) scale(${1 -
        prenc},${1 - prenc})`;
      let zIndex = 0;
      this.showTitle = "";
      if (newVal < this.minTransalteY) {
        zIndex = 10;
        this.showTitle = this.nowItem.title;
      }
      this.$refs.top.style.height = this.topHeight + newVal + "px";
      this.$refs.topTitle.style.zIndex = zIndex;
    }
  },
  created() {
    this.setFirstList(0);
  },
  mounted() {
    this.topHeight = this.$refs.top.clientHeight;
    this.minTransalteY = -this.topHeight + this.$refs.topTitle.clientHeight;
  }
};
</script>


<style scoped>
.notes {
  width: 100%;
  height: 100%;
}

.top {
  height: 35%;
}

.top-btn-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem;
  position: relative;
}

.mian {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
}

.note-warrps {
  height: 100%;
}

.iconfont {
  background: none;
  border: none;
  font-size: 0.7rem;
  color: #ffffff;
  outline: none;
}

.myday {
  color: #fff;
  font-size: 0.6rem;
  position: absolute;
  left: 1.5rem;
  top: 0.3rem;
}

.title {
  padding: 0 0.8rem;
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 400;
  margin-top: 35%;
  position: relative;
}

.addBtn {
  font-size: 1.4rem;
  position: fixed;
  top: 15.9rem;
  left: 8rem;
}

.add-panel {
  background: #fff;
  display: flex;
  padding: 0.3rem 0.5rem;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  transition: all 0.25s;
}

.add-text {
  width: 80%;
  font-size: 0.6rem;
  background: none;
  line-height: 0.6rem;
}

.gray {
  color: #a7a1a1;
}

.add-text::-webkit-input-placeholder {
  font-size: 0.5rem;
  vertical-align: middle;
  line-height: 0.5rem;
}

.add-enter,
.add-leave-to {
  opacity: 0;
  -moz-transform: translate3d(0, 100%, 0);
  -webkit-transform: translate3d(0, 100%, 0);
  -o-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}

.add-enter-to,
.add-leave {
  opacity: 1;
  -moz-transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
</style>
