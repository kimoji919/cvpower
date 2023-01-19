<template>
    <div>
        <a-row style="margin-top:20px">
            <a-col :span="4"></a-col>
            <a-col :span="8">
                <h1><b>身份证</b></h1>
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
                <a-card hoverable>
                    <template #cover>
                        <img alt="example" src="https://ai.bdstatic.com/file/9C1B97A36FD34DA9990BA30010724463"
                            style="height:25vh;" />
                    </template>
                    <template #actions>
                        <setting-outlined key="setting" @click="showDrawer" />
                        <edit-outlined key="edit" />
                        <ellipsis-outlined key="ellipsis" />
                    </template>
                </a-card>
                <a-drawer title="Basic Drawer" placement="right" :closable="false" :visible="visible"
                    :get-container="false" :style="{ position: 'absolute'}" @close="onClose">
                    <id-card-front></id-card-front>
                </a-drawer>
            </a-col>
            <a-col :span="2"></a-col>
            <a-col :span="6" style="overflow:hidden">
                <a-card hoverable>
                    <template #cover>
                        <img alt="example" src="https://ai.bdstatic.com/file/3C8C5B451BB4445697730217EC8648E3"
                            style="height:25vh;" />
                    </template>
                    <template #actions>
                        <setting-outlined key="setting" @click="showDrawer" />
                        <edit-outlined key="edit" />
                        <ellipsis-outlined key="ellipsis" />
                    </template>
                </a-card>
                <a-drawer title="Basic Drawer" placement="right" :closable="false" :visible="visible"
                    :get-container="false" :style="{ position: 'absolute'}" @close="onClose">
                    <p>Some contents...</p>
                </a-drawer>
            </a-col>
            <a-col :span="5"></a-col>
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
    import idcardfront from '@/views/Cards/components/IdCardFront.vue'
    import drawer from '@/components/drawer.vue'
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
                idcardfront
            }
        },
        components: {
            SettingOutlined,
            EditOutlined,
            EllipsisOutlined,
            drawer,
        },
    });
</script>

<style>

</style>