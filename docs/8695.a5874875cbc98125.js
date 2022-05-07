"use strict";var le=Object.defineProperty,ue=(A,w,S)=>w in A?le(A,w,{enumerable:!0,configurable:!0,writable:!0,value:S}):A[w]=S,k=(A,w,S)=>(ue(A,"symbol"!=typeof w?w+"":w,S),S);(self.webpackChunkgit_glint=self.webpackChunkgit_glint||[]).push([[8695],{48695:(A,w,S)=>{S.r(w),S.d(w,{Adapter:()=>v,CodeActionAdaptor:()=>z,DefinitionAdapter:()=>j,DiagnosticsAdapter:()=>E,FormatAdapter:()=>U,FormatHelper:()=>C,FormatOnTypeAdapter:()=>$,InlayHintsAdapter:()=>J,Kind:()=>l,LibFiles:()=>R,OccurrencesAdapter:()=>V,OutlineAdapter:()=>B,QuickInfoAdapter:()=>W,ReferenceAdapter:()=>Z,RenameAdapter:()=>G,SignatureHelpAdapter:()=>P,SuggestAdapter:()=>F,WorkerManager:()=>K,flattenDiagnosticMessageText:()=>O,getJavaScriptWorker:()=>oe,getTypeScriptWorker:()=>ae,setupJavaScript:()=>ne,setupTypeScript:()=>ie});var m=S(14724),X=S(70031),Y=S(99174),N=Object.defineProperty,q=Object.getOwnPropertyDescriptor,ee=Object.getOwnPropertyNames,te=Object.prototype.hasOwnProperty,b=(e,t,i)=>(((e,t,i)=>{t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i})(e,"symbol"!=typeof t?t+"":t,i),i),s={};((e,t,i,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of ee(t))!te.call(e,n)&&"default"!==n&&N(e,n,{get:()=>t[n],enumerable:!(r=q(t,n))||r.enumerable})})(s,X);var K=class{constructor(e,t){k(this,"_modeId"),k(this,"_defaults"),k(this,"_configChangeListener"),k(this,"_updateExtraLibsToken"),k(this,"_extraLibsChangeListener"),k(this,"_worker"),k(this,"_client"),this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker()),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange(()=>this._updateExtraLibs())}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_updateExtraLibs(){var e=this;return(0,m.Z)(function*(){if(!e._worker)return;const t=++e._updateExtraLibsToken,i=yield e._worker.getProxy();e._updateExtraLibsToken===t&&i.updateExtraLibs(e._defaults.getExtraLibs())})()}_getClient(){if(!this._client){this._worker=s.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}});let e=this._worker.getProxy();this._defaults.getEagerModelSync()&&(e=e.then(t=>this._worker?this._worker.withSyncedResources(s.editor.getModels().filter(i=>i.getLanguageId()===this._modeId).map(i=>i.uri)):t)),this._client=e}return this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then(i=>{t=i}).then(i=>{if(this._worker)return this._worker.withSyncedResources(e)}).then(i=>t)}},a={};function O(e,t,i=0){if("string"==typeof e)return e;if(void 0===e)return"";let r="";if(i){r+=t;for(let n=0;n<i;n++)r+="  "}if(r+=e.messageText,i++,e.next)for(const n of e.next)r+=O(n,t,i);return r}function x(e){return e?e.map(t=>t.text).join(""):""}a["lib.d.ts"]=!0,a["lib.dom.d.ts"]=!0,a["lib.dom.iterable.d.ts"]=!0,a["lib.es2015.collection.d.ts"]=!0,a["lib.es2015.core.d.ts"]=!0,a["lib.es2015.d.ts"]=!0,a["lib.es2015.generator.d.ts"]=!0,a["lib.es2015.iterable.d.ts"]=!0,a["lib.es2015.promise.d.ts"]=!0,a["lib.es2015.proxy.d.ts"]=!0,a["lib.es2015.reflect.d.ts"]=!0,a["lib.es2015.symbol.d.ts"]=!0,a["lib.es2015.symbol.wellknown.d.ts"]=!0,a["lib.es2016.array.include.d.ts"]=!0,a["lib.es2016.d.ts"]=!0,a["lib.es2016.full.d.ts"]=!0,a["lib.es2017.d.ts"]=!0,a["lib.es2017.full.d.ts"]=!0,a["lib.es2017.intl.d.ts"]=!0,a["lib.es2017.object.d.ts"]=!0,a["lib.es2017.sharedmemory.d.ts"]=!0,a["lib.es2017.string.d.ts"]=!0,a["lib.es2017.typedarrays.d.ts"]=!0,a["lib.es2018.asyncgenerator.d.ts"]=!0,a["lib.es2018.asynciterable.d.ts"]=!0,a["lib.es2018.d.ts"]=!0,a["lib.es2018.full.d.ts"]=!0,a["lib.es2018.intl.d.ts"]=!0,a["lib.es2018.promise.d.ts"]=!0,a["lib.es2018.regexp.d.ts"]=!0,a["lib.es2019.array.d.ts"]=!0,a["lib.es2019.d.ts"]=!0,a["lib.es2019.full.d.ts"]=!0,a["lib.es2019.object.d.ts"]=!0,a["lib.es2019.string.d.ts"]=!0,a["lib.es2019.symbol.d.ts"]=!0,a["lib.es2020.bigint.d.ts"]=!0,a["lib.es2020.d.ts"]=!0,a["lib.es2020.full.d.ts"]=!0,a["lib.es2020.intl.d.ts"]=!0,a["lib.es2020.promise.d.ts"]=!0,a["lib.es2020.sharedmemory.d.ts"]=!0,a["lib.es2020.string.d.ts"]=!0,a["lib.es2020.symbol.wellknown.d.ts"]=!0,a["lib.es2021.d.ts"]=!0,a["lib.es2021.full.d.ts"]=!0,a["lib.es2021.intl.d.ts"]=!0,a["lib.es2021.promise.d.ts"]=!0,a["lib.es2021.string.d.ts"]=!0,a["lib.es2021.weakref.d.ts"]=!0,a["lib.es5.d.ts"]=!0,a["lib.es6.d.ts"]=!0,a["lib.esnext.d.ts"]=!0,a["lib.esnext.full.d.ts"]=!0,a["lib.esnext.intl.d.ts"]=!0,a["lib.esnext.promise.d.ts"]=!0,a["lib.esnext.string.d.ts"]=!0,a["lib.esnext.weakref.d.ts"]=!0,a["lib.scripthost.d.ts"]=!0,a["lib.webworker.d.ts"]=!0,a["lib.webworker.importscripts.d.ts"]=!0,a["lib.webworker.iterable.d.ts"]=!0;var v=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let i=e.getPositionAt(t.start),r=e.getPositionAt(t.start+t.length),{lineNumber:n,column:c}=i,{lineNumber:p,column:o}=r;return{startLineNumber:n,startColumn:c,endLineNumber:p,endColumn:o}}},R=class{constructor(e){k(this,"_libFiles"),k(this,"_hasFetchedLibFiles"),k(this,"_fetchLibFilesPromise"),this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}isLibFile(e){return!(!e||0!==e.path.indexOf("/lib.")||!a[e.path.slice(1)])}getOrCreateModel(e){const t=s.Uri.parse(e),i=s.editor.getModel(t);if(i)return i;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return s.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);const r=Y.TG.getExtraLibs()[e];return r?s.editor.createModel(r.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}fetchLibFilesIfNecessary(e){var t=this;return(0,m.Z)(function*(){!t._containsLibFile(e)||(yield t._fetchLibFiles())})()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then(e=>e.getLibFiles()).then(e=>{this._hasFetchedLibFiles=!0,this._libFiles=e})),this._fetchLibFilesPromise}},E=class extends v{constructor(e,t,i,r){super(r),k(this,"_disposables",[]),k(this,"_listener",Object.create(null)),this._libFiles=e,this._defaults=t,this._selector=i;const n=o=>{if(o.getLanguageId()!==i)return;const u=()=>{const{onlyVisible:h}=this._defaults.getDiagnosticsOptions();h?o.isAttachedToEditor()&&this._doValidate(o):this._doValidate(o)};let d;const g=o.onDidChangeContent(()=>{clearTimeout(d),d=window.setTimeout(u,500)}),f=o.onDidChangeAttached(()=>{const{onlyVisible:h}=this._defaults.getDiagnosticsOptions();h&&(o.isAttachedToEditor()?u():s.editor.setModelMarkers(o,this._selector,[]))});this._listener[o.uri.toString()]={dispose(){g.dispose(),f.dispose(),clearTimeout(d)}},u()},c=o=>{s.editor.setModelMarkers(o,this._selector,[]);const u=o.uri.toString();this._listener[u]&&(this._listener[u].dispose(),delete this._listener[u])};this._disposables.push(s.editor.onDidCreateModel(o=>n(o))),this._disposables.push(s.editor.onWillDisposeModel(c)),this._disposables.push(s.editor.onDidChangeModelLanguage(o=>{c(o.model),n(o.model)})),this._disposables.push({dispose(){for(const o of s.editor.getModels())c(o)}});const p=()=>{for(const o of s.editor.getModels())c(o),n(o)};this._disposables.push(this._defaults.onDidChange(p)),this._disposables.push(this._defaults.onDidExtraLibsChange(p)),s.editor.getModels().forEach(o=>n(o))}dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables=[]}_doValidate(e){var t=this;return(0,m.Z)(function*(){const i=yield t._worker(e.uri);if(e.isDisposed())return;const r=[],{noSyntaxValidation:n,noSemanticValidation:c,noSuggestionDiagnostics:p}=t._defaults.getDiagnosticsOptions();n||r.push(i.getSyntacticDiagnostics(e.uri.toString())),c||r.push(i.getSemanticDiagnostics(e.uri.toString())),p||r.push(i.getSuggestionDiagnostics(e.uri.toString()));const o=yield Promise.all(r);if(!o||e.isDisposed())return;const u=o.reduce((g,f)=>f.concat(g),[]).filter(g=>-1===(t._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(g.code)),d=u.map(g=>g.relatedInformation||[]).reduce((g,f)=>f.concat(g),[]).map(g=>g.file?s.Uri.parse(g.file.fileName):null);yield t._libFiles.fetchLibFilesIfNecessary(d),!e.isDisposed()&&s.editor.setModelMarkers(e,t._selector,u.map(g=>t._convertDiagnostics(e,g)))})()}_convertDiagnostics(e,t){const i=t.start||0,r=t.length||1,{lineNumber:n,column:c}=e.getPositionAt(i),{lineNumber:p,column:o}=e.getPositionAt(i+r),u=[];return t.reportsUnnecessary&&u.push(s.MarkerTag.Unnecessary),t.reportsDeprecated&&u.push(s.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:n,startColumn:c,endLineNumber:p,endColumn:o,message:O(t.messageText,"\n"),code:t.code.toString(),tags:u,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];const i=[];return t.forEach(r=>{let n=e;if(r.file&&(n=this._libFiles.getOrCreateModel(r.file.fileName)),!n)return;const c=r.start||0,p=r.length||1,{lineNumber:o,column:u}=n.getPositionAt(c),{lineNumber:d,column:g}=n.getPositionAt(c+p);i.push({resource:n.uri,startLineNumber:o,startColumn:u,endLineNumber:d,endColumn:g,message:O(r.messageText,"\n")})}),i}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return s.MarkerSeverity.Error;case 3:return s.MarkerSeverity.Info;case 0:return s.MarkerSeverity.Warning;case 2:return s.MarkerSeverity.Hint}return s.MarkerSeverity.Info}},F=class extends v{get triggerCharacters(){return["."]}provideCompletionItems(e,t,i,r){var n=this;return(0,m.Z)(function*(){const c=e.getWordUntilPosition(t),p=new s.Range(t.lineNumber,c.startColumn,t.lineNumber,c.endColumn),o=e.uri,u=e.getOffsetAt(t),d=yield n._worker(o);if(e.isDisposed())return;const g=yield d.getCompletionsAtPosition(o.toString(),u);return!g||e.isDisposed()?void 0:{suggestions:g.entries.map(h=>{let _=p;if(h.replacementSpan){const T=e.getPositionAt(h.replacementSpan.start),L=e.getPositionAt(h.replacementSpan.start+h.replacementSpan.length);_=new s.Range(T.lineNumber,T.column,L.lineNumber,L.column)}const D=[];return-1!==h.kindModifiers?.indexOf("deprecated")&&D.push(s.languages.CompletionItemTag.Deprecated),{uri:o,position:t,offset:u,range:_,label:h.name,insertText:h.name,sortText:h.sortText,kind:F.convertKind(h.kind),tags:D}})}})()}resolveCompletionItem(e,t){var i=this;return(0,m.Z)(function*(){const r=e,n=r.uri,c=r.position,p=r.offset,u=yield(yield i._worker(n)).getCompletionEntryDetails(n.toString(),p,r.label);return u?{uri:n,position:c,label:u.name,kind:F.convertKind(u.kind),detail:x(u.displayParts),documentation:{value:F.createDocumentationString(u)}}:r})()}static convertKind(e){switch(e){case l.primitiveType:case l.keyword:return s.languages.CompletionItemKind.Keyword;case l.variable:case l.localVariable:return s.languages.CompletionItemKind.Variable;case l.memberVariable:case l.memberGetAccessor:case l.memberSetAccessor:return s.languages.CompletionItemKind.Field;case l.function:case l.memberFunction:case l.constructSignature:case l.callSignature:case l.indexSignature:return s.languages.CompletionItemKind.Function;case l.enum:return s.languages.CompletionItemKind.Enum;case l.module:return s.languages.CompletionItemKind.Module;case l.class:return s.languages.CompletionItemKind.Class;case l.interface:return s.languages.CompletionItemKind.Interface;case l.warning:return s.languages.CompletionItemKind.File}return s.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=x(e.documentation);if(e.tags)for(const i of e.tags)t+=`\n\n${H(i)}`;return t}};function H(e){let t=`*@${e.name}*`;if("param"===e.name&&e.text){const[i,...r]=e.text;t+=`\`${i.text}\``,r.length>0&&(t+=` \u2014 ${r.map(n=>n.text).join(" ")}`)}else Array.isArray(e.text)?t+=` \u2014 ${e.text.map(i=>i.text).join(" ")}`:e.text&&(t+=` \u2014 ${e.text}`);return t}var P=class extends v{constructor(){super(...arguments),k(this,"signatureHelpTriggerCharacters",["(",","])}static _toSignatureHelpTriggerReason(e){switch(e.triggerKind){case s.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case s.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};default:return{kind:"invoked"}}}provideSignatureHelp(e,t,i,r){var n=this;return(0,m.Z)(function*(){const c=e.uri,p=e.getOffsetAt(t),o=yield n._worker(c);if(e.isDisposed())return;const u=yield o.getSignatureHelpItems(c.toString(),p,{triggerReason:P._toSignatureHelpTriggerReason(r)});if(!u||e.isDisposed())return;const d={activeSignature:u.selectedItemIndex,activeParameter:u.argumentIndex,signatures:[]};return u.items.forEach(g=>{const f={label:"",parameters:[]};f.documentation={value:x(g.documentation)},f.label+=x(g.prefixDisplayParts),g.parameters.forEach((h,_,D)=>{const T=x(h.displayParts),L={label:T,documentation:{value:x(h.documentation)}};f.label+=T,f.parameters.push(L),_<D.length-1&&(f.label+=x(g.separatorDisplayParts))}),f.label+=x(g.suffixDisplayParts),d.signatures.push(f)}),{value:d,dispose(){}}})()}},W=class extends v{provideHover(e,t,i){var r=this;return(0,m.Z)(function*(){const n=e.uri,c=e.getOffsetAt(t),p=yield r._worker(n);if(e.isDisposed())return;const o=yield p.getQuickInfoAtPosition(n.toString(),c);if(!o||e.isDisposed())return;const u=x(o.documentation),d=o.tags?o.tags.map(f=>H(f)).join("  \n\n"):"",g=x(o.displayParts);return{range:r._textSpanToRange(e,o.textSpan),contents:[{value:"```typescript\n"+g+"\n```\n"},{value:u+(d?"\n\n"+d:"")}]}})()}},V=class extends v{provideDocumentHighlights(e,t,i){var r=this;return(0,m.Z)(function*(){const n=e.uri,c=e.getOffsetAt(t),p=yield r._worker(n);if(e.isDisposed())return;const o=yield p.getOccurrencesAtPosition(n.toString(),c);return o&&!e.isDisposed()?o.map(u=>({range:r._textSpanToRange(e,u.textSpan),kind:u.isWriteAccess?s.languages.DocumentHighlightKind.Write:s.languages.DocumentHighlightKind.Text})):void 0})()}},j=class extends v{constructor(e,t){super(t),this._libFiles=e}provideDefinition(e,t,i){var r=this;return(0,m.Z)(function*(){const n=e.uri,c=e.getOffsetAt(t),p=yield r._worker(n);if(e.isDisposed())return;const o=yield p.getDefinitionAtPosition(n.toString(),c);if(!o||e.isDisposed()||(yield r._libFiles.fetchLibFilesIfNecessary(o.map(d=>s.Uri.parse(d.fileName))),e.isDisposed()))return;const u=[];for(let d of o){const g=r._libFiles.getOrCreateModel(d.fileName);g&&u.push({uri:g.uri,range:r._textSpanToRange(g,d.textSpan)})}return u})()}},Z=class extends v{constructor(e,t){super(t),this._libFiles=e}provideReferences(e,t,i,r){var n=this;return(0,m.Z)(function*(){const c=e.uri,p=e.getOffsetAt(t),o=yield n._worker(c);if(e.isDisposed())return;const u=yield o.getReferencesAtPosition(c.toString(),p);if(!u||e.isDisposed()||(yield n._libFiles.fetchLibFilesIfNecessary(u.map(g=>s.Uri.parse(g.fileName))),e.isDisposed()))return;const d=[];for(let g of u){const f=n._libFiles.getOrCreateModel(g.fileName);f&&d.push({uri:f.uri,range:n._textSpanToRange(f,g.textSpan)})}return d})()}},B=class extends v{provideDocumentSymbols(e,t){var i=this;return(0,m.Z)(function*(){const r=e.uri,n=yield i._worker(r);if(e.isDisposed())return;const c=yield n.getNavigationBarItems(r.toString());if(!c||e.isDisposed())return;const p=(u,d,g)=>{let f={name:d.text,detail:"",kind:y[d.kind]||s.languages.SymbolKind.Variable,range:i._textSpanToRange(e,d.spans[0]),selectionRange:i._textSpanToRange(e,d.spans[0]),tags:[]};if(g&&(f.containerName=g),d.childItems&&d.childItems.length>0)for(let h of d.childItems)p(u,h,f.name);u.push(f)};let o=[];return c.forEach(u=>p(o,u)),o})()}},l=class{};b(l,"unknown",""),b(l,"keyword","keyword"),b(l,"script","script"),b(l,"module","module"),b(l,"class","class"),b(l,"interface","interface"),b(l,"type","type"),b(l,"enum","enum"),b(l,"variable","var"),b(l,"localVariable","local var"),b(l,"function","function"),b(l,"localFunction","local function"),b(l,"memberFunction","method"),b(l,"memberGetAccessor","getter"),b(l,"memberSetAccessor","setter"),b(l,"memberVariable","property"),b(l,"constructorImplementation","constructor"),b(l,"callSignature","call"),b(l,"indexSignature","index"),b(l,"constructSignature","construct"),b(l,"parameter","parameter"),b(l,"typeParameter","type parameter"),b(l,"primitiveType","primitive type"),b(l,"label","label"),b(l,"alias","alias"),b(l,"const","const"),b(l,"let","let"),b(l,"warning","warning");var y=Object.create(null);y[l.module]=s.languages.SymbolKind.Module,y[l.class]=s.languages.SymbolKind.Class,y[l.enum]=s.languages.SymbolKind.Enum,y[l.interface]=s.languages.SymbolKind.Interface,y[l.memberFunction]=s.languages.SymbolKind.Method,y[l.memberVariable]=s.languages.SymbolKind.Property,y[l.memberGetAccessor]=s.languages.SymbolKind.Property,y[l.memberSetAccessor]=s.languages.SymbolKind.Property,y[l.variable]=s.languages.SymbolKind.Variable,y[l.const]=s.languages.SymbolKind.Variable,y[l.localVariable]=s.languages.SymbolKind.Variable,y[l.variable]=s.languages.SymbolKind.Variable,y[l.function]=s.languages.SymbolKind.Function,y[l.localFunction]=s.languages.SymbolKind.Function;var I,M,C=class extends v{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},U=class extends C{provideDocumentRangeFormattingEdits(e,t,i,r){var n=this;return(0,m.Z)(function*(){const c=e.uri,p=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),o=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),u=yield n._worker(c);if(e.isDisposed())return;const d=yield u.getFormattingEditsForRange(c.toString(),p,o,C._convertOptions(i));return d&&!e.isDisposed()?d.map(g=>n._convertTextChanges(e,g)):void 0})()}},$=class extends C{get autoFormatTriggerCharacters(){return[";","}","\n"]}provideOnTypeFormattingEdits(e,t,i,r,n){var c=this;return(0,m.Z)(function*(){const p=e.uri,o=e.getOffsetAt(t),u=yield c._worker(p);if(e.isDisposed())return;const d=yield u.getFormattingEditsAfterKeystroke(p.toString(),o,i,C._convertOptions(r));return d&&!e.isDisposed()?d.map(g=>c._convertTextChanges(e,g)):void 0})()}},z=class extends C{provideCodeActions(e,t,i,r){var n=this;return(0,m.Z)(function*(){const c=e.uri,p=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),o=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),u=C._convertOptions(e.getOptions()),d=i.markers.filter(_=>_.code).map(_=>_.code).map(Number),g=yield n._worker(c);if(e.isDisposed())return;const f=yield g.getCodeFixesAtPosition(c.toString(),p,o,d,u);return!f||e.isDisposed()?{actions:[],dispose:()=>{}}:{actions:f.filter(_=>0===_.changes.filter(D=>D.isNewFile).length).map(_=>n._tsCodeFixActionToMonacoCodeAction(e,i,_)),dispose:()=>{}}})()}_tsCodeFixActionToMonacoCodeAction(e,t,i){const r=[];for(const c of i.changes)for(const p of c.textChanges)r.push({resource:e.uri,edit:{range:this._textSpanToRange(e,p.span),text:p.newText}});return{title:i.description,edit:{edits:r},diagnostics:t.markers,kind:"quickfix"}}},G=class extends v{constructor(e,t){super(t),this._libFiles=e}provideRenameEdits(e,t,i,r){var n=this;return(0,m.Z)(function*(){const c=e.uri,p=c.toString(),o=e.getOffsetAt(t),u=yield n._worker(c);if(e.isDisposed())return;const d=yield u.getRenameInfo(p,o,{allowRenameOfImportPath:!1});if(!1===d.canRename)return{edits:[],rejectReason:d.localizedErrorMessage};if(void 0!==d.fileToRename)throw new Error("Renaming files is not supported.");const g=yield u.findRenameLocations(p,o,!1,!1,!1);if(!g||e.isDisposed())return;const f=[];for(const h of g){const _=n._libFiles.getOrCreateModel(h.fileName);if(!_)throw new Error(`Unknown file ${h.fileName}.`);f.push({resource:_.uri,edit:{range:n._textSpanToRange(_,h.textSpan),text:i}})}return{edits:f}})()}},J=class extends v{provideInlayHints(e,t,i){var r=this;return(0,m.Z)(function*(){const n=e.uri,c=n.toString(),p=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),o=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),u=yield r._worker(n);return e.isDisposed()?null:{hints:(yield u.provideInlayHints(c,p,o)).map(f=>({...f,label:f.text,position:e.getPositionAt(f.position),kind:r._convertHintKind(f.kind)})),dispose:()=>{}}})()}_convertHintKind(e){return"Parameter"===e?s.languages.InlayHintKind.Parameter:s.languages.InlayHintKind.Type}};function ie(e){M=Q(e,"typescript")}function ne(e){I=Q(e,"javascript")}function oe(){return new Promise((e,t)=>{if(!I)return t("JavaScript not registered!");e(I)})}function ae(){return new Promise((e,t)=>{if(!M)return t("TypeScript not registered!");e(M)})}function Q(e,t){const i=new K(t,e),r=(...c)=>i.getLanguageServiceWorker(...c),n=new R(r);return s.languages.registerCompletionItemProvider(t,new F(r)),s.languages.registerSignatureHelpProvider(t,new P(r)),s.languages.registerHoverProvider(t,new W(r)),s.languages.registerDocumentHighlightProvider(t,new V(r)),s.languages.registerDefinitionProvider(t,new j(n,r)),s.languages.registerReferenceProvider(t,new Z(n,r)),s.languages.registerDocumentSymbolProvider(t,new B(r)),s.languages.registerDocumentRangeFormattingEditProvider(t,new U(r)),s.languages.registerOnTypeFormattingEditProvider(t,new $(r)),s.languages.registerCodeActionProvider(t,new z(r)),s.languages.registerRenameProvider(t,new G(n,r)),s.languages.registerInlayHintsProvider(t,new J(r)),new E(n,e,t,r),r}}}]);