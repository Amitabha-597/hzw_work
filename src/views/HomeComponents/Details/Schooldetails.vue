<template>
  <div class="shcoolde">
    <div class="shcoolde_top">
      <div class="shcoolde_top_conent">
        <router-link class="shcoolde_top_img" to="/home?index=0">
          <img src="../../../assets/img/home/logo.png" alt />
        </router-link>
      </div>
    </div>
    <div>会展网校>网校详情</div>
    <div class="shcoolde_content">
      <div class="shcoolde_contentimg"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {}
};
</script>
<style lang='less' scoped>
.shcoolde {
  .shcoolde_top {
    border-bottom: 1px solid #f1f2f2;
    width: 100%;
    height: 90px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 1px 0px rgba(229, 228, 227, 1);
    .shcoolde_top_conent {
      width: 1200px;
      height: 100%;
      .shcoolde_top_img {
        display: inline-block;
        width: 249px;
        height: 81px;
      }
    }
  }
  .shcoolde_content {
    .shcoolde_contentimg {
      width: 335px;
      height: 188px;
      background: red;
    }
  }
}
</style>