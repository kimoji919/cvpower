<template>
  <a-layout class="layout" style="min-height: 100vh;">
    <a-layout-header class="header">
      <div class="logo">
        <img src="https://aliyuncdn.antdv.com/v2/assets/logo.1ef800a8.svg" alt="" />
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item key="1" @click="this.$router.push({path: '/Cards'})">证件管理</a-menu-item>
        <a-menu-item key="2" @click="this.$router.push({path: '/Bills'})">票据管理</a-menu-item>
        <a-menu-item key="3" @click="this.$router.push({path: '/Secrets'})">密码管理</a-menu-item>
        <a-menu-item key="4" disabled>文档管理</a-menu-item>
      </a-menu>
      <div class="auto-complete">
        <a-input-search v-model:value="value" placeholder="input search text"
          :style="{ right:'70px',position:'absolute',top:'1.5vh',width:'200px'}" @search="onSearch" />
      </div>
      <a-avatar class="avatar" src="https://pic1.zhimg.com/v2-8406fff9800f71987a6c4644c3a1e70d_l.jpg?source=32738c0c"
        style="position: absolute; right: 10px" />
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <router-view></router-view>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by cvpower
    </a-layout-footer>
  </a-layout>
</template>
<script lang="ts">
  import {
    defineComponent,
    ref
  } from "vue";
  export default defineComponent({
    setup() {
      const value = ref < string > ('');

      const onSearch = (searchValue: string) => {
        console.log('use value', searchValue);
        console.log('or use this.value', value.value);
      };
      return {
        options: ref([{
            value: "Burns Bay Road",
          },
          {
            value: "Downing Street",
          },
          {
            value: "Wall Street",
          },
        ]),
        value,
        onSearch,
        selectedKeys: ref < string[] > (["1"]),
      };
    },
    methods: {
      toURL() {
        this.$router.push({
          path: '/card'
        })
      }
    }
  });
</script>
<style >
  * {
    box-sizing: border-box;
  }

  .layout {
    margin: 0px;
  }

  .header {
    display: flex;
    height: 7vh;
  }

  .logo img {
    position: relative;
    height: 4vh;
    left: -20px;
    margin-right: 10px;
  }

  .a-auto-complete {
    position: absolute;
    top: 1vh;
    float: right;
    right: 0px;
    width: 250px;
    height: 5vh;
  }

  .avatar {
    top: 1.3vh;
  }

  .a-layout-content {
    display: flex;
    height: 85vh;
  }

  .a-layout-footer {
    display: flex;
    position: fixed;
    height: 5vh;
  }

  .site-layout-content {
    min-height: 280px;
    padding: 24px;
    background: #fff;
  }

  #components-layout-demo-top .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
  }

  .ant-row-rtl #components-layout-demo-top .logo {
    float: right;
    margin: 16px 0 16px 24px;
  }

  [data-theme="dark"] .site-layout-content {
    background: #141414;
  }
</style>