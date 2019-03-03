Vue.directive("fix",function(ele,binding){
    var val = binding.value;
    var positions = binding.modifiers;
    var warning = binding.arg;
    console.log(warning)
    if(val){
        ele.style.position='fixed';
        for (var key in positions ){
            if(positions[key]){
                ele.style[key]='20px'
            }
          
            
        }
       if(warning){
           ele.style.background='yellow'
       }

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