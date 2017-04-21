
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
    props: {
        header: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        feature: {
            type: String,
            required: true
        },
    },
    template: '<div :class="feature"><h2 class="featurette-heading">{{header}}</h2><p class="lead">{{content}}</p></div>',
})

new Vue({
    el: "#app",
    data() {
        return{
            firstFeatureHeader: 'NAN',
            secondFeatureHeader: 'NAN',
            thirdFeatureHeader: 'NAN',

            firstFeatureContent: 'NaN',
            secondFeatureContent: 'NaN',
            thirdFeatureContent:'NaN',

            firstTypeOfFeature: 'col-md-7',
            secondTypeOfFeature: 'col-md-7 col-md-push-5',

            featureHeaders:{
                firstHeader: 'Качество',
                secondHeader: 'Опыт',
                thirdHeader: 'Гибкость',
             },
            featureContents:{
                firstText: 'Donec ullamcorper nulla non metus auctor fringilla.' 
                         + 'Vestibulum id ligula porta felis euismod semper. ' 
                         + 'Praesent commodo cursus magna, vel scelerisque nisl consectetur. '
                         + 'Fusce dapibus, tellus ac cursus commodo.',
                secondText: 'Bonec ullamcorper nulla non metus auctor fringilla.' 
                         + 'Vestibulum id ligula porta felis euismod semper. ' 
                         + 'Praesent commodo cursus magna, vel scelerisque nisl consectetur. '
                         + 'Fusce dapibus, tellus ac cursus commodo.',
                thirdText: 'Lonec ullamcorper nulla non metus auctor fringilla.' 
                         + 'Vestibulum id ligula porta felis euismod semper. ' 
                         + 'Praesent commodo cursus magna, vel scelerisque nisl consectetur. '
                         + 'Fusce dapibus, tellus ac cursus commodo.'
            }
        }    
    },
    methods: {
        setFeatureContent: function(name){
            if(name == "feature-one"){
                this.firstFeatureContent = this.featureContents.firstText;
                this.secondFeatureContent = this.featureContents.firstText;
                this.thirdFeatureContent = this.featureContents.firstText;
            }
            if(name == "feature-two"){
                this.firstFeatureContent = this.featureContents.secondText;
                this.secondFeatureContent = this.featureContents.secondText;
                this.thirdFeatureContent = this.featureContents.secondText;
            }
            if(name == "feature-three"){
                this.firstFeatureContent = this.featureContents.thirdText;
                this.secondFeatureContent = this.featureContents.thirdText;
                this.thirdFeatureContent = this.featureContents.thirdText;
            }
        },
        setFeatureHeader: function(name){
            if(name == "feature-one"){
                this.firstFeatureHeader = this.featureHeaders.firstHeader;
                this.secondFeatureHeader = this.featureHeaders.firstHeader;
                this.thirdFeatureHeader = this.featureHeaders.firstHeader;
            }
            if(name == "feature-two"){
                this.firstFeatureHeader = this.featureHeaders.secondHeader;
                this.secondFeatureHeader = this.featureHeaders.secondHeader;
                this.thirdFeatureHeader = this.featureHeaders.secondHeader;
            }
            if(name == "feature-three"){
                this.firstFeatureHeader = this.featureHeaders.thirdHeader;
                this.secondFeatureHeader = this.featureHeaders.thirdHeader;
                this.thirdFeatureHeader = this.featureHeaders.thirdHeader;
            }
        },
        firstFeatureBlock: function() {
            this.setFeatureContent('feature-one');
            this.setFeatureHeader('feature-one');
        },
        secondFeatureBlock: function() {
            this.setFeatureContent('feature-two');
            this.setFeatureHeader('feature-two');
        },
        thirdFeatureBlock: function() {
            this.setFeatureContent('feature-three');
            this.setFeatureHeader('feature-three');
        }
    }
})
