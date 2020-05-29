<template>
  <div class="newsdetails flex_center">
    <div class="newsdetails_content">
      <div class="newsdetails_title">
        [武汉紧急通知] ：全市范围内开展全员核酸筛查“十天大会战”
      </div>
      <div class="newsdetails_date">发布时间： 2020-05-08 10:46</div>
      <div class="newsdetails_img"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.newsdetails {
  margin-top: 44px;
  .newsdetails_content {
    padding: 49px 43px;
    width: 844px;
    height: 1060px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(204, 204, 204, 1);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
    .newsdetails_title {
      font-size: 30px;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
    }
    .newsdetails_date {
      margin: 20px 0 40px 0;
      font-size: 14px;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
    }
    .newsdetails_img {
      width: 850px;
      height: 480px;
    }
  }
}
</style>
