(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{DNJ5:function(e,t,a){"use strict";var s=a("pVnL"),n=a.n(s),c=a("J4zp"),l=a.n(c),o=a("QILm"),r=a.n(o),m=a("cDcd"),i=a.n(m),u=a("MGin"),d=a("wd/R"),p=a.n(d),k=a("5J+W"),E=a("veGU"),N=a("YZNL"),g=a("OEX3"),v=a("IreD"),T=a("j//G"),h=a("/MKj"),b=a("f0wr"),w=a("5Rf8"),f=a("TSYQ"),S=a.n(f),R=a("2VWb"),y=a("iiin"),C=a("QU3h");a("l80c");var j=function(e){let t=e.onClose,a=e.imgProps,s=e.className,c=e.children,l=r()(e,["onClose","imgProps","className","children"]);const o=a.src,m=a.alt,u=a.className,d=r()(a,["src","alt","className"]);return i.a.createElement(R.a,n()({onClose:t,className:S()("graphic-modal",s)},l),i.a.createElement(y.a,{Icon:C.a,btnText:"Close",onClick:t,className:"graphic-modal-btn-close"}),i.a.createElement("div",{className:"graphic-modal-img-wrapper"},i.a.createElement("img",n()({src:o,alt:m||"",className:S()("graphic-modal-img",u)},d))),i.a.createElement("div",{className:"graphic-modal-content"},c))},O=a("PtY2");a("vZ6Y");var P=function(e){let t=e.children,a=e.Icon,s=void 0===a?O.a:a,n=e.className;return i.a.createElement("div",{className:"ui-note-wrapper"},i.a.createElement("p",{className:S()("ui-note",n)},i.a.createElement(s,{className:"ui-note-icon"}),i.a.createElement("span",{className:"ui-note-content"},t)))};a("RBRs");var M=Object(k.a)((function(e){let t=e.onClose,a=e.appUtil,s=e.mockTest;const n=Object(m.useState)("Preparing"),c=l()(n,2),o=c[0],r=c[1],u=Object(h.d)(),d=s.name,p=s.duration,k=s.total_questions,E=s.total_attempts,N=s.unique_id,g=s.testUrl,T=Object(v.e)(p);return Object(m.useEffect)(()=>{g?setTimeout(()=>{a.goto(g)},500):u(w.a.fetchMockTestInvite(N)).then(()=>{r("Redirecting")}).catch(()=>{new b.a({type:"error_strong",placement:"topCenter",message:"Something went wrong. Please try again."}).show(),t()})},[s]),i.a.createElement(j,{open:!0,onClose:t,imgProps:{src:a.assetPath("mock-tests/mock-test-prepare.svg")}},i.a.createElement("div",{className:"take-test-modal-wrapper theme-m"},i.a.createElement("h1",{className:"take-test-modal-heading"},o),i.a.createElement("h2",{className:"text-para-headline take-test-modal-subheading"},d),i.a.createElement("div",{className:"take-test-modal-content"},i.a.createElement("p",{className:"take-test-modal-text"},"Questions: ",i.a.createElement("strong",null,k)),i.a.createElement("p",{className:"take-test-modal-text"},"Test Time: ",i.a.createElement("strong",null,T)),i.a.createElement("p",{className:"take-test-modal-text"},"Total Attempts: ",i.a.createElement("strong",null,E))),i.a.createElement(P,{className:"take-test-modal-text-footer"},"You will be automatically redirected to your mock test once it’s ready.")))}));a("Twey");var I=Object(k.a)((function(e){const t=e.mockTestName,a=e.onClose,s=e.appUtil;return i.a.createElement(j,{open:!0,onClose:a,imgProps:{src:s.assetPath("mock-tests/mock-test-evaluating.svg")}},i.a.createElement("div",{className:"view-status-modal-wrapper theme-m"},i.a.createElement("h1",{className:"view-status-modal-heading"},"Evaluating"),i.a.createElement("h2",{className:"text-para-headline view-status-modal-subheading"},t),i.a.createElement("p",{className:"view-status-modal-text"},"We are evaluating your mock test submission. This might sometimes take up to 30 minutes. Your report will be available under the Past Mock Tests section.")))}));a("rlNo");function A(){return i.a.createElement(u.Link,{to:"/mock-tests","data-event-category":"HRC MockTests","data-event-label":"ViewAllMockTests","data-analytics":"ViewAllMockTests"},i.a.createElement(N.a,{className:"mock-test-promo-card",active:!0,layer:1},i.a.createElement("h2",{className:"mock-test-promo-title"},"View All Mock Tests"),i.a.createElement("p",{className:"mock-test-promo-description"},"Take the mock tests and analyze how you would perform in an actual interview"),i.a.createElement(g.f,{className:"mock-test-promo-cta"},"View Mock Tests"),i.a.createElement(E.a,{className:"mock-test-promo-icon","aria-hidden":"true",focusable:"false"})))}a.d(t,"a",(function(){return A}));t.b=Object(k.a)((function(e){const t=e.appUtil.isEmailVerificationRequired,a=e.position,s=e.mockTest,c=s.unique_id,o=s.duration,d=s.name,k=s.icon_url,E=s.total_attempts,h=s.total_questions,b=s.status,w=s.score,f=s.completed_at,S=s.report_url,R=r()(e,["appUtil","position","mockTest"]),y=Object(m.useState)(!1),C=l()(y,2),j=C[0],O=C[1],P=Object(m.useState)(!1),A=l()(P,2),D=A[0],V=A[1],_=Object(v.e)(o),Y=p()(f).format("MMM DD YYYY"),x=()=>{t({},{type:"info",data:"Please signup or login to take this test."})||O(!j)},G=()=>{V(!D)},U=[T.a.STARTED,T.a.PROCESSING].includes(b),L=b===T.a.PASSED,q=U||L,J={"data-event-category":"HRC MockTests","data-event-value":a,"data-cd-mock-test-id":c,"data-attr1":a,"data-attr2":c},Q=q?"RetakeMockTest":"TakeMockTest";return i.a.createElement(N.a,n()({className:"mock-test-card",layer:1},R),k&&i.a.createElement("img",{src:k,alt:"",className:"mock-test-logo"}),i.a.createElement("div",{className:"mock-test-details"},i.a.createElement("h3",{className:"mock-test-title"},d),i.a.createElement("div",{className:"mock-test-attempts"},L?i.a.createElement("span",null,"Score: ",i.a.createElement("strong",null,w,"%")):`(${E} Attempts)`)),i.a.createElement("div",{className:"mock-test-stats"},q?i.a.createElement("span",null,"Last Attempted on ",i.a.createElement("strong",null,Y)):i.a.createElement(m.Fragment,null,i.a.createElement("span",null,i.a.createElement("strong",null,h)," Questions"),", ",i.a.createElement("span",null,i.a.createElement("strong",null,_)))),i.a.createElement("div",{className:"mock-test-actions"},i.a.createElement(g.e,n()({onClick:x,className:"mock-test-cta",disabled:U},J,{"data-event-label":Q,"data-analytics":Q}),q?"Retake":"Take Test"),L&&i.a.createElement(u.Link,n()({className:"text-link mock-test-report-link",to:S,target:"_blank"},J,{"data-event-label":"ViewReport","data-analytics":"ViewReport"}),"View Report"),U&&i.a.createElement("button",n()({className:"btn-as-link text-link mock-test-status-btn",onClick:G},J,{"data-event-label":"ViewStatus","data-analytics":"ViewStatus"}),"View Status")),j&&i.a.createElement(M,{onClose:x,mockTest:e.mockTest}),D&&i.a.createElement(I,{onClose:G,mockTestName:d}))}))},RBRs:function(e,t,a){},Twey:function(e,t,a){},"j//G":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));const s={INITIATED:"initiated",STARTED:"started",PROCESSING:"test_finished",PASSED:"test_passed"}},l80c:function(e,t,a){},rlNo:function(e,t,a){},vKMH:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return r}));var s=a("peh1"),n=a("j//G");const c=Object(s.createSelector)([e=>e.community.mockTests],e=>{const t=e.testIds,a=e.tests;return t.map(e=>a[e])}),l=Object(s.createSelector)([c],e=>{const t=[void 0,n.a.INITIATED];return e.filter(e=>t.includes(e.status))}),o=Object(s.createSelector)([c],e=>{const t=[n.a.STARTED,n.a.PROCESSING,n.a.PASSED];return e.filter(e=>t.includes(e.status))}),r=Object(s.createSelector)([l,o],(e,t)=>[...e,...t].slice(0,2))},vZ6Y:function(e,t,a){}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/commons~hackerrank_r_dashboard~hackerrank_r_dashboard_v2~hackerrank_r_mock_tests-94cda847.js.map