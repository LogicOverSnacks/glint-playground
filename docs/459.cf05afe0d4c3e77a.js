"use strict";(self.webpackChunkgit_glint=self.webpackChunkgit_glint||[]).push([[459],{5459:(et,E,s)=>{s.r(E),s.d(E,{SearchLayoutModule:()=>j});var I=s(3179),u=s(5412),P=s(7084),f=s(9549),N=s(284),k=s(8255),S=s(1572),M=s(7093),nt=s(7072),t=s(4650);class w{static{this.\u0275fac=function(e){return new(e||w)}}static{this.\u0275mod=t.oAB({type:w})}static{this.\u0275inj=t.cJS({imports:[u.Is,P.To,f.lN,N.c,k.Tx,S.Cq,I.I,M.v,nt.m]})}}var _=s(2367),L=s(7579),y=s(8926),T=s(9967),it=s(4745),R=s(4006),Z=s(1135),K=s(9841),ot=s(8372),W=s(9300),D=s(8675),$=s(2722),m=s(4454),x=s(9867),C=s(6895),V=s(4859),z=s(7392),U=s(266);const st=["input"];function at(a,i){if(1&a&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Oqu(e.searchTextControl.getError("regex"))}}function lt(a,i){1&a&&t._UZ(0,"mat-spinner",12)}class J extends((0,y.j)(T.A)){constructor(i,e){super(),this.router=i,this.store=e,this.searchTextControl=new R.NI(this.store.selectSnapshot(m.po.searchText),{nonNullable:!0,validators:n=>{if(this.useRegularExpressionControl?.value)try{new RegExp(n.value,"g")}catch(o){return{regex:o.message}}return null}}),this.matchCaseControl=new R.NI(!1,{nonNullable:!0}),this.useRegularExpressionControl=new R.NI(!1,{nonNullable:!0}),this.resultText=new Z.X("")}ngOnInit(){this.inputElement.nativeElement.focus(),(0,K.a)([this.searchTextControl.valueChanges.pipe((0,ot.b)(200),(0,W.h)(()=>this.searchTextControl.valid),(0,D.O)(this.searchTextControl.value)),this.matchCaseControl.valueChanges.pipe((0,D.O)(this.matchCaseControl.value)),this.useRegularExpressionControl.valueChanges.pipe((0,D.O)(this.useRegularExpressionControl.value))]).pipe((0,$.R)(this.destroyed$)).subscribe(([i,e,n])=>{this.searchTextControl.updateValueAndValidity({emitEvent:!1}),this.resultText.next(i?"Searching...":""),this.store.dispatch(new m.ol(i,e,n))}),this.completed.pipe((0,$.R)(this.destroyed$)).subscribe(i=>{this.resultText.next(null===i?this.searchTextControl.value?"Searching...":"":`Found ${i} results`)})}close(){this.router.navigate(["/standard/default"])}clear(){this.searchTextControl.value?this.searchTextControl.setValue(""):(this.store.dispatch(new m.ol("",this.matchCaseControl.value,this.useRegularExpressionControl.value)),this.close())}static{this.\u0275fac=function(e){return new(e||J)(t.Y36(_.F0),t.Y36(x.yh))}}static{this.\u0275cmp=t.Xpm({type:J,selectors:[["app-search-action-view"]],viewQuery:function(e,n){if(1&e&&t.Gf(st,7,t.SBq),2&e){let o;t.iGM(o=t.CRH())&&(n.inputElement=o.first)}},inputs:{completed:"completed"},features:[t.qOj],decls:23,vars:12,consts:[["matPrefix",""],["type","text","matInput","","placeholder","Enter search text...",3,"formControl"],["input",""],["type","button","matSuffix","","mat-button","","disableRipple","","matTooltip","Match case",3,"click"],["svgIcon","format-letter-case"],["type","button","matSuffix","","mat-button","","disableRipple","","matTooltip","Use regular expression",3,"click"],["svgIcon","regex"],["type","button","matSuffix","","mat-button","","matTooltip","Cancel",3,"click"],[4,"ngIf"],[1,"result-text"],["diameter","24",4,"ngIf"],["type","button","mat-icon-button","",1,"close-button","app-icon-button-md",3,"click"],["diameter","24"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-form-field")(1,"mat-label"),t._uU(2,"Search"),t.qZA(),t.TgZ(3,"mat-icon",0),t._uU(4,"search"),t.qZA(),t._UZ(5,"input",1,2),t.TgZ(7,"button",3),t.NdJ("click",function(){return n.matchCaseControl.setValue(!n.matchCaseControl.value)}),t._UZ(8,"mat-icon",4),t.qZA(),t.TgZ(9,"button",5),t.NdJ("click",function(){return n.useRegularExpressionControl.setValue(!n.useRegularExpressionControl.value)}),t._UZ(10,"mat-icon",6),t.qZA(),t.TgZ(11,"button",7),t.NdJ("click",function(){return n.clear()}),t.TgZ(12,"mat-icon"),t._uU(13,"close"),t.qZA()(),t.YNc(14,at,2,1,"mat-error",8),t.qZA(),t.TgZ(15,"div",9),t.YNc(16,lt,1,0,"mat-spinner",10),t.ALo(17,"async"),t._uU(18),t.ALo(19,"async"),t.qZA(),t.TgZ(20,"button",11),t.NdJ("click",function(){return n.close()}),t.TgZ(21,"mat-icon"),t._uU(22,"close"),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("formControl",n.searchTextControl),t.xp6(2),t.ekj("selected",n.matchCaseControl.value),t.xp6(2),t.ekj("selected",n.useRegularExpressionControl.value),t.xp6(5),t.Q6J("ngIf",n.searchTextControl.hasError("regex")),t.xp6(2),t.Q6J("ngIf","Searching..."===t.lcZ(17,8,n.resultText)),t.xp6(2),t.hij(" ",t.lcZ(19,10,n.resultText),"\n"))},dependencies:[f.KE,f.hX,f.TO,f.qo,f.R9,N.Nt,S.Ou,C.O5,R.Fj,R.JJ,R.oH,V.lW,V.RK,z.Hw,U.gM,C.Ov],styles:["[_nghost-%COMP%]{position:relative;display:block;text-align:center;padding:10px 5px 5px;height:69px}mat-form-field[_ngcontent-%COMP%]  .mat-mdc-form-field-icon-suffix{display:flex;align-items:center;gap:4px;margin-right:9px}mat-form-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:2px solid transparent;min-width:36px}mat-form-field[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%]{border-color:#37474f}mat-form-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:0;font-size:24px;width:24px;height:24px}.result-text[_ngcontent-%COMP%]{display:inline-flex;gap:10px;align-items:center;position:absolute;top:calc(50% - 8px);margin-left:10px}.close-button[_ngcontent-%COMP%]{position:absolute;right:20px;top:calc(50% - 18px)}"],changeDetection:0})}}var ct=s(1848),rt=s(515),pt=s(3900),mt=s(262),G=s(8746),ht=s(2120),dt=s(5938),v=s(6966),gt=s(3779),ut=s(7016);class A{constructor(i){this.baseApi=i}search(i,e,n,o,l){return this.baseApi.stream(gt.w.search.onSearchResult,i,e,n,o,l)}static{this.\u0275fac=function(e){return new(e||A)(t.LFG(ut._))}}static{this.\u0275prov=t.Yz7({token:A,factory:A.\u0275fac,providedIn:"root"})}}var H=s(655),h=s(4883),O=s(4889),ft=s(6406),X=s(1884),xt=s(9468);class Y{constructor(i,e){this.itemWidth=i,this.itemHeight=e,this.containerSize=new Z.X([0,0]),this.index$=new L.x,this.resizeObserver=new ResizeObserver(n=>{this.containerSize.next([n[0].contentRect.width,n[0].contentRect.height])}),this.viewport=null,this.scrolledIndexChange=this.index$.pipe((0,X.x)()),this.containerSize.pipe((0,xt.p)(20,ft.Z,{leading:!0,trailing:!0})).subscribe(([n,o])=>{if(this.viewport){const l=Math.floor(n/this.itemWidth),c=Math.ceil(this.viewport.getDataLength()/l);this.viewport.setTotalContentSize(c*this.itemHeight),this.viewport.checkViewportSize(),this.updateRenderedRange(this.viewport)}})}attach(i){this.index$=new L.x,this.scrolledIndexChange=this.index$.pipe((0,X.x)()),this.viewport=i,this.resizeObserver.disconnect(),this.resizeObserver.observe(i.elementRef.nativeElement),this.containerSize.next([i.elementRef.nativeElement.clientWidth,i.elementRef.nativeElement.clientHeight]);const e=Math.floor(this.containerSize.value[0]/this.itemWidth),n=Math.ceil(i.getDataLength()/e);i.setTotalContentSize(n*this.itemHeight),this.updateRenderedRange(i)}detach(){this.index$.complete(),this.resizeObserver.disconnect(),this.viewport=null}onContentScrolled(){this.viewport&&this.updateRenderedRange(this.viewport)}onDataLengthChanged(){if(this.viewport){const i=Math.floor(this.containerSize.value[0]/this.itemWidth),e=Math.ceil(this.viewport.getDataLength()/i);this.viewport.setTotalContentSize(e*this.itemHeight),this.updateRenderedRange(this.viewport)}}onContentRendered(){if(this.viewport){const{start:i}=this.viewport.getRenderedRange();this.viewport.setRenderedContentOffset(this.getOffsetForIndex(i))}}onRenderedOffsetChanged(){this.viewport&&this.updateRenderedRange(this.viewport)}scrollToIndex(i,e){this.viewport&&this.viewport.scrollToOffset(this.getOffsetForIndex(i),e)}getOffsetForIndex(i){const e=Math.floor(this.containerSize.value[0]/this.itemWidth);return Math.ceil(i/e)*this.itemHeight}getIndexForOffset(i,e=!0){const n=Math.floor(i/this.itemHeight),o=Math.floor(this.containerSize.value[0]/this.itemWidth);return n*o+(e?0:o-1)}updateRenderedRange(i){const e=2*this.itemHeight,n=4*this.itemHeight,o=i.getViewportSize(),l=i.measureScrollOffset(),{start:c,end:r}=i.getRenderedRange(),p={start:c,end:r},d=this.getIndexForOffset(l),g=l-this.getOffsetForIndex(c),F=this.getOffsetForIndex(r)-(l+o);g<e&&0!==c&&(p.start=Math.max(0,this.getIndexForOffset(l-n))),F<e&&r!==i.getDataLength()&&(p.end=Math.min(this.getIndexForOffset(l+o+n,!1),i.getDataLength())),i.setRenderedRange(p),i.setRenderedContentOffset(this.getOffsetForIndex(p.start)),this.index$.next(d)}}var q=s(3546),tt=s(3051);function Ct(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"li")(1,"mat-card",3)(2,"div",4),t._uU(3),t.qZA(),t.TgZ(4,"div",5)(5,"div",6),t._UZ(6,"app-avatar",7),t.ALo(7,"async"),t._uU(8),t.qZA(),t.TgZ(9,"div",8),t.NdJ("click",function(){const l=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.gotoCommit(l.id))}),t._uU(10),t.qZA()()()()}if(2&a){const e=i.$implicit,n=t.oxw();t.xp6(2),t.Q6J("matTooltip",e.message),t.xp6(1),t.Oqu(e.message),t.xp6(2),t.Q6J("matTooltip",e.authorName+" ("+e.authorEmail+")"),t.xp6(1),t.Q6J("remotes",t.lcZ(7,8,n.remotes))("email",e.authorEmail),t.xp6(2),t.hij(" ",e.authorName," "),t.xp6(1),t.Q6J("matTooltip",e.id),t.xp6(1),t.Oqu(e.id)}}let vt=(()=>{class a extends((0,y.j)(T.A)){constructor(e,n){super(),this.router=e,this.store=n}trackByCommits(e,n){return n.id}gotoCommit(e,n){const o=this.store.selectSnapshot(v.E.selectedRepositoryPath);if(!o)throw new Error("Cannot change commit when no repository is selected");this.store.dispatch([new O.jQ(o,e),...n?[new O.gt(o,{area:"commit",oldFilePath:n.oldPath,newFilePath:n.newPath})]:[],new O.BK(o,e)]).subscribe(()=>{this.router.navigate(["/standard/default"])})}static{this.\u0275fac=function(n){return new(n||a)(t.Y36(_.F0),t.Y36(x.yh))}}static{this.\u0275cmp=t.Xpm({type:a,selectors:[["app-commit-search-results-view"]],inputs:{commitResults:"commitResults"},features:[t._Bn([{provide:h.yU,useValue:new Y(310,135)}]),t.qOj],decls:4,vars:4,consts:[[1,"item-list-container"],[1,"main-list"],[4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy"],["appearance","outlined"],[1,"message",3,"matTooltip"],[1,"bottom"],[1,"author",3,"matTooltip"],[3,"remotes","email"],[1,"commit-id",3,"matTooltip","click"]],template:function(n,o){1&n&&(t.TgZ(0,"cdk-virtual-scroll-viewport",0)(1,"ul",1),t.YNc(2,Ct,11,10,"li",2),t.ALo(3,"async"),t.qZA()()),2&n&&(t.xp6(2),t.Q6J("cdkVirtualForOf",t.lcZ(3,2,o.commitResults))("cdkVirtualForTrackBy",o.trackByCommits))},dependencies:[h.x0,h.N7,q.a8,U.gM,tt.A,C.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;overflow:hidden}.main-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:-5px 5px -5px -5px;padding-right:8px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{margin:5px;height:125px;width:300px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;gap:10px;height:125px;width:300px;padding:16px;overflow:hidden}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{overflow:hidden;display:-webkit-box;text-overflow:ellipsis;-webkit-line-clamp:3;-webkit-box-orient:vertical;font-weight:700}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]{margin-right:20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:170px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   app-avatar[_ngcontent-%COMP%]{width:22px;height:22px;margin-right:3px;vertical-align:middle}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .commit-id[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;min-height:20px;width:80px}"],changeDetection:0})}}return(0,H.gn)([(0,x.Ph)(v.E.selectedRemotes)],a.prototype,"remotes",void 0),a})();var Ot=s(790),Pt=s(9131),Mt=s(5410);const wt=["fileSnippetDialog"];function _t(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"li",8),t.NdJ("click",function(){const l=t.CHM(e).$implicit,c=t.oxw(2);return t.KtG(c.openFileSnippetPopup(l))}),t.TgZ(1,"div",9),t._UZ(2,"app-avatar",10),t.ALo(3,"async"),t.TgZ(4,"span",11),t._uU(5),t.qZA()(),t.TgZ(6,"div",12),t._uU(7),t.qZA()()}if(2&a){const e=i.$implicit,n=t.oxw(2);t.xp6(1),t.Q6J("matTooltip",e.authorName+" ("+e.authorEmail+")"),t.xp6(1),t.Q6J("remotes",t.lcZ(3,6,n.remotes))("email",e.authorEmail),t.xp6(3),t.Oqu(e.authorName),t.xp6(1),t.Q6J("matTooltip",e.commitMessage+"\n"+e.commitId),t.xp6(1),t.Oqu(e.commitMessage)}}function yt(a,i){if(1&a&&(t.TgZ(0,"li")(1,"mat-card",4),t._UZ(2,"app-condensed-path",5),t.TgZ(3,"ul",6),t.YNc(4,_t,8,8,"li",7),t.qZA()()()),2&a){const e=i.$implicit,n=t.oxw();t.xp6(2),t.Q6J("path",e.path),t.xp6(2),t.Q6J("ngForOf",e.snippets)("ngForTrackBy",n.trackByFileSnippets)}}function Tt(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",13),t._UZ(1,"app-condensed-path",5),t.TgZ(2,"button",14)(3,"mat-icon"),t._uU(4,"close"),t.qZA()()(),t.TgZ(5,"mat-dialog-content",15)(6,"div",16)(7,"div",17),t._uU(8),t.qZA(),t.TgZ(9,"div",18)(10,"div",9),t._UZ(11,"app-avatar",10),t.ALo(12,"async"),t.TgZ(13,"span",11),t._uU(14),t.qZA()(),t.TgZ(15,"div",19),t.NdJ("click",function(){const l=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.gotoCommit(l.result.commitId,l.result))})("contextmenu",function(){const l=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.copyToClipboard(l.result.commitId))}),t._uU(16),t.qZA()()(),t.TgZ(17,"div",20),t._UZ(18,"app-diff-view",21),t.qZA()(),t.TgZ(19,"mat-dialog-actions")(20,"button",22),t._uU(21,"Cancel"),t.qZA(),t.TgZ(22,"button",23),t.NdJ("click",function(){const l=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.gotoCommit(l.result.commitId,l.result))}),t._uU(23,"Goto commit"),t.qZA(),t.TgZ(24,"button",24),t.NdJ("click",function(){const l=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.blameFile(l.result))}),t._uU(25,"Blame file"),t.qZA()()}if(2&a){const e=i.$implicit,n=t.oxw();t.xp6(1),t.Q6J("path",e.result.oldPath||e.result.newPath),t.xp6(1),t.Q6J("mat-dialog-close",!1),t.xp6(6),t.Oqu(e.result.commitMessage),t.xp6(2),t.Q6J("matTooltip",e.result.authorName+" ("+e.result.authorEmail+")"),t.xp6(1),t.Q6J("remotes",t.lcZ(12,18,n.remotes))("email",e.result.authorEmail),t.xp6(3),t.Oqu(e.result.authorName),t.xp6(1),t.Q6J("matTooltip",e.result.commitId)("mat-dialog-close",!0),t.xp6(1),t.Oqu(e.result.commitId),t.xp6(2),t.Q6J("patch",e.patch)("hideClose",!0)("search",e.search),t.xp6(2),t.Q6J("mat-dialog-close",!1),t.xp6(2),t.Q6J("matTooltip",e.result.commitId)("mat-dialog-close",!0),t.xp6(2),t.Q6J("mat-dialog-close",!0)("matTooltip",e.result.newPath)}}let Rt=(()=>{class a extends((0,y.j)(T.A)){constructor(e,n,o,l){super(),this.router=e,this.dialog=n,this.store=o,this.commitsApi=l}trackByFiles(e,n){return n.path}trackByFileSnippets(e,n){return n.commitId}gotoCommit(e,n){const o=this.store.selectSnapshot(v.E.selectedRepositoryPath);if(!o)throw new Error("Cannot change commit when no repository is selected");this.store.dispatch([new O.jQ(o,e),...n?[new O.gt(o,{area:"commit",oldFilePath:n.oldPath,newFilePath:n.newPath})]:[],new O.BK(o,e)]).subscribe(()=>{this.router.navigate(["/standard/default"])})}openFileSnippetPopup(e){const n=this.store.selectSnapshot(v.E.selectedRepositoryPath);if(!n)throw new Error("Cannot open file snippet when no repository is selected");this.commitsApi.getPatch(n,e.commitId,e.oldPath,e.newPath).subscribe(o=>{this.dialog.open(this.fileSnippetDialog,{data:{result:e,patch:new Z.X({repositoryPath:n,patch:o,isUnstaged:!1}),search:{text:this.store.selectSnapshot(m.po.searchText),matchCase:this.store.selectSnapshot(m.po.matchCase),useRegularExpression:this.store.selectSnapshot(m.po.useRegularExpression)}}})})}copyToClipboard(e){navigator.clipboard.writeText(e??"").then(()=>{})}blameFile(e){this.router.navigate(["/standard/blame"],{queryParams:{area:"commit","commit-id":e.commitId,path:e.newPath}})}static{this.\u0275fac=function(n){return new(n||a)(t.Y36(_.F0),t.Y36(u.uw),t.Y36(x.yh),t.Y36(Ot.T))}}static{this.\u0275cmp=t.Xpm({type:a,selectors:[["app-file-search-results-view"]],viewQuery:function(n,o){if(1&n&&t.Gf(wt,5),2&n){let l;t.iGM(l=t.CRH())&&(o.fileSnippetDialog=l.first)}},inputs:{fileResults:"fileResults"},features:[t._Bn([{provide:h.yU,useValue:new Y(310,160)}]),t.qOj],decls:6,vars:4,consts:[[1,"item-list-container"],[1,"main-list"],[4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy"],["fileSnippetDialog",""],["appearance","outlined"],[1,"path",3,"path"],[1,"sub-list"],[3,"click",4,"ngFor","ngForOf","ngForTrackBy"],[3,"click"],[1,"author",3,"matTooltip"],[3,"remotes","email"],[1,"name"],[1,"message",3,"matTooltip"],["mat-dialog-title","",1,"snippet-dialog-title"],["type","button","mat-icon-button","",1,"app-icon-button-md",3,"mat-dialog-close"],[1,"snippet-dialog"],[1,"top"],[1,"message"],[1,"right"],[1,"id",3,"matTooltip","mat-dialog-close","click","contextmenu"],[1,"diff"],[3,"patch","hideClose","search"],["type","button","mat-button","","cdkFocusInitial","",3,"mat-dialog-close"],["type","button","mat-button","","color","primary",3,"matTooltip","mat-dialog-close","click"],["type","button","mat-button","","color","accent",3,"mat-dialog-close","matTooltip","click"]],template:function(n,o){1&n&&(t.TgZ(0,"cdk-virtual-scroll-viewport",0)(1,"ul",1),t.YNc(2,yt,5,3,"li",2),t.ALo(3,"async"),t.qZA()(),t.YNc(4,Tt,26,20,"ng-template",null,3,t.W1O)),2&n&&(t.xp6(2),t.Q6J("cdkVirtualForOf",t.lcZ(3,2,o.fileResults))("cdkVirtualForTrackBy",o.trackByFiles))},dependencies:[u.ZT,u.uh,u.xY,u.H8,h.x0,h.N7,C.sg,V.lW,V.RK,q.a8,z.Hw,U.gM,tt.A,Pt.j,Mt.s,C.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;overflow:hidden}.main-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:-5px 5px -5px -5px;padding-right:8px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{margin:5px;height:150px;width:300px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;padding:16px;height:150px;width:300px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]   .path[_ngcontent-%COMP%]{margin-bottom:10px;font-weight:700}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]   .sub-list[_ngcontent-%COMP%]{overflow-x:hidden;overflow-y:auto}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]   .sub-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{cursor:pointer;display:flex;gap:10px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]   .sub-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:0 0 80px;display:flex;align-items:center;gap:5px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]   .sub-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   app-avatar[_ngcontent-%COMP%]{width:18px;height:18px;flex:0 0 auto}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]   .sub-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]   .sub-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap}.snippet-dialog-title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-top:10px}.snippet-dialog[_ngcontent-%COMP%]{height:65vh;width:80vw;display:flex;flex-direction:column}.snippet-dialog[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:10px}.snippet-dialog[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{margin-right:40px;white-space:pre;max-height:100px;overflow:auto;flex:100 0 auto;padding-right:5px}.snippet-dialog[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{overflow:hidden;min-width:80px;max-width:200px}.snippet-dialog[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:0 0 80px;display:flex;align-items:center;gap:8px;margin-bottom:5px}.snippet-dialog[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   app-avatar[_ngcontent-%COMP%]{width:24px;height:24px;flex:0 0 auto}.snippet-dialog[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.snippet-dialog[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%]{cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.snippet-dialog[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]{position:relative;padding:10px 10px 0;background:#1e1e1e;overflow:hidden;flex:1 0 auto}.snippet-dialog[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   app-diff-view[_ngcontent-%COMP%]{position:relative}"],changeDetection:0})}}return(0,H.gn)([(0,x.Ph)(v.E.selectedRemotes)],a.prototype,"remotes",void 0),a})();function Zt(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"li",3),t.NdJ("click",function(){const l=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.gotoCommit(l.commitId))}),t.TgZ(1,"mat-icon",4),t._uU(2),t.qZA(),t.TgZ(3,"span",4),t._uU(4),t.qZA()()}if(2&a){const e=i.$implicit,n=t.oxw();t.xp6(1),t.Q6J("matTooltip",e.sourceName),t.xp6(1),t.Oqu(n.getBranchTypeIcon(e.type)),t.xp6(1),t.Q6J("matTooltip",e.refName),t.xp6(1),t.Oqu(e.shortName)}}let Ft=(()=>{class a extends((0,y.j)(T.A)){constructor(e,n){super(),this.router=e,this.store=n,this.getBranchTypeIcon=o=>{switch(o){case"local":return"desktop_windows";case"remote":return"cloud_queue";case"tag":return"label";default:throw new Error(`Unknown reference type: ${o}`)}}}trackByReferences(e,n){return n.refName}gotoCommit(e){const n=this.store.selectSnapshot(v.E.selectedRepositoryPath);if(!n)throw new Error("Cannot change commit when no repository is selected");this.store.dispatch([new O.jQ(n,e),new O.BK(n,e)]).subscribe(()=>{this.router.navigate(["/standard/default"])})}static{this.\u0275fac=function(n){return new(n||a)(t.Y36(_.F0),t.Y36(x.yh))}}static{this.\u0275cmp=t.Xpm({type:a,selectors:[["app-reference-search-results-view"]],inputs:{referenceResults:"referenceResults"},features:[t._Bn([{provide:h.yU,useValue:new Y(220,34)}]),t.qOj],decls:5,vars:4,consts:[[1,"item-list-container"],[1,"main-list"],[3,"click",4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy"],[3,"click"],[3,"matTooltip"]],template:function(n,o){1&n&&(t.TgZ(0,"cdk-virtual-scroll-viewport",0)(1,"div",0)(2,"ul",1),t.YNc(3,Zt,5,4,"li",2),t.ALo(4,"async"),t.qZA()()()),2&n&&(t.xp6(3),t.Q6J("cdkVirtualForOf",t.lcZ(4,2,o.referenceResults))("cdkVirtualForTrackBy",o.trackByReferences))},dependencies:[h.x0,h.N7,z.Hw,U.gM,C.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;overflow:hidden}.main-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:0 -10px;padding-right:8px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{margin:5px 10px;cursor:pointer;width:200px;height:24px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:5px}"],changeDetection:0})}}return(0,H.gn)([(0,x.Ph)(v.E.selectedRemotes)],a.prototype,"remotes",void 0),a})();var St=s(744);function At(a,i){if(1&a&&(t.TgZ(0,"mat-expansion-panel",4)(1,"mat-expansion-panel-header"),t._uU(2),t.qZA(),t._UZ(3,"app-reference-search-results-view",5),t.qZA()),2&a){const e=i.ngIf,n=t.oxw();t.xp6(2),t.hij("References (",e.length,")"),t.xp6(1),t.Q6J("referenceResults",n.referenceResults)}}function bt(a,i){if(1&a&&(t.TgZ(0,"mat-expansion-panel",6)(1,"mat-expansion-panel-header"),t._uU(2),t.qZA(),t._UZ(3,"app-commit-search-results-view",7),t.qZA()),2&a){const e=i.ngIf,n=t.oxw();t.xp6(2),t.hij("Commits (",e.length,")"),t.xp6(1),t.Q6J("commitResults",n.commitResults)}}function Et(a,i){if(1&a&&(t.TgZ(0,"mat-expansion-panel",8)(1,"mat-expansion-panel-header"),t._uU(2),t.qZA(),t._UZ(3,"app-file-search-results-view",9),t.qZA()),2&a){const e=i.ngIf,n=t.oxw();t.xp6(2),t.hij("Files (",e.length,")"),t.xp6(1),t.Q6J("fileResults",n.fileResults)}}class B extends((0,y.j)(T.A)){constructor(i,e){super(),this.store=i,this.searchApi=e,this.completed=new t.vpe,this.referenceResults=new Z.X([]),this.commitResults=new Z.X([]),this.fileResults=new Z.X([])}ngOnInit(){(0,K.a)([this.store.select(m.po.searchText),this.store.select(m.po.matchCase),this.store.select(m.po.useRegularExpression),this.store.select(v.E.selectedRepositoryPath).pipe((0,W.h)(ht.$K))]).pipe((0,pt.w)(([i,e,n,o])=>(this.referenceResults.next([]),this.commitResults.next([]),this.fileResults.next([]),this.completed.next(null),i?this.searchApi.search(o,e,n,i).pipe((0,mt.K)(l=>(this.store.dispatch(new dt.hx("error",`${l}`)),rt.E)),(0,G.x)(()=>{this.completed.next(this.referenceResults.value.length+this.commitResults.value.length+this.fileResults.value.length)})):ct.C)),(0,G.x)(()=>{this.completed.next(null)}),(0,$.R)(this.destroyed$)).subscribe(i=>{switch(i.type){case"reference":const e=this.formatReferenceResult(i);e&&this.referenceResults.next([...this.referenceResults.value,e]);break;case"commit":this.commitResults.next([...this.commitResults.value,i]);break;case"file":this.fileResults.next(this.addFileResult(this.fileResults.value,i))}})}formatReferenceResult(i){const n=/^refs\/heads\/(.*)$/.exec(i.refName);if(n)return{type:"local",refName:i.refName,shortName:n[1],sourceName:"local",commitId:i.commitId};const l=/^refs\/remotes\/([^\/]+)\/(.*)$/.exec(i.refName);if(l)return{type:"remote",refName:i.refName,shortName:l[2],sourceName:l[1],commitId:i.commitId};const r=/^refs\/tags\/(.*)$/.exec(i.refName);return r?{type:"tag",refName:i.refName,shortName:r[1],sourceName:"tag",commitId:i.commitId}:null}addFileResult(i,e){const n=!!e.oldPath,o=!!e.newPath;let l=null,c=null,r=null,p=null;for(let g=0;g<i.length;g++){const F=i[g];if(F.path===e.oldPath&&(l=g),F.path===e.newPath&&(c=g),e.oldPath&&F.path>e.oldPath&&(r=g),e.newPath&&F.path>e.newPath&&(p=g),!(n&&null===l&&null===r||o&&null===c&&null===p))break}let d=i;return n&&o?null!==l||null===r||null!==p&&r>p?(d=this.addFileSnippet(i,e,l,r),d=this.addFileSnippet(i,e,c,p)):(d=this.addFileSnippet(i,e,c,p),d=this.addFileSnippet(i,e,l,r)):n?d=this.addFileSnippet(i,e,l,r):o&&(d=this.addFileSnippet(i,e,c,p)),d}addFileSnippet(i,e,n,o){return null!==n?[...i.slice(0,n),{...i[n],snippets:[...i[n].snippets,e]},...i.slice(n+1)]:null!==o?[...i.slice(0,o),{path:e.newPath??e.oldPath??"",snippets:[e]},...i.slice(o)]:[...i,{path:e.newPath??e.oldPath??"",snippets:[e]}]}static{this.\u0275fac=function(e){return new(e||B)(t.Y36(x.yh),t.Y36(A))}}static{this.\u0275cmp=t.Xpm({type:B,selectors:[["app-search-results-view"]],outputs:{completed:"completed"},features:[t.qOj],decls:10,vars:15,consts:[["multi",""],["class","references","expanded","",4,"ngIf"],["class","commits","expanded","",4,"ngIf"],["class","files","expanded","",4,"ngIf"],["expanded","",1,"references"],[3,"referenceResults"],["expanded","",1,"commits"],[3,"commitResults"],["expanded","",1,"files"],[3,"fileResults"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-accordion",0),t.YNc(1,At,4,2,"mat-expansion-panel",1),t.ALo(2,"nullEmpty"),t.ALo(3,"async"),t.YNc(4,bt,4,2,"mat-expansion-panel",2),t.ALo(5,"nullEmpty"),t.ALo(6,"async"),t.YNc(7,Et,4,2,"mat-expansion-panel",3),t.ALo(8,"nullEmpty"),t.ALo(9,"async"),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,3,t.lcZ(3,5,n.referenceResults))),t.xp6(3),t.Q6J("ngIf",t.lcZ(5,7,t.lcZ(6,9,n.commitResults))),t.xp6(3),t.Q6J("ngIf",t.lcZ(8,11,t.lcZ(9,13,n.fileResults))))},dependencies:[P.pp,P.ib,P.yz,C.O5,vt,Rt,Ft,C.Ov,St.x],styles:["[_nghost-%COMP%]{display:block;height:calc(100% - 69px)}mat-accordion[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:100%}mat-expansion-panel[_ngcontent-%COMP%]{flex-shrink:3;display:flex;flex-direction:column;min-height:48px;background:transparent!important;box-shadow:none!important}mat-expansion-panel.mat-expansion-panel-spacing[_ngcontent-%COMP%]{min-height:96px}mat-expansion-panel.mat-expansion-panel-spacing[_ngcontent-%COMP%] + mat-expansion-panel.mat-expansion-panel-spacing[_ngcontent-%COMP%]{margin:0 0 16px}mat-expansion-panel.mat-expansion-panel-spacing.files[_ngcontent-%COMP%]{margin-bottom:0!important}mat-expansion-panel.mat-expanded.references[_ngcontent-%COMP%]{min-height:99px}mat-expansion-panel.mat-expanded.commits[_ngcontent-%COMP%]{min-height:216.75px}mat-expansion-panel.mat-expanded.files[_ngcontent-%COMP%]{min-height:248px}mat-expansion-panel[_ngcontent-%COMP%]   .references[_ngcontent-%COMP%]{flex-shrink:1}mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{height:48px;padding:0 20px;font-size:20px;flex:0 0 auto}mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header.mat-expanded[_ngcontent-%COMP%]{height:48px}mat-expansion-panel[_ngcontent-%COMP%]     .mat-expansion-panel-content{overflow:hidden}mat-expansion-panel[_ngcontent-%COMP%]     .mat-expansion-panel-content.ng-animating .item-list-container{overflow-y:hidden}mat-expansion-panel[_ngcontent-%COMP%]     .mat-expansion-panel-content .mat-expansion-panel-body{display:flex;flex-direction:column;overflow:hidden;padding:0 0 0 24px}mat-expansion-panel[_ngcontent-%COMP%]     .item-list-container{contain:content;scrollbar-gutter:stable}mat-expansion-panel[_ngcontent-%COMP%]     .item-list-container   .cdk-virtual-scroll-spacer{position:relative}"],changeDetection:0})}}class b extends((0,y.j)(T.A,it.H)){constructor(){super(...arguments),this.completed=new L.x}static{this.\u0275fac=function(){let i;return function(n){return(i||(i=t.n5z(b)))(n||b)}}()}static{this.\u0275cmp=t.Xpm({type:b,selectors:[["ng-component"]],features:[t.qOj],decls:2,vars:1,consts:[[3,"completed"]],template:function(e,n){1&e&&(t._UZ(0,"app-search-action-view",0),t.TgZ(1,"app-search-results-view",0),t.NdJ("completed",function(l){return n.completed.next(l)}),t.qZA()),2&e&&t.Q6J("completed",n.completed)},dependencies:[J,B],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:calc(100% - 50px)}"],changeDetection:0})}}const It=[{path:"",component:b}];class Q{static{this.\u0275fac=function(e){return new(e||Q)}}static{this.\u0275mod=t.oAB({type:Q})}static{this.\u0275inj=t.cJS({imports:[_.Bz.forChild(It),_.Bz]})}}class j{static{this.\u0275fac=function(e){return new(e||j)}}static{this.\u0275mod=t.oAB({type:j})}static{this.\u0275inj=t.cJS({imports:[I.I,Q,w]})}}},7093:(et,E,s)=>{s.d(E,{v:()=>M});var I=s(5412),u=s(9549),P=s(284),f=s(1572),N=s(4385),k=s(3179),S=s(4650);class M{static{this.\u0275fac=function(w){return new(w||M)}}static{this.\u0275mod=S.oAB({type:M})}static{this.\u0275inj=S.cJS({imports:[I.Is,u.lN,P.c,f.Cq,N.LD,k.I]})}}}}]);