"use strict";(self.webpackChunkgit_glint=self.webpackChunkgit_glint||[]).push([[310],{9967:(L,k,o)=>{o.d(k,{A:()=>y});var g=o(8929),u=o(4650);const y=f=>(()=>{class n extends f{constructor(){super(...arguments),this.destroyed$=new g.xQ}ngOnDestroy(){super.ngOnDestroy&&super.ngOnDestroy(),this.destroyed$.next(),this.destroyed$.complete()}}return n.\u0275fac=function(){let l;return function(S){return(l||(l=u.n5z(n)))(S||n)}}(),n.\u0275prov=u.Yz7({token:n,factory:n.\u0275fac}),n})()},4810:(L,k,o)=>{o.d(k,{j:()=>u});class g{}const u=(...y)=>y.reduce((f,e)=>e(f),g)},1310:(L,k,o)=>{o.r(k),o.d(k,{StartLayoutModule:()=>N});var g=o(9549),u=o(284),y=o(1572),f=o(3179),e=o(2018),n=o(7340),l=o(4006),M=o(591),S=o(1307),x=o(7625),A=o(537),P=o(4810),I=o(9967),O=o(9578),v=o(9077),t=o(4650),D=o(9253),R=o(5435),c=o(6895),a=o(4859),r=o(7392),m=o(266);function h(s,p){if(1&s){const i=t.EpF();t.TgZ(0,"mat-icon",18),t.NdJ("click",function(){t.CHM(i);const C=t.oxw(2);return t.KtG(C.integrateManually())}),t._uU(1,"start"),t.qZA()}}function d(s,p){1&s&&t._UZ(0,"mat-spinner",19)}function b(s,p){1&s&&(t.TgZ(0,"mat-error"),t._uU(1,"Authorization code is required"),t.qZA())}function E(s,p){if(1&s){const i=t.EpF();t.TgZ(0,"div",13)(1,"mat-form-field")(2,"mat-label"),t._uU(3,"Authorization Code"),t.qZA(),t.TgZ(4,"input",14),t.NdJ("keydown.enter",function(){t.CHM(i);const C=t.oxw();return t.KtG(C.integrateManually())}),t.qZA(),t.YNc(5,h,2,0,"mat-icon",15),t.ALo(6,"async"),t.YNc(7,d,1,0,"mat-spinner",16),t.ALo(8,"async"),t.YNc(9,b,2,0,"mat-error",17),t.qZA()()}if(2&s){const i=t.oxw();t.Q6J("@fadeInInput",void 0),t.xp6(4),t.Q6J("formControl",i.manualIntegrationControl),t.xp6(1),t.Q6J("ngIf",!1===t.lcZ(6,5,i.manualIntegrationLoading)),t.xp6(2),t.Q6J("ngIf",t.lcZ(8,7,i.manualIntegrationLoading)),t.xp6(2),t.Q6J("ngIf",i.manualIntegrationControl.hasError("required"))}}const T=[{path:"",component:(()=>{class s extends((0,P.j)(I.A)){constructor(i,_,C){super(),this.router=i,this.store=_,this.authService=C,this.manualIntegration=new M.X(null),this.manualIntegrationLoading=new M.X(!1),this.manualIntegrationControl=new l.NI(null,l.kI.required)}ngOnInit(){if(this.store.selectSnapshot(v.$.welcomeDisabled)){const i=this.store.selectSnapshot(v.$.integrations);this.router.navigate(["/standard/open-repository/"+(i.length>0?"clone":"open")])}else this.store.select(v.$.integrations).pipe((0,S.T)(1),(0,x.R)(this.destroyed$)).subscribe(i=>{this.manualIntegration.next(null),this.manualIntegrationLoading.next(!1),this.manualIntegrationControl.setValue(null),i.length>0&&(this.store.dispatch(new O.S6),this.router.navigate(["/standard/open-repository/clone"]))})}close(){const i=this.store.selectSnapshot(v.$.integrations);this.store.dispatch(new O.S6),this.router.navigate(["/standard/open-repository/"+(i.length>0?"clone":"open")])}addIntegration(i){switch(i){case"bitbucket":this.authService.bitbucketLogin();break;case"github":this.authService.gitHubLogin();break;case"gitlab":this.authService.gitLabLogin()}this.manualIntegration.next(i)}integrateManually(){const i=this.manualIntegrationControl.value;if(i){switch(this.manualIntegration.value){case"bitbucket":this.authService.bitbucketLoggedIn(i).pipe((0,A.x)(()=>this.manualIntegrationLoading.next(!1))).subscribe();break;case"github":this.authService.gitHubLoggedIn(i).pipe((0,A.x)(()=>this.manualIntegrationLoading.next(!1))).subscribe();break;case"gitlab":this.authService.gitLabLoggedIn(i).pipe((0,A.x)(()=>this.manualIntegrationLoading.next(!1))).subscribe()}this.manualIntegrationLoading.next(!0)}else this.manualIntegrationControl.markAsTouched()}}return s.\u0275fac=function(i){return new(i||s)(t.Y36(e.F0),t.Y36(D.yh),t.Y36(R.e))},s.\u0275cmp=t.Xpm({type:s,selectors:[["ng-component"]],features:[t.qOj],decls:31,vars:7,consts:[["type","button","mat-icon-button","","matTooltip","Close",3,"click"],[1,"mat-display-3"],[1,"container"],[1,"get-started"],[1,"content"],[1,"cloud-hosts"],["type","button","mat-button","",1,"cloud-host",3,"click"],["svgIcon","github",1,"prefix"],["svgIcon","gitlab",1,"prefix"],["svgIcon","bitbucket",1,"prefix"],["class","manual-integration",4,"ngIf"],[1,"close"],["type","button","mat-stroked-button","",1,"close-button",3,"click"],[1,"manual-integration"],["matInput","","placeholder","Enter the code displayed in your web browser...",3,"formControl","keydown.enter"],["matSuffix","",3,"click",4,"ngIf"],["matSuffix","","diameter","24",4,"ngIf"],[4,"ngIf"],["matSuffix","",3,"click"],["matSuffix","","diameter","24"]],template:function(i,_){1&i&&(t.TgZ(0,"header")(1,"button",0),t.NdJ("click",function(){return _.close()}),t.TgZ(2,"mat-icon"),t._uU(3,"close"),t.qZA()()(),t.TgZ(4,"main")(5,"h1",1),t._uU(6,"Welcome"),t.qZA(),t.TgZ(7,"h2"),t._uU(8," Thanks for trying out the beta version of Glint"),t._UZ(9,"br"),t._uU(10," All feedback is enormously helpful and very much appreciated \u{1f64f} "),t.qZA(),t.TgZ(11,"div",2)(12,"div",3)(13,"div",4)(14,"p"),t._uU(15,"Get started by connecting to a cloud host, or click close to jump straight to the app"),t.qZA(),t.TgZ(16,"div",5)(17,"button",6),t.NdJ("click",function(){return _.addIntegration("github")}),t._UZ(18,"mat-icon",7),t._uU(19," GitHub "),t.qZA(),t.TgZ(20,"button",6),t.NdJ("click",function(){return _.addIntegration("gitlab")}),t._UZ(21,"mat-icon",8),t._uU(22," GitLab "),t.qZA(),t.TgZ(23,"button",6),t.NdJ("click",function(){return _.addIntegration("bitbucket")}),t._UZ(24,"mat-icon",9),t._uU(25," Bitbucket "),t.qZA()(),t.YNc(26,E,10,9,"div",10),t.ALo(27,"async"),t.TgZ(28,"div",11)(29,"button",12),t.NdJ("click",function(){return _.close()}),t._uU(30,"Close"),t.qZA()()()()()()),2&i&&(t.Q6J("@fadeIn2",void 0),t.xp6(5),t.Q6J("@fadeIn1",void 0),t.xp6(2),t.Q6J("@fadeIn2",void 0),t.xp6(5),t.Q6J("@fadeIn3",void 0),t.xp6(14),t.Q6J("ngIf",t.lcZ(27,5,_.manualIntegration)))},dependencies:[g.TO,g.KE,g.hX,g.R9,u.Nt,y.Ou,c.O5,l.Fj,l.JJ,l.oH,a.lW,r.Hw,m.gM,c.Ov],styles:["header[_ngcontent-%COMP%]{padding:10px;text-align:right}main[_ngcontent-%COMP%]{text-align:center}main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:40px;margin-bottom:40px}main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;align-items:center;height:286px;margin-top:40px}main[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%]{margin:0 auto;border:1px solid transparent;display:flex;justify-content:center;width:fit-content;overflow:hidden}main[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{white-space:nowrap;margin:20px}main[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%]   .cloud-hosts[_ngcontent-%COMP%]{color:#78909c;margin-top:20px}main[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%]   .cloud-hosts[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:160px;height:48px}main[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%]   .cloud-hosts[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%]   .manual-integration[_ngcontent-%COMP%]{overflow:hidden}main[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%]   .manual-integration[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-top:20px;width:100%}main[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%]   .manual-integration[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{cursor:pointer;margin-left:10px}main[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%]   .manual-integration[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{margin-left:10px;margin-right:5px}main[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{color:#fff;opacity:.8;margin-top:40px}"],data:{animation:[(0,n.X$)("fadeIn1",[(0,n.eR)(":enter",[(0,n.oB)({opacity:0}),(0,n.jt)("2s 0.5s",(0,n.oB)({opacity:1}))])]),(0,n.X$)("fadeIn2",[(0,n.eR)(":enter",[(0,n.oB)({opacity:0}),(0,n.jt)("2s 1.5s",(0,n.oB)({opacity:1}))])]),(0,n.X$)("fadeIn3",[(0,n.eR)(":enter",[(0,n.oB)({"border-color":"transparent",opacity:0,width:"0px",height:"0px"}),(0,n.vP)([(0,n.jt)("0.5s 2.5s ease",(0,n.oB)({"border-color":"rgba(255, 255, 255, 0.6)",opacity:1,height:"*"})),(0,n.ru)([(0,n.jt)("1s ease-in-out",(0,n.oB)({width:"*"})),(0,n.jt)("0.75s 0.25s ease-in",(0,n.oB)({"border-color":"transparent"}))])])])]),(0,n.X$)("fadeInInput",[(0,n.eR)(":enter",[(0,n.oB)({height:"0px",opacity:0}),(0,n.vP)([(0,n.jt)("0.3s 3s",(0,n.oB)({height:"*"})),(0,n.jt)("1s ease-in-out",(0,n.oB)({opacity:1}))])])])]},changeDetection:0}),s})()}];let B=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[e.Bz.forChild(T),e.Bz]}),s})(),N=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[g.lN,u.c,y.Cq,f.I,B]}),s})()},1572:(L,k,o)=>{o.d(k,{Cq:()=>D,Ou:()=>t});var g=o(1281),u=o(3353),y=o(3668),f=o(6895),e=o(4650),n=o(3238),l=o(2654);function M(c,a){if(1&c&&(e.O4$(),e._UZ(0,"circle",4)),2&c){const r=e.oxw(),m=e.MAs(1);e.Udp("animation-name","mat-progress-spinner-stroke-rotate-"+r._spinnerAnimationLabel)("stroke-dashoffset",r._getStrokeDashOffset(),"px")("stroke-dasharray",r._getStrokeCircumference(),"px")("stroke-width",r._getCircleStrokeWidth(),"%")("transform-origin",r._getCircleTransformOrigin(m)),e.uIk("r",r._getCircleRadius())}}function S(c,a){if(1&c&&(e.O4$(),e._UZ(0,"circle",4)),2&c){const r=e.oxw(),m=e.MAs(1);e.Udp("stroke-dashoffset",r._getStrokeDashOffset(),"px")("stroke-dasharray",r._getStrokeCircumference(),"px")("stroke-width",r._getCircleStrokeWidth(),"%")("transform-origin",r._getCircleTransformOrigin(m)),e.uIk("r",r._getCircleRadius())}}const P=(0,n.pj)(class{constructor(c){this._elementRef=c}},"primary"),I=new e.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function O(){return{diameter:100}}});class t extends P{constructor(a,r,m,h,d,b,E,U){super(a),this._document=m,this._diameter=100,this._value=0,this._resizeSubscription=l.w.EMPTY,this.mode="determinate";const T=t._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),T.has(m.head)||T.set(m.head,new Set([100])),this._noopAnimations="NoopAnimations"===h&&!!d&&!d._forceAnimations,"mat-spinner"===a.nativeElement.nodeName.toLowerCase()&&(this.mode="indeterminate"),d&&(d.color&&(this.color=this.defaultColor=d.color),d.diameter&&(this.diameter=d.diameter),d.strokeWidth&&(this.strokeWidth=d.strokeWidth)),r.isBrowser&&r.SAFARI&&E&&b&&U&&(this._resizeSubscription=E.change(150).subscribe(()=>{"indeterminate"===this.mode&&U.run(()=>b.markForCheck())}))}get diameter(){return this._diameter}set diameter(a){this._diameter=(0,g.su)(a),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(a){this._strokeWidth=(0,g.su)(a)}get value(){return"determinate"===this.mode?this._value:0}set value(a){this._value=Math.max(0,Math.min(100,(0,g.su)(a)))}ngOnInit(){const a=this._elementRef.nativeElement;this._styleRoot=(0,u.kV)(a)||this._document.head,this._attachStyleNode(),a.classList.add("mat-progress-spinner-indeterminate-animation")}ngOnDestroy(){this._resizeSubscription.unsubscribe()}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const a=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${a} ${a}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_getCircleTransformOrigin(a){const r=50*(a.currentScale??1);return`${r}% ${r}%`}_attachStyleNode(){const a=this._styleRoot,r=this._diameter,m=t._diameters;let h=m.get(a);if(!h||!h.has(r)){const d=this._document.createElement("style");d.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),d.textContent=this._getAnimationText(),a.appendChild(d),h||(h=new Set,m.set(a,h)),h.add(r)}}_getAnimationText(){const a=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*a).replace(/END_VALUE/g,""+.2*a).replace(/DIAMETER/g,`${this._spinnerAnimationLabel}`)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}t._diameters=new WeakMap,t.\u0275fac=function(a){return new(a||t)(e.Y36(e.SBq),e.Y36(u.t4),e.Y36(f.K0,8),e.Y36(e.QbO,8),e.Y36(I),e.Y36(e.sBO),e.Y36(y.rL),e.Y36(e.R0b))},t.\u0275cmp=e.Xpm({type:t,selectors:[["mat-progress-spinner"],["mat-spinner"]],hostAttrs:["role","progressbar","tabindex","-1",1,"mat-progress-spinner","mat-spinner"],hostVars:10,hostBindings:function(a,r){2&a&&(e.uIk("aria-valuemin","determinate"===r.mode?0:null)("aria-valuemax","determinate"===r.mode?100:null)("aria-valuenow","determinate"===r.mode?r.value:null)("mode",r.mode),e.Udp("width",r.diameter,"px")("height",r.diameter,"px"),e.ekj("_mat-animation-noopable",r._noopAnimations))},inputs:{color:"color",diameter:"diameter",strokeWidth:"strokeWidth",mode:"mode",value:"value"},exportAs:["matProgressSpinner"],features:[e.qOj],decls:4,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["svg",""],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(a,r){1&a&&(e.O4$(),e.TgZ(0,"svg",0,1),e.YNc(2,M,1,11,"circle",2),e.YNc(3,S,1,9,"circle",3),e.qZA()),2&a&&(e.Udp("width",r.diameter,"px")("height",r.diameter,"px"),e.Q6J("ngSwitch","indeterminate"===r.mode),e.uIk("viewBox",r._getViewBox()),e.xp6(2),e.Q6J("ngSwitchCase",!0),e.xp6(1),e.Q6J("ngSwitchCase",!1))},dependencies:[f.RF,f.n9],styles:[".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:rgba(0,0,0,0);transition:stroke-dashoffset 225ms linear}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}.mat-progress-spinner[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}.mat-progress-spinner._mat-animation-noopable svg,.mat-progress-spinner._mat-animation-noopable circle{animation:none;transition:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}"],encapsulation:2,changeDetection:0});let D=(()=>{class c{}return c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[n.BQ,f.ez,n.BQ]}),c})()}}]);