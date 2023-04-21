"use strict";(self.webpackChunkgit_glint=self.webpackChunkgit_glint||[]).push([[450],{5773:(L,P,e)=>{e.d(P,{F:()=>m});var n=e(4650);class m extends n.SBq{constructor(a){super(a.nativeElement)}static{this.\u0275fac=function(A){return new(A||m)(n.Y36(n.SBq))}}static{this.\u0275dir=n.lG2({type:m,selectors:[["","appElementRef",""]],exportAs:["appElementRef"],features:[n.qOj]})}}},6271:(L,P,e)=>{e.d(P,{k:()=>a});var n=e(3779),m=e(4650),d=e(7016);class a{constructor(s){this.baseApi=s}getRelativePath(s,O){return this.baseApi.single(n.w.files.getRelativePath,s,O)}getResolvedPath(s,O){return this.baseApi.single(n.w.files.getResolvedPath,s,O)}getFileContents(s){return this.baseApi.single(n.w.files.getFileContents,s)}openFileDialog(s){return this.baseApi.single(n.w.files.openFileDialog,s)}openFolderDialog(s,O){return this.baseApi.single(n.w.files.openFolderDialog,s,O)}openFileWithShell(s){return this.baseApi.single(n.w.files.openFileWithShell,s)}hasTerminal(){return this.baseApi.single(n.w.files.hasTerminal)}openTerminal(s){return this.baseApi.single(n.w.files.openTerminal,s)}hasVsCode(){return this.baseApi.single(n.w.files.hasVsCode)}openVsCode(s){return this.baseApi.single(n.w.files.openVsCode,s)}static{this.\u0275fac=function(O){return new(O||a)(m.LFG(d._))}}static{this.\u0275prov=m.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}}},1815:(L,P,e)=>{e.d(P,{E:()=>K});var n=e(4080),m=e(1135),d=e(5698),a=e(2722),A=e(4004),s=e(8926),O=e(9967),_=e(4462),c=e(8310),M=e(2120),r=e(6966),h=e(2270),t=e(4650),W=e(9615),v=e(9867),U=e(6271),g=e(3394),R=e(6895),i=e(4859),u=e(7392),D=e(266),l=e(5773),E=e(4442);function F(f,T){if(1&f){const o=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(o);const I=t.oxw(2);return t.KtG(I.openWithTerminal())}),t.TgZ(1,"mat-icon"),t._uU(2,"terminal"),t.qZA(),t._uU(3),t.ALo(4,"translate"),t.qZA()}2&f&&(t.xp6(3),t.hij(" ",t.lcZ(4,1,"Terminal")," "))}function w(f,T){if(1&f){const o=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(o);const I=t.oxw(2);return t.KtG(I.openWithVsCode())}),t._UZ(1,"mat-icon",9),t._uU(2),t.ALo(3,"translate"),t.qZA()}2&f&&(t.xp6(2),t.hij(" ",t.lcZ(3,1,"Visual Studio Code")," "))}function b(f,T){if(1&f){const o=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){const B=t.CHM(o).$implicit,p=t.oxw(2);return t.KtG(p.openRemote(B.url))}),t._UZ(1,"mat-icon",11),t._uU(2),t.ALo(3,"translate"),t.ALo(4,"translate"),t.ALo(5,"translate"),t.qZA()}if(2&f){const o=T.$implicit;t.Q6J("matTooltip",o.url),t.xp6(1),t.s9C("svgIcon",o.type),t.xp6(1),t.AsE(" ","bitbucket"===o.type?t.lcZ(3,4,"Bitbucket"):"github"===o.type?t.lcZ(4,6,"GitHub"):"gitlab"===o.type?t.lcZ(5,8,"GitLab"):"",": ",o.name," ")}}function S(f,T){if(1&f){const o=t.EpF();t.TgZ(0,"div",4)(1,"div",5),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"button",6),t.NdJ("click",function(){t.CHM(o);const I=t.oxw();return t.KtG(I.openWithFileExplorer())}),t.TgZ(5,"mat-icon"),t._uU(6,"folder"),t.qZA(),t._uU(7),t.qZA(),t.YNc(8,F,5,3,"button",7),t.ALo(9,"async"),t.YNc(10,w,4,3,"button",7),t.ALo(11,"async"),t.YNc(12,b,6,10,"button",8),t.ALo(13,"async"),t.qZA()}if(2&f){const o=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,5,"Open with...")),t.xp6(5),t.hij(" ",o.folderText," "),t.xp6(1),t.Q6J("ngIf",t.lcZ(9,7,o.hasTerminal)),t.xp6(2),t.Q6J("ngIf",t.lcZ(11,9,o.hasVsCode)),t.xp6(2),t.Q6J("ngForOf",t.lcZ(13,11,o.remotes))}}class K extends((0,s.j)(O.A)){constructor(T,o,C,I,B){super(),this.overlay=T,this.viewContainerRef=o,this.store=C,this.filesApi=I,this.providerUrlMatcherService=B,this.menuOverlayRef=new m.X(null),this.folderText=_.V?"Finder":_.E?"File Explorer":"File Manager",this.openMenu=(p,x,y)=>{p.preventDefault(),p.stopPropagation(),this.closeMenu();const Z=this.overlay.create({positionStrategy:this.overlay.position().flexibleConnectedTo(x).withPositions([{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"}])});this.menuOverlayRef.next(Z),Z.attach(new n.UE(y,this.viewContainerRef)),(0,c.t)(Z,!1).pipe((0,d.q)(1),(0,a.R)(this.destroyed$)).subscribe(()=>this.closeMenu())},this.closeMenu=()=>{this.menuOverlayRef.value&&(this.menuOverlayRef.value.dispose(),this.menuOverlayRef.next(null))},this.openWithFileExplorer=()=>{const p=this.store.selectSnapshot(r.E.selectedRepositoryPath);if(!p)throw new h.uX;this.filesApi.openFileWithShell(p).subscribe(),this.closeMenu()},this.openWithTerminal=()=>{const p=this.store.selectSnapshot(r.E.selectedRepositoryPath);if(!p)throw new h.uX;this.filesApi.openTerminal(p).subscribe(),this.closeMenu()},this.openWithVsCode=()=>{const p=this.store.selectSnapshot(r.E.selectedRepositoryPath);if(!p)throw new h.uX;this.filesApi.openVsCode(p).subscribe(),this.closeMenu()},this.openRemote=p=>{window.open(p),this.closeMenu()}}ngOnInit(){this.remotes=this.store.select(r.E.selectedRemotes).pipe((0,A.U)(T=>(T??[]).map(o=>{const C=this.providerUrlMatcherService.matchProvider(o.url);return C?[o,C]:null}).filter(M.$K).map(([o,C])=>({type:C.type,url:this.providerUrlMatcherService.getUrl(C),name:o.name})))),this.hasTerminal=this.filesApi.hasTerminal(),this.hasVsCode=this.filesApi.hasVsCode()}static{this.\u0275fac=function(o){return new(o||K)(t.Y36(W.aV),t.Y36(t.s_b),t.Y36(v.yh),t.Y36(U.k),t.Y36(g.d))}}static{this.\u0275cmp=t.Xpm({type:K,selectors:[["app-repository-actions-open-with"]],features:[t.qOj],decls:7,vars:3,consts:[["type","button","mat-stroked-button","","appElementRef","",1,"item",3,"matTooltip","click"],["openWithMenuBtn","appElementRef"],[1,"launch-icon"],["openWithMenu",""],[1,"menu-panel"],[1,"menu-header"],["type","button",1,"menu-item",3,"click"],["type","button","class","menu-item",3,"click",4,"ngIf"],["type","button","class","menu-item",3,"matTooltip","click",4,"ngFor","ngForOf"],["svgIcon","microsoft-visual-studio-code"],["type","button",1,"menu-item",3,"matTooltip","click"],[3,"svgIcon"]],template:function(o,C){if(1&o){const I=t.EpF();t.TgZ(0,"button",0,1),t.NdJ("click",function(p){t.CHM(I);const x=t.MAs(1),y=t.MAs(6);return t.KtG(C.openMenu(p,x,y))}),t.ALo(2,"translate"),t.TgZ(3,"mat-icon",2),t._uU(4,"launch"),t.qZA()(),t.YNc(5,S,14,13,"ng-template",null,3,t.W1O)}2&o&&t.Q6J("matTooltip",t.lcZ(2,1,"Open repository with..."))},dependencies:[R.sg,R.O5,i.lW,u.Hw,D.gM,l.F,R.Ov,E.X],styles:[".item[_ngcontent-%COMP%]{min-width:45px;padding:0 10px;font-size:0}"],changeDetection:0})}}},98:(L,P,e)=>{e.d(P,{z:()=>v});var n=e(2843),m=e(262),d=e(4004),a=e(2270),A=e(3825),s=e(2120),O=e(8523),_=e(4889),c=e(1129),M=e(8724),r=e(4924),h=e(4650),t=e(9867),W=e(790);class v{constructor(g,R){this.store=g,this.commitsApi=R,this.startEdit=(i,u)=>this.store.dispatch(new c.z0(i,{name:"Edit commits",detail:(0,A.Iu)("from _commit_",{commitId:u}),do:()=>this.store.dispatch(new c.LF(i,u))})),this.discardEdit=i=>this.store.dispatch(new c.z0(i,{name:"Discard commit edits",do:()=>this.commitsApi.discardCommitEditing(i)})),this.saveEdits=i=>this.store.dispatch(new c.z0(i,{name:"Save commit edits",do:()=>this.commitsApi.completeCommitEditing(i).pipe((0,O.C)(()=>this.store.dispatch(new _.Vu(i,[_.nh.commits,_.nh.currentBranchCommitId,_.nh.headCommitId,_.nh.mergeHeads,_.nh.merges,_.nh.references,_.nh.stagedChanges,_.nh.submodules,_.nh.unstagedChanges]))))})),this.editCommitDetails=(i,u,D)=>this.store.dispatch(new c.z0(i,{name:"Edit commit",detail:D,do:()=>this.commitsApi.editCommitDetails(i,u,D,this.getCommitter()).pipe((0,m.K)(l=>a.L8.matches(l)?(0,n._)(()=>new s.ZR(l)):(0,n._)(()=>l)))})).pipe((0,d.U)(()=>this.store.selectSnapshot(M.h.mostRecentAction(i))?.state)),this.squashCommit=(i,u,D)=>this.store.dispatch(new c.z0(i,{name:"Squash commit",detail:(0,A.Iu)("_commit_ up/down",{commitId:u,isUpwards:"up"===D}),do:()=>this.commitsApi.squashCommit(i,u,D,this.getCommitter()).pipe((0,m.K)(l=>a.bk.matches(l)||a.xb.matches(l)||a.Ak.matches(l)||a.zd.matches(l)||a.zN.matches(l)||a.L8.matches(l)?(0,n._)(()=>new s.ZR(l)):(0,n._)(()=>l)))})).pipe((0,d.U)(()=>this.store.selectSnapshot(M.h.mostRecentAction(i))?.state)),this.insertCommit=(i,u,D)=>this.store.dispatch(new c.z0(i,{name:"Insert commit",detail:(0,A.Iu)("above/below _commit_",{commitId:u,isAbove:"above"===D}),do:()=>this.commitsApi.insertCommit(i,u,D,this.getCommitter()).pipe((0,m.K)(l=>a.L8.matches(l)?(0,n._)(()=>new s.ZR(l)):(0,n._)(()=>l)))})).pipe((0,d.U)(()=>this.store.selectSnapshot(M.h.mostRecentAction(i))?.state)),this.moveCommitChanges=(i,u,D,l)=>this.store.dispatch(new c.z0(i,{name:"Move commit changes",detail:(0,A.Iu)("_commit_ up/down",{commitId:u,isUpwards:"up"===D}),do:()=>this.commitsApi.moveCommitChanges(i,u,D,l,this.getCommitter()).pipe((0,m.K)(E=>a.L8.matches(E)||a.ND.matches(E)||a._5.matches(E)||a.x4.matches(E)||a.KS.matches(E)||a.wX.matches(E)?(0,n._)(()=>new s.ZR(E)):(0,n._)(()=>E)))})).pipe((0,d.U)(()=>this.store.selectSnapshot(M.h.mostRecentAction(i))?.state))}getCommitter(){const g=this.store.selectSnapshot(r.$.selectedProfile);return g&&g.name&&g.email?{name:g.name,email:g.email}:null}static{this.\u0275fac=function(R){return new(R||v)(h.LFG(t.yh),h.LFG(W.T))}}static{this.\u0275prov=h.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"})}}},7093:(L,P,e)=>{e.d(P,{v:()=>_});var n=e(5412),m=e(9549),d=e(284),a=e(1572),A=e(4385),s=e(3179),O=e(4650);class _{static{this.\u0275fac=function(r){return new(r||_)}}static{this.\u0275mod=O.oAB({type:_})}static{this.\u0275inj=O.cJS({imports:[n.Is,m.lN,d.c,a.Cq,A.LD,s.I]})}}},4874:(L,P,e)=>{e.d(P,{p:()=>s});var n=e(2686),m=e(2270),d=e(3825),a=e(2120),A=e(4650);class s{constructor(){this.parseReference=_=>{const c=s.referenceRegex.exec(_);if(!c)return null;if("remotes"===c[1]){const M=s.remoteBranchRegex.exec(_);if(!M)throw new m.xB(_);return{branch:M[2]??"",sourceName:M[1]??"",sourceType:"remote"}}return"stash"===c[1]?{branch:(0,d.Iu)("stash"),sourceName:(0,d.Iu)("stash"),sourceType:"stash"}:{branch:c[2],sourceName:(0,d.Iu)("heads"===c[1]?"local":"tag"),sourceType:"heads"===c[1]?"local":"tag"}},this.getBranchTypeIcon=_=>{switch(_){case"local":return"desktop_windows";case"remote":return"cloud_queue";case"stash":return"archive";case"tag":return"label"}}}static{this.referenceRegex=/refs\/(heads|remotes|tags|stash)(?:\/(.*))?/}static{this.remoteBranchRegex=/refs\/remotes\/([^\/]*)\/(.*)/}calculateBranches(_,c){const M=(0,n.Z)(_.map(this.parseReference).filter(a.$K),({branch:r})=>r);return Object.entries(M).map(([r,h])=>({name:r,sources:h.map(t=>({name:t.sourceName,type:t.sourceType,icon:this.getBranchTypeIcon(t.sourceType)}))})).sort((r,h)=>{const t=r.sources.some(i=>"local"===i.type&&`refs/heads/${r.name}`===c),W=r.sources.some(i=>"local"===i.type&&`refs/heads/${h.name}`===c);if(t&&!W)return-1;if(!t&&W)return 1;const v=r.sources.some(i=>"local"===i.type),U=h.sources.some(i=>"local"===i.type);if(v&&!U)return-1;if(!v&&U)return 1;const g=r.sources.some(i=>"remote"===i.type),R=h.sources.some(i=>"remote"===i.type);return g&&!R?-1:!g&&R?1:r.sources.length>h.sources.length?-1:r.sources.length<h.sources.length?1:r.name>h.name?-1:r.name<h.name?1:0}).slice(0,30)}static{this.\u0275fac=function(c){return new(c||s)}}static{this.\u0275prov=A.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}}}}]);