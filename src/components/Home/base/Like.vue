<template>
    <div class="like">
      <h3>
        <img  class="hart" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
        猜你喜欢
      </h3>
      <ul>
        <router-link  tag="li" :to="{name:'show',params:{id:item.id}}" class="item border-bottom" v-for="(item,index) in likeList" :key="index">
          <img class="item-img" :src="item.imgUrl" alt="">
            <div class="item-info">
              <h4>{{item.title}}</h4>
                <div class="item-fav-info clearfix">
               <p class="item-fav-text">
                 <i v-for="i in 5" class="iconfont icon-star"></i>
                 <span class="item-fav-star" :style="item.score|styleObj">
                    <i v-for="i in 5" class="iconfont icon-star"></i>
                 </span>

                 <span class="comment">{{item.comment}}条评论</span>

               </p><br>
               <p class="item-text-right">
                  <span>{{item.desc}}</span>
               </p>

             </div>
        <p class="item-price">{{item.price|price}}</p>
      </div>

     </router-link>
  </ul>

 </div>
</template>

<script>
    export default {
        name: "HomeLike",
        props:["likeList"],
        filters:{
          styleObj(score){
            return {
              width:score*100/5+"%"
            }
          },
          price(value){
            return "￥"+value
          }
        }

    }
</script>

<style lang="stylus" scoped>
 .border-bottom:before
    border-bottom 1px solid #777
 .like
   padding:0 .26rem
 h3
    display flex
    height:.8rem
    line-height .8rem
    font-size .32rem
 .hart
    display block
    width:.3rem
    height:.3rem
    padding:.25rem .1rem 0 .15rem
 .item
   display:flex
   height: 2.2rem
   padding:.2rem
   //border-bottom:.02rem solid #ddd
   .item-img
     width:2.3rem
     height:2.1rem
   .item-info
     flex:1
     padding: .1rem
     margin-left:.1rem
     min-width: 0rem;
     h4
       line-height:.2rem
       font-size:.3rem
     .item-price
       color:#ff8300
       font-size:.3rem
       line-height:.4rem
     .item-fav-info
       line-height:.5rem
       .item-fav-text
         position:relative
         display:inline-block
         float:left
         color:#ccc
         margin-right:.5rem
         .item-fav-star
           overflow:hidden
           position:absolute
           left:0
           top:0
           color:#ffb436
         .comment
            margin-left .15rem
            color  #25a4bb
       .item-text-right
         float:left



</style>
