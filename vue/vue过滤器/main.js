Vue.filter('discount',function(val,){
    return val*0.5
})
var app = new Vue({
    el:"#a",
    data:{
        price: ''
    }
    
})