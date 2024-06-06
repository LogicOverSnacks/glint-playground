"use strict";(self.webpackChunkgit_glint=self.webpackChunkgit_glint||[]).push([[572],{3572:(et,b,s)=>{s.r(b),s.d(b,{SearchLayoutModule:()=>Yt});var V=s(1117),C=s(5351),R=s(9454),v=s(2102),S=s(9042),B=s(9115),I=s(9183),N=s(2489),w=s(9563),t=s(4438);let L=(()=>{class o{static{this.\u0275fac=function(n){return new(n||o)}}static{this.\u0275mod=t.$C({type:o})}static{this.\u0275inj=t.G2t({imports:[C.hM,R.MY,v.RG,S.fS,B.Cn,I.D6,V.U,N.A,w.Z]})}}return o})();var M=s(2724),Y=s(1413),y=s(3130),_=s(949),F=s(9417),T=s(4412),W=s(4572),nt=s(152),K=s(5964),D=s(9172),A=s(6977),h=s(8169),d=s(9843),g=s(177),$=s(8834),U=s(9213),E=s(4823),J=s(1751);const it=["input"],ot=o=>({count:o});function st(o,l){if(1&o&&(t.j41(0,"mat-error"),t.EFF(1),t.k0s()),2&o){const e=t.XpG();t.R7$(),t.JRh(e.searchTextControl.getError("regex"))}}function at(o,l){1&o&&t.nrm(0,"mat-spinner",12)}function lt(o,l){if(1&o&&(t.j41(0,"div",10),t.DNE(1,at,1,0,"mat-spinner",11),t.EFF(2),t.nI1(3,"translate"),t.nI1(4,"translate"),t.k0s()),2&o){const e=l.ngIf;t.R7$(),t.Y8G("ngIf","ongoing"===e),t.R7$(),t.SpI(" ",e?"ongoing"===e?t.bMT(3,2,"Searching..."):t.i5U(4,4,"Found _count_ results",t.eq3(7,ot,e.found)):"","\n")}}let rt=(()=>{class o extends((0,y.c)(_.N)){constructor(e,n){super(),this.router=e,this.store=n,this.searchTextControl=new F.MJ(this.store.selectSnapshot(h.IY.searchText),{nonNullable:!0,validators:i=>{if(this.useRegularExpressionControl?.value)try{new RegExp(i.value,"g")}catch(a){return{regex:a.message}}return null}}),this.matchCaseControl=new F.MJ(!1,{nonNullable:!0}),this.useRegularExpressionControl=new F.MJ(!1,{nonNullable:!0}),this.searchStatus=new T.t(null)}ngOnInit(){this.inputElement.nativeElement.focus(),(0,W.z)([this.searchTextControl.valueChanges.pipe((0,nt.B)(200),(0,K.p)(()=>this.searchTextControl.valid),(0,D.Z)(this.searchTextControl.value)),this.matchCaseControl.valueChanges.pipe((0,D.Z)(this.matchCaseControl.value)),this.useRegularExpressionControl.valueChanges.pipe((0,D.Z)(this.useRegularExpressionControl.value))]).pipe((0,A.Q)(this.destroyed$)).subscribe(([e,n,i])=>{this.searchTextControl.updateValueAndValidity({emitEvent:!1}),this.searchStatus.next(e?"ongoing":null),this.store.dispatch(new h.vj(e,n,i))}),this.completed.pipe((0,A.Q)(this.destroyed$)).subscribe(e=>{this.searchStatus.next(null===e?this.searchTextControl.value?"ongoing":null:{found:e})})}close(){this.router.navigate(["/standard/default"])}clear(){this.searchTextControl.value?this.searchTextControl.setValue(""):(this.store.dispatch(new h.vj("",this.matchCaseControl.value,this.useRegularExpressionControl.value)),this.close())}static{this.\u0275fac=function(n){return new(n||o)(t.rXU(M.Ix),t.rXU(d.il))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-search-action-view"]],viewQuery:function(n,i){if(1&n&&t.GBs(it,7,t.aKT),2&n){let a;t.mGM(a=t.lsd())&&(i.inputElement=a.first)}},inputs:{completed:"completed"},features:[t.Vt3],decls:25,vars:24,consts:[["input",""],["matPrefix",""],["type","text","matInput","",3,"formControl","placeholder"],["type","button","matSuffix","","mat-button","","disableRipple","",3,"click","matTooltip"],["svgIcon","format-letter-case"],["svgIcon","regex"],["type","button","matSuffix","","mat-button","",3,"click","matTooltip"],[4,"ngIf"],["class","result-text",4,"ngIf"],["type","button","mat-icon-button","",1,"close-button","app-icon-button-md",3,"click"],[1,"result-text"],["diameter","24",4,"ngIf"],["diameter","24"]],template:function(n,i){if(1&n){const a=t.RV6();t.j41(0,"mat-form-field")(1,"mat-label"),t.EFF(2),t.nI1(3,"translate"),t.k0s(),t.j41(4,"mat-icon",1),t.EFF(5,"search"),t.k0s(),t.nrm(6,"input",2,0),t.nI1(8,"translate"),t.j41(9,"button",3),t.nI1(10,"translate"),t.bIt("click",function(){return t.eBV(a),t.Njj(i.matchCaseControl.setValue(!i.matchCaseControl.value))}),t.nrm(11,"mat-icon",4),t.k0s(),t.j41(12,"button",3),t.nI1(13,"translate"),t.bIt("click",function(){return t.eBV(a),t.Njj(i.useRegularExpressionControl.setValue(!i.useRegularExpressionControl.value))}),t.nrm(14,"mat-icon",5),t.k0s(),t.j41(15,"button",6),t.nI1(16,"translate"),t.bIt("click",function(){return t.eBV(a),t.Njj(i.clear())}),t.j41(17,"mat-icon"),t.EFF(18,"close"),t.k0s()(),t.DNE(19,st,2,1,"mat-error",7),t.k0s(),t.DNE(20,lt,5,9,"div",8),t.nI1(21,"async"),t.j41(22,"button",9),t.bIt("click",function(){return t.eBV(a),t.Njj(i.close())}),t.j41(23,"mat-icon"),t.EFF(24,"close"),t.k0s()()}2&n&&(t.R7$(2),t.JRh(t.bMT(3,12,"Find")),t.R7$(4),t.FS9("placeholder",t.bMT(8,14,"Enter search text...")),t.Y8G("formControl",i.searchTextControl),t.R7$(3),t.AVh("selected",i.matchCaseControl.value),t.Y8G("matTooltip",t.bMT(10,16,"Match case")),t.R7$(3),t.AVh("selected",i.useRegularExpressionControl.value),t.Y8G("matTooltip",t.bMT(13,18,"Use regular expression")),t.R7$(3),t.Y8G("matTooltip",t.bMT(16,20,"Clear")),t.R7$(4),t.Y8G("ngIf",i.searchTextControl.hasError("regex")),t.R7$(),t.Y8G("ngIf",t.bMT(21,22,i.searchStatus)))},dependencies:[v.rl,v.nJ,v.TL,v.JW,v.yw,S.fg,I.LG,g.bT,F.me,F.BC,F.l_,$.$z,$.iY,U.An,E.oV,g.Jj,J.D],styles:["[_nghost-%COMP%]{position:relative;display:block;text-align:center;padding:10px 5px 5px;height:69px}mat-form-field[_ngcontent-%COMP%]  .mat-mdc-form-field-icon-suffix{display:flex;align-items:center;gap:4px;margin-right:9px}mat-form-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:2px solid transparent;min-width:36px}mat-form-field[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:0;font-size:1.715rem;width:1.715rem;height:1.715rem}.result-text[_ngcontent-%COMP%]{display:inline-flex;gap:10px;align-items:center;position:absolute;top:calc(50% - 8px);margin-left:10px}.close-button[_ngcontent-%COMP%]{position:absolute;right:20px;top:calc(50% - 18px)}.dark-theme[_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%]{border-color:#78909c}.light-theme[_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%]{border-color:#78909c}"],changeDetection:0})}}return o})();var ct=s(5060),pt=s(983),mt=s(5558),ht=s(9437),Q=s(980),H=s(8672),dt=s(319),gt=s(8523),P=s(877),ut=s(9630),ft=s(2021);let xt=(()=>{class o{constructor(e){this.baseApi=e}search(e,n,i,a,r){return this.baseApi.stream(ut.x.search.onSearchResult,e,n,i,a,r)}static{this.\u0275fac=function(n){return new(n||o)(t.KVO(ft.v))}}static{this.\u0275prov=t.jDH({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();var j=s(1635),p=s(5272),G=s(4548),X=s(8694),O=s(2039),Ct=s(536),Z=s(3294),vt=s(3386);class z{constructor(l,e){this.itemWidth=l,this.itemHeight=e,this.containerSize=new T.t([0,0]),this.index$=new Y.B,this.resizeObserver=new ResizeObserver(n=>{Array.isArray(n)&&n[0]&&this.containerSize.next([n[0].contentRect.width,n[0].contentRect.height])}),this.viewport=null,this.scrolledIndexChange=this.index$.pipe((0,Z.F)()),this.containerSize.pipe((0,vt.c)(20,Ct.X,{leading:!0,trailing:!0})).subscribe(([n,i])=>{if(this.viewport){const a=Math.floor(n/this.itemWidth),r=Math.ceil(this.viewport.getDataLength()/a);this.viewport.setTotalContentSize(r*this.itemHeight),this.viewport.checkViewportSize(),this.updateRenderedRange(this.viewport)}})}attach(l){this.index$=new Y.B,this.scrolledIndexChange=this.index$.pipe((0,Z.F)()),this.viewport=l,this.resizeObserver.disconnect(),this.resizeObserver.observe(l.elementRef.nativeElement),this.containerSize.next([l.elementRef.nativeElement.clientWidth,l.elementRef.nativeElement.clientHeight])}detach(){this.index$.complete(),this.resizeObserver.disconnect(),this.viewport=null}onContentScrolled(){this.viewport&&this.updateRenderedRange(this.viewport)}onDataLengthChanged(){if(this.viewport){const l=Math.floor(this.containerSize.value[0]/this.itemWidth),e=Math.ceil(this.viewport.getDataLength()/l);this.viewport.setTotalContentSize(e*this.itemHeight),this.updateRenderedRange(this.viewport)}}onContentRendered(){if(this.viewport){const{start:l}=this.viewport.getRenderedRange();this.viewport.setRenderedContentOffset(this.getOffsetForIndex(l))}}onRenderedOffsetChanged(){this.viewport&&this.updateRenderedRange(this.viewport)}scrollToIndex(l,e){this.viewport&&this.viewport.scrollToOffset(this.getOffsetForIndex(l),e)}getOffsetForIndex(l){const e=Math.floor(this.containerSize.value[0]/this.itemWidth);return Math.ceil(l/e)*this.itemHeight}getIndexForOffset(l,e=!0){const n=Math.floor(l/this.itemHeight),i=Math.floor(this.containerSize.value[0]/this.itemWidth);return n*i+(e?0:i-1)}updateRenderedRange(l){const e=2*this.itemHeight,n=4*this.itemHeight,i=l.getViewportSize(),a=l.measureScrollOffset(),{start:r,end:m}=l.getRenderedRange(),c={start:r,end:m},u=this.getIndexForOffset(a),f=a-this.getOffsetForIndex(r),x=this.getOffsetForIndex(m)-(a+i);f<e&&0!==r&&(c.start=Math.max(0,this.getIndexForOffset(a-n))),x<e&&m!==l.getDataLength()&&(c.end=Math.min(this.getIndexForOffset(a+i+n,!1),l.getDataLength())),l.setRenderedRange(c),l.setRenderedContentOffset(this.getOffsetForIndex(c.start)),this.index$.next(u)}}var q=s(5596),tt=s(477);function Mt(o,l){if(1&o){const e=t.RV6();t.j41(0,"li")(1,"mat-card",3)(2,"div",4),t.EFF(3),t.k0s(),t.j41(4,"div",5)(5,"div",6),t.nrm(6,"app-avatar",7),t.nI1(7,"async"),t.EFF(8),t.k0s(),t.j41(9,"div",8),t.bIt("click",function(){const i=t.eBV(e).$implicit,a=t.XpG();return t.Njj(a.gotoCommit(i.id))}),t.EFF(10),t.k0s()()()()}if(2&o){const e=l.$implicit,n=t.XpG();t.R7$(2),t.Y8G("matTooltip",e.message),t.R7$(),t.JRh(e.message),t.R7$(2),t.Y8G("matTooltip",e.authorName+" ("+e.authorEmail+")"),t.R7$(),t.Y8G("remotes",t.bMT(7,8,n.remotes))("email",e.authorEmail),t.R7$(2),t.SpI(" ",e.authorName," "),t.R7$(),t.Y8G("matTooltip",e.id),t.R7$(),t.JRh(e.id)}}let Pt=(()=>{class o extends((0,y.c)(_.N,X.f)){constructor(e,n){super(),this.router=e,this.store=n}trackByCommits(e,n){return n.id}gotoCommit(e,n){const i=this.store.selectSnapshot(P.s.selectedRepositoryPath);if(!i)throw new G.Jf;this.store.dispatch([new O.$P(i,e),...n?[new O.gm(i,{area:"commit",oldFilePath:n.oldPath,newFilePath:n.newPath})]:[],new O.Ks(i,e)]).subscribe(()=>{this.router.navigate(["/standard/default"])})}static{this.\u0275fac=function(n){return new(n||o)(t.rXU(M.Ix),t.rXU(d.il))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-commit-search-results-view"]],viewQuery:function(n,i){if(1&n&&t.GBs(p.d6,5),2&n){let a;t.mGM(a=t.lsd())&&(i.viewports=a)}},inputs:{commitResults:"commitResults"},features:[t.Jv_([{provide:p.Mr,useValue:new z(310,135)}]),t.Vt3],decls:4,vars:4,consts:[[1,"item-list-container"],[1,"main-list"],[4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy"],["appearance","outlined"],[1,"message",3,"matTooltip"],[1,"bottom"],[1,"author",3,"matTooltip"],[3,"remotes","email"],[1,"commit-id",3,"click","matTooltip"]],template:function(n,i){1&n&&(t.j41(0,"cdk-virtual-scroll-viewport",0)(1,"ul",1),t.DNE(2,Mt,11,10,"li",2),t.nI1(3,"async"),t.k0s()()),2&n&&(t.R7$(2),t.Y8G("cdkVirtualForOf",t.bMT(3,2,i.commitResults))("cdkVirtualForTrackBy",i.trackByCommits))},dependencies:[p.E$,p.d6,q.RN,E.oV,tt.f,g.Jj],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;overflow:hidden}.main-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:-5px 5px -5px -5px;padding-right:8px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{margin:5px;height:125px;width:300px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;gap:10px;height:125px;width:300px;padding:16px;overflow:hidden}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{overflow:hidden;display:-webkit-box;text-overflow:ellipsis;-webkit-line-clamp:3;-webkit-box-orient:vertical;font-weight:700}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]{margin-right:20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:170px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   app-avatar[_ngcontent-%COMP%]{width:22px;height:22px;margin-right:3px;vertical-align:middle}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .commit-id[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;min-height:20px;width:80px}"],changeDetection:0})}}return(0,j.Cg)([(0,d.l6)(P.s.selectedRemotes)],o.prototype,"remotes",void 0),o})();var Ot=s(5012),Rt=s(986),wt=s(1441),yt=s(1281);const _t=["fileSnippetDialog"];function Ft(o,l){if(1&o){const e=t.RV6();t.j41(0,"li",8),t.bIt("click",function(){const i=t.eBV(e).$implicit,a=t.XpG(2);return t.Njj(a.openFileSnippetPopup(i))}),t.j41(1,"div",9),t.nrm(2,"app-avatar",10),t.nI1(3,"async"),t.j41(4,"span",11),t.EFF(5),t.k0s()(),t.j41(6,"div",12),t.EFF(7),t.k0s()()}if(2&o){const e=l.$implicit,n=t.XpG(2);t.R7$(),t.Y8G("matTooltip",e.authorName+" ("+e.authorEmail+")"),t.R7$(),t.Y8G("remotes",t.bMT(3,6,n.remotes))("email",e.authorEmail),t.R7$(3),t.JRh(e.authorName),t.R7$(),t.Y8G("matTooltip",e.commitMessage+"\n"+e.commitId),t.R7$(),t.JRh(e.commitMessage)}}function Tt(o,l){if(1&o&&(t.j41(0,"li")(1,"mat-card",4),t.nrm(2,"app-condensed-path",5),t.j41(3,"ul",6),t.DNE(4,Ft,8,8,"li",7),t.k0s()()()),2&o){const e=l.$implicit,n=t.XpG();t.R7$(2),t.Y8G("path",e.path),t.R7$(2),t.Y8G("ngForOf",e.snippets)("ngForTrackBy",n.trackByFileSnippets)}}function It(o,l){if(1&o){const e=t.RV6();t.j41(0,"div",13),t.nrm(1,"app-condensed-path",5),t.j41(2,"button",14)(3,"mat-icon"),t.EFF(4,"close"),t.k0s()()(),t.j41(5,"mat-dialog-content",15)(6,"div",16)(7,"div",17),t.EFF(8),t.k0s(),t.j41(9,"div",18)(10,"div",9),t.nrm(11,"app-avatar",10),t.nI1(12,"async"),t.j41(13,"span",11),t.EFF(14),t.k0s()(),t.j41(15,"div",19),t.bIt("click",function(){const i=t.eBV(e).$implicit,a=t.XpG();return t.Njj(a.gotoCommit(i.result.commitId,i.result))})("contextmenu",function(){const i=t.eBV(e).$implicit,a=t.XpG();return t.Njj(a.copyToClipboard(i.result.commitId))}),t.EFF(16),t.k0s()()(),t.j41(17,"div",20),t.nI1(18,"async"),t.nrm(19,"app-diff-view",21),t.k0s()(),t.j41(20,"mat-dialog-actions")(21,"button",22),t.EFF(22),t.nI1(23,"translate"),t.k0s(),t.j41(24,"button",23),t.bIt("click",function(){const i=t.eBV(e).$implicit,a=t.XpG();return t.Njj(a.gotoCommit(i.result.commitId,i.result))}),t.EFF(25),t.nI1(26,"translate"),t.k0s(),t.j41(27,"button",24),t.bIt("click",function(){const i=t.eBV(e).$implicit,a=t.XpG();return t.Njj(a.blameFile(i.result))}),t.EFF(28),t.nI1(29,"translate"),t.k0s()()}if(2&o){const e=l.$implicit,n=t.XpG();t.R7$(),t.Y8G("path",e.result.oldPath||e.result.newPath),t.R7$(),t.Y8G("mat-dialog-close",!1),t.R7$(6),t.JRh(e.result.commitMessage),t.R7$(2),t.Y8G("matTooltip",e.result.authorName+" ("+e.result.authorEmail+")"),t.R7$(),t.Y8G("remotes",t.bMT(12,22,n.remotes))("email",e.result.authorEmail),t.R7$(3),t.JRh(e.result.authorName),t.R7$(),t.Y8G("matTooltip",e.result.commitId)("mat-dialog-close",!0),t.R7$(),t.JRh(e.result.commitId),t.R7$(),t.Y8G("ngClass",t.bMT(18,24,n.theme)+"-theme"),t.R7$(2),t.Y8G("patch",e.patch)("hideClose",!0)("search",e.search),t.R7$(2),t.Y8G("mat-dialog-close",!1),t.R7$(),t.JRh(t.bMT(23,26,"Cancel")),t.R7$(2),t.Y8G("matTooltip",e.result.commitId)("mat-dialog-close",!0),t.R7$(),t.JRh(t.bMT(26,28,"Goto commit")),t.R7$(2),t.Y8G("mat-dialog-close",!0)("matTooltip",e.result.newPath),t.R7$(),t.JRh(t.bMT(29,30,"Blame file"))}}let bt=(()=>{class o extends((0,y.c)(_.N,X.f)){constructor(e,n,i,a){super(),this.router=e,this.dialog=n,this.store=i,this.commitsApi=a}trackByFiles(e,n){return n.path}trackByFileSnippets(e,n){return n.commitId}gotoCommit(e,n){const i=this.store.selectSnapshot(P.s.selectedRepositoryPath);if(!i)throw new G.Jf;this.store.dispatch([new O.$P(i,e),...n?[new O.gm(i,{area:"commit",oldFilePath:n.oldPath,newFilePath:n.newPath})]:[],new O.Ks(i,e)]).subscribe(()=>{this.router.navigate(["/standard/default"])})}openFileSnippetPopup(e){const n=this.store.selectSnapshot(P.s.selectedRepositoryPath);if(!n)throw new G.Jf;this.commitsApi.getPatch(n,e.commitId,e.oldPath,e.newPath).subscribe(i=>{this.dialog.open(this.fileSnippetDialog,{data:{result:e,patch:new T.t({repositoryPath:n,patch:i,isUnstaged:!1}),search:{text:this.store.selectSnapshot(h.IY.searchText),matchCase:this.store.selectSnapshot(h.IY.matchCase),useRegularExpression:this.store.selectSnapshot(h.IY.useRegularExpression)}}})})}copyToClipboard(e){navigator.clipboard.writeText(e??"").then(()=>{})}blameFile(e){this.router.navigate(["/standard/blame"],{queryParams:{area:"commit","commit-id":e.commitId,path:e.newPath}})}static{this.\u0275fac=function(n){return new(n||o)(t.rXU(M.Ix),t.rXU(C.bZ),t.rXU(d.il),t.rXU(Rt.m))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-file-search-results-view"]],viewQuery:function(n,i){if(1&n&&(t.GBs(_t,5),t.GBs(p.d6,5)),2&n){let a;t.mGM(a=t.lsd())&&(i.fileSnippetDialog=a.first),t.mGM(a=t.lsd())&&(i.viewports=a)}},inputs:{fileResults:"fileResults"},features:[t.Jv_([{provide:p.Mr,useValue:new z(310,160)}]),t.Vt3],decls:6,vars:4,consts:[["fileSnippetDialog",""],[1,"item-list-container"],[1,"main-list"],[4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy"],["appearance","outlined"],[1,"path",3,"path"],[1,"sub-list"],[3,"click",4,"ngFor","ngForOf","ngForTrackBy"],[3,"click"],[1,"author",3,"matTooltip"],[3,"remotes","email"],[1,"name"],[1,"message",3,"matTooltip"],["mat-dialog-title","",1,"snippet-dialog-title"],["type","button","mat-icon-button","",1,"app-icon-button-md",3,"mat-dialog-close"],[1,"snippet-dialog"],[1,"top"],[1,"message"],[1,"right"],[1,"id",3,"click","contextmenu","matTooltip","mat-dialog-close"],[1,"diff",3,"ngClass"],[3,"patch","hideClose","search"],["type","button","mat-button","","cdkFocusInitial","",3,"mat-dialog-close"],["type","button","mat-button","","color","primary",3,"click","matTooltip","mat-dialog-close"],["type","button","mat-button","","color","accent",3,"click","mat-dialog-close","matTooltip"]],template:function(n,i){1&n&&(t.j41(0,"cdk-virtual-scroll-viewport",1)(1,"ul",2),t.DNE(2,Tt,5,3,"li",3),t.nI1(3,"async"),t.k0s()(),t.DNE(4,It,30,32,"ng-template",null,0,t.C5r)),2&n&&(t.R7$(2),t.Y8G("cdkVirtualForOf",t.bMT(3,2,i.fileResults))("cdkVirtualForTrackBy",i.trackByFiles))},dependencies:[C.tx,C.BI,C.E7,C.Yi,p.E$,p.d6,g.YU,g.Sq,$.$z,$.iY,q.RN,U.An,E.oV,tt.f,wt.A,yt.Q,g.Jj,J.D],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;overflow:hidden}.main-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:-5px 5px -5px -5px;padding-right:8px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{margin:5px;height:150px;width:300px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;padding:16px;height:150px;width:300px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]   .path[_ngcontent-%COMP%]{margin-bottom:10px;font-weight:700}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]   .sub-list[_ngcontent-%COMP%]{overflow-x:hidden;overflow-y:auto}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]   .sub-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{cursor:pointer;display:flex;gap:10px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]   .sub-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:0 0 80px;display:flex;align-items:center;gap:5px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]   .sub-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   app-avatar[_ngcontent-%COMP%]{width:18px;height:18px;flex:0 0 auto}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]   .sub-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]   .sub-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap}.snippet-dialog-title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-top:10px}.snippet-dialog[_ngcontent-%COMP%]{height:65vh;width:80vw;display:flex;flex-direction:column}.snippet-dialog[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:10px}.snippet-dialog[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{margin-right:40px;white-space:pre;max-height:100px;overflow:auto;flex:100 0 auto;padding-right:5px}.snippet-dialog[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{overflow:hidden;min-width:80px;max-width:200px}.snippet-dialog[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:0 0 80px;display:flex;align-items:center;gap:8px;margin-bottom:5px}.snippet-dialog[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   app-avatar[_ngcontent-%COMP%]{width:24px;height:24px;flex:0 0 auto}.snippet-dialog[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.snippet-dialog[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%]{cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.snippet-dialog[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]{position:relative;padding:10px 10px 0;overflow:hidden;flex:1 0 auto}.snippet-dialog[_ngcontent-%COMP%]   .diff.dark-theme[_ngcontent-%COMP%]{background:#1e1e1e}.snippet-dialog[_ngcontent-%COMP%]   .diff.light-theme[_ngcontent-%COMP%]{background:#fafafa}.snippet-dialog[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   app-diff-view[_ngcontent-%COMP%]{position:relative}"],changeDetection:0})}}return(0,j.Cg)([(0,d.l6)(P.s.selectedRemotes)],o.prototype,"remotes",void 0),(0,j.Cg)([(0,d.l6)(Ot.d.theme)],o.prototype,"theme",void 0),o})();function Vt(o,l){if(1&o){const e=t.RV6();t.j41(0,"li",3),t.bIt("click",function(){const i=t.eBV(e).$implicit,a=t.XpG();return t.Njj(a.gotoCommit(i.commitId))}),t.j41(1,"mat-icon",4),t.EFF(2),t.k0s(),t.j41(3,"span",4),t.EFF(4),t.k0s()()}if(2&o){const e=l.$implicit,n=t.XpG();t.R7$(),t.Y8G("matTooltip",e.sourceName),t.R7$(),t.JRh(n.getBranchTypeIcon(e.type)),t.R7$(),t.Y8G("matTooltip",e.refName),t.R7$(),t.JRh(e.shortName)}}let St=(()=>{class o extends((0,y.c)(_.N,X.f)){constructor(e,n){super(),this.router=e,this.store=n,this.getBranchTypeIcon=i=>{switch(i){case"local":return"desktop_windows";case"remote":return"cloud_queue";case"tag":return"label"}}}trackByReferences(e,n){return n.refName}gotoCommit(e){const n=this.store.selectSnapshot(P.s.selectedRepositoryPath);if(!n)throw new G.Jf;this.store.dispatch([new O.$P(n,e),new O.Ks(n,e)]).subscribe(()=>{this.router.navigate(["/standard/default"])})}static{this.\u0275fac=function(n){return new(n||o)(t.rXU(M.Ix),t.rXU(d.il))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-reference-search-results-view"]],viewQuery:function(n,i){if(1&n&&t.GBs(p.d6,5),2&n){let a;t.mGM(a=t.lsd())&&(i.viewports=a)}},inputs:{referenceResults:"referenceResults"},features:[t.Jv_([{provide:p.Mr,useValue:new z(220,34)}]),t.Vt3],decls:4,vars:4,consts:[[1,"item-list-container"],[1,"main-list"],[3,"click",4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy"],[3,"click"],[3,"matTooltip"]],template:function(n,i){1&n&&(t.j41(0,"cdk-virtual-scroll-viewport",0)(1,"ul",1),t.DNE(2,Vt,5,4,"li",2),t.nI1(3,"async"),t.k0s()()),2&n&&(t.R7$(2),t.Y8G("cdkVirtualForOf",t.bMT(3,2,i.referenceResults))("cdkVirtualForTrackBy",i.trackByReferences))},dependencies:[p.E$,p.d6,U.An,E.oV,g.Jj],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;overflow:hidden}.main-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:0 -10px;padding-right:8px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{margin:5px 10px;cursor:pointer;width:200px;height:24px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:5px}"],changeDetection:0})}}return(0,j.Cg)([(0,d.l6)(P.s.selectedRemotes)],o.prototype,"remotes",void 0),o})();var $t=s(6166);function Et(o,l){if(1&o&&(t.j41(0,"mat-expansion-panel",4)(1,"mat-expansion-panel-header"),t.EFF(2),t.nI1(3,"translate"),t.k0s(),t.nrm(4,"app-reference-search-results-view",5),t.k0s()),2&o){const e=l.ngIf,n=t.XpG();t.R7$(2),t.Lme("",t.bMT(3,3,"References")," (",e.length,")"),t.R7$(2),t.Y8G("referenceResults",n.referenceResults)}}function jt(o,l){if(1&o&&(t.j41(0,"mat-expansion-panel",6)(1,"mat-expansion-panel-header"),t.EFF(2),t.nI1(3,"translate"),t.k0s(),t.nrm(4,"app-commit-search-results-view",7),t.k0s()),2&o){const e=l.ngIf,n=t.XpG();t.R7$(2),t.Lme("",t.bMT(3,3,"Commits")," (",e.length,")"),t.R7$(2),t.Y8G("commitResults",n.commitResults)}}function Gt(o,l){if(1&o&&(t.j41(0,"mat-expansion-panel",8)(1,"mat-expansion-panel-header"),t.EFF(2),t.nI1(3,"translate"),t.k0s(),t.nrm(4,"app-file-search-results-view",9),t.k0s()),2&o){const e=l.ngIf,n=t.XpG();t.R7$(2),t.Lme("",t.bMT(3,3,"Files")," (",e.length,")"),t.R7$(2),t.Y8G("fileResults",n.fileResults)}}let kt=(()=>{class o extends((0,y.c)(_.N)){constructor(e,n){super(),this.store=e,this.searchApi=n,this.completed=new t.bkB,this.referenceResults=new T.t([]),this.commitResults=new T.t([]),this.fileResults=new T.t([])}ngOnInit(){(0,W.z)([this.store.select(h.IY.searchText),this.store.select(h.IY.matchCase),this.store.select(h.IY.useRegularExpression),this.store.select(P.s.selectedRepositoryPath).pipe((0,K.p)(dt.O9))]).pipe((0,mt.n)(([e,n,i,a])=>(this.referenceResults.next([]),this.commitResults.next([]),this.fileResults.next([]),this.completed.next(null),e?this.searchApi.search(a,n,i,e).pipe((0,ht.W)(r=>(this.store.dispatch(new gt.Nh("error",`${r}`)),pt.w)),(0,Q.j)(()=>{this.completed.next(this.referenceResults.value.length+this.commitResults.value.length+this.fileResults.value.length)})):ct.t)),(0,Q.j)(()=>{this.completed.next(null)}),(0,A.Q)(this.destroyed$)).subscribe(e=>{switch(e.type){case"reference":const n=this.formatReferenceResult(e);n&&this.referenceResults.next([...this.referenceResults.value,n]);break;case"commit":this.commitResults.next([...this.commitResults.value,e]);break;case"file":this.fileResults.next(this.addFileResult(this.fileResults.value,e))}})}formatReferenceResult(e){const i=/^refs\/heads\/(.*)$/.exec(e.refName);if(i)return{type:"local",refName:e.refName,shortName:i[1]??"",sourceName:(0,H.Tl)("local"),commitId:e.commitId};const r=/^refs\/remotes\/([^\/]+)\/(.*)$/.exec(e.refName);if(r)return{type:"remote",refName:e.refName,shortName:r[2]??"",sourceName:r[1]??"",commitId:e.commitId};const c=/^refs\/tags\/(.*)$/.exec(e.refName);return c?{type:"tag",refName:e.refName,shortName:c[1]??"",sourceName:(0,H.Tl)("tag"),commitId:e.commitId}:null}addFileResult(e,n){const i=!!n.oldPath,a=!!n.newPath;let r=null,m=null,c=null,u=null;for(let x=0;x<e.length;x++){const k=e[x];if(k.path===n.oldPath&&(r=x),k.path===n.newPath&&(m=x),n.oldPath&&k.path>n.oldPath&&(c=x),n.newPath&&k.path>n.newPath&&(u=x),!(i&&null===r&&null===c||a&&null===m&&null===u))break}let f=e;return i&&a?null!==r||null===c||null!==u&&c>u?(f=this.addFileSnippet(e,n,r,c),f=this.addFileSnippet(e,n,m,u)):(f=this.addFileSnippet(e,n,m,u),f=this.addFileSnippet(e,n,r,c)):i?f=this.addFileSnippet(e,n,r,c):a&&(f=this.addFileSnippet(e,n,m,u)),f}addFileSnippet(e,n,i,a){if(null!==i){const r=e[i];if(r)return[...e.slice(0,i),{...r,snippets:[...r.snippets,n]},...e.slice(i+1)]}else if(null!==a)return[...e.slice(0,a),{path:n.newPath??n.oldPath??"",snippets:[n]},...e.slice(a)];return[...e,{path:n.newPath??n.oldPath??"",snippets:[n]}]}static{this.\u0275fac=function(n){return new(n||o)(t.rXU(d.il),t.rXU(xt))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-search-results-view"]],outputs:{completed:"completed"},features:[t.Vt3],decls:10,vars:15,consts:[["multi",""],["class","references","expanded","",4,"ngIf"],["class","commits","expanded","",4,"ngIf"],["class","files","expanded","",4,"ngIf"],["expanded","",1,"references"],[3,"referenceResults"],["expanded","",1,"commits"],[3,"commitResults"],["expanded","",1,"files"],[3,"fileResults"]],template:function(n,i){1&n&&(t.j41(0,"mat-accordion",0),t.DNE(1,Et,5,5,"mat-expansion-panel",1),t.nI1(2,"async"),t.nI1(3,"nullEmpty"),t.DNE(4,jt,5,5,"mat-expansion-panel",2),t.nI1(5,"async"),t.nI1(6,"nullEmpty"),t.DNE(7,Gt,5,5,"mat-expansion-panel",3),t.nI1(8,"async"),t.nI1(9,"nullEmpty"),t.k0s()),2&n&&(t.R7$(),t.Y8G("ngIf",t.bMT(3,5,t.bMT(2,3,i.referenceResults))),t.R7$(3),t.Y8G("ngIf",t.bMT(6,9,t.bMT(5,7,i.commitResults))),t.R7$(3),t.Y8G("ngIf",t.bMT(9,13,t.bMT(8,11,i.fileResults))))},dependencies:[R.BS,R.GK,R.Z2,g.bT,Pt,bt,St,g.Jj,$t.T,J.D],styles:["[_nghost-%COMP%]{display:block;height:calc(100% - 69px)}mat-accordion[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:100%}mat-expansion-panel[_ngcontent-%COMP%]{flex-shrink:3;display:flex;flex-direction:column;min-height:48px;background:transparent!important;box-shadow:none!important}mat-expansion-panel.mat-expansion-panel-spacing[_ngcontent-%COMP%]{min-height:96px}mat-expansion-panel.mat-expansion-panel-spacing[_ngcontent-%COMP%] + mat-expansion-panel.mat-expansion-panel-spacing[_ngcontent-%COMP%]{margin:0 0 16px}mat-expansion-panel.mat-expansion-panel-spacing.files[_ngcontent-%COMP%]{margin-bottom:0!important}mat-expansion-panel.mat-expanded.references[_ngcontent-%COMP%]{min-height:99px}mat-expansion-panel.mat-expanded.commits[_ngcontent-%COMP%]{min-height:216.75px}mat-expansion-panel.mat-expanded.files[_ngcontent-%COMP%]{min-height:248px}mat-expansion-panel[_ngcontent-%COMP%]   .references[_ngcontent-%COMP%]{flex-shrink:1}mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{height:48px;padding:0 20px;font-size:1.5rem;flex:0 0 auto}mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header.mat-expanded[_ngcontent-%COMP%]{height:48px}mat-expansion-panel[_ngcontent-%COMP%]     .mat-expansion-panel-content{overflow:hidden}mat-expansion-panel[_ngcontent-%COMP%]     .mat-expansion-panel-content.ng-animating .item-list-container{overflow-y:hidden}mat-expansion-panel[_ngcontent-%COMP%]     .mat-expansion-panel-content .mat-expansion-panel-body{display:flex;flex-direction:column;overflow:hidden;padding:0 0 0 24px}mat-expansion-panel[_ngcontent-%COMP%]     .item-list-container{contain:content;scrollbar-gutter:stable}mat-expansion-panel[_ngcontent-%COMP%]     .item-list-container   .cdk-virtual-scroll-spacer{position:relative}"],changeDetection:0})}}return o})();const Bt=[{path:"",component:(()=>{class o extends((0,y.c)(_.N)){constructor(){super(...arguments),this.completed=new Y.B}static{this.\u0275fac=(()=>{let e;return function(i){return(e||(e=t.xGo(o)))(i||o)}})()}static{this.\u0275cmp=t.VBU({type:o,selectors:[["ng-component"]],features:[t.Vt3],decls:2,vars:1,consts:[[3,"completed"]],template:function(n,i){1&n&&(t.nrm(0,"app-search-action-view",0),t.j41(1,"app-search-results-view",0),t.bIt("completed",function(r){return i.completed.next(r)}),t.k0s()),2&n&&t.Y8G("completed",i.completed)},dependencies:[rt,kt],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:calc(100% - 50px)}"],changeDetection:0})}}return o})()}];let Nt=(()=>{class o{static{this.\u0275fac=function(n){return new(n||o)}}static{this.\u0275mod=t.$C({type:o})}static{this.\u0275inj=t.G2t({imports:[M.iI.forChild(Bt),M.iI]})}}return o})(),Yt=(()=>{class o{static{this.\u0275fac=function(n){return new(n||o)}}static{this.\u0275mod=t.$C({type:o})}static{this.\u0275inj=t.G2t({imports:[V.U,Nt,L]})}}return o})()},2489:(et,b,s)=>{s.d(b,{A:()=>N});var V=s(5351),C=s(2102),R=s(9042),v=s(9183),S=s(2798),B=s(1117),I=s(4438);let N=(()=>{class w{static{this.\u0275fac=function(M){return new(M||w)}}static{this.\u0275mod=I.$C({type:w})}static{this.\u0275inj=I.G2t({imports:[V.hM,C.RG,R.fS,v.D6,S.Ve,B.U]})}}return w})()}}]);