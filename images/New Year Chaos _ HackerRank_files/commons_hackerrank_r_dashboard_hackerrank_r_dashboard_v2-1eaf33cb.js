(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"9t4x":function(e,a,t){"use strict";var n=t("MVZn"),i=t.n(n),s=t("lSNA"),r=t.n(s),c=t("cDcd"),l=t.n(c),o=t("TSYQ"),d=t.n(o),m=t("5J+W"),u=t("17x9"),p=t.n(u),b=t("7lYa"),g=t("CFIE");function f(e){const a=e.badge,t=Object(g.i)(a);return l.a.createElement("div",{className:"skill-progress-bar"},l.a.createElement(b.a,{value:t,theme:"theme-m"}),l.a.createElement("div",{className:"progress-count text-content"},l.a.createElement("span",{className:"percentage"},t,"%"),l.a.createElement("span",{className:"points-left"},Object(g.a)(a,"dashboard"))))}f.propTypes={badge:p.a.object};var v=t("PsEu"),E=t("eUGL"),h=t("eOGF"),k=t("oBtd"),N=t("Z/B0");t("V9bm"),t("ndSB");class y extends c.PureComponent{constructor(){super(...arguments),r()(this,"sendMetrics",e=>{const a=this.props,t=a.track,n=a.position,s=t.type,r=t.slug,c=t.badge_type,l=t.level,o=t.stars,d=!!e.target.closest("button")?"button":"card";let m;m="badge"===s?{attribute1:c,attribute2:l,attribute3:o}:{attribute1:r},k.a.batch_track("Click","BadgeTrackResumePractice",i()({},m,{attribute4:d,attribute8:n}))})}getLink(){const e=this.props.track,a=e.type,t=e.slug,n=e.taxonomy;return e.slug===N.k.INTERVIEW_PREPARATION_KIT?"/interview/"+N.k.INTERVIEW_PREPARATION_KIT:"branding"===a?"/interview/"+t:"badge"===a?Object(g.e)(e):Object(h.a)(`/domains/${"tutorial"===n?"tutorials/":""}${t}`,{filters:{status:["unsolved"]}})}trackToBadgeConverter(e){const a=e.slug===N.k.INTERVIEW_PREPARATION_KIT;return i()({},e,{badge_type:e.slug,badge_name:e.name,stars:0,level:0,total_challenges:e.total_challenges||e.challenges_count,category_name:a?"Interview Preparation":e.category_name})}render(){const e=this.props,a=e.track,t=e.primary,n=e.className,i=e.appUtil,s=e.buttonText,r=void 0===s?"Continue Practice":s,c=a.type,o=this.getLink(),m=["track","branding"].includes(c)?this.trackToBadgeConverter(a):a,u=m.slug===N.k.INTERVIEW_PREPARATION_KIT;return l.a.createElement("div",{className:d()("skill-progress-card",n,{"interview-promotion-card":u})},l.a.createElement(E.a,{cardTitle:m.category_name,primaryCard:t,title:m.badge_name,detail:l.a.createElement(f,{badge:m}),buttonText:r,buttonClass:d()("ui-btn-large",t?"ui-btn-primary":"ui-btn-line-primary"),onClick:this.sendMetrics,link:o}),"badge"===m.type&&l.a.createElement("div",{className:"badge-wrap"},l.a.createElement(v.a,{badge:m,shadow:!0})),u&&l.a.createElement("div",{className:"interview-banner"},l.a.createElement("img",{className:"new-banner-svg",alt:"New",src:i.assetPath("svgs/new-banner.svg")})))}}y=Object(m.a)(y);a.a=y},L5Qz:function(e,a,t){"use strict";var n=t("J4zp"),i=t.n(n),s=t("cDcd"),r=t.n(s),c=t("17x9"),l=t.n(c),o=t("TSYQ"),d=t.n(o),m=t("YZNL"),u=t("OEX3"),p=t("5J+W");t("S7zJ");function b(e){const a=e.className,t=e.appUtil.assetPath,n=e.hideElement,c=e.sendVerification,l=e.sentStatus,o=e.isDisabled,p=e.sendingVerification,b=e.position,g=e.profile;if(n)return null;const f=Object(s.useState)(!1),v=i()(f,2),E=v[0],h=v[1],k=Object(s.useState)(0),N=i()(k,2),y=N[0],R=N[1];Object(s.useEffect)(()=>{h(o),R(o?120:0)},[o]),Object(s.useEffect)(()=>{if(!y)return void h(!1);const e=setInterval(()=>{R(y-1)},1e3);return()=>clearInterval(e)},[y]);const T=l?"svgs/mail-sent.svg":"svgs/mail-not-sent.svg";return r.a.createElement(m.a,{layer:-1,className:d()("email-verification-card",a,{"mail-sent":l})},r.a.createElement("img",{src:t(T),className:"email-verification-card-status",alt:l?"mail sent":"resend mail"}),r.a.createElement("div",{className:"email-verification-card-content"},r.a.createElement("h3",{className:"email-verification-card-title"},"Confirm your",r.a.createElement("span",{className:"email-verification-card-title-highlight"}," email address"),"."),r.a.createElement("p",{className:"email-verification-card-description"},"Please check your Inbox. We’ve sent a link to confirm your email address. Once you confirm, you will be able to access all the features of our site, including",r.a.createElement("span",{className:"email-verification-card-description-highlight"}," ","Jobs, Leaderboard, Recommendations and more"),"."),r.a.createElement("div",{className:"email-verification-card-btns"},l&&!p&&r.a.createElement("span",{className:"email-verification-card-message"},"Email Sent ",r.a.createElement("i",{className:"ui-icon-success"})),r.a.createElement(u.h,{className:"email-verification-card-cta",size:"large",loading:p,onClick:c,"data-analytics":"ResendConfirmationEmail","data-attr3":"card","data-attr8":b,disabled:E},function(e,a,t){return e?"Sending Confirmation Email":a?`Retry in ${t} seconds`:"Resend Confirmation Email"}(p,E,y))),E&&r.a.createElement("p",{className:"email-verification-card-error"},"* We have sent the confirmation link to ",g.email)))}b.PropTypes={className:l.a.string,appUtil:l.a.shape({assetPath:l.a.func.isRequired,isRouteActive:l.a.func.isRequired}),selfProfile:l.a.shape({showVerifiedBanner:l.a.bool,confirmed:l.a.bool}).isRequired,sentStatus:l.a.number,sendVerification:l.a.func.isRequired,sendingVerification:l.a.bool,hideElement:l.a.bool,position:l.a.number},a.a=Object(p.a)(b)},S7zJ:function(e,a,t){},V9bm:function(e,a,t){},ndSB:function(e,a,t){},v2uj:function(e,a,t){"use strict";var n=t("lSNA"),i=t.n(n),s=t("cDcd"),r=t.n(s),c=t("17x9"),l=t.n(c),o=t("TSYQ"),d=t.n(o),m=t("eUGL");class u extends s.PureComponent{getContent(){return this.props.hasRecent?"HackerRank offers a variety of skills for you to practice. Feel free to choose an additional programming language too.":"Explore and add your first skill to get started. HackerRank offers a variety of skills, tracks and tutorials for you to learn and improve."}render(){const e=this.props,a=e.text,t=e.hasRecent,n=e.className,i=e.position,s=this.getContent();return r.a.createElement("div",{className:d()("explore-skill-card",n)},r.a.createElement(m.a,{cardTitle:a,title:t?"Add another skill":"Add your first skill",detail:s,buttonText:"Explore Skills",buttonClass:"ui-btn-large ui-btn-line-primary",onClick:this.props.animateToSkills,"data-analytics":t?"AddAnotherSkill":"AddFirstSkill","data-attr8":i}))}}i()(u,"propTypes",{text:l.a.string.isRequired,hasRecent:l.a.bool.isRequired,animateToSkills:l.a.func.isRequired,position:l.a.number}),i()(u,"defaultProps",{text:"",hasRecent:!1}),a.a=u}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/commons~hackerrank_r_dashboard~hackerrank_r_dashboard_v2-1eaf33cb.js.map