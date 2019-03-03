// 全局组件
Vue.component('love',{
    template:"<button @click='onClick'>我喜欢</button>",
    methods: {
        onClick:function(){
            alert("love")
        }
    },
})

var app = new Vue({
    el:"#a",
    // 局部变量
    components:{
        frank:{
            template:"<button @click='onfrank'>frank</button>",
            methods: {
                onfrank: function(){
                    alert('frank')
                }
            },
        }
    }
     
})

var app = new Vue({
    el:'#a2'
})