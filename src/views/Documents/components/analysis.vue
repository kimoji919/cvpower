<template>
  <h3>数据分析</h3>

  <div class="analysis" style="display: flex; text-align: center">
    <div class="analysis-item">
      <img
        src="@/assets/123.jpg"
        alt=""
        style="width: 20vw;margin:2vh"
      />
      <h3 style="color:grey">词云</h3>
    </div>
    <!-- <div class="analysis-item">
      <h3>词频分析</h3>
      <img
        src="https://pic3.zhimg.com/v2-fe127aac97845744e7b2124ffe16df6d_r.jpg"
        alt=""
        style="width: 12vw"
      />
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>


<style>
.analysis-item {
  margin: 10px;
}
</style>