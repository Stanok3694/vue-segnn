
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
        visibility: {
            type: Boolean,
            required: true
        }
    },
    template: '<div :class="feature" v-if="visibility">' + 
                '<h2 class="featurette-heading">{{header}}</h2>' +
                '<p class="lead">{{content}}</p>' + 
              '</div>',
}) 

new Vue({
    el: "#app",
    data() {
        return{
            // feature-content headers with default data  
            firstFeatureHeader: 'Качество',
            secondFeatureHeader: 'Опыт',
            thirdFeatureHeader: 'Гибкость',
            // feature-content contents with default data
            firstFeatureContent: 'Ключевой критерий для нас - качество выполняемых работ. ' 
                         + 'Проводником нашего стремления к максимальному качеству стал комплекс '
                         + 'современных технологий, талантливых рабочих и грамотного взаимодействия '
                         + 'с нашими клиентами. Мы знаем как сделать КАЧЕСТВЕННО',
            secondFeatureContent: 'Вот уже более 15 лет СтройЭлектроГрупп осуществляет свою деятельность. ' 
                         + 'Пройденный нами путь способствовал достижению высокого уровня зрелости бизнес-процессов '
                         + 'как внутри компании, так и во взаимодействии с клиентами. '
                         + 'с нашими клиентами. Мы знаем КАК делать',
            thirdFeatureContent: 'Благодаря стремлению к новым интересным задачам, ' 
                         + 'наша компания накопила значительный багаж самых разных проектов. '
                         + 'Это позволяет нам браться за любые профильные задачи и решать их в соответствии с Вашими ожиданиями. '
                         + 'Мы знаем ЧЕГО ВЫ ХОТИТЕ',
            
            // classes data
            firstTypeOfFeature: 'col-md-7',
            secondTypeOfFeature: 'col-md-7 col-md-push-5',
            // flags
            isFirstVisible: true,
            isSecondVisible: true,
            isThirdVisible: true,
            // data object for header
            featureHeaders: {
                // for feature-toggler components - will be useful in future
                featureTogglersHeaders:{
                    firstHeader: 'Электромонтажные работы',
                    secondHeader: 'Энергоаудит',
                    thirdHeader: 'Специальные виды работ'
                },
                // for "ГЛАВНАЯ" feature-content components
                defaultFeatureHeaders: {
                    firstDefaultHeader: 'Качество',
                    secondDefaultHeader: 'Опыт',
                    thirdDefaultHeader: 'Гибкость'
                },
                // for "ЭЛЕКТРОМОНТАЖНЫЕ РАБОТЫ" feature-content components
                wiringFeatureHeaders:{
                    firstHeader: 'Производство электромонтажных работ',
                    secondHeader: 'Бестраншейная прокладка коммуникаций',
                    thirdHeader: 'Пусконаладочные работы'
                },
                // for "ЭНЕРГОАУДИТ" feature-content components
                energoAuditFeatureHeaders:{
                    firstHeader: 'Анализ',
                    secondHeader: 'Отчёт'
                },                
                // for "ЭНЕРГОАУДИТ" feature-content components
                specialWorksFeatureHeaders:{
                    firstHeader: 'Ремонт',
                    secondHeader: 'Монтаж'
                }
            },
            // data object for content
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
                         + 'Fusce dapibus, tellus ac cursus commodo.',
                firstDefaultText: 'Ключевой критерий для нас - качество выполняемых работ. ' 
                         + 'Проводником нашего стремления к максимальному качеству стал комплекс '
                         + 'современных технологий, талантливых рабочих и грамотного взаимодействия '
                         + 'с нашими клиентами. Мы знаем как сделать КАЧЕСТВЕННО',
                secondDefaultText: 'Вот уже более 15 лет СтройЭлектроГрупп осуществляет свою деятельность. ' 
                         + 'Пройденный нами путь способствовал достижению высокого уровня зрелости бизнес-процессов '
                         + 'как внутри компании, так и во взаимодействии с клиентами. '
                         + 'с нашими клиентами. Мы знаем КАК делать',
                thirdDefaultText: 'Благодаря стремлению к новым интересным задачам, ' 
                         + 'наша компания накопила значительный багаж самых разных проектов. '
                         + 'Это позволяет нам браться за любые профильные задачи и решать их в соответствии с Вашими ожиданиями. '
                         + 'Мы знаем ЧЕГО ВЫ ХОТИТЕ'
            }
        }    
    },
    methods: {
// trigges for setting data in feature-content components
        firstFeatureBlock: function() {
            this.setFeatureContent('feature-one');
            this.setFeatureHeader('feature-one');
            this.toggleFeatureContentBlockVisibility('feature-one');
        },
        secondFeatureBlock: function() {
            this.setFeatureContent('feature-two');
            this.setFeatureHeader('feature-two');
            this.toggleFeatureContentBlockVisibility('feature-two');
        },
        thirdFeatureBlock: function() {
            this.setFeatureContent('feature-three');
            this.setFeatureHeader('feature-three');
            this.toggleFeatureContentBlockVisibility('feature-three');
        },
        resetContentAndHeaders: function(){
            this.setVisibleForThirdBlock();
            this.setDefaultFeaturesContents();
            this.setDefaultFeaturesHeaders();
        },
// setters for feature-content component's data
        setDefaultFeaturesContents: function(){
            this.firstFeatureContent = this.featureContents.firstDefaultText;
            this.secondFeatureContent = this.featureContents.secondDefaultText;
            this.thirdFeatureContent = this.featureContents.thirdDefaultText;
        },
        setDefaultFeaturesHeaders: function(){
            this.firstFeatureHeader = this.featureHeaders.defaultFeatureHeaders.firstDefaultHeader;
            this.secondFeatureHeader = this.featureHeaders.defaultFeatureHeaders.secondDefaultHeader;
            this.thirdFeatureHeader = this.featureHeaders.defaultFeatureHeaders.thirdDefaultHeader;
        },
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
                this.firstFeatureHeader = this.featureHeaders.wiringFeatureHeaders.firstHeader;
                this.secondFeatureHeader = this.featureHeaders.wiringFeatureHeaders.secondHeader;
                this.thirdFeatureHeader = this.featureHeaders.wiringFeatureHeaders.thirdHeader;
            }
            if(name == "feature-two"){
                this.firstFeatureHeader = this.featureHeaders.energoAuditFeatureHeaders.firstHeader;
                this.secondFeatureHeader = this.featureHeaders.energoAuditFeatureHeaders.secondHeader;
            }
            if(name == "feature-three"){
                this.firstFeatureHeader = this.featureHeaders.specialWorksFeatureHeaders.firstHeader;
                this.secondFeatureHeader = this.featureHeaders.specialWorksFeatureHeaders.secondHeader;
            }
        },
// visible-unvisible triggers
        toggleFeatureContentBlockVisibility: function(name){
            if(name == 'feature-one'){
                this.setVisibleForThirdBlock();
            }
            if(name == 'feature-two' || name == 'feature-three'){
                this.isThirdVisible = false;                
            }
        },
        setVisibleForThirdBlock: function(){
            this.isThirdVisible = true;
        }
    }
})
