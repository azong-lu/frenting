export default{
    namespace:'location',
    state:{
        location:''
    },
    reduces:{
      saveLoaction(state,{payload}){
          return {
              ...state,
              location:payload
          }
      }
    }
}