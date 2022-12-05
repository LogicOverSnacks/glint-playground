"use strict";(self.webpackChunkgit_glint=self.webpackChunkgit_glint||[]).push([[995],{1995:(Y,y,h)=>{h.d(y,{$:()=>rt});var U=h(655),b=h(240),c=h(1737),u=h(8896),D=h(1086),p=h(7221),Z=h(7545),B=h(1712),A=h(3404),d=h(2120),f=h(8523),e=h(4889),G=h(1129),E=h(9077),w=h(5412),J=h(591),L=h(7625),$=h(8926),j=h(9967),t=h(4650),W=h(5219),Q=h(6895),S=h(4859),X=h(7392),H=h(266),z=h(744);function k(m,v){1&m&&(t.ynx(0),t._uU(1,"Loading..."),t.BQk())}function q(m,v){1&m&&(t.TgZ(0,"div",5)(1,"mat-icon",6),t._uU(2,"warning"),t.qZA(),t._uU(3," There are changes to the working copy that will be lost. "),t.qZA())}function P(m,v){if(1&m&&(t.TgZ(0,"li",9),t._uU(1),t.qZA()),2&m){const l=v.$implicit;t.Q6J("matTooltip",l.id),t.xp6(1),t.AsE(" ",l.message," - ",l.id," ")}}function _(m,v){if(1&m&&(t.TgZ(0,"div",5)(1,"mat-icon",6),t._uU(2,"warning"),t.qZA(),t._uU(3," The following commits will no longer be reachable by any branch or tag and may be lost: "),t.TgZ(4,"ul",7),t.YNc(5,P,2,3,"li",8),t.ALo(6,"async"),t.qZA()()),2&m){const l=t.oxw(2);t.xp6(5),t.Q6J("ngForOf",t.lcZ(6,1,l.atRiskCommits))}}function tt(m,v){if(1&m&&(t.ynx(0),t.YNc(1,q,4,0,"div",4),t.ALo(2,"async"),t.YNc(3,_,7,3,"div",4),t.ALo(4,"nullEmpty"),t.ALo(5,"async"),t.BQk()),2&m){const l=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,2,l.workingCopyAtRisk)),t.xp6(2),t.Q6J("ngIf",t.lcZ(4,4,t.lcZ(5,6,l.atRiskCommits)))}}function et(m,v){1&m&&(t.TgZ(0,"button",10),t._uU(1,"Cancel"),t.qZA()),2&m&&t.Q6J("mat-dialog-close",void 0)}function nt(m,v){1&m&&(t.TgZ(0,"button",11),t._uU(1,"Confirm"),t.qZA()),2&m&&t.Q6J("mat-dialog-close",!0)}let K=(()=>{class m extends((0,$.j)(j.A)){constructor(l,g,I){super(),this.data=l,this.dialogRef=g,this.graphSharedService=I,this.loading=!0,this.atRiskCommits=new J.X([]),this.workingCopyAtRisk=new J.X(!1)}ngOnInit(){this.graphSharedService.getCommits().pipe((0,L.R)(this.destroyed$)).subscribe(l=>{const g=this.data.branchName.startsWith("refs/heads/")?this.data.branchName:`refs/heads/${this.data.branchName}`,I={...l},M=Object.values(l).filter(n=>n.commit.references.length>0&&n.commit.references.some(s=>s!==g)).map(n=>n.id);I.head&&delete I.head;const x=this.data.toCommitId?[...M,this.data.toCommitId]:M;let T=0;for(;T<x.length;){const n=x[T],s=I[n];s&&(delete I[n],x.push(...s.commit.parentIds)),T++}const O=Object.values(I).map(n=>n.commit);this.atRiskCommits.next(O),this.loading&&0===O.length&&!this.workingCopyAtRisk.value?setTimeout(()=>this.dialogRef.close(!0),0):this.loading=!1})}}return m.\u0275fac=function(l){return new(l||m)(t.Y36(w.WI),t.Y36(w.so),t.Y36(W.p))},m.\u0275cmp=t.Xpm({type:m,selectors:[["ng-component"]],features:[t.qOj],decls:8,vars:5,consts:[["mat-dialog-title",""],[4,"ngIf"],["type","button","mat-button","",3,"mat-dialog-close",4,"ngIf"],["type","button","mat-button","","color","warn",3,"mat-dialog-close",4,"ngIf"],["class","text-block",4,"ngIf"],[1,"text-block"],[1,"warning-icon"],[1,"commit-list"],[3,"matTooltip",4,"ngFor","ngForOf"],[3,"matTooltip"],["type","button","mat-button","",3,"mat-dialog-close"],["type","button","mat-button","","color","warn",3,"mat-dialog-close"]],template:function(l,g){1&l&&(t.TgZ(0,"h2",0),t._uU(1),t.qZA(),t.TgZ(2,"mat-dialog-content"),t.YNc(3,k,2,0,"ng-container",1),t.YNc(4,tt,6,8,"ng-container",1),t.qZA(),t.TgZ(5,"mat-dialog-actions"),t.YNc(6,et,2,1,"button",2),t.YNc(7,nt,2,1,"button",3),t.qZA()),2&l&&(t.xp6(1),t.Oqu(g.data.title),t.xp6(2),t.Q6J("ngIf",g.loading),t.xp6(1),t.Q6J("ngIf",!g.loading),t.xp6(2),t.Q6J("ngIf",!g.loading),t.xp6(1),t.Q6J("ngIf",!g.loading))},dependencies:[w.ZT,w.uh,w.xY,w.H8,Q.sg,Q.O5,S.lW,X.Hw,H.gM,Q.Ov,z.x],styles:[".text-block[_ngcontent-%COMP%]{margin-bottom:10px}",".warning-icon[_ngcontent-%COMP%]{margin-right:5px}",".commit-list[_ngcontent-%COMP%]{list-style:inside;padding-left:20px;margin-top:10px;overflow-x:hidden}",".commit-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{height:26px;line-height:26px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-size:16px}"],changeDetection:0}),m})();var C=h(4006),V=h(9549),F=h(284);let N=(()=>{class m{constructor(l){this.data=l,this.form=new C.cw({name:new C.NI(null,C.kI.required)})}}return m.\u0275fac=function(l){return new(l||m)(t.Y36(w.WI))},m.\u0275cmp=t.Xpm({type:m,selectors:[["ng-component"]],decls:13,vars:5,consts:[["mat-dialog-title",""],[3,"formGroup"],["type","text","matInput","","required","","formControlName","name"],["mat-button","",3,"mat-dialog-close"],["mat-flat-button","","type","submit","color","primary",3,"mat-dialog-close","disabled"]],template:function(l,g){1&l&&(t.TgZ(0,"h2",0),t._uU(1),t.qZA(),t.TgZ(2,"form",1)(3,"mat-dialog-content")(4,"mat-form-field")(5,"mat-label"),t._uU(6,"Name"),t.qZA(),t._UZ(7,"input",2),t.qZA()(),t.TgZ(8,"mat-dialog-actions")(9,"button",3),t._uU(10,"Cancel"),t.qZA(),t.TgZ(11,"button",4),t._uU(12,"Save"),t.qZA()()()),2&l&&(t.xp6(1),t.hij("Create ",g.data.title,""),t.xp6(1),t.Q6J("formGroup",g.form),t.xp6(7),t.Q6J("mat-dialog-close",void 0),t.xp6(2),t.Q6J("mat-dialog-close",g.form.value)("disabled",g.form.invalid))},dependencies:[w.ZT,w.uh,w.xY,w.H8,V.KE,V.hX,F.Nt,C._Y,C.Fj,C.JJ,C.JL,C.Q7,C.sg,C.u,S.lW],styles:["mat-dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}"],changeDetection:0}),m})();var st=h(7093);let it=(()=>{class m{constructor(l){this.data=l,this.form=new C.cw({name:new C.NI(this.data.name,{nonNullable:!0,validators:C.kI.required})})}}return m.\u0275fac=function(l){return new(l||m)(t.Y36(w.WI))},m.\u0275cmp=t.Xpm({type:m,selectors:[["ng-component"]],decls:13,vars:5,consts:[["mat-dialog-title",""],[3,"formGroup"],["type","text","matInput","","required","","formControlName","name"],["mat-button","",3,"mat-dialog-close"],["mat-flat-button","","type","submit","color","primary",3,"mat-dialog-close","disabled"]],template:function(l,g){1&l&&(t.TgZ(0,"h2",0),t._uU(1),t.qZA(),t.TgZ(2,"form",1)(3,"mat-dialog-content")(4,"mat-form-field")(5,"mat-label"),t._uU(6,"Name"),t.qZA(),t._UZ(7,"input",2),t.qZA()(),t.TgZ(8,"mat-dialog-actions")(9,"button",3),t._uU(10,"Cancel"),t.qZA(),t.TgZ(11,"button",4),t._uU(12,"Save"),t.qZA()()()),2&l&&(t.xp6(1),t.hij("Rename ",g.data.title,""),t.xp6(1),t.Q6J("formGroup",g.form),t.xp6(7),t.Q6J("mat-dialog-close",void 0),t.xp6(2),t.Q6J("mat-dialog-close",g.form.value.name)("disabled",g.form.invalid))},dependencies:[w.ZT,w.uh,w.xY,w.H8,V.KE,V.hX,F.Nt,C._Y,C.Fj,C.JJ,C.JL,C.Q7,C.sg,C.u,S.lW],styles:["mat-dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}"],changeDetection:0}),m})();var at=h(790),ot=h(9160),ct=h(3983),mt=h(3058),ht=h(4614);let rt=(()=>{class m{constructor(l,g,I,M,x,T,O){this.dialog=l,this.store=g,this.commitsApi=I,this.remotesApi=M,this.mergesApi=x,this.repositoriesApi=T,this.submodulesApi=O,this.fetchFromRemote=(n,s,o=null)=>(o?this.remotesApi.fetch(n,o,s):this.remotesApi.fetchAll(n,s)).pipe((0,p.K)(a=>B.Ay.matches(a)||B.T0.matches(a)||A.OV.matches(a)?(0,c._)(new d.ZR(a.message)):(0,c._)(a)),(0,f.C)(()=>this.store.dispatch(new e.Vu(n,[e.nh.commits,e.nh.references])))),this.push=(n,s,o,a,r=!1)=>(s?this.remotesApi.push(n,o,s,a,r):this.remotesApi.pushToAllRemotes(n,o,a,r)).pipe((0,p.K)(i=>B.Ay.matches(i)||B.a9.matches(i)||B.T0.matches(i)?(0,c._)(new d.ZR(i.message)):(0,c._)(i)),(0,f.C)(()=>this.store.dispatch(new e.Vu(n,[e.nh.commits,e.nh.currentBranchCommitId,e.nh.headCommitId,e.nh.references])))),this.pull=(n,s,o,a)=>this.fetchFromRemote(n,o,s).pipe((0,Z.w)(()=>this.commitsApi.getBranchUpstreamCommitId(n,`refs/heads/${a}`)),(0,Z.w)(r=>{if(r)return this.updateBranch(n,`refs/heads/${a}`,r);const i=new A.aK(a);return(0,c._)(new d.ZR(i.message))})),this.checkoutBranch=(n,s)=>this.repositoriesApi.checkoutBranch(n,s).pipe((0,p.K)(o=>B.Nu.matches(o)?(0,c._)(new d.ZR(o.message)):(0,c._)(o)),(0,f.C)(()=>this.store.dispatch(new e.Vu(n,[e.nh.commits,e.nh.currentBranch,e.nh.currentBranchCommitId,e.nh.currentBranchUpstreamBranch,e.nh.headCommitId,e.nh.references])))),this.checkoutRemoteBranch=(n,s,o,a,r)=>{const i=(/^refs\/remotes\/([^\/]+)\//.exec(o)??[])[1],R=o.replace(/^refs\/remotes\/[^\/]+\//,"");if(!i)throw new Error(`Reference '${o}' is not a remote branch`);if(!R)throw new Error("Cannot checkout branch when no branch is selected");return a?this.pull(n,i,s,R).pipe((0,Z.w)(()=>this.checkoutBranch(n,a))):r?this.createBranchWithDetails(n,r,R,`${i}/${R}`,!0):u.E},this.createBranch=(n,s,o=!0)=>this.dialog.open(N,{data:{title:"Branch"}}).afterClosed().pipe((0,Z.w)(r=>r?this.repositoriesApi.createBranch(n,s,r.name).pipe((0,p.K)(i=>B.vV.matches(i)?(0,c._)(new d.ZR(i.message)):(0,c._)(i)),(0,Z.w)(()=>o?this.repositoriesApi.checkoutBranch(n,r.name):u.E),(0,p.K)(i=>B.Nu.matches(i)?u.E:A.bG.matches(i)||A.OV.matches(i)?(0,c._)(new d.ZR(i.message)):(0,c._)(i)),(0,f.C)(()=>this.store.dispatch(new e.Vu(n,[e.nh.commits,e.nh.currentBranch,e.nh.currentBranchCommitId,e.nh.currentBranchUpstreamBranch,e.nh.headCommitId,e.nh.references])))):u.E)),this.createBranchWithDetails=(n,s,o,a=null,r=!0)=>this.repositoriesApi.createBranch(n,s,o).pipe((0,p.K)(i=>B.vV.matches(i)?(0,c._)(new d.ZR(i.message)):(0,c._)(i)),(0,Z.w)(()=>r?this.repositoriesApi.checkoutBranch(n,o):u.E),(0,p.K)(i=>B.Nu.matches(i)?u.E:(0,c._)(i)),(0,Z.w)(()=>a?this.repositoriesApi.setUpstreamBranch(n,o,a):u.E),(0,p.K)(i=>A.bG.matches(i)||A.OV.matches(i)?(0,c._)(new d.ZR(i.message)):(0,c._)(i)),(0,f.C)(()=>this.store.dispatch(new e.Vu(n,[e.nh.commits,e.nh.currentBranch,e.nh.currentBranchCommitId,e.nh.currentBranchUpstreamBranch,e.nh.headCommitId,e.nh.references])))),this.createTag=(n,s,o="")=>this.dialog.open(N,{data:{title:"Tag"}}).afterClosed().pipe((0,Z.w)(r=>r?this.repositoriesApi.createTag(n,s,r.name,o).pipe((0,p.K)(i=>A.OV.matches(i)?(0,c._)(new d.ZR(i.message)):(0,c._)(i)),(0,f.C)(()=>this.store.dispatch(new e.Vu(n,[e.nh.commits,e.nh.currentBranch,e.nh.currentBranchCommitId,e.nh.currentBranchUpstreamBranch,e.nh.references])))):u.E)),this.renameBranch=(n,s)=>this.dialog.open(it,{data:{title:"Branch",name:s}}).afterClosed().pipe((0,Z.w)(a=>a?this.repositoriesApi.renameBranch(n,s,`refs/heads/${a}`).pipe((0,p.K)(r=>A.bG.matches(r)||A.OV.matches(r)?(0,c._)(new d.ZR(r.message)):(0,c._)(r)),(0,f.C)(()=>this.store.dispatch(new e.Vu(n,[e.nh.commits,e.nh.currentBranch,e.nh.currentBranchCommitId,e.nh.currentBranchUpstreamBranch,e.nh.references])))):u.E)),this.deleteBranch=(n,s)=>this.dialog.open(K,{data:{title:"Delete Branch",branchName:s,toCommitId:null}}).afterClosed().pipe((0,Z.w)(a=>a?this.repositoriesApi.deleteBranch(n,s).pipe((0,f.C)(()=>this.store.dispatch(new e.Vu(n,[e.nh.commits,e.nh.currentBranch,e.nh.currentBranchCommitId,e.nh.currentBranchUpstreamBranch,e.nh.references])))):u.E)),this.deleteTag=(n,s)=>this.repositoriesApi.deleteTag(n,s).pipe((0,f.C)(()=>this.store.dispatch(new e.Vu(n,[e.nh.commits,e.nh.currentBranch,e.nh.currentBranchCommitId,e.nh.currentBranchUpstreamBranch,e.nh.references])))),this.createMerge=(n,s,o,a)=>{const r=this.store.selectSnapshot(E.$.selectedProfile);return this.mergesApi.createMerge(n,o,a,r?.name??null,r?.email??null,`merge: ${s??o} into ${a}`).pipe((0,Z.w)(i=>this.store.dispatch("string"==typeof i?new e.jQ(n,i):new e.hb(n,{fromId:i.fromCommitId,toId:i.toCommitId}))),(0,p.K)(i=>B.Nu.matches(i)?(0,c._)(new d.ZR(i.message)):(0,c._)(i)),(0,f.C)(()=>this.store.dispatch(new e.Vu(n,[e.nh.commits,e.nh.currentBranchCommitId,e.nh.headCommitId,e.nh.mergeHeads,e.nh.merges]))))},this.commitMerge=(n,s,o,a,r)=>{const i=this.store.selectSnapshot(E.$.selectedProfile);return this.mergesApi.commitMerge(n,s,o,r,i?.name??null,i?.email??null,a).pipe((0,Z.w)(R=>this.store.dispatch(new e.jQ(n,R))),(0,p.K)(R=>B.Nu.matches(R)?(0,c._)(new d.ZR(R.message)):(0,c._)(R)),(0,f.C)(()=>this.store.dispatch(new e.Vu(n,[e.nh.commits,e.nh.currentBranchCommitId,e.nh.headCommitId,e.nh.mergeHeads,e.nh.merges,e.nh.references]))))},this.updateBranch=(n,s,o)=>this.dialog.open(K,{data:{title:"Move Branch",branchName:s,toCommitId:o}}).afterClosed().pipe((0,Z.w)(r=>r?this.repositoriesApi.updateBranch(n,s,o).pipe((0,p.K)(i=>B.Nu.matches(i)?(0,c._)(new d.ZR(i.message)):(0,c._)(i)),(0,f.C)(()=>this.store.dispatch(new e.Vu(n,[e.nh.commits,e.nh.currentBranch,e.nh.currentBranchCommitId,e.nh.currentBranchUpstreamBranch,e.nh.headCommitId,e.nh.references])))):u.E)),this.setUpstreamBranch=(n,s,o)=>this.repositoriesApi.setUpstreamBranch(n,s,o).pipe((0,f.C)(()=>this.store.dispatch(new e.Vu(n,[e.nh.currentBranchUpstreamBranch,e.nh.references])))),this.startEdit=(n,s)=>this.store.dispatch(new G.LF(n,s)),this.discardEdit=n=>this.commitsApi.discardCommitEditing(n),this.revertCommit=(n,s)=>{const o=this.store.selectSnapshot(E.$.selectedProfile);return this.commitsApi.revertCommit(n,s,o?.name??null,o?.email??null).pipe((0,Z.w)(a=>this.store.dispatch(new e.jQ(n,a))),(0,p.K)(a=>B.fD.matches(a)||B.Nu.matches(a)?(0,c._)(new d.ZR(a.message)):(0,c._)(a)),(0,f.C)(()=>this.store.dispatch(new e.Vu(n,[e.nh.commits,e.nh.currentBranchCommitId,e.nh.headCommitId,e.nh.references]))))},this.undoHeadCommit=n=>this.commitsApi.undoHeadCommit(n).pipe((0,p.K)(s=>A.OV.matches(s)?(0,c._)(new d.ZR(s.message)):(0,c._)(s)),(0,f.C)(()=>this.store.dispatch(new e.Vu(n,[e.nh.commits,e.nh.currentBranchCommitId,e.nh.headCommitId,e.nh.references,e.nh.stagedChanges,e.nh.submodules])))),this.addSubmodule=(n,s,o,a)=>this.submodulesApi.addSubmodule(n,s,o,a).pipe((0,p.K)(r=>B.vV.matches(r)?(0,c._)(new d.ZR(r.message)):(0,c._)(r)),(0,f.C)(r=>this.store.dispatch(new e.Vu(n,[e.nh.stagedChanges,e.nh.submodules,e.nh.unstagedChanges])).pipe((0,Z.w)(()=>r?(0,D.of)(r):u.E)))),this.editSubmodule=(n,s,o)=>this.submodulesApi.editSubmodule(n,s,o).pipe((0,p.K)(a=>B.vV.matches(a)?(0,c._)(new d.ZR(a.message)):(0,c._)(a)),(0,f.C)(a=>this.store.dispatch(new e.Vu(n,[e.nh.stagedChanges,e.nh.submodules,e.nh.unstagedChanges])).pipe((0,Z.w)(()=>a?(0,D.of)(a):u.E)))),this.addRemote=(n,s,o)=>this.remotesApi.addRemote(n,s,o).pipe((0,f.C)(()=>this.store.dispatch(new e.Vu(n,[e.nh.commits,e.nh.currentBranchUpstreamBranch,e.nh.merges,e.nh.references,e.nh.remotes])))),this.deleteRemote=(n,s)=>this.remotesApi.deleteRemote(n,s).pipe((0,f.C)(()=>this.store.dispatch(new e.Vu(n,[e.nh.commits,e.nh.currentBranchUpstreamBranch,e.nh.merges,e.nh.references,e.nh.remotes])))),this.updateRemoteUrl=(n,s,o)=>this.remotesApi.updateRemoteUrl(n,s,o).pipe((0,f.C)(()=>this.store.dispatch(new e.Vu(n,[e.nh.commits,e.nh.currentBranchUpstreamBranch,e.nh.merges,e.nh.references,e.nh.remotes]))))}}return m.\u0275fac=function(l){return new(l||m)(t.LFG(w.uw),t.LFG(b.yh),t.LFG(at.T),t.LFG(ot.G),t.LFG(ct.Z),t.LFG(mt.a),t.LFG(ht.N))},m.\u0275prov=t.Yz7({token:m,factory:m.\u0275fac,providedIn:st.v}),(0,U.gn)([(0,b.Ph)(E.$.selectedProfile)],m.prototype,"selectedProfile",void 0),m})()},5219:(Y,y,h)=>{h.d(y,{p:()=>c});var U=h(591),b=h(4650);let c=(()=>{class u{constructor(){this.colorsByCommitId=new U.X({}),this.commitDetailsByCommitId=new U.X({})}getColors(){return this.colorsByCommitId.asObservable()}setColors(p){this.colorsByCommitId.next(p)}getCommits(){return this.commitDetailsByCommitId.asObservable()}setCommits(p){this.commitDetailsByCommitId.next(p)}}return u.\u0275fac=function(p){return new(p||u)},u.\u0275prov=b.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);