<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
::-webkit-scrollbar {
    width: 3px;
    height: 3px; 
  }
::-webkit-scrollbar-thumb {
  background-color: #3232324d;
  border-radius: 6px; 
}
::-webkit-scrollbar-track {
  background-color: #3232321a; 
}
body {
  margin: 0;
}
a {
  text-decoration: none;
}
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
