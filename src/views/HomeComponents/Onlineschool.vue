<template>
  <div class="school">
    <Nav />
    <Swiper />
    <div class="title">
      <div class="title_left">会展网校</div>
      <div class="title_right">
        <span>更多网校>>></span>
      </div>
    </div>
    <div class="school_content flex_between_Wrapbetween">
      <div class="school_item  " v-for="i in 28" :key="i" @click="toSchooldetails">
        <div class="school_img"></div>
        <div class="school_text flex_v_center">
          <div class="school_name">北京兴业德诚展览展示有限公司</div>
          <div class="school_date">会展王 | 2020/05/08 18:00</div>
          <div class="school_price flex_vcLbetween">
            <div class="money">￥4999.00</div>
            <div class="number ">3997人购买</div>
            <button class="buy ">立即购买</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "../../Components/swiper";
import Nav from "../../Components/nav";

export default {
  components: { Swiper, Nav },
  name: "",
  data() {
    return {};
  },
 
  created() {},
  mounted() {},
  methods: {
    toSchooldetails(){
      this.$router.push("/schooldetails")
    }
  },
};
</script>
<style lang="less" scoped>
.school {
  .school_content {
    margin: 40px 0 70px 0;
    .school_item {
      width: 280px;
      height: 308px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(229, 229, 229, 1);
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
      margin-bottom: 20px;
      .school_img {
        width: 280px;
        height: 180px;
        background: tomato;
      }
      .school_text {
        width: 100%;
        font-weight: 400;
        .school_name {
          width: 255px;
          height: 48px;
          line-height: 48px;
          border-bottom: 1px dotted rgba(229, 229, 229, 1);
          font-size: 14px;
          color: rgb(206, 24, 24);
        }
        .school_date {
          width: 255px;

          padding: 12px 0 14px 0;
          font-size: 10px;
          color: #999999;
        }
        .school_price {
          width: 255px;

          .money {
            font-size: 16px;
            font-weight: 400;
            color: rgba(228, 78, 43, 1);
          }
          .number {
            font-size: 10px;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
          }
          .buy {
            width: 72px;
            height: 24px;
            background: rgba(228, 78, 43, 1);
            border: none;
            border-radius: 4px;
            color: #fff;
            outline: none;
            font-size: 12px;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
