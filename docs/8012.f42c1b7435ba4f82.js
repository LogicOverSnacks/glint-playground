"use strict";(self.webpackChunkgit_glint=self.webpackChunkgit_glint||[]).push([[8012],{74580:(Y,x,o)=>{o.d(x,{t:()=>l});var h=o(69301),C=o(4998),Z=o(50439);const l=(m,A=!0)=>(0,h.T)(m.backdropClick(),m.outsidePointerEvents().pipe((0,Z.h)(t=>"auxclick"!==t.type)),...A?[(0,C.R)(m.overlayElement,"click")]:[])},55934:(Y,x,o)=>{o.r(x),o.d(x,{OpenRepositoryLayoutModule:()=>xt});var h=o(42663),C=o(16400),Z=o(1869),l=o(28167),m=o(10138),A=o(87964),t=o(83668);let T=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.lN,m.c,A.Cq,C.LD,Z.I]]}),e})(),F=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.lN,m.c,Z.I]]}),e})();var J=o(56690),z=o(81947);let K=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.lN,m.c,Z.I,J.i,z.e]]}),e})();var v=o(31818),j=o(61855),P=o(52324),w=o(44496),N=o(20373),W=o(37810),X=o(40452),R=o(43334),G=o(85148),tt=o(98771),O=o(35634),et=o(67254),u=o(7060),ot=o(30366),E=o(83912),_=o(62879),b=o(53542),V=o(35956),g=o(83664),U=o(42328),nt=o(28681),L=o(38056),q=o(31387),M=o(86019),d=o(49133),I=o(59112),D=o(90086),it=o(6731);function rt(e,i){if(1&e&&(t.TgZ(0,"mat-option",11),t._uU(1),t.qZA()),2&e){const n=i.$implicit;t.Q6J("value",+n.key),t.xp6(1),t.Oqu(n.value.credentialName)}}function st(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"form",2),t.NdJ("ngSubmit",function(){return t.CHM(n),t.oxw().clone()}),t.TgZ(1,"mat-form-field",3),t.TgZ(2,"mat-label"),t._uU(3,"URL"),t.qZA(),t.TgZ(4,"mat-icon",4),t._uU(5,"public"),t.qZA(),t._UZ(6,"input",5),t.qZA(),t.TgZ(7,"mat-form-field",6),t.NdJ("click",function(){return t.CHM(n),t.oxw().browsePathIfEmpty()}),t.TgZ(8,"mat-label"),t._uU(9,"Path to clone to"),t.qZA(),t.TgZ(10,"mat-icon",4),t._uU(11,"folder"),t.qZA(),t._UZ(12,"input",7),t.TgZ(13,"button",8),t.NdJ("click",function(){return t.CHM(n),t.oxw().browsePath()}),t._uU(14,"Browse"),t.qZA(),t.qZA(),t.TgZ(15,"mat-form-field",9),t.TgZ(16,"mat-label"),t._uU(17,"Credential"),t.qZA(),t.TgZ(18,"mat-icon",4),t._uU(19,"key"),t.qZA(),t.TgZ(20,"mat-select",10),t.TgZ(21,"mat-option",11),t._uU(22,"None"),t.qZA(),t.YNc(23,rt,2,2,"mat-option",12),t.ALo(24,"keyvalue"),t.ALo(25,"async"),t.qZA(),t.qZA(),t.TgZ(26,"button",13),t._uU(27,"Clone"),t.qZA(),t.qZA()}if(2&e){const n=t.oxw();t.Q6J("formGroup",n.form.ng),t.xp6(21),t.Q6J("value",null),t.xp6(2),t.Q6J("ngForOf",t.lcZ(24,4,t.lcZ(25,6,n.validCredentials))),t.xp6(3),t.Q6J("disabled",n.form.invalid)}}function at(e,i){1&e&&(t.TgZ(0,"div",14),t._UZ(1,"mat-spinner"),t._uU(2," Cloning...\n"),t.qZA())}let lt=(()=>{class e extends((0,_.j)(b.A)){constructor(n,r,p,s){super(),this.router=n,this.store=r,this.filesApi=p,this.repositoriesApi=s,this.cloning=new W.X(!1),this.form=new w.CN({url:new w.rV(null,N.Y$.required),path:new w.rV(null,N.Y$.required),credential:new w.rV(null)}),this.validCredentials=(0,X.aj)([this.allCredentials,this.form.controls.url.valueChanges.pipe((0,G.O)(null))]).pipe((0,tt.U)(([c,f])=>{const y=[...c.entries()];return Object.fromEntries(f?/^https?:\/\//.test(f)?y.filter(([S,a])=>"password"===a.type):/^(git|file)?:\/\//.test(f)||/^\//.test(f)||!/:/.test(f)?[]:y.filter(([S,a])=>"ssh"===a.type):y)})),this.browsePath=()=>{this.filesApi.openFolderDialog().pipe((0,O.R)(this.destroyed$)).subscribe(c=>{c&&this.form.controls.path.setValue(c)})},this.browsePathIfEmpty=()=>{this.form.controls.path.value||this.browsePath()},this.clone=()=>{if(this.cloning.value)throw new Error("Already cloning");const{url:c,path:f,credential:y}=this.form.value;if(!c)throw new Error("Cannot clone repository with no url");if(!f)throw new Error("Cannot clone repository with no local path");const S=this.store.selectSnapshot(U.$.credentials);this.cloning.next(!0),this.repositoriesApi.cloneRepository(c,f,y?S.get(y):void 0).pipe((0,et.K)(a=>E.Ay.matches(a)||E.T0.matches(a)||E.o8.matches(a)?this.store.dispatch(new V.NN("error",a.message)).pipe((0,u.w)(()=>(0,R._)(a))):this.store.dispatch(new V.NN("unhandled",`${a}`)).pipe((0,u.w)(()=>(0,R._)(a)))),(0,u.w)(()=>this.store.dispatch(new g.gz(f))),(0,u.w)(()=>{const a=this.store.selectSnapshot(U.$.selectedProfile),k=y&&"all"!==a?.credentialIds&&!a?.credentialIds.includes(y)?0:this.store.selectSnapshot(U.$.selectedProfileId),At=y?{remotes:{origin:{credentialId:y}}}:null;return a&&k>0&&"all"!==a.allowedRepositories&&this.store.dispatch(new nt.Bu(k,{...a,allowedRepositories:[...a.allowedRepositories,f]})),this.store.dispatch(new g.xs(f,k,At))}),(0,u.w)(()=>this.store.dispatch(new g.he(f))),(0,u.w)(()=>this.store.dispatch(new g.BZ(f))),(0,ot.x)(()=>{this.cloning.next(!1)}),(0,O.R)(this.destroyed$)).subscribe(()=>{this.router.navigate(["/"])})}}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(v.F0),t.Y36(P.yh),t.Y36(L.k),t.Y36(q.a))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-clone-repository-view"]],features:[t.qOj],decls:4,vars:6,consts:[[3,"formGroup","ngSubmit",4,"ngIf"],["class","cloning",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"url"],["matPrefix",""],["type","text","matInput","","required","","formControlName","url"],[1,"path",3,"click"],["type","text","matInput","","required","","formControlName","path"],["type","button","matSuffix","","mat-button","",3,"click"],[1,"credential"],["formControlName","credential","placeholder","Select credential"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],["type","submit","mat-raised-button","","color","primary",3,"disabled"],[1,"cloning"]],template:function(n,r){1&n&&(t.YNc(0,st,28,8,"form",0),t.ALo(1,"async"),t.YNc(2,at,3,0,"div",1),t.ALo(3,"async")),2&n&&(t.Q6J("ngIf",!1===t.lcZ(1,2,r.cloning)),t.xp6(2),t.Q6J("ngIf",t.lcZ(3,4,r.cloning)))},directives:[M.O5,d._Y,d.JL,d.sg,l.KE,l.hX,I.Hw,l.qo,m.Nt,d.Fj,d.Q7,d.JJ,d.u,D.lW,l.R9,C.gD,it.ey,M.sg,A.$g],pipes:[M.Ov,M.Nd],styles:["form[_ngcontent-%COMP%]{margin:10px;max-width:500px}form[_ngcontent-%COMP%]   .url[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .path[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .credential[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]     .mat-form-field-prefix{margin-right:10px}form[_ngcontent-%COMP%]   .path[_ngcontent-%COMP%]     .mat-form-field-suffix{top:-.25em}.cloning[_ngcontent-%COMP%]{margin:10px;font-size:24px}.cloning[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{margin-bottom:20px}"],changeDetection:0}),(0,j.gn)([(0,P.Ph)(U.$.credentials)],e.prototype,"allCredentials",void 0),e})(),pt=(()=>{class e extends((0,_.j)(b.A)){constructor(n,r,p,s){super(),this.router=n,this.store=r,this.filesApi=p,this.repositoriesApi=s,this.form=new w.CN({path:new w.rV(null,N.Y$.required),defaultBranch:new w.rV("main")}),this.browsePath=()=>{this.filesApi.openFolderDialog().pipe((0,O.R)(this.destroyed$)).subscribe(c=>{c&&this.form.controls.path.setValue(c)})},this.browsePathIfEmpty=()=>{this.form.controls.path.value||this.browsePath()},this.create=()=>{const{path:c,defaultBranch:f}=this.form.value;if(!c)throw new Error("Cannot create repository with no local path");this.repositoriesApi.createRepository(c,f??"main").pipe((0,u.w)(()=>this.store.dispatch(new g.gz(c))),(0,u.w)(()=>this.store.dispatch(new g.he(c))),(0,u.w)(()=>this.store.dispatch(new g.BZ(c))),(0,O.R)(this.destroyed$)).subscribe(()=>{this.router.navigate(["/"])})}}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(v.F0),t.Y36(P.yh),t.Y36(L.k),t.Y36(q.a))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-create-repository-view"]],features:[t.qOj],decls:16,vars:2,consts:[[3,"formGroup","ngSubmit"],[1,"path",3,"click"],["matPrefix",""],["type","text","matInput","","required","","formControlName","path"],["type","button","matSuffix","","mat-button","",3,"click"],[1,"default-branch"],["matPrefix","","svgIcon","source-branch"],["type","text","placeholder","main","matInput","","formControlName","defaultBranch"],["type","submit","mat-raised-button","","color","primary",3,"disabled"]],template:function(n,r){1&n&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return r.create()}),t.TgZ(1,"mat-form-field",1),t.NdJ("click",function(){return r.browsePathIfEmpty()}),t.TgZ(2,"mat-label"),t._uU(3,"Path to create in"),t.qZA(),t.TgZ(4,"mat-icon",2),t._uU(5,"folder"),t.qZA(),t._UZ(6,"input",3),t.TgZ(7,"button",4),t.NdJ("click",function(){return r.browsePath()}),t._uU(8,"Browse"),t.qZA(),t.qZA(),t.TgZ(9,"mat-form-field",5),t.TgZ(10,"mat-label"),t._uU(11,"Default branch"),t.qZA(),t._UZ(12,"mat-icon",6),t._UZ(13,"input",7),t.qZA(),t.TgZ(14,"button",8),t._uU(15,"Create"),t.qZA(),t.qZA()),2&n&&(t.Q6J("formGroup",r.form.ng),t.xp6(14),t.Q6J("disabled",r.form.invalid))},directives:[d._Y,d.JL,d.sg,l.KE,l.hX,I.Hw,l.qo,m.Nt,d.Fj,d.Q7,d.JJ,d.u,D.lW,l.R9],styles:["form[_ngcontent-%COMP%]{margin:10px;max-width:500px}form[_ngcontent-%COMP%]   .path[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .default-branch[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]     .mat-form-field-prefix{margin-right:10px}form[_ngcontent-%COMP%]     .mat-form-field-suffix{top:-.25em}"],changeDetection:0}),e})();var ct=o(42155),Q=o(64841),$=o(6939),H=o(33116),B=o(80888),mt=o(20630),dt=o(51552);function ut(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){return t.CHM(n),t.oxw(2).searchControl.setValue(null)}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA(),t.qZA()}}function ft(e,i){if(1&e&&(t.TgZ(0,"mat-form-field",7),t.TgZ(1,"mat-label"),t._uU(2,"Search"),t.qZA(),t.TgZ(3,"span",8),t.TgZ(4,"mat-icon"),t._uU(5,"search"),t.qZA(),t._uU(6,"\xa0"),t.qZA(),t._UZ(7,"input",9),t.YNc(8,ut,3,0,"button",10),t.qZA()),2&e){const n=t.oxw();t.xp6(7),t.Q6J("formControl",n.searchControl.ng),t.xp6(1),t.Q6J("ngIf",n.searchControl.value)}}function gt(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"mat-card"),t.TgZ(1,"mat-card-title"),t.TgZ(2,"mat-icon"),t._uU(3,"history"),t.qZA(),t._uU(4," Recently opened"),t.qZA(),t.TgZ(5,"mat-card-content"),t.TgZ(6,"app-repository-history-view",12),t.NdJ("clicked",function(p){return t.CHM(n),t.oxw().openRecent(p)})("dragStarted",function(p){return t.CHM(n),t.oxw().dragstartListener(p[0],p[1])}),t.qZA(),t.qZA(),t.qZA()}}let ht=(()=>{class e extends((0,_.j)(b.A)){constructor(n,r,p){super(),this.router=n,this.store=r,this.filesApi=p,this.searchControl=new w.rV,this.openBookmark=s=>{(0,Q.b)(s)||this.store.dispatch(new g.he(s.id)).pipe((0,u.w)(()=>this.store.dispatch(new g.BZ(s.id))),(0,O.R)(this.destroyed$)).subscribe(()=>{this.router.navigate(["/"])})},this.openRecent=s=>{this.store.dispatch(new g.he(s)).pipe((0,u.w)(()=>this.store.dispatch(new g.BZ(s))),(0,O.R)(this.destroyed$)).subscribe(()=>{this.router.navigate(["/"])})},this.openFromDisk=()=>{this.filesApi.openFolderDialog().pipe((0,O.R)(this.destroyed$)).subscribe(s=>{s&&this.store.dispatch(new g.gz(s)).pipe((0,u.w)(()=>this.store.dispatch(new g.he(s))),(0,u.w)(()=>this.store.dispatch(new g.BZ(s))),(0,O.R)(this.destroyed$)).subscribe(()=>{this.router.navigate(["/"])})})},this.dragstartListener=(s,c)=>{s.dataTransfer&&(s.dataTransfer.setData("app/repository",c),s.dataTransfer.effectAllowed="move")}}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(v.F0),t.Y36(P.yh),t.Y36(L.k))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-open-repository-view"]],features:[t.qOj],decls:20,vars:6,consts:[["type","button","mat-flat-button","",1,"open-from-disk-button",3,"click"],["class","search-box",4,"ngIf"],["id","open-repository-view"],["min","210px"],[3,"nodeClick"],["min","300px"],[4,"ngIf"],[1,"search-box"],["matPrefix",""],["matInput","","type","text",3,"formControl"],["matSuffix","","mat-icon-button","",3,"click",4,"ngIf"],["matSuffix","","mat-icon-button","",3,"click"],[3,"clicked","dragStarted"]],template:function(n,r){1&n&&(t.TgZ(0,"header"),t.TgZ(1,"button",0),t.NdJ("click",function(){return r.openFromDisk()}),t.TgZ(2,"mat-icon"),t._uU(3,"folder_open"),t.qZA(),t._uU(4," Open from disk "),t.qZA(),t.YNc(5,ft,9,2,"mat-form-field",1),t.qZA(),t.TgZ(6,"main"),t.TgZ(7,"app-grid",2),t.TgZ(8,"app-grid-cell",3),t.TgZ(9,"mat-card"),t.TgZ(10,"mat-card-title"),t.TgZ(11,"mat-icon"),t._uU(12,"bookmarks"),t.qZA(),t._uU(13," Bookmarks"),t.qZA(),t.TgZ(14,"mat-card-content"),t.TgZ(15,"app-repository-bookmarks-view",4),t.NdJ("nodeClick",function(s){return r.openBookmark(s)}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"app-grid-cell",5),t.YNc(17,gt,7,0,"mat-card",6),t.ALo(18,"nullEmpty"),t.ALo(19,"async"),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(5),t.Q6J("ngIf",!1),t.xp6(12),t.Q6J("ngIf",t.lcZ(18,2,t.lcZ(19,4,r.recentRepositories))))},directives:[D.lW,I.Hw,M.O5,$.M,H.Y,B.a8,B.n5,B.dn,Q.j,l.KE,l.hX,l.qo,m.Nt,d.Fj,d.JJ,d.oH,l.R9,mt.J],pipes:[dt.x,M.Ov],styles:["header[_ngcontent-%COMP%]{margin:10px 10px 0;display:flex;align-items:baseline}header[_ngcontent-%COMP%]   .open-from-disk-button[_ngcontent-%COMP%]{margin-bottom:26px}header[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]{flex:auto;margin-left:10px}main[_ngcontent-%COMP%]{padding:0 5px 10px}main[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{margin:0 5px}"],changeDetection:0}),(0,j.gn)([(0,P.Ph)(ct.E.recentRepositories)],e.prototype,"recentRepositories",void 0),e})();var yt=o(1653);const Ct=function(){return["./open"]},Zt=function(){return["./clone"]},vt=function(){return["./create"]},wt=[{path:"",component:(()=>{class e extends((0,_.j)(b.A,yt.H)){}return e.\u0275fac=function(){let i;return function(r){return(i||(i=t.n5z(e)))(r||e)}}(),e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],features:[t.qOj],decls:12,vars:6,consts:[[1,"mat-app-background"],["id","open-repository-layout"],["min","150px"],[1,"links"],["routerLinkActive","active",3,"routerLink"]],template:function(n,r){1&n&&(t.TgZ(0,"main",0),t.TgZ(1,"app-grid",1),t.TgZ(2,"app-grid-cell",2),t.TgZ(3,"mat-list",3),t.TgZ(4,"mat-list-item",4),t._uU(5,"Open"),t.qZA(),t.TgZ(6,"mat-list-item",4),t._uU(7,"Clone"),t.qZA(),t.TgZ(8,"mat-list-item",4),t._uU(9,"Create"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"app-grid-cell"),t._UZ(11,"router-outlet"),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(4),t.Q6J("routerLink",t.DdM(3,Ct)),t.xp6(2),t.Q6J("routerLink",t.DdM(4,Zt)),t.xp6(2),t.Q6J("routerLink",t.DdM(5,vt)))},directives:[$.M,H.Y,h.i$,h.Tg,v.Od,v.rH,v.lC],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}.dark-theme[_nghost-%COMP%]   header[_ngcontent-%COMP%]{border-bottom-color:#ffffff1f}header[_ngcontent-%COMP%]{display:flex;border-bottom:1px solid transparent}header[_ngcontent-%COMP%]   app-repository-tabs-view[_ngcontent-%COMP%]{flex:1 0 auto}header[_ngcontent-%COMP%]   app-repository-tabs-view[_ngcontent-%COMP%]     .mat-tab-nav-bar{border:none}header[_ngcontent-%COMP%]   .settings-icon[_ngcontent-%COMP%]{margin:12px;cursor:pointer}main[_ngcontent-%COMP%]{height:100%;overflow:hidden}main[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{padding-top:0}main[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]{outline:none;cursor:pointer}main[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   mat-list-item.active[_ngcontent-%COMP%]{background:#78909c}app-errors-tray-view[_ngcontent-%COMP%]{position:fixed;bottom:10px;left:10px;margin-right:10px;margin-top:10px;z-index:600}"],changeDetection:0}),e})(),children:[{path:"open",component:ht},{path:"clone",component:lt},{path:"create",component:pt},{path:"",redirectTo:"open",pathMatch:"full"}]}];let Ot=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[v.Bz.forChild(wt)],v.Bz]}),e})(),xt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[h.ie,C.LD,Z.I,T,F,K,Ot]]}),e})()},38056:(Y,x,o)=>{o.d(x,{k:()=>l});var h=o(21934),C=o(83668),Z=o(84504);let l=(()=>{class m{constructor(t){this.baseApi=t}getRelativePath(t,T){return this.baseApi.single(h.w.files.getRelativePath,t,T)}getFileContents(t){return this.baseApi.single(h.w.files.getFileContents,t)}getFileDiff(t,T,F,J){return this.baseApi.single(h.w.files.getFileDiff,t,T,F,J)}openFileDialog(){return this.baseApi.single(h.w.files.openFileDialog)}openFolderDialog(t){return this.baseApi.single(h.w.files.openFolderDialog,t)}}return m.\u0275fac=function(t){return new(t||m)(C.LFG(Z._))},m.\u0275prov=C.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);