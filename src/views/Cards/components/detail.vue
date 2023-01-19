<template>
  <a-form :model="formState" >
    
    <a-form-item label="姓名" >
      <a-typography-paragraph copyable style="font-size: 20px;">{{name}}</a-typography-paragraph>
    </a-form-item>
    <a-form-item label="民族">
      <a-typography-paragraph copyable style="font-size: 20px;">{{nationality}}</a-typography-paragraph>
    </a-form-item>
    <a-form-item label="住址">
      <a-typography-paragraph copyable style="font-size: 20px;">{{address}}</a-typography-paragraph>
    </a-form-item>
    <a-form-item label="生日">
      <a-typography-paragraph copyable style="font-size: 20px;">{{birth}}</a-typography-paragraph>
    </a-form-item>
    <a-form-item label="性别">
      <a-typography-paragraph copyable style="font-size: 20px;">{{sex}}</a-typography-paragraph>
    </a-form-item>
    <a-form-item label="身份证号">
      <a-typography-paragraph copyable style="font-size: 20px;">{{uid}}</a-typography-paragraph>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
  import {
    defineComponent,
    reactive,
    toRaw
  } from 'vue';
  import type {
    UnwrapRef
  } from 'vue';

  interface FormState {
    name: string;
    delivery: boolean;
    type: string[];
    resource: string;
    desc: string;
  }
  export default defineComponent({
    props: ['name', 'nationality','address','birth','sex','uid'],
    setup() {
      const formState: UnwrapRef < FormState > = reactive({
        name: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      });
      const onSubmit = () => {
        console.log('submit!', toRaw(formState));
      };
      return {
        labelCol: {
          style: {
            width: '150px'
          }
        },
        wrapperCol: {
          span: 14
        },
        formState,
        onSubmit,
      };
    },
  });
</script>
<style scoped>
.a-form-item{
  font-size: 30px;
}
</style>