
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
// feature-content-component
Vue.component('feature-content', {
    props: ['type'],
    template: '<div :class="setFeatureContainerClass()"><h2 :class="setFeatureHeaderTwoClass()">{{featureTitle}}</h2><p :class="setParagraphClass()">{{featureContent}}</p></div>',
    data: function(){
        return {
            featureTitle: this.setFeatureHeader(),
            featureClasses: {
                divClass: 'col-md-7',
                headerTwoClass: 'featurette-heading',
                paragraphClass: 'lead'
            },
            featureHeaders:{
                firstHeader: 'Качество',
                secondHeader: 'Опыт',
                thirdHeader: 'Гибкость',
            },
            featureContent: this.setFeatureContent()            
        }
    },
    methods: {
        setFeatureHeader: function(){
            if(this.type == '1'){
                return featureHeaders.firstHeader;
            }
            if(this.type == '2'){
                return featureHeaders.secondHeader;
            }
            if(this.type == '3'){
                return featureHeaders.thirdHeader;
            }
        },
        setFeatureContent: function(){
            if(this.type == '1'){
                return 'Donec ullamcorper nulla non metus auctor fringilla.' 
                     + 'Vestibulum id ligula porta felis euismod semper. ' 
                     + 'Praesent commodo cursus magna, vel scelerisque nisl consectetur. '
                     + 'Fusce dapibus, tellus ac cursus commodo.';
            }
            if(this.type == '2'){
                return 'Bonec ullamcorper nulla non metus auctor fringilla.' 
                     + 'Vestibulum id ligula porta felis euismod semper. ' 
                     + 'Praesent commodo cursus magna, vel scelerisque nisl consectetur. '
                     + 'Fusce dapibus, tellus ac cursus commodo.';
            }
            if(this.type == '3'){
                return 'Lonec ullamcorper nulla non metus auctor fringilla.' 
                     + 'Vestibulum id ligula porta felis euismod semper. ' 
                     + 'Praesent commodo cursus magna, vel scelerisque nisl consectetur. '
                     + 'Fusce dapibus, tellus ac cursus commodo.';
            }
            return 'Sorry, there is no data!'
        },
        setFeatureContainerClass: function(){
            if(this.type == '1') return this.featureClasses.divClass
            if(this.type == '2') return this.featureClasses.divClass + 'col-md-push-5'
            if(this.type == '3') return this.featureClasses.divClass
        },
        setFeatureHeaderTwoClass: function(){
            return this.featureClasses.headerTwoClass
        },
        setParagraphClass: function(){
            return this.featureClasses.paragraphClass
        }
    }
})

new Vue({
    el: "#app",
    data: {},
    methods: {}
})
