
// my-footer-component
Vue.component('my-footer', {
    props: {
        divider: {
            type: Boolean,
            required: true
        }
    },
    template:   '<div>' + 
                    '<div v-if="divider">' +
                        '<hr class="featurette-divider">' +
                    '</div>' +
                    '<footer>' + 
                    '<p class="pull-right">' + 
                        '<a href="#">' +
                            '{{upLinkName}}' + 
                        '</a>' + 
                    '</p>' +
                    '<p>' + 
                        '&copy; {{currentYear}} {{companyName}} &middot;' +
                    '</p>' +
                    '</footer>' +
                '</div>',
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
        },
        divider: {
            type: Boolean,
            required: true
        }
    },
    template: '<div>' +
                '<div v-if="divider">' +
                    '<hr class="featurette-divider">' +
                '</div>' +
                '<div :class="feature" v-if="visibility">' + 
                  '<h2 class="featurette-heading">{{header}}</h2>' +
                  '<p class="lead">{{content}}</p>' + 
                '</div>' +
              '</div>',
}) 
// feature-image-component
Vue.component('feature-image', {
    props: {
        visibility: {
            type: Boolean,
            required: true
        },
        source: {
            type: String,
            required: true
        },
        feature: {
            type: String,
            required: true
        }
    },
    template: '<div :class="feature" v-if= "visibility">' +
                '<img class="featurette-image img-responsive center-block"' + 
                ':src="source"' + 
                'alt="Generic placeholder image">' +
              '</div>'
})
// feature-toggler-component
Vue.component('feature-toggler',{
    props: {
        toggler: {
            type: String,
            required: true
        },
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
        source: {
            type: String,
            required: true
        }        
    },
    template: '<div :class="feature">' + 
                '<img class="img-circle"' + 
                    ':src="source"' + 
                    'alt="Generic placeholder image"' + 
                    'width="140" height="140">' +
                '<h2>{{header}}</h2>' + 
                '<p>{{content}}</p>' + 
                '<p>' + 
                    '<a class="btn btn-default"' + 
                        'role="button"' + 
                        'v-on:click="changeFeatureBlock"' + 
                    '>' + 
                        'Подробнее &raquo;' + 
                    '</a>' +
                '</p>' +
              '</div>',
    data: function(){
        return {
            tooglerType: this.toggler
        }
    },
    methods: {
        changeFeatureBlock: function(){
            if(this.tooglerType == "firstFeatureToggler"){
                this.$parent.$emit('selectFirstFeatureBlock')
            }
            if(this.tooglerType == "secondFeatureToggler"){
                this.$parent.$emit('selectSecondFeatureBlock')
            }
            if(this.tooglerType == "thirdFeatureToggler"){
                this.$parent.$emit('selectThirdFeatureBlock')
            }
        }
    }
})

