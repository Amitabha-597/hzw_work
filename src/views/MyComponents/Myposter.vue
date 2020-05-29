<template>
  <div class="myorder">
    <div class="title">发布需求</div>
    <div class="Issue_main">
      <div class="item_name">
        <span class="itemname">
          展会(项目)名称:
          <span style="color: red; padding: 0 10px;">*</span>
        </span>
        <input type="text" />
      </div>
      <div class="item_place">
        <span class="itemname">施工地点：请选择</span>
        <div>
          <v-distpicker @selected="selected" province="省" city="市" area="区"></v-distpicker>
        </div>
      </div>
      <div class="item_date">
        <span class="itemname">时间：请选择</span>
        <input type="date" />
      </div>
      <div class="item_shoptype">
        <span class="itemname">服务商类型：</span>
        <div class="item_shoptypebox">
          <el-checkbox-group v-model="checkshoptype">
            <el-checkbox label="策划展览公司"></el-checkbox>
            <el-checkbox label="活动公司"></el-checkbox>
            <el-checkbox label="纯木质工厂"></el-checkbox>
            <el-checkbox label="桁架搭建"></el-checkbox>
            <el-checkbox label="型材搭建"></el-checkbox>
            <el-checkbox label="设备租赁"></el-checkbox>
            <el-checkbox label="花草桌椅"></el-checkbox>
            <el-checkbox label="美工制作"></el-checkbox>
            <el-checkbox label="人力资源"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="item_square">
        <span class="itemname">面积:</span>
        <div class="item_squarer">
          <input type="text" />
          <div>m²</div>
        </div>
      </div>
      <div class="item_img">
        <span class="itemname">上传效果图:</span>
        <div class="item_imgbox">
          <div>
            <div>
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt />
              </el-dialog>
            </div>
          </div>
          <div>
            <div>
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <video src></video>
              </el-dialog>
            </div>
          </div>
        </div>
      </div>
      <div class="item_selectimg">
        <span class="itemname" style="width:600px">
          可选择平台提供类似照片：
          <i class="iconfont icon-ai-eye" style="color:#909090;width:31px;height:16px;"></i>
        </span>
        <div class>
          <swiper :options="swiperOption">
            <swiper-slide class="swiper-slide" v-for="(item,index) in 50" :key="index">{{index}}</swiper-slide>
            <!-- 分页器 -->
            <div class="swiper-pagination" slot="pagination"></div>
            <!-- 左右箭头 -->
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </div>
      <div class="item_xuqiu">
        <span class="itemname" style="margin-top:30px">材质需求：请选择</span>
        <div class="item_xuqiubox">
          <el-checkbox-group v-model="checkshoptype">
            <el-checkbox label="室内"></el-checkbox>
            <el-checkbox label="室外"></el-checkbox>
            <el-checkbox label="木质结构"></el-checkbox>
            <el-checkbox label="涂料"></el-checkbox>
            <el-checkbox label="宝丽纸"></el-checkbox>
            <el-checkbox label="涂料烤漆"></el-checkbox>
            <el-checkbox label="桁架、叉子架"></el-checkbox>
            <el-checkbox label="桁木结合"></el-checkbox>
            <el-checkbox label="防火地毯"></el-checkbox>
            <el-checkbox label="圈绒地毯"></el-checkbox>
            <el-checkbox label="地台"></el-checkbox>
            <el-checkbox label="大屏"></el-checkbox>
            <el-checkbox label="地板"></el-checkbox>
            <el-checkbox label="二层结构"></el-checkbox>
            <el-checkbox label="场地租赁"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="budget">
        <span class="itemname" style="margin-top:8px">预算（人民币元）：</span>
        <div class="budget_input">
          <input type="text" />
        </div>
      </div>
      <div class="budget">
        <span class="itemname" style="margin-top:8px">置顶天数 ：</span>
        <div class="budget_input">
          <input type="text" />
        </div>
      </div>
      <div class="budget">
        <span class="itemname" style="margin-top:8px">价格（元）</span>
        <div class="budget_input">
          <input type="text" />
        </div>
      </div>
      <div class="budget">
        <span class="itemname" style="margin-top:8px">预计置顶日期：</span>
        <div class="budget_input">
          <input type="text" />
        </div>
      </div>
      <div class="budget">
        <span class="itemname" style="margin-top:8px; width: 314px;">
          缴纳诚信金人民币元：
          <span style="font-size:16px;color:#666666">（增加可信度）</span>
        </span>
        <div class="budget_input">
          <input type="number" />
          <div
            style="font-size:14px;color:#999999;margin-top: 10px;"
          >诚信金使用说明：1.项目结束申请原路退回；2.也可作为尾款项支付给合作方；3.可作为纠纷支付款；4.增加诚信度。</div>
        </div>
      </div>
      <div class="snapshot">
        <span class="itemname" style="margin-top:8px;width:500px">
          交易发生争议快照：
          <span style="color:#666666;">（发生争议时，可作为判断依据）</span>
        </span>

        <div class="snapshot_box">
          <div>
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
          </div>
          <div>
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
          </div>
        </div>
      </div>
      <div style="color：#666666;font-size:12px; margin-top: 140px; ">
        注：发布者自行承担项目的真实性和由此产生的一切法律事务和平台没有关系，已仔细阅读
        <span style="color:#EA4D1F">《隐私和保密》、《诚信金协议》</span>
      </div>
      <div class="release">
        <button>确认发布</button>
      </div>
    </div>
    <div class="title">我要接单</div>
    <div class="order_receive">
      <div class="budget">
        <span class="itemname" style="margin-top:8px; width: 314px;">
          缴纳诚信金人民币元：
          <span style="font-size:16px;color:#666666">（增加可信度）</span>
        </span>
        <div class="budget_input">
          <input type="text" />
          <div
            style="font-size:14px;color:#999999; margin-top: 10px;"
          >诚信金使用说明：1.项目结束申请原路退回；2.也可作为尾款项支付给合作方；3.可作为纠纷支付款；4.增加诚信度。</div>
        </div>
      </div>
      <div class="snapshot">
        <span class="itemname" style="margin-top:8px;width:500px">
          交易发生争议快照：
          <span style="color:#666666;">（发生争议时，可作为判断依据）</span>
        </span>

        <div class="snapshot_box">
          <div>
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
          </div>
          <div>
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
          </div>
        </div>
        <div style="color：#666666;font-size:12px; margin-top: 140px; ">
          注：发布者自行承担项目的真实性和由此产生的一切法律事务和平台没有关系，已仔细阅读
          <span style="color:#EA4D1F">《隐私和保密》、《诚信金协议》</span>
        </div>
        <div class="release">
          <button>我要接单</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      month: "",
      checkshoptype: [],
      dialogImageUrl: "",
      dialogVisible: false,
      videoFlag: false,
      watchSlidesProgress: true,
      count: 0,
      adress: {
        province: "",
        city: "",
        area: ""
      },
      swiperOption: {
        //显示分页
        slidesPerView: 4, // 显示的数量
        spaceBetween: 30, // 每张的间距
        //设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        //自动轮播
        autoplay: {
          delay: 9000,
          //当用户滑动图片后继续自动轮播
          disableOnInteraction: false
        },
        //开启循环模式
        loop: true
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    load() {
      this.count += 2;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  },
  created() {},
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
.myorder {
  .title {
    font-size: 30px;
    font-weight: bold;
    color: rgba(234, 77, 31, 1);
    line-height: 110px;
    border-bottom: 1px solid #f1f2f1;
    padding-bottom: 20px;
  }
  .Issue_main {
    > div {
      margin-bottom: 20px;
    }
    .itemname {
      font-size: 18px;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      display: inline-block;
      width: 166px;
    }

    .item_name {
      input {
        width: 520px;
        height: 36px;
        border: 2px solid rgba(204, 204, 204, 1);
        border-radius: 2px;
      }
    }
    .item_place {
      display: flex;
      color: chocolate;
    }
    .item_shoptype {
      display: flex;
      .item_shoptypebox {
        background: rgba(248, 248, 248, 1);
      }
    }
    .item_square {
      display: flex;
      .item_squarer {
        display: flex;
        width: 128px;
        height: 36px;
        border: 2px solid rgba(204, 204, 204, 1);
        border-radius: 2px;
        input {
          width: 90px;
        }
        div {
          width: 36px;
          height: 36px;
          border-left: 2px solid rgba(204, 204, 204, 1);
          border-radius: 2px;
          text-align: center;
          line-height: 36px;
        }
      }
    }
    .item_img {
      display: flex;
      .item_imgbox {
        display: flex;
        > div {
          margin-right: 20px;
          > div {
            border-radius: 2px;
            height: 140px;
          }
        }
      }
    }
    .item_selectimg {
      .swiper-container {
        width: 100%;
        height: auto;
        padding: 90px 0;
        margin-left: auto;
        margin-right: auto;
        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #fff;
          width: 220px !important;
          height: 220px;
          /* Center slide text vertically */
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          transition-property: all;
          background: red;
        }
      }
    }
    .item_xuqiu {
      display: flex;
      .item_xuqiubox {
        width: 1012px;
        height: 170px;
        background: rgba(248, 248, 248, 1);
        padding: 30px 30px;

        box-sizing: border-box;
        .el-checkbox {
          width: 114px;
          margin-bottom: 20px;
          margin-right: 20px;
        }
      }
    }
    .snapshot {
      .snapshot_box {
        margin-top: 30px;
        display: flex;
        justify-content: flex-start;
        margin-left: 167px;
        div {
          margin-right: 30px;
        }
      }
    }
    .budget {
      display: flex;
      input {
        width: 124px;
        height: 32px;
        border: 2px solid rgba(204, 204, 204, 1);
        border-radius: 2px;
      }
    }
    .release {
      width: 100%;
      text-align: center;
      margin-top: 82px;
      button {
        width: 176px;
        height: 44px;
        background: rgba(234, 77, 31, 1);
        font-size: 18px;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
      }
    }
  }

  .order_receive {
    margin-top: 30px;
    .budget {
      display: flex;
      input {
        width: 124px;
        height: 32px;
        border: 2px solid rgba(204, 204, 204, 1);
        border-radius: 2px;
      }
    }
    .snapshot {
      margin-top: 41px;
      .snapshot_box {
        margin-top: 30px;
        display: flex;
        justify-content: flex-start;
        margin-left: 167px;
        div {
          margin-right: 30px;
        }
      }
    }
    .release {
      width: 100%;
      text-align: center;
      margin: 82px 0;
      button {
        width: 176px;
        height: 44px;
        background: rgba(234, 77, 31, 1);
        font-size: 18px;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}
</style>