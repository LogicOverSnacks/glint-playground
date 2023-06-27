"use strict";(self.webpackChunkgit_glint=self.webpackChunkgit_glint||[]).push([[450],{15773:(S,R,t)=>{t.d(R,{F:()=>a});var T=t(43144),I=t(15671),_=t(60136),D=t(18486),g=t(94650),a=function(d){(0,_.Z)(i,d);var n=(0,D.Z)(i);function i(s){return(0,I.Z)(this,i),n.call(this,s.nativeElement)}return(0,T.Z)(i)}(g.SBq);a.\u0275fac=function(n){return new(n||a)(g.Y36(g.SBq))},a.\u0275dir=g.lG2({type:a,selectors:[["","appElementRef",""]],exportAs:["appElementRef"],features:[g.qOj]})},66271:(S,R,t)=>{t.d(R,{k:()=>a});var T=t(15671),I=t(43144),_=t(63779),D=t(94650),g=t(7016),a=function(){function d(n){(0,T.Z)(this,d),this.baseApi=n}return(0,I.Z)(d,[{key:"getRelativePath",value:function(i,s){return this.baseApi.single(_.w.files.getRelativePath,i,s)}},{key:"getResolvedPath",value:function(i,s){return this.baseApi.single(_.w.files.getResolvedPath,i,s)}},{key:"getFileContents",value:function(i){return this.baseApi.single(_.w.files.getFileContents,i)}},{key:"openFileDialog",value:function(i){return this.baseApi.single(_.w.files.openFileDialog,i)}},{key:"openFolderDialog",value:function(i,s){return this.baseApi.single(_.w.files.openFolderDialog,i,s)}},{key:"openFileWithShell",value:function(i){return this.baseApi.single(_.w.files.openFileWithShell,i)}},{key:"hasTerminal",value:function(){return this.baseApi.single(_.w.files.hasTerminal)}},{key:"openTerminal",value:function(i){return this.baseApi.single(_.w.files.openTerminal,i)}},{key:"hasVsCode",value:function(){return this.baseApi.single(_.w.files.hasVsCode)}},{key:"openVsCode",value:function(i){return this.baseApi.single(_.w.files.openVsCode,i)}}]),d}();a.\u0275fac=function(n){return new(n||a)(D.LFG(g._))},a.\u0275prov=D.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})},21815:(S,R,t)=>{t.d(R,{E:()=>j});var T=t(97685),I=t(15671),_=t(43144),D=t(60136),g=t(18486),a=t(84080),d=t(61135),n=t(95698),i=t(82722),s=t(54004),p=t(78926),f=t(9967),W=t(94462),L=t(78310),b=t(32120),E=t(36966),m=t(82270),e=t(94650),U=t(98184),O=t(89867),l=t(66271),r=t(83394),h=t(36895),u=t(4859),F=t(97392),c=t(10266),C=t(15773),N=t(74442);function V(P,B){if(1&P){var A=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){e.CHM(A);var K=e.oxw(2);return e.KtG(K.openWithTerminal())}),e.TgZ(1,"mat-icon"),e._uU(2,"terminal"),e.qZA(),e._uU(3),e.ALo(4,"translate"),e.qZA()}2&P&&(e.xp6(3),e.hij(" ",e.lcZ(4,1,"Terminal")," "))}function Y(P,B){if(1&P){var A=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){e.CHM(A);var K=e.oxw(2);return e.KtG(K.openWithVsCode())}),e._UZ(1,"mat-icon",9),e._uU(2),e.ALo(3,"translate"),e.qZA()}2&P&&(e.xp6(2),e.hij(" ",e.lcZ(3,1,"Visual Studio Code")," "))}function z(P,B){if(1&P){var A=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){var x=e.CHM(A).$implicit,Z=e.oxw(2);return e.KtG(Z.openRemote(x.url))}),e._UZ(1,"mat-icon",11),e._uU(2),e.ALo(3,"translate"),e.ALo(4,"translate"),e.ALo(5,"translate"),e.qZA()}if(2&P){var v=B.$implicit;e.Q6J("matTooltip",v.url),e.xp6(1),e.s9C("svgIcon",v.type),e.xp6(1),e.AsE(" ","bitbucket"===v.type?e.lcZ(3,4,"Bitbucket"):"github"===v.type?e.lcZ(4,6,"GitHub"):"gitlab"===v.type?e.lcZ(5,8,"GitLab"):"",": ",v.name," ")}}function H(P,B){if(1&P){var A=e.EpF();e.TgZ(0,"div",4)(1,"div",5),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",6),e.NdJ("click",function(){e.CHM(A);var y=e.oxw();return e.KtG(y.openWithFileExplorer())}),e.TgZ(5,"mat-icon"),e._uU(6,"folder"),e.qZA(),e._uU(7),e.qZA(),e.YNc(8,V,5,3,"button",7),e.ALo(9,"async"),e.YNc(10,Y,4,3,"button",7),e.ALo(11,"async"),e.YNc(12,z,6,10,"button",8),e.ALo(13,"async"),e.qZA()}if(2&P){var v=e.oxw();e.xp6(2),e.Oqu(e.lcZ(3,5,"Open with...")),e.xp6(5),e.hij(" ",v.folderText," "),e.xp6(1),e.Q6J("ngIf",e.lcZ(9,7,v.hasTerminal)),e.xp6(2),e.Q6J("ngIf",e.lcZ(11,9,v.hasVsCode)),e.xp6(2),e.Q6J("ngForOf",e.lcZ(13,11,v.remotes))}}var j=function(P){(0,D.Z)(A,P);var B=(0,g.Z)(A);function A(v,K,y,x,Z){var o;return(0,I.Z)(this,A),(o=B.call(this)).overlay=v,o.viewContainerRef=K,o.store=y,o.filesApi=x,o.providerUrlMatcherService=Z,o.menuOverlayRef=new d.X(null),o.folderText=W.V?"Finder":W.E?"File Explorer":"File Manager",o.openMenu=function(M,G,J){M.preventDefault(),M.stopPropagation(),o.closeMenu();var w=o.overlay.create({positionStrategy:o.overlay.position().flexibleConnectedTo(G).withPositions([{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"}])});o.menuOverlayRef.next(w),w.attach(new a.UE(J,o.viewContainerRef)),(0,L.t)(w,!1).pipe((0,n.q)(1),(0,i.R)(o.destroyed$)).subscribe(function(){return o.closeMenu()})},o.closeMenu=function(){o.menuOverlayRef.value&&(o.menuOverlayRef.value.dispose(),o.menuOverlayRef.next(null))},o.openWithFileExplorer=function(){var M=o.store.selectSnapshot(E.E.selectedRepositoryPath);if(!M)throw new m.uX;o.filesApi.openFileWithShell(M).subscribe(),o.closeMenu()},o.openWithTerminal=function(){var M=o.store.selectSnapshot(E.E.selectedRepositoryPath);if(!M)throw new m.uX;o.filesApi.openTerminal(M).subscribe(),o.closeMenu()},o.openWithVsCode=function(){var M=o.store.selectSnapshot(E.E.selectedRepositoryPath);if(!M)throw new m.uX;o.filesApi.openVsCode(M).subscribe(),o.closeMenu()},o.openRemote=function(M){window.open(M),o.closeMenu()},o}return(0,_.Z)(A,[{key:"ngOnInit",value:function(){var K=this;this.remotes=this.store.select(E.E.selectedRemotes).pipe((0,s.U)(function(y){return(y??[]).map(function(x){var Z=K.providerUrlMatcherService.matchProvider(x.url);return Z?[x,Z]:null}).filter(b.$K).map(function(x){var Z=(0,T.Z)(x,2),o=Z[0],M=Z[1];return{type:M.type,url:K.providerUrlMatcherService.getUrl(M),name:o.name}})})),this.hasTerminal=this.filesApi.hasTerminal(),this.hasVsCode=this.filesApi.hasVsCode()}}]),A}((0,p.j)(f.A));j.\u0275fac=function(B){return new(B||j)(e.Y36(U.aV),e.Y36(e.s_b),e.Y36(O.yh),e.Y36(l.k),e.Y36(r.d))},j.\u0275cmp=e.Xpm({type:j,selectors:[["app-repository-actions-open-with"]],features:[e.qOj],decls:7,vars:3,consts:[["type","button","mat-stroked-button","","appElementRef","",1,"item",3,"matTooltip","click"],["openWithMenuBtn","appElementRef"],[1,"launch-icon"],["openWithMenu",""],[1,"menu-panel"],[1,"menu-header"],["type","button",1,"menu-item",3,"click"],["type","button","class","menu-item",3,"click",4,"ngIf"],["type","button","class","menu-item",3,"matTooltip","click",4,"ngFor","ngForOf"],["svgIcon","microsoft-visual-studio-code"],["type","button",1,"menu-item",3,"matTooltip","click"],[3,"svgIcon"]],template:function(B,A){if(1&B){var v=e.EpF();e.TgZ(0,"button",0,1),e.NdJ("click",function(y){e.CHM(v);var x=e.MAs(1),Z=e.MAs(6);return e.KtG(A.openMenu(y,x,Z))}),e.ALo(2,"translate"),e.TgZ(3,"mat-icon",2),e._uU(4,"launch"),e.qZA()(),e.YNc(5,H,14,13,"ng-template",null,3,e.W1O)}2&B&&e.Q6J("matTooltip",e.lcZ(2,1,"Open repository with..."))},dependencies:[h.sg,h.O5,u.lW,F.Hw,c.gM,C.F,h.Ov,N.X],styles:[".item[_ngcontent-%COMP%]{min-width:45px;padding:0 10px;font-size:0}"],changeDetection:0})},60098:(S,R,t)=>{t.d(R,{z:()=>m});var T=t(15671),I=t(43144),_=t(62843),D=t(70262),g=t(54004),a=t(82270),d=t(3825),n=t(32120),i=t(8523),s=t(64889),p=t(11129),f=t(68724),W=t(84924),L=t(94650),b=t(89867),E=t(20790),m=function(){function e(U,O){var l=this;(0,T.Z)(this,e),this.store=U,this.commitsApi=O,this.startEdit=function(r,h){return l.store.dispatch(new p.z0(r,{name:"Edit commits",detail:(0,d.Iu)("from _commit_",{commitId:h}),do:function(){return l.store.dispatch(new p.LF(r,h))}}))},this.discardEdit=function(r){return l.store.dispatch(new p.z0(r,{name:"Discard commit edits",do:function(){return l.commitsApi.discardCommitEditing(r)}}))},this.saveEdits=function(r){return l.store.dispatch(new p.z0(r,{name:"Save commit edits",do:function(){return l.commitsApi.completeCommitEditing(r).pipe((0,i.C)(function(){return l.store.dispatch(new s.Vu(r,[s.nh.commits,s.nh.currentBranchCommitId,s.nh.headCommitId,s.nh.mergeHeads,s.nh.merges,s.nh.references,s.nh.stagedChanges,s.nh.submodules,s.nh.unstagedChanges]))}))}}))},this.editCommitDetails=function(r,h,u){return l.store.dispatch(new p.z0(r,{name:"Edit commit",detail:u,do:function(){return l.commitsApi.editCommitDetails(r,h,u,l.getCommitter()).pipe((0,D.K)(function(c){return a.L8.matches(c)?(0,_._)(function(){return new n.ZR(c)}):(0,_._)(function(){return c})}))}})).pipe((0,g.U)(function(){return l.store.selectSnapshot(f.h.mostRecentActionState(r))}))},this.squashCommit=function(r,h,u){return l.store.dispatch(new p.z0(r,{name:"Squash commit",detail:(0,d.Iu)("_commit_ up/down",{commitId:h,isUpwards:"up"===u}),do:function(){return l.commitsApi.squashCommit(r,h,u,l.getCommitter()).pipe((0,D.K)(function(c){return a.bk.matches(c)||a.xb.matches(c)||a.Ak.matches(c)||a.zd.matches(c)||a.zN.matches(c)||a.L8.matches(c)?(0,_._)(function(){return new n.ZR(c)}):(0,_._)(function(){return c})}))}})).pipe((0,g.U)(function(){return l.store.selectSnapshot(f.h.mostRecentActionState(r))}))},this.insertCommit=function(r,h,u){return l.store.dispatch(new p.z0(r,{name:"Insert commit",detail:(0,d.Iu)("above/below _commit_",{commitId:h,isAbove:"above"===u}),do:function(){return l.commitsApi.insertCommit(r,h,u,l.getCommitter()).pipe((0,D.K)(function(c){return a.L8.matches(c)?(0,_._)(function(){return new n.ZR(c)}):(0,_._)(function(){return c})}))}})).pipe((0,g.U)(function(){return l.store.selectSnapshot(f.h.mostRecentActionState(r))}))},this.moveCommitChanges=function(r,h,u,F){return l.store.dispatch(new p.z0(r,{name:"Move commit changes",detail:(0,d.Iu)("_commit_ up/down",{commitId:h,isUpwards:"up"===u}),do:function(){return l.commitsApi.moveCommitChanges(r,h,u,F,l.getCommitter()).pipe((0,D.K)(function(C){return a.L8.matches(C)||a.ND.matches(C)||a._5.matches(C)||a.x4.matches(C)||a.KS.matches(C)||a.wX.matches(C)?(0,_._)(function(){return new n.ZR(C)}):(0,_._)(function(){return C})}))}})).pipe((0,g.U)(function(){return l.store.selectSnapshot(f.h.mostRecentActionState(r))}))}}return(0,I.Z)(e,[{key:"getCommitter",value:function(){var O=this.store.selectSnapshot(W.$.selectedProfile);return O&&O.name&&O.email?{name:O.name,email:O.email}:null}}]),e}();m.\u0275fac=function(U){return new(U||m)(L.LFG(b.yh),L.LFG(E.T))},m.\u0275prov=L.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"})},57093:(S,R,t)=>{t.d(R,{v:()=>s});var T=t(43144),I=t(15671),_=t(65412),D=t(59549),g=t(284),a=t(51572),d=t(84385),n=t(33179),i=t(94650),s=(0,T.Z)(function p(){(0,I.Z)(this,p)});s.\u0275fac=function(f){return new(f||s)},s.\u0275mod=i.oAB({type:s}),s.\u0275inj=i.cJS({imports:[_.Is,D.lN,g.c,a.Cq,d.LD,n.I]})},43888:(S,R,t)=>{t.d(R,{p:()=>i});var T=t(97685),I=t(15671),_=t(43144),D=t(92686),g=t(82270),a=t(3825),d=t(32120),n=t(94650),i=function(){function s(){(0,I.Z)(this,s),this.parseReference=function(p){var f=s.referenceRegex.exec(p);if(!f)return null;if("remotes"===f[1]){var W,L,b=s.remoteBranchRegex.exec(p);if(!b)throw new g.xB(p);return{branch:null!==(W=b[2])&&void 0!==W?W:"",sourceName:null!==(L=b[1])&&void 0!==L?L:"",sourceType:"remote"}}return"stash"===f[1]?{branch:(0,a.Iu)("stash"),sourceName:(0,a.Iu)("stash"),sourceType:"stash"}:{branch:f[2],sourceName:(0,a.Iu)("heads"===f[1]?"local":"tag"),sourceType:"heads"===f[1]?"local":"tag"}},this.getBranchTypeIcon=function(p){switch(p){case"local":return"desktop_windows";case"remote":return"cloud_queue";case"stash":return"archive";case"tag":return"label"}}}return(0,_.Z)(s,[{key:"calculateBranches",value:function(f,W){var L=this,b=(0,D.Z)(f.map(this.parseReference).filter(d.$K),function(E){return E.branch});return Object.entries(b).map(function(E){var m=(0,T.Z)(E,2);return{name:m[0],sources:m[1].map(function(O){return{name:O.sourceName,type:O.sourceType,icon:L.getBranchTypeIcon(O.sourceType)}})}}).sort(function(E,m){var e=E.sources.some(function(u){return"local"===u.type&&"refs/heads/".concat(E.name)===W}),U=E.sources.some(function(u){return"local"===u.type&&"refs/heads/".concat(m.name)===W});if(e&&!U)return-1;if(!e&&U)return 1;var O=E.sources.some(function(u){return"local"===u.type}),l=m.sources.some(function(u){return"local"===u.type});if(O&&!l)return-1;if(!O&&l)return 1;var r=E.sources.some(function(u){return"remote"===u.type}),h=m.sources.some(function(u){return"remote"===u.type});return r&&!h?-1:!r&&h?1:E.sources.length>m.sources.length?-1:E.sources.length<m.sources.length?1:E.name>m.name?-1:E.name<m.name?1:0}).slice(0,30)}}]),s}();i.referenceRegex=/refs\/(heads|remotes|tags|stash)(?:\/(.*))?/,i.remoteBranchRegex=/refs\/remotes\/([^\/]*)\/(.*)/,i.\u0275fac=function(p){return new(p||i)},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}}]);