<template>
    <div class="new">
        <newer></newer>
    </div>
    <a-row>
        <a-col :span="5"></a-col>
        <a-col :span="14">
            <a-table :dataSource="dataSource" :columns="columns">
                <template #bodyCell="{column,record}">
                    <template v-if="column.key==='secret'">
                        <a-typography-paragraph :copyable="{text:record.secret}">
                            <span v-if="isActive">{{record.secret}}</span>
                            <span v-else>••••••••••</span>
                        </a-typography-paragraph>
                    </template>
                    <template v-else-if="column.key==='1'">
                        <eye-outlined @click="changeClass" />
                    </template>
                    <template v-else-if="column.key==='logo'">
                        <img :src="record.logo" alt="logo">
                    </template>
                </template>
            </a-table>
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
    } from 'vue'
    import {
        EyeOutlined
    } from "@ant-design/icons-vue"
    import newer from "./components/newer.vue"
    export default defineComponent({
        components: {
            EyeOutlined,
            newer
        },
        setup() {
            return {

            }
        },
        data() {
            return {
                dataSource: [{
                        key: '1',
                        name: '百度',
                        url: 'www.baidu.com',
                        account: '12345678',
                        secret: '123456789',
                        logo: "https://www.baidu.com/favicon.ico",
                        1: "",
                    },
                    {
                        key: '2',
                        name: '知乎',
                        url: 'www.baidu.com',
                        account: '12345678',
                        secret: '123456789',
                        logo: "https://www.zhihu.com/favicon.ico",
                        1: ""
                    },
                    {
                        key: '3',
                        name: '4399小游戏',
                        url: 'www.4399.com',
                        logo: "https://www.4399.com/favicon.ico",
                        account: '12345678',
                        secret: '123456789',
                        1: ""
                    },
                    {
                        key: '4',
                        name: '百度',
                        logo: "https://www.4399.com/favicon.ico",
                        url: 'www.baidu.com',
                        account: '12345678',
                        secret: '123456789',
                        1: ""
                    },
                ],
                columns: [{
                        title: '',
                        dataIndex: 'logo',
                        key: 'logo',
                        width: 50
                    },
                    {
                        title: '网站名称',
                        dataIndex: 'name',
                        key: 'name',
                    },
                    {
                        title: '网址',
                        dataIndex: 'url',
                        key: 'url',
                    },
                    {
                        title: '账户',
                        dataIndex: 'account',
                        key: 'account'
                    },
                    {
                        title: '',
                        dataindex: '1',
                        key: '1',
                        width: 30
                    },
                    {
                        title: '密码',
                        dataIndex: 'secret',
                        key: 'secret',
                        width: 300
                    }
                ],
                isActive: false
            }
        },
        methods: {
            changeClass() {
                if (this.isActive == true) {
                    this.isActive = false
                } else {
                    this.isActive = true
                }
            }
        }
    })
</script>
<style scoped>
    img {
        width: 30px;
    }

    .new {
        position: fixed;
        right: 100px;
        margin-top: 10px;
        z-index: 1;
    }
</style>