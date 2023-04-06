"use strict";(self.webpackChunkgit_glint=self.webpackChunkgit_glint||[]).push([[795],{6271:(I,k,s)=>{s.d(k,{k:()=>f});var g=s(3779),e=s(4650),p=s(7016);class f{constructor(c){this.baseApi=c}getRelativePath(c,l){return this.baseApi.single(g.w.files.getRelativePath,c,l)}getResolvedPath(c,l){return this.baseApi.single(g.w.files.getResolvedPath,c,l)}getFileContents(c){return this.baseApi.single(g.w.files.getFileContents,c)}openFileDialog(c){return this.baseApi.single(g.w.files.openFileDialog,c)}openFolderDialog(c,l){return this.baseApi.single(g.w.files.openFolderDialog,c,l)}openFileWithShell(c){return this.baseApi.single(g.w.files.openFileWithShell,c)}hasTerminal(){return this.baseApi.single(g.w.files.hasTerminal)}openTerminal(c){return this.baseApi.single(g.w.files.openTerminal,c)}hasVsCode(){return this.baseApi.single(g.w.files.hasVsCode)}openVsCode(c){return this.baseApi.single(g.w.files.openVsCode,c)}static{this.\u0275fac=function(l){return new(l||f)(e.LFG(p._))}}static{this.\u0275prov=e.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"})}}},9251:(I,k,s)=>{s.d(k,{j:()=>he,b:()=>H});var g=s(655),e=s(4650),p=s(4006),f=s(9867),O=s(4128),c=s(4004),l=s(5698),F=s(2722),u=s(2270),D=s(8926),U=s(9967),J=s(3825),M=s(4889),v=s(6966),y=s(5412),_=s(9549),C=s(284),h=s(6895),b=s(4859),P=s(7392),K=s(266),W=s(3178);class N{constructor(i){this.template=i}static{this.\u0275fac=function(t){return new(t||N)(e.Y36(e.Rgc))}}static{this.\u0275dir=e.lG2({type:N,selectors:[["","appTreeLeafNode",""]]})}}class E{constructor(i){this.template=i}static{this.\u0275fac=function(t){return new(t||E)(e.Y36(e.Rgc))}}static{this.\u0275dir=e.lG2({type:E,selectors:[["","appTreeNode",""]]})}}var x=s(7340);function Y(a,i){1&a&&e.GkF(0)}const $=function(a){return{$implicit:a}};class R{constructor(i){this.element=i,this.dragListeners=[],this.attrDraggable=!0,this.dragstartListener=t=>{t.dataTransfer&&(t.dataTransfer.setData("app/tree",this.node.id),t.dataTransfer.effectAllowed="move")},this.dragenterListener=t=>{this.dragoverPosition=this.getDragoverPosition(t.offsetY)},this.dragleaveListener=t=>{this.dragoverPosition="none"},this.dragoverListener=t=>{if(t.dataTransfer){const n=t.dataTransfer;["app/tree",...this.dragListeners.map(([r])=>r)].some(r=>n.types.includes(r)&&n.getData(r)!==this.node.id)&&(t.preventDefault(),t.dataTransfer.dropEffect="move",this.dragoverPosition=this.getDragoverPosition(t.offsetY))}},this.dropListener=t=>{if(t.dataTransfer){const n=t.dataTransfer,o=this.getDragoverPosition(t.offsetY);if(n.types.includes("app/tree")){const r=n.getData("app/tree");this.isDescendant(r,this.node.id)||(t.preventDefault(),this.update(r,this.node.id,o))}this.dragListeners.forEach(([r,d])=>{n.types.includes(r)&&(t.preventDefault(),d(n.getData(r),this.node.id,o,!0))})}this.dragoverPosition="none"},this.dragoverPosition="none",this.getDragoverPosition=t=>t/this.element.nativeElement.clientHeight<.5?"above":"below"}get classDragAbove(){return"above"===this.dragoverPosition}get classDragBelow(){return"below"===this.dragoverPosition}static{this.\u0275fac=function(t){return new(t||R)(e.Y36(e.SBq))}}static{this.\u0275cmp=e.Xpm({type:R,selectors:[["app-tree-leaf-node"]],hostVars:5,hostBindings:function(t,n){1&t&&e.NdJ("dragstart",function(r){return n.dragstartListener(r)})("dragenter",function(r){return n.dragenterListener(r)})("dragleave",function(r){return n.dragleaveListener(r)})("dragover",function(r){return n.dragoverListener(r)})("drop",function(r){return n.dropListener(r)}),2&t&&(e.uIk("draggable",n.attrDraggable),e.ekj("drag-above",n.classDragAbove)("drag-below",n.classDragBelow))},inputs:{node:"node",update:"update",isDescendant:"isDescendant",template:"template",dragListeners:"dragListeners"},decls:1,vars:4,consts:[[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,n){1&t&&e.YNc(0,Y,1,0,"ng-container",0),2&t&&e.Q6J("ngTemplateOutlet",n.template)("ngTemplateOutletContext",e.VKq(2,$,n.node))},dependencies:[h.tP],styles:["[_nghost-%COMP%]{display:block;border-top:5px solid transparent;border-bottom:5px solid transparent}.dark-theme   .drag-above[_nghost-%COMP%]{border-top-color:#2d2d2d}.dark-theme   .drag-below[_nghost-%COMP%]{border-bottom-color:#2d2d2d}.light-theme   .drag-above[_nghost-%COMP%]{border-top-color:#bdbdbd}.light-theme   .drag-below[_nghost-%COMP%]{border-bottom-color:#bdbdbd}"],changeDetection:0})}}function G(a,i){1&a&&e.GkF(0)}function S(a,i){if(1&a&&e._UZ(0,"app-tree-node",7),2&a){const t=e.oxw().$implicit,n=e.oxw(2);e.Q6J("node",t)("update",n.update)("updateExpanded",n.updateExpanded)("isDescendant",n.isDescendant)("templates",n.templates)("dragListeners",n.dragListeners)}}function j(a,i){if(1&a&&e._UZ(0,"app-tree-leaf-node",8),2&a){const t=e.oxw().$implicit,n=e.oxw(2);e.Q6J("node",t)("update",n.update)("isDescendant",n.isDescendant)("template",n.templates.leafNode)("dragListeners",n.dragListeners)}}function X(a,i){if(1&a&&(e.ynx(0),e.YNc(1,S,1,6,"app-tree-node",5),e.YNc(2,j,1,5,"app-tree-leaf-node",6),e.BQk()),2&a){const t=i.$implicit,n=e.oxw(2);e.xp6(1),e.Q6J("ngIf",n.isNode(t)),e.xp6(1),e.Q6J("ngIf",n.isLeaf(t))}}function q(a,i){if(1&a&&(e.TgZ(0,"div",3),e.YNc(1,X,3,2,"ng-container",4),e.qZA()),2&a){const t=e.oxw();e.Q6J("@.disabled",t.animationsDisabled)("@slide",void 0),e.xp6(1),e.Q6J("ngForOf",t.node.children)("ngForTrackBy",t.trackById)}}const z=function(a){return{$implicit:a}};class w{constructor(i){this.element=i,this.dragListeners=[],this.animationsDisabled=!0,this.dragoverPosition="none",this.dragoverStarted=null,this.dragstartListener=t=>{t.dataTransfer&&(t.dataTransfer.setData("app/tree",this.node.id),t.dataTransfer.effectAllowed="move")},this.dragenterListener=t=>{this.dragoverPosition=this.getDragoverPosition(t.offsetY),this.dragoverStarted=(new Date).getTime()},this.dragleaveListener=t=>{this.dragoverPosition="none",this.dragoverStarted=null},this.dragoverListener=t=>{if(t.dataTransfer){const n=t.dataTransfer;if(["app/tree",...this.dragListeners.map(([r])=>r)].some(r=>n.types.includes(r)&&n.getData(r)!==this.node.id)&&(t.preventDefault(),t.dataTransfer.dropEffect="move",this.dragoverPosition=this.getDragoverPosition(t.offsetY),!this.node.expanded))if("center"===this.dragoverPosition){const r=(new Date).getTime();null===this.dragoverStarted?this.dragoverStarted=r:r-this.dragoverStarted>w.expandWaitPeriod&&(this.node.expanded=!0)}else this.dragoverStarted=null}},this.dropListener=t=>{if(t.dataTransfer){const n=t.dataTransfer,o=this.getDragoverPosition(t.offsetY);if(n.types.includes("app/tree")){const r=n.getData("app/tree");this.isDescendant(r,this.node.id)||(t.preventDefault(),this.update(r,this.node.id,o))}this.dragListeners.forEach(([r,d])=>{n.types.includes(r)&&(t.preventDefault(),d(n.getData(r),this.node.id,o,!1))})}this.dragoverPosition="none",this.dragoverStarted=null},this.clickListener=t=>{t.preventDefault(),this.node.expanded=!this.node.expanded,this.updateExpanded(this.node.id,this.node.expanded)},this.isLeaf=t=>!t.children,this.isNode=t=>!!t.children,this.getDragoverPosition=t=>t<0?"above":t<this.element.nativeElement.clientHeight-2*w.padding?"center":"below"}static{this.padding=5}static{this.expandWaitPeriod=750}ngAfterViewInit(){this.animationsDisabled=!1}trackById(i,t){return t.id}static{this.\u0275fac=function(t){return new(t||w)(e.Y36(e.SBq))}}static{this.\u0275cmp=e.Xpm({type:w,selectors:[["app-tree-node"]],inputs:{node:"node",update:"update",updateExpanded:"updateExpanded",isDescendant:"isDescendant",templates:"templates",dragListeners:"dragListeners"},decls:3,vars:11,consts:[["draggable","true",1,"tree-node-heading",3,"dragstart","dragenter","dragleave","dragover","drop","click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","tree-node-children",4,"ngIf"],[1,"tree-node-children"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"node","update","updateExpanded","isDescendant","templates","dragListeners",4,"ngIf"],[3,"node","update","isDescendant","template","dragListeners",4,"ngIf"],[3,"node","update","updateExpanded","isDescendant","templates","dragListeners"],[3,"node","update","isDescendant","template","dragListeners"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.NdJ("dragstart",function(r){return n.dragstartListener(r)})("dragenter",function(r){return n.dragenterListener(r)})("dragleave",function(r){return n.dragleaveListener(r)})("dragover",function(r){return n.dragoverListener(r)})("drop",function(r){return n.dropListener(r)})("click",function(r){return n.clickListener(r)}),e.YNc(1,G,1,0,"ng-container",1),e.qZA(),e.YNc(2,q,2,4,"div",2)),2&t&&(e.ekj("drag-above","above"===n.dragoverPosition)("drag-below","below"===n.dragoverPosition)("drag-center","center"===n.dragoverPosition),e.xp6(1),e.Q6J("ngTemplateOutlet",n.templates.node)("ngTemplateOutletContext",e.VKq(9,z,n.node)),e.xp6(1),e.Q6J("ngIf",n.node.expanded))},dependencies:[h.sg,h.O5,h.tP,w,R],styles:["[_nghost-%COMP%]{display:block}.tree-node-heading[_ngcontent-%COMP%]{cursor:pointer;border-top:5px solid transparent;border-bottom:5px solid transparent}.tree-node-children[_ngcontent-%COMP%]{margin-left:20px;overflow:hidden}.dark-theme[_nghost-%COMP%]   .tree-node-heading.drag-above[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .tree-node-heading.drag-above[_ngcontent-%COMP%]{border-top-color:#2d2d2d}.dark-theme[_nghost-%COMP%]   .tree-node-heading.drag-below[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .tree-node-heading.drag-below[_ngcontent-%COMP%]{border-bottom-color:#2d2d2d}.dark-theme[_nghost-%COMP%]   .tree-node-heading.drag-center[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .tree-node-heading.drag-center[_ngcontent-%COMP%]{background-color:#2d2d2d}.light-theme[_nghost-%COMP%]   .tree-node-heading.drag-above[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .tree-node-heading.drag-above[_ngcontent-%COMP%]{border-top-color:#bdbdbd}.light-theme[_nghost-%COMP%]   .tree-node-heading.drag-below[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .tree-node-heading.drag-below[_ngcontent-%COMP%]{border-bottom-color:#bdbdbd}.light-theme[_nghost-%COMP%]   .tree-node-heading.drag-center[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .tree-node-heading.drag-center[_ngcontent-%COMP%]{background-color:#bdbdbd}"],data:{animation:[(0,x.X$)("slide",[(0,x.eR)(":enter",[(0,x.oB)({height:0}),(0,x.jt)("225ms ease-in-out",(0,x.oB)({height:"*"}))]),(0,x.eR)(":leave",[(0,x.oB)({height:"*"}),(0,x.jt)("225ms ease-in-out",(0,x.oB)({height:0}))])])]},changeDetection:0})}}function ee(a,i){if(1&a&&e._UZ(0,"app-tree-node",3),2&a){const t=e.oxw().$implicit,n=e.oxw();e.Q6J("node",t)("update",n.update)("updateExpanded",n.updateExpanded)("isDescendant",n.isDescendant)("templates",n.templates)("dragListeners",n.dragListeners)}}function te(a,i){if(1&a&&e._UZ(0,"app-tree-leaf-node",4),2&a){const t=e.oxw().$implicit,n=e.oxw();e.Q6J("node",t)("update",n.update)("isDescendant",n.isDescendant)("template",n.templates.leafNode)("dragListeners",n.dragListeners)}}function ne(a,i){if(1&a&&(e.ynx(0),e.YNc(1,ee,1,6,"app-tree-node",1),e.YNc(2,te,1,5,"app-tree-leaf-node",2),e.BQk()),2&a){const t=i.$implicit,n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.isNode(t)),e.xp6(1),e.Q6J("ngIf",n.isLeaf(t))}}class A extends((0,D.j)(U.A)){constructor(){super(...arguments),this.indent=20,this.indentUnits="px",this.dragListeners=[],this.outputTree=new e.vpe,this.isDescendant=(i,t)=>{if(i===t)return!0;const n=this.getNodeById(i,this.tree);if(!n)throw new u.bv(i);return null!==this.getNodeById(t,n.children)},this.update=(i,t,n)=>{const o=this.removeNode(i,this.tree);if(!o)throw new u.bv(i);const[r,d]=o,m=this.findSiblingNodesWithIndex(t,d);if(!m)throw new u.bv(t);const[T,B]=m;switch(n){case"above":T.splice(B,0,r);break;case"below":T.splice(B+1,0,r);break;case"center":const L=T[B].children;if(!L)throw new u.kI;L.push(r),T[B].expanded=!0;break;default:throw new Error(`Check not exhaustive '${n}'.`)}this.tree=d,this.outputTree.next(d)},this.updateExpanded=(i,t)=>{const n=this.updateNodeExpanded(i,t,this.tree);if(!n)throw new u.bv(i);this.tree=n,this.outputTree.next(n)},this.isLeaf=i=>!i.children,this.isNode=i=>!!i.children}get templates(){return{node:this.nodeDirective.template,leafNode:this.leafNodeDirective.template}}trackById(i,t){return t.id}getNodeById(i,t){if(t)for(const n of t){if(n.id===i)return n;const o=this.getNodeById(i,n.children);if(o)return o}return null}findSiblingNodesWithIndex(i,t){if(t)for(let n=0;n<t.length;n++){const o=t[n];if(!o)continue;if(o.id===i)return[t,n];const r=this.findSiblingNodesWithIndex(i,o.children);if(r)return r}return null}removeNode(i,t){if(t)for(let n=0;n<t.length;n++){const o=t[n];if(!o)continue;if(o.id===i)return[o,[...t.slice(0,n),...t.slice(n+1)]];const r=this.removeNode(i,o.children);if(r)return[r[0],[...t.slice(0,n),{...o,children:r[1]},...t.slice(n+1)]]}return null}updateNodeExpanded(i,t,n){if(n)for(let o=0;o<n.length;o++){const r=n[o];if(!r)continue;if(r.id===i)return[...n.slice(0,o),{...r,expanded:t},...n.slice(o+1)];const d=this.updateNodeExpanded(i,t,r.children);if(d)return[...n.slice(0,o),{...r,children:d},...n.slice(o+1)]}return null}static{this.\u0275fac=function(){let i;return function(n){return(i||(i=e.n5z(A)))(n||A)}}()}static{this.\u0275cmp=e.Xpm({type:A,selectors:[["app-tree"]],contentQueries:function(t,n,o){if(1&t&&(e.Suo(o,E,5),e.Suo(o,N,5)),2&t){let r;e.iGM(r=e.CRH())&&(n.nodeDirective=r.first),e.iGM(r=e.CRH())&&(n.leafNodeDirective=r.first)}},inputs:{tree:"tree",indent:"indent",indentUnits:"indentUnits",dragListeners:"dragListeners"},outputs:{outputTree:"treeChange"},features:[e.qOj],decls:1,vars:2,consts:[[4,"ngFor","ngForOf","ngForTrackBy"],[3,"node","update","updateExpanded","isDescendant","templates","dragListeners",4,"ngIf"],[3,"node","update","isDescendant","template","dragListeners",4,"ngIf"],[3,"node","update","updateExpanded","isDescendant","templates","dragListeners"],[3,"node","update","isDescendant","template","dragListeners"]],template:function(t,n){1&t&&e.YNc(0,ne,3,2,"ng-container",0),2&t&&e.Q6J("ngForOf",n.tree)("ngForTrackBy",n.trackById)},dependencies:[h.sg,h.O5,w,R],encapsulation:2,changeDetection:0})}}var oe=s(4442);const re=["dialogTemplate"];function ie(a,i){if(1&a&&(e.TgZ(0,"mat-icon"),e._uU(1),e.qZA()),2&a){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.expanded?"expand_more":"chevron_right")}}function ae(a,i){if(1&a){const t=e.EpF();e.TgZ(0,"div",12)(1,"button",13),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,r=e.oxw(2);return e.KtG(r.addFolder(o.id))}),e.TgZ(2,"mat-icon"),e._uU(3,"create_new_folder"),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.ALo(6,"translate"),e.qZA()(),e.TgZ(7,"button",13),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,r=e.oxw(2);return e.KtG(r.renameFolder(o))}),e.TgZ(8,"mat-icon"),e._uU(9,"edit"),e.qZA(),e.TgZ(10,"span"),e._uU(11),e.ALo(12,"translate"),e.qZA()(),e.TgZ(13,"button",13),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,r=e.oxw(2);return e.KtG(r.deleteNode(o))}),e.TgZ(14,"mat-icon"),e._uU(15,"delete"),e.qZA(),e.TgZ(16,"span"),e._uU(17),e.ALo(18,"translate"),e.qZA()()()}2&a&&(e.xp6(5),e.Oqu(e.lcZ(6,3,"New !bookmark! folder")),e.xp6(6),e.Oqu(e.lcZ(12,5,"Rename")),e.xp6(6),e.Oqu(e.lcZ(18,7,"Delete")))}function se(a,i){if(1&a){const t=e.EpF();e.TgZ(0,"div",7,8),e.NdJ("click",function(){const r=e.CHM(t).$implicit,d=e.oxw(2);return e.KtG(d.nodeClick.next(r))}),e.TgZ(2,"span")(3,"mat-icon",9),e._uU(4,"folder"),e.qZA(),e._uU(5),e.qZA(),e.TgZ(6,"button",10),e.YNc(7,ie,2,1,"mat-icon",0),e.qZA(),e.YNc(8,ae,19,9,"ng-template",null,11,e.W1O),e.qZA()}if(2&a){const t=i.$implicit,n=e.MAs(9),o=e.oxw(2);e.ekj("selected",o.selectedNodeId===t.id),e.Q6J("appContextMenu",n),e.xp6(5),e.hij(" ",t.name," "),e.xp6(2),e.Q6J("ngIf",t.children.length>0)}}function de(a,i){if(1&a){const t=e.EpF();e.TgZ(0,"div",12)(1,"button",13),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,r=e.oxw(2);return e.KtG(r.deleteNode(o))}),e.TgZ(2,"mat-icon"),e._uU(3,"delete"),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.ALo(6,"translate"),e.qZA()()()}2&a&&(e.xp6(5),e.Oqu(e.lcZ(6,1,"Delete")))}function ce(a,i){if(1&a){const t=e.EpF();e.TgZ(0,"div",14,8),e.NdJ("click",function(){const r=e.CHM(t).$implicit,d=e.oxw(2);return e.KtG(d.nodeClick.next(r))}),e.TgZ(2,"span"),e._uU(3),e.qZA(),e.YNc(4,de,7,3,"ng-template",null,11,e.W1O),e.qZA()}if(2&a){const t=i.$implicit,n=e.MAs(5),o=e.oxw(2);e.ekj("selected",o.selectedNodeId===t.id),e.Q6J("appContextMenu",n)("matTooltip",t.id),e.xp6(3),e.Oqu(t.name)}}function le(a,i){if(1&a){const t=e.EpF();e.TgZ(0,"div",15),e.NdJ("dragover",function(o){e.CHM(t);const r=e.oxw(2);return e.KtG(r.dragoverListener(o))})("drop",function(o){e.CHM(t);const r=e.oxw(2);return e.KtG(r.dropListener(o))}),e.qZA()}}const pe=function(a){return["app/repository",a]},ge=function(a){return[a]};function _e(a,i){if(1&a){const t=e.EpF();e.ynx(0),e.TgZ(1,"app-tree",3),e.NdJ("treeChange",function(o){e.CHM(t);const r=e.oxw();return e.KtG(r.treeChanged(o))}),e.YNc(2,se,10,5,"div",4),e.YNc(3,ce,6,5,"div",5),e.qZA(),e.YNc(4,le,1,0,"div",6),e.BQk()}if(2&a){const t=i.ngIf,n=e.oxw();e.xp6(1),e.Q6J("tree",t)("dragListeners",e.VKq(5,ge,e.VKq(3,pe,n.addNode))),e.xp6(3),e.Q6J("ngIf",0===t.length)}}function me(a,i){if(1&a&&(e.TgZ(0,"div",16),e._uU(1),e.qZA(),e.TgZ(2,"form",17)(3,"mat-dialog-content")(4,"mat-form-field",18)(5,"mat-label"),e._uU(6),e.ALo(7,"translate"),e.qZA(),e._UZ(8,"input",19),e.qZA()(),e.TgZ(9,"mat-dialog-actions")(10,"button",20),e._uU(11),e.ALo(12,"translate"),e.qZA(),e.TgZ(13,"button",21),e._uU(14),e.ALo(15,"translate"),e.qZA()()()),2&a){const t=e.oxw();e.xp6(1),e.Oqu(t.dialogTitle),e.xp6(1),e.Q6J("formGroup",t.dialogForm),e.xp6(4),e.Oqu(e.lcZ(7,8,"Name")),e.xp6(4),e.Q6J("mat-dialog-close",null),e.xp6(1),e.Oqu(e.lcZ(12,10,"Cancel")),e.xp6(2),e.Q6J("mat-dialog-close",t.dialogForm.controls.name.value)("disabled",t.dialogForm.invalid),e.xp6(1),e.Oqu(e.lcZ(15,12,"Save"))}}const H=a=>!!a.children;let he=(()=>{class a extends((0,D.j)(U.A)){constructor(t,n){super(),this.dialog=t,this.store=n,this.selectedNodeId=null,this.nodeClick=new e.vpe,this.tree=this.repositoryBookmarks.pipe((0,c.U)(o=>o.map(r=>this.convertBookmarkToNode(r,"")))),this.dialogTitle="New Folder",this.dialogForm=new p.cw({name:new p.NI(null)}),this.dialogRef=null,this.addNode=(o,r,d,m)=>{(0,O.D)([this.repositoryNames.pipe((0,l.q)(1)),this.repositoryBookmarks.pipe((0,l.q)(1))]).subscribe(([T,B])=>{const L={name:T[o]??"",repositoryId:o},Q=this.replaceBookmark(B,r,"",Z=>{if("above"===d)return[L,Z];if("below"===d)return[Z,L];if(m||!this.isBookmarkFolder(Z))throw new u.kI;return[{...Z,expanded:!0,children:[...Z.children,L]}]});if(!Q)throw new u.bv(r);this.store.dispatch(new M.c9(Q))})},this.dragoverListener=o=>{o.dataTransfer?.types.includes("app/repository")&&(o.preventDefault(),o.dataTransfer.dropEffect="move")},this.dropListener=o=>{if(o.dataTransfer?.types.includes("app/repository")){o.preventDefault();const r=o.dataTransfer.getData("app/repository");(0,O.D)([this.repositoryNames.pipe((0,l.q)(1)),this.repositoryBookmarks.pipe((0,l.q)(1))]).subscribe(([d,m])=>{this.store.dispatch(new M.c9([{name:d[r]??"",repositoryId:r}]))})}},this.convertBookmarkToNode=(o,r)=>this.isBookmarkFolder(o)?{id:`folder:${this.getPath(o,r)}`,name:o.name,children:o.children.map(d=>this.convertBookmarkToNode(d,this.getPath(o,r))),expanded:o.expanded}:{id:o.repositoryId,name:o.name},this.convertNodeToBookmark=o=>H(o)?{name:o.name,expanded:o.expanded??!1,children:o.children.map(this.convertNodeToBookmark)}:{name:o.name,repositoryId:o.id}}ngOnDestroy(){super.ngOnDestroy(),this.dialogRef&&this.dialogRef.close()}treeChanged(t){this.store.dispatch(new M.c9(t.map(this.convertNodeToBookmark)))}toggleMenu(t,n){t.stopPropagation();const o=t.currentTarget.getBoundingClientRect();n.toggleMenu(o.x,o.y+o.height)}addFolder(t){this.dialogRef&&this.dialogRef.close(),this.dialogTitle=(0,J.Iu)("New !bookmark! Folder"),this.dialogForm.reset(),this.dialogRef=this.dialog.open(this.dialogTemplate),this.dialogRef.afterClosed().pipe((0,F.R)(this.destroyed$)).subscribe(n=>{n&&this.repositoryBookmarks.pipe((0,l.q)(1)).subscribe(o=>{const r={name:n,children:[],expanded:!1},d=t?this.replaceBookmark(o,t,"",m=>{if(!this.isBookmarkFolder(m))throw new u.kI;return[{...m,children:[...m.children,r]}]}):[...o,r];if(!d)throw new u.bv(t??"");this.store.dispatch(new M.c9(d))})})}deleteNode(t){this.repositoryBookmarks.pipe((0,l.q)(1)).subscribe(n=>{const o=this.replaceBookmark(n,t.id,"",()=>[]);if(!o)throw new u.bv(t.id);this.store.dispatch(new M.c9(o))})}renameFolder(t){if(!H(t))throw new u.pv(t.id);this.dialogTitle=(0,J.Iu)("Rename !bookmark! Folder"),this.dialogForm.reset({name:t.name}),this.dialog.open(this.dialogTemplate).afterClosed().pipe((0,F.R)(this.destroyed$)).subscribe(n=>{n&&this.repositoryBookmarks.pipe((0,l.q)(1)).subscribe(o=>{const r=this.replaceBookmark(o,t.id,"",d=>[{...d,name:n}]);if(!r)throw new u.bv(t.id);this.store.dispatch(new M.c9(r))})})}isBookmarkFolder(t){return!!t.children}replaceBookmark(t,n,o,r){for(let d=0;d<t.length;d++){const m=t[d];if(n===(this.isBookmarkFolder(m)?`folder:${this.getPath(m,o)}`:m.repositoryId))return[...t.slice(0,d),...r(m),...t.slice(d+1)];if(this.isBookmarkFolder(m)){const T=this.replaceBookmark(m.children,n,this.getPath(m,o),r);if(T)return[...t.slice(0,d),{...m,children:T},...t.slice(d+1)]}}return null}getPath(t,n){return n?`${n}///${t.name.replace("/","//")}`:t.name.replace("/","//")}static{this.\u0275fac=function(n){return new(n||a)(e.Y36(y.uw),e.Y36(f.yh))}}static{this.\u0275cmp=e.Xpm({type:a,selectors:[["app-repository-bookmarks-view"]],viewQuery:function(n,o){if(1&n&&e.Gf(re,5),2&n){let r;e.iGM(r=e.CRH())&&(o.dialogTemplate=r.first)}},inputs:{selectedNodeId:"selectedNodeId"},outputs:{nodeClick:"nodeClick"},features:[e.qOj],decls:8,vars:6,consts:[[4,"ngIf"],["type","button","mat-stroked-button","",1,"add-folder-button",3,"matTooltip","click"],["dialogTemplate",""],[3,"tree","dragListeners","treeChange"],["class","bookmark-node",3,"appContextMenu","selected","click",4,"appTreeNode"],["class","bookmark-node",3,"appContextMenu","selected","matTooltip","click",4,"appTreeLeafNode"],["class","first-drag-zone","draggable","true",3,"dragover","drop",4,"ngIf"],[1,"bookmark-node",3,"appContextMenu","click"],["contextMenu","appContextMenu"],[1,"folder-icon"],["type","button","mat-icon-button","",1,"expand-button","app-icon-button-md"],["menu",""],[1,"menu-panel"],[1,"menu-item",3,"click"],[1,"bookmark-node",3,"appContextMenu","matTooltip","click"],["draggable","true",1,"first-drag-zone",3,"dragover","drop"],["mat-dialog-title",""],[3,"formGroup"],["subscriptSizing","dynamic",1,"full-width"],["type","text","matInput","","required","","formControlName","name"],["mat-button","",3,"mat-dialog-close"],["mat-flat-button","","type","submit","color","primary",3,"mat-dialog-close","disabled"]],template:function(n,o){1&n&&(e.YNc(0,_e,5,7,"ng-container",0),e.ALo(1,"async"),e.TgZ(2,"button",1),e.NdJ("click",function(){return o.addFolder()}),e.ALo(3,"translate"),e.TgZ(4,"mat-icon"),e._uU(5,"create_new_folder"),e.qZA()(),e.YNc(6,me,16,14,"ng-template",null,2,e.W1O)),2&n&&(e.Q6J("ngIf",e.lcZ(1,2,o.tree)),e.xp6(2),e.Q6J("matTooltip",e.lcZ(3,4,"Add !bookmark! folder")))},dependencies:[y.ZT,y.uh,y.xY,y.H8,_.KE,_.hX,C.Nt,h.O5,p._Y,p.Fj,p.JJ,p.JL,p.Q7,p.sg,p.u,b.lW,b.RK,P.Hw,K.gM,W.l,A,E,N,h.Ov,oe.X],styles:["app-tree[_ngcontent-%COMP%]{display:block;margin-left:-8px}app-tree[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{vertical-align:middle}app-tree[_ngcontent-%COMP%]   .bookmark-node[_ngcontent-%COMP%]{cursor:pointer;display:flex;align-items:center;justify-content:space-between;padding-left:10px}app-tree[_ngcontent-%COMP%]   .bookmark-node[_ngcontent-%COMP%]   .folder-icon[_ngcontent-%COMP%]{margin-right:5px}app-tree[_ngcontent-%COMP%]     app-tree-leaf-node .bookmark-node{padding-top:5px;padding-bottom:5px}.first-drag-zone[_ngcontent-%COMP%]{height:50px}.full-width[_ngcontent-%COMP%]{width:100%}.add-folder-button[_ngcontent-%COMP%]{margin-top:10px}.dark-theme[_nghost-%COMP%]   app-tree[_ngcontent-%COMP%]     app-tree-leaf-node:has(> .bookmark-node.selected):not(.drag-above), .dark-theme   [_nghost-%COMP%]   app-tree[_ngcontent-%COMP%]     app-tree-leaf-node:has(> .bookmark-node.selected):not(.drag-above){border-top-color:#78909c}.dark-theme[_nghost-%COMP%]   app-tree[_ngcontent-%COMP%]     app-tree-leaf-node:has(> .bookmark-node.selected):not(.drag-below), .dark-theme   [_nghost-%COMP%]   app-tree[_ngcontent-%COMP%]     app-tree-leaf-node:has(> .bookmark-node.selected):not(.drag-below){border-bottom-color:#78909c}.dark-theme[_nghost-%COMP%]   app-tree[_ngcontent-%COMP%]   .bookmark-node.selected[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   app-tree[_ngcontent-%COMP%]   .bookmark-node.selected[_ngcontent-%COMP%]{background:#78909c}.light-theme[_nghost-%COMP%]   app-tree[_ngcontent-%COMP%]     app-tree-leaf-node:has(> .bookmark-node.selected):not(.drag-above), .light-theme   [_nghost-%COMP%]   app-tree[_ngcontent-%COMP%]     app-tree-leaf-node:has(> .bookmark-node.selected):not(.drag-above){border-top-color:#cfd8dc}.light-theme[_nghost-%COMP%]   app-tree[_ngcontent-%COMP%]     app-tree-leaf-node:has(> .bookmark-node.selected):not(.drag-below), .light-theme   [_nghost-%COMP%]   app-tree[_ngcontent-%COMP%]     app-tree-leaf-node:has(> .bookmark-node.selected):not(.drag-below){border-bottom-color:#cfd8dc}.light-theme[_nghost-%COMP%]   app-tree[_ngcontent-%COMP%]   .bookmark-node.selected[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   app-tree[_ngcontent-%COMP%]   .bookmark-node.selected[_ngcontent-%COMP%]{background:#cfd8dc}"],changeDetection:0})}}return(0,g.gn)([(0,f.Ph)(v.E.repositoryBookmarks)],a.prototype,"repositoryBookmarks",void 0),(0,g.gn)([(0,f.Ph)(v.E.repositoryNames)],a.prototype,"repositoryNames",void 0),a})()},6093:(I,k,s)=>{s.d(k,{i:()=>l});var g=s(5412),e=s(9549),p=s(284),f=s(8255),O=s(3179),c=s(4650);class l{static{this.\u0275fac=function(D){return new(D||l)}}static{this.\u0275mod=c.oAB({type:l})}static{this.\u0275inj=c.cJS({imports:[g.Is,e.lN,p.c,f.Tx,O.I]})}}},5174:(I,k,s)=>{s.d(k,{J:()=>M});var g=s(655),e=s(4650),p=s(9867),f=s(9646),O=s(4889),c=s(6966),l=s(6895),F=s(4859),u=s(7392),D=s(266),U=s(4442);function J(v,y){if(1&v){const _=e.EpF();e.TgZ(0,"li",1),e.NdJ("click",function(){const b=e.CHM(_).$implicit,P=e.oxw();return e.KtG(P.clicked.next(b.repositoryId))})("dblclick",function(){const b=e.CHM(_).$implicit,P=e.oxw();return e.KtG(P.openRepository(b.repositoryId))})("dragstart",function(h){const P=e.CHM(_).$implicit,K=e.oxw();return e.KtG(K.dragStarted.next([h,P.repositoryId]))}),e.ALo(1,"async"),e._uU(2),e.TgZ(3,"button",2),e.NdJ("click",function(h){const P=e.CHM(_).$implicit;return e.oxw().deleteRepository(P.repositoryId),h.preventDefault(),e.KtG(h.stopPropagation())}),e.ALo(4,"translate"),e.TgZ(5,"mat-icon",3),e._uU(6,"close"),e.qZA()()()}if(2&v){const _=y.$implicit,C=e.oxw();e.ekj("selected",_.repositoryId===e.lcZ(1,6,C.selectedId)),e.Q6J("matTooltip",_.repositoryId),e.uIk("draggable",C.draggable?"true":"false"),e.xp6(2),e.hij(" ",_.name," "),e.xp6(1),e.Q6J("matTooltip",e.lcZ(4,8,"Remove repository (all settings saved in Glint will be removed)"))}}let M=(()=>{class v{constructor(_){this.store=_,this.draggable=!0,this.selectedId=(0,f.of)(null),this.clicked=new e.vpe,this.dragStarted=new e.vpe}openRepository(_){this.store.dispatch(new O.he(_))}deleteRepository(_){this.store.dispatch(new O.eo(_))}static{this.\u0275fac=function(C){return new(C||v)(e.Y36(p.yh))}}static{this.\u0275cmp=e.Xpm({type:v,selectors:[["app-repository-history-view"]],inputs:{draggable:"draggable",selectedId:"selectedId"},outputs:{clicked:"clicked",dragStarted:"dragStarted"},decls:3,vars:3,consts:[[3,"matTooltip","selected","click","dblclick","dragstart",4,"ngFor","ngForOf"],[3,"matTooltip","click","dblclick","dragstart"],["mat-icon-button","","color","warn",1,"close-icon",3,"matTooltip","click"],["inline",""]],template:function(C,h){1&C&&(e.TgZ(0,"ul"),e.YNc(1,J,7,10,"li",0),e.ALo(2,"async"),e.qZA()),2&C&&(e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,h.recentRepositories)))},dependencies:[l.sg,F.RK,u.Hw,D.gM,l.Ov,U.X],styles:["ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{padding:10px;cursor:pointer}ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{float:right;width:20px;height:20px;padding:0;font-size:18px;opacity:0;transition:opacity .1s ease-in-out}ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{line-height:20px}ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:hover   .close-icon[_ngcontent-%COMP%]{opacity:1}.dark-theme[_nghost-%COMP%]   ul[_ngcontent-%COMP%] > li.selected[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   ul[_ngcontent-%COMP%] > li.selected[_ngcontent-%COMP%]{background:#78909c}.light-theme[_nghost-%COMP%]   ul[_ngcontent-%COMP%] > li.selected[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   ul[_ngcontent-%COMP%] > li.selected[_ngcontent-%COMP%]{background:#cfd8dc}"],changeDetection:0})}}return(0,g.gn)([(0,p.Ph)(c.E.recentRepositories)],v.prototype,"recentRepositories",void 0),v})()},3612:(I,k,s)=>{s.d(k,{e:()=>p});var g=s(3179),e=s(4650);class p{static{this.\u0275fac=function(c){return new(c||p)}}static{this.\u0275mod=e.oAB({type:p})}static{this.\u0275inj=e.cJS({imports:[g.I]})}}}}]);