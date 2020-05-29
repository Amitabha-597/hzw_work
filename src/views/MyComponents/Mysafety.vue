<template>
  <div class="mydata">
    <div class="mydata_title">个人资料</div>
    <div class="mydata_content">
      <p>
        <span>手机号1：</span>
        <input type="text" v-model="tel1" />
        <span>更换手机号</span>
      </p>
      <p>
        <span>手机号2：</span>
        <input type="text" v-model="tel2" />
        <span>更换手机号</span>
      </p>
      <p>
        <span>密码：</span>
        <input type="password" v-model="pwd" />
        <span>更换手机号</span>
      </p>
    </div>
    <div class="mydata_btn flex_center">
      <button>保存</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tel1: "15985254554",
      tel2: "159444254554",
      pwd: "asdjmkaopsdjmkpasod"
    };
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
.mydata {
  .mydata_content {
    border-bottom: 1px solid #f1f2f2;
    width: 820px;
    margin: 0 auto;
    padding-bottom: 50px;

    p {
      span {
        margin-top: 20px;
      }
      span:first-child {
        font-size: 16px;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        width: 100px;
        display: inline-block;
      }
      span:last-child {
        font-size: 14px;
        color: #e44e2b;
        width: 150px;
        text-align: center;
        display: inline-block;
      }
    }
  }
  .mydata_btn {
    margin-top: 40px;

    button {
      width: 80px;
      height: 44px;
      background: rgba(234, 77, 31, 1);
      border-radius: 2px;
      font-size: 18px;
      letter-spacing: 3px;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      border: none;
      outline: none;
    }
  }
}
</style>