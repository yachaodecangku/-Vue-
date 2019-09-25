<template>
    <div class="city">
      <Header></Header>
      <city-search :cities="cities"></city-search>
      <city-list :hotCities="hotCities,cities"></city-list>
      <city-Alphabet  :cities="cities"></city-Alphabet>
    </div>
</template>

<script>
  import {getCities} from "@/api"
  import Header from  "./base/Header"
  import CitySearch from  "./base/Search"
  import CityList from  "./base/List"
  import CityAlphabet from  "./base/Alphabet"

  export default {
        name: "City",
        data() {
            return {
              hotCities:[],
              cities:[]
            }
        },
        components:{
          Header,
          CitySearch,
          CityList,
          CityAlphabet
        },
        created(){
          this.getData()
        },
        methods:{
          async getData(){
            let {hotCities,cities} = await getCities()
            this.hotCities = hotCities
            this.cities = cities
          }
        }
     }
</script>

<style lang="stylus" scoped>

</style>
