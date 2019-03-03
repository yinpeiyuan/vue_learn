var app = new Vue({
    el:"#a",
    methods:{
        onclick:function(){
            console.log("click")
        },
        onEnter:function(){
            console.log("触碰")
        },
        onOut:function(){
            console.log("离开")
        },
        onSubmit:function(){
            console.log("提交")
        }
        
    }
    
})