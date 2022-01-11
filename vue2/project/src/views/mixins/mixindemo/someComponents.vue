<template>
	<CustomInput v-model="value" />
</template>
<script>
import CustomInput from './CustomInput.vue'
  
export default {
  components: { 
    CustomInput 
  },
  data() {
    return {
      value: '123'
    }
  },
  mounted(){
    setTimeout(()=>{
      this.value = 1132
    }, 2000)
  },
}
</script>