var app = new Vue({
    el:"#a",
    
    components:{
        like:{
            template:"#likeIcon",
            data() {
                return {
                    count:10,
                    islike:false,
                    active:false
                }
            },
            methods: {
                onClick:function(){
                    if(this.islike){
                        
                        
                        this.count++
                    }else{
                        
                        this.count--
                    }
                    this.islike = !this.islike
                    this.active = !this.active

                    
                }
            },
        }
    }
})