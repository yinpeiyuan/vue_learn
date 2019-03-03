var routes=[
    {
        path:'/',
        component:{
            template: `
                <h1>首页欢迎您</h1>
            
            `
        }
    },
    {
        path:'/about',
        component:{
            template:`
                <h1>关于我的一些事</h1>
            `
        }
    },
    {
        path:'/user/:name',
        component:{
            template:`
                <div>
                <h1>我叫{{$route.params.name}}</h1>
                
                <router-link to="more" append>查看更多</router-link>
                <router-view></router-view>
                </div>
            `
        },
        children:[{
            path:"more",
            component:{
                template:`
                <div>{{$route.params.name}}的更多信息</div>
                `
            }
        }]
    }
]

var router =new VueRouter({
    routes: routes
})
var app = new Vue({
    el: "#a",
    router:router
})