<template>
  <div class="Enterprisedet">
    <div class="modede_title">
      <div class="title_name">企业档案</div>
      <div class="title_date flex_hcentersstart">
        <span>入住时间：2020-05-08 11:05:27</span>
      </div>
    </div>
    <div class="Enterprisedet_con">
      <div class="Enterprisedet_item flex_vcLbetween">
        <div class="Enterprisedet_itemL">
          <div class="Enterprisedet_itemLl flex_vcLbetweenstart">
            <div class="Enterprisedet_logo">企业logo</div>
            <div class="Enterprisedet_info">
              <div class="Enterprisedet_name">北京兴业德诚展览展示有限公司</div>
              <div class="Enterprisedet_label">
                <span>会议及展览服务</span>
                <span>组织文化艺术交流活动</span>
                <span>企业策划</span>
              </div>
              <div class="Enterprisedet_us">
                <span>关于我们</span>
                <div>
                  我们有好的产品和专业的销售和技术团队，我公司属于北京展览会信息公司行业，
                  如果您对我公司的产品服务有兴趣，期待您在线留言或者来电咨询
                </div>
              </div>
              <div class="Enterprisedet_data">
                <span>企业资料</span>
                <div class="Enterprisedet_datacon">
                  <div class="Enterprisedet_dataL">
                    <div>公司名称</div>
                    <div>成立时间</div>
                    <div>公司规模</div>
                    <div>公司地址</div>
                  </div>
                  <div class="Enterprisedet_dataR">
                    <div>北京兴业德诚展览展示有限公司</div>
                    <div>2011-06-09</div>
                    <div>中型企业</div>
                    <div>北京市丰台区政馨园一区2号楼6层611</div>
                  </div>
                </div>
              </div>
              <button class="Enterprisedet_tel">
                <i
                  class="iconfont icon-dianhua"
                  style=" margin-bottom: -2px;  "
                ></i>
                电话联系
              </button>
            </div>
          </div>
        </div>
        <div class="Enterprisedet_itemR">
          <div class="Enterprisedet_itemRA">经营资质</div>
          <div class="Enterprisedet_itemRB"></div>
          <div class="Enterprisedet_itCemRC">企业执照</div>
        </div>
      </div>
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
px
<style lang="less" scoped>
.Enterprisedet {
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
    }
  }
  .Enterprisedet_con {
    margin: 40px 0 146px 0;
    .Enterprisedet_itemL {
      width: 720px;
      height: 475px;
      padding: 30px 35px 0 30px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
      .Enterprisedet_itemLl {
        .Enterprisedet_logo {
          width: 200px;
          height: 200px;
          background: burlywood;
        }
      }
      .Enterprisedet_info {
        width: 495px;
        font-weight: 400;
        .Enterprisedet_name {
          font-size: 20px;
          color: #333333;
        }
        .Enterprisedet_label {
          margin: 9px 0 40px 0;
          span {
            padding: 4px 9px;
            font-size: 12px;
            color: rgba(234, 77, 31, 1);
            border: 1px solid rgba(234, 77, 31, 1);
            border-radius: 2px;
            margin-right: 10px;
          }
        }
        .Enterprisedet_us {
          span {
            font-size: 16px;
            color: rgba(51, 51, 51, 1);
          }
          div {
            margin-top: 18px;
            color: #676767;
            font-size: 14px;
            line-height: 24px;
          }
        }
        .Enterprisedet_data {
          margin-top: 30px;
          span {
            font-size: 16px;
            color: rgba(51, 51, 51, 1);
          }
          .Enterprisedet_datacon {
            margin-top: 20px;
            display: flex;
            justify-content: flex-start;
            .Enterprisedet_dataL {
              color: #666666;
              margin-right: 20px;
              div {
                line-height: 25px;
              }
            }
            .Enterprisedet_dataR {
              div {
                line-height: 25px;
              }
            }
          }
        }
        .Enterprisedet_tel {
          margin-top: 30px;
          width: 108px;
          height: 34px;
          border: 2px solid rgba(234, 77, 31, 1);
          border-radius: 4px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(234, 77, 31, 1);
          background: rgba(255, 255, 255, 1);
        }
      }
    }
    .Enterprisedet_itemR {
      width: 380px;
      height: 500px;
      font-weight: 400;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
      .Enterprisedet_itemRA {
        padding: 30px 30px;
        font-size: 20px;
        color: rgba(51, 51, 51, 1);
      }
      .Enterprisedet_itemRB {
        width: 300px;
        height: 211px;
        background: burlywood;
        margin: 10px auto;
      }
      .Enterprisedet_itCemRC {
        margin: 27px auto;
        text-align: center;
        font-size: 14px;
        color: rgba(103, 103, 103, 1);
      }
    }
  }
}
</style>
