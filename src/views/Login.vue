<template>
  <div id="poster">
    <a-form
      :model="formState"
      name="basic"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      class="login-container"
      laber-position="left"
    >
      <h3 class="login_title">系统登陆</h3>

      <a-form-item
        name="account"
        :rules="[{ required: true, message: '请输入你的账号!' }]"
      >
        <a-input
          v-model:value="formState.account"
          placeholder="请输入账号"
          style="height: 35px"
          ><template #prefix
            ><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template
        ></a-input>
      </a-form-item>

      <a-form-item
        name="password"
        :rules="[{ required: true, message: '请输入你的密码!' }]"
      >
        <a-input-password
          v-model:value="formState.password"
          placeholder="请输入密码"
          style="height: 35px"
          ><template #prefix
            ><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template
        ></a-input-password>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 0, span: 0 }">
        <a-button
          type="primary"
          style="
            width: 30%;
            background: #ffffff;
            left: 10%;
            float: left;
            color: #505458;
            border-color: #505458;
          "
          @click="toRegister()"
          >去注册</a-button
        >
        <a-button
          type="primary"
          html-type="submit"
          style="
            width: 30%;
            background: #505458;
            border: none;
            float: right;
            right: 10%;
          "
          @click="login()"
          >登陆</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { message } from "ant-design-vue";
import { defineComponent, reactive } from "vue";
import { HttpManager } from "@/api";
import { useRouter } from "vue-router";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  setup() {
    const formState = reactive({
      account: "",
      password: "",
    });
    const onFinish = (values: any) => {
      console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };
    const router = useRouter();
    async function login() {
      let params = new URLSearchParams();
      params.append("account", formState.account);
      params.append("password", formState.password);
      await HttpManager.login(params)
        .then((d: any) => {
          if (d.success) {
            console.log("message: ", d);
            message.success(d.message);
            setTimeout(() => {
              let id = Number(d.data.id);
              router.push({
                path: "/Home",
                query: { uid: id },
              });
            }, 500);
          } else {
            message.error(d.message);
          }
        })
        .catch((err) => {
          let response = err;
          console.log("err", err);
          console.log("response", response);
        });
    }
    return {
      formState,
      onFinish,
      onFinishFailed,
      login,
    };
  },
  components: {
    UserOutlined,
    LockOutlined,
  },
  methods: {
    toRegister() {
      this.$router.push({
        path: "/Register",
      });
    },
    Login() {
      console.log("submit!", this.formState.account, this.formState.password);
      this.$router.push({
        path: "/Home",
      });
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
  overflow: auto;
  background-size: 100%;
  background-color: #f0f2f5;
  background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
}

body {
  margin: 0px;
  padding: 0px;
}

.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: auto;
  width: 60vh;
  margin-top: 18vh;
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
  font-size: 22px;
  font-weight: 500;
}
</style>