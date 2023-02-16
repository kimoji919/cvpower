<template>
  <a-list
    class="comment"
    v-if="comments.length"
    :data-source="comments"
    :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`"
    item-layout="horizontal"
  >
    <template #renderItem="{ item }">
      <a-list-item>
        <a-comment
          :author="item.author"
          :avatar="item.avatar"
          :content="item.content"
          :datetime="item.datetime"
        />
      </a-list-item>
    </template>
  </a-list>

  <a-comment class="add">
    <template #avatar>
      <a-avatar
        src="https://pic1.zhimg.com/v2-8406fff9800f71987a6c4644c3a1e70d_l.jpg?source=32738c0c"
        alt="Han Solo"
      />
    </template>
    <template #content>
      <a-form-item>
        <a-textarea v-model:value="value" :rows="4" />
      </a-form-item>
      <a-form-item>
        <a-button
          html-type="submit"
          :loading="submitting"
          type="primary"
          @click="handleSubmit"
          style="float: right"
        >
          添加备注
        </a-button>
      </a-form-item>
    </template>
  </a-comment>
</template>
<script lang='ts'>
import { defineComponent, ref } from "vue";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

type Comment = Record<string, string>;

export default defineComponent({
  setup() {
    const comments = ref<Comment[]>([]);
    const submitting = ref<boolean>(false);
    const value = ref<string>("");
    const handleSubmit = () => {
      if (!value.value) {
        return;
      }

      submitting.value = true;

      setTimeout(() => {
        submitting.value = false;
        comments.value = [
          {
            author: "Han Solo",
            avatar:
              "https://pic1.zhimg.com/v2-8406fff9800f71987a6c4644c3a1e70d_l.jpg?source=32738c0c",
            content: value.value,
            datetime: dayjs().fromNow(),
          },
          ...comments.value,
        ];
        value.value = "";
      }, 1000);
    };

    return {
      comments,
      submitting,
      value,
      handleSubmit,
    };
  },
});
</script>

<style scoped>
.add {
  width: 37vw;
  position: absolute;
  bottom: 0%;
}
</style>