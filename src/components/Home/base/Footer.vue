<template>
    <div class="footer">
      <p class="fot">
        <span class="fot-one">票面价</span>
        <span>是指通过景区指定窗口售卖的纸质门票上标注的价格</span>
      </p>
      <ul class="fot-ul">
        <li>
          <img src="../../../../static/1.png" alt="">
          <span>机票</span>
        </li>
        <li>
          <img src="../../../../static/2.png" alt="">
          <span>酒店</span>
        </li>
        <li>
          <img src="../../../../static/3.png" alt="">
          <span>公寓</span>
        </li>
        <li>
          <img src="../../../../static/4.png" alt="">
          <span>更多</span>
        </li>
      </ul>
      <ul class="fot-a">
        <li>登录</li>
        <li>我的订单</li>
        <li>最近浏览</li>
        <li>关于我们</li>
      </ul>
      <div class="fot-fot">
         <span class="p1">触屏版</span>
         <span class="p2">电脑版</span>
         <p class="p3">Qunar 京ICP备05021087意见反馈</p>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {}
        }

    }
</script>

<style lang="stylus" scoped>
    .footer
       height:3.4rem
       background-color #f3f3f3
       padding-top:.1rem
       .fot
         height:.6rem;
         line-height .6rem
         padding-left .3rem
         font-size .25rem
         background-color white
       .fot-ul
         height:1rem
         li
          float:left
          width:25%
          text-align center
          line-height 1rem
         img
          width:.44rem
          height:.44rem
       .fot-a
         width: 100%
         height:.8rem
         border-bottom 1px solid #ddd
         li
          float:left
          width: 25%
          line-height .8rem
          color:#25a4bb
          text-align center
       .fot-fot
           font-size .28rem
           text-align center
          .p1
           display inline-block
           margin-top .2rem
           margin-right .2rem
          .p2
            color:#25a4bb
          .p3
            width:100%;
            height:.5rem
            text-align center
            line-height:.5rem
            color:#cacaca
</style>
