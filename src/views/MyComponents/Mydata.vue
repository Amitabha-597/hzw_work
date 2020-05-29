<template>
  <div class="mydata">
    <div class="mydata_title">个人资料</div>
    <div class="mydata_content">
      <div class="mydata_contentA">
        <div class="mydata_avatarbox flex_startstart">
          <div class="titlename">当前头像：</div>
          <div class="mydata_avatar">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <div class="avatar-uploader-icon">编辑头像</div>
              <img :src="imageUrl" class="avatar" />
            </el-upload>
          </div>
        </div>
        <div class="mydata_avatarbox flex_startstart">
          <div class="titlename">昵称：</div>
          <input type="text" />
        </div>
        <div class="mydata_avatarbox flex_startstart">
          <div class="titlename">居住地：</div>
          <input type="text" />
          <select name id>
            <option value></option>
            <option value></option>
            <option value></option>
            <option value></option>
          </select>
          <select name id>
            <option value></option>
          </select>
          <select name id>
            <option value></option>
          </select>
        </div>
      </div>
    </div>
    <div class="mydata_btn flex_center">
      <button>保存</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      imageUrl:
        "http://b-ssl.duitang.com/uploads/item/201410/09/20141009224754_AswrQ.jpeg"
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
.mydata {

  .mydata_content {
    .mydata_contentA {
      height: 300px;
      width: 820px;
      border-bottom: 1px solid #f1f1f2;
      margin: 0 auto;
      .mydata_avatarbox {
        margin-bottom: 40px;
        .titlename {
          width: 120px;
        }
        .mydata_avatar {
          width: 90px;
          height: 90px;
          border-radius: 1px;
          border: 1px solid #f1f2f2;
        }
      }
    }
  }
  .mydata_btn {
    margin-top: 40px;

    button {
      width: 80px;
      height: 44px;
      background: rgba(234, 77, 31, 1);
      border-radius: 2px;
      font-size: 18px;
      letter-spacing: 3px;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      border: none;
      outline: none;
    }
  }
}
</style>