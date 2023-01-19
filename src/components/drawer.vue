<template>
  <a-button  @click="showDrawer" shape="round" :size="size">
    <template #icon>
      <comment-outlined />
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
    <addcomment></addcomment>
  </a-drawer>
</template>

<script lang="ts">
import {CommentOutlined} from "@ant-design/icons-vue"
import { defineComponent, ref } from "vue";

import addcomment from '@/components/addcomment.vue' 
export default defineComponent({
  components: {
    CommentOutlined,
    addcomment
  },
  setup() {
    const visible = ref<boolean>(false);
    const afterVisibleChange = (bool:boolean) => {
      console.log("visible", bool);
    };
    const showDrawer = () => {
      visible.value = true;
    };
    return {
      visible,
      afterVisibleChange,
      showDrawer,
    };
  },
});
</script>

<style>
</style>