(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Dtc0:function(e,a,t){"use strict";t.r(a);var n=t("nplm"),r=t("q1tI"),o=t.n(r),i=t("6uTu"),c=(t("f3/d"),t("oW+c")),m=t("Xiaj"),l=function(e){var a=e.name,t=e.description,n=e.imageUrl,r=e.stack,i=Object(m.a)(),l=i.theme,s=i.style;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"github-component "+("dark"===s?"bg-gray-dark":"border border-gray-light")+" rounded-1 bg-white p-4"},o.a.createElement("div",{className:"d-flex flex-column flex-items-center"},n?o.a.createElement("img",{src:n,title:a,width:"64",height:"64",className:"rounded-1 mb-3",alt:"Projeto sem imagem"}):o.a.createElement((function(){return o.a.createElement("div",{className:"bg-blue-light f4 text-gray-light text-bold rounded-1 flex-shrink-0 text-center mx-auto mb-3 no_image_project"},"#")}),null),o.a.createElement("p",{className:"f3 "+("dark"===s?"text-white":"")},a),o.a.createElement(c.c,{overlay:!0,className:"width-full stack_button"},o.a.createElement("summary",{className:"btn btn-outline btn-block mb-2","aria-haspopup":"dialog",style:{backgroundColor:l.buttonBackground}},"Ver stack"),o.a.createElement("div",{className:"Box mb-2 Box--overlay anim-fade-in fast stack__body width-full"},o.a.createElement("div",{className:"Box-body overflow-auto"},o.a.createElement("p",null,t)),o.a.createElement("ul",null,r.map((function(e){return o.a.createElement("li",{key:e.name,className:"Box-row border-bottom"},o.a.createElement("div",{className:"d-flex flex-items-start"},o.a.createElement("img",{className:"avatar v-align-middle mr-2",src:e.imageUrl,alt:e.name,width:"24",height:"24"}),e.name))}))))))))},s=t("aOgs"),g=t("Wbzz"),d=(t("f2Zo"),function(e){var a=e.projects,t=Object(m.a)().theme;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{className:"text-center "+t.textClass},"Projetos"),o.a.createElement("p",{className:"f4 mb-4 text-gray text-center "+t.textClass},"Veja um pouco sobre cada projeto em que tive o prazer de fazer parte."),o.a.createElement("div",{className:"mx-auto project_items"},o.a.createElement("div",{className:"gutter-condensed d-flex flex-wrap"},a&&a.map((function(e){return o.a.createElement("div",{className:"col-12 col-md-12 col-lg-6 col-xl-4 mb-3"},o.a.createElement(l,{name:e.name,description:e.description,stack:e.stack,imageUrl:e.imageUrl,key:e.name}))}))),o.a.createElement(g.a,{to:"/interests",style:{backgroundColor:t.buttonBackground},className:"btn btn-outline btn-md-block mt-2 float-right"},o.a.createElement("span",null,"Meus interesses"),o.a.createElement(c.d,{className:"ml-2",size:14,icon:s.b}))))}),p=t("qVtS"),u=t.n(p),b=t("a+Bj"),f=t.n(b),h=t("y6RJ");t("Sm8t"),a.default=function(){var e=n.data.github.viewer;return o.a.useEffect((function(){h.a.analytics().logEvent("visited_index")}),[]),o.a.createElement(i.a,{user:e},o.a.createElement(d,{projects:f.a,socialMedias:u.a}))}},"a+Bj":function(e,a){e.exports=[{name:"Meu TIM",imageUrl:"/img/meu-tim.png",description:"Aplicação nativa com foco em gestão pessoal de plano TIM.",stack:[{name:"Swift 4.0",imageUrl:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/swift/swift.png"},{name:"Xcode 10.2",imageUrl:"/img/xcode.png"}]},{name:"TIM Beta",imageUrl:"/img/beta.png",description:"App nativo;  API's e Portais em Rails",stack:[{name:"Ruby on Rails",imageUrl:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/rails/rails.png"},{name:"Ruby",imageUrl:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/ruby/ruby.png"},{name:"Nginx",imageUrl:"https://raw.githubusercontent.com/github/explore/85cceaeeaf993ca35664dc37ea24f9237fbbfc14/topics/nginx/nginx.png"},{name:"Passenger",imageUrl:"/img/pasenger.png"},{name:"MySQL",imageUrl:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"},{name:"Google Cloud",imageUrl:"/img/gcp.svg"}]},{name:"Chatbot TIM",imageUrl:"/img/watson.png",description:"Aplicação de chatbot via IBM Watson",stack:[{name:"Angular 7 SSR",imageUrl:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png"},{name:"Node",imageUrl:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"},{name:"IBM Watson",imageUrl:"/img/watson.png"}]},{name:"Mock-in",imageUrl:"/img/mockin.png",description:"Ferramenta para criação de mocks",stack:[{name:"Vue",imageUrl:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png"},{name:"Elixir",imageUrl:"/img/elixir.jpeg"},{name:"Postgres",imageUrl:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png"},{name:"ElectronJS",imageUrl:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/electron/electron.png"}]},{name:"CREF1",description:"Aplicação para gestão do profissional de educação física",imageUrl:"/img/cref1.webp",stack:[{name:"Ionic",imageUrl:"/img/ionic.png"},{name:"C#",imageUrl:"https://raw.githubusercontent.com/github/explore/93d8a67084f94b2a444e510199a6e7622e5b09a3/topics/dotnet/dotnet.png"}]},{name:"TIM EasyVendas",description:"Aplicação de vendas com foco em B2B",stack:[{name:"Angular 1",imageUrl:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png"},{name:"C#",imageUrl:"https://raw.githubusercontent.com/github/explore/93d8a67084f94b2a444e510199a6e7622e5b09a3/topics/dotnet/dotnet.png"},{name:"Cordova",imageUrl:"/img/cordova.png"}]}]},qVtS:function(e,a){e.exports=[{name:"victor-mesquita-developer",key:"linkedin"},{name:"victor-mesquita",key:"stackoverflow"}]}}]);
//# sourceMappingURL=component---src-pages-index-jsx-9d8c175dd75b528d9cef.js.map