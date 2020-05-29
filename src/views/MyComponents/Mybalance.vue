<template>
  <div class="mydata">
    <div class="mydata_title">钱包余额</div>
    <div class="mydata_content">
     
      <p>
        <span>剩余余额：</span>
        <span>￥8888.88</span>
        <button>充值</button>
      </p>
      <p>
        <span>可提现余额：</span>
        <span>￥8888.88</span>
        <button>提现</button>
      </p>
    </div>
    
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
     
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {
    
  },
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
      span:nth-child(2) {
        font-size: 14px;
        color: #44eade;
        width: 200px;
        text-align: center;
        display: inline-block;
      }
   
    }
  }
 
}
</style>