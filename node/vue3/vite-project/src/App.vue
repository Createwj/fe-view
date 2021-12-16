<template>
  <div>
    <router-link to="/">首页</router-link> | 
    <router-link to="/about">关于</router-link>
  </div>
  <router-view></router-view>
</template>
<script setup>

function fib(n){
  if(n<=1) return 1
  return fib(n-1)+fib(n-2)
}
let count = ref(fib(38))
</script>