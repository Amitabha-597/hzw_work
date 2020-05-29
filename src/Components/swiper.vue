<template>
  <div class="swiper flex_vcLbetween">
    <div class="swiper_left">
      <el-carousel :autoplay="false" height="312px">
        <el-carousel-item v-for="item in 10" :key="item">
          <img src="../assets/img/home/swiper.jpg" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="swiper_middle flex_v_between">
      <div class="swiper_middle_top">
        <el-carousel :autoplay="false" height="100%">
          <el-carousel-item v-for="item in 10" :key="item">
            <img src="../assets/img/home/banner02.jpg" alt />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="swiper_middle_bottom flex_vcLbetween">
        <div>
          <el-carousel :autoplay="false" height="100%">
            <el-carousel-item v-for="item in 10" :key="item">
              <img src="../assets/img/home/swiper.jpg" alt />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div>
          <el-carousel :autoplay="false" height="100%">
            <el-carousel-item v-for="item in 10" :key="item">
              <img src="../assets/img/home/swiper.jpg" alt />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <div class="swiper_right">
      <el-carousel :autoplay="false" height="100%">
        <el-carousel-item v-for="item in 10" :key="item">
          <img src="../assets/img/home/banner03.jpg" alt />
        </el-carousel-item>
      </el-carousel>
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
<style lang="less" scoped></style>
