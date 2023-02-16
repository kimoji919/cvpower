<template>
  <close-outlined
    id="close"
    style="position: absolute; right: 10px"
    @click="closedetail"
  />
  <h1 style="font-weight: bold">{{ title }}</h1>
  <p style="color: grey">{{ size }}</p>
  <!-- 标签栏 -->
  <labels></labels>
  <a-divider />
  <!-- 摘要 -->
  <h3>摘要</h3>
  <p style="color: grey">{{ abstract }}</p>
  <a-divider />
  <analysis></analysis>
  <!-- 数据分析 -->
  <a-divider />
  <!-- 导出 -->
  <h3>为你推荐</h3>
  <div>
    <div class="power-item">
      <play-circle-outlined style="margin-left: 10px" />
      <p>在线预览</p>
    </div>
    <div class="power-item">
      <download-outlined style="margin-left: 10px" />
      <p>文件下载</p>
    </div>
    <div class="power-item">
      <global-outlined style="margin-left: 10px" />
      <p>文件翻译</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  CloseOutlined,
  PlayCircleOutlined,
  DownloadOutlined,
  GlobalOutlined,
} from "@ant-design/icons-vue";
import analysis from "./analysis.vue";
import labels from "./lable.vue";
export default defineComponent({
  components: {
    DownloadOutlined,
    GlobalOutlined,
    CloseOutlined,
    PlayCircleOutlined,
    analysis,
    labels,
  },
  emits: ["detail"],
  setup(props, { emit }) {
    const closedetail = () => {
      emit("detail", false);
    };
    var title = ref("计算机大赛.doc");
    var size = ref("114541.kb");
    var label = ref([""]);
    var abstract = ref("2023年全国大学生计算机设计大赛");
    return {
      closedetail,
      title,
      size,
      label,
      abstract,
    };
  },
});
</script>
<style scoped>
#close {
  color: grey;
}

#close:hover {
  color: red;
}

.power-item {
  position: flex;
  height: 30px;
  margin: 5px;
}

.power-item:hover {
  background-color: #e8ebf0;
}

.power-item p {
  display: inline;
  margin-left: 10px;
}
</style>