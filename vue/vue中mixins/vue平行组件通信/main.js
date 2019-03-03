var trans = new Vue();

Vue.component("andy",{
    template: "#andyTpl",
    data() {
      return {
          andyMsg:''
      }
    },
    methods: {
       change(){
           trans.$emit("andyMsgChange",this.andyMsg)
       } 
    },

})
Vue.component("bale",{
    template: "#baleTpl",
    data() {
        return {
            recMsg:''
        }
      },
    
    mounted(){
        var ele = this;
        trans.$on("andyMsgChange",function(data){
            ele.recMsg = data
        })
    }
        
    
})

var app = new Vue({
    el:"#a",
    
    
})