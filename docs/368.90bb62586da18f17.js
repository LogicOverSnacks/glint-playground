"use strict";(self.webpackChunkgit_glint=self.webpackChunkgit_glint||[]).push([[368],{4745:(q,w,o)=>{o.d(w,{H:()=>f});var I=o(655),D=o(9253),S=o(7625),k=o(9077),i=o(4650);const f=C=>(()=>{class g extends C{constructor(){super(...arguments),this.classBinding=""}ngOnInit(){super.ngOnInit&&super.ngOnInit(),this.theme$.pipe((0,S.R)(this.destroyed$)).subscribe(B=>{this.classBinding=`${B}-theme`})}}return g.\u0275fac=function(){let H;return function(F){return(H||(H=i.n5z(g)))(F||g)}}(),g.\u0275prov=i.Yz7({token:g,factory:g.\u0275fac}),(0,I.gn)([(0,D.Ph)(k.$.theme)],g.prototype,"theme$",void 0),g})()},8368:(q,w,o)=>{o.r(w),o.d(w,{StandardLayoutModule:()=>xt});var I=o(6338),D=o(4385),S=o(3179),k=o(7646),i=o(9734),f=o(7237),C=o(655),P=o(4006),g=o(9253),H=o(3753),B=o(7625),F=o(4810),j=o(9967),tt=o(4745),A=o(6197),et=o(9578),W=o(9077),a=o(4650),G=o(9549),x=o(3238),R=o(6895),Q=o(7392),N=o(3051),U=o(2049),K=o(3848),V=o(591),Z=o(6053),at=o(2986),z=o(4850),it=o(5154),Y=o(4889),nt=o(266),ot=o(1572);function rt(c,m){1&c&&(a.TgZ(0,"mat-icon",8),a._uU(1,"folder"),a.qZA())}function mt(c,m){1&c&&a._UZ(0,"mat-spinner",9)}function _t(c,m){if(1&c){const r=a.EpF();a.TgZ(0,"a",3),a.NdJ("mouseup",function(p){const u=a.CHM(r).$implicit,_=a.oxw();return a.KtG(_.tabClicked(p,u))})("dragstart",function(p){const h=a.CHM(r),u=h.$implicit,_=h.index,y=a.oxw();return a.KtG(y.dragstartListener(p,u,_))})("dragleave",function(){a.CHM(r);const p=a.oxw();return a.KtG(p.dragOverRepositoryIndex.next(null))})("dragover",function(p){const u=a.CHM(r).index,_=a.oxw();return a.KtG(_.dragoverListener(p,u))})("drop",function(p){const u=a.CHM(r).index,_=a.oxw();return a.KtG(_.dropListener(p,u))}),a.ALo(1,"async"),a.ALo(2,"async"),a.ALo(3,"async"),a.TgZ(4,"span",4),a.YNc(5,rt,2,0,"mat-icon",5),a.YNc(6,mt,1,0,"mat-spinner",6),a._uU(7),a.qZA(),a.TgZ(8,"mat-icon",7),a.NdJ("click",function(){const h=a.CHM(r).$implicit,u=a.oxw();return a.KtG(u.closeRepository(h.path))}),a._uU(9,"close"),a.qZA()()}if(2&c){const r=m.$implicit,b=m.index,p=a.oxw();a.ekj("border-left",a.lcZ(1,11,p.hasLeftBorder(b)))("border-right",a.lcZ(2,13,p.hasRightBorder(b))),a.Q6J("matTooltip",r.path)("active",a.lcZ(3,15,p.selectedRepositoryPath)===r.path),a.xp6(4),a.ekj("disabled",!r.loaded),a.xp6(1),a.Q6J("ngIf",r.loaded),a.xp6(1),a.Q6J("ngIf",!r.loaded),a.xp6(1),a.hij(" ",r.name," ")}}let st=(()=>{class c extends((0,F.j)(j.A)){constructor(r,b,p){super(),this.cdr=r,this.router=b,this.store=p,this.dragRepositoryIndex=null,this.dragOverRepositoryIndex=new V.X(null),this.dragPosition=new V.X(null),this.dragstartListener=(h,u,_)=>{h.dataTransfer&&(h.dataTransfer.setData("app/repository",u.path),h.dataTransfer.setData("app/repository-tab",u.path),h.dataTransfer.effectAllowed="move",this.dragRepositoryIndex=_)},this.dragoverListener=(h,u)=>{if(h.dataTransfer&&h.dataTransfer.types.includes("app/repository")){h.preventDefault(),h.dataTransfer.dropEffect="move",this.dragOverRepositoryIndex.value!==u&&this.dragOverRepositoryIndex.next(u);const _=h.target;if(_.draggable){const y=this.getDragoverPosition(h.offsetX,_.clientWidth);this.dragPosition.value!==y&&this.dragPosition.next(y)}}},this.dropListener=(h,u)=>{if(h.dataTransfer&&h.dataTransfer.types.includes("app/repository-tab")){this.dragOverRepositoryIndex.value!==u&&this.dragOverRepositoryIndex.next(u);const _=h.target;if(_.draggable){const y=this.getDragoverPosition(h.offsetX,_.clientWidth);this.dragPosition.value!==y&&this.dragPosition.next(y)}h.preventDefault(),(0,Z.aj)([this.openRepositories,this.visibleRepositories]).pipe((0,B.R)(this.destroyed$),(0,at.q)(1)).subscribe(([y,ht])=>{const pt=u+("right"===this.dragPosition.value?1:0);if(null!==this.dragRepositoryIndex&&pt>=0){const Mt=ht[this.dragRepositoryIndex].path,ut=ht[pt]?.path,E=y.findIndex(L=>L.path===Mt),O=ut?y.findIndex(L=>L.path===ut):y.length,ft=E>O?[...y.slice(0,O),y[E],...y.filter((L,$)=>$!==E).slice(O)]:E<O?[...y.slice(0,O).filter((L,$)=>$!==E),y[E],...y.slice(O)]:y;this.store.dispatch(new Y.jq(ft.map(L=>L.path)))}})}this.dragRepositoryIndex=null,this.dragOverRepositoryIndex.next(null),this.dragPosition.next(null)},this.hasLeftBorder=h=>(0,Z.aj)([this.dragOverRepositoryIndex,this.dragPosition]).pipe((0,z.U)(([u,_])=>u===h&&"left"===_||u===h-1&&"right"===_)),this.hasRightBorder=h=>(0,Z.aj)([this.dragOverRepositoryIndex,this.dragPosition]).pipe((0,z.U)(([u,_])=>u===h&&"right"===_||u===h+1&&"left"===_)),this.getDragoverPosition=(h,u)=>h/u<.5?"left":"right"}documentKeydown(r){if(!r.isComposing&&r.ctrlKey&&!r.altKey&&!r.metaKey)switch(r.key){case"W":case"w":if(!r.shiftKey){const b=this.store.selectSnapshot(A.E.selectedRepositoryPath);b&&this.closeRepository(b)}break;case"T":case"t":r.shiftKey||this.openNewRepository();break;case"Tab":{const b=this.store.selectSnapshot(A.E.selectedRepositoryPath);this.visibleRepositories.pipe((0,at.q)(1)).subscribe(p=>{const h=b?p.findIndex(_=>_.path===b):p.length;if(h<0)throw new Error(`Repository with path ${b} not found`);let u=h+(r.shiftKey?-1:1);u>=p.length?u=0:u<0&&(u=p.length-1),this.changeRepository(p[u].path)});break}}}documentMouseDown(r){1===r.button&&r.preventDefault()}ngOnInit(){this.visibleRepositories=(0,Z.aj)([this.openRepositories,this.profile]).pipe((0,z.U)(([r,b])=>b&&"all"!==b.allowedRepositories?r.filter(p=>b.allowedRepositories.includes(p.path)):r),(0,it.d)(1))}ngAfterViewInit(){setTimeout(()=>{this.matTabNav._alignInkBarToSelectedTab(),this.cdr.markForCheck()},100),setTimeout(()=>{this.matTabNav._alignInkBarToSelectedTab(),this.cdr.markForCheck()},1e3)}trackRepository(r,b){return b.path}tabClicked(r,b){switch(r.button){case 0:b.loaded&&this.changeRepository(b.path);break;case 1:this.closeRepository(b.path)}}changeRepository(r){this.store.dispatch(new Y.BZ(r)).subscribe(()=>{this.router.navigate(["/"])})}closeRepository(r){this.store.dispatch(new Y.F$(r))}openNewRepository(){this.store.dispatch(new Y.BZ(null)).subscribe(()=>{this.router.navigate(["/standard/open-repository"])})}}return c.\u0275fac=function(r){return new(r||c)(a.Y36(a.sBO),a.Y36(f.F0),a.Y36(g.yh))},c.\u0275cmp=a.Xpm({type:c,selectors:[["app-repository-tabs-view"]],viewQuery:function(r,b){if(1&r&&a.Gf(K.BU,5),2&r){let p;a.iGM(p=a.CRH())&&(b.matTabNav=p.first)}},hostBindings:function(r,b){1&r&&a.NdJ("keydown",function(h){return b.documentKeydown(h)},!1,a.evT)("mousedown",function(h){return b.documentMouseDown(h)},!1,a.evT)},features:[a.qOj],decls:7,vars:7,consts:[["mat-tab-nav-bar",""],["mat-tab-link","","draggable","true",3,"border-left","border-right","matTooltip","active","mouseup","dragstart","dragleave","dragover","drop",4,"ngFor","ngForOf","ngForTrackBy"],["mat-tab-link","","matTooltip","Open a new repository",1,"new-tab-link",3,"active","click"],["mat-tab-link","","draggable","true",3,"matTooltip","active","mouseup","dragstart","dragleave","dragover","drop"],[1,"name"],["inline","","class","prefix",4,"ngIf"],["class","prefix","diameter","18",4,"ngIf"],["inline","","draggable","false",1,"suffix",3,"click"],["inline","",1,"prefix"],["diameter","18",1,"prefix"]],template:function(r,b){1&r&&(a.TgZ(0,"nav",0),a.YNc(1,_t,10,17,"a",1),a.ALo(2,"async"),a.TgZ(3,"a",2),a.NdJ("click",function(){return b.openNewRepository()}),a.ALo(4,"async"),a.TgZ(5,"mat-icon"),a._uU(6,"add"),a.qZA()()()),2&r&&(a.xp6(1),a.Q6J("ngForOf",a.lcZ(2,3,b.visibleRepositories))("ngForTrackBy",b.trackRepository),a.xp6(2),a.Q6J("active",null===a.lcZ(4,5,b.selectedRepositoryPath)))},dependencies:[R.sg,R.O5,Q.Hw,nt.gM,ot.Ou,K.BU,K.Nj,R.Ov],styles:['.mat-tab-link[_ngcontent-%COMP%]{position:relative;line-height:48px;display:flex;justify-content:space-between;padding:0 18px;min-width:120px}.mat-tab-link[_ngcontent-%COMP%]:before, .mat-tab-link[_ngcontent-%COMP%]:after{content:"";display:block;position:absolute;height:100%;width:1px;background-color:transparent}.mat-tab-link[_ngcontent-%COMP%]:before{left:0}.mat-tab-link[_ngcontent-%COMP%]:after{right:0}.mat-tab-link[_ngcontent-%COMP%]:first-child:before{width:2px}.mat-tab-link[_ngcontent-%COMP%]:nth-last-child(2):after{width:2px}.mat-tab-link.border-left[_ngcontent-%COMP%]:before{background-color:#78909c}.mat-tab-link.border-right[_ngcontent-%COMP%]:after{background-color:#78909c}.mat-tab-link[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{pointer-events:none}.mat-tab-link[_ngcontent-%COMP%]   .name.disabled[_ngcontent-%COMP%]{color:#ffffff80}.mat-tab-link[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}.mat-tab-link[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%]{margin-right:10px;vertical-align:top}.mat-tab-link[_ngcontent-%COMP%]   .suffix[_ngcontent-%COMP%]{margin-left:5px}.new-tab-link[_ngcontent-%COMP%]{min-width:48px}'],changeDetection:0}),(0,C.gn)([(0,g.Ph)(A.E.selectedRepositoryPath)],c.prototype,"selectedRepositoryPath",void 0),(0,C.gn)([(0,g.Ph)(A.E.openRepositories)],c.prototype,"openRepositories",void 0),(0,C.gn)([(0,g.Ph)(W.$.selectedProfile)],c.prototype,"profile",void 0),c})();const lt=["header"];function dt(c,m){if(1&c&&a._UZ(0,"app-avatar",7),2&c){const r=a.oxw().ngIf;a.Q6J("email",r.email)}}function gt(c,m){if(1&c&&(a.TgZ(0,"span"),a.YNc(1,dt,1,1,"app-avatar",6),a._uU(2),a.qZA()),2&c){const r=m.ngIf;a.xp6(1),a.Q6J("ngIf",r.email),a.xp6(1),a.hij(" ",r.profileName," ")}}function vt(c,m){if(1&c&&a._UZ(0,"app-avatar",10),2&c){const r=a.oxw().$implicit;a.Q6J("email",r.value.email)}}function ct(c,m){if(1&c&&(a.TgZ(0,"mat-option",8),a.YNc(1,vt,1,1,"app-avatar",9),a._uU(2),a.qZA()),2&c){const r=m.$implicit;a.Q6J("value",r.key),a.xp6(1),a.Q6J("ngIf",r.value.email),a.xp6(1),a.hij(" ",r.value.profileName," ")}}const bt=function(){return["/settings"]},J=[{path:"",component:(()=>{class c extends((0,F.j)(j.A,tt.H)){constructor(r,b){super(),this.router=r,this.store=b,this.selectedProfileControl=new P.NI(null)}ngOnInit(){super.ngOnInit(),this.selectedRepositoryPath.pipe((0,B.R)(this.destroyed$)).subscribe(r=>{null===r&&this.router.navigate(["/standard/open-repository"])}),this.selectedProfileId.pipe((0,B.R)(this.destroyed$)).subscribe(r=>{this.selectedProfileControl.setValue(r,{emitEvent:!1})}),this.selectedProfileControl.valueChanges.pipe((0,B.R)(this.destroyed$)).subscribe(r=>{null!==r&&this.store.dispatch(new et.Pt(r))}),(0,H.R)(this.headerElement.nativeElement,"wheel",{passive:!0}).pipe((0,B.R)(this.destroyed$)).subscribe(r=>{this.headerElement.nativeElement.scrollLeft+=r.deltaY})}}return c.\u0275fac=function(r){return new(r||c)(a.Y36(f.F0),a.Y36(g.yh))},c.\u0275cmp=a.Xpm({type:c,selectors:[["ng-component"]],viewQuery:function(r,b){if(1&r&&a.Gf(lt,7),2&r){let p;a.iGM(p=a.CRH())&&(b.headerElement=p.first)}},features:[a.qOj],decls:18,vars:11,consts:[["header",""],["appearance","fill",1,"profile-selector"],[3,"formControl"],[4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],[1,"settings-icon",3,"routerLink"],[3,"email",4,"ngIf"],[3,"email"],[3,"value"],["class","profile-select-avatar",3,"email",4,"ngIf"],[1,"profile-select-avatar",3,"email"]],template:function(r,b){1&r&&(a.TgZ(0,"header",null,0),a._UZ(2,"app-repository-tabs-view"),a.TgZ(3,"mat-form-field",1)(4,"mat-label"),a._uU(5,"Select Profile"),a.qZA(),a.TgZ(6,"mat-select",2)(7,"mat-select-trigger"),a.YNc(8,gt,3,2,"span",3),a.ALo(9,"async"),a.qZA(),a.YNc(10,ct,3,3,"mat-option",4),a.ALo(11,"keyvalue"),a.ALo(12,"async"),a.qZA()(),a.TgZ(13,"mat-icon",5),a._uU(14,"settings"),a.qZA()(),a._UZ(15,"router-outlet")(16,"footer")(17,"app-errors-tray-view")),2&r&&(a.xp6(6),a.Q6J("formControl",b.selectedProfileControl),a.xp6(2),a.Q6J("ngIf",a.lcZ(9,4,b.selectedProfile)),a.xp6(2),a.Q6J("ngForOf",a.lcZ(11,6,a.lcZ(12,8,b.profiles))),a.xp6(3),a.Q6J("routerLink",a.DdM(10,bt)))},dependencies:[G.KE,G.hX,D.gD,D.$L,x.ey,R.sg,R.O5,P.JJ,P.oH,Q.Hw,N.A,U.c,st,f.lC,f.rH,R.Ov,R.Nd],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}.dark-theme[_nghost-%COMP%]   header[_ngcontent-%COMP%]{border-bottom-color:#ffffff1f}header[_ngcontent-%COMP%]{display:flex;height:50px;min-height:50px;border-bottom:1px solid transparent;overflow-x:auto;overflow-y:hidden}header[_ngcontent-%COMP%]::-webkit-scrollbar{height:1px}header[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#78909c}header[_ngcontent-%COMP%]   app-repository-tabs-view[_ngcontent-%COMP%]{flex:1 0 auto}header[_ngcontent-%COMP%]   app-repository-tabs-view[_ngcontent-%COMP%]     .mat-tab-nav-bar{border:none}header[_ngcontent-%COMP%]   .profile-selector[_ngcontent-%COMP%]{width:200px;margin-right:12px}header[_ngcontent-%COMP%]   .profile-selector[_ngcontent-%COMP%]   mat-select-trigger[_ngcontent-%COMP%]   app-avatar[_ngcontent-%COMP%]{height:15px;vertical-align:middle}header[_ngcontent-%COMP%]   .profile-selector[_ngcontent-%COMP%]     .mat-form-field-wrapper{padding-bottom:0}header[_ngcontent-%COMP%]   .profile-selector[_ngcontent-%COMP%]     .mat-form-field-wrapper>.mat-form-field-flex{border-radius:0;padding-top:calc(.75em - 1.5px)}header[_ngcontent-%COMP%]   .profile-selector[_ngcontent-%COMP%]     .mat-form-field-wrapper>.mat-form-field-flex>.mat-form-field-infix{padding-bottom:calc(.75em - 1.5px)}header[_ngcontent-%COMP%]   .profile-selector[_ngcontent-%COMP%]     .mat-form-field-underline{bottom:0}header[_ngcontent-%COMP%]   .settings-icon[_ngcontent-%COMP%]{margin:12px;cursor:pointer}app-errors-tray-view[_ngcontent-%COMP%]{position:fixed;bottom:10px;left:10px;margin-right:10px;margin-top:10px;z-index:6000}"],changeDetection:0}),(0,C.gn)([(0,g.Ph)(W.$.profiles)],c.prototype,"profiles",void 0),(0,C.gn)([(0,g.Ph)(W.$.selectedProfileId)],c.prototype,"selectedProfileId",void 0),(0,C.gn)([(0,g.Ph)(W.$.selectedProfile)],c.prototype,"selectedProfile",void 0),(0,C.gn)([(0,g.Ph)(A.E.selectedRepositoryPath)],c.prototype,"selectedRepositoryPath",void 0),c})(),children:[{path:"default",loadChildren:()=>Promise.all([o.e(786),o.e(84),o.e(150),o.e(841),o.e(925),o.e(592),o.e(180)]).then(o.bind(o,5180)).then(c=>c.DefaultLayoutModule)},{path:"open-repository",loadChildren:()=>Promise.all([o.e(786),o.e(84),o.e(795),o.e(592),o.e(548)]).then(o.bind(o,3548)).then(c=>c.OpenRepositoryLayoutModule)},{path:"rebase",loadChildren:()=>Promise.all([o.e(786),o.e(150),o.e(925),o.e(283)]).then(o.bind(o,6283)).then(c=>c.RebaseLayoutModule)},{path:"search",loadChildren:()=>Promise.all([o.e(786),o.e(84),o.e(150),o.e(459)]).then(o.bind(o,5459)).then(c=>c.SearchLayoutModule)},{path:"",redirectTo:"default",pathMatch:"full"}]}];let yt=(()=>{class c{}return c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=a.oAB({type:c}),c.\u0275inj=a.cJS({imports:[f.Bz.forChild(J),f.Bz]}),c})(),xt=(()=>{class c{}return c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=a.oAB({type:c}),c.\u0275inj=a.cJS({imports:[I.ie,D.LD,S.I,k.P,i.Z,yt]}),c})()},9734:(q,w,o)=>{o.d(w,{Z:()=>i});var I=o(1572),D=o(3848),S=o(3179),k=o(4650);let i=(()=>{class f{}return f.\u0275fac=function(P){return new(P||f)},f.\u0275mod=k.oAB({type:f}),f.\u0275inj=k.cJS({imports:[S.I,I.Cq,D.Nh]}),f})()},3848:(q,w,o)=>{o.d(w,{BU:()=>Pt,Nh:()=>Ot,Nj:()=>Rt});var I=o(2687),D=o(9643),S=o(4080),k=o(6895),i=o(4650),f=o(3238),C=o(2986),P=o(7625),g=o(1059),H=o(7545),B=o(1307),F=o(8929),j=o(3753),tt=o(1086),A=o(6787),et=o(8896),W=o(6498),a=o(8723),G=o(445),R=(o(7340),o(1281)),Q=o(3668),N=o(3353),U=o(9521);const V=["*"],it=["tabListContainer"],Y=["tabList"],nt=["tabListInner"],ot=["nextPaginator"],rt=["previousPaginator"],ct=["mat-tab-nav-bar",""],bt=new i.OlP("MatInkBarPositioner",{providedIn:"root",factory:function Tt(){return l=>({left:l?(l.offsetLeft||0)+"px":"0",width:l?(l.offsetWidth||0)+"px":"0"})}});let J=(()=>{class s{constructor(t,e,n,d){this._elementRef=t,this._ngZone=e,this._inkBarPositioner=n,this._animationMode=d}alignToElement(t){this.show(),this._ngZone.onStable.pipe((0,C.q)(1)).subscribe(()=>{const e=this._inkBarPositioner(t),n=this._elementRef.nativeElement;n.style.left=e.left,n.style.width=e.width})}show(){this._elementRef.nativeElement.style.visibility="visible"}hide(){this._elementRef.nativeElement.style.visibility="hidden"}}return s.\u0275fac=function(t){return new(t||s)(i.Y36(i.SBq),i.Y36(i.R0b),i.Y36(bt),i.Y36(i.QbO,8))},s.\u0275dir=i.lG2({type:s,selectors:[["mat-ink-bar"]],hostAttrs:[1,"mat-ink-bar"],hostVars:2,hostBindings:function(t,e){2&t&&i.ekj("_mat-animation-noopable","NoopAnimations"===e._animationMode)}}),s})();const E=(0,N.i$)({passive:!0});let $=(()=>{class s{constructor(t,e,n,d,T,v,M){this._elementRef=t,this._changeDetectorRef=e,this._viewportRuler=n,this._dir=d,this._ngZone=T,this._platform=v,this._animationMode=M,this._scrollDistance=0,this._selectedIndexChanged=!1,this._destroyed=new F.xQ,this._showPaginationControls=!1,this._disableScrollAfter=!0,this._disableScrollBefore=!0,this._stopScrolling=new F.xQ,this._disablePagination=!1,this._selectedIndex=0,this.selectFocusedIndex=new i.vpe,this.indexFocused=new i.vpe,T.runOutsideAngular(()=>{(0,j.R)(t.nativeElement,"mouseleave").pipe((0,P.R)(this._destroyed)).subscribe(()=>{this._stopInterval()})})}get disablePagination(){return this._disablePagination}set disablePagination(t){this._disablePagination=(0,R.Ig)(t)}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){t=(0,R.su)(t),this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}ngAfterViewInit(){(0,j.R)(this._previousPaginator.nativeElement,"touchstart",E).pipe((0,P.R)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("before")}),(0,j.R)(this._nextPaginator.nativeElement,"touchstart",E).pipe((0,P.R)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("after")})}ngAfterContentInit(){const t=this._dir?this._dir.change:(0,tt.of)("ltr"),e=this._viewportRuler.change(150),n=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new I.Em(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap(),this._keyManager.updateActiveItem(this._selectedIndex),this._ngZone.onStable.pipe((0,C.q)(1)).subscribe(n),(0,A.T)(t,e,this._items.changes,this._itemsResized()).pipe((0,P.R)(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),n()})}),this._keyManager.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.pipe((0,P.R)(this._destroyed)).subscribe(d=>{this.indexFocused.emit(d),this._setTabFocus(d)})}_itemsResized(){return"function"!=typeof ResizeObserver?et.E:this._items.changes.pipe((0,g.O)(this._items),(0,H.w)(t=>new W.y(e=>this._ngZone.runOutsideAngular(()=>{const n=new ResizeObserver(()=>{e.next()});return t.forEach(d=>{n.observe(d.elementRef.nativeElement)}),()=>{n.disconnect()}}))),(0,B.T)(1))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!(0,U.Vb)(t))switch(t.keyCode){case U.K5:case U.L_:this.focusIndex!==this.selectedIndex&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t));break;default:this._keyManager.onKeydown(t)}}_onContentChanges(){const t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){if(!this._items)return!0;const e=this._items?this._items.toArray()[t]:null;return!!e&&!e.disabled}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();const e=this._tabListContainer.nativeElement;e.scrollLeft="ltr"==this._getLayoutDirection()?0:e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;const t=this.scrollDistance,e="ltr"===this._getLayoutDirection()?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){return this._scrollTo(this._scrollDistance+("before"==t?-1:1)*this._tabListContainer.nativeElement.offsetWidth/3)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;const e=this._items?this._items.toArray()[t]:null;if(!e)return;const n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:d,offsetWidth:T}=e.elementRef.nativeElement;let v,M;"ltr"==this._getLayoutDirection()?(v=d,M=v+T):(M=this._tabListInner.nativeElement.offsetWidth-d,v=M-T);const X=this.scrollDistance,It=this.scrollDistance+n;v<X?this.scrollDistance-=X-v+60:M>It&&(this.scrollDistance+=M-It+60)}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{const t=this._tabListInner.nativeElement.scrollWidth>this._elementRef.nativeElement.offsetWidth;t||(this.scrollDistance=0),t!==this._showPaginationControls&&this._changeDetectorRef.markForCheck(),this._showPaginationControls=t}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=0==this.scrollDistance,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){const t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&null!=e.button&&0!==e.button||(this._stopInterval(),(0,a.H)(650,100).pipe((0,P.R)((0,A.T)(this._stopScrolling,this._destroyed))).subscribe(()=>{const{maxScrollDistance:n,distance:d}=this._scrollHeader(t);(0===d||d>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};const e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}}return s.\u0275fac=function(t){return new(t||s)(i.Y36(i.SBq),i.Y36(i.sBO),i.Y36(Q.rL),i.Y36(G.Is,8),i.Y36(i.R0b),i.Y36(N.t4),i.Y36(i.QbO,8))},s.\u0275dir=i.lG2({type:s,inputs:{disablePagination:"disablePagination"}}),s})(),Dt=0,Ct=(()=>{class s extends ${constructor(t,e,n,d,T,v,M){super(t,d,T,e,n,v,M),this._disableRipple=!1,this.color="primary"}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){const e=this._elementRef.nativeElement.classList;e.remove(`mat-background-${this.backgroundColor}`),t&&e.add(`mat-background-${t}`),this._backgroundColor=t}get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=(0,R.Ig)(t)}_itemSelected(){}ngAfterContentInit(){this._items.changes.pipe((0,g.O)(null),(0,P.R)(this._destroyed)).subscribe(()=>{this.updateActiveLink()}),super.ngAfterContentInit()}updateActiveLink(){if(!this._items)return;const t=this._items.toArray();for(let e=0;e<t.length;e++)if(t[e].active)return this.selectedIndex=e,this._changeDetectorRef.markForCheck(),void(this.tabPanel&&(this.tabPanel._activeTabId=t[e].id));this.selectedIndex=-1,this._inkBar.hide()}_getRole(){return this.tabPanel?"tablist":this._elementRef.nativeElement.getAttribute("role")}}return s.\u0275fac=function(t){return new(t||s)(i.Y36(i.SBq),i.Y36(G.Is,8),i.Y36(i.R0b),i.Y36(i.sBO),i.Y36(Q.rL),i.Y36(N.t4),i.Y36(i.QbO,8))},s.\u0275dir=i.lG2({type:s,inputs:{backgroundColor:"backgroundColor",disableRipple:"disableRipple",color:"color",tabPanel:"tabPanel"},features:[i.qOj]}),s})(),Pt=(()=>{class s extends Ct{constructor(t,e,n,d,T,v,M){super(t,e,n,d,T,v,M)}}return s.\u0275fac=function(t){return new(t||s)(i.Y36(i.SBq),i.Y36(G.Is,8),i.Y36(i.R0b),i.Y36(i.sBO),i.Y36(Q.rL),i.Y36(N.t4),i.Y36(i.QbO,8))},s.\u0275cmp=i.Xpm({type:s,selectors:[["","mat-tab-nav-bar",""]],contentQueries:function(t,e,n){if(1&t&&i.Suo(n,Rt,5),2&t){let d;i.iGM(d=i.CRH())&&(e._items=d)}},viewQuery:function(t,e){if(1&t&&(i.Gf(J,7),i.Gf(it,7),i.Gf(Y,7),i.Gf(nt,7),i.Gf(ot,5),i.Gf(rt,5)),2&t){let n;i.iGM(n=i.CRH())&&(e._inkBar=n.first),i.iGM(n=i.CRH())&&(e._tabListContainer=n.first),i.iGM(n=i.CRH())&&(e._tabList=n.first),i.iGM(n=i.CRH())&&(e._tabListInner=n.first),i.iGM(n=i.CRH())&&(e._nextPaginator=n.first),i.iGM(n=i.CRH())&&(e._previousPaginator=n.first)}},hostAttrs:[1,"mat-tab-nav-bar","mat-tab-header"],hostVars:11,hostBindings:function(t,e){2&t&&(i.uIk("role",e._getRole()),i.ekj("mat-tab-header-pagination-controls-enabled",e._showPaginationControls)("mat-tab-header-rtl","rtl"==e._getLayoutDirection())("mat-primary","warn"!==e.color&&"accent"!==e.color)("mat-accent","accent"===e.color)("mat-warn","warn"===e.color))},inputs:{color:"color"},exportAs:["matTabNavBar","matTabNav"],features:[i.qOj],attrs:ct,ngContentSelectors:V,decls:14,vars:10,consts:[["aria-hidden","true","type","button","mat-ripple","","tabindex","-1",1,"mat-tab-header-pagination","mat-tab-header-pagination-before","mat-elevation-z4",3,"matRippleDisabled","disabled","click","mousedown","touchend"],["previousPaginator",""],[1,"mat-tab-header-pagination-chevron"],[1,"mat-tab-link-container",3,"keydown"],["tabListContainer",""],[1,"mat-tab-list",3,"cdkObserveContent"],["tabList",""],[1,"mat-tab-links"],["tabListInner",""],["aria-hidden","true","type","button","mat-ripple","","tabindex","-1",1,"mat-tab-header-pagination","mat-tab-header-pagination-after","mat-elevation-z4",3,"matRippleDisabled","disabled","mousedown","click","touchend"],["nextPaginator",""]],template:function(t,e){1&t&&(i.F$t(),i.TgZ(0,"button",0,1),i.NdJ("click",function(){return e._handlePaginatorClick("before")})("mousedown",function(d){return e._handlePaginatorPress("before",d)})("touchend",function(){return e._stopInterval()}),i._UZ(2,"div",2),i.qZA(),i.TgZ(3,"div",3,4),i.NdJ("keydown",function(d){return e._handleKeydown(d)}),i.TgZ(5,"div",5,6),i.NdJ("cdkObserveContent",function(){return e._onContentChanges()}),i.TgZ(7,"div",7,8),i.Hsn(9),i.qZA(),i._UZ(10,"mat-ink-bar"),i.qZA()(),i.TgZ(11,"button",9,10),i.NdJ("mousedown",function(d){return e._handlePaginatorPress("after",d)})("click",function(){return e._handlePaginatorClick("after")})("touchend",function(){return e._stopInterval()}),i._UZ(13,"div",2),i.qZA()),2&t&&(i.ekj("mat-tab-header-pagination-disabled",e._disableScrollBefore),i.Q6J("matRippleDisabled",e._disableScrollBefore||e.disableRipple)("disabled",e._disableScrollBefore||null),i.xp6(5),i.ekj("_mat-animation-noopable","NoopAnimations"===e._animationMode),i.xp6(6),i.ekj("mat-tab-header-pagination-disabled",e._disableScrollAfter),i.Q6J("matRippleDisabled",e._disableScrollAfter||e.disableRipple)("disabled",e._disableScrollAfter||null))},dependencies:[f.wG,D.wD,J],styles:[".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;background:none;border:none;outline:0;padding:0}.mat-tab-header-pagination::-moz-focus-inner{border:0}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar._mat-animation-noopable{transition:none !important;animation:none !important}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}"],encapsulation:2}),s})();const Bt=(0,f.sb)((0,f.Kr)((0,f.Id)(class{})));let Et=(()=>{class s extends Bt{constructor(t,e,n,d,T,v){super(),this._tabNavBar=t,this.elementRef=e,this._focusMonitor=T,this._isActive=!1,this.id="mat-tab-link-"+Dt++,this.rippleConfig=n||{},this.tabIndex=parseInt(d)||0,"NoopAnimations"===v&&(this.rippleConfig.animation={enterDuration:0,exitDuration:0})}get active(){return this._isActive}set active(t){const e=(0,R.Ig)(t);e!==this._isActive&&(this._isActive=e,this._tabNavBar.updateActiveLink())}get rippleDisabled(){return this.disabled||this.disableRipple||this._tabNavBar.disableRipple||!!this.rippleConfig.disabled}focus(){this.elementRef.nativeElement.focus()}ngAfterViewInit(){this._focusMonitor.monitor(this.elementRef)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this.elementRef)}_handleFocus(){this._tabNavBar.focusIndex=this._tabNavBar._items.toArray().indexOf(this)}_handleKeydown(t){this._tabNavBar.tabPanel&&t.keyCode===U.L_&&this.elementRef.nativeElement.click()}_getAriaControls(){return this._tabNavBar.tabPanel?this._tabNavBar.tabPanel?.id:this.elementRef.nativeElement.getAttribute("aria-controls")}_getAriaSelected(){return this._tabNavBar.tabPanel?this.active?"true":"false":this.elementRef.nativeElement.getAttribute("aria-selected")}_getAriaCurrent(){return this.active&&!this._tabNavBar.tabPanel?"page":null}_getRole(){return this._tabNavBar.tabPanel?"tab":this.elementRef.nativeElement.getAttribute("role")}_getTabIndex(){return this._tabNavBar.tabPanel?this._isActive&&!this.disabled?0:-1:this.tabIndex}}return s.\u0275fac=function(t){return new(t||s)(i.Y36(Ct),i.Y36(i.SBq),i.Y36(f.Y2,8),i.$8M("tabindex"),i.Y36(I.tE),i.Y36(i.QbO,8))},s.\u0275dir=i.lG2({type:s,inputs:{active:"active",id:"id"},features:[i.qOj]}),s})(),Rt=(()=>{class s extends Et{constructor(t,e,n,d,T,v,M,X){super(t,e,T,v,M,X),this._tabLinkRipple=new f.IR(this,n,e,d),this._tabLinkRipple.setupTriggerEvents(e.nativeElement)}ngOnDestroy(){super.ngOnDestroy(),this._tabLinkRipple._removeTriggerEvents()}}return s.\u0275fac=function(t){return new(t||s)(i.Y36(Pt),i.Y36(i.SBq),i.Y36(i.R0b),i.Y36(N.t4),i.Y36(f.Y2,8),i.$8M("tabindex"),i.Y36(I.tE),i.Y36(i.QbO,8))},s.\u0275dir=i.lG2({type:s,selectors:[["","mat-tab-link",""],["","matTabLink",""]],hostAttrs:[1,"mat-tab-link","mat-focus-indicator"],hostVars:11,hostBindings:function(t,e){1&t&&i.NdJ("focus",function(){return e._handleFocus()})("keydown",function(d){return e._handleKeydown(d)}),2&t&&(i.uIk("aria-controls",e._getAriaControls())("aria-current",e._getAriaCurrent())("aria-disabled",e.disabled)("aria-selected",e._getAriaSelected())("id",e.id)("tabIndex",e._getTabIndex())("role",e._getRole()),i.ekj("mat-tab-disabled",e.disabled)("mat-tab-label-active",e.active))},inputs:{disabled:"disabled",disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matTabLink"],features:[i.qOj]}),s})(),Ot=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=i.oAB({type:s}),s.\u0275inj=i.cJS({imports:[k.ez,f.BQ,S.eL,f.si,D.Q8,I.rt,f.BQ]}),s})()}}]);