<template>
  <div class="popup" v-show='allShow'>
      <div class="mask"></div>
      <transition name='popup' @afterLeave='after'>
      <div class="content" v-show="showPop">
          <h3 class="name fontB">{{title}}</h3>
          <div class="mid">
              <i class="iconfont addicon icon-roundadd theme-color"></i><input v-model.trim="data" :placeholder="hint" class="text" type="text">
          </div>
          <div class="btnPanel">
              <button @click="cancel" class="cancel fontB font-color">取消</button><button  @click="ok" class="ok fontB theme-color">确认</button>
          </div>
      </div>
      </transition>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {GET_ICONS,GET_THEMES} from 'baseCom/util/utils'
export default {
  props: {
    title: {
      required: false,
      default: "新增清单",
      type: String
    },
    hint: {
      required: false,
      default: "无标题清单",
      type: String
    },
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
      data:''
    };
  },
  methods: {
    cancel() {
      this.showPop = false;
      this.$emit("cancel");
    },
    ok() {
      this.showPop = false;
      let newList = {
        title: this.data,
        icon: `${GET_ICONS()} ${GET_THEMES()}`,
        list:[]
      };
      this.data=''
      this.addList(newList)
    },
    after() {
      this.allShow = false;
    },
    ...mapMutations({
      addList:'ADD_LIST'
    })
  },
  watch: {
    show(newShow) {
      this.showPop = newShow;
    },
    showPop() {
      this.$emit("popState", this.showPop);
      if (this.showPop) {
        this.allShow = true;
      }
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
  z-index: 70;
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
  background-color: rgba(0, 0, 0, 0.2);
}
.content {
  width: 80%;
  padding: 0.5rem;
  box-sizing: border-box;
  z-index: 100;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.267);
  transition: all 0.15s linear;
}
.mid {
  display: flex;
}
.addicon {
  font-size: 0.8rem;
  width: 15%;
  text-align: center;
}
.text {
  border-bottom: 2px solid #4470de;
  width: 85%;
  font-size: 0.5rem;
}
.text::-webkit-input-placeholder {
  font-size: 0.5rem;
}
.btnPanel {
  padding: 0.2rem 0;
  padding-left: 50%;
}
.name {
  padding-left: 0.2rem;
}
.fontB {
  font-size: 0.5rem;
}
.cancel,
.ok {
  background: none;
  border: none;
  outline: none;
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

