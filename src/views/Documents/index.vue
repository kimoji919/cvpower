<template>
    <a-row>
        <a-col :span="3"></a-col>
        <a-col :span="14">
            <a-collapse v-model:activeKey="activeKey" ghost>
                <a-collapse-panel key="1" header="近一周">
                    <test @detail="opendetail"></test>
                </a-collapse-panel>
                <a-collapse-panel key="2" header="这个月内">
                    <test @detail="opendetail"></test>
                </a-collapse-panel>
                <a-collapse-panel key="3" header="3个月内">
                    <test @detail="opendetail"></test>
                </a-collapse-panel>
                <a-collapse-panel key="4" header="很久以前">
                    <test @detail="opendetail"></test>
                </a-collapse-panel>
            </a-collapse>
        </a-col>
        <a-col :span="7" style="display: flex;position:fixed; right:0px">
            <a-divider type="vertical" style="height:120vh;margin:40px" />
            <div v-show="detail">
                <detail @detail="closedetail"></detail>
            </div>
            <div v-show="!detail" style="margin-right: 30px;margin-top: 30px;z-index: 1;">
                <newer></newer>
            </div>
        </a-col>
    </a-row>
    <div id="components-back-top-demo-custom">
        <a-back-top>
            <div class="ant-back-top-inner">UP</div>
        </a-back-top>
    </div>
</template>
<script lang="ts">
    import {
        defineComponent,
        ref,
        watch
    } from 'vue';
    import test from './components/test.vue'
    import detail from './components/detail.vue'
    import newer from './components/new.vue'
    export default defineComponent({
        components: {
            test,
            detail,
            newer,
        },
        setup() {
            const text =
                `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
            const activeKey = ref(['1']);
            var detail = ref(true);
            var size = detail.value ? 3 : 0;

            const closedetail = (data: boolean) => {
                detail.value = data
                console.log(detail.value)
                size = detail.value ? 3 : 0;
            };
            const opendetail = (data: boolean) => {
                detail.value = data
                console.log(detail.value)
                size = detail.value ? 3 : 0;
            };
            watch(activeKey, val => {
                console.log(val);
            });
            return {
                text,
                activeKey,
                size,
                detail,
                closedetail,
                opendetail,
            };
        },
    });
</script>

<style scoped>
    #components-back-top-demo-custom .ant-back-top {
        bottom: 80px;
        right:40px
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