<template>
  <div class="my flex_vcLbetween">
    <div class="my_nav">
      <div class="nav_item" v-for="(item,index) in navMenu" :key="index">
        <div class="nav_tiele">{{item.title}}</div>
        <div
          class="nav_name"
          v-for="(item,index1) in item.childs"
          :key="index1"
          @click="dDD(index,index1,item.url)"
          :style="`color:${selsetidnex==index&&selsetidnex1== index1? '#E44E2B ' : ''}`"
        >{{item.name}}</div>
      </div>
    </div>
    <div class="my_conent">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      selsetidnex: 0,
      selsetidnex1: 0,
      navMenu: [
        {
          title: "我的信息",
          childs: [
            {
              name: "个人资料",
              url: "/mydata"
            },
            {
              name: "安全设置",
              url: "/nysafety"
            }
          ]
        },
        {
          title: "会员中心",
          childs: [
            {
              name: "我的会员",
              url: "/myvip"
            },
            {
              name: "购买会员",
              url: "/buyvip"
            }
          ]
        },
        {
          title: "发布内容",
          childs: [
            {
              name: "发单接单",
              url: "/myorder"
            },
            {
              name: "3D模型库",
              url: "/mymodel"
            },
            {
              name: "入驻企业",
              url: "/settlein"
            },
            {
              name: "共享工厂",
              url: "/myfactory"
            },
            {
              name: "会展网校",
              url: "/myschool"
            },
             {
              name: "会展新闻",
              url: "/mynews"
            },
            {
              name: "会展保险",
              url: "/sysafe"
            },
            {
              name: "法律援助",
              url: "/mylaw"
            },
            {
              name: "爱心公益",
              url: "/mywelfare"
            }
          ]
        },
        {
          title: "我的钱包",
          childs: [
            {
              name: "钱包余额",
              url: "mybalance"
            },
            {
              name: "钱包明细",
              url: "/mydetailed"
            }
          ]
        },
        {
          title: "广告位购买",
          childs: [
            {
              name: "选择广告位置",
              url: "/myposter"
            },
            {
              name: "选择租赁时间",
              url: ""
            },
           
          ]
        }
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {
    dDD(index, index1, url) {
      this.selsetidnex = index;
      this.selsetidnex1 = index1;
      this.$router.push({
        path: url,
        query: {
          index,
          index1
        }
      });
    }
  },
  created() {
    this.selsetidnex1 = this.$route.query.index1;
    this.selsetidnex = this.$route.query.index;
  },
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
.my {
  margin-bottom: 200px;
  .my_nav {
    height: 840px;
    border-top: 2px solid #e44e2b;
    width: 250px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15),
      0px 2px 0px 0px rgb(255, 255, 255);
    padding-left: 30px;
    padding: 20px 0 60px 30px;

    .nav_item {
      margin-bottom: 20px;

      .nav_tiele {
        font-size: 20px;
        font-weight: bold;
        color: rgba(52, 52, 52, 1);
        line-height: 32px;
      }
      .nav_name {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 32px;
      }
      .nav_name:active {
        color: aqua;
      }
    }
  }
  .my_conent {
    border-top: 2px solid #e44e2b;
    width: 880px;
    min-height: 918px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15),
      0px 2px 0px 0px rgb(247, 247, 248);
  }
}
</style>