(()=>{"use strict";var e={98:(e,r,t)=>{var s=t(751),i=t(641);function n(e,r,t,s,n,o){const a=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.Wv)(a)}const o={name:"App"};var a=t(262);const c=(0,a.A)(o,[["render",n]]),f=c;var u=t(220);const d=(0,u.aE)({history:(0,u.Bt)(),routes:[]}),v=d;var p=t(278);const l=(0,p.y$)({state:{initialUsers:[],friends:[]},mutations:{addUser(e,r){e.initialUsers.some((e=>e.id===r.id))||e.initialUsers.push(r)},removeUser(e,r){e.initialUsers=e.initialUsers.filter((e=>e.id!==r))},setFriends(e,r){e.friends=r}},actions:{async fetchFriends({state:e,commit:r}){const t=e.initialUsers.map((e=>e.id)).join(","),s=await fetch(`https://api.vk.com/method/friends.get?user_ids=${t}&fields=photo_50,sex,bdate&access_token=ВАШ_ТОКЕН&v=5.131`),i=await s.json();r("setFriends",i.response.items)}}});(0,s.Ef)(f).use(v).use(l).mount("#app")}},r={};function t(s){var i=r[s];if(void 0!==i)return i.exports;var n=r[s]={exports:{}};return e[s](n,n.exports,t),n.exports}t.m=e,(()=>{var e=[];t.O=(r,s,i,n)=>{if(!s){var o=1/0;for(u=0;u<e.length;u++){for(var[s,i,n]=e[u],a=!0,c=0;c<s.length;c++)(!1&n||o>=n)&&Object.keys(t.O).every((e=>t.O[e](s[c])))?s.splice(c--,1):(a=!1,n<o&&(o=n));if(a){e.splice(u--,1);var f=i();void 0!==f&&(r=f)}}return r}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[s,i,n]}})(),(()=>{t.d=(e,r)=>{for(var s in r)t.o(r,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:r[s]})}})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{var e={524:0};t.O.j=r=>0===e[r];var r=(r,s)=>{var i,n,[o,a,c]=s,f=0;if(o.some((r=>0!==e[r]))){for(i in a)t.o(a,i)&&(t.m[i]=a[i]);if(c)var u=c(t)}for(r&&r(s);f<o.length;f++)n=o[f],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(u)},s=self["webpackChunkvk_friends_spa"]=self["webpackChunkvk_friends_spa"]||[];s.forEach(r.bind(null,0)),s.push=r.bind(null,s.push.bind(s))})();var s=t.O(void 0,[504],(()=>t(98)));s=t.O(s)})();
//# sourceMappingURL=app.de483e9f.js.map