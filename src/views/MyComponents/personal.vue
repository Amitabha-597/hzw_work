<template>
  <div class="personal">
    <div class="item_name">
      <span class="itemname">姓名：</span>
      <input type="text" />
    </div>
    <div class="item_email">
      <span class="itemname">QQ邮箱：</span>
      <input type="email" placeholder="请输入qq邮箱地址" />
    </div>
    <div class="item_adress">
      <span class="itemname">地址：</span>
      <input type="email" />
    </div>
    <div class="item_adress">
      <span class="itemname">手机号：</span>
      <input type="email" />
    </div>
    <div class="item_idcard">
      <span class="itemname" style="width:300px">上传手持身份证本身头像：</span>
    </div>
    <div class="myidcard">
      <div>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <div class="uploaderclick">点击上传</div>
          <img :src="imageUrl" class="myidcarda" />
        </el-upload>
        <div class="tips">身份证正面照</div>
      </div>
      <div>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <div class="uploaderclick">点击上传</div>
          <img :src="imageUrl2" class="myidcarda" />
        </el-upload>
        <div class="tips">身份证反面照</div>
      </div>
    </div>
    <div class="introduce">
      <span class="itemname">自我介绍：</span>
      <textarea name id cols="30" rows="10"></textarea>
    </div>
    <div class="item_upimg">
      <span class="itemname">上传案例：</span>
      <div class="item_upimgbox">
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
        <div class="btnbox">
          <button>上传</button>
        </div>
      </div>
    </div>
    <div class="item_upimg">
      <span class="itemname">上传案例：</span>
      <div class="item_upimgbox">
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
        <div class="btnbox">
          <button>上传</button>
        </div>
      </div>
    </div>
    <div class="item_name">
      <span class="itemname">我要显示在前面：</span>
      <el-switch v-model="isShowFront" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
    <div class="item_day">
      <span class="itemname">选择显示天数：</span>
      <div>
        <input type />
        天
      </div>
    </div>
    <div class="item_price">
      <span class="itemname">价格（元）：</span>
      <div>
        <input type />
      </div>
    </div>
    <div class="item_price
    ">
      <span class="itemname">预计置顶日期：</span>
      <div>
        <input type />
      </div>
    </div>
    <div class="toExamine">
      <button>提交审核</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      imageUrl:
        "http://b-ssl.duitang.com/uploads/item/201410/09/20141009224754_AswrQ.jpeg",
      imageUrl2:
        "http://b-ssl.duitang.com/uploads/item/201410/09/20141009224754_AswrQ.jpeg",
      dialogImageUrl: "",
      dialogVisible: false,
      isShowFront: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
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
.personal {
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
      width: 129px;
      height: 36px;
      border: 2px solid rgba(204, 204, 204, 1);
      border-radius: 2px;
    }
  }
  .item_email {
    input {
      width: 341px;
      height: 36px;
      border: 2px solid rgba(204, 204, 204, 1);
      border-radius: 2px;
    }
  }
  .item_adress {
    input {
      width: 520px;
      height: 36px;
      border: 2px solid rgba(204, 204, 204, 1);
      border-radius: 2px;
    }
  }
  .myidcard {
    display: flex;
    margin-left: 180px;
    .myidcarda {
      margin-right: 30px;
      width: 283px;
      height: 185px;
      background: url("../../assets/img/Details/albaba.png");
    }
    .uploaderclick {
      width: 283px;
      background: #689fc3;
      position: absolute;
      padding: 5px 0;
      bottom: 0;
      color: #fff;
    }
    .tips {
      text-align: center;
      width: 283px;
      font-size: 14px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
    }
  }
  .introduce {
    display: flex;
    align-items: flex-start;
    textarea {
      width: 520px;
      height: 136px;
      border: 2px solid rgba(204, 204, 204, 1);
      border-radius: 2px;
    }
  }
  .item_upimg {
    display: flex;
    align-items: flex-start;
    .btnbox {
      width: 100%;
      margin: 20px 0;
      text-align: center;
      button {
        width: 80px;
        height: 30px;
        background: rgba(237, 237, 237, 1);
        border: 2px solid rgba(219, 219, 219, 1);
        border-radius: 2px;
      }
    }
    .item_upimgbox {
      div {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
      }
    }
  }
  .item_day {
    display: flex;
    align-items: center;
    div {
      width: 128px;
      height: 36px;
      border: 2px solid rgba(204, 204, 204, 1);
      border-radius: 2px;
      input {
        height: 34px;
        width: 92px;
        border-right: 2px solid rgba(204, 204, 204, 1);
        text-align: center;
      }
    }
  }
   .item_price {
    display: flex;
    align-items: center;
    div {
      width: 128px;
      height: 36px;
      border: 2px solid rgba(204, 204, 204, 1);
      border-radius: 2px;
      input {
        height: 34px;
        width: 92px;
        text-align: center;
      }
    }
  }
  .toExamine {
    font-weight: bold;
    margin: 94px auto 260px auto;
    width: 176px;
    height: 44px;
    button {
      color: rgba(255, 255, 255, 1);
      width: 176px;
      height: 44px;
      background: rgba(234, 77, 31, 1);
      font-size: 18px;
    }
  }
}
</style>