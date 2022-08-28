"use strict";(self.webpackChunkgit_glint=self.webpackChunkgit_glint||[]).push([[820],{5724:(se,$,o)=>{o.d($,{Y:()=>L});var u=o(4650),c=o(591),T=o(6787),p=o(3753),C=o(3489),i=o(353);class F{constructor(R,h){this.period=R,this.scheduler=h}call(R,h){return h.subscribe(new X(R,this.period,this.scheduler))}}class X extends C.L{constructor(R,h,M){super(R),this.period=h,this.scheduler=M,this.hasValue=!1,this.add(M.schedule(ee,h,{subscriber:this,period:h}))}_next(R){this.lastValue=R,this.hasValue=!0}notifyNext(){this.hasValue&&(this.hasValue=!1,this.destination.next(this.lastValue))}}function ee(g){let{subscriber:R,period:h}=g;R.notifyNext(),this.schedule(g,h)}var P=o(7625),V=o(1059),H=o(1307),w=o(537),oe=o(2198),S=o(2994),ie=o(7545),ne=o(4850),ae=o(2474),K=o(4810),te=o(9967),f=o(2120),A=o(6895);const Y=["border"],I=["*"];let L=(()=>{class g extends((0,K.j)(te.A)){constructor(h,M,_){super(),this.element=h,this.renderer=M,this.zone=_,this.hide=!1,this.sizeChanging=new u.vpe,this.sizeChanged=new u.vpe,this.isVertical$=new c.X(!1),this.highlightBorder$=new c.X(!1),this.previousCell$=new c.X(null),this.linkedHover$=new c.X(!1),this.linked$=new c.X(void 0)}get parentElement(){const h=this.element.nativeElement.parentElement;if(!h)throw new Error("GridCell has no parent Grid");return h}ngOnChanges(h){h.linked&&this.linked$.next(h.linked.currentValue)}ngOnInit(){this.zone.runOutsideAngular(()=>{const h=this.listenToPointerEvents(this.borderElement.nativeElement,["touchstart"],"mousedown","touches"),M=this.listenToPointerEvents(window,["touchmove"],"mousemove","targetTouches"),_=this.listenToPointerEvents(window,["touchend","touchcancel"],"mouseup","changedTouches");h.pipe((0,P.R)(this.destroyed$)).subscribe(([x,O])=>{let z;this.zone.run(()=>this.highlightBorder$.next(!0));const N=this.element.nativeElement,W=this.previousCell$.value?.element.nativeElement;if(!W)throw new Error("Cannot change the size of a grid cell with no previous cell");if(this.isVertical$.value){const G=W.offsetHeight,Z=N.offsetHeight,b=this.getLimit(this.max,this.parentElement.clientHeight,1/0),E=this.getLimit(this.min,this.parentElement.clientHeight,0),s=this.getLimit(this.previousCell$.value?.max,this.parentElement.clientHeight,1/0),l=this.getLimit(this.previousCell$.value?.min,this.parentElement.clientHeight,0);z=([,m])=>{const v=Z+O-m,B=G+m-O,Q=Math.min(Math.max(E,v),b)-v,J=Math.min(Math.max(l,B),s)-B,j=Math.abs(J)>Math.abs(Q)?-J:Q;return this.renderer.setStyle(W,"height",B-j+"px"),this.renderer.setStyle(N,"height",`${v+j}px`),[B-j,v+j]}}else{const G=W.offsetWidth,Z=N.offsetWidth,b=this.getLimit(this.max,this.parentElement.clientWidth,1/0),E=this.getLimit(this.min,this.parentElement.clientWidth,0),s=this.getLimit(this.previousCell$.value?.max,this.parentElement.clientWidth,1/0),l=this.getLimit(this.previousCell$.value?.min,this.parentElement.clientWidth,0);z=([m])=>{const v=Z+x-m,B=G+m-x,Q=Math.min(Math.max(E,v),b)-v,J=Math.min(Math.max(l,B),s)-B,j=Math.abs(J)>Math.abs(Q)?-J:Q;return this.renderer.setStyle(W,"width",B-j+"px"),this.renderer.setStyle(N,"width",`${v+j}px`),[B-j,v+j]}}M.pipe((0,V.O)([x,O]),function U(g,R=i.P){return h=>h.lift(new F(g,R))}(50),(0,P.R)(this.previousCell$.pipe((0,H.T)(1))),(0,P.R)(_),(0,P.R)(h),(0,P.R)(this.destroyed$),(0,w.x)(()=>this.zone.run(()=>this.highlightBorder$.next(!1)))).subscribe({next:G=>{this.sizeChanging.next(z(G))},complete:()=>this.sizeChanged.next()})}),this.linked$.pipe((0,oe.h)(f.$K),(0,P.R)(this.destroyed$)).subscribe(x=>{let O=!1;x.sizeChanging.pipe((0,oe.h)(()=>!O),(0,S.b)(()=>{O=!0,this.zone.run(()=>this.highlightBorder$.next(!0))}),(0,ie.w)(z=>x.sizeChanging.pipe((0,V.O)(z),(0,P.R)(x.sizeChanged),(0,P.R)(this.linked$.pipe((0,H.T)(1))),(0,w.x)(()=>{O=!1,this.sizeChanged.next(),this.zone.run(()=>this.highlightBorder$.next(!1))}))),(0,P.R)(this.linked$.pipe((0,H.T)(1))),(0,P.R)(this.destroyed$)).subscribe(([z,N])=>{const W=this.element.nativeElement,G=this.previousCell$.value?.element.nativeElement;this.isVertical$.value?(this.renderer.setStyle(G,"height",`${z}px`),this.renderer.setStyle(W,"height",`${N}px`)):(this.renderer.setStyle(G,"width",`${z}px`),this.renderer.setStyle(W,"width",`${N}px`))})})})}isFixedSize(){let h=null,M=null;if(this.max){const x=g.pixelsRegex.exec(this.max);x&&(h=+x[1])}if(this.min){const x=g.pixelsRegex.exec(this.min);x&&(M=+x[1])}if(null===h&&null===M)return!1;h=h??1/0,M=M??0;const _=this.isVertical$.value?this.element.nativeElement.offsetHeight:this.element.nativeElement.offsetWidth;return _>=h||_<=M}getSizeInPixels(){const h=this.isVertical$.value?this.parentElement.clientHeight:this.parentElement.clientWidth,M=this.getLimit(this.max,h,1/0),_=this.getLimit(this.min,h,0),x=this.isVertical$.value?this.element.nativeElement.offsetHeight:this.element.nativeElement.offsetWidth;return x>=M?M:x>0&&x<=_?_:x}getLimit(h,M,_){if(!h||""===h)return _;const x=g.percentageRegex.exec(h);if(x)return M*+x[1]/100;const O=g.pixelsRegex.exec(h);return O?+O[1]:isNaN(+h)?_:+h}listenToPointerEvents(h,M,_,x){return(0,T.T)(...M.map(O=>(0,p.R)(h,O,{passive:!1}).pipe((0,S.b)(z=>z.preventDefault()),(0,ne.U)(z=>[z[x][0].clientX,z[x][0].clientY]))),(0,p.R)(h,_,{passive:!1}).pipe((0,S.b)(O=>O.preventDefault()),(0,ne.U)(O=>[O.clientX,O.clientY]))).pipe((0,ae.B)())}}return g.percentageRegex=/(\d*\.?\d+)%/,g.pixelsRegex=/(\d*\.?\d+)px/,g.\u0275fac=function(h){return new(h||g)(u.Y36(u.SBq),u.Y36(u.Qsj),u.Y36(u.R0b))},g.\u0275cmp=u.Xpm({type:g,selectors:[["app-grid-cell"]],viewQuery:function(h,M){if(1&h&&u.Gf(Y,7,u.SBq),2&h){let _;u.iGM(_=u.CRH())&&(M.borderElement=_.first)}},inputs:{hide:"hide",max:"max",min:"min",linked:"linked"},outputs:{sizeChanging:"sizeChanging",sizeChanged:"sizeChanged"},features:[u.qOj,u.TTD],ngContentSelectors:I,decls:9,vars:15,consts:[[1,"grid-cell-wrapper"],[1,"grid-cell-border",3,"ngClass","mouseenter","mouseleave"],["border",""],[1,"grid-cell-content"]],template:function(h,M){1&h&&(u.F$t(),u.TgZ(0,"div",0)(1,"div",1,2),u.NdJ("mouseenter",function(){return M.linkedHover$.next(!0)})("mouseleave",function(){return M.linkedHover$.next(!1)}),u.ALo(3,"async"),u.ALo(4,"async"),u.ALo(5,"async"),u.ALo(6,"async"),u.qZA(),u.TgZ(7,"div",3),u.Hsn(8),u.qZA()()),2&h&&(u.xp6(1),u.Udp("display",u.lcZ(3,7,M.previousCell$)?"block":"none"),u.ekj("highlight",u.lcZ(4,9,M.highlightBorder$))("linked-hover",u.lcZ(5,11,null==M.linked?null:M.linked.linkedHover$)),u.Q6J("ngClass",u.lcZ(6,13,M.isVertical$)?"vertical":"horizontal"))},dependencies:[A.mk,A.Ov],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;position:relative;transition:width 30ms ease-in-out,height 30ms ease-in-out}.grid-cell-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}.grid-cell-border[_ngcontent-%COMP%]{position:absolute;z-index:100}.grid-cell-border.vertical[_ngcontent-%COMP%]{cursor:row-resize;top:-2px;height:4px;width:100%}.grid-cell-border.horizontal[_ngcontent-%COMP%]{cursor:col-resize;left:-2px;height:100%;width:4px}.grid-cell-border.highlight[_ngcontent-%COMP%], .grid-cell-border[_ngcontent-%COMP%]:hover, .grid-cell-border.linked-hover[_ngcontent-%COMP%]{background-color:#37474f}.grid-cell-content[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;overflow-x:auto;overflow-y:auto}"],changeDetection:0}),g})()},3943:(se,$,o)=>{o.d($,{M:()=>ae});var u=o(7717),c=o(591),T=o(6787),p=o(3753),C=o(7625),i=o(1307),U=o(5778),F=o(2994),X=o(1059),ee=o(7545),P=o(4810),V=o(9967),H=o(9578),w=o(9077),oe=o(5724),S=o(4650),ie=o(9253);const ne=["*"];let ae=(()=>{class K extends((0,P.j)(V.A)){constructor(f,A){super(),this.renderer=f,this.store=A,this.hostFlexDirection="row",this.hostOverflow="hidden auto",this.isVertical$=new c.X(!1)}set vertical(f){this.isVertical$.next(void 0!==f)}ngAfterContentInit(){this.id&&this.store.select(w.$.gridSizes(this.id)).pipe((0,C.R)(this.destroyed$)).subscribe(f=>{f.length!==this.gridCells.length&&console.log("mismatch sizes at ",this.id,f.length,this.gridCells.length);const A=(0,u.Z)([...this.gridCells],f),Y=A.filter(([,g])=>g.endsWith("%")),I=A.filter(([,g])=>g.endsWith("px")),L=I.map(([,g])=>+g.replace("px","")).reduce((g,R)=>g+R,0);Y.forEach(([g,R])=>{const h=+R.replace("%","");this.renderer.setStyle(g.element.nativeElement,this.isVertical$.value?"height":"width",`calc(${h}% - ${L*h/100}px)`)}),I.forEach(([g,R])=>{this.renderer.setStyle(g.element.nativeElement,this.isVertical$.value?"height":"width",R)})}),this.hostFlexDirection=this.isVertical$.value?"column":"row",this.gridCells.forEach(f=>{f.isVertical$.next(this.isVertical$.value)}),(0,T.T)(this.isVertical$.pipe((0,i.T)(1),(0,U.x)(),(0,F.b)(f=>{this.hostFlexDirection=f?"column":"row",this.hostOverflow=f?"auto hidden":"hidden auto";const A=f?"width":"height",Y=f?"height":"width";this.gridCells.forEach(I=>{I.isVertical$.next(f);const L=I.element.nativeElement.style[A];this.renderer.removeStyle(I.element.nativeElement,A),this.renderer.setStyle(I.element.nativeElement,Y,L)})})),this.gridCells.changes.pipe((0,X.O)(void 0),(0,F.b)(()=>{this.gridCells.forEach((f,A,Y)=>f.previousCell$.next(A>0?Y[A-1]:null)),this.updateCellSizes()}))).pipe((0,ee.w)(()=>(0,T.T)((0,p.R)(window,"resize"),...this.gridCells.map(f=>f.sizeChanged.asObservable()))),(0,C.R)(this.destroyed$)).subscribe(()=>{this.updateCellSizes()})}updateCellSizes(){if(!this.id)return;const f=this.gridCells.filter(L=>L.isFixedSize()),A=f.reduce((L,g)=>L+g.getSizeInPixels(),0),Y=this.gridCells.reduce((L,g)=>L+g.getSizeInPixels(),0),I=this.gridCells.map(L=>f.includes(L)?`${L.getSizeInPixels()}px`:100*L.getSizeInPixels()/(Y-A)+"%");this.store.dispatch(new H.ct(this.id,I))}}return K.\u0275fac=function(f){return new(f||K)(S.Y36(S.Qsj),S.Y36(ie.yh))},K.\u0275cmp=S.Xpm({type:K,selectors:[["app-grid"]],contentQueries:function(f,A,Y){if(1&f&&S.Suo(Y,oe.Y,4),2&f){let I;S.iGM(I=S.CRH())&&(A.gridCells=I)}},hostVars:4,hostBindings:function(f,A){2&f&&S.Udp("flex-direction",A.hostFlexDirection)("overflow",A.hostOverflow)},inputs:{id:"id",vertical:"vertical"},features:[S.qOj],ngContentSelectors:ne,decls:1,vars:0,template:function(f,A){1&f&&(S.F$t(),S.Hsn(0))},styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;overflow-x:auto;overflow-y:auto}"],changeDetection:0}),K})()},744:(se,$,o)=>{o.d($,{x:()=>c});var u=o(4650);let c=(()=>{class T{transform(C){return C&&(Array.isArray(C)?C.length>0?C:null:"object"==typeof C?Object.keys(C).length>0?C:null:C)}}return T.\u0275fac=function(C){return new(C||T)},T.\u0275pipe=u.Yjl({name:"nullEmpty",type:T,pure:!0}),T})()},5412:(se,$,o)=>{o.d($,{WI:()=>E,uw:()=>j,H8:()=>ge,ZT:()=>ce,xY:()=>ue,Is:()=>pe,so:()=>Z,uh:()=>he});var u=o(2687),c=o(3431),T=o(3353),p=o(4080),C=o(6895),i=o(4650),U=o(9521),F=o(8929),X=o(8514),ee=o(1086),P=o(445),V=o(1059);function H(n,r){}class w{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0}}let S=(()=>{class n extends p.en{constructor(e,t,a,d,D,y,k,q){super(),this._elementRef=e,this._focusTrapFactory=t,this._config=d,this._interactivityChecker=D,this._ngZone=y,this._overlayRef=k,this._focusMonitor=q,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this.attachDomPortal=re=>{this._portalOutlet.hasAttached();const me=this._portalOutlet.attachDomPortal(re);return this._contentAttached(),me},this._ariaLabelledBy=this._config.ariaLabelledBy||null,this._document=a}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();const t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();const t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const a=()=>{e.removeEventListener("blur",a),e.removeEventListener("mousedown",a),e.removeAttribute("tabindex")};e.addEventListener("blur",a),e.addEventListener("mousedown",a)})),e.focus(t)}_focusByCssSelector(e,t){let a=this._elementRef.nativeElement.querySelector(e);a&&this._forceFocus(a,t)}_trapFocus(){const e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||e.focus();break;case!0:case"first-tabbable":this._focusTrap.focusInitialElementWhenReady().then(t=>{t||this._focusDialogContainer()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus)}}_restoreFocus(){const e=this._config.restoreFocus;let t=null;if("string"==typeof e?t=this._document.querySelector(e):"boolean"==typeof e?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&"function"==typeof t.focus){const a=(0,T.ht)(),d=this._elementRef.nativeElement;(!a||a===this._document.body||a===d||d.contains(a))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const e=this._elementRef.nativeElement,t=(0,T.ht)();return e===t||e.contains(t)}_initializeFocusTrap(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=(0,T.ht)())}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(i.SBq),i.Y36(u.qV),i.Y36(C.K0,8),i.Y36(w),i.Y36(u.ic),i.Y36(i.R0b),i.Y36(c.Iu),i.Y36(u.tE))},n.\u0275cmp=i.Xpm({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(e,t){if(1&e&&i.Gf(p.Pl,7),2&e){let a;i.iGM(a=i.CRH())&&(t._portalOutlet=a.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,t){2&e&&i.uIk("id",t._config.id||null)("role",t._config.role)("aria-modal",t._config.ariaModal)("aria-labelledby",t._config.ariaLabel?null:t._ariaLabelledBy)("aria-label",t._config.ariaLabel)("aria-describedby",t._config.ariaDescribedBy||null)},features:[i.qOj],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,t){1&e&&i.YNc(0,H,0,0,"ng-template",0)},dependencies:[p.Pl],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2}),n})();class ie{constructor(r,e){this.overlayRef=r,this.config=e,this.closed=new F.xQ,this.disableClose=e.disableClose,this.backdropClick=r.backdropClick(),this.keydownEvents=r.keydownEvents(),this.outsidePointerEvents=r.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===U.hY&&!this.disableClose&&!(0,U.Vb)(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})})}close(r,e){if(this.containerInstance){const t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this.overlayRef.dispose(),t.next(r),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(r="",e=""){return this.overlayRef.updateSize({width:r,height:e}),this}addPanelClass(r){return this.overlayRef.addPanelClass(r),this}removePanelClass(r){return this.overlayRef.removePanelClass(r),this}}const ne=new i.OlP("DialogScrollStrategy"),ae=new i.OlP("DialogData"),K=new i.OlP("DefaultDialogConfig"),f={provide:ne,deps:[c.aV],useFactory:function te(n){return()=>n.scrollStrategies.block()}};let A=0,Y=(()=>{class n{constructor(e,t,a,d,D,y){this._overlay=e,this._injector=t,this._defaultOptions=a,this._parentDialog=d,this._overlayContainer=D,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new F.xQ,this._afterOpenedAtThisLevel=new F.xQ,this._ariaHiddenElements=new Map,this.afterAllClosed=(0,X.P)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,V.O)(void 0))),this._scrollStrategy=y}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}open(e,t){(t={...this._defaultOptions||new w,...t}).id=t.id||"cdk-dialog-"+A++,t.id&&this.getDialogById(t.id);const d=this._getOverlayConfig(t),D=this._overlay.create(d),y=new ie(D,t),k=this._attachContainer(D,y,t);return y.containerInstance=k,this._attachDialogContent(e,y,k,t),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(y),y.closed.subscribe(()=>this._removeOpenDialog(y,!0)),this.afterOpened.next(y),y}closeAll(){I(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){I(this._openDialogsAtThisLevel,e=>{!1===e.config.closeOnDestroy&&this._removeOpenDialog(e,!1)}),I(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){const t=new c.X_({positionStrategy:e.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,a){const d=a.injector??a.viewContainerRef?.injector,D=[{provide:w,useValue:a},{provide:ie,useValue:t},{provide:c.Iu,useValue:e}];let y;a.container?"function"==typeof a.container?y=a.container:(y=a.container.type,D.push(...a.container.providers(a))):y=S;const k=new p.C5(y,a.viewContainerRef,i.zs3.create({parent:d||this._injector,providers:D}),a.componentFactoryResolver);return e.attach(k).instance}_attachDialogContent(e,t,a,d){const D=this._createInjector(d,t,a);if(e instanceof i.Rgc){let y={$implicit:d.data,dialogRef:t};d.templateContext&&(y={...y,..."function"==typeof d.templateContext?d.templateContext():d.templateContext}),a.attachTemplatePortal(new p.UE(e,null,y,D))}else{const y=a.attachComponentPortal(new p.C5(e,d.viewContainerRef,D,d.componentFactoryResolver));t.componentInstance=y.instance}}_createInjector(e,t,a){const d=e&&e.viewContainerRef&&e.viewContainerRef.injector,D=[{provide:ae,useValue:e.data},{provide:ie,useValue:t}];return e.providers&&("function"==typeof e.providers?D.push(...e.providers(t,e,a)):D.push(...e.providers)),e.direction&&(!d||!d.get(P.Is,null,i.XFs.Optional))&&D.push({provide:P.Is,useValue:{value:e.direction,change:(0,ee.of)()}}),i.zs3.create({parent:d||this._injector,providers:D})}_removeOpenDialog(e,t){const a=this.openDialogs.indexOf(e);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((d,D)=>{d?D.setAttribute("aria-hidden",d):D.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const e=this._overlayContainer.getContainerElement();if(e.parentElement){const t=e.parentElement.children;for(let a=t.length-1;a>-1;a--){const d=t[a];d!==e&&"SCRIPT"!==d.nodeName&&"STYLE"!==d.nodeName&&!d.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(d,d.getAttribute("aria-hidden")),d.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){const e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}}return n.\u0275fac=function(e){return new(e||n)(i.LFG(c.aV),i.LFG(i.zs3),i.LFG(K,8),i.LFG(n,12),i.LFG(c.Xj),i.LFG(ne))},n.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac}),n})();function I(n,r){let e=n.length;for(;e--;)r(n[e])}let L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({providers:[Y,f],imports:[c.U8,p.eL,u.rt,p.eL]}),n})();var g=o(3238),R=o(6787),h=o(2198),M=o(2986),_=o(7340);function x(n,r){}const O={params:{enterAnimationDuration:"150ms",exitAnimationDuration:"75ms"}},z={dialogContainer:(0,_.X$)("dialogContainer",[(0,_.SB)("void, exit",(0,_.oB)({opacity:0,transform:"scale(0.7)"})),(0,_.SB)("enter",(0,_.oB)({transform:"none"})),(0,_.eR)("* => enter",(0,_.ru)([(0,_.jt)("{{enterAnimationDuration}} cubic-bezier(0, 0, 0.2, 1)",(0,_.oB)({transform:"none",opacity:1})),(0,_.IO)("@*",(0,_.pV)(),{optional:!0})]),O),(0,_.eR)("* => void, * => exit",(0,_.ru)([(0,_.jt)("{{exitAnimationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)",(0,_.oB)({opacity:0})),(0,_.IO)("@*",(0,_.pV)(),{optional:!0})]),O)])};class N{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.maxWidth="80vw",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0,this.enterAnimationDuration=O.params.enterAnimationDuration,this.exitAnimationDuration=O.params.exitAnimationDuration}}let W=(()=>{class n extends S{constructor(e,t,a,d,D,y,k,q){super(e,t,a,d,D,y,k,q),this._animationStateChanged=new i.vpe}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(i.SBq),i.Y36(u.qV),i.Y36(C.K0,8),i.Y36(N),i.Y36(u.ic),i.Y36(i.R0b),i.Y36(c.Iu),i.Y36(u.tE))},n.\u0275cmp=i.Xpm({type:n,selectors:[["ng-component"]],features:[i.qOj],decls:0,vars:0,template:function(e,t){},encapsulation:2}),n})(),G=(()=>{class n extends W{constructor(e,t,a,d,D,y,k,q,re){super(e,t,a,d,D,y,k,re),this._changeDetectorRef=q,this._state="enter"}_onAnimationDone({toState:e,totalTime:t}){"enter"===e?this._openAnimationDone(t):"exit"===e&&this._animationStateChanged.next({state:"closed",totalTime:t})}_onAnimationStart({toState:e,totalTime:t}){"enter"===e?this._animationStateChanged.next({state:"opening",totalTime:t}):("exit"===e||"void"===e)&&this._animationStateChanged.next({state:"closing",totalTime:t})}_startExitAnimation(){this._state="exit",this._changeDetectorRef.markForCheck()}_getAnimationState(){return{value:this._state,params:{enterAnimationDuration:this._config.enterAnimationDuration||O.params.enterAnimationDuration,exitAnimationDuration:this._config.exitAnimationDuration||O.params.exitAnimationDuration}}}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(i.SBq),i.Y36(u.qV),i.Y36(C.K0,8),i.Y36(N),i.Y36(u.ic),i.Y36(i.R0b),i.Y36(c.Iu),i.Y36(i.sBO),i.Y36(u.tE))},n.\u0275cmp=i.Xpm({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-dialog-container"],hostVars:7,hostBindings:function(e,t){1&e&&i.WFA("@dialogContainer.start",function(d){return t._onAnimationStart(d)})("@dialogContainer.done",function(d){return t._onAnimationDone(d)}),2&e&&(i.Ikx("id",t._config.id),i.uIk("aria-modal",t._config.ariaModal)("role",t._config.role)("aria-labelledby",t._config.ariaLabel?null:t._ariaLabelledBy)("aria-label",t._config.ariaLabel)("aria-describedby",t._config.ariaDescribedBy||null),i.d8E("@dialogContainer",t._getAnimationState()))},features:[i.qOj],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,t){1&e&&i.YNc(0,x,0,0,"ng-template",0)},dependencies:[p.Pl],styles:[".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions.mat-dialog-actions-align-center,.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions.mat-dialog-actions-align-end,.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}"],encapsulation:2,data:{animation:[z.dialogContainer]}}),n})();class Z{constructor(r,e,t){this._ref=r,this._containerInstance=t,this._afterOpened=new F.xQ,this._beforeClosed=new F.xQ,this._state=0,this.disableClose=e.disableClose,this.id=r.id,t._animationStateChanged.pipe((0,h.h)(a=>"opened"===a.state),(0,M.q)(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe((0,h.h)(a=>"closed"===a.state),(0,M.q)(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),r.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),(0,R.T)(this.backdropClick(),this.keydownEvents().pipe((0,h.h)(a=>a.keyCode===U.hY&&!this.disableClose&&!(0,U.Vb)(a)))).subscribe(a=>{this.disableClose||(a.preventDefault(),b(this,"keydown"===a.type?"keyboard":"mouse"))})}close(r){this._result=r,this._containerInstance._animationStateChanged.pipe((0,h.h)(e=>"closing"===e.state),(0,M.q)(1)).subscribe(e=>{this._beforeClosed.next(r),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=1,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(r){let e=this._ref.config.positionStrategy;return r&&(r.left||r.right)?r.left?e.left(r.left):e.right(r.right):e.centerHorizontally(),r&&(r.top||r.bottom)?r.top?e.top(r.top):e.bottom(r.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(r="",e=""){return this._ref.updateSize(r,e),this}addPanelClass(r){return this._ref.addPanelClass(r),this}removePanelClass(r){return this._ref.removePanelClass(r),this}getState(){return this._state}_finishDialogClose(){this._state=2,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}}function b(n,r,e){return n._closeInteractionType=r,n.close(e)}const E=new i.OlP("MatDialogData"),s=new i.OlP("mat-dialog-default-options"),l=new i.OlP("mat-dialog-scroll-strategy"),B={provide:l,deps:[c.aV],useFactory:function v(n){return()=>n.scrollStrategies.block()}};let Q=0,J=(()=>{class n{constructor(e,t,a,d,D,y,k,q,re,me){this._overlay=e,this._defaultOptions=a,this._parentDialog=d,this._dialogRefConstructor=k,this._dialogContainerType=q,this._dialogDataToken=re,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new F.xQ,this._afterOpenedAtThisLevel=new F.xQ,this._idPrefix="mat-dialog-",this.afterAllClosed=(0,X.P)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,V.O)(void 0))),this._scrollStrategy=y,this._dialog=t.get(Y)}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){const e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}open(e,t){let a;(t={...this._defaultOptions||new N,...t}).id=t.id||`${this._idPrefix}${Q++}`,t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();const d=this._dialog.open(e,{...t,positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:N,useValue:t},{provide:w,useValue:t}]},templateContext:()=>({dialogRef:a}),providers:(D,y,k)=>(a=new this._dialogRefConstructor(D,t,k),a.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:k},{provide:this._dialogDataToken,useValue:y.data},{provide:this._dialogRefConstructor,useValue:a}])});return a.componentInstance=d.componentInstance,this.openDialogs.push(a),this.afterOpened.next(a),a.afterClosed().subscribe(()=>{const D=this.openDialogs.indexOf(a);D>-1&&(this.openDialogs.splice(D,1),this.openDialogs.length||this._getAfterAllClosed().next())}),a}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}}return n.\u0275fac=function(e){i.$Z()},n.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac}),n})(),j=(()=>{class n extends J{constructor(e,t,a,d,D,y,k,q){super(e,t,d,y,k,D,Z,G,E,q)}}return n.\u0275fac=function(e){return new(e||n)(i.LFG(c.aV),i.LFG(i.zs3),i.LFG(C.Ye,8),i.LFG(s,8),i.LFG(l),i.LFG(n,12),i.LFG(c.Xj),i.LFG(i.QbO,8))},n.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac}),n})(),le=0,ce=(()=>{class n{constructor(e,t,a){this.dialogRef=e,this._elementRef=t,this._dialog=a,this.type="button"}ngOnInit(){this.dialogRef||(this.dialogRef=de(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){const t=e._matDialogClose||e._matDialogCloseResult;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){b(this.dialogRef,0===e.screenX&&0===e.screenY?"keyboard":"mouse",this.dialogResult)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(Z,8),i.Y36(i.SBq),i.Y36(j))},n.\u0275dir=i.lG2({type:n,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(e,t){1&e&&i.NdJ("click",function(d){return t._onButtonClick(d)}),2&e&&i.uIk("aria-label",t.ariaLabel||null)("type",t.type)},inputs:{ariaLabel:["aria-label","ariaLabel"],type:"type",dialogResult:["mat-dialog-close","dialogResult"],_matDialogClose:["matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[i.TTD]}),n})(),he=(()=>{class n{constructor(e,t,a){this._dialogRef=e,this._elementRef=t,this._dialog=a,this.id="mat-dialog-title-"+le++}ngOnInit(){this._dialogRef||(this._dialogRef=de(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{const e=this._dialogRef._containerInstance;e&&!e._ariaLabelledBy&&(e._ariaLabelledBy=this.id)})}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(Z,8),i.Y36(i.SBq),i.Y36(j))},n.\u0275dir=i.lG2({type:n,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-dialog-title"],hostVars:1,hostBindings:function(e,t){2&e&&i.Ikx("id",t.id)},inputs:{id:"id"},exportAs:["matDialogTitle"]}),n})(),ue=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=i.lG2({type:n,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-dialog-content"]}),n})(),ge=(()=>{class n{constructor(){this.align="start"}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=i.lG2({type:n,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-dialog-actions"],hostVars:4,hostBindings:function(e,t){2&e&&i.ekj("mat-dialog-actions-align-center","center"===t.align)("mat-dialog-actions-align-end","end"===t.align)},inputs:{align:"align"}}),n})();function de(n,r){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-dialog-container");)e=e.parentElement;return e?r.find(t=>t.id===e.id):null}let pe=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({providers:[j,B],imports:[L,c.U8,p.eL,g.BQ,g.BQ]}),n})()},8255:(se,$,o)=>{o.d($,{OP:()=>I,Tx:()=>Z});var u=o(2687),c=o(4650),T=o(8929),C=(o(7340),o(6895)),i=o(3238),U=o(3431),X=(o(3353),o(3668));const ee=["mat-menu-item",""];function P(b,E){1&b&&(c.O4$(),c.TgZ(0,"svg",2),c._UZ(1,"polygon",3),c.qZA())}const V=["*"],A=new c.OlP("MAT_MENU_PANEL"),Y=(0,i.Kr)((0,i.Id)(class{}));let I=(()=>{class b extends Y{constructor(s,l,m,v,B){super(),this._elementRef=s,this._document=l,this._focusMonitor=m,this._parentMenu=v,this._changeDetectorRef=B,this.role="menuitem",this._hovered=new T.xQ,this._focused=new T.xQ,this._highlighted=!1,this._triggersSubmenu=!1,v?.addItem?.(this)}focus(s,l){this._focusMonitor&&s?this._focusMonitor.focusVia(this._getHostElement(),s,l):this._getHostElement().focus(l),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(s){this.disabled&&(s.preventDefault(),s.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){const s=this._elementRef.nativeElement.cloneNode(!0),l=s.querySelectorAll("mat-icon, .material-icons");for(let m=0;m<l.length;m++)l[m].remove();return s.textContent?.trim()||""}_setHighlighted(s){this._highlighted=s,this._changeDetectorRef?.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}}return b.\u0275fac=function(s){return new(s||b)(c.Y36(c.SBq),c.Y36(C.K0),c.Y36(u.tE),c.Y36(A,8),c.Y36(c.sBO))},b.\u0275cmp=c.Xpm({type:b,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-focus-indicator"],hostVars:10,hostBindings:function(s,l){1&s&&c.NdJ("click",function(v){return l._checkDisabled(v)})("mouseenter",function(){return l._handleMouseEnter()}),2&s&&(c.uIk("role",l.role)("tabindex",l._getTabIndex())("aria-disabled",l.disabled.toString())("disabled",l.disabled||null),c.ekj("mat-menu-item",!0)("mat-menu-item-highlighted",l._highlighted)("mat-menu-item-submenu-trigger",l._triggersSubmenu))},inputs:{disabled:"disabled",disableRipple:"disableRipple",role:"role"},exportAs:["matMenuItem"],features:[c.qOj],attrs:ee,ngContentSelectors:V,decls:3,vars:3,consts:[["matRipple","",1,"mat-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["class","mat-menu-submenu-icon","viewBox","0 0 5 10","focusable","false",4,"ngIf"],["viewBox","0 0 5 10","focusable","false",1,"mat-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(s,l){1&s&&(c.F$t(),c.Hsn(0),c._UZ(1,"div",0),c.YNc(2,P,2,0,"svg",1)),2&s&&(c.xp6(1),c.Q6J("matRippleDisabled",l.disableRipple||l.disabled)("matRippleTrigger",l._getHostElement()),c.xp6(1),c.Q6J("ngIf",l._triggersSubmenu))},dependencies:[C.O5,i.wG],encapsulation:2,changeDetection:0}),b})();const O={provide:new c.OlP("mat-menu-scroll-strategy"),deps:[U.aV],useFactory:function x(b){return()=>b.scrollStrategies.reposition()}};let Z=(()=>{class b{}return b.\u0275fac=function(s){return new(s||b)},b.\u0275mod=c.oAB({type:b}),b.\u0275inj=c.cJS({providers:[O],imports:[C.ez,i.BQ,i.si,U.U8,X.ZD,i.BQ]}),b})()},7965:(se,$,o)=>{o.d($,{Z:()=>C});var u=o(9940),c=o(5604),T=o(8661);const C=function p(i,U){return(0,T.Z)((0,c.Z)(i,U,u.Z),i+"")}},7118:(se,$,o)=>{o.d($,{Z:()=>p});var u=o(8706),c=o(214);const p=function T(C){return(0,c.Z)(C)&&(0,u.Z)(C)}},7717:(se,$,o)=>{o.d($,{Z:()=>P});var u=o(7965),c=o(197),T=o(7988),p=o(666),C=o(4049),i=o(7118),U=Math.max;const P=(0,u.Z)(function F(V){if(!V||!V.length)return[];var H=0;return V=(0,c.Z)(V,function(w){if((0,i.Z)(w))return H=U(w.length,H),!0}),(0,C.Z)(H,function(w){return(0,T.Z)(V,(0,p.Z)(w))})})}}]);