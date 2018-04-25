<template>
  <div class="popup" v-show='allShow'>
      <div class="mask" @click='close'></div>
      <transition name='popup' @afterLeave='after'>
      <div v-show="showPop" class="more-panel">
        <div class="eachMore" @click='del'>
        <i class="icon iconfont icon-icon- gray"></i>
        <span>删除清单</span>
        </div>
      </div>
      </transition>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { GET_ICONS, GET_THEMES } from "baseCom/util/utils";
export default {
  props: {
    show: {
      required: true,
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      allShow: false,
      showPop: false,
      data: ""
    };
  },
  methods: {
      del(){
          this.$emit('doit'),
          this.showPop=false
      },
    close() {
      this.showPop = false;
    },
    after() {
      this.allShow = false;
    },
    ...mapMutations({
      addList: "DEL_LIST"
    })
  },
  watch: {
    show(newShow) {
      this.showPop = newShow;
    },
    showPop() {
      if (this.showPop) {
        this.allShow = true;
      }
      this.$emit("popState", this.showPop);
    }
  },
  created() {
    this.showPop = this.show;
  }
};
</script>

<style scoped>
.popup {
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
  background: none;
}
.more-panel {
  position: absolute;
  top: 0.3rem;
  right: 0.4rem;
  z-index: 100;
  background: #fff;
  border-radius: 3px;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  transition: all 150ms;
  transform-origin: 100% 0;
}
.eachMore {
  display: flex;
  align-items: center;
}
.eachMore span {
  font-size: 0.45rem;
  padding: 0 0.1rem;
}
.icon {
  font-size: 0.7rem;
}
.popup-enter,
.popup-leave-to {
  opacity: 0;
  -moz-transform: scale((0.5, 0.5));
  -webkit-transform: scale(0.5, 0.5);
  -o-transform: scale(0.5, 0.5);
  transform: scale(0.5, 0.5);
}
.popup-enter-to,
.popup-leave {
  opacity: 1;
  -moz-transform: scale(1, 1);
  -webkit-transform: scale(1, 1);
  -o-transform: scale(1, 1);
  transform: scale(1, 1);
}
</style>