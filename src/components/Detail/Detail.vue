<template>
    <div class="detail">
       <detail-banner :sightName="sightName"
                      :bannerImg="bannerImg"
                      :gallaryImgs="gallaryImgs"></detail-banner>

      <detail-header></detail-header>
      <detail-cardinfo :cardInfo="cardInfo"></detail-cardinfo>
      <detail-recommendInfo :recommendInfo="recommendInfo">
        <h3 class="border-bottom">去哪儿推荐</h3>
      </detail-recommendInfo>
      <detail-calendar :calendarInfo="calendarInfo"></detail-calendar>
      <detail-comment :commentInfo="commentInfo"></detail-comment>

    </div>
</template>

<script>
    import {getDetails} from "@/api"
    import DetailBanner from './base/Banner'
    import DetailHeader from './base/Header'
    import DetailCardinfo from './base/Cardinfo'
    import DetailRecommendInfo from './base/Recommend'
    import DetailCalendar from './base/Calendar'
    import DetailComment from './base/Comment'



    export default {
        name: "Detail",
        data() {
            return {
              sightName:"",
              bannerImg:"",
              gallaryImgs:[],
              cardInfo:{},
              recommendInfo:[],
              calendarInfo:[],
              commentInfo:[]


            }
        },
        components:{
          DetailBanner,
          DetailHeader,
          DetailCardinfo,
          DetailRecommendInfo,
          DetailCalendar,
          DetailComment



        },
        activated(){
          this.getData()
        },
        methods:{
          async getData(){
            let yc =  await getDetails(this.$route.params.id)
            let {sightName,bannerImg,gallaryImgs,cardInfo,recommendInfo,calendarInfo,commentInfo} = await getDetails(this.$route.params.id)
            this.bannerImg = bannerImg
            this.sightName = sightName
            this.gallaryImgs = gallaryImgs
            this.cardInfo = cardInfo
            this.recommendInfo=recommendInfo
            this.calendarInfo=calendarInfo
            this.commentInfo=commentInfo
            console.log(yc)
          }
        }


    }
</script>

<style lang="stylus" scoped>

</style>
