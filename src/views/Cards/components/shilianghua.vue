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
            <a-col :span="4"></a-col>
            <a-col :span="7" style="overflow:hidden" :v-model.sync="isActive">
                <a-card hoverable>
                    <template #cover>
                        <div v-show="isActiveleft==0">
                            <img alt="example" src="https://ai.bdstatic.com/file/9C1B97A36FD34DA9990BA30010724463"
                                style="height:30vh;" />
                        </div>
                        <div v-show="isActiveleft==1">
                            <id-card-front style="height:30vh;"></id-card-front>
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
            <a-col :span="7" style="overflow:hidden">
                <a-card hoverable>
                    <template #cover>
                        <div v-show="isActiveright==0">
                            <img alt="example" src="https://ai.bdstatic.com/file/9C1B97A36FD34DA9990BA30010724463"
                                style="height:30vh;" />
                        </div>
                        <div v-show="isActiveright==1">
                            <id-card-back style="height:30vh;"></id-card-back>
                        </div>
                    </template>
                    <template #actions>
                        <setting-outlined key="setting" @click="opendetail2" />
                        <edit-outlined key="edit" />
                        <ellipsis-outlined key="ellipsis" />
                    </template>
                </a-card>
            </a-col>
            <a-col :span="4"></a-col>
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
    import IdCardFront from '@/components/IdCardFront.vue'
    import IdCardBack from '@/components/IdCardBack.vue'
    import drawer from '@/components/drawer.vue'
    export default defineComponent({
        props: ['CardNum', 'title'],
        setup() {
            const visible = ref(false);
            const afterVisibleChange = (bool: boolean) => {
                console.log('visible', bool);
            };

            const showDrawer = () => {};

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
            IdCardFront,
            IdCardBack
        },
        data() {
            return {
                isActiveleft: false,
                isActiveright:false
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
            opendetail2(){
                if(this.isActiveright==false){
                    this.isActiveright=true
                }
                else{
                    this.isActiveright=false
                }
            }
        }
    });
</script>

<style>

</style>