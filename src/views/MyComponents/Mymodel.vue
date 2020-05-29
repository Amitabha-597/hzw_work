<template>
  <div class="mymode">
    <div class="mymode_title">
      上传模型
      <span>（注：发布的模型需要15天审核时间；若关联某个方案，请将模型关联这个方案）</span>
    </div>
    <!-- 选择分类： -->
    <div class="mode_item">
      <div class="item_name">
        选择分类：
        <span>*</span>
      </div>
      <div class="classify">
        <el-radio v-model="radio" label="1">展台</el-radio>
        <el-radio v-model="radio" label="2">展厅&商业空间</el-radio>
        <el-radio v-model="radio" label="3">建筑室内</el-radio>
        <el-radio v-model="radio" label="4">舞美</el-radio>
        <el-radio v-model="radio" label="5">配件</el-radio>
        <el-radio v-model="radio" label="6">平面</el-radio>
      </div>
    </div>
    <!-- 模型名称 -->
    <div class="mode_item">
      <div class="item_name">
        模型名称:
        <span>*</span>
      </div>
      <div class="modename">
        <input type="text" />
      </div>
    </div>
    <!-- 关键字： -->
    <div class="mode_item">
      <div class="item_name">
        关键字：
        <span></span>
      </div>
      <div class="modename">
        <input type="text" />
        <span style="color:#E44E2B;font-size:14px; margin-left: 30px;">多个关键词之间请用空格隔开</span>
      </div>
    </div>
    <!-- 关联方案： -->
    <div class="mode_item">
      <div class="item_name">
        关联方案：
        <span></span>
      </div>
      <div class="modename">
        <input type="text" placeholder="选择方案" />
      </div>
    </div>
    <!-- 类型： -->
    <div class="mode_item">
      <div class="item_name">
        类型：
        <span>*</span>
      </div>
      <div class="classify">
        <el-radio v-model="radio" label="1">木质特装</el-radio>
        <el-radio v-model="radio" label="3">铝制型材</el-radio>
        <el-radio v-model="radio" label="4">循环材料</el-radio>
        <el-radio v-model="radio" label="5">主场</el-radio>
        <el-radio v-model="radio" label="6">展团</el-radio>
      </div>
    </div>
    <!-- 行业： -->
    <div class="mode_item">
      <div class="item_name">
        行业：
        <span>*</span>
      </div>
      <div class="modenameb">
        <input placeholder="搜索行业" type="text" />
      </div>
    </div>
    <!-- 风格： -->
    <div class="mode_item">
      <div class="item_name">
        风格：
        <span>*</span>
      </div>
      <div class="classify">
        <el-radio v-model="radio" label="1">科技</el-radio>
        <el-radio v-model="radio" label="3">极简</el-radio>
        <el-radio v-model="radio" label="4">中式</el-radio>
        <el-radio v-model="radio" label="5">解构</el-radio>
        <el-radio v-model="radio" label="6">象形</el-radio>
      </div>
    </div>
    <!-- 材料： -->
    <div class="mode_item">
      <div class="item_name">
        材料：
        <span></span>
      </div>
      <div class="modename">
        <input type="text" />
        <span
          style="color:#E44E2B;font-size:14px; margin-left: 30px;"
        >例如：木 金属 桁架 漆 石 玻璃 有机板 灯箱 布 膜 LED 光 水</span>
      </div>
    </div>
    <!-- 亮点： -->
    <div class="mode_item">
      <div class="item_name">
        亮点：
        <span></span>
      </div>
      <div class="modename">
        <input type="text" />
        <span
          style="color:#E44E2B;font-size:14px; margin-left: 30px;"
        >如：吊顶 地台 形象区 接待区 产品区 洽谈区 软装 植物 模特</span>
      </div>
    </div>
    <!-- 渲染器： -->
    <div class="mode_item">
      <div class="item_name">
        渲染器：
        <span>*</span>
      </div>
      <div class="classify">
        <el-radio v-model="radio" label="1">默认渲染器</el-radio>
        <el-radio v-model="radio" label="2">VRAY渲染器</el-radio>
        <el-radio v-model="radio" label="3">其他</el-radio>
      </div>
    </div>
    <!-- 限高（米）： -->
    <div class="mode_item">
      <div class="item_name">
        限高（米）：
        <span>*</span>
      </div>
      <div class="maxheight">
        <input type="text" />
      </div>
    </div>
    <!-- 尺寸： -->
    <div class="mode_item">
      <div class="item_name">
        选择分类：
        <span>*</span>
      </div>
      <div class="classify">
        <el-radio v-model="radio" label="1">展台</el-radio>
        <el-radio v-model="radio" label="2">展厅&商业空间</el-radio>
        <el-radio v-model="radio" label="3">建筑室内</el-radio>
        <el-radio v-model="radio" label="4">舞美</el-radio>
        <el-radio v-model="radio" label="5">配件</el-radio>
        <el-radio v-model="radio" label="6">平面</el-radio>
      </div>
    </div>
    <!-- 开口： -->
    <div class="mode_item">
      <div class="item_name">
        开口：
        <span>*</span>
      </div>
      <!-- 开口： -->
      <div class="classify">
        <el-radio v-model="radio" label="1">一面</el-radio>
        <el-radio v-model="radio" label="2">两面</el-radio>
        <el-radio v-model="radio" label="3">三面</el-radio>
        <el-radio v-model="radio" label="4">四面</el-radio>
        <el-radio v-model="radio" label="5">其他</el-radio>
      </div>
    </div>
    <!-- 层数： -->
    <div class="mode_item">
      <div class="item_name">
        开口：
        <span>*</span>
      </div>
      <!-- 开口： -->
      <div class="classify">
        <el-radio v-model="radio" label="1">一层</el-radio>
        <el-radio v-model="radio" label="2">两层</el-radio>
        <el-radio v-model="radio" label="3">三面</el-radio>
        <el-radio v-model="radio" label="4">三层</el-radio>
        <el-radio v-model="radio" label="5">其他</el-radio>
      </div>
    </div>
    <!-- 价格（元）： -->
    <div class="mode_item">
      <div class="item_name">
        价格（元）：
        <span>*</span>
      </div>
      <div class="modeprice">
        <input type="text" />
      </div>
    </div>
    <!--模型文件：： -->
    <div class="mode_item">
      <div class="item_name">
        模型文件：
        <span>*</span>
      </div>
      <div class="modefile">
        <input type="text" />
        <input id="file" type="file" />
      </div>
    </div>
    <!-- 基本信息 -->
    <div class="mode_itemb">
      <div class="item_name">
        基本信息：
        <span>*</span>
      </div>
      <div class="modeinfo">
        <div ref="editor" style="text-align:left;"></div>
      </div>
    </div>
    <button class="Submit">提交</button>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  components: {},
  data() {
    return {
      radio: "1",
      editorContent: ""
    };
  },
  computed: {},
  watch: {},
  methods: {
    selected(data) {
      this.province = data.province.value;
      this.city = data.city.value;
      this.area = data.area.value;
    }
  },
  created() {},
  mounted() {
    var editor = new E(this.$refs.editor);
    editor.customConfig.onchange = html => {
      this.editorContent = html;
    };
    editor.create();
  },
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
.mymode {
  .mymode_title {
    margin-bottom: 48px;
    font-size: 30px;
    font-weight: bold;
    color: rgba(234, 77, 31, 1);
    span {
      font-size: 24px;
    }
  }
  /deep/.el-radio__input.is-checked .el-radio__inner {
    border-color: #ea4d1f;
    background: #ea4d1f;
    color: #ea4d1f;
  }
  /deep/.el-radio__input.is-checked + .el-radio__label {
    color: #ea4d1f;
  }
  .mode_item {
    display: flex;
    align-items: center;
    .item_name {
      padding: 24px 0;
      width: 167px;
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      line-height: 30px;
      span {
        font-size: 18px;
        color: red;
      }
    }
    .modename {
      input {
        width: 520px;
        height: 36px;
        border: 2px solid rgba(204, 204, 204, 1);
        border-radius: 2px;
      }
    }
    .modenameb {
      input {
        width: 1012px;
        height: 36px;
        border: 2px solid rgba(204, 204, 204, 1);
        border-radius: 2px;
      }
    }
    .maxheight {
      input {
        width: 228px;
        height: 36px;
        border: 2px solid rgba(204, 204, 204, 1);
        border-radius: 2px;
      }
    }
    .modesize {
      input {
        width: 108px;
        height: 36px;
        border: 2px solid rgba(204, 204, 204, 1);
        border-radius: 2px;
      }
      span {
        padding: 0 5px;
        font-size: 14px;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
      }
    }
    .modeprice {
      input {
        width: 128px;
        height: 36px;
        border: 2px solid rgba(204, 204, 204, 1);
        border-radius: 2px;
      }
    }
    .modefile {
      input:first-child {
        margin-right: 20px;
        width: 228px;
        height: 36px;
        border: 2px solid rgba(204, 204, 204, 1);
        border-radius: 2px;
      }
    }
  }
  .mode_itemb {
    margin-top: 30px;
    display: flex;
    align-items: flex-start;
    .item_name {
      padding: 24px 0;
      width: 167px;
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      line-height: 30px;
      span {
        font-size: 18px;
        color: red;
      }
    }
    .modeinfo {
      width: 1019px;
      height: 420px;
    }
  }
  .Submit {
    width: 176px;
    height: 44px;
    background: rgba(234, 77, 31, 1);
    font-size: 18px;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    margin-left: 168px;
    margin-bottom: 70px;
  }
}
</style>