<template>

      <swiper :options="swiperOption" class="swiper">
        <!-- slides -->
        <swiper-slide v-for="(imgs,index) in filterImgs"  :key="index">
          <div class="nav">
            <div class="item" v-for="item in imgs" :key="item.id">
              <img class='item-img' :src="item.imgUrl" alt="">
              <span class="item-desc">{{item.desc}}</span>
            </div>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>


</template>

<script>
    export default {
        name: "Nav",
        props:["iconList"],
        data(){
           return{
             swiperOption:{
               pagination: {
                 el: '.swiper-pagination',
               },
               loop: true,
             }

           }
        },
        computed:{
           filterImgs(){
             let imgs = []
             this.iconList.forEach((item,index)=>{
                let page = ~~(index/8)
                if(!imgs[page]){
                  imgs[page] = []
                }
               imgs[page].push(item)
             })
             return imgs
           }
        }
    }
</script>

<style lang="stylus" scoped>
  .swiper >>> .swiper-pagination-bullet-active
    background-color rgba(0,175,190,.8)
  .nav
    display flex
    flex-wrap:wrap
    height:3.7rem

    .item
      display flex
      flex-direction column
      align-items: center
      width:25%
      height:50%
     .item img
       width:1.1rem
       margin-top .2rem
</style>
