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
import nestMixin2 from './nestMixin2'  

export default {
  mixins: [nestMixin2],
  data() {
    otherData: 'innerValue'
  },
  created() {
    console.log('SomeComponent created')
  	// nestMixin1 created
    // nestMixin2 created
    // SomeComponent created
  }
}
</script>