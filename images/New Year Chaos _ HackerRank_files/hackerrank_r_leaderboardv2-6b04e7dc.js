(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{Gwnu:function(e,a,t){"use strict";var n=t("cDcd"),l=t.n(n),o=t("17x9"),i=t.n(o),r=t("MGin"),c=t("TSYQ"),s=t.n(c),u=t("ANjH"),d=t("5J+W"),m=t("cK/l");t("JGr0");function p(e){const a=e.slug,t=e.linkText,n=e.icon,o=e.dataAttr,i=e.challenge,c=e.appUtil,u=c.params,d=u.challengeSlug,p=u.contestSlug,g=void 0===p?"master":p,h=c.isRouteActive,b=`${Object(m.f)(i)}/${a}`;return h(b)?null:l.a.createElement("div",{className:"link-wrapper"},l.a.createElement(r.Link,{to:b,"data-analytics":"ChallengeSidebarUI","data-attr1":o,"data-attr2":d,"data-attr3":g},l.a.createElement("i",{className:s()(n,"ui-icon-grey sidebar-icon")}),l.a.createElement("span",{className:"ui-icon-label"},t)))}const g=e=>{const a=e.challenge,t=e.challenge,n=t.custom_tabs,o=t.is_editorial_available,i=t.kind,r=e.appUtil.location.pathname.includes("/forum"),c="mcq"===i,s=!!(Array.isArray(n)?n.length:n);return!s&&!o&&c&&r?null:l.a.createElement("div",{className:"challenge-sidebar-help"},l.a.createElement("h2",{className:"text-sec-headline-s"},"Need Help?"),l.a.createElement("hr",{className:"hr-line-light"}),l.a.createElement("div",{className:"mlB"},!!s&&l.a.createElement(p,{slug:"tutorial",linkText:"View tutorial",icon:"ui-icon-tutorial",dataAttr:"tutorial",challenge:a}),l.a.createElement(p,{slug:"forum",linkText:"View discussions",icon:"ui-icon-discussion",dataAttr:"discussions",challenge:a}),o&&l.a.createElement(p,{slug:"editorial",linkText:"View editorial",icon:"ui-icon-editorial",dataAttr:"editorial",challenge:a}),!c&&l.a.createElement(p,{slug:"leaderboard",linkText:"View top submissions",icon:"ui-icon-trophy",dataAttr:"topscorers",challenge:a})))};p.propTypes={appUtil:i.a.object.isRequired,slug:i.a.string.isRequired,linkText:i.a.string.isRequired,icon:i.a.string.isRequired,dataAttr:i.a.string.isRequired,challenge:i.a.object.isRequired},g.propTypes={challenge:i.a.object.isRequired};p=Object(d.a)(p),a.a=Object(u.d)(d.a)(g)},JGr0:function(e,a,t){},Vspg:function(e,a,t){},Xdos:function(e,a,t){"use strict";t.r(a),t.d(a,"PureChallengeLeaderboard",(function(){return j}));t("CX2u");var n=t("lSNA"),l=t.n(n),o=t("cDcd"),i=t.n(o),r=t("17x9"),c=t.n(r),s=t("/MKj"),u=t("ANjH"),d=t("LPUq"),m=t("5J+W"),p=t("cK/l"),g=t("qePO"),h=t("LNHK"),b=t("z5MK"),f=t("ryrm"),E=t("lyz7"),N=t("cW2f"),k=t("9q+v"),v=t("Gwnu");class S extends i.a.Component{constructor(){super(),l()(this,"state",void 0),l()(this,"unlockSolution",()=>{this.props.appUtil.isAuthRequired({type:"info",data:"Please signup or login to unlock solutions."})||this.setState({isUnlockSolutionModalOpen:!0})}),l()(this,"closeUnlockSolutionModal",()=>{this.setState({isUnlockSolutionModalOpen:!1})}),l()(this,"triggerUnlockSolution",()=>{const e=this.props,a=e.challenge,t=e.challengeActions,n=a.slug,l=a.contest_slug;this.setState({unlockingSolution:!0}),t.unlockSolution({contestSlug:l,challengeSlug:n}).finally(()=>{this.setState({unlockingSolution:!1,isUnlockSolutionModalOpen:!1})})}),l()(this,"renderLeaderboard",()=>{const e=this.props,a=e.contest,t=e.challenge,n=e.leaderboard,l=e.profile,o=n.total,r=n.limit;return i.a.createElement("div",{className:"container panes-container"},i.a.createElement("div",{className:"left-pane"},i.a.createElement(b.b,null,i.a.createElement(b.b.Content,{className:"tab-content"},i.a.createElement(E.a,{contest:a,challenge:t,unlockSolution:this.unlockSolution,leaderboard:n,profile:l,leaderboardType:"ChallengeLeaderboard"}))),!!o&&i.a.createElement(N.a,{totalItems:o,itemPerPage:r,className:"leaderboard-pagination"})),i.a.createElement(d.a,null,i.a.createElement("aside",{className:"right-pane challenge-sidebar"},i.a.createElement(k.a,{leaderboard:n,availableFilters:["language","country","company","school"],filterLocation:"ChallengeLeaderboard"}),i.a.createElement(v.a,{challenge:t}))))}),this.state={}}render(){const e=this.state,a=e.isUnlockSolutionModalOpen,t=e.unlockingSolution;return i.a.createElement("div",{className:"challenge-leaderboard"},this.renderLeaderboard(),i.a.createElement(f.a,{className:"challenge-modal theme-m",title:"Confirmation",open:a,onConfirm:this.triggerUnlockSolution,onCancel:this.closeUnlockSolutionModal,onClose:this.closeUnlockSolutionModal,inProgress:t},i.a.createElement("p",null,"Do you want to unlock solutions? If you do, your score will not be counted toward your progress.")))}}l()(S,"propTypes",{contest:c.a.object.isRequired,challenge:c.a.object.isRequired,challengeActions:c.a.object.isRequired,leaderboard:c.a.object,appUtil:c.a.object.isRequired,profile:c.a.object.isRequired});const j=S;S=Object(s.c)((e,a)=>{const t=a.appUtil.params,n=t.contestSlug,l=void 0===n?"master":n,o=e.community.profile,i=Object(p.d)(e,t);return{challenge:i.detail,leaderboard:i.leaderboard,contest:Object(g.a)(l,e),profile:o}},e=>({challengeActions:Object(u.b)(h.a,e)}))(S),S=Object(m.a)(S),a.default=S},lrHr:function(e,a,t){"use strict";var n=t("pVnL"),l=t.n(n),o=t("QILm"),i=t.n(o),r=t("cDcd"),c=t.n(r),s=t("TSYQ"),u=t.n(s);t("oLQN");function d(e){const a=e.className,t=e.label,n=e.checked,o=e.error,r=e.variant,s=e.inputRef,d=i()(e,["className","label","checked","error","variant","inputRef"]),m=c.a.createElement("div",{className:"radio-wrap"},c.a.createElement("input",l()({type:"radio",className:"radio-input",checked:n,ref:s},d)),c.a.createElement("span",{className:u()("custom-holder",r,{error:o})}));return c.a.createElement("div",{className:u()("ui-radio",{checked:n},a)},t?c.a.createElement("label",{className:"label-wrap"},m,c.a.createElement("div",{className:"label"},t)):m)}d.defaultProps={variant:"inset"},a.a=d},o3IM:function(e,a,t){"use strict";var n=t("pVnL"),l=t.n(n),o=t("QILm"),i=t.n(o),r=t("cDcd"),c=t.n(r),s=t("TSYQ"),u=t.n(s);t("Vspg");function d(e){const a=e.text,t=e.onDelete,n=e.removable,o=e.size,r=e.className,s=i()(e,["text","onDelete","removable","size","className"]);return c.a.createElement("div",l()({className:u()("ui-tag",o,r)},s),c.a.createElement("span",{className:"tag-text ellipsis"},a),n&&c.a.createElement("span",{className:"delete",onClick:e=>{e.stopPropagation(),t(e)}},c.a.createElement("i",{className:"ui-icon-cross"})))}d.defaultProps={onDelete:function(){},removable:!0,size:"medium"},a.a=d},oLQN:function(e,a,t){},opUX:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));t("rGqo");var n=t("pVnL"),l=t.n(n),o=t("QILm"),i=t.n(o),r=t("cDcd"),c=t.n(r),s=t("MGin"),u=t("xxD/"),d=t("MdMq"),m=t("eOGF");function p(e){let a=e.location,t=e.pageParam,n=e.removeParams,o=i()(e,["location","pageParam","removeParams"]);const r=Object(m.t)(a),p=Number(r[t])||1;return c.a.createElement(u.a,l()({page:p},o,{renderItem:e=>{n.forEach(e=>{r[e]=void 0}),r[t]=e.goToPage;const o=Object(m.a)(a.pathname,r);return c.a.createElement(d.a,l()({renderElement:s.Link,to:o},e))}}))}p.defaultProps={pageParam:"page",removeParams:[]}}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/hackerrank_r_leaderboardv2-6b04e7dc.js.map