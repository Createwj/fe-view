export default (dataName, dataValue) => ({
    data() {
      return {
          [dataName]: dataValue
        }
    }
  })