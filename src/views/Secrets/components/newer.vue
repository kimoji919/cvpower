<template>
  <a-button @click="showDrawer" shape="circle" :size="size" style="width:60px;height:60px">
    <template #icon>
      <plus-circle-outlined :style="{color: '#08c',fontSize:'40px'}" />
    </template>
  </a-button>
  <a-drawer
    v-model:visible="visible"
    width="40vw"
    class="custom-class"
    style="color: red"
    title="Basic Drawer"
    placement="right"
    @after-visible-change="afterVisibleChange"
  >
    <a-form
      :model="formState"
      name="validate_other"
      v-bind="formItemLayout"
      @finishFailed="onFinishFailed"
      @finish="onFinish"
    >
      <a-form-item
        name="select"
        label="Select"
        has-feedback
        :rules="[{ required: true, message: 'Please select your country!' }]"
      >
        <a-select
          v-model:value="formState.select"
          placeholder="Please select a country"
        >
          <a-select-option value="china">China</a-select-option>
          <a-select-option value="usa">U.S.A</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        name="group"
        label="Group Name"
        :rules="[{ required: true, message: 'Please input group name!' }]"
      >
        <a-input v-model:value="formState.group" />
      </a-form-item>
      <a-form-item label="Dragger">
        <a-form-item name="dragger" no-style>
          <a-upload-dragger
            v-model:fileList="formState.dragger"
            name="files"
            action="/upload.do"
          >
            <p class="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p class="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p class="ant-upload-hint">Support for a single or bulk upload.</p>
          </a-upload-dragger>
        </a-form-item>
      </a-form-item>
    </a-form>
  </a-drawer>
</template>

<script lang="ts">
import { PlusCircleOutlined ,InboxOutlined} from "@ant-design/icons-vue";
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  components: {
    PlusCircleOutlined,
    InboxOutlined,
  },
  setup() {
    const visible = ref<boolean>(false);
    const afterVisibleChange = (bool:boolean) => {
      console.log("visible", bool);
    };
    const showDrawer = () => {
      visible.value = true;
    };

    const onFinish = (values:any) => {
      console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo:any) => {
      console.log("Failed:", errorInfo);
    };
    const formItemLayout = {
      labelCol: {
        span: 6,
      },
      wrapperCol: {
        span: 14,
      },
    };
    const formState = reactive<Record<string, any>>({
      'input-number': 3,
      'checkbox-group': ['A', 'B'],
      rate: 3.5,
    });
    return {
      visible,
      formState,
      formItemLayout,
      onFinish,
      onFinishFailed,
      afterVisibleChange,
      showDrawer,
    };
  },
});
</script>

<style>
</style>