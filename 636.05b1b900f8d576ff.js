"use strict";(self.webpackChunknellos=self.webpackChunknellos||[]).push([[636],{636:(k,s,g)=>{g.r(s),g.d(s,{ImagesModule:()=>f});var c=g(466),n=g(256),o=g(895),l=g(470);function p(t,a){if(1&t){const e=n.EpF();n.ynx(0),n.TgZ(1,"div",7),n.NdJ("click",function(){const b=n.CHM(e).index,C=n.oxw();return n.KtG(C.jumpPage(b))}),n.qZA(),n.BQk()}if(2&t){const e=a.$implicit;n.xp6(1),n.Akn("background-color: "+e+";")}}let d=(()=>{class t{constructor(){this.imgIndex=0,this.dots=["rgb(100, 100, 100)","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent"],this.imgs=[{title:"Gnocchi Arrabbiata",imagUrl:"background-image: url(assets/imgs/images/cardapio-img-1.jpg);",imgLink:"assets/imgs/images/cardapio-img-1.jpg"},{title:"Fil\xe9 \xe0 Parmegiana com fritas",imagUrl:"background-image: url(assets/imgs/images/cardapio-img-2.jpg);",imgLink:"assets/imgs/images/cardapio-img-2.jpg"},{title:"Risotto Gamberi",imagUrl:"background-image: url(assets/imgs/images/cardapio-img-3.jpg);",imgLink:"assets/imgs/images/cardapio-img-3.jpg"},{title:"Papardelle Bolognese",imagUrl:"background-image: url(assets/imgs/images/cardapio-img-4.jpg);",imgLink:"assets/imgs/images/cardapio-img-4.jpg"},{title:"Scalloppine Nello com pur\xea",imagUrl:"background-image: url(assets/imgs/images/cardapio-img-5.jpg);",imgLink:"assets/imgs/images/cardapio-img-5.jpg"},{title:"Fettuccine al Sugo Finto",imagUrl:"background-image: url(assets/imgs/images/cardapio-img-6.jpg);",imgLink:"assets/imgs/images/cardapio-img-6.jpg"},{title:"Scalloppine madeira com arroz piemontese",imagUrl:"background-image: url(assets/imgs/images/cardapio-img-7.jpg);",imgLink:"assets/imgs/images/cardapio-img-7.jpg"},{title:"Spaghetti alla Carbonara",imagUrl:"background-image: url(assets/imgs/images/cardapio-img-8.jpg);",imgLink:"assets/imgs/images/cardapio-img-8.jpg"},{title:"Pizza Margherita",imagUrl:"background-image: url(assets/imgs/images/cardapio-img-9.jpg);",imgLink:"assets/imgs/images/cardapio-img-9.jpg"},{title:"Tartufo",imagUrl:"background-image: url(assets/imgs/images/cardapio-img-10.jpg);",imgLink:"assets/imgs/images/cardapio-img-10.jpg"}]}ngOnInit(){}changeImg(){this.dots[this.dots.indexOf("rgb(100, 100, 100)")]="transparent",this.dots[this.imgIndex]="rgb(100, 100, 100)"}jumpPage(e){this.imgIndex=e,this.changeImg()}nextImg(){9==this.imgIndex?this.imgIndex=0:this.imgIndex+=1,this.changeImg()}lastImg(){0==this.imgIndex?this.imgIndex=9:this.imgIndex-=1,this.changeImg()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-images"]],decls:14,vars:5,consts:[["target","_blank",3,"href"],[1,"images"],[1,"btns"],[3,"click"],[1,"bx","bx-chevron-left"],[4,"ngFor","ngForOf"],[1,"bx","bx-chevron-right"],[1,"dot",3,"click"]],template:function(e,i){1&e&&(n._UZ(0,"app-header"),n.TgZ(1,"main")(2,"a",0)(3,"div",1)(4,"h1"),n._uU(5),n.qZA()()(),n.TgZ(6,"div",2)(7,"button",3),n.NdJ("click",function(){return i.lastImg()}),n._UZ(8,"i",4),n.qZA(),n.YNc(9,p,2,2,"ng-container",5),n.TgZ(10,"button",3),n.NdJ("click",function(){return i.nextImg()}),n._UZ(11,"i",6),n.qZA()(),n.TgZ(12,"h2"),n._uU(13,"non quello che entra"),n.qZA()()),2&e&&(n.xp6(2),n.Q6J("href",i.imgs[i.imgIndex].imgLink,n.LSH),n.xp6(1),n.Akn(i.imgs[i.imgIndex].imagUrl),n.xp6(2),n.Oqu(i.imgs[i.imgIndex].title),n.xp6(4),n.Q6J("ngForOf",i.dots))},dependencies:[o.sg,l.G],styles:["[_nghost-%COMP%]{width:100%;min-height:100vh}[_nghost-%COMP%]   main[_ngcontent-%COMP%]{margin-top:12vh;width:100%;min-height:50vh}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;font-family:park_lane_nfregular;font-weight:100;color:#fff;font-size:3rem;margin-top:2rem}[_nghost-%COMP%]   .btns[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:1rem 0 0}[_nghost-%COMP%]   .btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:solid 1px black;border-radius:100px;width:25px;height:25px;outline:none;background-color:transparent;transition:.3s}[_nghost-%COMP%]   .btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#000000a0;cursor:pointer;color:#484848;border-color:#484848}[_nghost-%COMP%]   .btns[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{border-radius:100px;width:10px;height:10px;border:solid 1px rgb(100,100,100);margin:0 10px;background-color:transparent;transition:.2s}[_nghost-%COMP%]   .btns[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#646464!important}[_nghost-%COMP%]   .images[_ngcontent-%COMP%]{width:100%;height:75vh;display:flex;justify-content:flex-end;align-items:flex-end;color:#fff;font-size:2rem;font-family:park_lane_nfregular;padding:3rem;background-repeat:no-repeat;background-size:cover}[_nghost-%COMP%]   .images[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:100!important;text-shadow:0 0 2px black}@media (max-width: 950px){[_nghost-%COMP%]   .images[_ngcontent-%COMP%]{align-items:flex-start;justify-content:center;background-position:0px 24vh;background-size:contain!important;background-attachment:scroll!important;height:50vh}[_nghost-%COMP%]   .images[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3.6rem}}"]}),t})();var r=g(322);const u=[{path:"",component:d}];let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[r.Bz.forChild(u),r.Bz]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[o.ez,h,c.m]}),t})()}}]);