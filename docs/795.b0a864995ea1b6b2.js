"use strict";(self.webpackChunkgit_glint=self.webpackChunkgit_glint||[]).push([[795],{3178:(N,x,a)=>{a.d(x,{l:()=>O});var f=a(4080),e=a(2986),p=a(7625),u=a(9967),_=a(4810),T=a(8310),l=a(4650),v=a(3431);let O=(()=>{class y extends((0,_.j)(u.A)){constructor(C,m){super(),this.overlay=C,this.viewContainerRef=m,this.overlayRef=null,this.closeMenu=()=>{this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)},this.openMenu=(M,c)=>{this.closeMenu(),this.overlayRef=this.overlay.create({positionStrategy:this.overlay.position().flexibleConnectedTo({x:M,y:c}).withPositions([{originX:"end",originY:"bottom",overlayX:"start",overlayY:"top"}])}),this.overlayRef.attach(new f.UE(this.menuTemplate,this.viewContainerRef,{data:this.data})),(0,T.t)(this.overlayRef).pipe((0,e.q)(1),(0,p.R)(this.destroyed$)).subscribe(this.closeMenu)},this.toggleMenu=(M,c)=>{this.overlayRef?this.closeMenu():this.openMenu(M,c)}}contextmenuListener(C){C.preventDefault(),C.stopPropagation(),this.openMenu(C.x,C.y)}ngOnDestroy(){super.ngOnDestroy(),this.closeMenu()}}return y.\u0275fac=function(C){return new(C||y)(l.Y36(v.aV),l.Y36(l.s_b))},y.\u0275dir=l.lG2({type:y,selectors:[["","appContextMenu",""]],hostBindings:function(C,m){1&C&&l.NdJ("contextmenu",function(c){return m.contextmenuListener(c)})},inputs:{menuTemplate:["appContextMenu","menuTemplate"],data:["appContextMenuData","data"]},exportAs:["appContextMenu"],features:[l.qOj]}),y})()},8310:(N,x,a)=>{a.d(x,{t:()=>u});var f=a(6787),e=a(3753),p=a(2198);const u=(_,T=!0)=>(0,f.T)(_.backdropClick(),_.outsidePointerEvents().pipe((0,p.h)(l=>"auxclick"!==l.type)),...T?[(0,e.R)(_.overlayElement,"click")]:[])},6271:(N,x,a)=>{a.d(x,{k:()=>u});var f=a(3779),e=a(4650),p=a(468);let u=(()=>{class _{constructor(l){this.baseApi=l}getRelativePath(l,v){return this.baseApi.single(f.w.files.getRelativePath,l,v)}getFileContents(l){return this.baseApi.single(f.w.files.getFileContents,l)}openFileDialog(){return this.baseApi.single(f.w.files.openFileDialog)}openFolderDialog(l){return this.baseApi.single(f.w.files.openFolderDialog,l)}}return _.\u0275fac=function(l){return new(l||_)(e.LFG(p._))},_.\u0275prov=e.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},9251:(N,x,a)=>{a.d(x,{j:()=>_e,b:()=>Z});var f=a(655),e=a(4650),p=a(4006),u=a(9253),_=a(567),T=a(4850),l=a(2986),v=a(7625),O=a(4810),y=a(9967),P=a(4889),C=a(6197),m=a(5412),M=a(9549),c=a(4144),h=a(6895),E=a(4859),L=a(7392),D=a(266),A=a(3178);let F=(()=>{class r{constructor(n){this.template=n}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(e.Rgc))},r.\u0275dir=e.lG2({type:r,selectors:[["","appTreeLeafNode",""]]}),r})(),U=(()=>{class r{constructor(n){this.template=n}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(e.Rgc))},r.\u0275dir=e.lG2({type:r,selectors:[["","appTreeNode",""]]}),r})();var k=a(7340);function J(r,d){1&r&&e.GkF(0)}const V=function(r){return{$implicit:r}};let K=(()=>{class r{constructor(n){this.element=n,this.dragListeners=[],this.attrDraggable=!0,this.dragstartListener=t=>{t.dataTransfer&&(t.dataTransfer.setData("app/tree",this.node.id),t.dataTransfer.effectAllowed="move")},this.dragenterListener=t=>{this.dragoverPosition=this.getDragoverPosition(t.offsetY)},this.dragleaveListener=t=>{this.dragoverPosition="none"},this.dragoverListener=t=>{if(t.dataTransfer){const o=t.dataTransfer;["app/tree",...this.dragListeners.map(([s])=>s)].some(s=>o.types.includes(s)&&o.getData(s)!==this.node.id)&&(t.preventDefault(),t.dataTransfer.dropEffect="move",this.dragoverPosition=this.getDragoverPosition(t.offsetY))}},this.dropListener=t=>{if(t.dataTransfer){const o=t.dataTransfer,i=this.getDragoverPosition(t.offsetY);if(o.types.includes("app/tree")){const s=o.getData("app/tree");this.isDescendant(s,this.node.id)||(t.preventDefault(),this.update(s,this.node.id,i))}this.dragListeners.forEach(([s,g])=>{o.types.includes(s)&&(t.preventDefault(),g(o.getData(s),this.node.id,i,!0))})}this.dragoverPosition="none"},this.dragoverPosition="none",this.getDragoverPosition=t=>t/this.element.nativeElement.clientHeight<.5?"above":"below"}get classDragAbove(){return"above"===this.dragoverPosition}get classDragBelow(){return"below"===this.dragoverPosition}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(e.SBq))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-tree-leaf-node"]],hostVars:5,hostBindings:function(n,t){1&n&&e.NdJ("dragstart",function(i){return t.dragstartListener(i)})("dragenter",function(i){return t.dragenterListener(i)})("dragleave",function(i){return t.dragleaveListener(i)})("dragover",function(i){return t.dragoverListener(i)})("drop",function(i){return t.dropListener(i)}),2&n&&(e.uIk("draggable",t.attrDraggable),e.ekj("drag-above",t.classDragAbove)("drag-below",t.classDragBelow))},inputs:{node:"node",update:"update",isDescendant:"isDescendant",template:"template",dragListeners:"dragListeners"},decls:1,vars:4,consts:[[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,t){1&n&&e.YNc(0,J,1,0,"ng-container",0),2&n&&e.Q6J("ngTemplateOutlet",t.template)("ngTemplateOutletContext",e.VKq(2,V,t.node))},dependencies:[h.tP],styles:["[_nghost-%COMP%]{display:block;border-top:5px solid transparent;border-bottom:5px solid transparent}.drag-above[_nghost-%COMP%]{border-top-color:#3c3c3c}.drag-below[_nghost-%COMP%]{border-bottom-color:#3c3c3c}"],changeDetection:0}),r})();function W(r,d){1&r&&e.GkF(0)}function $(r,d){if(1&r&&e._UZ(0,"app-tree-node",7),2&r){const n=e.oxw().$implicit,t=e.oxw(2);e.Q6J("node",n)("update",t.update)("updateExpanded",t.updateExpanded)("isDescendant",t.isDescendant)("templates",t.templates)("dragListeners",t.dragListeners)}}function Y(r,d){if(1&r&&e._UZ(0,"app-tree-leaf-node",8),2&r){const n=e.oxw().$implicit,t=e.oxw(2);e.Q6J("node",n)("update",t.update)("isDescendant",t.isDescendant)("template",t.templates.leafNode)("dragListeners",t.dragListeners)}}function Q(r,d){if(1&r&&(e.ynx(0),e.YNc(1,$,1,6,"app-tree-node",5),e.YNc(2,Y,1,5,"app-tree-leaf-node",6),e.BQk()),2&r){const n=d.$implicit,t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.isNode(n)),e.xp6(1),e.Q6J("ngIf",t.isLeaf(n))}}function S(r,d){if(1&r&&(e.TgZ(0,"div",3),e.YNc(1,Q,3,2,"ng-container",4),e.qZA()),2&r){const n=e.oxw();e.Q6J("@.disabled",n.animationsDisabled)("@slide",void 0),e.xp6(1),e.Q6J("ngForOf",n.node.children)("ngForTrackBy",n.trackById)}}const j=function(r){return{$implicit:r}};let G=(()=>{class r{constructor(n){this.element=n,this.dragListeners=[],this.animationsDisabled=!0,this.dragoverPosition="none",this.dragoverStarted=null,this.dragstartListener=t=>{t.dataTransfer&&(t.dataTransfer.setData("app/tree",this.node.id),t.dataTransfer.effectAllowed="move")},this.dragenterListener=t=>{this.dragoverPosition=this.getDragoverPosition(t.offsetY),this.dragoverStarted=(new Date).getTime()},this.dragleaveListener=t=>{this.dragoverPosition="none",this.dragoverStarted=null},this.dragoverListener=t=>{if(t.dataTransfer){const o=t.dataTransfer;if(["app/tree",...this.dragListeners.map(([s])=>s)].some(s=>o.types.includes(s)&&o.getData(s)!==this.node.id)&&(t.preventDefault(),t.dataTransfer.dropEffect="move",this.dragoverPosition=this.getDragoverPosition(t.offsetY),!this.node.expanded))if("center"===this.dragoverPosition){const s=(new Date).getTime();null===this.dragoverStarted?this.dragoverStarted=s:s-this.dragoverStarted>r.expandWaitPeriod&&(this.node.expanded=!0)}else this.dragoverStarted=null}},this.dropListener=t=>{if(t.dataTransfer){const o=t.dataTransfer,i=this.getDragoverPosition(t.offsetY);if(o.types.includes("app/tree")){const s=o.getData("app/tree");this.isDescendant(s,this.node.id)||(t.preventDefault(),this.update(s,this.node.id,i))}this.dragListeners.forEach(([s,g])=>{o.types.includes(s)&&(t.preventDefault(),g(o.getData(s),this.node.id,i,!1))})}this.dragoverPosition="none",this.dragoverStarted=null},this.clickListener=t=>{t.preventDefault(),this.node.expanded=!this.node.expanded,this.updateExpanded(this.node.id,this.node.expanded)},this.isLeaf=t=>!t.children,this.isNode=t=>!!t.children,this.getDragoverPosition=t=>t<0?"above":t<this.element.nativeElement.clientHeight-2*r.padding?"center":"below"}ngAfterViewInit(){this.animationsDisabled=!1}trackById(n,t){return t.id}}return r.padding=5,r.expandWaitPeriod=750,r.\u0275fac=function(n){return new(n||r)(e.Y36(e.SBq))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-tree-node"]],inputs:{node:"node",update:"update",updateExpanded:"updateExpanded",isDescendant:"isDescendant",templates:"templates",dragListeners:"dragListeners"},decls:3,vars:11,consts:[["draggable","true",1,"tree-node-heading",3,"dragstart","dragenter","dragleave","dragover","drop","click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","tree-node-children",4,"ngIf"],[1,"tree-node-children"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"node","update","updateExpanded","isDescendant","templates","dragListeners",4,"ngIf"],[3,"node","update","isDescendant","template","dragListeners",4,"ngIf"],[3,"node","update","updateExpanded","isDescendant","templates","dragListeners"],[3,"node","update","isDescendant","template","dragListeners"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e.NdJ("dragstart",function(i){return t.dragstartListener(i)})("dragenter",function(i){return t.dragenterListener(i)})("dragleave",function(i){return t.dragleaveListener(i)})("dragover",function(i){return t.dragoverListener(i)})("drop",function(i){return t.dropListener(i)})("click",function(i){return t.clickListener(i)}),e.YNc(1,W,1,0,"ng-container",1),e.qZA(),e.YNc(2,S,2,4,"div",2)),2&n&&(e.ekj("drag-above","above"===t.dragoverPosition)("drag-below","below"===t.dragoverPosition)("drag-center","center"===t.dragoverPosition),e.xp6(1),e.Q6J("ngTemplateOutlet",t.templates.node)("ngTemplateOutletContext",e.VKq(9,j,t.node)),e.xp6(1),e.Q6J("ngIf",t.node.expanded))},dependencies:[h.sg,h.O5,h.tP,r,K],styles:["[_nghost-%COMP%]{display:block}.tree-node-heading[_ngcontent-%COMP%]{cursor:pointer;border-top:5px solid transparent;border-bottom:5px solid transparent}.tree-node-heading.drag-above[_ngcontent-%COMP%]{border-top-color:#3c3c3c}.tree-node-heading.drag-below[_ngcontent-%COMP%]{border-bottom-color:#3c3c3c}.tree-node-heading.drag-center[_ngcontent-%COMP%]{background-color:#3c3c3c}.tree-node-children[_ngcontent-%COMP%]{margin-left:20px;overflow:hidden}"],data:{animation:[(0,k.X$)("slide",[(0,k.eR)(":enter",[(0,k.oB)({height:0}),(0,k.jt)("225ms ease-in-out",(0,k.oB)({height:"*"}))]),(0,k.eR)(":leave",[(0,k.oB)({height:"*"}),(0,k.jt)("225ms ease-in-out",(0,k.oB)({height:0}))])])]},changeDetection:0}),r})();function X(r,d){if(1&r&&e._UZ(0,"app-tree-node",3),2&r){const n=e.oxw().$implicit,t=e.oxw();e.Q6J("node",n)("update",t.update)("updateExpanded",t.updateExpanded)("isDescendant",t.isDescendant)("templates",t.templates)("dragListeners",t.dragListeners)}}function z(r,d){if(1&r&&e._UZ(0,"app-tree-leaf-node",4),2&r){const n=e.oxw().$implicit,t=e.oxw();e.Q6J("node",n)("update",t.update)("isDescendant",t.isDescendant)("template",t.templates.leafNode)("dragListeners",t.dragListeners)}}function q(r,d){if(1&r&&(e.ynx(0),e.YNc(1,X,1,6,"app-tree-node",1),e.YNc(2,z,1,5,"app-tree-leaf-node",2),e.BQk()),2&r){const n=d.$implicit,t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.isNode(n)),e.xp6(1),e.Q6J("ngIf",t.isLeaf(n))}}let ee=(()=>{class r extends((0,O.j)(y.A)){constructor(){super(...arguments),this.indent=20,this.indentUnits="px",this.dragListeners=[],this.outputTree=new e.vpe,this.isDescendant=(n,t)=>{if(n===t)return!0;const o=this.getNodeById(n,this.tree);if(!o)throw new Error(`Couldn't find node with id '${n}'.`);return null!==this.getNodeById(t,o.children)},this.update=(n,t,o)=>{const i=this.removeNode(n,this.tree);if(!i)throw new Error(`Could not remove node '${n}'.`);const[s,g]=i,w=this.findSiblingNodesWithIndex(t,g);if(!w)throw new Error(`Cannot find target node '${t}'.`);const[R,B]=w;switch(o){case"above":R.splice(B,0,s);break;case"below":R.splice(B+1,0,s);break;case"center":const I=R[B].children;if(!I)throw new Error("Cannot add a node inside of a leaf node.");I.push(s),R[B].expanded=!0;break;default:throw new Error(`Position type not recognized '${o}'. Should be one of 'above', 'below', 'center'.`)}this.tree=g,this.outputTree.next(g)},this.updateExpanded=(n,t)=>{const o=this.updateNodeExpanded(n,t,this.tree);if(!o)throw new Error(`Could not update node '${n}'.`);this.tree=o,this.outputTree.next(o)},this.isLeaf=n=>!n.children,this.isNode=n=>!!n.children}get templates(){return{node:this.nodeDirective.template,leafNode:this.leafNodeDirective.template}}trackById(n,t){return t.id}getNodeById(n,t){if(t)for(const o of t){if(o.id===n)return o;const i=this.getNodeById(n,o.children);if(i)return i}return null}findSiblingNodesWithIndex(n,t){if(t)for(let o=0;o<t.length;o++){if(t[o].id===n)return[t,o];const i=this.findSiblingNodesWithIndex(n,t[o].children);if(i)return i}return null}removeNode(n,t){if(t)for(let o=0;o<t.length;o++){if(t[o].id===n)return[t[o],[...t.slice(0,o),...t.slice(o+1)]];const i=this.removeNode(n,t[o].children);if(i)return[i[0],[...t.slice(0,o),{...t[o],children:i[1]},...t.slice(o+1)]]}return null}updateNodeExpanded(n,t,o){if(o)for(let i=0;i<o.length;i++){if(o[i].id===n)return[...o.slice(0,i),{...o[i],expanded:t},...o.slice(i+1)];const s=this.updateNodeExpanded(n,t,o[i].children);if(s)return[...o.slice(0,i),{...o[i],children:s},...o.slice(i+1)]}return null}}return r.\u0275fac=function(){let d;return function(t){return(d||(d=e.n5z(r)))(t||r)}}(),r.\u0275cmp=e.Xpm({type:r,selectors:[["app-tree"]],contentQueries:function(n,t,o){if(1&n&&(e.Suo(o,U,5),e.Suo(o,F,5)),2&n){let i;e.iGM(i=e.CRH())&&(t.nodeDirective=i.first),e.iGM(i=e.CRH())&&(t.leafNodeDirective=i.first)}},inputs:{tree:"tree",indent:"indent",indentUnits:"indentUnits",dragListeners:"dragListeners"},outputs:{outputTree:"treeChange"},features:[e.qOj],decls:1,vars:2,consts:[[4,"ngFor","ngForOf","ngForTrackBy"],[3,"node","update","updateExpanded","isDescendant","templates","dragListeners",4,"ngIf"],[3,"node","update","isDescendant","template","dragListeners",4,"ngIf"],[3,"node","update","updateExpanded","isDescendant","templates","dragListeners"],[3,"node","update","isDescendant","template","dragListeners"]],template:function(n,t){1&n&&e.YNc(0,q,3,2,"ng-container",0),2&n&&e.Q6J("ngForOf",t.tree)("ngForTrackBy",t.trackById)},dependencies:[h.sg,h.O5,G,K],encapsulation:2,changeDetection:0}),r})();const te=["dialogTemplate"];function ne(r,d){if(1&r&&(e.TgZ(0,"mat-icon"),e._uU(1),e.qZA()),2&r){const n=e.oxw().$implicit;e.xp6(1),e.Oqu(n.expanded?"expand_more":"chevron_right")}}function oe(r,d){if(1&r){const n=e.EpF();e.TgZ(0,"div",11)(1,"button",12),e.NdJ("click",function(){e.CHM(n);const o=e.oxw().$implicit,i=e.oxw(2);return e.KtG(i.addFolder(o.id))}),e.TgZ(2,"mat-icon"),e._uU(3,"create_new_folder"),e.qZA(),e.TgZ(4,"span"),e._uU(5,"New folder"),e.qZA()(),e.TgZ(6,"button",12),e.NdJ("click",function(){e.CHM(n);const o=e.oxw().$implicit,i=e.oxw(2);return e.KtG(i.renameFolder(o))}),e.TgZ(7,"mat-icon"),e._uU(8,"edit"),e.qZA(),e.TgZ(9,"span"),e._uU(10,"Rename"),e.qZA()(),e.TgZ(11,"button",12),e.NdJ("click",function(){e.CHM(n);const o=e.oxw().$implicit,i=e.oxw(2);return e.KtG(i.deleteNode(o))}),e.TgZ(12,"mat-icon"),e._uU(13,"delete"),e.qZA(),e.TgZ(14,"span"),e._uU(15,"Delete"),e.qZA()()()}}function re(r,d){if(1&r){const n=e.EpF();e.TgZ(0,"div",7,8),e.NdJ("click",function(){const i=e.CHM(n).$implicit,s=e.oxw(2);return e.KtG(s.nodeClick.next(i))}),e.TgZ(2,"button",9),e.YNc(3,ne,2,1,"mat-icon",0),e.qZA(),e.TgZ(4,"mat-icon"),e._uU(5,"folder"),e.qZA(),e._uU(6),e.YNc(7,oe,16,0,"ng-template",null,10,e.W1O),e.qZA()}if(2&r){const n=d.$implicit,t=e.MAs(8),o=e.oxw(2);e.ekj("selected",o.selectedNodeId===n.id),e.Q6J("appContextMenu",t),e.xp6(3),e.Q6J("ngIf",n.children.length>0),e.xp6(3),e.hij(" ",n.name," ")}}function ie(r,d){if(1&r){const n=e.EpF();e.TgZ(0,"div",11)(1,"button",12),e.NdJ("click",function(){e.CHM(n);const o=e.oxw().$implicit,i=e.oxw(2);return e.KtG(i.deleteNode(o))}),e.TgZ(2,"mat-icon"),e._uU(3,"delete"),e.qZA(),e.TgZ(4,"span"),e._uU(5,"Delete"),e.qZA()()()}}function ae(r,d){if(1&r){const n=e.EpF();e.TgZ(0,"div",13,8),e.NdJ("click",function(){const i=e.CHM(n).$implicit,s=e.oxw(2);return e.KtG(s.nodeClick.next(i))}),e._UZ(2,"button",14),e._uU(3),e.YNc(4,ie,6,0,"ng-template",null,10,e.W1O),e.qZA()}if(2&r){const n=d.$implicit,t=e.MAs(5),o=e.oxw(2);e.ekj("selected",o.selectedNodeId===n.id),e.Q6J("appContextMenu",t)("matTooltip",n.id),e.xp6(3),e.hij(" ",n.name," ")}}function se(r,d){if(1&r){const n=e.EpF();e.TgZ(0,"div",15),e.NdJ("dragover",function(o){e.CHM(n);const i=e.oxw(2);return e.KtG(i.dragoverListener(o))})("drop",function(o){e.CHM(n);const i=e.oxw(2);return e.KtG(i.dropListener(o))}),e.qZA()}}const de=function(r){return["app/repository",r]},le=function(r){return[r]};function ce(r,d){if(1&r){const n=e.EpF();e.ynx(0),e.TgZ(1,"app-tree",3),e.NdJ("treeChange",function(o){e.CHM(n);const i=e.oxw();return e.KtG(i.treeChanged(o))}),e.YNc(2,re,9,5,"div",4),e.YNc(3,ae,6,5,"div",5),e.qZA(),e.YNc(4,se,1,0,"div",6),e.BQk()}if(2&r){const n=d.ngIf,t=e.oxw();e.xp6(1),e.Q6J("tree",n)("dragListeners",e.VKq(5,le,e.VKq(3,de,t.addNode))),e.xp6(3),e.Q6J("ngIf",0===n.length)}}function pe(r,d){if(1&r&&(e.TgZ(0,"h2",16),e._uU(1),e.qZA(),e.TgZ(2,"form",17)(3,"mat-dialog-content")(4,"mat-form-field",18)(5,"mat-label"),e._uU(6,"Name"),e.qZA(),e._UZ(7,"input",19),e.qZA()(),e.TgZ(8,"mat-dialog-actions")(9,"button",20),e._uU(10,"Cancel"),e.qZA(),e.TgZ(11,"button",21),e._uU(12,"Save"),e.qZA()()()),2&r){const n=e.oxw();e.xp6(1),e.Oqu(n.dialogTitle),e.xp6(1),e.Q6J("formGroup",n.dialogForm),e.xp6(7),e.Q6J("mat-dialog-close",null),e.xp6(2),e.Q6J("mat-dialog-close",n.dialogForm.controls.name.value)("disabled",n.dialogForm.invalid)}}const Z=r=>!!r.children;let _e=(()=>{class r extends((0,O.j)(y.A)){constructor(n,t){super(),this.dialog=n,this.store=t,this.selectedNodeId=null,this.nodeClick=new e.vpe,this.tree=this.repositoryBookmarks.pipe((0,T.U)(o=>o.map(i=>this.convertBookmarkToNode(i,"")))),this.dialogTitle="New Folder",this.dialogForm=new p.cw({name:new p.NI(null)}),this.dialogRef=null,this.addNode=(o,i,s,g)=>{(0,_.D)([this.repositoryNames.pipe((0,l.q)(1)),this.repositoryBookmarks.pipe((0,l.q)(1))]).subscribe(([w,R])=>{const B={name:w[o],repositoryId:o},H=this.replaceBookmark(R,i,"",b=>{if("above"===s)return[B,b];if("below"===s)return[b,B];if(g||!this.isBookmarkFolder(b))throw new Error(`Position '${s}' not valid for drag onto tree leaf node. Should be either 'above' or 'below'.`);return[{...b,expanded:!0,children:[...b.children,B]}]});if(!H)throw new Error(`Couldn't find node with id '${i}'.`);this.store.dispatch(new P.c9(H))})},this.dragoverListener=o=>{o.dataTransfer?.types.includes("app/repository")&&(o.preventDefault(),o.dataTransfer.dropEffect="move")},this.dropListener=o=>{if(o.dataTransfer?.types.includes("app/repository")){o.preventDefault();const i=o.dataTransfer.getData("app/repository");(0,_.D)([this.repositoryNames.pipe((0,l.q)(1)),this.repositoryBookmarks.pipe((0,l.q)(1))]).subscribe(([s,g])=>{this.store.dispatch(new P.c9([{name:s[i],repositoryId:i}]))})}},this.convertBookmarkToNode=(o,i)=>this.isBookmarkFolder(o)?{id:`folder:${this.getPath(o,i)}`,name:o.name,children:o.children.map(s=>this.convertBookmarkToNode(s,this.getPath(o,i))),expanded:o.expanded}:{id:o.repositoryId,name:o.name},this.convertNodeToBookmark=o=>Z(o)?{name:o.name,expanded:o.expanded??!1,children:o.children.map(this.convertNodeToBookmark)}:{name:o.name,repositoryId:o.id}}ngOnDestroy(){super.ngOnDestroy(),this.dialogRef&&this.dialogRef.close()}treeChanged(n){this.store.dispatch(new P.c9(n.map(this.convertNodeToBookmark)))}toggleMenu(n,t){n.stopPropagation();const o=n.currentTarget.getBoundingClientRect();t.toggleMenu(o.x,o.y+o.height)}addFolder(n){this.dialogRef&&this.dialogRef.close(),this.dialogTitle="New Folder",this.dialogForm.reset(),this.dialogRef=this.dialog.open(this.dialogTemplate),this.dialogRef.afterClosed().pipe((0,v.R)(this.destroyed$)).subscribe(t=>{t&&this.repositoryBookmarks.pipe((0,l.q)(1)).subscribe(o=>{const i={name:t,children:[],expanded:!1},s=n?this.replaceBookmark(o,n,"",g=>{if(!this.isBookmarkFolder(g))throw new Error(`Cannot add folder to non-folder bookmark '${n}'.`);return[{...g,children:[...g.children,i]}]}):[...o,i];if(!s)throw new Error(`Couldn't find node with id '${n}'.`);this.store.dispatch(new P.c9(s))})})}deleteNode(n){this.repositoryBookmarks.pipe((0,l.q)(1)).subscribe(t=>{const o=this.replaceBookmark(t,n.id,"",()=>[]);if(!o)throw new Error(`Couldn't find node with id '${n.id}'.`);this.store.dispatch(new P.c9(o))})}renameFolder(n){if(!Z(n))throw new Error(`Cannot rename leaf node '${n.id}'.`);this.dialogTitle="Rename Folder",this.dialogForm.reset({name:n.name}),this.dialog.open(this.dialogTemplate).afterClosed().pipe((0,v.R)(this.destroyed$)).subscribe(t=>{t&&this.repositoryBookmarks.pipe((0,l.q)(1)).subscribe(o=>{const i=this.replaceBookmark(o,n.id,"",s=>[{...s,name:t}]);if(!i)throw new Error(`Couldn't find node with id '${n.id}'.`);this.store.dispatch(new P.c9(i))})})}isBookmarkFolder(n){return!!n.children}replaceBookmark(n,t,o,i){for(let s=0;s<n.length;s++){const g=n[s];if(t===(this.isBookmarkFolder(g)?`folder:${this.getPath(g,o)}`:g.repositoryId))return[...n.slice(0,s),...i(n[s]),...n.slice(s+1)];if(this.isBookmarkFolder(g)){const w=this.replaceBookmark(g.children,t,this.getPath(g,o),i);if(w)return[...n.slice(0,s),{...g,children:w},...n.slice(s+1)]}}return null}getPath(n,t){return t?`${t}///${n.name.replace("/","//")}`:n.name.replace("/","//")}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(m.uw),e.Y36(u.yh))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-repository-bookmarks-view"]],viewQuery:function(n,t){if(1&n&&e.Gf(te,5),2&n){let o;e.iGM(o=e.CRH())&&(t.dialogTemplate=o.first)}},inputs:{selectedNodeId:"selectedNodeId"},outputs:{nodeClick:"nodeClick"},features:[e.qOj],decls:7,vars:3,consts:[[4,"ngIf"],["type","button","mat-stroked-button","","matTooltip","Add folder",1,"add-folder-button",3,"click"],["dialogTemplate",""],[3,"tree","dragListeners","treeChange"],["class","bookmark-node",3,"appContextMenu","selected","click",4,"appTreeNode"],["class","bookmark-node",3,"appContextMenu","selected","matTooltip","click",4,"appTreeLeafNode"],["class","first-drag-zone","draggable","true",3,"dragover","drop",4,"ngIf"],[1,"bookmark-node",3,"appContextMenu","click"],["contextMenu","appContextMenu"],["mat-icon-button",""],["menu",""],[1,"menu-panel"],[1,"menu-item",3,"click"],[1,"bookmark-node",3,"appContextMenu","matTooltip","click"],["mat-icon-button","","disabled",""],["draggable","true",1,"first-drag-zone",3,"dragover","drop"],["mat-dialog-title",""],[3,"formGroup"],[1,"full-width"],["type","text","matInput","","required","","formControlName","name"],["mat-button","",3,"mat-dialog-close"],["mat-flat-button","","type","submit","color","primary",3,"mat-dialog-close","disabled"]],template:function(n,t){1&n&&(e.YNc(0,ce,5,7,"ng-container",0),e.ALo(1,"async"),e.TgZ(2,"button",1),e.NdJ("click",function(){return t.addFolder()}),e.TgZ(3,"mat-icon"),e._uU(4,"create_new_folder"),e.qZA()(),e.YNc(5,pe,13,5,"ng-template",null,2,e.W1O)),2&n&&e.Q6J("ngIf",e.lcZ(1,1,t.tree))},dependencies:[m.ZT,m.uh,m.xY,m.H8,M.KE,M.hX,c.Nt,h.O5,p._Y,p.Fj,p.JJ,p.JL,p.Q7,p.sg,p.u,E.lW,L.Hw,D.gM,A.l,ee,U,F,h.Ov],styles:["app-tree[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{vertical-align:middle}app-tree[_ngcontent-%COMP%]   .bookmark-node[_ngcontent-%COMP%]{cursor:pointer}app-tree[_ngcontent-%COMP%]   .bookmark-node.selected[_ngcontent-%COMP%]{background:#78909c}.first-drag-zone[_ngcontent-%COMP%]{height:50px}.full-width[_ngcontent-%COMP%]{width:100%}.menu-panel[_ngcontent-%COMP%]{background:#424242;border-radius:4px;box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f;max-height:calc(100vh - 48px);max-width:25vw;min-height:48px;min-width:112px;overflow-x:hidden;overflow-y:auto}.menu-panel[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{background:transparent;border:none;color:#fff;cursor:pointer;display:flex;font-family:MontserratVariable;font-size:14px;height:48px;line-height:48px;max-width:100%;outline:none;overflow:hidden;padding:0 16px;user-select:none;text-align:left;text-overflow:ellipsis;width:100%;white-space:nowrap}.menu-panel[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:first-child{border-radius:4px 4px 0 0}.menu-panel[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:last-child{border-radius:0 0 4px 4px}.menu-panel[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover{background:#565656}.menu-panel[_ngcontent-%COMP%]   .menu-item[disabled][_ngcontent-%COMP%]{pointer-events:none;color:#ffffff4d}.menu-panel[_ngcontent-%COMP%]   .menu-item.bold[_ngcontent-%COMP%]{font-weight:700}.menu-panel[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{margin:12px 16px 12px 0;vertical-align:middle;flex:0 0 auto}.menu-panel[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .mat-icon.expand-icon[_ngcontent-%COMP%]{margin-left:auto;margin-right:0}.menu-panel[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{vertical-align:middle;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.menu-panel.sub-menu-1[_ngcontent-%COMP%]{background:#4a4a4a}.add-folder-button[_ngcontent-%COMP%]{margin-top:10px}"],changeDetection:0}),(0,f.gn)([(0,u.Ph)(C.E.repositoryBookmarks)],r.prototype,"repositoryBookmarks",void 0),(0,f.gn)([(0,u.Ph)(C.E.repositoryNames)],r.prototype,"repositoryNames",void 0),r})()},6093:(N,x,a)=>{a.d(x,{i:()=>l});var f=a(5412),e=a(9549),p=a(4144),u=a(8255),_=a(3179),T=a(4650);let l=(()=>{class v{}return v.\u0275fac=function(y){return new(y||v)},v.\u0275mod=T.oAB({type:v}),v.\u0275inj=T.cJS({imports:[f.Is,e.lN,p.c,u.Tx,_.I]}),v})()},5174:(N,x,a)=>{a.d(x,{J:()=>C});var f=a(655),e=a(4650),p=a(9253),u=a(1086),_=a(4889),T=a(6197),l=a(6895),v=a(4859),O=a(7392),y=a(266);function P(m,M){if(1&m){const c=e.EpF();e.TgZ(0,"li",1),e.NdJ("click",function(){const L=e.CHM(c).$implicit,D=e.oxw();return e.KtG(D.clicked.next(L.repositoryId))})("dblclick",function(){const L=e.CHM(c).$implicit,D=e.oxw();return e.KtG(D.openRepository(L.repositoryId))})("dragstart",function(E){const D=e.CHM(c).$implicit,A=e.oxw();return e.KtG(A.dragStarted.next([E,D.repositoryId]))}),e.ALo(1,"async"),e._uU(2),e.TgZ(3,"button",2),e.NdJ("click",function(E){const D=e.CHM(c).$implicit;return e.oxw().deleteRepository(D.repositoryId),E.preventDefault(),e.KtG(E.stopPropagation())}),e.TgZ(4,"mat-icon",3),e._uU(5,"close"),e.qZA()()()}if(2&m){const c=M.$implicit,h=e.oxw();e.ekj("selected",c.repositoryId===e.lcZ(1,5,h.selectedId)),e.Q6J("matTooltip",c.repositoryId),e.uIk("draggable",h.draggable?"true":"false"),e.xp6(2),e.hij(" ",c.name," ")}}let C=(()=>{class m{constructor(c){this.store=c,this.draggable=!0,this.selectedId=(0,u.of)(null),this.clicked=new e.vpe,this.dragStarted=new e.vpe}openRepository(c){this.store.dispatch(new _.he(c))}deleteRepository(c){this.store.dispatch(new _.eo(c))}}return m.\u0275fac=function(c){return new(c||m)(e.Y36(p.yh))},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-repository-history-view"]],inputs:{draggable:"draggable",selectedId:"selectedId"},outputs:{clicked:"clicked",dragStarted:"dragStarted"},decls:3,vars:3,consts:[[3,"matTooltip","selected","click","dblclick","dragstart",4,"ngFor","ngForOf"],[3,"matTooltip","click","dblclick","dragstart"],["mat-icon-button","","color","warn","matTooltip","Remove repository (all settings saved in Glint will be removed)",1,"close-icon",3,"click"],["inline",""]],template:function(c,h){1&c&&(e.TgZ(0,"ul"),e.YNc(1,P,6,7,"li",0),e.ALo(2,"async"),e.qZA()),2&c&&(e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,h.recentRepositories)))},dependencies:[l.sg,v.lW,O.Hw,y.gM,l.Ov],styles:["ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{padding:10px;cursor:pointer}ul[_ngcontent-%COMP%] > li.selected[_ngcontent-%COMP%]{background:#78909c}ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{float:right;width:20px;height:20px;line-height:20px;opacity:0;transition:opacity .1s ease-in-out}ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{line-height:20px}ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:hover   .close-icon[_ngcontent-%COMP%]{opacity:1}"],changeDetection:0}),(0,f.gn)([(0,p.Ph)(T.E.recentRepositories)],m.prototype,"recentRepositories",void 0),m})()},3612:(N,x,a)=>{a.d(x,{e:()=>p});var f=a(3179),e=a(4650);let p=(()=>{class u{}return u.\u0275fac=function(T){return new(T||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[f.I]}),u})()}}]);