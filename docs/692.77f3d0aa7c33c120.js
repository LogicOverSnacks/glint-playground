"use strict";(self.webpackChunkgit_glint=self.webpackChunkgit_glint||[]).push([[692],{5412:(he,U,m)=>{m.d(U,{WI:()=>g,uw:()=>k,H8:()=>_e,ZT:()=>K,xY:()=>ce,Is:()=>ge,so:()=>E,uh:()=>le});var y=m(2687),c=m(8184),R=m(3353),p=m(4080),A=m(6895),i=m(4650),I=m(9521),C=m(8929),F=m(8514),X=m(1086),S=m(445),L=m(1059);function J(n,s){}class O{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0}}let W=(()=>{class n extends p.en{constructor(e,t,o,l,h,d,M,b){super(),this._elementRef=e,this._focusTrapFactory=t,this._config=l,this._interactivityChecker=h,this._ngZone=d,this._overlayRef=M,this._focusMonitor=b,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this.attachDomPortal=B=>{this._portalOutlet.hasAttached();const de=this._portalOutlet.attachDomPortal(B);return this._contentAttached(),de},this._ariaLabelledBy=this._config.ariaLabelledBy||null,this._document=o}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();const t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();const t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const o=()=>{e.removeEventListener("blur",o),e.removeEventListener("mousedown",o),e.removeAttribute("tabindex")};e.addEventListener("blur",o),e.addEventListener("mousedown",o)})),e.focus(t)}_focusByCssSelector(e,t){let o=this._elementRef.nativeElement.querySelector(e);o&&this._forceFocus(o,t)}_trapFocus(){const e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||e.focus();break;case!0:case"first-tabbable":this._focusTrap.focusInitialElementWhenReady().then(t=>{t||this._focusDialogContainer()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus)}}_restoreFocus(){const e=this._config.restoreFocus;let t=null;if("string"==typeof e?t=this._document.querySelector(e):"boolean"==typeof e?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&"function"==typeof t.focus){const o=(0,R.ht)(),l=this._elementRef.nativeElement;(!o||o===this._document.body||o===l||l.contains(o))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const e=this._elementRef.nativeElement,t=(0,R.ht)();return e===t||e.contains(t)}_initializeFocusTrap(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=(0,R.ht)())}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(i.SBq),i.Y36(y.qV),i.Y36(A.K0,8),i.Y36(O),i.Y36(y.ic),i.Y36(i.R0b),i.Y36(c.Iu),i.Y36(y.tE))},n.\u0275cmp=i.Xpm({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(e,t){if(1&e&&i.Gf(p.Pl,7),2&e){let o;i.iGM(o=i.CRH())&&(t._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,t){2&e&&i.uIk("id",t._config.id||null)("role",t._config.role)("aria-modal",t._config.ariaModal)("aria-labelledby",t._config.ariaLabel?null:t._ariaLabelledBy)("aria-label",t._config.ariaLabel)("aria-describedby",t._config.ariaDescribedBy||null)},features:[i.qOj],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,t){1&e&&i.YNc(0,J,0,0,"ng-template",0)},dependencies:[p.Pl],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2}),n})();class Y{constructor(s,e){this.overlayRef=s,this.config=e,this.closed=new C.xQ,this.disableClose=e.disableClose,this.backdropClick=s.backdropClick(),this.keydownEvents=s.keydownEvents(),this.outsidePointerEvents=s.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===I.hY&&!this.disableClose&&!(0,I.Vb)(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})})}close(s,e){if(this.containerInstance){const t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this.overlayRef.dispose(),t.next(s),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(s="",e=""){return this.overlayRef.updateSize({width:s,height:e}),this}addPanelClass(s){return this.overlayRef.addPanelClass(s),this}removePanelClass(s){return this.overlayRef.removePanelClass(s),this}}const z=new i.OlP("DialogScrollStrategy"),q=new i.OlP("DialogData"),ee=new i.OlP("DefaultDialogConfig"),ie={provide:z,deps:[c.aV],useFactory:function te(n){return()=>n.scrollStrategies.block()}};let Q=0,j=(()=>{class n{constructor(e,t,o,l,h,d){this._overlay=e,this._injector=t,this._defaultOptions=o,this._parentDialog=l,this._overlayContainer=h,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new C.xQ,this._afterOpenedAtThisLevel=new C.xQ,this._ariaHiddenElements=new Map,this.afterAllClosed=(0,F.P)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,L.O)(void 0))),this._scrollStrategy=d}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}open(e,t){(t={...this._defaultOptions||new O,...t}).id=t.id||"cdk-dialog-"+Q++,t.id&&this.getDialogById(t.id);const l=this._getOverlayConfig(t),h=this._overlay.create(l),d=new Y(h,t),M=this._attachContainer(h,d,t);return d.containerInstance=M,this._attachDialogContent(e,d,M,t),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(d),d.closed.subscribe(()=>this._removeOpenDialog(d,!0)),this.afterOpened.next(d),d}closeAll(){x(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){x(this._openDialogsAtThisLevel,e=>{!1===e.config.closeOnDestroy&&this._removeOpenDialog(e,!1)}),x(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){const t=new c.X_({positionStrategy:e.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,o){const l=o.injector||o.viewContainerRef?.injector,h=[{provide:O,useValue:o},{provide:Y,useValue:t},{provide:c.Iu,useValue:e}];let d;o.container?"function"==typeof o.container?d=o.container:(d=o.container.type,h.push(...o.container.providers(o))):d=W;const M=new p.C5(d,o.viewContainerRef,i.zs3.create({parent:l||this._injector,providers:h}),o.componentFactoryResolver);return e.attach(M).instance}_attachDialogContent(e,t,o,l){if(e instanceof i.Rgc){const h=this._createInjector(l,t,o,void 0);let d={$implicit:l.data,dialogRef:t};l.templateContext&&(d={...d,..."function"==typeof l.templateContext?l.templateContext():l.templateContext}),o.attachTemplatePortal(new p.UE(e,null,d,h))}else{const h=this._createInjector(l,t,o,this._injector),d=o.attachComponentPortal(new p.C5(e,l.viewContainerRef,h,l.componentFactoryResolver));t.componentInstance=d.instance}}_createInjector(e,t,o,l){const h=e.injector||e.viewContainerRef?.injector,d=[{provide:q,useValue:e.data},{provide:Y,useValue:t}];return e.providers&&("function"==typeof e.providers?d.push(...e.providers(t,e,o)):d.push(...e.providers)),e.direction&&(!h||!h.get(S.Is,null,i.XFs.Optional))&&d.push({provide:S.Is,useValue:{value:e.direction,change:(0,X.of)()}}),i.zs3.create({parent:h||l,providers:d})}_removeOpenDialog(e,t){const o=this.openDialogs.indexOf(e);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((l,h)=>{l?h.setAttribute("aria-hidden",l):h.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const e=this._overlayContainer.getContainerElement();if(e.parentElement){const t=e.parentElement.children;for(let o=t.length-1;o>-1;o--){const l=t[o];l!==e&&"SCRIPT"!==l.nodeName&&"STYLE"!==l.nodeName&&!l.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(l,l.getAttribute("aria-hidden")),l.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){const e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}}return n.\u0275fac=function(e){return new(e||n)(i.LFG(c.aV),i.LFG(i.zs3),i.LFG(ee,8),i.LFG(n,12),i.LFG(c.Xj),i.LFG(z))},n.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac}),n})();function x(n,s){let e=n.length;for(;e--;)s(n[e])}let ne=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({providers:[j,ie],imports:[c.U8,p.eL,y.rt,p.eL]}),n})();var N=m(3238),ae=m(6787),P=m(2198),V=m(2986),v=m(7340);function $(n,s){}const T={params:{enterAnimationDuration:"150ms",exitAnimationDuration:"75ms"}},oe={dialogContainer:(0,v.X$)("dialogContainer",[(0,v.SB)("void, exit",(0,v.oB)({opacity:0,transform:"scale(0.7)"})),(0,v.SB)("enter",(0,v.oB)({transform:"none"})),(0,v.eR)("* => enter",(0,v.ru)([(0,v.jt)("{{enterAnimationDuration}} cubic-bezier(0, 0, 0.2, 1)",(0,v.oB)({transform:"none",opacity:1})),(0,v.IO)("@*",(0,v.pV)(),{optional:!0})]),T),(0,v.eR)("* => void, * => exit",(0,v.ru)([(0,v.jt)("{{exitAnimationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)",(0,v.oB)({opacity:0})),(0,v.IO)("@*",(0,v.pV)(),{optional:!0})]),T)])};class w{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.maxWidth="80vw",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0,this.enterAnimationDuration=T.params.enterAnimationDuration,this.exitAnimationDuration=T.params.exitAnimationDuration}}let se=(()=>{class n extends W{constructor(e,t,o,l,h,d,M,b){super(e,t,o,l,h,d,M,b),this._animationStateChanged=new i.vpe}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(i.SBq),i.Y36(y.qV),i.Y36(A.K0,8),i.Y36(w),i.Y36(y.ic),i.Y36(i.R0b),i.Y36(c.Iu),i.Y36(y.tE))},n.\u0275cmp=i.Xpm({type:n,selectors:[["ng-component"]],features:[i.qOj],decls:0,vars:0,template:function(e,t){},encapsulation:2}),n})(),re=(()=>{class n extends se{constructor(e,t,o,l,h,d,M,b,B){super(e,t,o,l,h,d,M,B),this._changeDetectorRef=b,this._state="enter"}_onAnimationDone({toState:e,totalTime:t}){"enter"===e?this._openAnimationDone(t):"exit"===e&&this._animationStateChanged.next({state:"closed",totalTime:t})}_onAnimationStart({toState:e,totalTime:t}){"enter"===e?this._animationStateChanged.next({state:"opening",totalTime:t}):("exit"===e||"void"===e)&&this._animationStateChanged.next({state:"closing",totalTime:t})}_startExitAnimation(){this._state="exit",this._changeDetectorRef.markForCheck()}_getAnimationState(){return{value:this._state,params:{enterAnimationDuration:this._config.enterAnimationDuration||T.params.enterAnimationDuration,exitAnimationDuration:this._config.exitAnimationDuration||T.params.exitAnimationDuration}}}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(i.SBq),i.Y36(y.qV),i.Y36(A.K0,8),i.Y36(w),i.Y36(y.ic),i.Y36(i.R0b),i.Y36(c.Iu),i.Y36(i.sBO),i.Y36(y.tE))},n.\u0275cmp=i.Xpm({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-dialog-container"],hostVars:7,hostBindings:function(e,t){1&e&&i.WFA("@dialogContainer.start",function(l){return t._onAnimationStart(l)})("@dialogContainer.done",function(l){return t._onAnimationDone(l)}),2&e&&(i.Ikx("id",t._config.id),i.uIk("aria-modal",t._config.ariaModal)("role",t._config.role)("aria-labelledby",t._config.ariaLabel?null:t._ariaLabelledBy)("aria-label",t._config.ariaLabel)("aria-describedby",t._config.ariaDescribedBy||null),i.d8E("@dialogContainer",t._getAnimationState()))},features:[i.qOj],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,t){1&e&&i.YNc(0,$,0,0,"ng-template",0)},dependencies:[p.Pl],styles:[".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions.mat-dialog-actions-align-center,.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions.mat-dialog-actions-align-end,.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}"],encapsulation:2,data:{animation:[oe.dialogContainer]}}),n})();class E{constructor(s,e,t){this._ref=s,this._containerInstance=t,this._afterOpened=new C.xQ,this._beforeClosed=new C.xQ,this._state=0,this.disableClose=e.disableClose,this.id=s.id,t._animationStateChanged.pipe((0,P.h)(o=>"opened"===o.state),(0,V.q)(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe((0,P.h)(o=>"closed"===o.state),(0,V.q)(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),s.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),(0,ae.T)(this.backdropClick(),this.keydownEvents().pipe((0,P.h)(o=>o.keyCode===I.hY&&!this.disableClose&&!(0,I.Vb)(o)))).subscribe(o=>{this.disableClose||(o.preventDefault(),_(this,"keydown"===o.type?"keyboard":"mouse"))})}close(s){this._result=s,this._containerInstance._animationStateChanged.pipe((0,P.h)(e=>"closing"===e.state),(0,V.q)(1)).subscribe(e=>{this._beforeClosed.next(s),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=1,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(s){let e=this._ref.config.positionStrategy;return s&&(s.left||s.right)?s.left?e.left(s.left):e.right(s.right):e.centerHorizontally(),s&&(s.top||s.bottom)?s.top?e.top(s.top):e.bottom(s.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(s="",e=""){return this._ref.updateSize(s,e),this}addPanelClass(s){return this._ref.addPanelClass(s),this}removePanelClass(s){return this._ref.removePanelClass(s),this}getState(){return this._state}_finishDialogClose(){this._state=2,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}}function _(n,s,e){return n._closeInteractionType=s,n.close(e)}const g=new i.OlP("MatDialogData"),a=new i.OlP("mat-dialog-default-options"),r=new i.OlP("mat-dialog-scroll-strategy"),D={provide:r,deps:[c.aV],useFactory:function f(n){return()=>n.scrollStrategies.block()}};let H=0,G=(()=>{class n{constructor(e,t,o,l,h,d,M,b,B,de){this._overlay=e,this._defaultOptions=o,this._parentDialog=l,this._dialogRefConstructor=M,this._dialogContainerType=b,this._dialogDataToken=B,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new C.xQ,this._afterOpenedAtThisLevel=new C.xQ,this._idPrefix="mat-dialog-",this.afterAllClosed=(0,F.P)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,L.O)(void 0))),this._scrollStrategy=d,this._dialog=t.get(j)}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){const e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}open(e,t){let o;(t={...this._defaultOptions||new w,...t}).id=t.id||`${this._idPrefix}${H++}`,t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();const l=this._dialog.open(e,{...t,positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:w,useValue:t},{provide:O,useValue:t}]},templateContext:()=>({dialogRef:o}),providers:(h,d,M)=>(o=new this._dialogRefConstructor(h,t,M),o.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:M},{provide:this._dialogDataToken,useValue:d.data},{provide:this._dialogRefConstructor,useValue:o}])});return o.componentInstance=l.componentInstance,this.openDialogs.push(o),this.afterOpened.next(o),o.afterClosed().subscribe(()=>{const h=this.openDialogs.indexOf(o);h>-1&&(this.openDialogs.splice(h,1),this.openDialogs.length||this._getAfterAllClosed().next())}),o}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}}return n.\u0275fac=function(e){i.$Z()},n.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac}),n})(),k=(()=>{class n extends G{constructor(e,t,o,l,h,d,M,b){super(e,t,l,d,M,h,E,re,g,b)}}return n.\u0275fac=function(e){return new(e||n)(i.LFG(c.aV),i.LFG(i.zs3),i.LFG(A.Ye,8),i.LFG(a,8),i.LFG(r),i.LFG(n,12),i.LFG(c.Xj),i.LFG(i.QbO,8))},n.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac}),n})(),Z=0,K=(()=>{class n{constructor(e,t,o){this.dialogRef=e,this._elementRef=t,this._dialog=o,this.type="button"}ngOnInit(){this.dialogRef||(this.dialogRef=ue(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){const t=e._matDialogClose||e._matDialogCloseResult;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){_(this.dialogRef,0===e.screenX&&0===e.screenY?"keyboard":"mouse",this.dialogResult)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(E,8),i.Y36(i.SBq),i.Y36(k))},n.\u0275dir=i.lG2({type:n,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(e,t){1&e&&i.NdJ("click",function(l){return t._onButtonClick(l)}),2&e&&i.uIk("aria-label",t.ariaLabel||null)("type",t.type)},inputs:{ariaLabel:["aria-label","ariaLabel"],type:"type",dialogResult:["mat-dialog-close","dialogResult"],_matDialogClose:["matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[i.TTD]}),n})(),le=(()=>{class n{constructor(e,t,o){this._dialogRef=e,this._elementRef=t,this._dialog=o,this.id="mat-dialog-title-"+Z++}ngOnInit(){this._dialogRef||(this._dialogRef=ue(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{const e=this._dialogRef._containerInstance;e&&!e._ariaLabelledBy&&(e._ariaLabelledBy=this.id)})}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(E,8),i.Y36(i.SBq),i.Y36(k))},n.\u0275dir=i.lG2({type:n,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-dialog-title"],hostVars:1,hostBindings:function(e,t){2&e&&i.Ikx("id",t.id)},inputs:{id:"id"},exportAs:["matDialogTitle"]}),n})(),ce=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=i.lG2({type:n,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-dialog-content"]}),n})(),_e=(()=>{class n{constructor(){this.align="start"}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=i.lG2({type:n,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-dialog-actions"],hostVars:4,hostBindings:function(e,t){2&e&&i.ekj("mat-dialog-actions-align-center","center"===t.align)("mat-dialog-actions-align-end","end"===t.align)},inputs:{align:"align"}}),n})();function ue(n,s){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-dialog-container");)e=e.parentElement;return e?s.find(t=>t.id===e.id):null}let ge=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({providers:[k,D],imports:[ne,c.U8,p.eL,N.BQ,N.BQ]}),n})()},8255:(he,U,m)=>{m.d(U,{OP:()=>x,Tx:()=>E});var y=m(2687),c=m(4650),R=m(8929),A=(m(7340),m(6895)),i=m(3238),I=m(8184),F=(m(3353),m(3668));const X=["mat-menu-item",""];function S(_,g){1&_&&(c.O4$(),c.TgZ(0,"svg",2),c._UZ(1,"polygon",3),c.qZA())}const L=["*"],Q=new c.OlP("MAT_MENU_PANEL"),j=(0,i.Kr)((0,i.Id)(class{}));let x=(()=>{class _ extends j{constructor(a,r,u,f,D){super(),this._elementRef=a,this._document=r,this._focusMonitor=u,this._parentMenu=f,this._changeDetectorRef=D,this.role="menuitem",this._hovered=new R.xQ,this._focused=new R.xQ,this._highlighted=!1,this._triggersSubmenu=!1,f?.addItem?.(this)}focus(a,r){this._focusMonitor&&a?this._focusMonitor.focusVia(this._getHostElement(),a,r):this._getHostElement().focus(r),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(a){this.disabled&&(a.preventDefault(),a.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){const a=this._elementRef.nativeElement.cloneNode(!0),r=a.querySelectorAll("mat-icon, .material-icons");for(let u=0;u<r.length;u++)r[u].remove();return a.textContent?.trim()||""}_setHighlighted(a){this._highlighted=a,this._changeDetectorRef?.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}}return _.\u0275fac=function(a){return new(a||_)(c.Y36(c.SBq),c.Y36(A.K0),c.Y36(y.tE),c.Y36(Q,8),c.Y36(c.sBO))},_.\u0275cmp=c.Xpm({type:_,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-focus-indicator"],hostVars:10,hostBindings:function(a,r){1&a&&c.NdJ("click",function(f){return r._checkDisabled(f)})("mouseenter",function(){return r._handleMouseEnter()}),2&a&&(c.uIk("role",r.role)("tabindex",r._getTabIndex())("aria-disabled",r.disabled.toString())("disabled",r.disabled||null),c.ekj("mat-menu-item",!0)("mat-menu-item-highlighted",r._highlighted)("mat-menu-item-submenu-trigger",r._triggersSubmenu))},inputs:{disabled:"disabled",disableRipple:"disableRipple",role:"role"},exportAs:["matMenuItem"],features:[c.qOj],attrs:X,ngContentSelectors:L,decls:3,vars:3,consts:[["matRipple","",1,"mat-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["class","mat-menu-submenu-icon","viewBox","0 0 5 10","focusable","false",4,"ngIf"],["viewBox","0 0 5 10","focusable","false",1,"mat-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(a,r){1&a&&(c.F$t(),c.Hsn(0),c._UZ(1,"div",0),c.YNc(2,S,2,0,"svg",1)),2&a&&(c.xp6(1),c.Q6J("matRippleDisabled",r.disableRipple||r.disabled)("matRippleTrigger",r._getHostElement()),c.xp6(1),c.Q6J("ngIf",r._triggersSubmenu))},dependencies:[A.O5,i.wG],encapsulation:2,changeDetection:0}),_})();const T={provide:new c.OlP("mat-menu-scroll-strategy"),deps:[I.aV],useFactory:function $(_){return()=>_.scrollStrategies.reposition()}};let E=(()=>{class _{}return _.\u0275fac=function(a){return new(a||_)},_.\u0275mod=c.oAB({type:_}),_.\u0275inj=c.cJS({providers:[T],imports:[A.ez,i.BQ,i.si,I.U8,F.ZD,i.BQ]}),_})()}}]);