<template>
  <div>
    <el-button @click="subCount">减</el-button>
    <el-input v-model="count" />
    <el-button @click="addCount">加</el-button>
  </div>
</template>
<script>
import countMixin from './countMixin'
export default {
	mixins: [countMixin]
}
</script>  