<template>
  <div class="sideTab">
     <transition name='mask'>
    <div class="mask" @click="close" v-show="allShow"></div>
     </transition>
      <transition name='side' @afterLeave='after'>
        <div class="sidecontent" v-show="sideState">
          <div class="top">
            <div class="imgPanel">
              <img :src="avata" class='avata'>
            </div>
            <h5 class="text">{{name}}</h5>
            <h6 class="text">{{detail}}</h6>
          </div>
          <div class="content">
            <title-list @selected='selected'></title-list>
          </div>
          <div class="bottom">
            <button class="addList" @click="openPop">
              <i class="theme-color iconS iconfont icon-add"></i>
              <span class="theme-color">新建清单</span>
            </button>
          </div>
        </div>
      </transition>
      <Notes></Notes>
    <Popup :show='pop' @popState='popState' @cancel='btnCancel' @getVal='getVal'></Popup>
  </div>
</template>

<script>
import Popup from "components/popup";
import titleList from "components/title-list";
import { mapGetters, mapMutations } from "vuex";
import Notes from 'components/notes';
export default {
  components: {
    Popup,
    titleList,
    Notes
  },
  data() {
    return {
      avata: require("@/assets/timg.jpg"),
      name: "to-do",
      detail: "一个单纯的todo-list",
      pop: false,
      allShow: false
    };
  },
  methods: {
    openPop() {
      (this.pop = true), (this.showSide = false);
    },
    popState(state) {
      this.pop = state;
    },
    after() {
      this.allShow = false;
    },
    btnCancel() {
      this.setSideState(true);
    },
    getVal() {
      this.setSideState(true);
    },
    close() {
      this.setSideState(false);
    },
    selected(item, index) {
      this.setSideState(false);
      this.setNowItem(item);
    },
    ...mapMutations({
      setSideState: "SET_SIDE_STATE",
      setNowItem: "SET_NOW_ITEM"
    })
  },
  watch: {
    sideState(newShow) {
      if (newShow) {
        this.allShow = true;
      }
    }
  },
  computed: {
    ...mapGetters(["sideState"])
  }
};
</script>

<style scoped>
.sideTab {
  width: 100%;
  height: 100%;
  display: flex;
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.2);
  transition: opacity 250ms;
}

.main {
  z-index: 30;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.sidecontent {
  position: fixed;
  top: 0;
  width: 70%;
  height: 100%;
  background-color: white;
  transition: all 150ms linear;
  overflow: hidden;
  z-index: 30;
}

.top {
  overflow: hidden;
}

.imgPanel {
  margin-top: 0.5rem;
  padding: 0.5rem;
  overflow: hidden;
}

.avata {
  width: 2.5rem;
  border-radius: 50%;
}

.text {
  margin-left: 0.5rem;
  font-weight: 600;
  font-size: 0.4rem;
}

.content {
  padding: 0.3rem 0;
  height: 60%;
  overflow-y: auto;
}

.bottom {
  padding: 0.5rem;
}

.addList {
  display: flex;
  background: none;
  border: none;
  outline: none;
}

.iconS {
  font-size: 0.6rem;
  margin-right: 0.3rem;
  font-weight: 600;
}

.addList span {
  font-size: 0.5rem;
}

.side-enter,
.side-leave-to {
  opacity: 0;
  -moz-transform: translate3d(-100%, 0, 0);
  -webkit-transform: translate3d(-100%, 0, 0);
  -o-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
}

.side-enter-to,
.side-leave {
  opacity: 1;
  -moz-transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.mask-enter,
.mask-leave-to {
  opacity: 0;
}

.mask-enter-to,
.mask-leave {
  opacity: 1;
}
</style>
