<template>
  <div class="hello">
      <Header></Header>
      <div class="container" ref="wrap">
        <div>
          <home-swiper :swiperList="swiperList"></home-swiper>
          <home-nav  :iconList="iconList"></home-nav>
          <home-like :likeList="recommendList"></home-like>
          <home-weekend :weekendList="weekendList"></home-weekend>
          <home-footer></home-footer>
        </div>
      </div>

  </div>
</template>

<script>
  import BScroll from'better-scroll'
  import {getHome} from "@/api"
  import Header from "./base/Header"
  import HomeSwiper from "./base/Swiper"
  import HomeNav from "./base/Nav"
  import HomeLike from "./base/Like"
  import HomeWeekend from "./base/Weekend"
  import HomeFooter from "./base/Footer"

export default {
  name: 'Home',
  data(){
    return{
      iconList:[],
      recommendList:[],
      swiperList:[],
      weekendList:[]
    }
  },
  components:{
    Header,
    HomeSwiper,
    HomeNav,
    HomeLike,
    HomeWeekend,
    HomeFooter
  },
  activated(){
    this.getData()
  },
  methods:{
    async getData(){
      let {iconList,recommendList,swiperList,weekendList} = await getHome()
        this.iconList = iconList
        this.recommendList = recommendList
        this.swiperList = swiperList
        this.weekendList = weekendList
        console.log(recommendList)
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrap,{
        click:true
      })
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .container
     position fixed
     right:0
     left:0
     bottom:0
     top:.88rem
     overflow hidden
</style>
