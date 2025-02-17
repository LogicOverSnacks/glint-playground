import{a as Re,c as k}from"./chunk-OAXU3XPA.js";import{a as wt,b as vt,d as Mt,e as yt}from"./chunk-BEHKSEGZ.js";import{c as Pt}from"./chunk-5QLLKRKX.js";import"./chunk-KAE446KP.js";import{b as Ot,e as Rt}from"./chunk-VO7DZQ5H.js";import"./chunk-RDAFQ6G7.js";import"./chunk-UCZQN7KN.js";import{b as St}from"./chunk-CHX4YGTE.js";import"./chunk-S33O7CD4.js";import{a as Ct,b as _t}from"./chunk-XAEFNQ4I.js";import{D as V,j as ie,k as _e,q as ne}from"./chunk-XFRRWCWM.js";import{$ as G,$i as Ce,A as Ee,Aa as x,Ai as ut,B as le,Bi as ft,D as Be,Di as xe,E as De,Ei as gt,Ga as P,Gb as qe,Hb as We,Ia as C,Ib as de,J as Me,L as ye,La as l,Li as te,Mb as T,Mh as et,Na as Pe,Oe as Ge,Qg as Ke,R as pe,S as Ne,Se as Ye,T as re,Th as tt,Ua as a,Ug as Xe,V as Ae,Va as p,Wa as f,We as he,Wh as ue,Yh as fe,Yi as xt,Ze as Je,Zf as z,Zh as ge,_a as N,a as Ie,ab as _,ah as Ze,b as Te,bb as u,bd as q,da as y,ea as Y,eb as ze,gb as A,gi as it,hb as j,hh as O,hi as nt,i as oe,ia as v,ib as L,ig as F,ih as R,j as I,ja as M,ji as ot,kb as h,kh as Z,ki as rt,l as Fe,lb as g,lh as Oe,m as ke,ma as je,mb as ce,mg as W,n as U,nb as me,ni as at,ob as J,oi as st,pa as Le,ri as lt,sa as $e,sb as Qe,sc as $,si as pt,t as se,ti as ct,ub as c,uf as K,ui as mt,vb as m,vi as dt,wb as He,wc as Se,wi as ht,yb as Ue,yf as S,yi as ee,za as o,zf as X}from"./chunk-LQ6WPIKI.js";var Lt=["input"],$t=n=>({count:n});function zt(n,s){if(n&1&&(a(0,"mat-error"),h(1),p()),n&2){let e=u();o(),g(e.searchTextControl.getError("regex"))}}function Qt(n,s){n&1&&f(0,"mat-spinner",12)}function Ht(n,s){if(n&1&&(a(0,"div",10),C(1,Qt,1,0,"mat-spinner",11),h(2),c(3,"translate"),c(4,"translate"),p()),n&2){let e=s.ngIf;o(),l("ngIf",e==="ongoing"),o(),ce(" ",e?e==="ongoing"?m(3,2,"Searching..."):He(4,4,"Found _count_ results",Qe(7,$t,e.found)):"",`
`)}}var It=(()=>{class n extends O(R){constructor(e,t){super(),this.router=e,this.store=t,this.searchTextControl=new he(this.store.selectSnapshot(k.searchText),{nonNullable:!0,validators:i=>{if(this.useRegularExpressionControl?.value)try{new RegExp(i.value,"g")}catch(r){return{regex:r.message}}return null}}),this.matchCaseControl=new he(!1,{nonNullable:!0}),this.useRegularExpressionControl=new he(!1,{nonNullable:!0}),this.searchStatus=new I(null)}ngOnInit(){this.inputElement.nativeElement.focus(),se([this.searchTextControl.valueChanges.pipe(De(200),le(()=>this.searchTextControl.valid),pe(this.searchTextControl.value)),this.matchCaseControl.valueChanges.pipe(pe(this.matchCaseControl.value)),this.useRegularExpressionControl.valueChanges.pipe(pe(this.useRegularExpressionControl.value))]).pipe(re(this.destroyed$)).subscribe(([e,t,i])=>{this.searchTextControl.updateValueAndValidity({emitEvent:!1}),this.searchStatus.next(e?"ongoing":null),this.store.dispatch(new Re(e,t,i))}),this.completed.pipe(re(this.destroyed$)).subscribe(e=>{this.searchStatus.next(e===null?this.searchTextControl.value?"ongoing":null:{found:e})})}close(){this.router.navigate(["/standard/default"])}clear(){this.searchTextControl.value?this.searchTextControl.setValue(""):(this.store.dispatch(new Re("",this.matchCaseControl.value,this.useRegularExpressionControl.value)),this.close())}static{this.\u0275fac=function(t){return new(t||n)(x($),x(F))}}static{this.\u0275cmp=y({type:n,selectors:[["app-search-action-view"]],viewQuery:function(t,i){if(t&1&&A(Lt,7,$e),t&2){let r;j(r=L())&&(i.inputElement=r.first)}},inputs:{completed:"completed"},features:[P],decls:25,vars:24,consts:[["input",""],["matPrefix",""],["type","text","matInput","",3,"formControl","placeholder"],["type","button","matSuffix","","mat-button","","disableRipple","",3,"click","matTooltip"],["svgIcon","format-letter-case"],["svgIcon","regex"],["type","button","matSuffix","","mat-button","",3,"click","matTooltip"],[4,"ngIf"],["class","result-text",4,"ngIf"],["type","button","mat-icon-button","",1,"close-button","app-icon-button-md",3,"click"],[1,"result-text"],["diameter","24",4,"ngIf"],["diameter","24"]],template:function(t,i){if(t&1){let r=N();a(0,"mat-form-field")(1,"mat-label"),h(2),c(3,"translate"),p(),a(4,"mat-icon",1),h(5,"search"),p(),f(6,"input",2,0),c(8,"translate"),a(9,"button",3),c(10,"translate"),_("click",function(){return v(r),M(i.matchCaseControl.setValue(!i.matchCaseControl.value))}),f(11,"mat-icon",4),p(),a(12,"button",3),c(13,"translate"),_("click",function(){return v(r),M(i.useRegularExpressionControl.setValue(!i.useRegularExpressionControl.value))}),f(14,"mat-icon",5),p(),a(15,"button",6),c(16,"translate"),_("click",function(){return v(r),M(i.clear())}),a(17,"mat-icon"),h(18,"close"),p()(),C(19,zt,2,1,"mat-error",7),p(),C(20,Ht,5,9,"div",8),c(21,"async"),a(22,"button",9),_("click",function(){return v(r),M(i.close())}),a(23,"mat-icon"),h(24,"close"),p()()}t&2&&(o(2),g(m(3,12,"Find")),o(4),ze("placeholder",m(8,14,"Enter search text...")),l("formControl",i.searchTextControl),o(3),Pe("selected",i.matchCaseControl.value),l("matTooltip",m(10,16,"Match case")),o(3),Pe("selected",i.useRegularExpressionControl.value),l("matTooltip",m(13,18,"Use regular expression")),o(3),l("matTooltip",m(16,20,"Clear")),o(4),l("ngIf",i.searchTextControl.hasError("regex")),o(),l("ngIf",m(21,22,i.searchStatus)))},dependencies:[at,it,nt,ot,rt,ut,Ct,de,Ge,Ye,Je,ue,fe,ee,z,T,te],styles:["[_nghost-%COMP%]{position:relative;display:block;text-align:center;padding:10px 5px 5px;height:69px}mat-form-field[_ngcontent-%COMP%]  .mat-mdc-form-field-icon-suffix{display:flex;align-items:center;gap:4px;margin-right:9px}mat-form-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:2px solid transparent;min-width:36px}mat-form-field[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:0;font-size:1.715rem;width:1.715rem;height:1.715rem}.result-text[_ngcontent-%COMP%]{display:inline-flex;gap:10px;align-items:center;position:absolute;top:calc(50% - 8px);margin-left:10px}.close-button[_ngcontent-%COMP%]{position:absolute;right:20px;top:calc(50% - 18px)}.dark-theme[_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%]{border-color:#78909c}.light-theme[_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%]{border-color:#78909c}"],changeDetection:0})}}return n})();var H=class{constructor(s,e){this.itemWidth=s,this.itemHeight=e,this.containerSize=new I([0,0]),this.index$=new oe,this.resizeObserver=new ResizeObserver(t=>{Array.isArray(t)&&t[0]&&this.containerSize.next([t[0].contentRect.width,t[0].contentRect.height])}),this.viewport=null,this.scrolledIndexChange=this.index$.pipe(Me()),this.containerSize.pipe(Ae(20,Fe,{leading:!0,trailing:!0})).subscribe(([t,i])=>{if(this.viewport){let r=Math.floor(t/this.itemWidth),d=Math.ceil(this.viewport.getDataLength()/r);this.viewport.setTotalContentSize(d*this.itemHeight),this.viewport.checkViewportSize(),this.updateRenderedRange(this.viewport)}})}attach(s){this.index$=new oe,this.scrolledIndexChange=this.index$.pipe(Me()),this.viewport=s,this.resizeObserver.disconnect(),this.resizeObserver.observe(s.elementRef.nativeElement),this.containerSize.next([s.elementRef.nativeElement.clientWidth,s.elementRef.nativeElement.clientHeight])}detach(){this.index$.complete(),this.resizeObserver.disconnect(),this.viewport=null}onContentScrolled(){this.viewport&&this.updateRenderedRange(this.viewport)}onDataLengthChanged(){if(this.viewport){let s=Math.floor(this.containerSize.value[0]/this.itemWidth),e=Math.ceil(this.viewport.getDataLength()/s);this.viewport.setTotalContentSize(e*this.itemHeight),this.updateRenderedRange(this.viewport)}}onContentRendered(){if(this.viewport){let{start:s}=this.viewport.getRenderedRange();this.viewport.setRenderedContentOffset(this.getOffsetForIndex(s))}}onRenderedOffsetChanged(){this.viewport&&this.updateRenderedRange(this.viewport)}scrollToIndex(s,e){this.viewport&&this.viewport.scrollToOffset(this.getOffsetForIndex(s),e)}getOffsetForIndex(s){let e=Math.floor(this.containerSize.value[0]/this.itemWidth);return Math.ceil(s/e)*this.itemHeight}getIndexForOffset(s,e=!0){let t=Math.floor(s/this.itemHeight),i=Math.floor(this.containerSize.value[0]/this.itemWidth);return t*i+(e?0:i-1)}updateRenderedRange(s){let e=this.itemHeight*2,t=this.itemHeight*4,i=s.getViewportSize(),r=s.measureScrollOffset(),{start:d,end:b}=s.getRenderedRange(),w={start:d,end:b},E=this.getIndexForOffset(r),B=r-this.getOffsetForIndex(d),D=this.getOffsetForIndex(b)-(r+i);B<e&&d!==0&&(w.start=Math.max(0,this.getIndexForOffset(r-t))),D<e&&b!==s.getDataLength()&&(w.end=Math.min(this.getIndexForOffset(r+i+t,!1),s.getDataLength())),s.setRenderedRange(w),s.setRenderedContentOffset(this.getOffsetForIndex(w.start)),this.index$.next(E)}};function Gt(n,s){if(n&1){let e=N();a(0,"li")(1,"mat-card",3)(2,"div",4),h(3),p(),a(4,"div",5)(5,"div",6),f(6,"app-avatar",7),c(7,"async"),h(8),p(),a(9,"div",8),_("click",function(){let i=v(e).$implicit,r=u();return M(r.gotoCommit(i.id))}),h(10),p()()()()}if(n&2){let e=s.$implicit,t=u();o(2),l("matTooltip",e.message),o(),g(e.message),o(2),l("matTooltip",e.authorName+" ("+e.authorEmail+")"),o(),l("remotes",m(7,8,t.remotes))("email",e.authorEmail),o(2),ce(" ",e.authorName," "),o(),l("matTooltip",e.id),o(),g(e.id)}}var Ft=(()=>{class n extends O(R,Z){constructor(e,t){super(),this.router=e,this.store=t}trackByCommits(e,t){return t.id}gotoCommit(e,t){let i=this.store.selectSnapshot(V.selectedRepositoryPath);if(!i)throw new q;this.store.dispatch([new ie(i,e),...t?[new _e(i,{area:"commit",oldFilePath:t.oldPath,newFilePath:t.newPath})]:[],new ne(i,e)]).subscribe(()=>{this.router.navigate(["/standard/default"])})}static{this.\u0275fac=function(t){return new(t||n)(x($),x(F))}}static{this.\u0275cmp=y({type:n,selectors:[["app-commit-search-results-view"]],viewQuery:function(t,i){if(t&1&&A(S,5),t&2){let r;j(r=L())&&(i.viewports=r)}},inputs:{commitResults:"commitResults"},features:[J([{provide:K,useValue:new H(310,135)}]),P],decls:4,vars:4,consts:[[1,"item-list-container"],[1,"main-list"],[4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy"],["appearance","outlined"],[1,"message",3,"matTooltip"],[1,"bottom"],[1,"author",3,"matTooltip"],[3,"remotes","email"],[1,"commit-id",3,"click","matTooltip"]],template:function(t,i){t&1&&(a(0,"cdk-virtual-scroll-viewport",0)(1,"ul",1),C(2,Gt,11,10,"li",2),c(3,"async"),p()()),t&2&&(o(2),l("cdkVirtualForOf",m(3,2,i.commitResults))("cdkVirtualForTrackBy",i.trackByCommits))},dependencies:[X,S,ge,z,xe,T],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;overflow:hidden}.main-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:-5px 5px -5px -5px;padding-right:8px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{margin:5px;height:125px;width:300px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;gap:10px;height:125px;width:300px;padding:16px;overflow:hidden}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{overflow:hidden;display:-webkit-box;text-overflow:ellipsis;-webkit-line-clamp:3;-webkit-box-orient:vertical;font-weight:700}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]{margin-right:20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:170px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   app-avatar[_ngcontent-%COMP%]{width:22px;height:22px;margin-right:3px;vertical-align:middle}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .commit-id[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;min-height:20px;width:80px}"],changeDetection:0})}}return U([W(V.selectedRemotes)],n.prototype,"remotes",void 0),n})();var Kt=["fileSnippetDialog"];function Xt(n,s){if(n&1){let e=N();a(0,"li",8),_("click",function(){let i=v(e).$implicit,r=u(2);return M(r.openFileSnippetPopup(i))}),a(1,"div",9),f(2,"app-avatar",10),c(3,"async"),a(4,"span",11),h(5),p()(),a(6,"div",12),h(7),p()()}if(n&2){let e=s.$implicit,t=u(2);o(),l("matTooltip",e.authorName+" ("+e.authorEmail+")"),o(),l("remotes",m(3,6,t.remotes))("email",e.authorEmail),o(3),g(e.authorName),o(),l("matTooltip",e.commitMessage+`
`+e.commitId),o(),g(e.commitMessage)}}function Zt(n,s){if(n&1&&(a(0,"li")(1,"mat-card",4),f(2,"app-condensed-path",5),a(3,"ul",6),C(4,Xt,8,8,"li",7),p()()()),n&2){let e=s.$implicit,t=u();o(2),l("path",e.path),o(2),l("ngForOf",e.snippets)("ngForTrackBy",t.trackByFileSnippets)}}function ei(n,s){if(n&1){let e=N();a(0,"div",13),f(1,"app-condensed-path",5),a(2,"button",14)(3,"mat-icon"),h(4,"close"),p()()(),a(5,"mat-dialog-content",15)(6,"div",16)(7,"div",17),h(8),p(),a(9,"div",18)(10,"div",9),f(11,"app-avatar",10),c(12,"async"),a(13,"span",11),h(14),p()(),a(15,"div",19),_("click",function(){let i=v(e).$implicit,r=u();return M(r.gotoCommit(i.result.commitId,i.result))})("contextmenu",function(){let i=v(e).$implicit,r=u();return M(r.copyToClipboard(i.result.commitId))}),h(16),p()()(),a(17,"div",20),c(18,"async"),f(19,"app-diff-view",21),p()(),a(20,"mat-dialog-actions")(21,"button",22),h(22),c(23,"translate"),p(),a(24,"button",23),_("click",function(){let i=v(e).$implicit,r=u();return M(r.gotoCommit(i.result.commitId,i.result))}),h(25),c(26,"translate"),p(),a(27,"button",24),_("click",function(){let i=v(e).$implicit,r=u();return M(r.blameFile(i.result))}),h(28),c(29,"translate"),p()()}if(n&2){let e=s.$implicit,t=u();o(),l("path",e.result.oldPath||e.result.newPath),o(),l("mat-dialog-close",!1),o(6),g(e.result.commitMessage),o(2),l("matTooltip",e.result.authorName+" ("+e.result.authorEmail+")"),o(),l("remotes",m(12,22,t.remotes))("email",e.result.authorEmail),o(3),g(e.result.authorName),o(),l("matTooltip",e.result.commitId)("mat-dialog-close",!0),o(),g(e.result.commitId),o(),l("ngClass",m(18,24,t.theme)+"-theme"),o(2),l("patch",e.patch)("hideClose",!0)("search",e.search),o(2),l("mat-dialog-close",!1),o(),g(m(23,26,"Cancel")),o(2),l("matTooltip",e.result.commitId)("mat-dialog-close",!0),o(),g(m(26,28,"Goto commit")),o(2),l("mat-dialog-close",!0)("matTooltip",e.result.newPath),o(),g(m(29,30,"Blame file"))}}var kt=(()=>{class n extends O(R,Z){constructor(e,t,i,r){super(),this.router=e,this.dialog=t,this.store=i,this.commitsApi=r}trackByFiles(e,t){return t.path}trackByFileSnippets(e,t){return t.commitId}gotoCommit(e,t){let i=this.store.selectSnapshot(V.selectedRepositoryPath);if(!i)throw new q;this.store.dispatch([new ie(i,e),...t?[new _e(i,{area:"commit",oldFilePath:t.oldPath,newFilePath:t.newPath})]:[],new ne(i,e)]).subscribe(()=>{this.router.navigate(["/standard/default"])})}openFileSnippetPopup(e){let t=this.store.selectSnapshot(V.selectedRepositoryPath);if(!t)throw new q;this.commitsApi.getPatch(t,e.commitId,e.oldPath,e.newPath).subscribe(i=>{this.dialog.open(this.fileSnippetDialog,{data:{result:e,patch:new I({repositoryPath:t,patch:i,isUnstaged:!1}),search:{text:this.store.selectSnapshot(k.searchText),matchCase:this.store.selectSnapshot(k.matchCase),useRegularExpression:this.store.selectSnapshot(k.useRegularExpression)}}})})}copyToClipboard(e){navigator.clipboard.writeText(e??"").then(()=>{})}blameFile(e){this.router.navigate(["/standard/blame"],{queryParams:{area:"commit","commit-id":e.commitId,path:e.newPath}})}static{this.\u0275fac=function(t){return new(t||n)(x($),x(lt),x(F),x(Xe))}}static{this.\u0275cmp=y({type:n,selectors:[["app-file-search-results-view"]],viewQuery:function(t,i){if(t&1&&(A(Kt,5),A(S,5)),t&2){let r;j(r=L())&&(i.fileSnippetDialog=r.first),j(r=L())&&(i.viewports=r)}},inputs:{fileResults:"fileResults"},features:[J([{provide:K,useValue:new H(310,160)}]),P],decls:6,vars:4,consts:[["fileSnippetDialog",""],[1,"item-list-container"],[1,"main-list"],[4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy"],["appearance","outlined"],[1,"path",3,"path"],[1,"sub-list"],[3,"click",4,"ngFor","ngForOf","ngForTrackBy"],[3,"click"],[1,"author",3,"matTooltip"],[3,"remotes","email"],[1,"name"],[1,"message",3,"matTooltip"],["mat-dialog-title","",1,"snippet-dialog-title"],["type","button","mat-icon-button","",1,"app-icon-button-md",3,"mat-dialog-close"],[1,"snippet-dialog"],[1,"top"],[1,"message"],[1,"right"],[1,"id",3,"click","contextmenu","matTooltip","mat-dialog-close"],[1,"diff",3,"ngClass"],[3,"patch","hideClose","search"],["type","button","mat-button","","cdkFocusInitial","",3,"mat-dialog-close"],["type","button","mat-button","","color","primary",3,"click","matTooltip","mat-dialog-close"],["type","button","mat-button","","color","accent",3,"click","mat-dialog-close","matTooltip"]],template:function(t,i){t&1&&(a(0,"cdk-virtual-scroll-viewport",1)(1,"ul",2),C(2,Zt,5,3,"li",3),c(3,"async"),p()(),C(4,ei,30,32,"ng-template",null,0,Ue)),t&2&&(o(2),l("cdkVirtualForOf",m(3,2,i.fileResults))("cdkVirtualForTrackBy",i.trackByFiles))},dependencies:[pt,ct,dt,mt,X,S,qe,We,ue,fe,ge,ee,z,xe,gt,Ot,T,te],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;overflow:hidden}.main-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:-5px 5px -5px -5px;padding-right:8px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{margin:5px;height:150px;width:300px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;padding:16px;height:150px;width:300px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]   .path[_ngcontent-%COMP%]{margin-bottom:10px;font-weight:700}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]   .sub-list[_ngcontent-%COMP%]{overflow-x:hidden;overflow-y:auto}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]   .sub-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{cursor:pointer;display:flex;gap:10px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]   .sub-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:0 0 80px;display:flex;align-items:center;gap:5px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]   .sub-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   app-avatar[_ngcontent-%COMP%]{width:18px;height:18px;flex:0 0 auto}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]   .sub-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]   .sub-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap}.snippet-dialog-title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-top:10px}.snippet-dialog[_ngcontent-%COMP%]{height:65vh;width:80vw;display:flex;flex-direction:column}.snippet-dialog[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:10px}.snippet-dialog[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{margin-right:40px;white-space:pre;max-height:100px;overflow:auto;flex:100 0 auto;padding-right:5px}.snippet-dialog[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{overflow:hidden;min-width:80px;max-width:200px}.snippet-dialog[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:0 0 80px;display:flex;align-items:center;gap:8px;margin-bottom:5px}.snippet-dialog[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   app-avatar[_ngcontent-%COMP%]{width:24px;height:24px;flex:0 0 auto}.snippet-dialog[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.snippet-dialog[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%]{cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.snippet-dialog[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]{position:relative;padding:10px 10px 0;overflow:hidden;flex:1 0 auto}.snippet-dialog[_ngcontent-%COMP%]   .diff.dark-theme[_ngcontent-%COMP%]{background:#1e1e1e}.snippet-dialog[_ngcontent-%COMP%]   .diff.light-theme[_ngcontent-%COMP%]{background:#fafafa}.snippet-dialog[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   app-diff-view[_ngcontent-%COMP%]{position:relative}"],changeDetection:0})}}return U([W(V.selectedRemotes)],n.prototype,"remotes",void 0),U([W(tt.theme)],n.prototype,"theme",void 0),n})();function ii(n,s){if(n&1){let e=N();a(0,"li",3),_("click",function(){let i=v(e).$implicit,r=u();return M(r.gotoCommit(i.commitId))}),a(1,"mat-icon",4),h(2),p(),a(3,"span",4),h(4),p()()}if(n&2){let e=s.$implicit,t=u();o(),l("matTooltip",e.sourceName),o(),g(t.getBranchTypeIcon(e.type)),o(),l("matTooltip",e.refName),o(),g(e.shortName)}}var Et=(()=>{class n extends O(R,Z){constructor(e,t){super(),this.router=e,this.store=t,this.getBranchTypeIcon=i=>{switch(i){case"local":return"desktop_windows";case"remote":return"cloud_queue";case"tag":return"label"}}}trackByReferences(e,t){return t.refName}gotoCommit(e){let t=this.store.selectSnapshot(V.selectedRepositoryPath);if(!t)throw new q;this.store.dispatch([new ie(t,e),new ne(t,e)]).subscribe(()=>{this.router.navigate(["/standard/default"])})}static{this.\u0275fac=function(t){return new(t||n)(x($),x(F))}}static{this.\u0275cmp=y({type:n,selectors:[["app-reference-search-results-view"]],viewQuery:function(t,i){if(t&1&&A(S,5),t&2){let r;j(r=L())&&(i.viewports=r)}},inputs:{referenceResults:"referenceResults"},features:[J([{provide:K,useValue:new H(220,34)}]),P],decls:4,vars:4,consts:[[1,"item-list-container"],[1,"main-list"],[3,"click",4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy"],[3,"click"],[3,"matTooltip"]],template:function(t,i){t&1&&(a(0,"cdk-virtual-scroll-viewport",0)(1,"ul",1),C(2,ii,5,4,"li",2),c(3,"async"),p()()),t&2&&(o(2),l("cdkVirtualForOf",m(3,2,i.referenceResults))("cdkVirtualForTrackBy",i.trackByReferences))},dependencies:[X,S,ee,z,T],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;overflow:hidden}.main-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:0 -10px;padding-right:8px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{margin:5px 10px;cursor:pointer;width:200px;height:24px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:5px}"],changeDetection:0})}}return U([W(V.selectedRemotes)],n.prototype,"remotes",void 0),n})();function oi(n,s){if(n&1&&(a(0,"mat-expansion-panel",4)(1,"mat-expansion-panel-header"),h(2),c(3,"translate"),p(),f(4,"app-reference-search-results-view",5),p()),n&2){let e=s.ngIf,t=u();o(2),me("",m(3,3,"References")," (",e.length,")"),o(2),l("referenceResults",t.referenceResults)}}function ri(n,s){if(n&1&&(a(0,"mat-expansion-panel",6)(1,"mat-expansion-panel-header"),h(2),c(3,"translate"),p(),f(4,"app-commit-search-results-view",7),p()),n&2){let e=s.ngIf,t=u();o(2),me("",m(3,3,"Commits")," (",e.length,")"),o(2),l("commitResults",t.commitResults)}}function ai(n,s){if(n&1&&(a(0,"mat-expansion-panel",8)(1,"mat-expansion-panel-header"),h(2),c(3,"translate"),p(),f(4,"app-file-search-results-view",9),p()),n&2){let e=s.ngIf,t=u();o(2),me("",m(3,3,"Files")," (",e.length,")"),o(2),l("fileResults",t.fileResults)}}var Bt=(()=>{class n extends O(R){constructor(e,t){super(),this.store=e,this.searchApi=t,this.completed=new Le,this.referenceResults=new I([]),this.commitResults=new I([]),this.fileResults=new I([])}ngOnInit(){se([this.store.select(k.searchText),this.store.select(k.matchCase),this.store.select(k.useRegularExpression),this.store.select(V.selectedRepositoryPath).pipe(le(Ke))]).pipe(Ne(([e,t,i,r])=>(this.referenceResults.next([]),this.commitResults.next([]),this.fileResults.next([]),this.completed.next(null),e?this.searchApi.search(r,t,i,e).pipe(Be(d=>(this.store.dispatch(new et("error",`${d}`)),ke)),ye(()=>{this.completed.next(this.referenceResults.value.length+this.commitResults.value.length+this.fileResults.value.length)})):Ee)),ye(()=>{this.completed.next(null)}),re(this.destroyed$)).subscribe(e=>{switch(e.type){case"reference":let t=this.formatReferenceResult(e);t&&this.referenceResults.next([...this.referenceResults.value,t]);break;case"commit":this.commitResults.next([...this.commitResults.value,e]);break;case"file":this.fileResults.next(this.addFileResult(this.fileResults.value,e));break}})}formatReferenceResult(e){let i=/^refs\/heads\/(.*)$/.exec(e.refName);if(i)return{type:"local",refName:e.refName,shortName:i[1]??"",sourceName:Oe("local"),commitId:e.commitId};let d=/^refs\/remotes\/([^\/]+)\/(.*)$/.exec(e.refName);if(d)return{type:"remote",refName:e.refName,shortName:d[2]??"",sourceName:d[1]??"",commitId:e.commitId};let w=/^refs\/tags\/(.*)$/.exec(e.refName);return w?{type:"tag",refName:e.refName,shortName:w[1]??"",sourceName:Oe("tag"),commitId:e.commitId}:null}addFileResult(e,t){let i=!!t.oldPath,r=!!t.newPath,d=null,b=null,w=null,E=null;for(let D=0;D<e.length;D++){let ae=e[D];if(ae.path===t.oldPath&&(d=D),ae.path===t.newPath&&(b=D),t.oldPath&&ae.path>t.oldPath&&(w=D),t.newPath&&ae.path>t.newPath&&(E=D),(!i||d!==null||w!==null)&&(!r||b!==null||E!==null))break}let B=e;return i&&r?d!==null||w===null||E!==null&&w>E?(B=this.addFileSnippet(e,t,d,w),B=this.addFileSnippet(e,t,b,E)):(B=this.addFileSnippet(e,t,b,E),B=this.addFileSnippet(e,t,d,w)):i?B=this.addFileSnippet(e,t,d,w):r&&(B=this.addFileSnippet(e,t,b,E)),B}addFileSnippet(e,t,i,r){if(i!==null){let d=e[i];if(d)return[...e.slice(0,i),Te(Ie({},d),{snippets:[...d.snippets,t]}),...e.slice(i+1)]}else if(r!==null)return[...e.slice(0,r),{path:t.newPath??t.oldPath??"",snippets:[t]},...e.slice(r)];return[...e,{path:t.newPath??t.oldPath??"",snippets:[t]}]}static{this.\u0275fac=function(t){return new(t||n)(x(F),x(Ze))}}static{this.\u0275cmp=y({type:n,selectors:[["app-search-results-view"]],outputs:{completed:"completed"},features:[P],decls:10,vars:15,consts:[["multi",""],["class","references","expanded","",4,"ngIf"],["class","commits","expanded","",4,"ngIf"],["class","files","expanded","",4,"ngIf"],["expanded","",1,"references"],[3,"referenceResults"],["expanded","",1,"commits"],[3,"commitResults"],["expanded","",1,"files"],[3,"fileResults"]],template:function(t,i){t&1&&(a(0,"mat-accordion",0),C(1,oi,5,5,"mat-expansion-panel",1),c(2,"async"),c(3,"nullEmpty"),C(4,ri,5,5,"mat-expansion-panel",2),c(5,"async"),c(6,"nullEmpty"),C(7,ai,5,5,"mat-expansion-panel",3),c(8,"async"),c(9,"nullEmpty"),p()),t&2&&(o(),l("ngIf",m(3,5,m(2,3,i.referenceResults))),o(3),l("ngIf",m(6,9,m(5,7,i.commitResults))),o(3),l("ngIf",m(9,13,m(8,11,i.fileResults))))},dependencies:[Mt,wt,vt,de,Ft,kt,Et,T,xt,te],styles:["[_nghost-%COMP%]{display:block;height:calc(100% - 69px)}mat-accordion[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:100%}mat-expansion-panel[_ngcontent-%COMP%]{flex-shrink:3;display:flex;flex-direction:column;min-height:48px;background:transparent!important;box-shadow:none!important}mat-expansion-panel.mat-expansion-panel-spacing[_ngcontent-%COMP%]{min-height:96px}mat-expansion-panel.mat-expansion-panel-spacing[_ngcontent-%COMP%] + mat-expansion-panel.mat-expansion-panel-spacing[_ngcontent-%COMP%]{margin:0 0 16px}mat-expansion-panel.mat-expansion-panel-spacing.files[_ngcontent-%COMP%]{margin-bottom:0!important}mat-expansion-panel.mat-expanded.references[_ngcontent-%COMP%]{min-height:99px}mat-expansion-panel.mat-expanded.commits[_ngcontent-%COMP%]{min-height:216.75px}mat-expansion-panel.mat-expanded.files[_ngcontent-%COMP%]{min-height:248px}mat-expansion-panel[_ngcontent-%COMP%]   .references[_ngcontent-%COMP%]{flex-shrink:1}mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{height:48px;padding:0 20px;font-size:1.5rem;flex:0 0 auto}mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header.mat-expanded[_ngcontent-%COMP%]{height:48px}mat-expansion-panel[_ngcontent-%COMP%]     .mat-expansion-panel-content{overflow:hidden}mat-expansion-panel[_ngcontent-%COMP%]     .mat-expansion-panel-content.ng-animating .item-list-container{overflow-y:hidden}mat-expansion-panel[_ngcontent-%COMP%]     .mat-expansion-panel-content .mat-expansion-panel-body{display:flex;flex-direction:column;overflow:hidden;padding:0 0 0 24px}mat-expansion-panel[_ngcontent-%COMP%]     .item-list-container{contain:content;scrollbar-gutter:stable}mat-expansion-panel[_ngcontent-%COMP%]     .item-list-container   .cdk-virtual-scroll-spacer{position:relative}"],changeDetection:0})}}return n})();var Dt=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=Y({type:n})}static{this.\u0275inj=G({imports:[ht,yt,st,ft,St,_t,Ce,Pt,Rt]})}}return n})();var Nt=(()=>{class n extends O(R){constructor(){super(...arguments),this.completed=new oe}static{this.\u0275fac=(()=>{let e;return function(i){return(e||(e=je(n)))(i||n)}})()}static{this.\u0275cmp=y({type:n,selectors:[["ng-component"]],features:[P],decls:2,vars:1,consts:[[3,"completed"]],template:function(t,i){t&1&&(f(0,"app-search-action-view",0),a(1,"app-search-results-view",0),_("completed",function(d){return i.completed.next(d)}),p()),t&2&&l("completed",i.completed)},dependencies:[It,Bt],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:calc(100% - 50px)}"],changeDetection:0})}}return n})();var li=[{path:"",component:Nt}],At=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=Y({type:n})}static{this.\u0275inj=G({imports:[Se.forChild(li),Se]})}}return n})();var Dn=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=Y({type:n})}static{this.\u0275inj=G({imports:[Ce,At,Dt]})}}return n})();export{Dn as SearchLayoutModule};
