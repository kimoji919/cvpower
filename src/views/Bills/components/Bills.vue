<template>
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
        <a-col :span="3"></a-col>
        <a-col :span="18" style="overflow:hidden">
            <a-card hoverable>
                <template #cover>
                    <img alt="example" :src="url" style="height:45vh" />
                </template>
                <template #actions>
                    <zoom-in-outlined key="setting" @click="showDrawer" />
                    <download-outlined key="edit" />
                    <ellipsis-outlined key="ellipsis" />
                </template>
            </a-card>
            <a-drawer title="Basic Drawer" placement="right" :closable="false" :visible="visible" :get-container="false"
                :style="{ position: 'absolute'}" @close="onClose">
                <p>Some contents...</p>
            </a-drawer>
        </a-col>
        <a-col :span="3"></a-col>
    </a-row>
</template>
<script lang="ts">
    import {
        ZoomInOutlined,
        DownloadOutlined,
        EllipsisOutlined
    } from '@ant-design/icons-vue';
    import {
        defineComponent,
        ref
    } from 'vue';
    import drawer from '@/components/drawer.vue'
    import detail from '@/views/Cards/components/detail.vue'
    export default defineComponent({
        props: ['title', 'url'],
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
            ZoomInOutlined,
            DownloadOutlined,
            EllipsisOutlined,
            drawer,
            detail
        },
    });
</script>
<style scoped>
    .detail {
        margin-left: -100px;
    }
</style>