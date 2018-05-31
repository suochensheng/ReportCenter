<template>
  <div id="app" class="layout">
    <Layout>
      <Header></Header>
      <Content>
           <router-view></router-view>
      </Content>
      <Footer></Footer>
    </Layout>
  </div>
</template>


<script>


import Header from './header'
import Footer from './footer'


export default {
  name: 'App',
  components: {
    Header,Footer
  }
}
</script>

<!-- <style scoped>
   @import '/assets/iview/iview.css';
</style>  -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
