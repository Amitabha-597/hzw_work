<template>
  <div class="login">
    <div class="login_top">
      <img style="width:249px;height:89px" src="../assets/img/logon/logo.png" alt />
    </div>
    <main class="banner">
      <div class="loginFrom">
        <div class="loginFromheader">登录</div>
        <div class="From">
          <el-form :model="loginFrom" :rules="rules" ref="loginFrom">
            <el-form-item prop="phone">
              <el-input prefix-icon="el-icon-mobile-phone" v-model="loginFrom.phone"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input prefix-icon="el-icon-unlock" v-model="loginFrom.password" type="password"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button class="loginBtn" @click="submitForm('loginFrom')">登录</el-button>
              <div class="Remember">
                <div>
                  <div class="Remember_pwd" @click="rememberPwd()">
                    <div v-show="loginFrom.RememberPwd"></div>
                  </div>
                  <span>记住我</span>
                </div>
                <div>
                  <span>忘记密码</span>
                  <div class="forget_pwd">?</div>
                </div>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="navlink">网站首页 | 关于我们 联系方式 | 使用协议 | 版权隐私 | 网站地图 | 合作加盟 | 广告服务 | 网站留言 | 违规举报</div>
      <div
        class="statement"
      >Copyright 2005-2020 zbj.com 版权所有 渝ICP备10202274-4号 渝B2-20080005 渝公网安备 50019002500154号 猪八戒股份有限公司</div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginFrom: {
        phone: "15982809096",
        password: "123456",
        RememberPwd: false
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
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "请输入6-12位密码", trigger: "blur" }
        ]
      }
    };
  },
  mounted() {
    this.getCookie();
  },
  methods: {
    submitForm(formName) {
      console.log(this.loginFrom.password);
      const self = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("登录成功");
          this.$router.push({
            path: "/home",
            query: {
              index: 0
            }
          });
          if (this.loginFrom.RememberPwd == true) {
            console.log("记住密码成功");

            // console.log("checked == true");
            //传入账号名，密码，和保存天数3个参数
            self.setCookie(self.loginFrom.phone, self.loginFrom.password, 7);
          } else {
            self.clearCookie();
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    rememberPwd() {
      this.loginFrom.RememberPwd = !this.loginFrom.RememberPwd;
    },
    clearCookie() {
      this.setCookie("", "", -1);
    },
    //设置cookie
    setCookie(c_name, c_pwd, exdays) {
      console.log(1);

      var exdate = new Date(); //获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
      //字符串拼接cookie
      window.document.cookie =
        "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie =
        "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
    },
    getCookie: function() {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split("; "); //这里显示的格式需要切割一下自己可输出看下
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("="); //再次切割
          //判断查找相对应的值
          if (arr2[0] == "userName") {
            this.loginFrom.phone = arr2[1]; //保存到保存数据的地方
          } else if (arr2[0] == "userPwd") {
            this.loginFrom.password = arr2[1];
          }
        }
      }
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
  .banner {
    width: 100%;
    height: 800px;
    background: url("../assets/img/logon/banner.png") no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    .loginFrom {
      width: 560px;
      height: 694px;
      background: #fff;
      box-shadow: 9px 9px 40px 0px rgba(102, 102, 102, 0.09);
      border-radius: 12px;
      .loginFromheader {
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

        .el-form-item__content {
          margin-bottom: 30px;
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
        }
        .loginBtn {
          // margin-top: 37px;
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
          div {
            display: flex;
            align-items: center;
            div {
              width: 10px;
              height: 10px;
              border-radius: 50%;
            }
            .Remember_pwd {
              margin-right: 5px;
              border: 1px solid rgba(234, 77, 31, 1);
              display: flex;
              align-items: center;
              justify-content: center;
              div {
                width: 4px;
                height: 4px;
                background: rgba(234, 77, 31, 1);
              }
            }
            .forget_pwd {
              border: 1px solid rgba(153, 153, 153, 1);
              margin-left: 5px;
              font-size: 8px;
              font-weight: 400;
              color: rgba(153, 153, 153, 1);
              text-align: center;
              display: flex;
              align-content: center;
              justify-content: center;
            }
          }
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