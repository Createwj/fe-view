import nestMixin1 from './nestMixin1'

export default {
  mixins: [nestMixin1],
  data() {
    return {
        someDataB: 'someValueB',
  	    otherData: 'otherDataB'
    }
  },
  created() {
    console.log('nestMixin2 created')
  }
}