var app = new Vue({
    el:"#a",
    data:{
        Chinese:80,
        Maths: 60,
        English:70,
    },

    computed: {
        sum: function(){
            // 注意一定要this,否则找不到
            //this.Chinese=this.Chinese==""?0:this.Chinese;
            // this.Maths=this.Maths==""?0:this.Maths;
            // this.English=this.English==""?0:this.English;
            return (this.Chinese==""?0:this.Chinese)
            +(this.Maths==""?0:this.Maths)
            +(this.English==""?0:this.English)
        },
        average:function(){
            return Math.round(this.sum/3)
        }
    },
    
})