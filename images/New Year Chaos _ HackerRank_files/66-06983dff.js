(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{C8X7:function(e,t,o){},gGYH:function(e,t,o){"use strict";o.r(t),o.d(t,"PureCodeshellEditor",(function(){return y}));o("CX2u");var s=o("MVZn"),i=o.n(s),a=(o("rGqo"),o("lSNA")),l=o.n(a),n=o("w13Q"),r=o("cDcd"),c=o.n(r),d=o("17x9"),p=o.n(d),u=o("EVdn"),m=o.n(u),h=o("OnOE"),g=o.n(h),f=o("TSYQ"),b=o.n(f),C=o("wd/R"),S=o.n(C),E=o("OEX3"),k=o("O766"),v=o("H59Z"),O=o("eOGF"),U=o("ZaSc"),w=o("DM5n"),T=o("5J+W"),F=o("oBtd"),L=o("mo6X"),N=o("IreD"),_=o("ryrm"),M=o("XzeZ"),W=o("uxZ6"),D=o("xNbf");o("C8X7");Object(O.P)(["codemirror/.*.js","lib/codemirror_mode_elixir.js"]);class j extends c.a.Component{constructor(){super(),l()(this,"state",void 0),l()(this,"markersReference",void 0),l()(this,"compileTimeout",void 0),l()(this,"allowSubmitCodeAction",void 0),l()(this,"fullscreen",()=>{const e=this.props.toggleFullScreen;e&&(this.$wrapper.codeshell("saveLangCode"),e(!0))}),l()(this,"restoreFullscreen",()=>{const e=this.props.toggleFullScreen,t=this.state.isInFocus;if(!e||t)return;const o=m()(this.refs.codeshellWrapper);this.$wrapper.codeshell("saveLangCode"),e(!1),setTimeout(()=>{m()(window).scrollTop(o.offset().top-50)},0)}),l()(this,"deleteMarkersOnSource",()=>{const e=this.markersReference;if(!e.length)return;const t=m()(this.refs.codeshellWrapper).codeshell("getEditor");e.forEach(e=>{t.removeLineWidget(e)}),t.refresh(),this.markersReference=[]}),l()(this,"onInputChange",(e,t)=>{"languageSelect"===e?this.setState({selectedLanguage:t.target.value}):"fileSelect"===e&&this.setState({selectedFile:t.target.files[0]})}),l()(this,"uploadSolution",()=>{const e=this.state,t=e.selectedLanguage,o=e.selectedFile;if(!o)return;const s=new FormData,i=m()(this.refs.codeshellWrapper);s.append("language",t||"auto-detect"),s.append("source_file",o),s.append("is_file_upload","1"),s.append("current_language",i.codeshell("getOptions").language),this.setState({uploadingSolution:!0,isUploadConfirmOpen:!1}),Object(U.h)({url:Object(w.e)("uploadCode"),data:s,success:e=>{if(this.setState({uploadingSolution:!1}),e.ok){const t=e.data,o=t.language,s=t.source;i.codeshell("getOptions").lang_display_mapping[o]?(i.codeshell("forkNewBuffer",{language:o,code:s}),this.setState({isUploadModalOpen:!1})):this.setState({uploadErr:"Language not supported for this challenge"})}else this.setState({uploadErr:e.message})}})}),l()(this,"toggleConfirmUpload",e=>{const t=e.target.checked;M.b.set("block_upload_file_confirm",t)}),l()(this,"onUploadConfirmClose",()=>{this.setState({isUploadConfirmOpen:!1})}),l()(this,"onUploadModalClose",()=>{this.setState({isUploadModalOpen:!1,selectedFile:void 0,selectedLanguage:"auto-detect"})}),l()(this,"onCompileTestClick",(e,t)=>{const o=this.props.onCompileTest;if(this.setState({submissionMsg:""}),!Object.keys(t).length)return;m()(this.refs.codeshellWrapper).codeshell("getOptions").language&&o(t)}),l()(this,"onSubmitCodeClick",(e,t)=>{const o=this.props,s=o.onSubmitCode,i=o.confirmSubmitCode;this.setState({submissionMsg:""}),!i||!0===M.b.get("confirm_submit_code")||this.allowSubmitCodeAction?(s(t),this.allowSubmitCodeAction=!1):this.setState({isSubmissionDialogOpen:!0})}),l()(this,"onSubmissionDialogClose",()=>{this.setState({isSubmissionDialogOpen:!1})}),l()(this,"onSubmissionConfirm",e=>{this.allowSubmitCodeAction=!0,this.setState({isSubmissionDialogOpen:!1}),this.triggerSubmission(e)}),l()(this,"saveSubmissionChoice",e=>{const t=e.target.checked;M.b.set("confirm_submit_code",t)}),l()(this,"triggerSubmission",e=>{e.preventDefault(),m()(this.refs.codeshellWrapper).find("button.bb-submit").click()}),l()(this,"triggerCompile",e=>{e.preventDefault(),m()(this.refs.codeshellWrapper).find("button.bb-compile").click()}),l()(this,"onAuth",()=>{const e=m()(this.refs.codeshellWrapper),t=this.state.authAction;setTimeout(()=>{"compile"===t?e.find("button.bb-compile").click():"submit"===t&&e.find("button.bb-submit").click()},0)}),l()(this,"onFocus",()=>{this.setState({isInFocus:!0})}),l()(this,"onBlur",()=>{this.setState({isInFocus:!1})}),this.state={submissionMsg:"",loadingEditor:!0,selectedLanguage:"auto-detect",isInFocus:!1},this.markersReference=[],this.allowSubmitCodeAction=!1}componentDidMount(){this.beforeLoadTimestamp=S()().valueOf(),this.loadModules()}componentDidUpdate(e,t){const o=this.props,s=o.compileTestBlocked,i=o.submitBlocked,a=o.errorMarkers,l=this.state.editorInitialized,n=m()(this.refs.codeshellWrapper);t.editorInitialized===l&&e.compileTestBlocked===s||n.find("button.bb-compile").prop("disabled",s),t.editorInitialized===l&&e.submitBlocked===i||n.find("button.bb-submit").prop("disabled",i),t.editorInitialized===l&&e.errorMarkers===a||(a?this.addMarkersOnSource(a):this.deleteMarkersOnSource()),this.manageEditorControlOptions()}componentWillUnmount(){this.$wrapper.codeshell("saveLangCode"),m()(this.refs.codeshellWrapper).off("click.codeshellEvent"),clearTimeout(this.compileTimeout),v.a.unbind(["alt","r"],this.triggerCompile),v.a.unbind(["alt","enter"],this.triggerSubmission),v.a.unbind(["alt","f"],this.fullscreen),v.a.unbind(["esc"],this.restoreFullscreen)}assignPluginEvents(){const e=m()(this.refs.codeshellWrapper);e.on("click.codeshellEvent","a.fullscreen",this.fullscreen),e.on("click.codeshellEvent","a.restorefullscreen",this.restoreFullscreen),e.on("click.codeshellEvent","button.upload_file",()=>{!0===M.b.get("block_upload_file_confirm")?this.setState({isUploadModalOpen:!0}):this.setState({isUploadConfirmOpen:!0})}),e.on("codeshellsubmit.codeshellEvent",this.onSubmitCodeClick),e.on("codeshellcompile.codeshellEvent",this.onCompileTestClick),v.a.bind(["alt","r"],this.triggerCompile),v.a.bind(["alt","enter"],this.triggerSubmission),v.a.bind(["alt","f"],this.fullscreen)}assignTooltips(){const e=m()(this.refs.codeshellWrapper);e.find("button.bb-compile").attr({"data-tip":"Alt/Option + R","data-for":"codeshellTooltip"}),e.find("button.bb-submit").attr({"data-tip":"Alt/Option + Enter","data-for":"codeshellTooltip"}),e.find(".fullscreen i").attr({"data-tip":"Alt/Option + F","data-for":"codeshellTooltip"}),g.a.rebuild()}loadModules(){const e=this.props,t=e.theme,s=(e.appUtil,[]);if("theme-m"===t){const e=new Promise((e,t)=>{(()=>{const s=t;o.e(68).then((t=>{e(o("4jsi").default)}).bind(null,o)).catch(s)})()});s.push(e)}s.push(Object(N.g)(this.props.appUtil)),Promise.all(s).then(()=>{this.setState({loadingEditor:!1},()=>{this.initializeEditor()})})}initializeEditor(){if(this.state.loadingEditor)return;const e=this.props,t=e.submission,o=e.onCodeChange,s=e.editorConfig,a=e.languageTemplate,l=e.disableLineWrapping,n=e.onEditorLoad,r=e.onLangChange,c=this.props.appUtil.assetPath,d={};t&&(d.initialCode=t.code,d.initialLanguage=t.language);const p=m()(this.refs.codeshellWrapper),u=i()({loadmode:(e,t)=>{r(t.lang),Object(L.d)(t.lang,c).finally(()=>{t.callback()})}},s);if(p.codeshell(u,a,d),this.$wrapper=p,l){p.codeshell("getEditor").setOption("lineWrapping",!1)}p.codeshell("onChange",o),this.assignPluginEvents(),this.setState({editorInitialized:!0}),this.afterLoadTimestamp=S()().valueOf();const h=this.afterLoadTimestamp-this.beforeLoadTimestamp;F.a.track("EditorLoadTime","",{attribute1:h,attribute2:"codeshell",attribute3:p.codeshell("getOptions").language}),n(p),this.manageEditorControlOptions()}manageEditorControlOptions(){const e=this.props.isFullScreen,t=m()(this.refs.codeshellWrapper),o=e?".fullscreen":".restorefullscreen",s=e?".restorefullscreen":".fullscreen";t.find(o).addClass("force-hide").removeClass("active-link"),t.find(s).removeClass("force-hide").addClass("active-link"),v.a[e?"bind":"unbind"](["esc"],this.restoreFullscreen)}addMarkersOnSource(e){if(!e)return;const t=m()(this.refs.codeshellWrapper).codeshell("getEditor"),o=t.lineCount(),s=e.markers;this.markersReference=[],s.forEach(e=>{const s=e.message,i=e.line_number;if(i<=o){const e=m()(`<div class="error-marker"><span class="error-marker-icon">!</span>${s}</div>`)[0],o=t.addLineWidget(i-1,e,{above:!0});this.markersReference.push(o)}}),s.length&&t.refresh()}renderUploadForm(){const e=this.state,t=e.uploadingSolution,o=e.uploadErr,s=e.selectedFile;return c.a.createElement("form",{className:"confirm-upload"},c.a.createElement("div",{className:"file-upload-wrapper mlB"},c.a.createElement("label",{className:"file-label"},"Source File"),c.a.createElement(W.a,{name:"source_file",onChange:this.onInputChange.bind(this,"fileSelect")})),c.a.createElement("div",{className:"file-upload-wrapper"},c.a.createElement("label",{className:"language-label"},"Language"),c.a.createElement("div",{className:"languages-wrapper"},c.a.createElement("select",{className:"select-language",name:"language",type:"select",onChange:this.onInputChange.bind(this,"languageSelect")},c.a.createElement("option",{value:"auto-detect"},"Auto Detect"),c.a.createElement("option",{value:"current-language"},"Current Language"),Object.keys(L.b).map(e=>c.a.createElement("option",{key:e,value:e},L.b[e]))))),o&&c.a.createElement("p",{className:"form-error"},o),c.a.createElement("div",{className:"clearfix"},c.a.createElement("div",{className:"pull-right"},c.a.createElement(E.d,{disabled:t||!s,onClick:this.uploadSolution,type:"button"},"Upload"))))}renderUploadConfirmForm(){const e=this.props.theme;return c.a.createElement(_.a,{theme:e,title:"Attn: Upload file",className:"codeeditor-modal",open:!0,onConfirm:()=>this.setState({isUploadModalOpen:!0,isUploadConfirmOpen:!1}),onCancel:this.onUploadConfirmClose,onClose:this.onUploadConfirmClose},c.a.createElement("p",null,"Uploading a file will replace the current content in your code editor. Would you like to continue?"),c.a.createElement("form",{className:"confirm-upload-form"},c.a.createElement("label",{className:"confirm-upload-label"},c.a.createElement("input",{type:"checkbox",className:"confirm-upload",onChange:this.toggleConfirmUpload}),"Skip this alert next time")))}renderSubmissionDialog(){const e=this.props.theme;return c.a.createElement(_.a,{theme:e,title:"Confirm Submission",className:"codeeditor-modal",open:!0,onConfirm:this.onSubmissionConfirm,onCancel:this.onSubmissionDialogClose,onClose:this.onSubmissionDialogClose},c.a.createElement("p",null,"Are you sure you want to submit this code?"),c.a.createElement("form",{className:"confirm-upload-form"},c.a.createElement("label",{className:"confirm-upload-label"},c.a.createElement("input",{id:"confirm-submit-checkbox",type:"checkbox",className:"confirm-upload",onChange:this.saveSubmissionChoice}),"Don't ask me again")))}render(){const e=this.props,t=e.className,o=e.theme,s=this.state,i=s.isUploadConfirmOpen,a=s.isUploadModalOpen,l=s.isSubmissionDialogOpen,n=s.submissionMsg,r=s.loadingEditor;return c.a.createElement("div",{className:b()("codeeditor-view",t,{"theme-m-section":"theme-m"===o}),onBlur:this.onBlur,onFocus:this.onFocus},c.a.createElement("div",{ref:"codeshellWrapper",id:"codeshell-wrapper"},r&&c.a.createElement("div",{className:"loading-editor text-center"},c.a.createElement(D.a,null))),c.a.createElement("div",{id:"submission-message"},n),i&&this.renderUploadConfirmForm(),l&&this.renderSubmissionDialog(),a&&c.a.createElement(k.a,{theme:o,title:"Upload Dialog",modalClass:"code-upload-modal",open:!0,onClose:this.onUploadModalClose},this.renderUploadForm()),c.a.createElement(g.a,{id:"codeshellTooltip",effect:"solid"}))}}l()(j,"propTypes",{onCompileTest:p.a.func,onSubmitCode:p.a.func.isRequired,confirmSubmitCode:p.a.bool,disableLineWrapping:p.a.bool,editorConfig:p.a.object.isRequired,languageTemplate:p.a.object,submission:p.a.object,loadingData:p.a.bool,toggleFullScreen:p.a.func,appUtil:p.a.object.isRequired,onCodeChange:p.a.func,compileTestBlocked:p.a.bool,submitBlocked:p.a.bool,errorMarkers:p.a.object,theme:p.a.string,onEditorLoad:p.a.func,onLangChange:p.a.func}),l()(j,"defaultProps",{confirmSubmitCode:!1,languageTemplate:{},onCodeChange:O.K,onEditorLoad:O.K,onLangChange:O.K,theme:"dark"});const y=j;j=Object(T.a)(j),t.default=j,Object(n.d)("codeshell_editor_theme_m.js")}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/66-06983dff.js.map