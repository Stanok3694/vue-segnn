
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
                        'role="button" href="#feature"' + 
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
            projects: {
                firstProject:{
                    owner: 'ОАО «Мобильные Теле Системы»',
                    name: 'Внешнее электроснабжение БССС №52204, г.Арзамас, ул. 9 мая, д.25',
                    data: 'Воздушно-кабельная линия 0,4кВ длиной 450м'
                },
                secondProject:{
                    owner: 'ЗАО «Ойкумена»',
                    name: 'Электроснабжение жилого комплекса «Гагаринские высоты» по пр. Гагарина в р-не НГСХА',
                    data: 'Кабельная линия 6 кВ от ПС 110/6кВ «Мыза» длиной 3050м'
                },
                thirdProject:{
                    owner: 'ОАО «Тульские городские электрические сети»',
                    name: 'Проектирование кабеля 6 кВ от ПС№218 "Южная" до РП 41 в Привокзальном районе г.Тулы',
                    data: 'КЛ 6 кВ длиной 2800м,камера КСО- 1 шт., пристрой к РП'
                }
            },
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

            isTogglerBlockVisible: true,
            isProjectsVisible: false,
            isFeaturesBlockVisible: true,
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
                wiringFeatureTexts:{
                    firstText: 'ООО "СтройЭлектроГрупп" оказывает полный комплекс услуг по монтажу, '
                         + 'наладке и организации электроснабжения на объектах энергетической '
                         + 'отрасли, в производственных, складских, торговых, офисных зданиях и '
                         + 'сооружениях, а также прочих объектах недвижимости.',
                    secondText: 'Одной из услуг оказываемых ООО СтройЭлектроГрупп» является '
                         + 'бестраншейная прокладка коммуникаций путём прокола. '
                         + 'Для работы не требуется стационарных источников энергии и воды '
                         + 'Бурение осуществляется за счет продавливания и последующего расширения '
                         + 'и уплотнения грунта.'
                         + 'Главной особенностью является то, что работа производится из котлована.',
                    thirdText: 'Пусконаладочные работы, сопровождающие электромонтажные работы, '
                         + 'представляют собой комплекс работ, включающий проверку, настройку '
                         + 'и испытания электрооборудования с целью обеспечения его проектных '
                         + 'параметров и режимов.',
                },
                energoAuditFeatureTexts:{
                    firstText: 'Donec ullamcorper nulla non metus auctor fringilla.' 
                         + 'Vestibulum id ligula porta felis euismod semper. ' 
                         + 'Praesent commodo cursus magna, vel scelerisque nisl consectetur. '
                         + 'Fusce dapibus, tellus ac cursus commodo.',
                    secondText: 'Bonec ullamcorper nulla non metus auctor fringilla.' 
                         + 'Vestibulum id ligula porta felis euismod semper. ' 
                         + 'Praesent commodo cursus magna, vel scelerisque nisl consectetur. '
                         + 'Fusce dapibus, tellus ac cursus commodo.'
                },
                specialWorksFeatureTexts:{
                    firstText: 'Donec ullamcorper nulla non metus auctor fringilla.' 
                         + 'Vestibulum id ligula porta felis euismod semper. ' 
                         + 'Praesent commodo cursus magna, vel scelerisque nisl consectetur. '
                         + 'Fusce dapibus, tellus ac cursus commodo.',
                    secondText: 'Bonec ullamcorper nulla non metus auctor fringilla.' 
                         + 'Vestibulum id ligula porta felis euismod semper. ' 
                         + 'Praesent commodo cursus magna, vel scelerisque nisl consectetur. '
                         + 'Fusce dapibus, tellus ac cursus commodo.'
                },
                defaultTexts: {
                    firstText: 'Ключевой критерий для нас - качество выполняемых работ. ' 
                         + 'Проводником нашего стремления к максимальному качеству стал комплекс '
                         + 'современных технологий, талантливых рабочих и грамотного взаимодействия '
                         + 'с нашими клиентами. Мы знаем как сделать КАЧЕСТВЕННО',
                    secondText: 'Вот уже более 15 лет СтройЭлектроГрупп осуществляет свою деятельность. ' 
                         + 'Пройденный нами путь способствовал достижению высокого уровня зрелости бизнес-процессов '
                         + 'как внутри компании, так и во взаимодействии с клиентами. '
                         + 'с нашими клиентами. Мы знаем КАК делать',
                    thirdText: 'Благодаря стремлению к новым интересным задачам, ' 
                         + 'наша компания накопила значительный багаж самых разных проектов. '
                         + 'Это позволяет нам браться за любые профильные задачи и решать их в соответствии с Вашими ожиданиями. '
                         + 'Мы знаем ЧЕГО ВЫ ХОТИТЕ'
                }
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
            this.toggleFeatureToggleBlockVisibility('close');
        },
        thirdFeatureBlock: function() {
            this.setFeatureContent('feature-three');
            this.setFeatureHeader('feature-three');
            this.setFeatureImage('feature-three');
            this.toggleFeatureContentBlockVisibility('feature-three');
            this.toggleFeatureToggleBlockVisibility('close');
        },
        resetContentAndHeaders: function(){
            this.isProjectsVisible = false;
            this.isFeaturesBlockVisible = true;

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
            this.firstFeatureContent = this.featureContents.defaultTexts.firstText;
            this.secondFeatureContent = this.featureContents.defaultTexts.secondText;
            this.thirdFeatureContent = this.featureContents.defaultTexts.thirdText;
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
                this.firstFeatureContent = this.featureContents.wiringFeatureTexts.firstText;
                this.secondFeatureContent = this.featureContents.wiringFeatureTexts.secondText;
                this.thirdFeatureContent = this.featureContents.wiringFeatureTexts.thirdText;
            }
            if(name == "feature-two"){
                this.firstFeatureContent = this.featureContents.energoAuditFeatureTexts.firstText;
                this.secondFeatureContent = this.featureContents.energoAuditFeatureTexts.secondText;
            }
            if(name == "feature-three"){
                this.firstFeatureContent = this.featureContents.specialWorksFeatureTexts.firstText;
                this.secondFeatureContent = this.featureContents.specialWorksFeatureTexts.secondText
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
        togglePortfolioVisible: function() {
            this.isProjectsVisible = true;
            this.isFeaturesBlockVisible = false;
        },
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
        setVisibleForThirdBlock: function(){
            this.isThirdFeatureVisible = true;
            this.isThirdImageVisible = true;
        },
        setInvisibleForThirdBlock: function(){
            this.isThirdFeatureVisible = false;
            this.isThirdImageVisible = false; 
        },
        setVisibleForThirdDivider: function(){
            this.isThirdDividerVisible = true;
        },
        setInvisibleForThirdDivider: function(){
            this.isThirdDividerVisible = false;
        }
    },
// MOUNTED:
    mounted: function(){
        this.$on('selectFirstFeatureBlock', this.firstFeatureBlock);
        this.$on('selectSecondFeatureBlock', this.secondFeatureBlock);
        this.$on('selectThirdFeatureBlock', this.thirdFeatureBlock);
    }
})
