<template>
	<p>
    <!-- someValueA -->
    someDataA: {{ someDataA }} <br />
    
    <!-- someValueB -->
    someDataB: {{ someDataB }} <br />
    
    <!-- innerValue -->
    otherData: {{ otherData }}
  </p>
</template>
<script>
import mixinA from './mixinA'  
import mixinB from './mixinB'
export default {
  mixins: [mixinA, mixinB],
  data() {
    otherData: 'innerValue'
  },
  created() {
    console.log('SomeComponent created')
    // mixinA created
    // mixinB created
    // SomeComponent created
  }
}
</script>