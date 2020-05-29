<template>
  <div class="Myfactory">
    <div class="factorytile">会展网校</div>
    <div class="factory_item">
      <div class="itemname">标题</div>
      <input type="text" placeholder="请输入活动主题" />
    </div>
    <div class="factory_upload">
      <div class="itemname">上传照片/视频:</div>
      <div class="uploadbox">
        <div class="uploadboxa">
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
          <div>
            <button>上传</button>
          </div>
        </div>
        <div class="uploadboxa">
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
          <div>
            <button>上传</button>
          </div>
        </div>
      </div>
    </div>
    <div class="factory_date">
      <div class="itemname">活动时间</div>
      <div>
        <el-date-picker
          v-model="value1"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
    </div>
    <div class="factory_explain">
      <div class="itemname">活动说明</div>
      <div class="factory_explainbox"></div>
    </div>
    <div class="factory_adress">
      <div class="itemname">活动地址</div>
      <div class="factory_adressbox">
        <input type="text" />
        <button>导航</button>
      </div>
    </div>
    <div class="factory_pay">
      <div class="itemname">支付人员滚动显示</div>
      <div class="factory_paybox">
        <template>
          <el-radio v-model="radio" label="1">显示</el-radio>
          <el-radio v-model="radio" label="2">不显示</el-radio>
        </template>
      </div>
    </div>
    <div class="factory_pay">
      <div class="itemname">支付人员人数显示</div>
      <div class="factory_paybox">
        <template>
          <el-radio v-model="radio" label="1">显示</el-radio>
          <el-radio v-model="radio" label="2">不显示</el-radio>
        </template>
      </div>
    </div>

    <div class="factory_paylook">
      <div class="itemname">播放观看</div>
      <div class="factory_paylookbox">去支付1元</div>
    </div>
    <div class="factory_pay">
      <div class="itemname">独立分享功能</div>
      <div class="factory_paybox">
        <template>
          <el-radio v-model="radio" label="1">显示</el-radio>
          <el-radio v-model="radio" label="2">不显示</el-radio>
        </template>
      </div>
    </div>
    <div class="factory_pay">
      <div class="itemname">观看需不需要注册</div>
      <div class="factory_paybox">
        <template>
          <el-radio v-model="radio" label="1">显示</el-radio>
          <el-radio v-model="radio" label="2">不显示</el-radio>
        </template>
      </div>
    </div>
    <div class="factory_Submit flex_vcenter">
      <span>同意《账号服务条款、隐私政策》</span>
      <button>提交</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      radio: "1",
      checkList: ["", ""],
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)]
    };
  },
  computed: {},
  methods: {},
  mounted() {},
  created() {}
};
</script>
<style lang='less' scoped>
.Myfactory {
  .itemname {
    width: 100px;
    font-size: 18px;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
  .factorytile {
    padding: 20px 0;
    font-size: 30px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgba(234, 77, 31, 1);
  }
  > div {
    margin: 20px 0;
  }

  .factory_item {
    display: flex;
    align-items: center;

    input {
      width: 520px;
      height: 36px;
      border: 2px solid rgba(204, 204, 204, 1);
      border-radius: 2px;
    }
  }
  .factory_upload {
    display: flex;
    margin-bottom: 20px;

    .itemname {
      width: 140px;
    }
    .uploadbox {
      display: flex;
      padding-left: 10px;
      .uploadboxa {
        text-align: center;
        padding: 0 30px;
        button {
          width: 80px;
          margin-top: 30px;
          height: 30px;
          background: rgba(237, 237, 237, 1);
          border: 2px solid rgba(219, 219, 219, 1);
          border-radius: 2px;
        }
      }
    }
  }
  .factory_date {
    display: flex;
    align-items: center;
  }
  .factory_Submit {
    text-align: center;
    margin: 50px 0 140px 0;
    span {
        margin-bottom:12px ;
      font-size: 12px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
    }

    button {
      width: 176px;
      height: 44px;
      background: rgba(234, 77, 31, 1);
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
    }
  }
  .factory_explain {
    display: flex;
    align-items: flex-start;
    .factory_explainbox {
      width: 1052px;
      height: 180px;
      border: 2px solid rgba(204, 204, 204, 1);
      border-radius: 2px;
    }
  }
  .factory_adress {
    display: flex;
    align-items: center;
    .factory_adressbox {
      input {
        width: 520px;
        height: 36px;
        border: 2px solid rgba(204, 204, 204, 1);
        border-radius: 2px;
      }
      button {
        font-size: 14px;
        font-weight: bold;
        color: rgba(102, 102, 102, 1);
        width: 80px;
        height: 30px;
        background: rgba(237, 237, 237, 1);
        border: 2px solid rgba(219, 219, 219, 1);
        border-radius: 2px;
        margin-left: 10px;
      }
    }
  }
  .factory_pay {
    margin-top: 30px;
    .itemname {
      width: 200px;
    }
    display: flex;
    align-items: center;
    /deep/.el-radio__input.is-checked .el-radio__inner {
      border-color: #dedede;
      background: #dedede;
    }
    /deep/.el-radio__input.is-checked + .el-radio__label {
      color: #333333;
    }
  }
  .factory_paylook {
    display: flex;
    align-items: center;
    .factory_paylookbox {
      width: 103px;
      height: 30px;
      border: 2px solid rgba(234, 77, 31, 1);
      border-radius: 2px;
      font-size: 14px;
      font-weight: bold;
      color: rgba(255, 102, 51, 1);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>