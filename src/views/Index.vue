<!--  -->
<template>
  <div id="home">
    <div class="avd">
      <img src="../assets/img/home/avd.jpg" alt />
    </div>
    <div class="top_nav flex_center">
      <div class="nav_content flex_vcLbetween">
        <div class="nav_content_left flex_vcLbetween">
          <span>嗨！ 会展王欢迎您！</span>
          <span>设为首页</span>
          <span>加入收藏</span>
          <span>手机版</span>
          <span>在线留言</span>
        </div>
        <div class="nav_content_right flex_vclaround">
          <span>消息</span>
          <router-link to="/login">请登录</router-link>
          <router-link to="/register">免费注册</router-link>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="header flex_center flex_vcLbetween">
        <router-link class="gohome" to="/home?index=0">
          <img src="../assets/img/home/logo.png" alt />
        </router-link>
        <div class="header_adress flex_vcenter">
          <div>北京</div>
          <div>[切换]</div>
        </div>
        <div class="serch flex_center">
          <el-input prefix-icon="el-icon-search" v-model="serch" placeholder="请输入内容"></el-input>
          <button class="serch_btn">搜索</button>
        </div>
        <div class="freeissue flex_center">免费发布信息</div>
      </div>

      <main>
        <router-view />
      </main>
    </div>
    <footer>
      <div style="font-size:14px;">
        网站首页 | 关于我们 联系方式 | 使用协议 | 版权隐私 | 网站地图 | 合作加盟
        | 广告服务 | 网站留言 | 违规举报
      </div>
      <div class="footerBox">Copyright 2005-2020 zbj.com 版权所有 渝ICP备10202274-4号 渝B2-20080005</div>
      <div>渝公网安备 50019002500154号 猪八戒股份有限公司</div>
    </footer>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      serch: ""
    };
  },

  methods: {},
  created() {}
};
</script>
<style lang="less" scoped>
#home {
  width: 100%;
  height: 100%;
  .avd {
    width: 100%;
    height: 94px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .top_nav {
    width: 100%;
    height: 40px;
    background: #e44e2b;

    .nav_content {
      width: 1200px;
      height: 100%;
      font-size: 24px;
      font-family: KaiTi;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      .nav_content_left {
        height: 100%;
        width: 737px;
      }
      .nav_content_right {
        a {
          text-decoration: none;
          color: #fff;
        }
        width: 436px;
        height: 100%;
      }
    }
  }

  .header {
    .gohome {
      width: 249px;
      height: 81px;
    }
    width: 100%;
    height: 160px;

    .header_adress {
      width: 158px;
    }
    .serch {
      border: 2px solid rgba(228, 78, 43, 1);
      width: 552px;
      height: 54px;
      margin-right: 62px;
      /deep/.el-input__inner {
        height: 54px;
        border-radius: 0;
        outline: none;
        border: none;
      }
      /deep/.el-icon-search {
        padding-top: 5px;
        box-sizing: border-box;
      }
      .serch_btn {
        width: 126px;
        height: 54px;
        background: rgba(228, 78, 43, 1);
        border: none;
        outline: none;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
    }
    .freeissue {
      width: 158px;
      height: 50px;
      background: #ea4d1f;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
  }

  main {
    width: 100%;
    height: 100%;
  }
  footer {
    width: 100%;
    height: 280px;
    background: rgba(35, 40, 48, 1);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-size: 10px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(204, 204, 204, 1);
    line-height: 16px;

    .footerBox {
      margin-top: 40px;
    }
  }
}
</style>
