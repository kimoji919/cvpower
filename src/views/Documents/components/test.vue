<template>
  <a-list
    class="demo-loadmore-list"
    :loading="initLoading"
    item-layout="horizontal"
    :data-source="list"
  >
    <template #loadMore>
      <div
        v-if="!initLoading && !loading"
        :style="{
          textAlign: 'center',
          marginTop: '12px',
          height: '32px',
          lineHeight: '32px',
        }"
      >
        <a-button @click="onLoadMore">查看更多</a-button>
      </div>
    </template>
    <template #renderItem="{ item }">
      <div class="item">
        <a-list-item @click="opendetail">
          <template #actions>
            <a key="list-loadmore-download">123.kb</a>
          </template>
          <a-skeleton avatar :title="false" :loading="!!item.loading" active>
            <a-list-item-meta :description="item.name.last + des">
              <template #title>
                <a href="https://www.antdv.com/">{{ item.name.last }}</a>
              </template>
              <template #avatar>
                <a-avatar :src="item.picture.large" />
              </template>
            </a-list-item-meta>
            <div>2022-12-12</div>
          </a-skeleton>
        </a-list-item>
      </div>
    </template>
  </a-list>
</template>
<script >
import { defineComponent, onMounted, ref, nextTick } from "vue";
const count = 6;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

export default defineComponent({
  emits: ["detail"],
  setup(props, { emit }) {
    const initLoading = ref(true);
    const loading = ref(false);
    const data = ref([]);
    const list = ref([]);
    var des = "的标签";
    onMounted(() => {
      fetch(fakeDataUrl)
        .then((res) => res.json())
        .then((res) => {
          initLoading.value = false;
          data.value = res.results;
          list.value = res.results;
        });
    });

    const onLoadMore = () => {
      loading.value = true;
      list.value = data.value.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        }))
      );
      fetch(fakeDataUrl)
        .then((res) => res.json())
        .then((res) => {
          const newData = data.value.concat(res.results);
          loading.value = false;
          data.value = newData;
          list.value = newData;
          nextTick(() => {
            // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
            // In real scene, you can using public method of react-virtualized:
            // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
            window.dispatchEvent(new Event("resize"));
          });
        });
    };
    const opendetail = () => {
      emit("detail", true);
    };
    return {
      loading,
      initLoading,
      data,
      list,
      des,
      onLoadMore,
      opendetail,
    };
  },
});
</script>
<style scoped>
.demo-loadmore-list {
  min-height: 350px;
}

.item {
  height: 60px;
}

.item:hover {
  height: 62px;
  box-shadow: 1.7px 1.6px 1.7px rgba(0, 0, 0, 0.01),
    4.6px 4.4px 4.6px rgba(0, 0, 0, 0.015),
    11.2px 10.6px 11.2px rgba(0, 0, 0, 0.02), 37px 35px 37px rgba(0, 0, 0, 0.03);
  z-index: 10;
  background-color: #e8ebf0;
}
</style>