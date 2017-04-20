
// custom footer
Vue.component('my-footer', {
    template: '<footer><p class="pull-right"><a href="#">{{upLinkName}}</a></p><p>&copy; {{currentYear}} {{companyName}} &middot;</p></footer>',
    data: function(){
        return {
            upLinkName: 'Наверх',
            currentYear: this.getCurrentYear(),
            companyName: 'СтройЭлектроГрупп'
        }
    },
    methods: {
        getCurrentYear: function(){
            return new Date().getFullYear();
        }
    }
})

new Vue({
    el: "#app",
    data: {},
    methods: {}
})
