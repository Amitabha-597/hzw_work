<template>
  <div class="mydata">
    <div class="mydata_title">钱包明细</div>
    <div class="selectdate" v-show="tableData==''">
      <el-date-picker v-model="date1" type="date" placeholder="选择日期"></el-date-picker>
      <el-date-picker v-model="date2" type="date" placeholder="选择日期"></el-date-picker>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <button>🔍 搜索</button>
    </div>
    <div class="mydata_content">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="序号" width="110"></el-table-column>
        <el-table-column prop="date" label="创建时间" width="184"></el-table-column>
        <el-table-column prop="name" label="名称" width="270"></el-table-column>
        <el-table-column prop="money" label="订单额" width="166"></el-table-column>
        <el-table-column prop="state" label="状态" width="150"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      value: "",
      options: [
        {
          value: "全部",
          label: "全部"
        },
        {
          value: "部分",
          label: "部分"
        }
      ],
      date1: "",
      date2: "",
      option: "",
      tableData: [
        {
          id: "001",
          date: "2020-05-08 09:57:37",
          name: "20205080957001#我需要广告位",
          money: "2000.00",
          state: "交易完成"
        },
        {
          id: "001",
          date: "2020-05-08 09:57:37",
          name: "20205080957001#我需要广告位",
          money: "2000.00",
          state: "交易完成"
        },
        {
          id: "001",
          date: "2020-05-08 09:57:37",
          name: "20205080957001#我需要广告位",
          money: "2000.00",
          state: "交易完成"
        }
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {},
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
    /deep/.cell {
      text-align: center;
    }
  }
  .selectdate {
    display: flex;
    justify-content: space-around;
    button {
      width: 118px;
      height: 36px;
      background: rgba(234, 77, 31, 1);
      border-radius: 2px;
      font-size: 14px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>