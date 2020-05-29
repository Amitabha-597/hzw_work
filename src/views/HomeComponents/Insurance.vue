<template>
  <div class="news">
    <Nav />
    <Swiper />
    <div class="news_hrader">
      <div class="title">
        <div class="title_left">会展保险</div>
        <div class="title_right">
          <span>更多模型>>></span>
        </div>
      </div>
      <div class="news_hrader_item flex_center">
        <div class="news_hrader_img"></div>
        <div class="news_hrader_text flex_v_between">
          <div class="news_boxa flex_v_between">
            <div>
              会展新闻会展新闻会展新闻会展新闻会展新闻会展 新闻会展新闻会展新闻
            </div>
            <div class="flex_vcLbetween">
              <span>5小时前</span>
              <span>: 342</span>
            </div>
          </div>
          <div class="news_boxb flex_v_between">
            <div>
              会展新闻会展新闻会展新闻会展新闻会展新闻会展 新闻会展新闻会展新闻
            </div>
            <div class="flex_vcLbetween">
              <span>5小时前</span>
              <span>: 342</span>
            </div>
          </div>
          <div class="news_boxa flex_v_between">
            <div>
              会展新闻会展新闻会展新闻会展新闻会展新闻会展 新闻会展新闻会展新闻
            </div>
            <div class="flex_vcLbetween">
              <span>5小时前</span>
              <span>: 342</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="news_list flex_between_Wrapbetween">
      <div class="news_list_i  flex_v_between" v-for="i in 12" :key="i">
        <div>
          <div class="news_list_img"></div>
          <div class="mewsname">
            会展新闻会展新闻会展新闻会展新闻会展 新闻会展新闻会展新闻
          </div>
        </div>
        <div class="news_list_date flex_vcLbetween">
          <span>5小时前</span>

          <span>
            <i class="iconfont icon-eye"></i>
            : 342</span
          >
        </div>
      </div>
    </div>
    <div class="footer_swiper flex_vcLbetween">
      <div>
        <el-carousel :autoplay="false" height="100%">
          <el-carousel-item v-for="item in 10" :key="item">
            <img src="../../assets/img/home/noname.jpg" alt />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div>
        <el-carousel :autoplay="false" height="100%">
          <el-carousel-item v-for="item in 10" :key="item">
            <img src="../../assets/img/home/noname.jpg" alt />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "../../Components/swiper";
import Nav from "../../Components/nav";

export default {
  components: { Swiper, Nav },
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
  activated() {},
};
</script>
<style lang="less" scoped>
.news {
  .news_hrader {
    .news_hrader_item {
      margin: 40px 0 70px 0;
      width: 100%;
      height: 420px;
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
      .news_hrader_img {
        width: 700px;
        height: 420px;
        background: red;
      }

      .news_hrader_text {
        width: 500px;
        height: 100%;

        .news_boxa {
          box-sizing: border-box;
          padding: 16px 43px 16px 19px;
          width: 100%;
          height: 140px;
          background-color: #f0f0f0;
          box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
          div {
            width: 100%;
          }
        }
        .news_boxb {
          box-sizing: border-box;
          padding: 16px 43px 16px 19px;
          width: 100%;
          height: 140px;
          background: #fff;
          box-shadow: 0px 2px 7px 2px rgba(102, 102, 102, 0.15);
          div {
            width: 100%;
          }
        }
      }
    }
  }
  .news_list {
    margin-bottom: 70px;
    .news_list_i {
      padding: 20px;
      box-sizing: border-box;
      width: 380px;
      height: 380px;
      background-color: #ffffff;
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
      .news_list_img {
        width: 340px;
        height: 200px;
        background-color: #f39800;
        margin-bottom: 20px;
      }
      .news_list_date {
        width: 100%;
      }
    }
  }
}
</style>
