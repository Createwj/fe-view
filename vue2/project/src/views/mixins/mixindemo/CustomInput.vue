<template>
	<div class="custom-input">
    <!-- 相关DOM实现逻辑 -->
  </div>
</template>
<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      innerValue: ''
    }
  },
  created() {
    this.innerValue = this.value
  },
  watch: {
    value(newValue) {
      this.innerValue = newValue
      console.log(newValue)
    },
    innerValue(newInnerValue) {
       console.log(newInnerValue)
      this.$emit('change', newInnerValue)
    }
  }
}
</script>
<style>

</style>