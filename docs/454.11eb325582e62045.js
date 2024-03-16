"use strict";(self.webpackChunkgit_glint=self.webpackChunkgit_glint||[]).push([[454],{9454:(ee,T,r)=>{r.d(T,{BS:()=>J,MY:()=>W,GK:()=>P,Z2:()=>k,WN:()=>Z});var e=r(4438),v=r(5024),g=r(1413),y=r(8359);let I=0;const m=new e.nKC("CdkAccordion");let H=(()=>{class a{constructor(){this._stateChanges=new g.B,this._openCloseAllActions=new g.B,this.id="cdk-accordion-"+I++,this.multi=!1}openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(t){this._stateChanges.next(t)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static{this.\u0275fac=function(n){return new(n||a)}}static{this.\u0275dir=e.FsC({type:a,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[e.Mj6.HasDecoratorInputTransform,"multi","multi",e.L39]},exportAs:["cdkAccordion"],standalone:!0,features:[e.Jv_([{provide:m,useExisting:a}]),e.GFd,e.OA$]})}}return a})(),S=0,F=(()=>{class a{get expanded(){return this._expanded}set expanded(t){this._expanded!==t&&(this._expanded=t,this.expandedChange.emit(t),t?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}constructor(t,n,i){this.accordion=t,this._changeDetectorRef=n,this._expansionDispatcher=i,this._openCloseAllSubscription=y.yU.EMPTY,this.closed=new e.bkB,this.opened=new e.bkB,this.destroyed=new e.bkB,this.expandedChange=new e.bkB,this.id="cdk-accordion-child-"+S++,this._expanded=!1,this.disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=i.listen((o,s)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===s&&this.id!==o&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(t=>{this.disabled||(this.expanded=t)})}static{this.\u0275fac=function(n){return new(n||a)(e.rXU(m,12),e.rXU(e.gRc),e.rXU(v.zP))}}static{this.\u0275dir=e.FsC({type:a,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[e.Mj6.HasDecoratorInputTransform,"expanded","expanded",e.L39],disabled:[e.Mj6.HasDecoratorInputTransform,"disabled","disabled",e.L39]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],standalone:!0,features:[e.Jv_([{provide:m,useValue:void 0}]),e.GFd]})}}return a})(),N=(()=>{class a{static{this.\u0275fac=function(n){return new(n||a)}}static{this.\u0275mod=e.$C({type:a})}static{this.\u0275inj=e.G2t({})}}return a})();var x=r(6939),O=r(6600),_=r(998),M=r(9172),c=r(5964),R=r(6697),u=r(7336),B=r(983),U=r(7786),d=r(9969),G=r(177);const X=["body"],j=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],V=["mat-expansion-panel-header","*","mat-action-row"];function z(a,b){}const L=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],$=["mat-panel-title","mat-panel-description","*"];function K(a,b){if(1&a&&(e.j41(0,"span",1),e.qSk(),e.j41(1,"svg",2),e.nrm(2,"path",3),e.k0s()()),2&a){const t=e.XpG();e.Y8G("@indicatorRotate",t._getExpandedState())}}const f=new e.nKC("MAT_ACCORDION"),A="225ms cubic-bezier(0.4,0.0,0.2,1)",w={indicatorRotate:(0,d.hZ)("indicatorRotate",[(0,d.wk)("collapsed, void",(0,d.iF)({transform:"rotate(0deg)"})),(0,d.wk)("expanded",(0,d.iF)({transform:"rotate(180deg)"})),(0,d.kY)("expanded <=> collapsed, void => collapsed",(0,d.i0)(A))]),bodyExpansion:(0,d.hZ)("bodyExpansion",[(0,d.wk)("collapsed, void",(0,d.iF)({height:"0px",visibility:"hidden"})),(0,d.wk)("expanded",(0,d.iF)({height:"*",visibility:""})),(0,d.kY)("expanded <=> collapsed, void => collapsed",(0,d.i0)(A))])},E=new e.nKC("MAT_EXPANSION_PANEL");let Q=(()=>{class a{constructor(t,n){this._template=t,this._expansionPanel=n}static{this.\u0275fac=function(n){return new(n||a)(e.rXU(e.C4Q),e.rXU(E,8))}}static{this.\u0275dir=e.FsC({type:a,selectors:[["ng-template","matExpansionPanelContent",""]],standalone:!0})}}return a})(),Y=0;const C=new e.nKC("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");let P=(()=>{class a extends F{get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(t){this._hideToggle=t}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(t){this._togglePosition=t}constructor(t,n,i,o,s,l,h){super(t,n,i),this._viewContainerRef=o,this._animationMode=l,this._hideToggle=!1,this.afterExpand=new e.bkB,this.afterCollapse=new e.bkB,this._inputChanges=new g.B,this._headerId="mat-expansion-panel-header-"+Y++,this.accordion=t,this._document=s,this._animationsDisabled="NoopAnimations"===l,h&&(this.hideToggle=h.hideToggle)}_hasSpacing(){return!!this.accordion&&this.expanded&&"default"===this.accordion.displayMode}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe((0,M.Z)(null),(0,c.p)(()=>this.expanded&&!this._portal),(0,R.s)(1)).subscribe(()=>{this._portal=new x.VA(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(t){this._inputChanges.next(t)}ngOnDestroy(){super.ngOnDestroy(),this._inputChanges.complete()}_containsFocus(){if(this._body){const t=this._document.activeElement,n=this._body.nativeElement;return t===n||n.contains(t)}return!1}_animationStarted(t){!D(t)&&!this._animationsDisabled&&this._body&&this._body?.nativeElement.setAttribute("inert","")}_animationDone(t){D(t)||("expanded"===t.toState?this.afterExpand.emit():"collapsed"===t.toState&&this.afterCollapse.emit(),!this._animationsDisabled&&this._body&&this._body.nativeElement.removeAttribute("inert"))}static{this.\u0275fac=function(n){return new(n||a)(e.rXU(f,12),e.rXU(e.gRc),e.rXU(v.zP),e.rXU(e.c1b),e.rXU(G.qQ),e.rXU(e.bc$,8),e.rXU(C,8))}}static{this.\u0275cmp=e.VBU({type:a,selectors:[["mat-expansion-panel"]],contentQueries:function(n,i,o){if(1&n&&e.wni(o,Q,5),2&n){let s;e.mGM(s=e.lsd())&&(i._lazyContent=s.first)}},viewQuery:function(n,i){if(1&n&&e.GBs(X,5),2&n){let o;e.mGM(o=e.lsd())&&(i._body=o.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(n,i){2&n&&e.AVh("mat-expanded",i.expanded)("_mat-animation-noopable",i._animationsDisabled)("mat-expansion-panel-spacing",i._hasSpacing())},inputs:{hideToggle:[e.Mj6.HasDecoratorInputTransform,"hideToggle","hideToggle",e.L39],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],standalone:!0,features:[e.Jv_([{provide:f,useValue:void 0},{provide:E,useExisting:a}]),e.GFd,e.Vt3,e.OA$,e.aNF],ngContentSelectors:V,decls:7,vars:4,consts:[["body",""],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(n,i){if(1&n){const o=e.RV6();e.NAR(j),e.SdG(0),e.j41(1,"div",1,0),e.bIt("@bodyExpansion.start",function(l){return e.eBV(o),e.Njj(i._animationStarted(l))})("@bodyExpansion.done",function(l){return e.eBV(o),e.Njj(i._animationDone(l))}),e.j41(3,"div",2),e.SdG(4,1),e.DNE(5,z,0,0,"ng-template",3),e.k0s(),e.SdG(6,2),e.k0s()}2&n&&(e.R7$(),e.Y8G("@bodyExpansion",i._getExpandedState())("id",i.id),e.BMQ("aria-labelledby",i._headerId),e.R7$(4),e.Y8G("cdkPortalOutlet",i._portal))},dependencies:[x.I3],styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative;background:var(--mat-expansion-container-background-color);color:var(--mat-expansion-container-text-color);border-radius:var(--mat-expansion-container-shape)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape);border-top-left-radius:var(--mat-expansion-container-shape)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape);border-bottom-left-radius:var(--mat-expansion-container-shape)}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;font-family:var(--mat-expansion-container-text-font);font-size:var(--mat-expansion-container-text-size);font-weight:var(--mat-expansion-container-text-weight);line-height:var(--mat-expansion-container-text-line-height);letter-spacing:var(--mat-expansion-container-text-tracking)}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color)}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2,data:{animation:[w.bodyExpansion]},changeDetection:0})}}return a})();function D(a){return"void"===a.fromState}let k=(()=>{class a{constructor(t,n,i,o,s,l,h){this.panel=t,this._element=n,this._focusMonitor=i,this._changeDetectorRef=o,this._animationMode=l,this._parentChangeSubscription=y.yU.EMPTY,this.tabIndex=0;const q=t.accordion?t.accordion._stateChanges.pipe((0,c.p)(p=>!(!p.hideToggle&&!p.togglePosition))):B.w;this.tabIndex=parseInt(h||"")||0,this._parentChangeSubscription=(0,U.h)(t.opened,t.closed,q,t._inputChanges.pipe((0,c.p)(p=>!!(p.hideToggle||p.disabled||p.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),t.closed.pipe((0,c.p)(()=>t._containsFocus())).subscribe(()=>i.focusVia(n,"program")),s&&(this.expandedHeight=s.expandedHeight,this.collapsedHeight=s.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){const t=this._isExpanded();return t&&this.expandedHeight?this.expandedHeight:!t&&this.collapsedHeight?this.collapsedHeight:null}_keydown(t){switch(t.keyCode){case u.t6:case u.Fm:(0,u.rp)(t)||(t.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(t))}}focus(t,n){t?this._focusMonitor.focusVia(this._element,t,n):this._element.nativeElement.focus(n)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(t=>{t&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static{this.\u0275fac=function(n){return new(n||a)(e.rXU(P,1),e.rXU(e.aKT),e.rXU(_.FN),e.rXU(e.gRc),e.rXU(C,8),e.rXU(e.bc$,8),e.kS0("tabindex"))}}static{this.\u0275cmp=e.VBU({type:a,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(n,i){1&n&&e.bIt("click",function(){return i._toggle()})("keydown",function(s){return i._keydown(s)}),2&n&&(e.BMQ("id",i.panel._headerId)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i._getPanelId())("aria-expanded",i._isExpanded())("aria-disabled",i.panel.disabled),e.xc7("height",i._getHeaderHeight()),e.AVh("mat-expanded",i._isExpanded())("mat-expansion-toggle-indicator-after","after"===i._getTogglePosition())("mat-expansion-toggle-indicator-before","before"===i._getTogglePosition())("_mat-animation-noopable","NoopAnimations"===i._animationMode))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[e.Mj6.HasDecoratorInputTransform,"tabIndex","tabIndex",t=>null==t?0:(0,e.Udg)(t)]},standalone:!0,features:[e.GFd,e.aNF],ngContentSelectors:$,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(n,i){1&n&&(e.NAR(L),e.j41(0,"span",0),e.SdG(1),e.SdG(2,1),e.SdG(3,2),e.k0s(),e.DNE(4,K,3,1,"span",1)),2&n&&(e.AVh("mat-content-hide-toggle",!i._showToggle()),e.R7$(4),e.vxM(4,i._showToggle()?4:-1))},styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-expansion-header-collapsed-state-height);font-family:var(--mat-expansion-header-text-font);font-size:var(--mat-expansion-header-text-size);font-weight:var(--mat-expansion-header-text-weight);line-height:var(--mat-expansion-header-text-line-height);letter-spacing:var(--mat-expansion-header-text-tracking)}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color)}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color)}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color)}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color)}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color);display:inline-block;display:var(--mat-expansion-legacy-header-indicator-display, inline-block)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color);display:none;display:var(--mat-expansion-header-indicator-display, none)}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}'],encapsulation:2,data:{animation:[w.indicatorRotate]},changeDetection:0})}}return a})(),Z=(()=>{class a{static{this.\u0275fac=function(n){return new(n||a)}}static{this.\u0275dir=e.FsC({type:a,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"],standalone:!0})}}return a})(),J=(()=>{class a extends H{constructor(){super(...arguments),this._ownHeaders=new e.rOR,this.hideToggle=!1,this.displayMode="default",this.togglePosition="after"}ngAfterContentInit(){this._headers.changes.pipe((0,M.Z)(this._headers)).subscribe(t=>{this._ownHeaders.reset(t.filter(n=>n.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new _.Bu(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(t){this._keyManager.onKeydown(t)}_handleHeaderFocus(t){this._keyManager.updateActiveItem(t)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static{this.\u0275fac=(()=>{let t;return function(i){return(t||(t=e.xGo(a)))(i||a)}})()}static{this.\u0275dir=e.FsC({type:a,selectors:[["mat-accordion"]],contentQueries:function(n,i,o){if(1&n&&e.wni(o,k,5),2&n){let s;e.mGM(s=e.lsd())&&(i._headers=s)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(n,i){2&n&&e.AVh("mat-accordion-multi",i.multi)},inputs:{hideToggle:[e.Mj6.HasDecoratorInputTransform,"hideToggle","hideToggle",e.L39],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],standalone:!0,features:[e.Jv_([{provide:f,useExisting:a}]),e.GFd,e.Vt3]})}}return a})(),W=(()=>{class a{static{this.\u0275fac=function(n){return new(n||a)}}static{this.\u0275mod=e.$C({type:a})}static{this.\u0275inj=e.G2t({imports:[O.yE,N,x.jc]})}}return a})()}}]);