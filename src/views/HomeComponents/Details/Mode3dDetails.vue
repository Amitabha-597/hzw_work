<template>
  <div class="modeDe">
    <div class="modede_title">
      <div class="title_name">3D模型 (3DMAX2020)</div>
      <div class="title_date flex_hcentersstart">
        <span>发布时间：2020-05-08 11:05:27</span>
        <div class="titlebox flex_center">
          <i class="iconfont icon-download" style="color:#fff;   "></i>: 258
        </div>
        <div class="titlebox flex_center">
          <i
            class="iconfonticon-ai-eye "
            style="color:#fff; margin-bottom: -2px;  "
          ></i
          >: 258
        </div>
      </div>
    </div>
    <div class="mode_content flex_vcLbetween">
      <div class="mode_content_left">
        <div class="mode_content_lefti" v-for="i in 3" :key="i"></div>
      </div>
      <div class="mode_content_right">
        <div class="mode_content_righta flex_hcentersstart">
          <div class="mode_content_rightnatitle flex_v_arounds">
            <div v-for="item in modemsg" :key="item">{{ item }}</div>
          </div>
          <div class="mode_content_rightnaconent">
            <div v-for="i in 13" :key="i">玄策-模块环保展台：XC-MK-122</div>
          </div>
        </div>
        <div class="mode_content_rightb flex_vcLbetween">
          <span>同类3D模型</span>
          <span>更多>></span>
        </div>
        <div class="mode_content_rightc">
          <div class="mode_content_rightci" v-for="i in 3" :key="i"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      modemsg: [
        "模型名称",
        "3D版本",
        "类型",
        "风格",
        "行业",
        "渲染器",
        "尺寸",
        "限高",
        "开口",
        "层数",
        "文件大小",
        "发布人",
        "发布时间",
      ],
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.modeDe {
  .modede_title {
    width: 100%;
    border-bottom: 2px solid #e5e5e5;
    .title_name {
      font-size: 16px;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
    }
    .title_date {
      margin: 19px 0 16px 0;

      font-size: 10px;
      font-weight: 400;
      color: rgba(103, 103, 103, 1);
      span {
        margin-right: 10px;
      }
      .titlebox {
        margin-right: 6px;
        width: 56px;
        height: 22px;
        background: rgba(234, 77, 31, 1);
        border-radius: 4px;
        color: #fefefe;
      }
    }
  }
  .mode_content {
    margin: 40px 0 146px 0;
    width: 100%;
    .mode_content_left {
      .mode_content_lefti {
        width: 780px;
        height: 440px;
        background: rgba(126, 206, 244, 1);
        margin-bottom: 20px;
      }
    }
    .mode_content_right {
      .mode_content_righta {
        padding: 40px 0 40px 40px;
        width: 340px;
        height: 464px;
        background: rgba(248, 248, 248, 1);
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
        margin-bottom: 46px;
        div {
          height: 100%;

          display: flex;
          justify-content: space-between;
          flex-direction: column;
          font-size: 14px;
          font-weight: 400;
        }
        .mode_content_rightnatitle {
          width: 87px;
          color: rgba(102, 102, 102, 1);
        }
        .mode_content_rightnaconent {
          color: #333333;
        }
      }
      .mode_content_rightb {
        width: 340px;
        height: 40px;
        background: rgba(248, 248, 248, 1);
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
        font-size: 16px;
        font-weight: 400;
        color: rgba(234, 77, 31, 1);

        padding: 0 20px;
      }
      .mode_content_rightc {
        margin-top: 30px;
        .mode_content_rightci {
          margin-bottom: 20px;
          width: 380px;
          height: 220px;
          background: brown;
        }
      }
    }
  }
}
</style>
