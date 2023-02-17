<template>
  <a-layout class="layout" style="min-height: 100vh;">

    <a-layout-header class="header">
      <div class="logo">
        <img src="https://aliyuncdn.antdv.com/v2/assets/logo.1ef800a8.svg" alt="" />
      </div>
      
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="horizontal">
        <a-menu-item key="1">
          <router-link :to="{name:'Cards'}">
            <p> 证件管理 </p>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link :to="{name:'Bills'}">
            <p> 票据管理 </p>
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link :to="{name:'Secrets'}">
            <p>密码管理 </p>
          </router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <router-link :to="{name:'Documents'}">
            <p>文档管理</p>
          </router-link>
        </a-menu-item>
      </a-menu>
      
      <div class="auto-complete">
        <a-input-search v-model:value="value" placeholder="input search text" @search="onSearch" />
      </div>

      <a-avatar class="avatar" src="https://pic1.zhimg.com/v2-8406fff9800f71987a6c4644c3a1e70d_l.jpg?source=32738c0c"/>

    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <!-- <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item> -->
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

    }
  });
</script>
<style scoped>
  * {
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
  }

  .layout {
    margin: 0px;
  }

  .header {
    position: relative;
    display: flex;
    height: 60px;
    overflow: hidden;
  }

  .logo {
    height: 100%;
  }

  .logo img {
    position: relative;
    height: 60%;
    left: -20px;
    margin-right: 10px;
  }
  .a-menu{
    height: 6%;
  }
  .auto-complete {
    position: absolute;
    right:5rem;
    top:0.7rem;
    width: 10%;
    height: 5%;
  }

  .avatar {
    position:absolute;
    right: 0.5rem;
    top:0.7rem;
    width: 2.2rem;
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
  p{
    font-size:0.97rem;
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