<template>
  <div class="Myfactory">
    <div class="factorytile">共享工厂</div>
    <div class="factory_item">
      <div class="itemname">标题</div>
      <input type="text" />
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
    <div class="factory_power">
      <div class="itemname">设置查看权限</div>
      <div>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="VIP会员"></el-checkbox>
          <el-checkbox label="特战队"></el-checkbox>
          <el-checkbox label="合伙人"></el-checkbox>
          <el-checkbox label="副会长单位"></el-checkbox>
          <el-checkbox label="理事单位"></el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
    <div class="factory_see">
      <div class="itemname">普通会员查看</div>
      <button>10元/次</button>
    </div>
    <div class="factory_date">
      我
      <select name id>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      月份有空，可以联系我
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
    return {
      checkList: ["选中且禁用", "复选框 A"]
    };
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
  .factory_text {
    display: flex;

    .factory_textbox {
      width: 1095px;
    }
  }
  .factory_power {
    .itemname {
      width: 160px;
    }
    margin-top: 44px;
    display: flex;
    /deep/ .el-checkbox__input.is-checked .el-checkbox__inner {
      background-color: #ea4d1f;
      border-color: #ea4d1f;
    }
    /deep/.el-checkbox__input.is-checked + .el-checkbox__label {
      color: #ea4d1f;
    }
  }
  .factory_see {
    .itemname {
      width: 160px;
    }
    display: flex;
    align-items: center;
    button {
      width: 128px;
      height: 36px;
      border: 2px solid rgba(204, 204, 204, 1);
      border-radius: 2px;
      font-size: 14px;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
  }
  .factory_date {
    font-size: 18px;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    select {
      outline: none;
      border: 2px solid rgba(255, 102, 51, 1);
      border-radius: 2px;
    }
  }
  .factory_Submit {
    text-align: center;
    margin: 50px 0 140px 0;
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
}
</style>