import{$ as Z,Aa as p,B as H,Bb as j,Cb as h,Fi as It,Ha as D,He as pt,Ia as it,Ka as I,Ke as mt,L as Q,La as v,Me as ft,Na as F,Ne as vt,Qa as E,Qg as Tt,R as W,S as _,T as k,U as G,Ua as O,V as q,Va as lt,Wa as x,Z as $,_ as Y,_a as rt,aa as A,ab as S,bb as V,cb as st,da as J,db as ct,df as U,ea as X,fa as tt,fb as dt,gb as ut,hb as L,i as z,ia as et,ib as N,if as _t,j as C,ja as at,jb as gt,jf as kt,kf as yt,l as P,m as B,na as ot,ob as ht,pa as y,pb as bt,q as u,s as K,sa as nt,w as b,z as R,za as T}from"./chunk-LQ6WPIKI.js";var At=["button"],Dt=["*"];function Ft(i,w){if(i&1&&x(0,"mat-pseudo-checkbox",3),i&2){let t=V();v("disabled",t.disabled)}}function Et(i,w){if(i&1&&x(0,"mat-pseudo-checkbox",3),i&2){let t=V();v("disabled",t.disabled)}}var xt=new A("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:Ot});function Ot(){return{hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1}}var St=new A("MatButtonToggleGroup"),Vt={provide:vt,useExisting:$(()=>Lt),multi:!0},Mt=0,M=class{constructor(w,t){this.source=w,this.value=t}},Lt=(()=>{class i{get name(){return this._name}set name(t){this._name=t,this._markButtonsForCheck()}get value(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t.map(a=>a.value):t[0]?t[0].value:void 0}set value(t){this._setSelectionByValue(t),this.valueChange.emit(this.value)}get selected(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t:t[0]||null}get multiple(){return this._multiple}set multiple(t){this._multiple=t,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._markButtonsForCheck()}get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(t){this._hideMultipleSelectionIndicator=t,this._markButtonsForCheck()}constructor(t,a,e){this._changeDetector=t,this._dir=e,this._multiple=!1,this._disabled=!1,this._disabledInteractive=!1,this._controlValueAccessorChangeFn=()=>{},this._onTouched=()=>{},this._name=`mat-button-toggle-group-${Mt++}`,this.valueChange=new y,this.change=new y,this.appearance=a&&a.appearance?a.appearance:"standard",this.hideSingleSelectionIndicator=a?.hideSingleSelectionIndicator??!1,this.hideMultipleSelectionIndicator=a?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new mt(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(t=>t.checked)),this.multiple||this._initializeTabIndex()}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_keydown(t){if(this.multiple||this.disabled)return;let e=t.target.id,l=this._buttonToggles.toArray().findIndex(g=>g.buttonId===e),s=null;switch(t.keyCode){case 32:case 13:s=this._buttonToggles.get(l)||null;break;case 38:s=this._getNextButton(l,-1);break;case 37:s=this._getNextButton(l,this.dir==="ltr"?-1:1);break;case 40:s=this._getNextButton(l,1);break;case 39:s=this._getNextButton(l,this.dir==="ltr"?1:-1);break;default:return}s&&(t.preventDefault(),s._onButtonClick(),s.focus())}_emitChangeEvent(t){let a=new M(t,this.value);this._rawValue=a.value,this._controlValueAccessorChangeFn(a.value),this.change.emit(a)}_syncButtonToggle(t,a,e=!1,l=!1){!this.multiple&&this.selected&&!t.checked&&(this.selected.checked=!1),this._selectionModel?a?this._selectionModel.select(t):this._selectionModel.deselect(t):l=!0,l?Promise.resolve().then(()=>this._updateModelValue(t,e)):this._updateModelValue(t,e)}_isSelected(t){return this._selectionModel&&this._selectionModel.isSelected(t)}_isPrechecked(t){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(a=>t.value!=null&&a===t.value):t.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(t=>{t.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let t=0;t<this._buttonToggles.length;t++){let a=this._buttonToggles.get(t);if(!a.disabled){a.tabIndex=0;break}}this._markButtonsForCheck()}_getNextButton(t,a){let e=this._buttonToggles;for(let l=1;l<=e.length;l++){let s=(t+a*l+e.length)%e.length,g=e.get(s);if(g&&!g.disabled)return g}return null}_setSelectionByValue(t){this._rawValue=t,this._buttonToggles&&(this.multiple&&t?(Array.isArray(t),this._clearSelection(),t.forEach(a=>this._selectValue(a))):(this._clearSelection(),this._selectValue(t)))}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(t=>{t.checked=!1,this.multiple||(t.tabIndex=-1)})}_selectValue(t){let a=this._buttonToggles.find(e=>e.value!=null&&e.value===t);a&&(a.checked=!0,this._selectionModel.select(a),this.multiple||(a.tabIndex=0))}_updateModelValue(t,a){a&&this._emitChangeEvent(t),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(t=>t._markForCheck())}static{this.\u0275fac=function(a){return new(a||i)(p(j),p(xt,8),p(ft,8))}}static{this.\u0275dir=tt({type:i,selectors:[["mat-button-toggle-group"]],contentQueries:function(a,e,l){if(a&1&&dt(l,wt,5),a&2){let s;L(s=N())&&(e._buttonToggles=s)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(a,e){a&1&&S("keydown",function(s){return e._keydown(s)}),a&2&&(I("role",e.multiple?"group":"radiogroup")("aria-disabled",e.disabled),F("mat-button-toggle-vertical",e.vertical)("mat-button-toggle-group-appearance-standard",e.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",h],value:"value",multiple:[2,"multiple","multiple",h],disabled:[2,"disabled","disabled",h],disabledInteractive:[2,"disabledInteractive","disabledInteractive",h],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",h],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",h]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],standalone:!0,features:[ht([Vt,{provide:St,useExisting:i}]),D]})}}return i})(),wt=(()=>{class i{get buttonId(){return`${this.id}-button`}get tabIndex(){return this._tabIndex}set tabIndex(t){this._tabIndex=t,this._markForCheck()}get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t}get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=t}get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}constructor(t,a,e,l,s,g){this._changeDetectorRef=a,this._elementRef=e,this._focusMonitor=l,this._checked=!1,this.ariaLabelledby=null,this._disabled=!1,this.change=new y;let m=Number(s);this.tabIndex=m||m===0?m:null,this.buttonToggleGroup=t,this.appearance=g&&g.appearance?g.appearance:"standard",this.disabledInteractive=g?.disabledInteractive??!1}ngOnInit(){let t=this.buttonToggleGroup;this.id=this.id||`mat-button-toggle-${Mt++}`,t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}focus(t){this._buttonElement.nativeElement.focus(t)}_onButtonClick(){if(this.disabled)return;let t=this.isSingleSelector()?!0:!this._checked;if(t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let a=this.buttonToggleGroup._buttonToggles.find(e=>e.tabIndex===0);a&&(a.tabIndex=-1),this.tabIndex=0}this.change.emit(new M(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static{this.\u0275fac=function(a){return new(a||i)(p(St,8),p(j),p(nt),p(pt),ot("tabindex"),p(xt,8))}}static{this.\u0275cmp=J({type:i,selectors:[["mat-button-toggle"]],viewQuery:function(a,e){if(a&1&&ut(At,5),a&2){let l;L(l=N())&&(e._buttonElement=l.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(a,e){a&1&&S("focus",function(){return e.focus()}),a&2&&(I("aria-label",null)("aria-labelledby",null)("id",e.id)("name",null),F("mat-button-toggle-standalone",!e.buttonToggleGroup)("mat-button-toggle-checked",e.checked)("mat-button-toggle-disabled",e.disabled)("mat-button-toggle-disabled-interactive",e.disabledInteractive)("mat-button-toggle-appearance-standard",e.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",h],appearance:"appearance",checked:[2,"checked","checked",h],disabled:[2,"disabled","disabled",h],disabledInteractive:[2,"disabledInteractive","disabledInteractive",h]},outputs:{change:"change"},exportAs:["matButtonToggle"],standalone:!0,features:[D,bt],ngContentSelectors:Dt,decls:8,vars:14,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-label-content"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"]],template:function(a,e){if(a&1){let l=rt();st(),O(0,"button",1,0),S("click",function(){return et(l),at(e._onButtonClick())}),O(2,"span",2),it(3,Ft,1,1,"mat-pseudo-checkbox",3)(4,Et,1,1,"mat-pseudo-checkbox",3),ct(5),lt()(),x(6,"span",4)(7,"span",5)}if(a&2){let l=gt(1);v("id",e.buttonId)("disabled",e.disabled&&!e.disabledInteractive||null),I("role",e.isSingleSelector()?"radio":"button")("tabindex",e.disabled&&!e.disabledInteractive?-1:e.tabIndex)("aria-pressed",e.isSingleSelector()?null:e.checked)("aria-checked",e.isSingleSelector()?e.checked:null)("name",e._getButtonName())("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledby)("aria-disabled",e.disabled&&e.disabledInteractive?"true":null),T(3),E(e.buttonToggleGroup&&e.checked&&!e.buttonToggleGroup.multiple&&!e.buttonToggleGroup.hideSingleSelectionIndicator?3:-1),T(),E(e.buttonToggleGroup&&e.checked&&e.buttonToggleGroup.multiple&&!e.buttonToggleGroup.hideMultipleSelectionIndicator?4:-1),T(3),v("matRippleTrigger",l)("matRippleDisabled",e.disableRipple||e.disabled)}},dependencies:[_t,yt],styles:[".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);transform:translateZ(0);border-radius:var(--mat-legacy-button-toggle-shape)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-standard-button-toggle-shape, var(--mat-app-corner-full));border:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-app-outline))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-standard-button-toggle-selected-state-text-color, var(--mat-app-on-secondary-container))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-legacy-button-toggle-text-color);font-family:var(--mat-legacy-button-toggle-label-text-font);font-size:var(--mat-legacy-button-toggle-label-text-size);line-height:var(--mat-legacy-button-toggle-label-text-line-height);font-weight:var(--mat-legacy-button-toggle-label-text-weight);letter-spacing:var(--mat-legacy-button-toggle-label-text-tracking);--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-legacy-button-toggle-selected-state-text-color)}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-legacy-button-toggle-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle .mat-pseudo-checkbox{margin-right:12px}[dir=rtl] .mat-button-toggle .mat-pseudo-checkbox{margin-right:0;margin-left:12px}.mat-button-toggle-checked{color:var(--mat-legacy-button-toggle-selected-state-text-color);background-color:var(--mat-legacy-button-toggle-selected-state-background-color)}.mat-button-toggle-disabled{pointer-events:none;color:var(--mat-legacy-button-toggle-disabled-state-text-color);background-color:var(--mat-legacy-button-toggle-disabled-state-background-color);--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var(--mat-legacy-button-toggle-disabled-state-text-color)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-legacy-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-disabled-interactive{pointer-events:auto}.mat-button-toggle-appearance-standard{color:var(--mat-standard-button-toggle-text-color, var(--mat-app-on-surface));background-color:var(--mat-standard-button-toggle-background-color);font-family:var(--mat-standard-button-toggle-label-text-font, var(--mat-app-label-large-font));font-size:var(--mat-standard-button-toggle-label-text-size, var(--mat-app-label-large-size));line-height:var(--mat-standard-button-toggle-label-text-line-height, var(--mat-app-label-large-line-height));font-weight:var(--mat-standard-button-toggle-label-text-weight, var(--mat-app-label-large-weight));letter-spacing:var(--mat-standard-button-toggle-label-text-tracking, var(--mat-app-label-large-tracking))}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-app-outline))}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-app-outline))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-app-outline))}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-selected-state-text-color, var(--mat-app-on-secondary-container));background-color:var(--mat-standard-button-toggle-selected-state-background-color, var(--mat-app-secondary-container))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-standard-button-toggle-disabled-state-text-color);background-color:var(--mat-standard-button-toggle-disabled-state-background-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var(--mat-standard-button-toggle-disabled-selected-state-text-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-disabled-selected-state-text-color);background-color:var(--mat-standard-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-standard-button-toggle-state-layer-color, var(--mat-app-on-surface))}.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}@media(hover: none){.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-legacy-button-toggle-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-standard-button-toggle-height)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-legacy-button-toggle-state-layer-color)}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius:var(--mat-standard-button-toggle-shape, var(--mat-app-corner-full))}.mat-button-toggle-group-appearance-standard .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-app-corner-full));border-bottom-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-app-corner-full))}.mat-button-toggle-group-appearance-standard .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-app-corner-full));border-bottom-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-app-corner-full))}"],encapsulation:2,changeDetection:0})}}return i})(),ce=(()=>{class i{static{this.\u0275fac=function(a){return new(a||i)}}static{this.\u0275mod=X({type:i})}static{this.\u0275inj=Z({imports:[U,kt,wt,U]})}}return i})();var pe=(()=>{class i{constructor(){this.charWidth=7.7,this.contextMenuOpened=new z,this.selectedRange=new C(null),this.selectedFileLines=new C([]),this.isGreaterThan=(t,a)=>t.line>a.line||t.line===a.line&&t.char>a.char,this.isLessThan=(t,a)=>t.line<a.line||t.line===a.line&&t.char<a.char}captureSelections(t,a,e,l,s){let g=b(t,"mousedown").pipe(H(n=>n.button===0),_(n=>{let o=a(n.x,n.y);if(n.shiftKey){let r=this.selectedRange.value?.[0]??{line:0,char:0};return u([r,o])}return b(t,"mousemove").pipe(q(30,P,{leading:!0,trailing:!0}),K(r=>[o,a(r.x,r.y)]),W(null),k(b(t,"mousedown")),k(b(t,"mouseleave")),k(b(t,"mouseup")))})),m=b(t,"keydown").pipe(_(n=>{if((It?n.metaKey:n.ctrlKey)&&!n.shiftKey&&!n.altKey)switch(n.key){case"A":case"a":return n.preventDefault(),u([{line:0,char:0},l()]);case"C":case"c":n.preventDefault();let o=this.selectedRange.value;if(o){let[r,c]=this.isLessThan(o[0],o[1])?o:[o[1],o[0]],d=e(r.line,c.line);r.line===c.line?d[0]=d[0]?.slice(r.char,c.char):(d[0]=d[0]?.slice(r.char),d[d.length-1]=d[d.length-1]?.slice(0,c.char)),navigator.clipboard.writeText(d.filter(Tt).join(`
`))}break}if(!n.metaKey&&!n.ctrlKey&&n.shiftKey&&!n.altKey){let o=this.selectedRange.value;switch(n.key){case"ArrowUp":if(o){let r=o[1].line-1,c=e(r,r)[0]??"";return u([o[0],{line:r,char:Math.min(c.length,o[1].char)}])}break;case"ArrowDown":if(o){let r=o[1].line+1,c=e(r,r)[0]??"";return u([o[0],{line:r,char:Math.min(c.length,o[1].char)}])}else return u([{line:0,char:0},{line:1,char:0}]);case"ArrowLeft":if(o)if(o[1].char<=0){let c=o[1].line-1,d=e(c,c)[0]??"";return u([o[0],{line:c,char:d.length-1}])}else return u([o[0],{line:o[1].line,char:o[1].char-1}]);break;case"ArrowRight":if(o){let r=o[1].char,c=e(o[1].line,o[1].line)[0]??"";return r>=c.length-1?u([o[0],{line:o[1].line+1,char:0}]):u([o[0],{line:o[1].line,char:o[1].char+1}])}break;case"Home":if(o)return u([o[0],{line:0,char:0}]);break;case"End":if(o)return u([o[0],l()]);break}}return B})),Ct=b(t,"dblclick").pipe(_(n=>{let o=a(n.x,n.y),r=e(o.line,o.line)[0];if(r){let c=/[a-zA-Z0-9_]/,d=o.char,f=o.char;for(;r[d]&&c.test(r[d]??"");)d--;for(;r[f]&&c.test(r[f]??"");)f++;return r.slice(d,f).length===0?u(null):u([{line:o.line,char:d+1},{line:o.line,char:f}])}return B})),Bt=R(g,m,Ct).pipe(G(n=>{this.selectedRange.next(n),this.selectedFileLines.next(n?s(this.isLessThan(n[0],n[1])?n:[n[1],n[0]]):[])})),Rt=b(t,"contextmenu").pipe(G(n=>{this.contextMenuOpened.next({x:n.x,y:n.y}),n.preventDefault()}));return R(Bt,Rt).pipe(Q(()=>{this.selectedRange.next(null),this.selectedFileLines.next([])}))}static{this.\u0275fac=function(a){return new(a||i)}}static{this.\u0275prov=Y({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();export{xt as a,Lt as b,wt as c,ce as d,pe as e};
