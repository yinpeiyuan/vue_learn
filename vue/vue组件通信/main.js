Vue.component('user',{
    template:"#tpl",
    props:['msg'],
  
})




Vue.component('sondiv',{
    template:"#son",
    methods: {
        onclick:function(){
            this.$emit('drink','儿子喝饱了')
        }

    },
    
})

Vue.component('fardiv',{
    template:'#far',
    methods:{
        drink(data){
            this.condition=true
            this.msg=data
        }
    },
    data() {
        return {
            condition:false,
            msg:""
        }
    },
})

var app = new Vue({
    el:"#a",

    

    
})