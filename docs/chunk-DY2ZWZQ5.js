import{a as G}from"./chunk-UCZQN7KN.js";import{C as w,m as u,n as z,v as O,w as l}from"./chunk-XFRRWCWM.js";import{D as C,Ed as g,Hc as I,Ic as N,Jc as b,Kc as y,Lc as M,Mc as q,Nc as x,Oc as H,Pc as j,Qc as B,Qg as L,Sg as a,Th as $,Ug as U,Vc as _,_ as E,ba as S,ig as k,lh as p,r as o,s as f,ug as F}from"./chunk-LQ6WPIKI.js";var ie=(()=>{class r{constructor(i,m){this.store=i,this.commitsApi=m,this.startEdit=(t,n)=>this.store.dispatch(new l(t,{name:"Edit commits",detail:p("from _commit_",{commitId:n}),do:()=>this.store.dispatch(new O(t,n))})),this.discardEdit=t=>this.store.dispatch(new l(t,{name:"Discard commit edits",do:()=>this.commitsApi.discardCommitEditing(t)})),this.saveEdits=t=>this.store.dispatch(new l(t,{name:"Save commit edits",do:()=>this.commitsApi.completeCommitEditing(t).pipe(G(()=>this.store.dispatch(new z(t,[u.commits,u.currentBranchCommitId,u.headCommitId,u.mergeHeads,u.merges,u.references,u.stagedChanges,u.submodules,u.unstagedChanges]))))})),this.editCommitDetails=(t,n,c)=>this.store.dispatch(new l(t,{name:"Edit commit",detail:c,do:()=>this.commitsApi.editCommitDetails(t,n,c,this.getCommitter()).pipe(C(e=>g.matches(e)?o(()=>new a(e)):o(()=>e)))})).pipe(f(()=>this.store.selectSnapshot(w.mostRecentActionState(t)))),this.squashCommit=(t,n,c)=>this.store.dispatch(new l(t,{name:"Squash commit",detail:p("_commit_ up/down",{commitId:n,isUpwards:c==="up"}),do:()=>this.commitsApi.squashCommit(t,n,c,this.getCommitter()).pipe(C(e=>I.matches(e)?o(()=>new a(e)):N.matches(e)?o(()=>new a(e)):b.matches(e)?o(()=>new a(e)):y.matches(e)?o(()=>new a(e)):M.matches(e)?o(()=>new a(e)):g.matches(e)?o(()=>new a(e)):o(()=>e)))})).pipe(f(()=>this.store.selectSnapshot(w.mostRecentActionState(t)))),this.insertCommit=(t,n,c)=>this.store.dispatch(new l(t,{name:"Insert commit",detail:p("above/below _commit_",{commitId:n,isAbove:c==="above"}),do:()=>this.commitsApi.insertCommit(t,n,c,this.getCommitter()).pipe(C(e=>g.matches(e)?o(()=>new a(e)):o(()=>e)))})).pipe(f(()=>this.store.selectSnapshot(w.mostRecentActionState(t)))),this.moveCommitChanges=(t,n,c,e)=>this.store.dispatch(new l(t,{name:"Move commit changes",detail:p("_commit_ up/down",{commitId:n,isUpwards:c==="up"}),do:()=>this.commitsApi.moveCommitChanges(t,n,c,e,this.getCommitter()).pipe(C(s=>g.matches(s)?o(()=>new a(s)):q.matches(s)?o(()=>new a(s)):x.matches(s)?o(()=>new a(s)):H.matches(s)?o(()=>new a(s)):j.matches(s)?o(()=>new a(s)):B.matches(s)?o(()=>new a(s)):o(()=>s)))})).pipe(f(()=>this.store.selectSnapshot(w.mostRecentActionState(t))))}getCommitter(){let i=this.store.selectSnapshot($.selectedProfile);return i&&i.name&&i.email?{name:i.name,email:i.email}:null}static{this.\u0275fac=function(m){return new(m||r)(S(k),S(U))}}static{this.\u0275prov=E({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();var he=(()=>{class r{constructor(){this.parseReference=i=>{let m=r.referenceRegex.exec(i);if(!m)return null;if(m[1]==="remotes"){let t=r.remoteBranchRegex.exec(i);if(!t)throw new _(i);return{branch:t[2]??"",sourceName:t[1]??"",sourceType:"remote"}}return m[1]==="stash"?{branch:p("stash"),sourceName:p("stash"),sourceType:"stash"}:{branch:m[2],sourceName:p(m[1]==="heads"?"local":"tag"),sourceType:m[1]==="heads"?"local":"tag"}},this.getBranchTypeIcon=i=>{switch(i){case"head":return"upload";case"local":return"desktop_windows";case"remote":return"cloud_queue";case"stash":return"archive";case"tag":return"label"}}}static{this.referenceRegex=/refs\/(heads|remotes|tags|stash)(?:\/(.*))?/}static{this.remoteBranchRegex=/refs\/remotes\/([^\/]*)\/(.*)/}calculateBranches(i,m,t){let n=F(i.map(this.parseReference).filter(L),({branch:e})=>e),c=Object.entries(n).map(([e,s])=>({name:e,sources:s.map(d=>({name:d.sourceName,type:d.sourceType,icon:this.getBranchTypeIcon(d.sourceType)}))})).sort((e,s)=>{let d=e.sources.some(h=>h.type==="local"&&`refs/heads/${e.name}`===m),T=e.sources.some(h=>h.type==="local"&&`refs/heads/${s.name}`===m);if(d&&!T)return-1;if(!d&&T)return 1;let v=e.sources.some(h=>h.type==="local"),R=s.sources.some(h=>h.type==="local");if(v&&!R)return-1;if(!v&&R)return 1;let A=e.sources.some(h=>h.type==="remote"),D=s.sources.some(h=>h.type==="remote");return A&&!D?-1:!A&&D?1:e.sources.length>s.sources.length?-1:e.sources.length<s.sources.length?1:e.name>s.name?-1:e.name<s.name?1:0}).slice(0,30);return!m&&t?[{name:p("HEAD"),sources:[{name:p("HEAD"),type:"head",icon:this.getBranchTypeIcon("head")}]},...c]:c}static{this.\u0275fac=function(m){return new(m||r)}}static{this.\u0275prov=E({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();export{ie as a,he as b};
