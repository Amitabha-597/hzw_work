<template>
  <div class>
    <div class="mydata_title">会员等级</div>
    <div class="VIPlevel">
      <div>
        <img src="../../assets/img/my/VIPlevel.png" alt />
      </div>
      <div>
        <button>购买</button>
        <button>购买</button>
        <button>购买</button>
        <button>购买</button>
      </div>
    </div>
    <div class="mydata_title">会员特权</div>
    <div class="VIPprivilege">
      <img src="../../assets/img/my/VIPprivilege.png" alt />
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
.VIPlevel {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  div {
    width: 395px;
    height: 215px;
  }
  div:nth-child(2) {
    width: 400px;
    height: 32px;
    display: flex;
    justify-content: space-around;
    button {
      width: 48px;
      height: 24px;
      background: rgba(234, 77, 31, 1);
      border-radius: 2px;
      font-size: 12px;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
    }
  }
}
.VIPprivilege {
  width: 520px;
  height: 295px;
  padding-top: 20px;
  margin: 0 auto;
}
</style>