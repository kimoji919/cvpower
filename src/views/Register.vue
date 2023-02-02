<template>
  <div id="poster">
    <a-form
      ref="formRef"
      name="custom-validation"
      :model="formState"
      :rules="rules"
      v-bind="layout"
      @finish="handleFinish"
      @validate="handleValidate"
      @finishFailed="handleFinishFailed"
      class="register-container"
    >
      <h3 class="register_title">系统注册</h3>

      <a-form-item
        label="账号"
        name="account"
        :rules="[
          { required: true, message: '请输入账号' },
          { min: 2, message: '账号需要大于两个字符！' },
        ]"
      >
        <a-input v-model:value="formState.account" placeholder="请输入账号">
        </a-input>
      </a-form-item>

      <a-form-item has-feedback label="密码" name="pass">
        <a-input
          v-model:value="formState.pass"
          type="password"
          autocomplete="off"
          placeholder="请输入密码"
        ></a-input>
      </a-form-item>
      <a-form-item has-feedback label="确认密码" name="checkPass">
        <a-input
          v-model:value="formState.checkPass"
          type="password"
          autocomplete="off"
          placeholder="请再次输入密码"
        ></a-input>
      </a-form-item>
      <a-form-item label="姓名">
        <a-input v-model:value="formState.name" type="textarea" />
      </a-form-item>
      <!--
      <a-form-item label="昵称">
        <a-input v-model:value="formState.nickname" type="textarea" />
      </a-form-item>
      <a-form-item label="生日">
        <a-date-picker
          v-model:value="formState.birthday"
          :format="dateFormat"
        />
      </a-form-item>
      
      <a-form-item label="地址">
        <a-input v-model:value="formState.address" type="textarea" />
      </a-form-item>
      <a-form-item label="电话">
        <a-input-number v-model:value="formState.phone" type="textarea" />
      </a-form-item>
      <a-form-item label="邮箱">
        <a-input v-model:value="formState.email" type="textarea" />
      </a-form-item>
      <a-form-item label="微信号">
        <a-input v-model:value="formState.wechat_id" type="textarea" />
      </a-form-item>
      -->
      <a-form-item :wrapper-col="{ span: 0, offset: 4 }">
        <a-button
          type="primary"
          html-type="submit"
          style="background: #505458; border: none; width: 30%"
          @click="submitForm(ruleForm)"
          >注册</a-button
        >
        <a-button
          type="primary"
          style="
            margin-left: 10px;
            width: 30%;
            background: #ffffff;
            color: #505458;
            border-color: #505458;
          "
          @click="resetForm"
          >重置</a-button
        >
        <a-button
          style="
            margin-left: 10px;
            width: 20%;
            background: #ffffff;
            color: #505458;
            border-color: #505458;
          "
          @click="toLogin()"
          >去登陆</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  setup() {
    const formRef = ref();
    const formState = reactive({
      account: "",
      pass: "",
      checkPass: "",
      name: "",
      nickname: "",
      birthday: "",
      phone: "",
      email: "",
      wechat_id: "",
    });
    let checkAge = async (_rule, value) => {
      if (!value) {
        return Promise.reject("Please input the age");
      }
      if (!Number.isInteger(value)) {
        return Promise.reject("Please input digits");
      } else {
        if (value < 18) {
          return Promise.reject("Age must be greater than 18");
        } else {
          return Promise.resolve();
        }
      }
    };
    let validatePass = async (_rule, value) => {
      if (value === "") {
        return Promise.reject("请输入密码");
      } else {
        if (formState.checkPass !== "") {
          formRef.value.validateFields("checkPass");
        }
        return Promise.resolve();
      }
    };
    let validatePass2 = async (_rule, value) => {
      if (value === "") {
        return Promise.reject("请再次输入密码");
      } else if (value !== formState.pass) {
        return Promise.reject("两次密码不一致!");
      } else {
        return Promise.resolve();
      }
    };
    const rules = {
      pass: [
        {
          required: true,
          validator: validatePass,
          trigger: "change",
        },
      ],
      checkPass: [
        {
          validator: validatePass2,
          trigger: "change",
        },
      ],
      age: [
        {
          validator: checkAge,
          trigger: "change",
        },
      ],
    };
    const layout = {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 17,
      },
    };
    const handleFinish = (values) => {
      console.log(values, formState);
    };
    const handleFinishFailed = (errors) => {
      console.log(errors);
    };
    const resetForm = () => {
      formRef.value.resetFields();
    };
    const handleValidate = (...args) => {
      console.log(args);
    };
    return {
      formState,
      formRef,
      rules,
      layout,
      handleFinishFailed,
      handleFinish,
      resetForm,
      handleValidate,
    };
  },
  methods: {
    toLogin() {
      this.$router.push({ path: "/Login" });
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
  margin: 0px;
  padding: 0px;
}
.register-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 50px auto;
  width: 650px;
  background: #fff;
  padding: 35px 35px 15px 35px;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.register_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
</style>