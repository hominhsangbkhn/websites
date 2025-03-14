"use strict";(self.webpackChunkapollo_ngx=self.webpackChunkapollo_ngx||[]).push([[3173],{3173:(c,i,o)=>{o.r(i),o.d(i,{DocumentationModule:()=>p});var u=o(9808),r=o(2554),e=o(4893),s=o(3535);let l=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:142,vars:0,consts:[["lang","markup"],[1,"font-semibold"],[1,"text-primary","font-medium"],["lang","javascript"],[1,"video-container"],["width","560","height","315","src","https://www.youtube.com/embed/yl2f8KKY204","frameborder","0","allowfullscreen",""],[1,"line-height-4"],["lang","css"],[1,"text-sm"],["href","https://www.youtube.com/watch?v=5VOuUdDXRsE",1,"font-medium","text-primary","hover:underline"],["href",""],["href","https://www.primefaces.org/designer/api/primeng/13.2.0/",1,"font-medium","text-primary","hover:underline"]],template:function(n,d){1&n&&(e.TgZ(0,"div")(1,"h2"),e._uU(2,"Documentation"),e.qZA(),e.TgZ(3,"h4"),e._uU(4,"Getting Started"),e.qZA(),e.TgZ(5,"p"),e._uU(6,"Apollo is an application template for Angular and is distributed as a CLI project. Current versions is Angular v14 with PrimeNG v14. In case CLI is not installed already, use the command below to set it up."),e.qZA(),e.TgZ(7,"app-code",0),e.IAx(),e._uU(8,"\nnpm install -g @angular/cli\n"),e.fQ9(),e.qZA(),e.TgZ(9,"p"),e._uU(10,'Once CLI is ready in your system, extract the contents of the zip file distribution, cd to the directory, install the libraries from npm and then execute "ng serve" to run the application in your local environment.'),e.qZA(),e.TgZ(11,"app-code",0),e.IAx(),e._uU(12,"\ncd apollo\nnpm install\nng serve\n"),e.fQ9(),e.qZA(),e.TgZ(13,"p"),e._uU(14,"The application should run at "),e.TgZ(15,"span",1),e._uU(16,"http://localhost:4200/"),e.qZA(),e._uU(17,", you may now start with the development of your application."),e.qZA(),e.TgZ(18,"h5"),e._uU(19,"Important CLI Commands"),e.qZA(),e.TgZ(20,"p"),e._uU(21,"Following commands are derived from CLI."),e.qZA(),e.TgZ(22,"app-code",0),e.IAx(),e._uU(23,"\nRun 'ng serve' for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.\n\nRun 'ng generate component component-name' to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.\n\nRun 'ng build' to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.\n\nRun 'ng test' to execute the unit tests via [Karma](https://karma-runner.github.io).\n\nRun 'ng e2e' to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).\n\nRun 'ng help' for more options.\n"),e.fQ9(),e.qZA(),e.TgZ(24,"h4"),e._uU(25,"Structure"),e.qZA(),e.TgZ(26,"p"),e._uU(27,"Apollo consists of 3 main parts; the application layout, layout assets and PrimeNG component theme assets. Layout is placed inside the "),e.TgZ(28,"span",2),e._uU(29,"src/app/layout"),e.qZA(),e._uU(30," folder, and the assets are in the "),e.TgZ(31,"span",2),e._uU(32,"src/assets/layout"),e.qZA(),e._uU(33," folder. "),e.qZA(),e.TgZ(34,"h5"),e._uU(35,"Default Configuration"),e.qZA(),e.TgZ(36,"p"),e._uU(37,"Initial layout configuration can be defined at the main app component by injecting the "),e.TgZ(38,"span",2),e._uU(39,"LayoutService"),e.qZA(),e._uU(40,", this step is optional and only necessary when customizing the defaults. Note that "),e.TgZ(41,"span",2),e._uU(42,"theme"),e.qZA(),e._uU(43," and "),e.TgZ(44,"span",2),e._uU(45,"scale"),e.qZA(),e._uU(46," are not reactive since theme is configured outside of Angular at "),e.TgZ(47,"strong",1),e._uU(48,"index.html"),e.qZA(),e._uU(49," by default and initial scale is defined with the "),e.TgZ(50,"span",2),e._uU(51,"$scale"),e.qZA(),e._uU(52," at "),e.TgZ(53,"strong",1),e._uU(54,"layout.scss"),e.qZA(),e._uU(55,". When default theme or scale is changed at their files initially, it is required to configure the layout service with the matching values to avoid sync issues. "),e.qZA(),e.TgZ(56,"app-code",3),e.IAx(),e._uU(57,'\nimport { Component, OnInit } from \'@angular/core\';\nimport { PrimeNGConfig } from \'primeng/api\';\nimport { LayoutService } from \'./layout/service/app.layout.service\';\n\n@Component({\n    selector: \'app-root\',\n    templateUrl: \'./app.component.html\'\n})\nexport class AppComponent implements OnInit {\n\n    constructor(private primengConfig: PrimeNGConfig, private layoutService: LayoutService) { }\n\n    ngOnInit(): void {\n        this.primengConfig.ripple = true;       //enables core ripple functionality\n\n        //optional configuration with the default configuration\n        this.layoutService.config = {\n            ripple: false,                      //toggles ripple on and off\n            inputStyle: \'outlined\',             //default style for input elements\n            menuMode: \'static\',                 //layout mode of the menu, valid values are "static", "overlay", "slim" and "horizontal"\n            colorScheme: \'light\',               //color scheme of the template, valid values are "light", "dim" and "dark"\n            theme: \'indigo\',                    //default component theme for PrimeNG\n            menuTheme: "colorScheme",           //theme of the menu, valid values are "colorScheme", "primaryColor" and "transparent"\n            scale: 14                           //size of the body font size to scale the whole application\n        };\n    }\n\n}\n'),e.fQ9(),e.qZA(),e.TgZ(58,"h5"),e._uU(59,"Menu"),e.qZA(),e.TgZ(60,"p"),e._uU(61,"Menu is a separate component defined in "),e.TgZ(62,"span",2),e._uU(63,"src/app/layout/app.menu.component.ts"),e.qZA(),e._uU(64," file and based on PrimeNG MenuModel API. In order to define the menuitems, navigate to this file and define your own model as a nested structure."),e.qZA(),e.TgZ(65,"app-code",3),e.IAx(),e._uU(66,"\nimport { OnInit } from '@angular/core';\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'app-menu',\n    templateUrl: './app.menu.component.html'\n})\nexport class AppMenuComponent implements OnInit {\n\n    model: any[];\n\n    ngOnInit() {\n        this.model = [\n            {\n                label: 'Dashboards',\n                icon: 'pi pi-home',\n                items: [\n                    {\n                        label: 'E-Commerce',\n                        icon: 'pi pi-fw pi-home',\n                        routerLink: ['/']\n                    },\n                    {\n                        label: 'Banking',\n                        icon: 'pi pi-fw pi-image',\n                        routerLink: ['/dashboard-banking']\n                    }\n                ]\n            },\n            //...\n        ];\n    }\n}\n"),e.fQ9(),e.qZA(),e.TgZ(67,"h5"),e._uU(68,"Breadcrumb"),e.qZA(),e.TgZ(69,"p"),e._uU(70,"Breadcrumb component at the topbar section is dynamic and retrieves the path information from the router using the "),e.TgZ(71,"span",2),e._uU(72,"data.breadcrumb"),e.qZA(),e._uU(73," property."),e.qZA(),e.TgZ(74,"app-code",3),e.IAx(),e._uU(75,"\n{ path: 'documentation', data: { breadcrumb: 'Documentation' }, loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) }\n"),e.fQ9(),e.qZA(),e.TgZ(76,"h4"),e._uU(77,"Integration with Existing Angular CLI Projects"),e.qZA(),e.TgZ(78,"p"),e._uU(79,"Apollo structure is designed in a modular way so that it can easily be integrated with your existing application. We've created a short tutorial with details."),e.qZA(),e.TgZ(80,"div",4),e._UZ(81,"iframe",5),e.qZA(),e.TgZ(82,"h4"),e._uU(83,"Theme"),e.qZA(),e.TgZ(84,"p"),e._uU(85,"Apollo provides 24 PrimeNG themes out of the box. Setup of a theme is simple by including the css of theme to your bundle that are located inside "),e.TgZ(86,"span",2),e._uU(87,"assets/layout/styles/theme/"),e.qZA(),e._uU(88," folder such as "),e.TgZ(89,"span",2),e._uU(90,"assets/layout/styles/theme/theme-light/blue/theme.css"),e.qZA(),e._uU(91,"."),e.qZA(),e.TgZ(92,"p"),e._uU(93,"A custom theme can be developed by the following steps."),e.qZA(),e.TgZ(94,"ul")(95,"li",6),e._uU(96,'Choose a custom theme name such as "mytheme".'),e.qZA(),e.TgZ(97,"li",6),e._uU(98,'Create a folder named "mytheme" under '),e.TgZ(99,"span",1),e._uU(100,"assets/layouts/styles/theme-light/"),e.qZA(),e._uU(101," folder."),e.qZA(),e.TgZ(102,"li",6),e._uU(103,'Create a file such as theme.scss inside your "mytheme" folder.'),e.qZA(),e.TgZ(104,"li",6),e._uU(105,"Define the variables listed below in your file and import the dependencies."),e.qZA(),e.TgZ(106,"li",6),e._uU(107,"Include the theme.scss to your application."),e.qZA()(),e.TgZ(108,"p"),e._uU(109,"Here are the variables required to create a theme."),e.qZA(),e.TgZ(110,"app-code",7),e.IAx(),e._uU(111,"\n$primaryColor: #3B82F6 !default;\n$primaryLightColor: #BFDBFE !default;\n$primaryDarkColor: #2563eb !default;\n$primaryDarkerColor: #1D4ED8 !default;\n$primaryTextColor: #ffffff !default;\n$primary500:#3B82F6 !default;\n\n$highlightBg: #EFF6FF !default;\n$highlightTextColor: $primaryDarkerColor !default;\n\n@import '../_variables';\n@import '../../designer/_components';\n@import '../_extensions';\n"),e.fQ9(),e.qZA(),e.TgZ(112,"h5"),e._uU(113,"Theme Switcher"),e.qZA(),e.TgZ(114,"p"),e._uU(115,"Dynamic theming is built-in to the template and implemented by including the theme via a link tag instead of bundling the theme along with a configurator component to switch it. In order to switch your theme dynamically as well, it needs to be compiled to css. An example sass command to compile the css would be; "),e.qZA(),e.TgZ(116,"app-code",0),e.IAx(),e._uU(117,"\nsass --update src/assets/theme/mytheme/theme.scss:src/assets/theme/mytheme/theme.css\n"),e.fQ9(),e.qZA(),e.TgZ(118,"p",8),e._uU(119,"*Note: The sass command above is supported by Dart Sass. Please use Dart Sass instead of Ruby Sass."),e.qZA(),e.TgZ(120,"p"),e._uU(121,"Another alternative would be creating dynamic bundles, please see the "),e.TgZ(122,"a",9),e._uU(123,"video tutorial"),e.qZA(),e._uU(124," for an example."),e.qZA(),e.TgZ(125,"h5"),e._uU(126,"Theme Designer"),e.qZA(),e.TgZ(127,"p"),e._uU(128,"Apollo includes a simplified version of the "),e.TgZ(129,"a",10),e._uU(130,"PrimeNG Theme Designer"),e.qZA(),e._uU(131," that only includes the main SASS structure. Full list of SASS variables to customize the components further is available at the "),e.TgZ(132,"a",11),e._uU(133,"SASS API"),e.qZA(),e._uU(134," docs. "),e.qZA(),e.TgZ(135,"h4"),e._uU(136,"Migration Guide"),e.qZA(),e.TgZ(137,"p"),e._uU(138,"Every important change is included in "),e.TgZ(139,"b"),e._uU(140,"CHANGELOG.md"),e.qZA(),e._uU(141," file at the root folder of the distribution along with the instructions to update. Whenever a major version of Angular is released, a new version of the template is provided that mainly brings compatibility support to the PrimeNG component theming. If there are no compatibility issues on component theming e.g. new components or new functionality to PrimeNG, you may still update your application to the latest Angular and PrimeNG without the need to waiting for an update."),e.qZA()())},dependencies:[s.h],styles:["@media screen and (max-width: 991px){.video-container[_ngcontent-%COMP%]{position:relative;width:100%;height:0;padding-bottom:56.25%}.video-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}}"]}),t})(),m=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.Bz.forChild([{path:"",component:l}]),r.Bz]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,s.a,m]}),t})()}}]);