new Vue({
    el: "#app",
// DATA:
    data() {
        return{
    // feature-toggler headers data
            firstTogglerHeader: 'Электромонтажные работы',
            secondTogglerHeader: 'Энергоаудит',
            thirdTogglerHeader: 'Специальные виды работ',
    // feature-toggler contents data
            firstTogglerContent: 'Основное направление деятельности СтройЭлектроГрупп. ' 
                         + 'Оказываем полный комплекс услуг по электромонтажу.',
            secondTogglerContent: 'Предварительный энергоаудит или энергоаудит, как отдельная услуга? ' 
                         + 'Это не важно. Для Вас мы готовы провести глубокое исследование в сфере ' 
                         + 'аудита энергосетей.',
            thirdTogglerContent: 'Работы любого уровня сложности. Сложные проектный виды работ. ' 
                         + 'В области электромонтажа для СтройЭлектроГрупп нет ничего невозможного.',
    // feature-toggler type
            firstTogglerType: 'firstFeatureToggler',
            secondTogglerType: 'secondFeatureToggler',
            thirdTogglerType: 'thirdFeatureToggler',
    // feature-content headers default data  
            firstFeatureHeader: 'Качество',
            secondFeatureHeader: 'Опыт',
            thirdFeatureHeader: 'Гибкость',
    // feature-content contents default data
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
    // feature-images default URLs
            firstFeatureImage: 'assets/images/features/MockForFeauture1.png',
            secondFeatureImage: 'assets/images/features/MockForFeauture1.png',
            thirdFeatureImage: 'assets/images/features/MockForFeauture1.png',
    // feature-toggler images urls
            firstAvatarImage: 'assets/images/avatars/MockForAvatar1.png',
            secondAvatarImage: 'assets/images/avatars/MockForAvatar2.png',
            thirdAvatarImage: 'assets/images/avatars/MockForAvatar3.png',
    // classes data
                firstTypeOfFeature: 'col-md-7',
                secondTypeOfFeature: 'col-md-7 col-md-push-5',
                firstTypeOfImage: 'col-md-5',
                secondTypeOfImage: 'col-md-5 col-md-pull-7',
                featureToggleType: 'col-lg-4', 
    // flags
            isFirstFeatureVisible: true,
            isSecondFeatureVisible: true,
            isThirdFeatureVisible: true,
            
            isFirstDividerVisible: true,
            isSecondDividerVisible: true,
            isThirdDividerVisible: true,
            isFooterDividerVisible: true,
            
            isFirstImageVisible: true,
            isSecondImageVisible: true,
            isThirdImageVisible: true,
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
            },
    // data object for images
                featureImages: {
                defaultImages: {
                    firstImage: 'assets/images/features/MockForFeauture1.png',
                    secondImage: 'assets/images/features/MockForFeauture1.png',
                    thirdImage: 'assets/images/features/MockForFeauture1.png'
                },
                wiringFeatureImages: {
                    firstImage: 'assets/images/features/MockForFeauture2.png',
                    secondImage: 'assets/images/features/MockForFeauture2.png',
                    thirdImage: 'assets/images/features/MockForFeauture2.png'
                },
                energoAuditFeatureImages: {
                    firstImage: 'assets/images/features/MockForFeauture3.png',
                    secondImage: 'assets/images/features/MockForFeauture3.png'
                },
                specialWorksFeatureImages: {
                    firstImage: 'assets/images/features/MockForFeauture4.png',
                    secondImage: 'assets/images/features/MockForFeauture4.png'
                }
                }
            }    
        },
// METHODS:
    methods: {
    // trigges for setting data in feature-content components
        firstFeatureBlock: function() {
            this.setFeatureContent('feature-one');
            this.setFeatureHeader('feature-one');
            this.setFeatureImage('feature-one');
            this.toggleFeatureContentBlockVisibility('feature-one');
        },
        secondFeatureBlock: function() {
            this.setFeatureContent('feature-two');
            this.setFeatureHeader('feature-two');
            this.setFeatureImage('feature-two');
            this.toggleFeatureContentBlockVisibility('feature-two');
        },
        thirdFeatureBlock: function() {
            this.setFeatureContent('feature-three');
            this.setFeatureHeader('feature-three');
            this.setFeatureImage('feature-three');
            this.toggleFeatureContentBlockVisibility('feature-three');
        },
        resetContentAndHeaders: function(){
            this.setVisible();
            this.setDefaultData();
        },
    // setters for feature-content and feature-image components DEFAULT data
        setDefaultData: function(){
            this.setDefaultFeaturesContents();
            this.setDefaultFeaturesHeaders();
            this.setDefaultFeaturesImages();
        },
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
        setDefaultFeaturesImages: function(){
            this.firstFeatureImage = this.featureImages.defaultImages.firstImage;
            this.secondFeatureImage = this.featureImages.defaultImages.secondImage;
            this.thirdFeatureImage = this.featureImages.defaultImages.thirdImage;
        },
    // setters for feature-content and feature-image components ACTUAL data
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
        // should change this method for real data
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
        setFeatureImage: function(name){
            if(name == "feature-one"){
                this.firstFeatureImage = this.featureImages.wiringFeatureImages.firstImage;
                this.secondFeatureImage = this.featureImages.wiringFeatureImages.secondImage;
                this.thirdFeatureImage = this.featureImages.wiringFeatureImages.thirdImage;
            }
            if(name == "feature-two"){
                this.firstFeatureImage = this.featureImages.energoAuditFeatureImages.firstImage;
                this.secondFeatureImage = this.featureImages.energoAuditFeatureImages.secondImage;
            }
            if(name == "feature-three"){
                this.firstFeatureImage = this.featureImages.specialWorksFeatureImages.firstImage;
                this.secondFeatureImage = this.featureImages.specialWorksFeatureImages.secondImage;
            }
        },
    // visible-unvisible triggers
        toggleFeatureContentBlockVisibility: function(name){
            if(name == 'feature-one'){
                this.setVisible();
            }
            if(name == 'feature-two' || name == 'feature-three'){
                this.setInvisible();              
            }
        },
        setVisible: function(){
            this.setVisibleForThirdBlock();
            this.setVisibleForThirdDivider();
        },
        setInvisible: function(){
            this.setInvisibleForThirdBlock();
            this.setInvisibleForThirdDivider(); 
        },
        setInvisibleForThirdBlock: function(){
            this.isThirdFeatureVisible = false;
            this.isThirdImageVisible = false; 
        },
        setInvisibleForThirdDivider: function(){
            this.isThirdDividerVisible = false;
        },
        setVisibleForThirdBlock: function(){
            this.isThirdFeatureVisible = true;
            this.isThirdImageVisible = true;
        },
        setVisibleForThirdDivider: function(){
            this.isThirdDividerVisible = true;
        }
    },
// MOUNTED:
    mounted: function(){
        this.$on('selectFirstFeatureBlock', this.firstFeatureBlock);
        this.$on('selectSecondFeatureBlock', this.secondFeatureBlock);
        this.$on('selectThirdFeatureBlock', this.thirdFeatureBlock);
    }
})
