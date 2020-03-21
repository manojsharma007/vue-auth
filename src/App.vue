<template>
    <div id="app">   

          
          <router-view></router-view>
    </div>
</template>

<script>


    export default {
        name: 'App',
         components: {
          
          
        },     
    }
</script>

<style>
    body {
        background-color: #F0F0F0;
    }
    h1 {
        padding: 0;
        margin-top: 0;
    }
    #app {
        width: 1024px;
        margin: auto;
    }
</style>