<template>
    <div class="weekend">
      <h3 class="title">周末去哪儿</h3>
      <ul>
        <router-link :to="{name:'weeklink',params:{id:item.id}}" class="item border-bottom" v-for="(item,index) in weekendList" :key="index">
          <img class="item-img" :src="item.imgUrl" alt="">
          <div class="item-info">
            <h4 class="info-title">{{item.title}}</h4>
            <p class="item-desc">{{item.desc}}</p>
          </div>
         </router-link>

      </ul>
     </div>
</template>

<script>
    export default {
        name: "HomeWeekend",
        props:["weekendList"],
        data() {
            return {

            }
        }

    }
</script>

<style lang="stylus" scoped>
   .weekend .title
      height:.8rem
      background-color : #ccc
      color: #000
      padding-left .4rem
      line-height:.8rem
      font-size .3rem
     .item-img
       width:100%
       height 3rem
     .item-info
       height:1.5rem
       .info-title
         height:.8rem
         line-height:.8rem
         padding-left:.3rem
         font-size:.28rem
         color:#212121
       .item-desc
         padding-left:.3rem
         color:#616161

</style>
