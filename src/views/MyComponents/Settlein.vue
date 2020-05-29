<template>
  <div class="settlein">
    <div class="settle_title">服务商入驻</div>
    <div class="set_tab">
      <div @click="tabbar(0)" :class="{ tabitem: show == 0}">企业入驻</div>
      <div @click="tabbar(1)" :class="{ tabitem: show == 1 }">个人入驻</div>
    </div>
    <div class="set_content">
      <Personal v-show="show==1" />
    </div>
  </div>
</template>


<script>
import Personal from "./personal";
export default {
  components: { Personal },
  data() {
    return {
      show: 1
    };
  },
  computed: {},
  watch: {},
  methods: {
    tabbar(e) {
      this.show = e;
    }
  },
  created() {}
};
</script>
<style lang='less' scoped>
.settlein {
  .settle_title {
    height: 187px;
    width: 100%;
    font-size: 30px;
    font-weight: bold;
    color: rgba(234, 77, 31, 1);
  }
  .set_tab {
    display: flex;
    justify-content: space-around;
    height: 63px;
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 50px;
    .tabitem {
      border-bottom: 3px solid #e44e2b;
    }
    div {
      font-size: 24px;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
    }
  }
  .set_content {
    width: 100%;
  }
}
</style>