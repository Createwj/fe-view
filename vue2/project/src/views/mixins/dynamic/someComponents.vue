<template>
	<div>
        <p>
        someData: {{ someData }}
    </p>
    <p>somedates: {{someDatas}}</p>
    </div>
</template>
<script>
import dynamicMixin from './dynamicMixin'
  
export default {
    mixins: [
      dynamicMixin('someData', 'someValue'),
      dynamicMixin('someDatas', 'someValues'),
    ],
    mounted() {
        setTimeout(() => {
            this.someData = 1123;
            this.someDatas = 1123;
        }, 2000)
    }
}
</script>