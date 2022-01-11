<template>
  <div>
    <button @click="subCount"> - </button>
    <span>{{ count }}</span>
    <button @click="addCount"> + </button>
  </div>
</template>
<script>
import countMixin from './countMixin'
export default {
	mixins: [countMixin]
}
</script>