<template>
  <div class="login-warp">
    <div class="login-box">
      <h2>后台管理系统</h2>
      <el-form label-position="top" label-width="80px" :model="formData">
        <el-form-item label="用户名">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="用户密码">
          <el-input v-model="formData.password"></el-input>
        </el-form-item>
        <el-button @click.prevent="handleLogin()" class="loginBtn" type="primary">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: "",
        password: ""
      }
    };
  },
  methods: {

    async handleLogin() {
      var res = await this.$http.post("login", this.formData);
      const {
        data,
        meta: { msg, status }
      } = res.data;
      if (status == 200) {
        localStorage.setItem('token',data.token)
        this.$router.push({ name: "home" });
      } else {
        this.$message.warning(msg);
      }
    }
  }
};
</script>

<style>
.login-warp {
  height: 100%;
  background: #14101a;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-box {
  width: 400px;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
}
.loginBtn {
  width: 100%;
}
</style>