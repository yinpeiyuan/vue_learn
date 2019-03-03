Vue.directive("fix",function(ele,binding){
    var val = binding.value
    if(val){
        ele.style.position='fixed',
        ele.style.top='10px',
        ele.style.left='10px'
    }else{
        ele.style.position="static"
    }
})

var app = new Vue({
    el:"#a",
    data:{
        div1: {
            fix: true
        },
        div2:{
            fix:false
        }
    }
    
})