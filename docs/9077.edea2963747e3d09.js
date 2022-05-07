"use strict";(self.webpackChunkgit_glint=self.webpackChunkgit_glint||[]).push([[9077],{88784:(Z,O,i)=>{i.d(O,{r:()=>Y});var r=i(83668);let Y=(()=>{class E{transform(f,p,t=f+"s"){return 1===p?f:t}}return E.\u0275fac=function(f){return new(f||E)},E.\u0275pipe=r.Yjl({name:"plural",type:E,pure:!0}),E})()},95332:(Z,O,i)=>{i.d(O,{T:()=>h});var r=i(21934),Y=i(83668),E=i(84504);let h=(()=>{class f{constructor(t){this.baseApi=t}getCommit(t,u){return this.baseApi.single(r.w.commits.getCommit,t,u)}putCommit(t,u,I,g){return this.baseApi.single(r.w.commits.putCommit,t,u,I,g)}revertCommit(t,u,I,g){return this.baseApi.single(r.w.commits.revertCommit,t,u,I,g)}getBranchCommitId(t,u){return this.baseApi.single(r.w.commits.getBranchCommitId,t,u)}getBranchUpstreamCommitId(t,u){return this.baseApi.single(r.w.commits.getBranchUpstreamCommitId,t,u)}getOngoingEdit(t){return this.baseApi.single(r.w.commits.getOngoingEdit,t)}startCommitEditing(t,u){return this.baseApi.single(r.w.commits.startCommitEditing,t,u)}discardCommitEditing(t){return this.baseApi.single(r.w.commits.discardCommitEditing,t)}completeCommitEditing(t){return this.baseApi.single(r.w.commits.completeCommitEditing,t)}editCommitDetails(t,u,I){return this.baseApi.single(r.w.commits.editCommitDetails,t,u,I)}squashCommit(t,u,I,g=null){return this.baseApi.single(r.w.commits.squashCommit,t,u,I,g)}moveCommitChanges(t,u,I,g,T=null){return this.baseApi.single(r.w.commits.moveCommitChanges,t,u,I,g,T)}insertCommit(t,u,I,g=null){return this.baseApi.single(r.w.commits.insertCommit,t,u,I,g)}}return f.\u0275fac=function(t){return new(t||f)(Y.LFG(E._))},f.\u0275prov=Y.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()},76769:(Z,O,i)=>{i.d(O,{c:()=>E});var r=i(1869),Y=i(83668);let E=(()=>{class h{}return h.\u0275fac=function(p){return new(p||h)},h.\u0275mod=Y.oAB({type:h}),h.\u0275inj=Y.cJS({imports:[[r.I]]}),h})()},72352:(Z,O,i)=>{i.d(O,{d:()=>h});var r=i(73967),Y=i(76769),E=i(83668);let h=(()=>{class f{getPatchPath(t){switch(t.status){case r.v.Added:case r.v.Untracked:return t.newFilePath;case r.v.Conflicted:case r.v.Modified:case r.v.Renamed:return t.oldFilePath===t.newFilePath?t.newFilePath:`${t.oldFilePath} --\x3e ${t.newFilePath}`;case r.v.Deleted:return t.oldFilePath;default:throw new Error(`Don't know how to deal with patch status: ${r.v[t.status]}`)}}getPatchIcon(t){switch(t.status){case r.v.Added:case r.v.Untracked:return"add";case r.v.Conflicted:return"warning";case r.v.Modified:return"create";case r.v.Deleted:return"remove";case r.v.Renamed:return"swap_horiz";default:throw new Error(`Don't know how to deal with patch status: ${r.v[t.status]}`)}}getPatchIconColorClass(t){switch(t.status){case r.v.Added:case r.v.Untracked:return"green";case r.v.Conflicted:case r.v.Modified:return"orange";case r.v.Deleted:return"red";case r.v.Renamed:return"blue";default:throw new Error(`Don't know how to deal with patch status: ${r.v[t.status]}`)}}}return f.\u0275fac=function(t){return new(t||f)},f.\u0275prov=E.Yz7({token:f,factory:f.\u0275fac,providedIn:Y.c}),f})()},16702:(Z,O,i)=>{i.d(O,{p:()=>E});var r=i(41152),Y=i(83668);let E=(()=>{class h{constructor(){this.parseReference=p=>{const t=h.referenceRegex.exec(p);if(!t)throw new Error(`Reference invalid: ${p}`);if("remotes"===t[1]){const u=h.remoteBranchRegex.exec(p);if(!u)throw new Error(`Remote reference invalid: ${p}`);return{branch:u[2],sourceName:u[1],sourceType:"remote"}}return"stash"===t[1]?{branch:"stash",sourceName:"stash",sourceType:"stash"}:{branch:t[2],sourceName:"heads"===t[1]?"local":"tag",sourceType:"heads"===t[1]?"local":"tag"}},this.getBranchTypeIcon=p=>{switch(p){case"local":return"desktop_windows";case"remote":return"cloud_queue";case"stash":return"edit";case"tag":return"label";default:throw new Error(`Unknown reference type: ${p}`)}}}calculateBranches(p,t){const u=(0,r.Z)(p.map(this.parseReference),({branch:I})=>I);return Object.entries(u).map(([I,g])=>({name:I,sources:g.map(T=>({name:T.sourceName,type:T.sourceType,icon:this.getBranchTypeIcon(T.sourceType)}))})).sort((I,g)=>{const T=I.sources.some(x=>"local"===x.type&&`refs/heads/${I.name}`===t),b=I.sources.some(x=>"local"===x.type&&`refs/heads/${g.name}`===t);if(T&&!b)return-1;if(!T&&b)return 1;const P=I.sources.some(x=>"local"===x.type),S=g.sources.some(x=>"local"===x.type);if(P&&!S)return-1;if(!P&&S)return 1;const j=I.sources.some(x=>"remote"===x.type),K=g.sources.some(x=>"remote"===x.type);return j&&!K?-1:!j&&K?1:I.sources.length>g.sources.length?-1:I.sources.length<g.sources.length?1:I.name>g.name?-1:I.name<g.name?1:0})}}return h.referenceRegex=/refs\/(heads|remotes|tags|stash)(?:\/(.*))?/,h.remoteBranchRegex=/refs\/remotes\/([^\/]*)\/(.*)/,h.\u0275fac=function(p){return new(p||h)},h.\u0275prov=Y.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},13358:(Z,O,i)=>{i.d(O,{$:()=>_});var r=i(67115),Y=i(47621);const h=function(D,n){return D<n},p=function(D,n){return D&&D.length?(0,r.Z)(D,(0,Y.Z)(n,2),h):void 0};var t=i(31397);var g=i(34537),T=i(83298),b=i(46540),P=i(54928),S=i(93490),j=i(10381);var A=i(64305),U=i(16410);const H=(0,A.Z)(function(D,n){return(0,U.Z)(D)?function(D,n,c,m){var a=-1,e=T.Z,d=!0,s=D.length,y=[],L=n.length;if(!s)return y;c&&(n=(0,P.Z)(n,(0,S.Z)(c))),m?(e=b.Z,d=!1):n.length>=200&&(e=j.Z,d=!1,n=new g.Z(n));e:for(;++a<s;){var W=D[a],C=null==c?W:c(W);if(W=m||0!==W?W:0,d&&C==C){for(var l=L;l--;)if(n[l]===C)continue e;y.push(W)}else e(n,C,m)||y.push(W)}return y}(D,n):[]});var N=i(48823),G=i(83668);class _{isIndexInBounds(n,c,m){const a=n*_.yUnit;return a>=c&&a<m-_.yUnit}calculateVisible(n,c,m,a,e){return{commitDetails:n.slice(a,e),commitTrails:c.filter(d=>d.minYIndexWithMerges<=e&&d.maxYIndexWithMerges>=a),mergePaths:m.filter(d=>d.from.yIndex>=a&&d.to.some(s=>s.yIndex<=e))}}calculate(n,c,m,a,e,d){const s={},y=[];let L=[],W=[];const C=(n?1:0)+c.length;m.forEach((o,M)=>{s[o.id]={id:o.id,yIndex:M+C,commit:o}});const l=[];c.forEach(o=>{const M=`merge:${o.fromCommitId}:${o.toCommitId}`,v={id:M,message:o.message??`merge: from '${o.fromCommitId}' into '${o.toCommitId}'`,parentIds:[o.toCommitId,o.fromCommitId],time:0,references:[],authorEmail:"",authorName:""};l.push(v),s[M]={id:M,yIndex:n?1:0,commit:v}});const $=n?{id:"head",message:"",parentIds:n.parentId?[n.parentId,...n.mergeHeads]:[...n.mergeHeads],time:0,references:[],authorEmail:"",authorName:""}:null;n&&(s.head={id:"head",yIndex:0,commit:$});const B=$?[$,...l,...m]:[...l,...m];if(B.forEach(o=>{const M=s[o.id];M.trail||this.calculateTrail(M,s,y,L),o.parentIds.length>1&&o.parentIds.slice(1).forEach(v=>{const R=s[v];if(R)if(R.mergeFrom)R.mergeFrom.to.push(M);else{const z={from:R,to:[M],isDashed:"head"===o.id||o.id.startsWith("merge:")};R.mergeFrom=z,W.push(z)}})}),({mergePaths:W,lanes:L}=this.calculateMergePaths(W,L,a,e)),this.calculateColors(y,d),n&&n.parentId){const o=y.find(M=>0===M.minYIndex);if(o){o.commits=o.commits.filter(v=>"head"!==v.id);const M=p(o.commits,v=>v.yIndex);o.minYIndex=M?.yIndex??0,o.minYIndexWithMerges=M?.yIndex??0,this.createUncommittedTrail(s.head,s[n.parentId],y,o.colorIndex,o.lane)}}return l.forEach((o,M)=>{const v=y.find(R=>R.minYIndex===M+(n?1:0));if(v){v.commits=v.commits.filter(z=>z.id!==o.id);const R=p(v.commits,z=>z.yIndex);v.minYIndex=R?.yIndex??0,v.minYIndexWithMerges=R?.yIndex??0,this.createUncommittedTrail(s[o.id],s[o.parentIds[0]],y,v.colorIndex,v.lane)}}),{commitDetails:s,commitTrails:y,lanes:L,mergePaths:W,headCommit:$,orderedCommits:B}}createUncommittedTrail(n,c,m,a,e){let d=c.yIndex;c.mergeFrom&&c.mergeFrom.to.length>0&&!c.mergeFrom.isDashed&&(d=Math.min(...c.mergeFrom.to.map(y=>y.yIndex))+.25,m.push({trailIndex:m.length,minYIndex:d,maxYIndex:c.yIndex,minYIndexWithMerges:d,maxYIndexWithMerges:c.yIndex,colorIndex:a,commits:[],isDashed:!1,lane:e}));const s={trailIndex:m.length,minYIndex:n.yIndex,maxYIndex:d,minYIndexWithMerges:n.yIndex,maxYIndexWithMerges:d,colorIndex:a,commits:[n],isDashed:!0,lane:e};return n.trail=s,m.push(s),s}calculateTrail(n,c,m,a){const e={trailIndex:m.length,minYIndex:n.yIndex,maxYIndex:n.yIndex,minYIndexWithMerges:n.yIndex,maxYIndexWithMerges:n.yIndex,colorIndex:null,commits:[],isDashed:!1};if(n.commit.parentIds.length<=0)n.trail=e,e.commits.push(n),e.maxYIndex=n.yIndex,e.maxYIndexWithMerges=n.yIndex;else{let s=n;for(;s&&!s.trail&&s.commit.parentIds.length>0;)s.trail=e,e.maxYIndex=s.yIndex,e.maxYIndexWithMerges=s.yIndex,e.commits.push(s),s=c[s.commit.parentIds[0]];s&&(e.maxYIndex=s.yIndex,e.maxYIndexWithMerges=s.yIndex,s.trail||(s.trail=e,e.commits.push(s)))}let d=a.find(s=>this.getLaneMaxYIndex(s)<e.minYIndex);return d||(d={xIndex:a.length,occupations:[]},a.push(d)),d.occupations.push({type:"commit-trail",minYIndex:e.minYIndex,maxYIndex:e.maxYIndex}),e.lane=d,m.push(e),e}calculateMergePaths(n,c,m,a){return c=c.map(e=>({...e,occupations:e.occupations.filter(d=>"merge-path"!==d.type)})).filter(e=>e.occupations.length>0),n.forEach(e=>{const d=[];let s;e.to.forEach(l=>{e.from.trail.minYIndexWithMerges>l.yIndex&&(e.from.trail.minYIndexWithMerges=l.yIndex),e.from.trail.maxYIndexWithMerges<l.yIndex&&(e.from.trail.maxYIndexWithMerges=l.yIndex),l.trail.minYIndexWithMerges>e.from.yIndex&&(l.trail.minYIndexWithMerges=e.from.yIndex),l.trail.maxYIndexWithMerges<e.from.yIndex&&(l.trail.maxYIndexWithMerges=e.from.yIndex)});const y=e.from.trail.lane.xIndex,L=m(y);let W=[],C=e.to;if(e.from.trail.minYIndex<e.from.yIndex){const l=e.from.trail.commits.findIndex(B=>B.id===e.from.id),$=e.from.trail.commits[l-1];W=e.to.filter(B=>B.yIndex>$.yIndex),C=e.to.filter(B=>B.yIndex<=$.yIndex),s=$.yIndex}else{s=e.from.yIndex-1;const l=function(D,n){return D&&D.length?(0,r.Z)(D,(0,Y.Z)(n,2),t.Z):void 0}(C,$=>$.yIndex);l&&l.yIndex===e.from.yIndex-1&&(C=C.filter($=>$.id!==l.id),d.push(`M ${L} ${a(e.from.yIndex-.5)}`,`L ${m(l.trail.lane.xIndex)} ${a(l.yIndex)}`)),d.push(`M ${L} ${a(e.from.yIndex)}`),d.push(`V ${a(e.from.yIndex-.5)}`)}if(C.length>0){const l=Math.min(...C.map(o=>o.yIndex)),$=c.filter(o=>!this.isLaneOccupied(o,l+1,s)),B=p($,o=>[...C,e.from].reduce((M,v)=>M+Math.abs(v.trail.lane.xIndex-o.xIndex),0))??{xIndex:c.length,occupations:[]};0===$.length&&c.push(B),B.occupations.push({type:"merge-path",minYIndex:l+1,maxYIndex:s}),d.push(`M ${L} ${a(s+.5)}`,`L ${m(B.xIndex)} ${a(s+.25)}`,`V ${a(l+.5)}`,...C.flatMap(o=>[`M ${m(B.xIndex)} ${a(o.yIndex+.5)}`,`L ${this.adjustForDashedLine(e.isDashed,y,o.trail.lane.xIndex,o.yIndex+.5,o.yIndex,m,a)}`]))}d.push(...W.flatMap(l=>[`M ${L} ${a(l.yIndex+.25)}`,`L ${this.adjustForDashedLine(e.isDashed,y,l.trail.lane.xIndex,l.yIndex+.25,l.yIndex,m,a)}`])),e.path=d.join(" ")}),{mergePaths:n,lanes:c}}calculateColors(n,c){const m=(0,N.Z)(0,c),a=[];n.forEach(e=>{const d=a.filter(y=>y.minYIndexWithMerges<=e.maxYIndexWithMerges&&y.maxYIndexWithMerges>=e.minYIndexWithMerges).map(y=>y.colorIndex),s=H(m,...d);e.colorIndex=s.length>0?s[0]:e.trailIndex%c,a.push(e)})}getLaneMaxYIndex(n){return n.occupations[n.occupations.length-1].maxYIndex}isLaneOccupied(n,c,m){return n.occupations.some(a=>a.minYIndex<=m&&a.maxYIndex>=c)}adjustForDashedLine(n,c,m,a,e,d,s){const L=n?a>e?.15:-.15:0;return`${d(m+(n?c>m?.3:-.3:0))} ${s(e+L)}`}}_.xUnit=15,_.yUnit=26,_.xOffset=_.xUnit/2,_.yOffset=_.yUnit/2,_.\u0275fac=function(n){return new(n||_)},_.\u0275prov=G.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})},41152:(Z,O,i)=>{i.d(O,{Z:()=>K});var r=i(84058);const f=function(x,w,A,U){for(var F=-1,H=null==x?0:x.length;++F<H;){var N=x[F];w(U,N,A(N),x)}return U};var p=i(74126);const u=function(x,w,A,U){return(0,p.Z)(x,function(F,H,N){w(U,F,A(F),N)}),U};var I=i(47621),g=i(7765),S=Object.prototype.hasOwnProperty;const K=(x=function(x,w,A){S.call(x,A)?x[A].push(w):function(x,w,A){"__proto__"==w&&r.Z?(0,r.Z)(x,w,{configurable:!0,enumerable:!0,value:A,writable:!0}):x[w]=A}(x,A,[w])},function(A,U){var H={};return((0,g.Z)(A)?f:u)(A,x,(0,I.Z)(U,2),H)});var x}}]);