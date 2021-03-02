(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{"1fWO":function(e,t,a){},A47M:function(e,t,a){"use strict";a.r(t);var n=a("cDcd"),r=a.n(n),l=a("17x9"),i=a.n(l),s=a("rIx7");var c=function(){return r.a.createElement(s.a,{data:[{heading:"Learnings from 1000+ Companies",content:"We have carefully curated these challenges to help you prepare in the most comprehensive\n            way possible."},{heading:"Key Concepts",content:"Challenges are organised around core concepts commonly tested during Interviews."},{heading:"How to prepare",content:r.a.createElement(r.a.Fragment,null,"Try to solve as many challenges from this list as possible.",r.a.createElement("br",null),"If you are stuck, use the Discussion and Editorial sections for hints and solutions.")}]})},o=a("Jlkf"),u=a("iEEE");a("NJ2z");function d(e){const t=e.playlistSlug;return r.a.createElement(n.Fragment,null,r.a.createElement(c,null),r.a.createElement(o.default,{playlistSlug:t}),r.a.createElement(u.a,{featureId:3,align:"left",className:"feature-feedback-bottom-right-fixed",popoverClassName:"popover-bottom-right-fixed",coordinate:{right:"83px",bottom:"15px"},theme:"theme-m"}))}d.propTypes={playlistSlug:i.a.string};t.default=d},DC6x:function(e,t,a){"use strict";a.r(t),a.d(t,"makePlaylistChallengesProps",(function(){return j})),a.d(t,"mapDispatchToProps",(function(){return P}));var n=a("/MKj"),r=a("ANjH"),l=a("peh1"),i=a("J2m7"),s=a.n(i),c=a("Wt1U"),o=a.n(c),u=a("iGQG"),d=a("5J+W"),p=a("eOGF"),m=a("Z/B0"),b=a("cK/l"),y=a("LNHK"),f=a("rw7i"),h=a("zBd5");const g=e=>e.community.profile,v=Object(l.createSelector)([(e,t)=>t.appUtil.location],e=>Object(p.t)(e).filters),j=()=>Object(l.createSelector)([g,h.c,b.g,v],(function(e,t,a){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const r=t.challenges.map(e=>a[e]),l=Object(h.e)(r,n),i=s()(l,e=>!e.solved),c=o()(l,i);return{profile:e,firstUnsolvedChallenge:i,challenges:c,filters:n,totalChallenges:l.length,listType:m.b.PLAYLIST,currentPlaylist:t}})),P=e=>({challengeActions:Object(r.b)(y.a,e)});t.default=Object(r.d)(d.a,u.b,Object(n.c)(j(),P))(f.a)},Jlkf:function(e,t,a){"use strict";a.r(t);var n=a("w13Q"),r=a("cDcd"),l=a.n(r),i=a("17x9"),s=a.n(i),c=a("ANjH"),o=a("/MKj"),u=a("peh1"),d=a("UfWW"),p=a.n(d),m=a("Z/B0"),b=a("5J+W"),y=a("iGQG"),f=a("zBd5"),h=a("xaeT"),g=a("jx0p"),v=a("pVnL"),j=a.n(v),P=a("QILm"),E=a.n(P),N=a("KJde"),O=a.n(N),C=a("TSYQ"),_=a.n(C),k=a("eUGL");a("jV9d");function x(e){const t=e.playlist_count,a=e.videos_count,n=e.challenges_count,r=e.solved_count;return t?"View Details":a?"View":n===r?"Review Challenges":"See Challenges"}function T(e,t){const a=t.pathname,n=e.playlist_count,r=e.videos_count,l=e.slug;return n?`${a}/${l}`:r?`${a}/${l}/videos`:`${a}/${l}/challenges`}function w(e){const t=e.parentPlaylist,a=e.playlist,n=e.primary,r=e.className,i=e.appUtil,s=e.profile,c=E()(e,["parentPlaylist","playlist","primary","className","appUtil","profile"]),o=a.name,u=a.description,d=a.slug,p=a.challenges_count,m=void 0===p?0:p,b=a.solved_count,y=void 0===b?0:b,f=i.location,h=m&&m===y,g=l.a.createElement(O.a,{text:o,maxLine:"2",title:o,basedOn:"letters"}),v=l.a.createElement(O.a,{text:u,maxLine:"3",title:u,basedOn:"letters"}),P={"data-analytics":"PlaylistCardItem","data-attr1":d,"data-attr2":t.slug};return l.a.createElement("div",{className:_()("playlist-card",{"playlist-card__completed":h},r)},!!s.username&&!!m&&l.a.createElement("span",{className:"playlist-card-score text-content"},"(",y,"/",m,")"),l.a.createElement(k.a,j()({primaryCard:n,title:g,detail:v,link:T(a,f),buttonText:x(a),buttonClass:_()("playlist-card-btn",n?"ui-btn-primary":"ui-btn-line-primary")},P,c)))}w.propTypes={primary:s.a.bool,className:s.a.string,parentPlaylist:s.a.object.isRequired,playlist:s.a.shape({name:s.a.string.isRequired,slug:s.a.string.isRequired,description:s.a.string.isRequired,playlist_count:s.a.number.isRequired,videos_count:s.a.number.isRequired,challenges_count:s.a.number.isRequired,solved_count:s.a.number.isRequired}).isRequired,appUtil:s.a.object.isRequired,profile:s.a.object.isRequired},w.defaultProps={primary:!1};var R=Object(c.d)(b.a,Object(o.c)((function(e){return{profile:e.community.profile}})))(w);a("mNpf");a.d(t,"makeChildPlaylistsProps",(function(){return S})),a.d(t,"PurePlaylist",(function(){return L})),a.d(t,"PureLazyJobPromoCard",(function(){return q})),a.d(t,"LazyJobPromoCardWithProps",(function(){return J}));class q extends r.PureComponent{constructor(e){super(e),this.state={};const t=e.profile,a=e.abTest.isJobsPromoOnInterviewPrep;Object(h.w)(t)&&t.sourcing_jobs_consent&&a()&&this.loadJobPromoCard().then(e=>{this.setState({JobPromoCard:e})})}loadJobPromoCard(){return new Promise((e,t)=>{(()=>{const n=t;a.e(118).then((t=>{const n=a("HeyA").default;e(n)}).bind(null,a)).catch(n)})()})}render(){const e=this.state.JobPromoCard;if(!e)return null;return l.a.createElement(e,{fullWidth:!0,query:{h_referrer:"jobs_card",h_location:"interview_kit",h_version:"jobs_promotion"},"data-attr2":"interview_kit"})}}const J=Object(c.d)(y.b,g.a)(q);function L(e){const t=e.childPlaylists,a=e.currentPlaylist,n=e.playlistSlug,r=p()(t,e=>!e.videos_count),i=t.map((e,t)=>l.a.createElement(R,{key:t,primary:t===r,parentPlaylist:a,playlist:e}));return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"playlist d-flex flex-wrap"},i.slice(0,3),n===m.k.INTERVIEW_PREPARATION_KIT&&l.a.createElement(J,null),i.slice(3,t.length)))}L.propTypes={childPlaylists:s.a.array.isRequired,playlistSlug:s.a.string};const S=()=>Object(u.createSelector)([f.b,f.c],(e,t)=>{const a=t.playlists.reduce((t,a)=>(t.push(e[a]),t),[]);return{childPlaylists:Object(f.g)(a),currentPlaylist:t}});t.default=Object(c.d)(b.a,Object(o.c)(S()))(L);Object(n.d)("hackerrank_r_jobs_promo.js")},LsTn:function(e,t,a){"use strict";a.r(t),a.d(t,"PurePlaylistVideos",(function(){return m}));var n=a("cDcd"),r=a.n(n),l=a("17x9"),i=a.n(l),s=a("/MKj"),c=a("ANjH"),o=a("5J+W"),u=a("YZNL"),d=a("x2ze"),p=a("zBd5");a("1fWO");function m(e){let t=e.videos;return r.a.createElement("div",{className:"playlist-videos container"},r.a.createElement("div",{className:"videos-wrap"},t.map(e=>{let t=e.title,a=e.duration,n=e.youtube_id;return r.a.createElement(u.a,{key:n,layer:2,className:"video-tip-card"},r.a.createElement(d.a,{title:t,duration:a,youtubeId:n,analyticsKey:"PlaylistVideo"}),r.a.createElement("h3",{className:"video-title"},t))})))}m.propTypes={videos:i.a.arrayOf(i.a.object).isRequired},t.default=Object(c.d)(o.a,Object(s.c)((function(e,t){return{videos:Object(p.c)(e,t).videos}})))(m)},NJ2z:function(e,t,a){},Vo6j:function(e,t,a){},eUGL:function(e,t,a){"use strict";var n=a("pVnL"),r=a.n(n),l=(a("a1Th"),a("tUrg"),a("QILm")),i=a.n(l),s=a("cDcd"),c=a.n(s),o=a("17x9"),u=a.n(o),d=a("MGin"),p=a("TSYQ"),m=a.n(p),b=a("YZNL"),y=a("OEX3"),f=a("/n7Q");a("lWsk");function h(e){const t=e.className,a=e.cardTitle,n=e.title,l=e.detail,s=e.buttonText,o=e.buttonClass,u=e.buttonProps,p=e.primaryCard,f=e.link,h=e.id,g=i()(e,["className","cardTitle","title","detail","buttonText","buttonClass","buttonProps","primaryCard","link","id"]),v=h+"-link";return c.a.createElement("div",{className:m()("base-card",t),onClick:()=>{!window.getSelection().toString()&&document.querySelector(`[href="${f}"]`).click()}},c.a.createElement(b.a,{layer:p?3:2,active:!0,title:a},c.a.createElement("h3",{className:"base-card-title",title:n,id:h},s?n:c.a.createElement(d.Link,r()({to:f},g,{className:"base-card-title-link"}),n)),c.a.createElement("div",{className:"base-card-detail text-content"},l),s&&c.a.createElement(y.h,r()({role:"link","aria-labelledby":`${h} ${v}`,to:f},g,u,{className:o,id:v}),s)))}h.propTypes={className:u.a.string,cardTitle:u.a.string,title:u.a.oneOfType([u.a.string,u.a.element]).isRequired,detail:u.a.oneOfType([u.a.string,u.a.element]).isRequired,buttonText:u.a.string,buttonClass:u.a.string,primaryCard:u.a.bool,buttonProps:u.a.object,link:u.a.string,id:u.a.string.isRequired},h.defaultProps={buttonClass:"ui-btn-line-primary",buttonProps:{},primaryCard:!1},t.a=Object(f.b)("base-card")(h)},jV9d:function(e,t,a){},lWsk:function(e,t,a){},mNpf:function(e,t,a){},rIx7:function(e,t,a){"use strict";var n=a("cDcd"),r=a.n(n);a("Vo6j");t.a=function(e){let t=e.data;return r.a.createElement("section",{className:"info-banner",role:"banner"},r.a.createElement("div",{className:"container d-flex justify-content-between banner-wrapper"},t.map(e=>{let t=e.heading,a=e.content;return r.a.createElement("div",{className:"banner-block",key:t},r.a.createElement("h2",{className:"banner-heading"},t),r.a.createElement("p",{className:"banner-text"},a))})))}}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/hackerrank_r_interview-b85286a9.js.map