<template>
  <div class="new">
    <newer></newer>
  </div>
  <!-- <div class="menu"> -->
  <a-card title="目录" class="menu">
    <!-- <a-anchor v-for="(item, index) in cards" :key="index">
        <a-anchor-link href="javascript:void(0)" @click="Jumpto(index)" :title="item.title" />
      </a-anchor> -->
    <a v-for="(item, index) in cards" :key="index" href="javascript:void(0)" @click="Jumpto(index)"
      :title="item.title">{{item.title}}<br></a>
  </a-card>
  <!-- </div> -->
  <card v-for="(item,index) in cards" :CardNum="item.CardNum" :title="item.title" :id="index"></card>
  <div id="components-back-top-demo-custom">
    <a-back-top>
      <div class="ant-back-top-inner">UP</div>
    </a-back-top>
  </div>
  <div class="big-picture"></div>
</template>
<script lang="ts">
  import {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
  } from "@ant-design/icons-vue";
  import {
    defineComponent,
    ref,
    reactive
  } from "vue";
  import card from "./components/Card.vue";
  import newer from "./components/new.vue";
  import {
    HttpManager
  } from "@/api";
  export default defineComponent({
    components: {
      card,
      newer,
      SettingOutlined,
      EditOutlined,
      EllipsisOutlined,
    },
    setup() {
       const formState = reactive({
         type:"",
         img:Image,
    });
      window.onload = () => {
        let imgList = document.querySelectorAll('.pic img') as NodeListOf < HTMLElement > ;
        let bigPicture = < HTMLElement > document.querySelector('.big-picture');
        for (let i in imgList) {
          imgList[i].onmouseenter = function () {
            bigPicture.innerHTML = `<img src='${(this as HTMLImageElement).src}'style="width:50vw">`
          }
          imgList[i].onmouseleave = function () {
            bigPicture.innerHTML = ``
          }
          let piclist=<HTMLElement> imgList[i].parentElement
          piclist.onmousemove = function (e:any) {
            let x = e.clientX;
            let y = e.clientY;
            bigPicture.style.top = y - 100 + "px";
            bigPicture.style.left = x + 10 + "px";
          }
        }
      }
      const IDcard = ref([])
      // async function getData() {
      //   IDcard.value = [];
      //   const result = (await HttpManager.getCard()) as ResponseBody;
      //   IDcard.value = result.data;
      //   console.log(IDcard.value);
      // }
      const Jumpto = (id: any) => {
        console.log(id)
        const dom = document.getElementById(id);
        (dom as Element).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      };

      return {
        Jumpto,
        // getData,
        // login
      }
    },
    data() {
      return {
        cards: [{
            CardNum: 2,
            title: "身份证",
          },
          {
            CardNum: 1,
            title: "银行卡",
          },
          {
            CardNum: 2,
            title: "学生证",
          },
          {
            CardNum: 1,
            title: "护照",
          },
          {
            CardNum: 1,
            title: "激泥肽酶",
          },
        ],
        activeIndex: 0,
      };
    },
  });
</script>
<style scoped>
  h1 {
    font-size: 30px;
    margin: 0%;
  }

  html {
    font-size: 62.5%;
  }

  .new {
    position: fixed;
    right: 2rem;
    margin-top: 10px;
    z-index: 1;
  }

  .card {
    margin-top: 30px;
  }

  ul {
    list-style-type: none;
    padding: 2px 6px;
  }

  li {
    list-style-type: none;
    margin: 2px 6px;
  }

  .menu {
    position: fixed;
    width: 10vw;
    margin-top: 30px;
    z-index: 1;
  }

  .a-anchor {
    position: absolute;
    display: inline-block;
    z-index: 10;
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

  .big-picture {
    position: fixed;
    z-index: 11;
  }
</style>