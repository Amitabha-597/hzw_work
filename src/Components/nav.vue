<template>
  <nav class="nav flex_vcLbetween">
    <div
      class="nav_item flex_center"
      v-for="(item, index) in navList"
      :key="index"
      :class="{ navActive: index == selectTab }"
      @click="selectTabhand(index)"
    >
      <router-link
        :to="item.url + '?index=' + index"
        class="nav_bar flex_center"
        :class="{ navActive: index == selectTab }"
        >{{ item.name }}</router-link
      >
    </div>
    <div class="extension">
      <img src="../assets/img/home/extension.jpg" alt />
    </div>
  </nav>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      navList: [
        {
          name: "首页",
          url: "/home",
        },
        {
          name: "接单发单",
          url: "/order",
        },
        {
          name: "3D模型库",
          url: "/model",
        },
        {
          name: "入驻企业",
          url: "/enterprise",
        },
        {
          name: "共享工厂",
          url: "/factory",
        },
        {
          name: "会展新闻",
          url: "/news",
        },
        {
          name: "会展网校",
          url: "/school",
        },
        {
          name: "会展保险",
          url: "/insurance",
        },
        {
          name: "爱心公益",
          url: "/welfare",
        },
        {
          name: "法律援助",
          url: "",
        },
      ],
    };
  },
  components: {},
  created() {
    this.selectTab = this.$route.query.index;
  },
  mounted() {},
  methods: {
    selectTabhand(i) {
      this.selectTab = i;
    },
  },
};
</script>
<style lang="less" scoped>
.nav {
  width: 100%;
  height: 46px;
  border-bottom: 2px solid #e44e2b;
  .nav_bar {
    text-decoration: none;
    color: #333333;
    width: 100%;
    height: 100%;
  }
  .nav_item {
    width: 108px;
    height: 46px;
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #333333;
  }

  .navActive {
    color: #fff;
    background: rgba(228, 78, 43, 1);
  }
  .extension {
    margin-left: 17px;
    width: 90px;
    height: 24px;
    background: rgba(236, 202, 167, 1);
    border-radius: 2px;
  }
}
</style>
