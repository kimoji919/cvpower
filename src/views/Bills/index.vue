<template>
  <div class="new">
    <newer></newer>
  </div>
  <a-card title="目录" class="menu">
    <a v-for="(item, index) in cards" :key="index" href="javascript:void(0)" @click="Jumpto(index) & changeClass(index)"
      :title="item.title">{{ item.title }}<br /></a>
  </a-card>
  <a-row>
    <a-col :span="5"></a-col>
    <a-col :span="14">
      <div v-for="(item, index) in cards" class="panel" :class="{ active: isActive === index }"
        @click="changeClass(index)" :id="index">
        <!-- <card CardNum="1" :title="item.title" :id="index"></card> -->
        <Bills :title="item.title" :url="item.url"></Bills>
      </div>
    </a-col>
    <a-col :span="5"></a-col>
  </a-row>
  <div id="components-back-top-demo-custom">
    <a-back-top>
      <div class="ant-back-top-inner">UP</div>
    </a-back-top>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
    align-content: center;
    justify-content: center;
  }

  .panel {
    background-size: cover;
    background-position: center;
    height: 7vh;
    border-radius: 30px;

    border-style: solid;
    border-width: 1px;

    color: #cccccc;
    cursor: pointer;

    margin: 10px;
    position: relative;
    transition: all 700ms ease-in;
    overflow: hidden;
  }

  .panel.active {
    height: 60vh;
  }

  .new {
    position: fixed;
    right: 100px;
    margin-top: 10px;
    z-index: 1;
  }

  .menu {
    position: fixed;
    width: 10vw;
    margin-top: 30px;
    z-index: 1;
  }

  #components-back-top-demo-custom .ant-back-top {
    bottom: 100px;
  }

  #components-back-top-demo-custom .ant-back-top-inner {
    height: 40px;
    width: 40px;
    line-height: 40px;
    border-radius: 4px;
    background-color: #1088e9;
    color: #fff;
    text-align: center;
    font-size: 20px;
  }
</style>
<script lang="ts">
  import {
    defineComponent
  } from "vue";
  import {
    ZoomInOutlined,
    DownloadOutlined,
    EllipsisOutlined,
  } from "@ant-design/icons-vue";
  import Bills from "./components/Bills.vue";
  import newer from "@/views/Cards/components/new.vue";
  export default defineComponent({
    components: {
      Bills,
      newer,
      ZoomInOutlined,
      DownloadOutlined,
      EllipsisOutlined,
    },
    setup() {
      const Jumpto = (id: any) => {
        console.log(id);
        const dom = document.getElementById(id);
        (dom as Element).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      };
      return {
        Jumpto,
      };
    },
    data() {
      return {
        cards: [{
            title: "2月16日发票",
            url: "https://ai.bdstatic.com/file/27D084ED3DEB4B16B1F4917405022EEC",
          },
          {
            title: "2月20日发票",
            url: "https://ai.bdstatic.com/file/CE5AAE8E66EE40159859BEF124086763",
          },
          {
            title: "发票",
            url: "https://ai.bdstatic.com/file/558266B0C5AD42B7AF09DBA545526F4C",
          },
          {
            title: "发票",
            url: "https://ai.bdstatic.com/file/CE5AAE8E66EE40159859BEF124086763",
          },
          {
            title: "发票",
            url: "https://ai.bdstatic.com/file/558266B0C5AD42B7AF09DBA545526F4C",
          },
          {
            title: "发票",
            url: "https://ai.bdstatic.com/file/558266B0C5AD42B7AF09DBA545526F4C",
          },
          {
            title: "发票",
            url: "https://ai.bdstatic.com/file/558266B0C5AD42B7AF09DBA545526F4C",
          },
          {
            title: "发票",
            url: "https://ai.bdstatic.com/file/558266B0C5AD42B7AF09DBA545526F4C",
          },
          {
            title: "发票",
            url: "https://ai.bdstatic.com/file/558266B0C5AD42B7AF09DBA545526F4C",
          },
          {
            title: "发票",
            url: "https://ai.bdstatic.com/file/558266B0C5AD42B7AF09DBA545526F4C",
          },
          {
            title: "发票",
            url: "https://ai.bdstatic.com/file/558266B0C5AD42B7AF09DBA545526F4C",
          },
        ],
        isActive: 1,
      };
    },
    methods: {
      changeClass(i: any) {
        this.isActive = i;
      },
    },
  });
</script>