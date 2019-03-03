var total={
    methods:{
        toggle(){
            this.visible=!this.visible
        },
        show(){
            this.visible=true;
        },
        hide(){
            this.visible=false;
        }
    },
    data() {
        return {
            visible:false
        }
    },

}
Vue.component('mouse',{
    template:"#mouseTpl",
    mixins:[total]
})

Vue.component("pop",{
    template:'#popTpl',
    mixins:[total]
})


var app = new Vue({
    el:"#a",
    
    
})