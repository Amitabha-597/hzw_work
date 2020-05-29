<template>
  <div class="login">
    <div class="login_top">
      <img style="width:249px;height:89px" src="../assets/img/logon/logo.png" alt />
    </div>
    <main class="banner">
      <div class="Register">
        <div class="Registerheader">注册</div>
        <div class="From">
          <el-form :model="Register" :rules="rules" ref="Register">
            <el-form-item prop="phone">
              <el-input prefix-icon="el-icon-mobile-phone" v-model="Register.phone"></el-input>
            </el-form-item>
            <el-form-item prop="pwd">
              <el-input prefix-icon="el-icon-unlock" v-model="Register.pwd" type="password"></el-input>
            </el-form-item>

            <el-form-item prop="pwd" class="codebox">
              <el-input
                class="code"
                prefix-icon="el-icon-unlock"
                v-model="Register.pwd"
                type="text"
              ></el-input>
              <button
                class="codebtn"
                :disabled="disabled"
                @click="sendcode"
                v-if="disabled==false"
              >获取验证码</button>
              <button
                class="codebtn"
                :disabled="disabled"
                @click="sendcode"
                v-if="disabled==true"
                style="fontSize:10px"
              >{{btntxt}}</button>
            </el-form-item>
            <div class="selectType">
              <el-radio v-model="radio" label="1">我是参展者</el-radio>
              <el-radio v-model="radio" label="2">我是服务商</el-radio>
            </div>
            <el-form-item>
              <el-button class="loginBtn" @click="submitForm('Register')">注册</el-button>
              <div class="Remember">
                <div>
                  <span>同意《账号服务条款、隐私政策》</span>
                </div>
                <div>
                  <span>已有账号？</span>
                  <span>
                    <router-link to="/login" style="color:#FF5F30">立即登录</router-link>
                  </span>
                </div>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="navlink">
        网站首页 | 关于我们 联系方式 | 使用协议 | 版权隐私 | 网站地图 | 合作加盟
        | 广告服务 | 网站留言 | 违规举报
      </div>
      <div class="statement">
        Copyright 2005-2020 zbj.com 版权所有 渝ICP备10202274-4号 渝B2-20080005
        渝公网安备 50019002500154号 猪八戒股份有限公司
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: false,
      time: 0,
      btntxt: "重新发送",
      radio: 1,
      RememberPwd: true,
      Register: {
        phone: "15982526346",
        pwd: "123456"
      },
      rules: {
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            pattern: /^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/,
            message: "手机号格式不对",
            trigger: "blur"
          }
        ],

        //
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "请输入6-12位密码", trigger: "blur" }
        ]
      }
    };
  },

  methods: {
    sendcode() {
      const reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (this.Register.phone == "") {
        this.$message({
          message: "手机号不能为空",
          center: true
        });
        return;
      }
      if (!reg.test(this.Register.phone)) {
        this.$message({
          message: "请输入正确的手机号",
          center: true
        });
        return;
      } else {
        console.log(this.Register.phone);
        this.$message({
          message: "发送成功",
          type: "success",
          center: true
        });
        this.time = 60;
        this.disabled = true;
        this.timer();
      }
    },
    //60S倒计时
    timer() {
      if (this.time > 0) {
        this.time--;
        this.btntxt = this.time + "s后重新获取";
        setTimeout(this.timer, 1000);
      } else {
        this.time = 0;
        this.btntxt = "获取验证码";
        this.disabled = false;
      }
    },

    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("登录成功");
          this.$router.push({
            path: "/",
            query: {
              index: 1
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less">
.login {
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .login_top {
    width: 100%;
    height: 100px;
    margin-left: 150px;
    font-size: 24px;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
  .selectType {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    .el-radio {
      display: flex;
    }
    .el-radio__label {
      font-size: 20px;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      margin-top: -4px;
    }
    .el-radio__input.is-checked + .el-radio__label {
      color: rgba(51, 51, 51, 1);
    }
    .el-radio__input.is-checked .el-radio__inner {
      border-color: #ff5f30;
      background: #ff5f30;
    }
  }
  .banner {
    width: 100%;
    height: 800px;
    background: url("../assets/img/logon/banner.png") no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    .Register {
      width: 560px;
      height: 694px;
      background: #fff;
      box-shadow: 9px 9px 40px 0px rgba(102, 102, 102, 0.09);
      border-radius: 12px;
      .Registerheader {
        width: 100%;
        font-size: 24px;
        height: 182px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .From {
        width: 404px;
        height: 320px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        .codebox {
          display: flex;
        }
        .el-form-item {
          margin-bottom: 0;
          height: 81px;
        }
        .el-form-item__content {
          .el-input {
            width: 404px;
            height: 60px;
            border-radius: 30px;

            input {
              height: 100%;
              border-radius: 30px;
              text-indent: 30px;
            }
            .el-input__icon {
              font-size: 26px;
              width: 77px;
            }
          }
          .el-form-item__error {
            left: 30px !important;
            position: absolute;
            top: 100%;
            left: 30rpx;
          }
          .codebtn {
            width: 120px;
            height: 60px;
            background: rgba(255, 95, 48, 1);
            border-radius: 0px 30px 30px 0px;
            border: none;
            outline: none;
            font-size: 16px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
          }
          /deep/ .code {
            width: 284px;
            background: chartreuse;
            input {
              width: 284px;
              border-radius: 30px 0px 0px 30px;
            }
          }
        }
        .loginBtn {
          width: 404px;
          height: 60px;
          background: #ff5f30;
          font-size: 24px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          border-radius: 30px;
        }
        .Remember {
          width: 100%;
          height: 30px;
          display: flex;
          align-content: center;
          justify-content: space-between;
          font-size: 12px;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
        }
      }
    }
  }
  .footer {
    width: 100%;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .navlink {
      width: 728px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 50px;
    }
    .statement {
      font-size: 10px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
    }
  }
}
</style>
