<template>
  <div class="card" v-if="CardNum==2">
    <a-row style="margin-top:20px">
      <a-col :span="4"></a-col>
      <a-col :span="8">
        <h1><b>{{title}}</b></h1>
        <div class="divider" style="width: 90px; margin-top: -15px">
          <a-divider />
        </div>
      </a-col>
      <a-col :span="6"></a-col>
      <a-col :span="2">
        <drawer></drawer>
      </a-col>
      <a-col :span="4"></a-col>
    </a-row>
    <a-row>
      <a-col :span="5"></a-col>
      <a-col :span="6" style="overflow:hidden">
        <!-- <a-card hoverable>
          <template #cover>
            <img alt="example" src="https://ai.bdstatic.com/file/9C1B97A36FD34DA9990BA30010724463"
              style="width:25vw;height:15.8vw" />
          </template>
          <template #actions>
            <setting-outlined key="setting" @click="showDrawer" />
            <edit-outlined key="edit" />
            <ellipsis-outlined key="ellipsis" />
          </template>
        </a-card>
        <a-drawer title="Basic Drawer" placement="right" :closable="false" :visible="visible" :get-container="false"
          :style="{ position: 'absolute'}" @close="onClose">
          <detail name="abc" address="aaa" birth="aaa" nationality="aaa" :sex="12" :uid="1213213" ></detail>
        </a-drawer> -->
        <a-card hoverable >
          <template #cover>
            <div v-show="isActiveleft==0">
              <img alt="example" src="https://ai.bdstatic.com/file/9C1B97A36FD34DA9990BA30010724463"
                style="height:15.8vw;width:25vw;" />
            </div>
            <div v-show="isActiveleft==1">
              <id-card-front style="height:15.8vw;width:25vw"></id-card-front>
            </div>
          </template>
          <template #actions>
            <setting-outlined key="setting" @click="opendetail" />
            <edit-outlined key="edit" />
            <ellipsis-outlined key="ellipsis" />
          </template>
        </a-card>
      </a-col>
      <a-col :span="2"></a-col>
      <a-col :span="6" style="overflow:hidden">
        <!-- <a-card hoverable>
          <template #cover>
            <img alt="example" src="https://ai.bdstatic.com/file/3C8C5B451BB4445697730217EC8648E3"
              style="width:25vw;height:15.8vw" />
          </template>
          <template #actions>
            <setting-outlined key="setting" @click="showDrawer" />
            <edit-outlined key="edit" />
            <ellipsis-outlined key="ellipsis" />
          </template>
        </a-card>
        <a-drawer title="Basic Drawer" placement="right" :closable="false" :visible="visible" :get-container="false"
          :style="{ position: 'absolute'}" @close="onClose">
          <p>Some contents...</p>
        </a-drawer> -->
        <a-card hoverable>
          <template #cover>
            <div v-show="isActiveright==0">
              <img alt="example" src="https://ai.bdstatic.com/file/9C1B97A36FD34DA9990BA30010724463"
                style="height:15.8vw;width:25vw" />
            </div>
            <div v-show="isActiveright==1">
              <id-card-back style="height:15.8vw;width:25vw"></id-card-back>
            </div>
          </template>
          <template #actions>
            <setting-outlined key="setting" @click="opendetail2" />
            <edit-outlined key="edit" />
            <ellipsis-outlined key="ellipsis" />
          </template>
        </a-card>
      </a-col>
      <a-col :span="5"></a-col>
    </a-row>
  </div>
  <div v-else>
    <a-row style="margin-top:20px">
      <a-col :span="4"></a-col>
      <a-col :span="8">
        <h1><b>{{title}}</b></h1>
        <div class="divider" style="width: 90px; margin-top: -15px">
          <a-divider />
        </div>
      </a-col>
      <a-col :span="6"></a-col>
      <a-col :span="2">
        <drawer></drawer>
      </a-col>
      <a-col :span="4"></a-col>
    </a-row>
    <a-row>
      <a-col :span="9"></a-col>
      <a-col :span="6" style="overflow:hidden">
        <a-card hoverable>
          <template #cover>
            <img alt="example" src="https://ai.bdstatic.com/file/9C1B97A36FD34DA9990BA30010724463"
              style="width:25vw;height:15.8vw" />
          </template>
          <template #actions>
            <setting-outlined key="setting" @click="showDrawer" />
            <edit-outlined key="edit" />
            <ellipsis-outlined key="ellipsis" />
          </template>
        </a-card>
        <a-drawer title="Basic Drawer" placement="right" :closable="false" :visible="visible" :get-container="false"
          :style="{ position: 'absolute'}" @close="onClose">
          <p>Some contents...</p>
        </a-drawer>
      </a-col>
      <a-col :span="9"></a-col>
    </a-row>

  </div>
</template>
<script lang="ts">
  import {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined
  } from '@ant-design/icons-vue';
  import {
    defineComponent,
    ref
  } from 'vue';
  import drawer from '@/components/drawer.vue'
  import IdCardFront from '@/components/IdCardFront.vue'
  import IdCardBack from '@/components/IdCardBack.vue'
  import detail from './detail.vue'
  export default defineComponent({
    props: ['CardNum', 'title'],
    setup() {
      const visible = ref(false);
      const afterVisibleChange = (bool: boolean) => {
        console.log('visible', bool);
      };

      const showDrawer = () => {
        visible.value = true;
      };

      const onClose = () => {
        visible.value = false;
      };
      return {
        visible,
        afterVisibleChange,
        showDrawer,
        onClose,
      }
    },
    components: {
      SettingOutlined,
      EditOutlined,
      EllipsisOutlined,
      drawer,
      detail,
      IdCardFront,
      IdCardBack
    },
    data() {
      return {
        isActiveleft: false,
        isActiveright: false
      }
    },
    methods: {
      opendetail() {
        if (this.isActiveleft == false) {
          this.isActiveleft = true
        } else {
          this.isActiveleft = false
        }
      },
      opendetail2() {
        if (this.isActiveright == false) {
          this.isActiveright = true
        } else {
          this.isActiveright = false
        }
      }
    }
  });
</script>
<style scoped>
  .detail {
    margin-left: -100px;
  }
</style>