(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{"/m5R":function(e,t,s){"use strict";s.r(t),s.d(t,"PureOnboardingChallenge",(function(){return j}));var a=s("pVnL"),o=s.n(a),r=s("lSNA"),n=s.n(r),i=s("cDcd"),l=s.n(i),c=s("17x9"),h=s.n(c),d=s("faye"),g=s.n(d),u=s("TSYQ"),p=s.n(u),m=s("EVdn"),b=s.n(m),S=s("/MKj"),f=s("ANjH"),v=s("Q9J+"),E=s("laJX"),C=s("OEX3"),P=s("FGZ8"),w=s("EA6I"),N=s("5J+W"),T=s("fe33"),y=s("cK/l"),O=s("mo6X"),H=s("6acB"),I=s("PVW5"),k=s("gGYH"),M=s("ghgb"),D=s("J49V");s("OIJY"),s("YSU4");class A extends i.Component{constructor(){super(),n()(this,"editorNode",void 0),n()(this,"settingsNode",void 0),n()(this,"languageNode",void 0),n()(this,"hintNode",void 0),n()(this,"editorWrapper",void 0),n()(this,"state",void 0),n()(this,"rightPane",void 0),n()(this,"leftPane",void 0),n()(this,"splitInstance",void 0),n()(this,"compileTimeout",void 0),n()(this,"stopPoll",void 0),n()(this,"onCompileTest",e=>{this.clearCompileStates(),this.setState({submitInProgress:!0}),this.compileTimeout&&clearTimeout(this.compileTimeout),this.compileTestStatus(e)}),n()(this,"onSubmitCode",e=>{const t=this.props,s=t.challenge,a=t.submissionActions.submitChallenge,o=e.code,r=e.language;a({contestSlug:s.contest_slug,challengeSlug:s.slug,code:o,language:r}).then(e=>{e.status?this.pollSubmission(e.model.id):e.message&&this.setState({submitInProgress:!1,submissionError:e.message})},()=>{this.setState({submitInProgress:!1})})}),n()(this,"toggleFullScreen",e=>{e!==this.state.fullScreenMode&&this.setState({fullScreenMode:e},()=>{const t=this.leftPane,s=this.rightPane;e?(v.a.hideScrollBars(),this.splitInstance=Object(E.a)([t,s],{sizes:[50,50]})):this.splitInstance&&(v.a.showScrollBars(),this.splitInstance.destroy(),this.splitInstance=void 0)})}),n()(this,"toggleErrorDetails",()=>{this.setState({showErrorDetails:!this.state.showErrorDetails})}),n()(this,"triggerCompile",e=>{e&&e.preventDefault(),b()(this.rightPane).find("button.bb-compile").click()}),n()(this,"triggerSubmit",e=>{e&&e.preventDefault(),b()(this.rightPane).find("button.bb-submit").click()}),n()(this,"challengeHintEventHandler",e=>{this.setState({challengeHintOpen:!0,challengeHintTarget:e.currentTarget})}),n()(this,"onChallengeHintClose",()=>{this.setState({challengeHintOpen:!1})}),n()(this,"closePulse",()=>{this.setState({pulsatingNode:!1}),this.renderPulse()}),n()(this,"navigate",e=>{const t=this.props.appUtil,s=e.target.href,a=void 0===s?"/dashboard":s;e.preventDefault(),this.setState({navigatingTo:a}),this.markOnboardingDone().then(()=>{t.goto(a)})}),n()(this,"langChange",e=>{const t=this.props.challenge;t.onboarding[e]&&t.onboarding[e].hint&&this.setState({challengeHint:t.onboarding[e].hint,currentLanguage:e})}),n()(this,"setWrapper",e=>{this.editorWrapper=e,this.renderPulse()}),this.state={pulsatingNode:!0,fullScreenMode:!1,challengeHintOpen:!1,challengeHintTarget:void 0,challengeHint:"Type return a+b in the SolveMeFirst function"}}componentWillUnmount(){this.stopPoll&&this.stopPoll(),this.compileTimeout&&clearTimeout(this.compileTimeout)}markOnboardingDone(){return this.props.profileActions.updateProfile("me",{onboarding_status:"done"})}moveToAdditionalInfo(){return this.props.profileActions.updateProfile("me",{onboarding_status:"challengeDone"})}clearCompileStates(){this.setState({errorMarkers:void 0,submissionError:void 0,submitInProgress:!1,compileData:null,showErrorDetails:!1})}compileHasError(e){const t=e.error_markers,s=e.errors,a=e.status,o=e.testcase_status;return e.result||2===a||-1!==o.indexOf(0)||s||t&&t.markers}compileTestStatus(e,t){const s=this.props.challenge;Object(y.a)({challenge:s,codeshellData:e,compileId:t}).then(t=>{const s=t.model,a=s.error_markers,o=s.status,r=s.errors,n=s.id;a&&a.markers&&this.setState({errorMarkers:a}),2===o&&r?this.setState({submitInProgress:!1}):o>0?this.compileHasError(s)?this.setState({submitInProgress:!1,compileData:s}):this.triggerSubmit():this.compileTimeout=setTimeout(()=>{this.compileTestStatus(e,n)},1500)},()=>{this.setState({submitInProgress:!1})})}pollSubmission(e){const t=this.props,s=t.challenge,a=t.submissionActions,o=t.profileActions,r=s.contest_slug,n=s.slug;this.stopPoll=Object(I.j)({contestSlug:r,challengeSlug:n,submissionId:e,submissionActions:a,profileActions:o,postCompleteActions:!1,onComplete:()=>{this.clearCompileStates(),this.moveToAdditionalInfo(),this.setState({successfullSubmit:!0})}})}renderPulsePopup(e,t){const s=t.nodeName,a=t.message,o=t.showPulse,r=t.wrapperClass,n=t.placeholderSelector;let i=this[s];const c=l.a.createElement(P.a,{pulseDotProps:{"data-analytics":"OnboardingPluse","data-attr1":s},className:"dot",popupContent:a,showPulse:o,onPopupClose:this.closePulse,align:"bottom-right"});i||(i=b()(`<div class=${r}></div>`),e.find(n).append(i),this[s]=i),g.a.unstable_renderSubtreeIntoContainer(this,c,i[0])}renderPulse(){const e=this.state.currentLanguage,t=this.editorWrapper,s={nodeName:"editorNode",message:"This is your editor. You can code your solution here.",showPulse:this.state.pulsatingNode,wrapperClass:"pulse-wrapper-editor",placeholderSelector:".grey-header.fixed-hand0"};this.renderPulsePopup(t,s),this.renderPulsePopup(t,{nodeName:"settingsNode",message:"You can change the editor settings here",showPulse:!1,wrapperClass:"pulse-wrapper-settings",placeholderSelector:".settings-editor"}),this.renderPulsePopup(t,{nodeName:"languageNode",message:"You can choose your language here",showPulse:!1,wrapperClass:"pulse-wrapper-language",placeholderSelector:".lang-placeholder"});let a=this.hintNode;const o=l.a.createElement("span",{className:"ui-icon-bulb","data-analytics":"OnboardingChallengeShowHint","data-attr1":e,onClick:this.challengeHintEventHandler}," ");a||(a=b()('<div class="hint-wrapper"> </div>'),t.find("#codeeditor-statusbar").append(a),this.hintNode=a),g.a.unstable_renderSubtreeIntoContainer(this,o,a[0])}renderErrorMsg(){const e=this.state,t=e.compileData,s=e.submissionError,a=t||{},o=a.errors,r=a.result,n=a.testcase_status;return s?"There is some error while submitting code.":r?"Compile time error.":Array.isArray(n)&&-1!==n.indexOf(0)?"Your code did not pass the test case.":o&&o.length?"Codechecker error.":"There is some error with the code."}renderError(){const e=this.props.challenge,t=this.state,s=t.compileData,a=t.submissionError,o=t.showErrorDetails;if(s||a)return l.a.createElement("div",{className:"error-wrap"},l.a.createElement("div",{className:"short-message"},l.a.createElement("i",{className:"ui-icon-warning-hexagon error-warning"}),l.a.createElement("span",{className:"message-text"},this.renderErrorMsg()),l.a.createElement("span",{className:"toggle-error-detail",onClick:this.toggleErrorDetails,"data-analytics":"OnboardingErrorShowMore"},o?"Less":"More")),o&&s&&l.a.createElement(M.a,{compileData:s,challenge:e}),o&&a&&l.a.createElement("div",{className:"submission-error"},a))}renderSuccess(){const e=this.state.successfullSubmit,t=l.a.createElement("span",null,"You just solved your first challenge."),s=l.a.createElement(C.d,o()({role:"link"},{to:"/onboarding/info","data-analytics":"OnboardingInfoNav"}),"Continue");return l.a.createElement(D.a,{open:!!e,allowClose:!1,message:t,button:s,modalClass:"theme-m onboarding-success-modal",badge:{level:0,badge_type:"problem-solving",stars:1,badge_name:"Problem Solving"},analyticsKey:"OnboardingChallengeSolvedModal"})}renderEditor(){const e=this.props,t=e.challenge,s=e.profile,a=this.state,o=a.submitInProgress,r=a.errorMarkers,n=a.currentLanguage,i={languages:t.languages,dynamicMode:!0,initialLanguage:s.preferred_lang,showCustomInput:!1,showCompileTest:!0,showSubmit:!0,showFullScreen:!0,autoSaveNamespace:"hr-onboarding-challenge:"+t.id};return l.a.createElement("div",null,l.a.createElement("div",{className:"codeeditor-wrapper"},l.a.createElement(k.default,{editorConfig:i,languageTemplate:Object(O.a)(t),onCompileTest:this.onCompileTest,onSubmitCode:this.onSubmitCode,toggleFullScreen:this.toggleFullScreen,errorMarkers:r,theme:"theme-m",onEditorLoad:this.setWrapper,onLangChange:this.langChange}),this.renderError()),l.a.createElement("div",{className:"onboarding-btn-wrap"},l.a.createElement(C.d,{className:"run-btn","data-analytics":"OnboardingRunCode","data-attr1":n,color:"#FFFFFF",loading:o,onClick:this.triggerCompile},"Run Code")))}renderChallengeHint(){const e=this.state,t=e.challengeHintTarget,s=e.challengeHintOpen,a=e.challengeHint;return l.a.createElement(w.a,{className:"popover-challenge-hint",target:t,align:"left",popoverSpace:0,open:s,onClose:this.onChallengeHintClose,showTip:!1},l.a.createElement("div",{className:"popover-content"},a))}render(){const e=this.props,t=e.challenge,s=e.globalMessage,a=this.state.fullScreenMode,o=t.preferred_body_html||t.body_html;return l.a.createElement("div",{className:"onboarding-challenge-old container"},this.renderChallengeHint(),l.a.createElement("div",{className:p()("full-screen-split split-wrap",{"is-fullscreen":a})},l.a.createElement("section",{ref:e=>{this.leftPane=e},className:"problem-statement-container split"},l.a.createElement("div",{className:"problem-note-header"},"This is an introductory challenge to help you get familiar with the HackerRank coding environment."),l.a.createElement("div",{className:"problem-statement",dangerouslySetInnerHTML:{__html:o}})),l.a.createElement("section",{ref:e=>{this.rightPane=e},className:p()("code-editor-section split",{"move-down":!!s})},this.renderEditor()),this.renderSuccess()))}}n()(A,"propTypes",{profile:h.a.object.isRequired,challenge:h.a.object.isRequired,submissionActions:h.a.object.isRequired,profileActions:h.a.object.isRequired,globalMessage:h.a.string,appUtil:h.a.object});const j=A;A=Object(S.c)(e=>{const t={challengeSlug:"solve-me-first",contestSlug:"master"},s=e.community,a=s.globalMessage,o=s.profile;return{challenge:Object(y.d)(e,t).detail,profile:o,globalMessage:a}},e=>({submissionActions:Object(f.b)(H.a,e),profileActions:Object(f.b)(T.a,e)}))(A),A=Object(N.a)(A),t.default=A},YSU4:function(e,t,s){}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/hackerrank_r_onboarding_old-845bced9.js.map