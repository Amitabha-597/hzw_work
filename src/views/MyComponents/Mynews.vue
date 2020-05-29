<template>
  <div class="Myfactory">
    <div class="factorytile">会展新闻</div>
    <div class="factory_item">
      <div class="itemname">标题</div>
      <input type="text"  />
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
    <div class="factory_text">
      <div class="itemname">正文：</div>
      <div class="factory_textbox">
        <div ref="editor" style="text-align:left;"></div>
      </div>
    </div>
    <div class="factory_Submit">
      <button>提交</button>
    </div>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {
    var editor = new E(this.$refs.editor);
    editor.customConfig.onchange = html => {
      this.editorContent = html;
    };
    editor.create();
  },
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

  .factory_Submit {
    margin: 50px 0 140px 100px;
    span {
      margin-bottom: 12px;
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
  .factory_text {
    display: flex;

    .factory_textbox {
      width: 1095px;
    }
  }
}
</style>