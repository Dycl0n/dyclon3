"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[7379],{99668:(e,t,l)=>{l.d(t,{l:()=>S});var r=l(59496),s=l(55740),a=l(90633),i=l(53018),n=l(69285);const o={"custom-order":i.HI,title:{column:n.Q.TITLE,order:n.k.ASC},artist:{column:n.Q.TITLE,order:n.k.SECONDARY_ASC},"added-by":{column:n.Q.ADDED_BY,order:n.k.ASC},"added-at":{column:n.Q.ADDED_AT,order:n.k.ASC},duration:{column:n.Q.DURATION,order:n.k.ASC},album:{column:n.Q.ALBUM,order:n.k.ASC},"album-or-podcast":{column:n.Q.ALBUM_OR_PODCAST,order:n.k.ASC},"album-or-show":{column:n.Q.ALBUM_OR_SHOW,order:n.k.ASC}},u={title:n.Q.TITLE,artist:n.Q.TITLE,"added-by":n.Q.ADDED_BY,"added-at":n.Q.ADDED_AT,duration:n.Q.DURATION,album:n.Q.ALBUM,"album-or-podcast":n.Q.ALBUM_OR_PODCAST,"album-or-show":n.Q.ALBUM_OR_SHOW},d={[n.k.NONE]:n.k.NONE,[n.k.ASC]:n.k.DESC,[n.k.DESC]:n.k.ASC,[n.k.SECONDARY_ASC]:n.k.SECONDARY_DESC,[n.k.SECONDARY_DESC]:n.k.SECONDARY_ASC},c={[n.Q.INDEX]:{key:"custom-order",get value(){return s.ag.get("sort.custom-order")}},[n.Q.TITLE]:{key:"title",get value(){return s.ag.get("sort.title")}},[n.Q.ARTIST]:{key:"artist",get value(){return s.ag.get("sort.artist")}},[n.Q.ADDED_BY]:{key:"added-by",get value(){return s.ag.get("sort.added-by")}},[n.Q.ADDED_AT]:{key:"added-at",get value(){return s.ag.get("sort.date-added")}},[n.Q.DURATION]:{key:"duration",get value(){return s.ag.get("sort.duration")}},[n.Q.EVENT_DATE]:null,[n.Q.ALBUM]:{key:"album",get value(){return s.ag.get("sort.album")}},[n.Q.ALBUM_OR_PODCAST]:{key:"album-or-podcast",get value(){return s.ag.get("sort.album-or-podcast")}},[n.Q.ALBUM_OR_SHOW]:{key:"album-or-show",get value(){return s.ag.get("sort.album-or-show")}},[n.Q.PLAYS]:null,[n.Q.RELEASE_DATE]:null,[n.Q.ADD]:null,[n.Q.ACTIONS]:null};var g=l(99703),m=l(1789),x=l(4637);function A(e){return!!e}const S=({columns:e,disabled:t,onSort:l})=>{const S=[...e];S.splice(2,0,g.QD.ARTIST);const{sortState:k,setSortState:C}=(0,r.useContext)(i.Gb),h=function(e){return null===e.column?c[g.QD.INDEX]:(0,m.cB)(e.column,e.order)?c[g.QD.ARTIST]:c[e.column]}(k),D=(0,r.useCallback)((e=>{l?.(),C(((e,t,l)=>e?t!==u[e]||"artist"===e&&[n.k.ASC,n.k.DESC].includes(l)||"title"===e&&[n.k.SECONDARY_ASC,n.k.SECONDARY_DESC].includes(l)?o[e]:{column:u[e],order:d[l]}:i.HI)(e,k.column,k.order))}),[l,C,k.column,k.order]),b=(0,r.useCallback)((()=>null!==k.column),[k.column]),j=S.map((e=>c[e])).filter(A);return(0,x.jsx)(a.A,{options:j,onSelect:D,selected:h,isSelectionChanged:b,sortOrder:k.order,heading:s.ag.get("drop_down.sort_by"),disabled:t})}},42427:(e,t,l)=>{l.r(t),l.d(t,{default:()=>z});var r=l(59496),s=l(39871),a=l(1779),i=l(55740),n=l(57579),o=l(72962),u=l(85583),d=l(59476),c=l(86739),g=l(52535),m=l(17286),x=l(6123),A=l(1789),S=l(99668),k=l(9864),C=l(99703),h=l(53018),D=l(71597),b=l(95596),j=l(29609),y=l(15238),f=l(55207),E=l(4699),p=l(59642),T=l(91560),Q=l(2437),_=l(66275),I=l(47480),O=l(46061),v=l(39872),R=l(54204),P=l(4637);const N=r.memo((function({uri:e,uid:t,name:l,duration_ms:s,artists:a,album:n,is19PlusOnly:o,isExplicit:u,isPlayable:d,index:c,contextUri:g,imgUrl:m,usePlayContextItem:x}){const{filter:A}=(0,r.useContext)(k.fo),{isActive:S,isPlaying:C,triggerPlay:h,togglePlay:D}=x({uid:t,uri:e,index:c}),{badges:b,hasBadges:j}=(0,Q.r)({isExplicit:u}),y=a?.map((e=>e.name)).join(i.ag.getSeparator())||"";return(0,P.jsx)(T.ZP,{value:"row",index:c,children:(0,P.jsx)(E._,{menu:(0,P.jsx)(_.N,{uri:e,uid:t,contextUri:g}),children:(0,P.jsxs)(R.c,{uri:e,contextUri:g,isActive:S,index:c,onTriggerPlay:()=>{h()},ariaRowIndex:c+1,isPlayable:d,ageRestricted:o,dragMetadata:{name:l,createdBy:y},children:[(0,P.jsx)(O.Dd,{ariaColIndex:0,children:(0,P.jsx)(O.Du,{uri:e,playAriaLabel:i.ag.get("tracklist.a11y.play",l,y),isPlaying:C,isActive:S,onClick:()=>{D()},children:(0,P.jsx)(O.km,{children:c+1})})}),(0,P.jsxs)(O.vZ,{ariaColIndex:1,children:[(0,P.jsx)(O.lD,{src:m}),(0,P.jsxs)(O.vm,{children:[(0,P.jsx)(O.Wh,{titleText:l,children:(0,P.jsx)(I.o,{searchWords:[A],textToHighlight:l})}),j&&(0,P.jsx)(O.g3,{children:b.explicit?(0,P.jsx)(p.N,{}):null}),(0,P.jsx)(O.K9,{children:a&&(0,P.jsx)(v.o,{nonInteractive:!0,artists:a,filter:A})})]})]}),(0,P.jsx)(O.UA,{ariaColIndex:2,children:n?.name&&(0,P.jsx)(O.BM,{nonInteractive:!0,uri:n?.uri,name:n?.name,children:(0,P.jsx)(I.o,{searchWords:[A],textToHighlight:n?.name})})}),(0,P.jsxs)(O.mU,{ariaColIndex:3,children:[(0,P.jsx)(O.A$,{duration:s}),(0,P.jsx)(O.Zv,{menu:(0,P.jsx)(_.N,{uri:e,uid:t,contextUri:g}),label:i.ag.get("more.label.track",l,y)})]})]})})})}),((e,t)=>e.uri===t.uri&&e.index===t.index));var U=l(65391);const L=new Set(h.MI),B=r.memo((function({uri:e,tracks:t,columns:l,sortState:s,handleSort:a,usePlayContextItem:n,tracklistDomRef:o}){const u=(0,r.useRef)(null),d=(0,r.useCallback)(((t,l)=>{const r=(0,U.X)(t.album?.images,{desiredSize:40,desiredLabel:"small"});return(0,P.jsx)(N,{index:l,contextUri:e,uri:t.uri,uid:t.uid,isPlayable:t.isPlayable,duration_ms:t.duration.milliseconds,name:t.name,artists:t.artists,album:t.album||void 0,isExplicit:t.isExplicit,is19PlusOnly:t.is19PlusOnly,type:t.type,imgUrl:r?.url||"",usePlayContextItem:n},t.uid)}),[e,n]);return(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(T.ZP,{value:"playlist-tracklist",children:(0,P.jsx)(C.Pv,{ariaLabel:i.ag.get("local-files"),hasHeaderRow:!0,columns:l,sortableColumns:L,sortState:s,onSort:a,renderRow:d,resolveUri:e=>e.uri,resolveUid:e=>e.uid,tracks:t,nrTracks:t.length,limit:100,outerRef:u,outerDomRef:o},e)})})})),M="uCHqQ74vvHOnctGg0X0B",w="feuNq1FTxMbdeOTuFgpA",Y=[C.QD.INDEX,C.QD.TITLE,C.QD.ALBUM,C.QD.DURATION],H=()=>{const{filter:e}=(0,r.useContext)(k.fo),{sortState:t,setSortState:l}=(0,r.useContext)(h.Gb),C=(0,r.useContext)(j.t),E=(0,y.I)(),[p,T]=(0,r.useState)(),Q=(0,D.Y)(s.Fzl),_=(0,r.useRef)(null),I=(0,r.useCallback)((e=>{l((0,A.VK)(e,t))}),[t,l]),O=(0,r.useCallback)((async()=>{const l=await C.getTracks((0,A._j)(t),e);T(l)}),[C,t,e]);(0,r.useEffect)((()=>{O()}),[O]);const{isPlaying:v,togglePlay:R,usePlayContextItem:N}=(0,f.n)({uri:b.b,pages:[{items:(p??[]).map((e=>({...e,provider:null})))}]},{featureIdentifier:"local_files"});return p?e||p.length&&E?(0,P.jsxs)("div",{role:"presentation",className:M,children:[(0,P.jsxs)(u.gF,{backgroundColor:Q,children:[(0,P.jsxs)(d.W,{children:[(0,P.jsx)(x.$,{size:"md",onClick:()=>R(),isPlaying:v,uri:b.b}),(0,P.jsx)(c.i,{text:i.ag.get("local-files")})]}),(0,P.jsxs)(u.sP,{children:[(0,P.jsx)(u.xd,{children:i.ag.get("local-files")}),(0,P.jsx)(u.T0,{children:i.ag.get("local-files.description")})]})]}),(0,P.jsx)(n.o,{backgroundColor:Q,children:(0,P.jsxs)(n.F,{children:[(0,P.jsx)(x.$,{size:"lg",onClick:()=>R(),isPlaying:v,uri:b.b}),(0,P.jsxs)("div",{className:w,children:[(0,P.jsx)(r.Suspense,{fallback:null,children:(0,P.jsx)(g.K,{placeholder:i.ag.get("playlist.search_in_playlist"),clearOnEscapeInElementRef:_})}),(0,P.jsx)(S.l,{columns:h.MI})]})]})}),(0,P.jsx)("div",{className:"contentSpacing",children:(0,P.jsx)(B,{tracks:p,uri:b.b,columns:Y,handleSort:I,sortState:t,usePlayContextItem:N,tracklistDomRef:_})})]}):(0,P.jsx)(o.u,{linkTo:"/preferences",linkTitle:i.ag.get("local-files.empty-button"),message:i.ag.get("local-files.empty-description"),title:i.ag.get("local-files.empty-header"),children:(0,P.jsx)(a.Y,{iconSize:64,"aria-hidden":"true"})}):(0,P.jsx)(m.h,{hasError:!1,errorMessage:i.ag.get("error.request-artist-failure"),loadOffline:!0})},z=()=>(0,P.jsx)(h.kz,{uri:"spotify:internal:local-files",children:(0,P.jsx)(k.hz,{uri:"spotify:internal:local-files",children:(0,P.jsx)(H,{})})})}}]);
//# sourceMappingURL=xpui-routes-collection-local-files.js.map