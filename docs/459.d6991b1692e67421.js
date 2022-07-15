"use strict";(self.webpackChunkgit_glint=self.webpackChunkgit_glint||[]).push([[459],{5459:(Re,J,a)=>{a.r(J),a.d(J,{SearchLayoutModule:()=>Pe});var E=a(3179),w=a(5412),S=a(7084),T=a(9549),U=a(4144),z=a(8255),$=a(206),e=a(4650);let H=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[E.I,w.Is,S.To,T.lN,U.c,z.Tx,$.m]}),o})();var O=a(7237),F=a(8929),y=a(4810),M=a(9967),Y=a(4745),P=a(4006),R=a(591),B=a(6053),D=a(13),A=a(1059),b=a(7625),m=a(4454),f=a(9253),Q=a(4859),V=a(7392),_=a(266),v=a(6895);const X=["input"];let G=(()=>{class o extends((0,y.j)(M.A)){constructor(t,n){super(),this.router=t,this.store=n,this.searchTextControl=new P.NI(this.store.selectSnapshot(m.po.searchText),{nonNullable:!0}),this.matchCaseControl=new P.NI(!1,{nonNullable:!0}),this.useRegularExpressionControl=new P.NI(!1,{nonNullable:!0}),this.resultText=new R.X("")}ngOnInit(){this.inputElement.nativeElement.focus(),(0,B.aj)([this.searchTextControl.valueChanges.pipe((0,D.b)(200),(0,A.O)(this.searchTextControl.value)),this.matchCaseControl.valueChanges.pipe((0,A.O)(this.matchCaseControl.value)),this.useRegularExpressionControl.valueChanges.pipe((0,A.O)(this.useRegularExpressionControl.value))]).pipe((0,b.R)(this.destroyed$)).subscribe(([t,n,s])=>{this.resultText.next(t?"Searching...":""),this.store.dispatch(new m.ol(t,n,s))}),this.completed.pipe((0,b.R)(this.destroyed$)).subscribe(t=>{this.resultText.next(null===t?this.searchTextControl.value?"Searching...":"":`Found ${t} results`)})}close(){this.router.navigate(["/standard/default"])}clear(){this.searchTextControl.value?this.searchTextControl.setValue(""):(this.store.dispatch(new m.ol("",this.matchCaseControl.value,this.useRegularExpressionControl.value)),this.close())}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(O.F0),e.Y36(f.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-search-action-view"]],viewQuery:function(t,n){if(1&t&&e.Gf(X,7,e.SBq),2&t){let s;e.iGM(s=e.CRH())&&(n.inputElement=s.first)}},inputs:{completed:"completed"},features:[e.qOj],decls:19,vars:8,consts:[["matPrefix",""],["type","text","matInput","","placeholder","Enter search text...",3,"formControl"],["input",""],["type","button","matSuffix","","mat-icon-button","","disableRipple","","matTooltip","Match case",3,"click"],["svgIcon","format-letter-case"],["type","button","matSuffix","","mat-icon-button","","disableRipple","","matTooltip","Use regular expression",3,"click"],["svgIcon","regex"],["type","button","matSuffix","","mat-icon-button","","matTooltip","Cancel",3,"click"],[1,"result-text"],[1,"close-button",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"mat-form-field")(1,"mat-label"),e._uU(2,"Search"),e.qZA(),e.TgZ(3,"mat-icon",0),e._uU(4,"search"),e.qZA(),e._UZ(5,"input",1,2),e.TgZ(7,"button",3),e.NdJ("click",function(){return n.matchCaseControl.setValue(!n.matchCaseControl.value)}),e._UZ(8,"mat-icon",4),e.qZA(),e.TgZ(9,"button",5),e.NdJ("click",function(){return n.useRegularExpressionControl.setValue(!n.useRegularExpressionControl.value)}),e._UZ(10,"mat-icon",6),e.qZA(),e.TgZ(11,"button",7),e.NdJ("click",function(){return n.clear()}),e.TgZ(12,"mat-icon"),e._uU(13,"close"),e.qZA()()(),e.TgZ(14,"div",8),e._uU(15),e.ALo(16,"async"),e.qZA(),e.TgZ(17,"mat-icon",9),e.NdJ("click",function(){return n.close()}),e._uU(18,"close"),e.qZA()),2&t&&(e.xp6(5),e.Q6J("formControl",n.searchTextControl),e.xp6(2),e.ekj("selected",n.matchCaseControl.value),e.xp6(2),e.ekj("selected",n.useRegularExpressionControl.value),e.xp6(6),e.hij(" ",e.lcZ(16,6,n.resultText),"\n"))},dependencies:[P.Fj,P.JJ,P.oH,Q.lW,V.Hw,_.gM,T.KE,T.hX,T.qo,T.R9,U.Nt,v.Ov],styles:["[_nghost-%COMP%]{position:relative;display:block;text-align:center;padding:5px;height:69px}mat-form-field[_ngcontent-%COMP%]     .mat-form-field-wrapper{padding-bottom:0}mat-form-field[_ngcontent-%COMP%]     .mat-form-field-wrapper .mat-form-field-prefix{margin-right:10px}button.selected[_ngcontent-%COMP%]     .mat-button-wrapper{padding:2px;background:#78909c}.result-text[_ngcontent-%COMP%]{display:inline-block;position:absolute;top:calc(50% - 10px);margin-left:10px}.close-button[_ngcontent-%COMP%]{position:absolute;right:20px;top:calc(50% - 12px);cursor:pointer}"],changeDetection:0}),o})();var K=a(5254),W=a(2198),q=a(7545),N=a(537),ee=a(2120),x=a(6197),te=a(3779),ne=a(468);let oe=(()=>{class o{constructor(t){this.baseApi=t}search(t,n,s,l,c){return this.baseApi.stream(te.w.search.onSearchResult,t,n,s,l,c)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(ne._))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var I=a(655),h=a(3668),C=a(4889),j=a(5778);class k{constructor(i,t){this.itemWidth=i,this.itemHeight=t,this.containerSize=new R.X([0,0]),this.index$=new F.xQ,this.resizeObserver=new ResizeObserver(n=>{this.containerSize.next([n[0].contentRect.width,n[0].contentRect.height])}),this.viewport=null,this.scrolledIndexChange=this.index$.pipe((0,j.x)()),this.containerSize.pipe().subscribe(([n,s])=>{if(this.viewport){const l=Math.floor(n/this.itemWidth),c=Math.ceil(this.viewport.getDataLength()/l);this.viewport.setTotalContentSize(c*this.itemHeight),this.viewport.checkViewportSize(),this.updateRenderedRange(this.viewport)}})}attach(i){this.index$=new F.xQ,this.scrolledIndexChange=this.index$.pipe((0,j.x)()),this.viewport=i,this.resizeObserver.disconnect(),this.resizeObserver.observe(i.elementRef.nativeElement),this.containerSize.next([i.elementRef.nativeElement.clientWidth,i.elementRef.nativeElement.clientHeight]);const t=Math.floor(this.containerSize.value[0]/this.itemWidth),n=Math.ceil(i.getDataLength()/t);i.setTotalContentSize(n*this.itemHeight),this.updateRenderedRange(i)}detach(){this.index$.complete(),this.resizeObserver.disconnect(),this.viewport=null}onContentScrolled(){this.viewport&&this.updateRenderedRange(this.viewport)}onDataLengthChanged(){if(this.viewport){const i=Math.floor(this.containerSize.value[0]/this.itemWidth),t=Math.ceil(this.viewport.getDataLength()/i);this.viewport.setTotalContentSize(t*this.itemHeight),this.updateRenderedRange(this.viewport)}}onContentRendered(){if(this.viewport){const{start:i}=this.viewport.getRenderedRange();this.viewport.setRenderedContentOffset(this.getOffsetForIndex(i))}}onRenderedOffsetChanged(){this.viewport&&this.updateRenderedRange(this.viewport)}scrollToIndex(i,t){this.viewport&&this.viewport.scrollToOffset(this.getOffsetForIndex(i),t)}getOffsetForIndex(i){const t=Math.floor(this.containerSize.value[0]/this.itemWidth);return Math.ceil(i/t)*this.itemHeight}getIndexForOffset(i,t=!0){const n=Math.floor(i/this.itemHeight),s=Math.floor(this.containerSize.value[0]/this.itemWidth);return n*s+(t?0:s-1)}updateRenderedRange(i){const t=2*this.itemHeight,n=4*this.itemHeight,s=i.getViewportSize(),l=i.measureScrollOffset(),{start:c,end:p}=i.getRenderedRange(),r={start:c,end:p},d=this.getIndexForOffset(l),u=l-this.getOffsetForIndex(c),g=this.getOffsetForIndex(p)-(l+s);u<t&&0!==c&&(r.start=Math.max(0,this.getIndexForOffset(l-n))),g<t&&p!==i.getDataLength()&&(r.end=Math.min(this.getIndexForOffset(l+s+n,!1),i.getDataLength())),i.setRenderedRange(r),i.setRenderedContentOffset(this.getOffsetForIndex(r.start)),this.index$.next(d)}}var L=a(3546),ie=a(3051);function se(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"li")(1,"mat-card")(2,"div",3),e._uU(3),e.qZA(),e.TgZ(4,"div",4)(5,"div",5),e._UZ(6,"app-avatar",6),e.ALo(7,"async"),e._uU(8),e.qZA(),e.TgZ(9,"div",7),e.NdJ("click",function(){const l=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.gotoCommit(l.id))}),e._uU(10),e.qZA()()()()}if(2&o){const t=i.$implicit,n=e.oxw();e.xp6(2),e.Q6J("matTooltip",t.message),e.xp6(1),e.Oqu(t.message),e.xp6(2),e.Q6J("matTooltip",t.authorName+" ("+t.authorEmail+")"),e.xp6(1),e.Q6J("remotes",e.lcZ(7,8,n.remotes))("email",t.authorEmail),e.xp6(2),e.hij(" ",t.authorName," "),e.xp6(1),e.Q6J("matTooltip",t.id),e.xp6(1),e.Oqu(t.id)}}let ae=(()=>{class o extends((0,y.j)(M.A)){constructor(t,n){super(),this.router=t,this.store=n}trackByCommits(t,n){return n.id}gotoCommit(t,n){const s=this.store.selectSnapshot(x.E.selectedRepositoryPath);if(!s)throw new Error("Cannot change commit when no repository is selected");this.store.dispatch([new C.jQ(s,t),...n?[new C.gt(s,{area:"commit",oldFilePath:n.oldPath,newFilePath:n.newPath})]:[],new C.BK(s,t)]).subscribe(()=>{this.router.navigate(["/standard/default"])})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(O.F0),e.Y36(f.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-commit-search-results-view"]],inputs:{commitResults:"commitResults"},features:[e._Bn([{provide:h.yU,useValue:new k(310,135)}]),e.qOj],decls:4,vars:4,consts:[[1,"item-list-container"],[1,"main-list"],[4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy"],[1,"message",3,"matTooltip"],[1,"bottom"],[1,"author",3,"matTooltip"],[3,"remotes","email"],[1,"commit-id",3,"matTooltip","click"]],template:function(t,n){1&t&&(e.TgZ(0,"cdk-virtual-scroll-viewport",0)(1,"ul",1),e.YNc(2,se,11,10,"li",2),e.ALo(3,"async"),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("cdkVirtualForOf",e.lcZ(3,2,n.commitResults))("cdkVirtualForTrackBy",n.trackByCommits))},dependencies:[h.x0,h.N7,L.a8,_.gM,ie.A,v.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;overflow:hidden}.main-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:-5px 5px -5px -5px;padding-right:8px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{margin:5px;height:125px;width:300px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;gap:10px;height:125px;width:300px;overflow:hidden}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{overflow:hidden;display:-webkit-box;text-overflow:ellipsis;-webkit-line-clamp:3;-webkit-box-orient:vertical;font-weight:700}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]{margin-right:20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:170px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   app-avatar[_ngcontent-%COMP%]{width:22px;height:22px;margin-right:3px;vertical-align:middle}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .commit-id[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;min-height:20px;width:80px}"],changeDetection:0}),(0,I.gn)([(0,f.Ph)(x.E.selectedRemotes)],o.prototype,"remotes",void 0),o})();var le=a(790),ce=a(9131),re=a(5410);const pe=["fileSnippetDialog"];function me(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"li",7),e.NdJ("click",function(){const l=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.openFileSnippetPopup(l))}),e._uU(1),e.qZA()}if(2&o){const t=i.$implicit;e.Q6J("matTooltip",t.commitMessage+"\n\n"+t.commitId),e.xp6(1),e.Oqu(t.commitMessage)}}function he(o,i){if(1&o&&(e.TgZ(0,"li")(1,"mat-card"),e._UZ(2,"app-condensed-path",4),e.TgZ(3,"ul",5),e.YNc(4,me,2,2,"li",6),e.qZA()()()),2&o){const t=i.$implicit,n=e.oxw();e.xp6(2),e.Q6J("path",t.path),e.xp6(2),e.Q6J("ngForOf",t.snippets)("ngForTrackBy",n.trackByFileSnippets)}}function de(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"h2",8),e._UZ(1,"app-condensed-path",4),e.TgZ(2,"button",9)(3,"mat-icon"),e._uU(4,"close"),e.qZA()()(),e.TgZ(5,"mat-dialog-content",10)(6,"div",11)(7,"div",12),e._uU(8),e.qZA(),e.TgZ(9,"div",13)(10,"div",14),e._uU(11),e.qZA(),e.TgZ(12,"div",15),e.NdJ("click",function(){const l=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.gotoCommit(l.result.commitId,l.result))})("contextmenu",function(){const l=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.copyToClipboard(l.result.commitId))}),e._uU(13),e.qZA()()(),e.TgZ(14,"div",16),e._UZ(15,"app-diff-view",17),e.qZA()(),e.TgZ(16,"mat-dialog-actions")(17,"button",18),e._uU(18,"Cancel"),e.qZA(),e.TgZ(19,"button",19),e.NdJ("click",function(){const l=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.gotoCommit(l.result.commitId,l.result))}),e._uU(20,"Goto commit"),e.qZA()()}if(2&o){const t=i.$implicit;e.xp6(1),e.Q6J("path",t.result.oldPath||t.result.newPath),e.xp6(1),e.Q6J("mat-dialog-close",!1),e.xp6(6),e.Oqu(t.result.commitMessage),e.xp6(2),e.Q6J("matTooltip",t.result.authorName),e.xp6(1),e.Oqu(t.result.authorName),e.xp6(1),e.Q6J("matTooltip",t.result.commitId)("mat-dialog-close",!0),e.xp6(1),e.Oqu(t.result.commitId),e.xp6(2),e.Q6J("patch",t.patch)("hideClose",!0)("search",t.search),e.xp6(2),e.Q6J("mat-dialog-close",!1),e.xp6(2),e.Q6J("matTooltip",t.result.commitId)("mat-dialog-close",!0)}}let ue=(()=>{class o extends((0,y.j)(M.A)){constructor(t,n,s,l){super(),this.router=t,this.dialog=n,this.store=s,this.commitsApi=l}trackByFiles(t,n){return n.path}trackByFileSnippets(t,n){return n.commitId}gotoCommit(t,n){const s=this.store.selectSnapshot(x.E.selectedRepositoryPath);if(!s)throw new Error("Cannot change commit when no repository is selected");this.store.dispatch([new C.jQ(s,t),...n?[new C.gt(s,{area:"commit",oldFilePath:n.oldPath,newFilePath:n.newPath})]:[],new C.BK(s,t)]).subscribe(()=>{this.router.navigate(["/standard/default"])})}openFileSnippetPopup(t){const n=this.store.selectSnapshot(x.E.selectedRepositoryPath);if(!n)throw new Error("Cannot open file snippet when no repository is selected");this.commitsApi.getPatch(n,t.commitId,t.oldPath,t.newPath).subscribe(s=>{this.dialog.open(this.fileSnippetDialog,{data:{result:t,patch:new R.X({repositoryPath:n,patch:s,isUnstaged:!1}),search:{text:this.store.selectSnapshot(m.po.searchText),matchCase:this.store.selectSnapshot(m.po.matchCase),useRegularExpression:this.store.selectSnapshot(m.po.useRegularExpression)}}})})}copyToClipboard(t){navigator.clipboard.writeText(t??"").then(()=>{})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(O.F0),e.Y36(w.uw),e.Y36(f.yh),e.Y36(le.T))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-file-search-results-view"]],viewQuery:function(t,n){if(1&t&&e.Gf(pe,5),2&t){let s;e.iGM(s=e.CRH())&&(n.fileSnippetDialog=s.first)}},inputs:{fileResults:"fileResults"},features:[e._Bn([{provide:h.yU,useValue:new k(310,160)}]),e.qOj],decls:6,vars:4,consts:[[1,"item-list-container"],[1,"main-list"],[4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy"],["fileSnippetDialog",""],[1,"path",3,"path"],[1,"sub-list"],[3,"matTooltip","click",4,"ngFor","ngForOf","ngForTrackBy"],[3,"matTooltip","click"],["mat-dialog-title","",1,"snippet-dialog-title"],["type","button","mat-icon-button","",3,"mat-dialog-close"],[1,"snippet-dialog"],[1,"top"],[1,"message"],[1,"right"],[1,"author",3,"matTooltip"],[1,"id",3,"matTooltip","mat-dialog-close","click","contextmenu"],[1,"diff"],[3,"patch","hideClose","search"],["type","button","mat-button","","cdkFocusInitial","",3,"mat-dialog-close"],["type","button","mat-button","","color","primary",3,"matTooltip","mat-dialog-close","click"]],template:function(t,n){1&t&&(e.TgZ(0,"cdk-virtual-scroll-viewport",0)(1,"ul",1),e.YNc(2,he,5,3,"li",2),e.ALo(3,"async"),e.qZA()(),e.YNc(4,de,21,14,"ng-template",null,3,e.W1O)),2&t&&(e.xp6(2),e.Q6J("cdkVirtualForOf",e.lcZ(3,2,n.fileResults))("cdkVirtualForTrackBy",n.trackByFiles))},dependencies:[h.x0,h.N7,v.sg,Q.lW,L.a8,V.Hw,_.gM,ce.j,w.ZT,w.uh,w.xY,w.H8,re.s,v.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;overflow:hidden}.main-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:-5px 5px -5px -5px;padding-right:8px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{margin:5px;height:150px;width:300px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:150px;width:300px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]   .path[_ngcontent-%COMP%]{margin-bottom:10px;font-weight:700}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]   .sub-list[_ngcontent-%COMP%]{overflow-x:hidden;overflow-y:auto}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > mat-card[_ngcontent-%COMP%]   .sub-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:pointer}",".snippet-dialog-title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.snippet-dialog[_ngcontent-%COMP%]{height:65vh;width:80vw;display:flex;flex-direction:column}.snippet-dialog[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:10px}.snippet-dialog[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{margin-right:40px;white-space:pre;max-height:100px;overflow:auto;flex:100 0 auto;padding-right:5px}.snippet-dialog[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{overflow:hidden;min-width:80px;max-width:200px}.snippet-dialog[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%]{cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.snippet-dialog[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]{position:relative;padding:0 10px;background:#1e1e1e;overflow:hidden;flex:1 0 auto}.snippet-dialog[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   app-diff-view[_ngcontent-%COMP%]{position:relative}"],changeDetection:0}),(0,I.gn)([(0,f.Ph)(x.E.selectedRemotes)],o.prototype,"remotes",void 0),o})();function ge(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"li",3),e.NdJ("click",function(){const l=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.gotoCommit(l.commitId))}),e.TgZ(1,"mat-icon",4),e._uU(2),e.qZA(),e.TgZ(3,"span",4),e._uU(4),e.qZA()()}if(2&o){const t=i.$implicit,n=e.oxw();e.xp6(1),e.Q6J("matTooltip",t.sourceName),e.xp6(1),e.Oqu(n.getBranchTypeIcon(t.type)),e.xp6(1),e.Q6J("matTooltip",t.refName),e.xp6(1),e.Oqu(t.shortName)}}let fe=(()=>{class o extends((0,y.j)(M.A)){constructor(t,n){super(),this.router=t,this.store=n,this.getBranchTypeIcon=s=>{switch(s){case"local":return"desktop_windows";case"remote":return"cloud_queue";case"tag":return"label";default:throw new Error(`Unknown reference type: ${s}`)}}}trackByReferences(t,n){return n.refName}gotoCommit(t){const n=this.store.selectSnapshot(x.E.selectedRepositoryPath);if(!n)throw new Error("Cannot change commit when no repository is selected");this.store.dispatch([new C.jQ(n,t),new C.BK(n,t)]).subscribe(()=>{this.router.navigate(["/standard/default"])})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(O.F0),e.Y36(f.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-reference-search-results-view"]],inputs:{referenceResults:"referenceResults"},features:[e._Bn([{provide:h.yU,useValue:new k(220,34)}]),e.qOj],decls:5,vars:4,consts:[[1,"item-list-container"],[1,"main-list"],[3,"click",4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy"],[3,"click"],[3,"matTooltip"]],template:function(t,n){1&t&&(e.TgZ(0,"cdk-virtual-scroll-viewport",0)(1,"div",0)(2,"ul",1),e.YNc(3,ge,5,4,"li",2),e.ALo(4,"async"),e.qZA()()()),2&t&&(e.xp6(3),e.Q6J("cdkVirtualForOf",e.lcZ(4,2,n.referenceResults))("cdkVirtualForTrackBy",n.trackByReferences))},dependencies:[h.x0,h.N7,V.Hw,_.gM,v.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;overflow:hidden}.main-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:0 -10px;padding-right:8px}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{margin:5px 10px;cursor:pointer;width:200px;height:24px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.main-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:5px}"],changeDetection:0}),(0,I.gn)([(0,f.Ph)(x.E.selectedRemotes)],o.prototype,"remotes",void 0),o})();var xe=a(744);function Ce(o,i){if(1&o&&(e.TgZ(0,"mat-expansion-panel",4)(1,"mat-expansion-panel-header"),e._uU(2),e.qZA(),e._UZ(3,"app-reference-search-results-view",5),e.qZA()),2&o){const t=i.ngIf,n=e.oxw();e.xp6(2),e.hij("References (",t.length,")"),e.xp6(1),e.Q6J("referenceResults",n.referenceResults)}}function ve(o,i){if(1&o&&(e.TgZ(0,"mat-expansion-panel",6)(1,"mat-expansion-panel-header"),e._uU(2),e.qZA(),e._UZ(3,"app-commit-search-results-view",7),e.qZA()),2&o){const t=i.ngIf,n=e.oxw();e.xp6(2),e.hij("Commits (",t.length,")"),e.xp6(1),e.Q6J("commitResults",n.commitResults)}}function we(o,i){if(1&o&&(e.TgZ(0,"mat-expansion-panel",8)(1,"mat-expansion-panel-header"),e._uU(2),e.qZA(),e._UZ(3,"app-file-search-results-view",9),e.qZA()),2&o){const t=i.ngIf,n=e.oxw();e.xp6(2),e.hij("Files (",t.length,")"),e.xp6(1),e.Q6J("fileResults",n.fileResults)}}let Oe=(()=>{class o extends((0,y.j)(M.A)){constructor(t,n){super(),this.store=t,this.searchApi=n,this.completed=new e.vpe,this.referenceResults=new R.X([]),this.commitResults=new R.X([]),this.fileResults=new R.X([])}ngOnInit(){let t=!1;(0,B.aj)([this.store.select(m.po.searchText),this.store.select(m.po.matchCase),this.store.select(m.po.useRegularExpression),this.store.select(x.E.selectedRepositoryPath).pipe((0,W.h)(ee.$K))]).pipe((0,q.w)(([n,s,l,c],p)=>(p>0&&(t=!0),this.referenceResults.next([]),this.commitResults.next([]),this.fileResults.next([]),this.completed.next(null),n?this.searchApi.search(c,s,l,n).pipe((0,N.x)(()=>{t||this.completed.next(this.referenceResults.value.length+this.commitResults.value.length+this.fileResults.value.length),t=!1})):(0,K.D)(new Promise(r=>{})).pipe((0,N.x)(()=>{t=!1})))),(0,N.x)(()=>{t=!1,this.completed.next(null)}),(0,b.R)(this.destroyed$)).subscribe(n=>{switch(n.type){case"reference":const s=this.formatReferenceResult(n);s&&this.referenceResults.next([...this.referenceResults.value,s]);break;case"commit":this.commitResults.next([...this.commitResults.value,n]);break;case"file":this.fileResults.next(this.addFileResult(this.fileResults.value,n))}})}formatReferenceResult(t){const s=/^refs\/heads\/(.*)$/.exec(t.refName);if(s)return{type:"local",refName:t.refName,shortName:s[1],sourceName:"local",commitId:t.commitId};const c=/^refs\/remotes\/([^\/]+)\/(.*)$/.exec(t.refName);if(c)return{type:"remote",refName:t.refName,shortName:c[2],sourceName:c[1],commitId:t.commitId};const r=/^refs\/tags\/(.*)$/.exec(t.refName);return r?{type:"tag",refName:t.refName,shortName:r[1],sourceName:"tag",commitId:t.commitId}:null}addFileResult(t,n){const s=!!n.oldPath,l=!!n.newPath;let c=null,p=null,r=null,d=null;for(let g=0;g<t.length;g++){const Z=t[g];if(Z.path===n.oldPath&&(c=g),Z.path===n.newPath&&(p=g),n.oldPath&&Z.path>n.oldPath&&(r=g),n.newPath&&Z.path>n.newPath&&(d=g),!(s&&null===c&&null===r||l&&null===p&&null===d))break}let u=t;return s&&l?null!==c||null===r||null!==d&&r>d?(u=this.addFileSnippet(t,n,c,r),u=this.addFileSnippet(t,n,p,d)):(u=this.addFileSnippet(t,n,p,d),u=this.addFileSnippet(t,n,c,r)):s?u=this.addFileSnippet(t,n,c,r):l&&(u=this.addFileSnippet(t,n,p,d)),u}addFileSnippet(t,n,s,l){return null!==s?[...t.slice(0,s),{...t[s],snippets:[...t[s].snippets,n]},...t.slice(s+1)]:null!==l?[...t.slice(0,l),{path:n.newPath??n.oldPath??"",snippets:[n]},...t.slice(l)]:[...t,{path:n.newPath??n.oldPath??"",snippets:[n]}]}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(f.yh),e.Y36(oe))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-search-results-view"]],outputs:{completed:"completed"},features:[e.qOj],decls:10,vars:15,consts:[["multi",""],["class","references","expanded","",4,"ngIf"],["class","commits","expanded","",4,"ngIf"],["class","files","expanded","",4,"ngIf"],["expanded","",1,"references"],[3,"referenceResults"],["expanded","",1,"commits"],[3,"commitResults"],["expanded","",1,"files"],[3,"fileResults"]],template:function(t,n){1&t&&(e.TgZ(0,"mat-accordion",0),e.YNc(1,Ce,4,2,"mat-expansion-panel",1),e.ALo(2,"nullEmpty"),e.ALo(3,"async"),e.YNc(4,ve,4,2,"mat-expansion-panel",2),e.ALo(5,"nullEmpty"),e.ALo(6,"async"),e.YNc(7,we,4,2,"mat-expansion-panel",3),e.ALo(8,"nullEmpty"),e.ALo(9,"async"),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",e.lcZ(2,3,e.lcZ(3,5,n.referenceResults))),e.xp6(3),e.Q6J("ngIf",e.lcZ(5,7,e.lcZ(6,9,n.commitResults))),e.xp6(3),e.Q6J("ngIf",e.lcZ(8,11,e.lcZ(9,13,n.fileResults))))},dependencies:[v.O5,S.pp,S.ib,S.yz,ae,ue,fe,v.Ov,xe.x],styles:["[_nghost-%COMP%]{display:block;height:calc(100% - 69px)}mat-accordion[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:100%}mat-expansion-panel[_ngcontent-%COMP%]{flex-shrink:3;display:flex;flex-direction:column;min-height:48px;background:transparent!important;box-shadow:none!important}mat-expansion-panel.mat-expansion-panel-spacing[_ngcontent-%COMP%]{min-height:96px}mat-expansion-panel.mat-expansion-panel-spacing[_ngcontent-%COMP%] + mat-expansion-panel.mat-expansion-panel-spacing[_ngcontent-%COMP%]{margin:0 0 16px}mat-expansion-panel.mat-expansion-panel-spacing.files[_ngcontent-%COMP%]{margin-bottom:0!important}mat-expansion-panel.mat-expanded.references[_ngcontent-%COMP%]{min-height:99px}mat-expansion-panel.mat-expanded.commits[_ngcontent-%COMP%]{min-height:216.75px}mat-expansion-panel.mat-expanded.files[_ngcontent-%COMP%]{min-height:248px}mat-expansion-panel[_ngcontent-%COMP%]   .references[_ngcontent-%COMP%]{flex-shrink:1}mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{height:48px;padding:0 20px;font-size:20px;flex:0 0 auto}mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header.mat-expanded[_ngcontent-%COMP%]{height:48px}mat-expansion-panel[_ngcontent-%COMP%]     .mat-expansion-panel-content{overflow:hidden}mat-expansion-panel[_ngcontent-%COMP%]     .mat-expansion-panel-content.ng-animating .item-list-container{overflow-y:hidden}mat-expansion-panel[_ngcontent-%COMP%]     .mat-expansion-panel-content .mat-expansion-panel-body{display:flex;flex-direction:column;overflow:hidden;padding:0 0 0 24px}mat-expansion-panel[_ngcontent-%COMP%]     .item-list-container{contain:content;scrollbar-gutter:stable}mat-expansion-panel[_ngcontent-%COMP%]     .item-list-container   .cdk-virtual-scroll-spacer{position:relative}"],changeDetection:0}),o})();const ye=[{path:"",component:(()=>{class o extends((0,y.j)(M.A,Y.H)){constructor(){super(...arguments),this.completed=new F.xQ}}return o.\u0275fac=function(){let i;return function(n){return(i||(i=e.n5z(o)))(n||o)}}(),o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],features:[e.qOj],decls:2,vars:1,consts:[[3,"completed"]],template:function(t,n){1&t&&(e._UZ(0,"app-search-action-view",0),e.TgZ(1,"app-search-results-view",0),e.NdJ("completed",function(l){return n.completed.next(l)}),e.qZA()),2&t&&e.Q6J("completed",n.completed)},dependencies:[G,Oe],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:calc(100% - 50px)}"],changeDetection:0}),o})()}];let Me=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[O.Bz.forChild(ye),O.Bz]}),o})(),Pe=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[E.I,Me,H]}),o})()}}]);