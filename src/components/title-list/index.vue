<template>
  <div class="title-list">
    <ul>
      <li class="eachTitle" v-for="(item,index) in titles" :class="active==index?'active':''" @click="selectItem(item,index)" :key="index">
        <i class='iconfont fontS' :class='item.icon'></i>
        <span class='title-name'>{{item.title}}</span>
        <span class="title-num">{{item.list.length}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      titles: [],
      active: 0
    };
  },
  methods: {
    selectItem(item, index) {
      this.active = index;
      this.$emit("selected", item);
    }
  },
  computed: {
    ...mapGetters(["list"])
  },
  watch: {
    list() {
      this.titles = this.list;
    }
  },
  created() {
    this.titles = this.list;
  }
};
</script>


<style scoped>
.title-list {
  font-size: 0.5rem;
}
.active {
  background: #f4f6ff;
}
.eachTitle {
  display: flex;
  padding: 0.2rem 0.5rem;
}

.fontS {
  font-size: 0.6rem;
  width: 20%;
}
.title-name {
  width: 60%;
}
.title-num {
  width: 20%;
  text-align: right;
}
</style>
