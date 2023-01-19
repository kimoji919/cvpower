<template>
  <div id="poster">
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 0 }"
      :wrapper-col="{ span: 0 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      class="login-container"
      laber-position="left"
    >
      <h3 class="login_title">
        系统登陆
        <a-button @click="toRegister()">去注册</a-button>
      </h3>

      <a-form-item
        label="账号"
        name="account"
        :rules="[{ required: true, message: '请输入你的账号!' }]"
      >
        <a-input v-model:value="formState.account" />
      </a-form-item>

      <a-form-item
        label="密码"
        name="password"
        :rules="[{ required: true, message: '请输入你的密码!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
      <!--
      <a-form-item name="remember" :wrapper-col="{ offset: 0, span: 0 }">
        <a-checkbox v-model:checked="formState.remember"
          >Remember me</a-checkbox
        >
      </a-form-item>
-->
      <a-form-item :wrapper-col="{ offset: 0, span: 0 }">
        <a-button
          type="primary"
          html-type="submit"
          style="width: 100%; background: #505458; border: none"
          @click="Login()"
          >登陆</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const formState = reactive({
      account: "",
      password: "",
    });
    const onFinish = (values) => {
      console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },
  methods: {
    toRegister() {
      this.$router.push({ path: "/Register" });
    },
    Login() {
      this.axios
        .post("http://124.220.209.244:8004/login", this.formState)
        .then((resp) => {
          let data = resp.data;
          if (data.success) {
            this.formState = {};
          }
        });
      console.log("submit!", this.formState.account, this.formState.password);
      this.$router.push({ path: "/Cards" });
    },
  },
});
</script>
<style scoped>
#poster {
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
body {
  margin: 0px;
  padding: 0px;
}
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 50px auto;
  width: 350px;
  background: #fff;
  padding: 35px 35px 15px 35px;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
</style>