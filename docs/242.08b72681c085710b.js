"use strict";(self.webpackChunkgit_glint=self.webpackChunkgit_glint||[]).push([[242],{7396:(I,C,e)=>{e.d(C,{Y:()=>E});var t=e(4650),g=e(1135),M=e(6451),a=e(4968),h=e(2722),x=e(8675),S=e(4986),A=e(8421),U=e(4482),j=e(5032),W=e(5403),T=e(7445);var K=e(5684),p=e(8746),F=e(9300),Z=e(8505),B=e(3900),J=e(4004),s=e(3099),o=e(8926),v=e(9967),u=e(2120),c=e(6895);const m=["border"],L=["*"];class E extends((0,o.j)(v.A)){constructor(i,l,r){super(),this.element=i,this.renderer=l,this.zone=r,this.hide=!1,this.sizeChanging=new t.vpe,this.sizeChanged=new t.vpe,this.isVertical$=new g.X(!1),this.highlightBorder$=new g.X(!1),this.previousCell$=new g.X(null),this.linkedHover$=new g.X(!1),this.linked$=new g.X(void 0)}static{this.percentageRegex=/(\d*\.?\d+)%/}static{this.pixelsRegex=/(\d*\.?\d+)px/}get parentElement(){const i=this.element.nativeElement.parentElement;if(!i)throw new Error("GridCell has no parent Grid");return i}ngOnChanges(i){i.linked&&this.linked$.next(i.linked.currentValue)}ngOnInit(){this.zone.runOutsideAngular(()=>{const i=this.listenToPointerEvents(this.borderElement.nativeElement,["touchstart"],"mousedown","touches"),l=this.listenToPointerEvents(window,["touchmove"],"mousemove","targetTouches"),r=this.listenToPointerEvents(window,["touchend","touchcancel"],"mouseup","changedTouches");i.pipe((0,h.R)(this.destroyed$)).subscribe(([n,d])=>{let f;this.zone.run(()=>this.highlightBorder$.next(!0));const _=this.element.nativeElement,y=this.previousCell$.value?.element.nativeElement;if(!y)throw new Error("Cannot change the size of a grid cell with no previous cell");if(this.isVertical$.value){const R=y.offsetHeight,X=_.offsetHeight,G=this.getLimit(this.max,this.parentElement.clientHeight,1/0),Y=this.getLimit(this.min,this.parentElement.clientHeight,0),Q=this.getLimit(this.previousCell$.value?.max,this.parentElement.clientHeight,1/0),N=this.getLimit(this.previousCell$.value?.min,this.parentElement.clientHeight,0);f=([,b])=>{const P=X+d-b,z=R+b-d,H=Math.min(Math.max(Y,P),G)-P,w=Math.min(Math.max(N,z),Q)-z,$=Math.abs(w)>Math.abs(H)?-w:H;return this.renderer.setStyle(y,"height",z-$+"px"),this.renderer.setStyle(_,"height",`${P+$}px`),[z-$,P+$]}}else{const R=y.offsetWidth,X=_.offsetWidth,G=this.getLimit(this.max,this.parentElement.clientWidth,1/0),Y=this.getLimit(this.min,this.parentElement.clientWidth,0),Q=this.getLimit(this.previousCell$.value?.max,this.parentElement.clientWidth,1/0),N=this.getLimit(this.previousCell$.value?.min,this.parentElement.clientWidth,0);f=([b])=>{const P=X+n-b,z=R+b-n,H=Math.min(Math.max(Y,P),G)-P,w=Math.min(Math.max(N,z),Q)-z,$=Math.abs(w)>Math.abs(H)?-w:H;return this.renderer.setStyle(y,"width",z-$+"px"),this.renderer.setStyle(_,"width",`${P+$}px`),[z-$,P+$]}}l.pipe((0,x.O)([n,d]),function D(V,i=S.z){return function O(V){return(0,U.e)((i,l)=>{let r=!1,n=null;i.subscribe((0,W.x)(l,d=>{r=!0,n=d})),(0,A.Xf)(V).subscribe((0,W.x)(l,()=>{if(r){r=!1;const d=n;n=null,l.next(d)}},j.Z))})}((0,T.F)(V,i))}(50),(0,h.R)(this.previousCell$.pipe((0,K.T)(1))),(0,h.R)(r),(0,h.R)(i),(0,h.R)(this.destroyed$),(0,p.x)(()=>this.zone.run(()=>this.highlightBorder$.next(!1)))).subscribe({next:R=>{this.sizeChanging.next(f(R))},complete:()=>this.sizeChanged.next()})}),this.linked$.pipe((0,F.h)(u.$K),(0,h.R)(this.destroyed$)).subscribe(n=>{let d=!1;n.sizeChanging.pipe((0,F.h)(()=>!d),(0,Z.b)(()=>{d=!0,this.zone.run(()=>this.highlightBorder$.next(!0))}),(0,B.w)(f=>n.sizeChanging.pipe((0,x.O)(f),(0,h.R)(n.sizeChanged),(0,h.R)(this.linked$.pipe((0,K.T)(1))),(0,p.x)(()=>{d=!1,this.sizeChanged.next(),this.zone.run(()=>this.highlightBorder$.next(!1))}))),(0,h.R)(this.linked$.pipe((0,K.T)(1))),(0,h.R)(this.destroyed$)).subscribe(([f,_])=>{const y=this.element.nativeElement,R=this.previousCell$.value?.element.nativeElement;this.isVertical$.value?(this.renderer.setStyle(R,"height",`${f}px`),this.renderer.setStyle(y,"height",`${_}px`)):(this.renderer.setStyle(R,"width",`${f}px`),this.renderer.setStyle(y,"width",`${_}px`))})})})}isFixedSize(){let i=null,l=null;if(this.max){const n=E.pixelsRegex.exec(this.max);n&&(i=+n[1])}if(this.min){const n=E.pixelsRegex.exec(this.min);n&&(l=+n[1])}if(null===i&&null===l)return!1;i=i??1/0,l=l??0;const r=this.isVertical$.value?this.element.nativeElement.offsetHeight:this.element.nativeElement.offsetWidth;return r>=i||r<=l}getSizeInPixels(){const i=this.isVertical$.value?this.parentElement.clientHeight:this.parentElement.clientWidth,l=this.getLimit(this.max,i,1/0),r=this.getLimit(this.min,i,0),n=this.isVertical$.value?this.element.nativeElement.offsetHeight:this.element.nativeElement.offsetWidth;return n>=l?l:n>0&&n<=r?r:n}getLimit(i,l,r){if(!i||""===i)return r;const n=E.percentageRegex.exec(i);if(n)return l*+n[1]/100;const d=E.pixelsRegex.exec(i);return d?+d[1]:isNaN(+i)?r:+i}listenToPointerEvents(i,l,r,n){return(0,M.T)(...l.map(d=>(0,a.R)(i,d,{passive:!1}).pipe((0,Z.b)(f=>f.preventDefault()),(0,J.U)(f=>[f[n][0].clientX,f[n][0].clientY]))),(0,a.R)(i,r,{passive:!1}).pipe((0,Z.b)(d=>d.preventDefault()),(0,J.U)(d=>[d.clientX,d.clientY]))).pipe((0,s.B)())}static{this.\u0275fac=function(l){return new(l||E)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(t.R0b))}}static{this.\u0275cmp=t.Xpm({type:E,selectors:[["app-grid-cell"]],viewQuery:function(l,r){if(1&l&&t.Gf(m,7,t.SBq),2&l){let n;t.iGM(n=t.CRH())&&(r.borderElement=n.first)}},inputs:{hide:"hide",max:"max",min:"min",linked:"linked"},outputs:{sizeChanging:"sizeChanging",sizeChanged:"sizeChanged"},features:[t.qOj,t.TTD],ngContentSelectors:L,decls:9,vars:15,consts:[[1,"grid-cell-wrapper"],[1,"grid-cell-border",3,"ngClass","mouseenter","mouseleave"],["border",""],[1,"grid-cell-content"]],template:function(l,r){1&l&&(t.F$t(),t.TgZ(0,"div",0)(1,"div",1,2),t.NdJ("mouseenter",function(){return r.linkedHover$.next(!0)})("mouseleave",function(){return r.linkedHover$.next(!1)}),t.ALo(3,"async"),t.ALo(4,"async"),t.ALo(5,"async"),t.ALo(6,"async"),t.qZA(),t.TgZ(7,"div",3),t.Hsn(8),t.qZA()()),2&l&&(t.xp6(1),t.Udp("display",t.lcZ(3,7,r.previousCell$)?"block":"none"),t.ekj("highlight",t.lcZ(4,9,r.highlightBorder$))("linked-hover",t.lcZ(5,11,null==r.linked?null:r.linked.linkedHover$)),t.Q6J("ngClass",t.lcZ(6,13,r.isVertical$)?"vertical":"horizontal"))},dependencies:[c.mk,c.Ov],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;position:relative;transition:width 30ms ease-in-out,height 30ms ease-in-out}.grid-cell-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}.grid-cell-border[_ngcontent-%COMP%]{position:absolute;z-index:100}.grid-cell-border.vertical[_ngcontent-%COMP%]{cursor:row-resize;top:-2px;height:4px;width:100%}.grid-cell-border.horizontal[_ngcontent-%COMP%]{cursor:col-resize;left:-2px;height:100%;width:4px}.grid-cell-content[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;overflow-x:auto;overflow-y:auto}.dark-theme[_nghost-%COMP%]   .grid-cell-border.highlight[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .grid-cell-border.highlight[_ngcontent-%COMP%], .dark-theme[_nghost-%COMP%]   .grid-cell-border[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .grid-cell-border[_ngcontent-%COMP%]:hover, .dark-theme[_nghost-%COMP%]   .grid-cell-border.linked-hover[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .grid-cell-border.linked-hover[_ngcontent-%COMP%]{background-color:#37474f}.light-theme[_nghost-%COMP%]   .grid-cell-border.highlight[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .grid-cell-border.highlight[_ngcontent-%COMP%], .light-theme[_nghost-%COMP%]   .grid-cell-border[_ngcontent-%COMP%]:hover, .light-theme   [_nghost-%COMP%]   .grid-cell-border[_ngcontent-%COMP%]:hover, .light-theme[_nghost-%COMP%]   .grid-cell-border.linked-hover[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .grid-cell-border.linked-hover[_ngcontent-%COMP%]{background-color:#b0bec5}"],changeDetection:0})}}},3943:(I,C,e)=>{e.d(C,{M:()=>B});var t=e(7717),g=e(1135),M=e(6451),a=e(4968),h=e(2722),x=e(5684),S=e(1884),A=e(8505),U=e(8675),j=e(3900),W=e(8926),O=e(9967),T=e(9578),D=e(9077),K=e(7396),p=e(4650),F=e(9867);const Z=["*"];class B extends((0,W.j)(O.A)){constructor(s,o){super(),this.renderer=s,this.store=o,this.hostFlexDirection="row",this.hostOverflow="hidden auto",this.isVertical$=new g.X(!1)}set vertical(s){this.isVertical$.next(void 0!==s)}ngAfterContentInit(){this.id&&this.store.select(D.$.gridSizes(this.id)).pipe((0,h.R)(this.destroyed$)).subscribe(s=>{s.length!==this.gridCells.length&&console.log("mismatch sizes at ",this.id,s.length,this.gridCells.length);const o=(0,t.Z)([...this.gridCells],s),v=o.filter(([,m])=>m.endsWith("%")),u=o.filter(([,m])=>m.endsWith("px")),c=u.map(([,m])=>+m.replace("px","")).reduce((m,L)=>m+L,0);v.forEach(([m,L])=>{const E=+L.replace("%","");this.renderer.setStyle(m.element.nativeElement,this.isVertical$.value?"height":"width",`calc(${E}% - ${c*E/100}px)`)}),u.forEach(([m,L])=>{this.renderer.setStyle(m.element.nativeElement,this.isVertical$.value?"height":"width",L)})}),this.hostFlexDirection=this.isVertical$.value?"column":"row",this.gridCells.forEach(s=>{s.isVertical$.next(this.isVertical$.value)}),(0,M.T)(this.isVertical$.pipe((0,x.T)(1),(0,S.x)(),(0,A.b)(s=>{this.hostFlexDirection=s?"column":"row",this.hostOverflow=s?"auto hidden":"hidden auto";const o=s?"width":"height",v=s?"height":"width";this.gridCells.forEach(u=>{u.isVertical$.next(s);const c=u.element.nativeElement.style[o];this.renderer.removeStyle(u.element.nativeElement,o),this.renderer.setStyle(u.element.nativeElement,v,c)})})),this.gridCells.changes.pipe((0,U.O)(void 0),(0,A.b)(()=>{this.gridCells.forEach((s,o,v)=>s.previousCell$.next(o>0?v[o-1]:null)),this.updateCellSizes()}))).pipe((0,j.w)(()=>(0,M.T)((0,a.R)(window,"resize"),...this.gridCells.map(s=>s.sizeChanged.asObservable()))),(0,h.R)(this.destroyed$)).subscribe(()=>{this.updateCellSizes()})}updateCellSizes(){if(!this.id)return;const s=this.gridCells.filter(c=>c.isFixedSize()),o=s.reduce((c,m)=>c+m.getSizeInPixels(),0),v=this.gridCells.reduce((c,m)=>c+m.getSizeInPixels(),0),u=this.gridCells.map(c=>s.includes(c)?`${c.getSizeInPixels()}px`:100*c.getSizeInPixels()/(v-o)+"%");this.store.dispatch(new T.ct(this.id,u))}static{this.\u0275fac=function(o){return new(o||B)(p.Y36(p.Qsj),p.Y36(F.yh))}}static{this.\u0275cmp=p.Xpm({type:B,selectors:[["app-grid"]],contentQueries:function(o,v,u){if(1&o&&p.Suo(u,K.Y,4),2&o){let c;p.iGM(c=p.CRH())&&(v.gridCells=c)}},hostVars:4,hostBindings:function(o,v){2&o&&p.Udp("flex-direction",v.hostFlexDirection)("overflow",v.hostOverflow)},inputs:{id:"id",vertical:"vertical"},features:[p.qOj],ngContentSelectors:Z,decls:1,vars:0,template:function(o,v){1&o&&(p.F$t(),p.Hsn(0))},styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;overflow-x:auto;overflow-y:auto}"],changeDetection:0})}}},744:(I,C,e)=>{e.d(C,{x:()=>g});var t=e(4650);class g{transform(a){return a&&(Array.isArray(a)?a.length>0?a:null:"object"==typeof a?Object.keys(a).length>0?a:null:a)}static{this.\u0275fac=function(h){return new(h||g)}}static{this.\u0275pipe=t.Yjl({name:"nullEmpty",type:g,pure:!1})}}},7965:(I,C,e)=>{e.d(C,{Z:()=>h});var t=e(9940),g=e(5604),M=e(8661);const h=function a(x,S){return(0,M.Z)((0,g.Z)(x,S,t.Z),x+"")}},7118:(I,C,e)=>{e.d(C,{Z:()=>a});var t=e(8706),g=e(214);const a=function M(h){return(0,g.Z)(h)&&(0,t.Z)(h)}},7717:(I,C,e)=>{e.d(C,{Z:()=>W});var t=e(7965),g=e(197),M=e(7988),a=e(666),h=e(4049),x=e(7118),S=Math.max;const W=(0,t.Z)(function A(O){if(!O||!O.length)return[];var T=0;return O=(0,g.Z)(O,function(D){if((0,x.Z)(D))return T=S(D.length,T),!0}),(0,h.Z)(T,function(D){return(0,M.Z)(O,(0,a.Z)(D))})})}}]);