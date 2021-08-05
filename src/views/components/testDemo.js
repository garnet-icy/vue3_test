export default {
  props:{
    user:{
      type:String
    }
  },
  data(){
    return {
      showModel:true
    }
  },
  created(){
    console.log('created');
  },
  methods:{
    showSome(){
      console.log('showSome');
    }
  }
}