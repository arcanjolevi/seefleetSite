(this.webpackJsonpseefleet=this.webpackJsonpseefleet||[]).push([[0],{13:function(e,t,c){},60:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){"use strict";c.r(t);var n=c(2),i=c.n(n),s=c(29),r=c.n(s),a=(c(13),c(60),c(19)),j=c.p+"static/media/logo-header.e4d97842.svg",o=c.p+"static/media/svg1.d936fc68.svg",l=c(99),d=c(36),b=c.n(d),u=c(53),O=c(10),h=c(32),x=c(30);c(65),c(66),c(67);x.a.initializeApp({apiKey:"AIzaSyCq1k8AWxZ4DSjHjnzsked8ejZBJinyoNA",authDomain:"seefleet.firebaseapp.com",projectId:"seefleet",storageBucket:"seefleet.appspot.com",messagingSenderId:"815101815772",appId:"1:815101815772:web:27e2ee02e42bfb6a5ffd19",measurementId:"G-4M2ZWS3T9V"});var g=x.a.auth(),f=c(9),A=c(54),v=c.n(A).a.create({baseURL:"https://see-fleet.herokuapp.com/"}),m=c(26),p=c(3),C=Object(n.createContext)({});function I(e){var t=Object(n.useState)(!1),c=Object(O.a)(t,2),i=c[0],s=c[1],r=Object(n.useState)({}),a=Object(O.a)(r,2),j=a[0],o=a[1],l=Object(f.f)();function d(){return(d=Object(u.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.auth().signOut();case 2:s(!1),m.b.success("Logout realizado"),l.push("/");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){var e=g.onAuthStateChanged((function(e){e&&(s(!0),o(e))}));return function(){e()}})),Object(p.jsxs)(C.Provider,{value:{user:j,isAuthenticated:i,signInWithGoogle:function(){var e=new h.a.auth.GoogleAuthProvider;h.a.auth().signInWithPopup(e).then((function(e){e.credential;var t=e.user;v.post("driver",{driverId:null===t||void 0===t?void 0:t.uid,driverName:null===t||void 0===t?void 0:t.displayName,driverPicture:null===t||void 0===t?void 0:t.photoURL}).then((function(e){m.b.success("Login realizado com sucesso"),console.log(e),s(!0),l.push("/")})).catch((function(e){m.b.success("Erro no login, tente novamente"),console.log(e)}))})).catch((function(e){e.code,e.message,e.email,e.credential}))},signOut:function(){return d.apply(this,arguments)}},children:[Object(p.jsx)(m.a,{}),e.children]})}function N(){var e=Object(n.useContext)(C).signInWithGoogle;return Object(p.jsxs)("div",{id:"login-container",children:[Object(p.jsx)(a.b,{to:"/",children:Object(p.jsx)(l.a,{})}),Object(p.jsx)("div",{id:"left-side",children:Object(p.jsx)("img",{src:j,alt:"seeFleetLogo"})}),Object(p.jsxs)("div",{id:"right-side",children:[Object(p.jsx)("img",{src:o,alt:"svg"}),Object(p.jsx)("h1",{children:"Bem Vindo/a!!"}),Object(p.jsx)("p",{children:"Fa\xe7a login para gerenciar sua frota de forma digital"}),Object(p.jsxs)("div",{onClick:e,id:"google-login",children:[Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATiSURBVHgB3VhdbFRFFD4zd3db1rbbarv8hbTREqRIYuiuJfaB3dJowMZYSvuAKIUa44sRoxKKYCEWISaIGl98QRILFipgTGxUpG0of4Va0pBCoalZK0X7v/13u3vneO7Wli29d/+6bgzfy8zd883MNzPnnnPuAvwPwSBM9Ly4LF52xqVJerZCIE8FEPMYsL8Zshsej+hZIMU1sbo6D4SBkER12zLikM/bDEwq5CBWIbBEPxMPIuAFlLHKnPJ4BauqkiFIBCWqPzfT5BH8TcbwHX9C/MABgn9orm04Egw5oKhOuyVbx+EoXU06zB0Omuf5lHNX7/gjcX/G3rWWXXrO6iMkSEEaXWlLr93yKoQjqifXUiaA7Yc5vAxqQIS7btSd98dRXbA317pTIByACIMEOYSQ7AvrrjggFFFd5EOMswsQ3CpO4lYj4l1E1gMMU+iqMwBhFc28KBxBCnS+D7U2m47x0YpAg2jBi7RweUpN40+0K1SjdOdYi8lQxhj5UQiCJqf3Qd9a61sUTD71NwC52Gk+++vHWmJmi7Nsl4Xuu2AFzRCFjWB0/RbXOlL5xBIxaFBnI2wz11z7Cv5jTL997n59kfSoa0nCtjtoWO4UDxLJb/ZFQ5CC6ZPy/KI/S/eRO/Xsujgfx84v9NoptrTPP9cYqVgVEN6TaquGGJKX5WuIye5iCa+1Cm6aAJRFGUQR3pOYqNFnMQFX1AjygKEjtnA0NdBE9oODLzAZ8iBMINMfrd1lbFD63pBAGT8ZNYK7lORuhiDA3NwKnL0BYUICuZOahkk9ikpkK7XIQohbEAUIxKVTfT65MMRqkbkEPRAFIArz9JqTv8C4FpkEmyEKYIy7wVeUxPF3TTLniyEKoHTUNtX3OrqMUgtn6lnjLzl2PeAE5Vn/aUUwgVSfB0g9NA1BzYLivpt4CX3VkJBg0CunNaPUve0xQemQFTo9seuaNp35EeaInPLBw1Tfb1ezIcp5tbtNPyh97/U9th6GaIvXfUnHxtOh2LkG/hRG4JzvhkgUe0x6ScuEHtEy1b8fnBicVJphoYMdw8/gF6MZvmOyM7/ZuAPmgJz9Q8XUpKkaEa/X7U1yzBKl5+6KNne8c4vTBvWuBbNOhb5kDlor87dCGLAdGKDanH2iZRecfeb7PC2K2WHklSHbIeW6tEBR/4jlxIaQ8qB93/AaLvS15OJJ6nOCQxa9P/v+NuNEMk8WmuglaiRqoIqgnXP84GrR6eNahNWn85e7Xfxtw1jm1tjuEh0Tj6gThXi3Zk/CIU1RCiwVG7JBx+ohKMdmHbSBZrrbm7SZXip7ExmHxdSuptFPTrG4JxmM90qBu5NnjFZOqcvtWHZz71MTfkV5hVUWvE9NOUQQjNwipj8fDIPP/SsIB5iQrTV7Etsf5EpqE9z79lb9ooIVSsC0QcRUucFjvEE1/jhI4xkUZsUWEqT61eT3iqzHN5Yix48gglBOyOBJLbm8+fAZLU5Av7FWFTwrZDjGtGJMaLjkFvB686ZTLf5Ifv9LUHCt8NSl+Na+peSUlB7wDwgP/eT8741xbg8kSEFIqSPzyzwjJhiKOGcv08AsWihei0ubcFKkbiLeCb0kfX25qGo82HXCzmfpn6+LMaUYn6a6J5lizUqGGEt1zhi9Oh3oYi0jLpfjdsn3w/Cw4B+/Xtg8rEJB4wAAAABJRU5ErkJggg==",alt:"googleIcon"}),Object(p.jsx)("h2",{children:"Entrar com o Google"})]})]})]})}c(90);var E=c.p+"static/media/Instagram.11f898b4.svg",U=c.p+"static/media/Linkedin.17efeff3.svg",k=c.p+"static/media/Facebook.5ed09535.svg";function B(){var e=Object(n.useContext)(C).isAuthenticated;return Object(p.jsxs)("div",{id:"home-container",children:[Object(p.jsxs)("header",{children:[Object(p.jsx)("img",{src:j,alt:"seeFleet"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(a.b,{to:"/",children:"Home"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:"N\xf3s"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:"Solu\xe7\xf5es"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:"Contato"})}),Object(p.jsx)("li",{className:"login-btn",children:Object(p.jsx)(a.b,{to:e?"/app":"/sign-in",children:e?"Gerenciar Frota":"Login"})}),Object(p.jsx)("li",{className:"social-icon",children:Object(p.jsx)("img",{src:E,alt:"Instagram"})}),Object(p.jsx)("li",{className:"social-icon",children:Object(p.jsx)("img",{src:k,alt:"Facebook"})}),Object(p.jsx)("li",{className:"social-icon",children:Object(p.jsx)("img",{src:U,alt:"Linkedin"})})]})]}),Object(p.jsx)("h1",{children:"GEST\xc3O DIGITAL DE FROTAS"}),Object(p.jsx)("div",{id:"saiba",children:Object(p.jsx)("h2",{children:"Saiba Mais"})})]})}var S=Object(n.createContext)({});function F(e){var t=Object(n.useState)("map"),c=Object(O.a)(t,2),i=c[0],s=c[1];return Object(p.jsx)(S.Provider,{value:{currentLayout:i,setCurrentLayout:s},children:e.children})}c(91);var w=c(100),X=c(101),L=c(102),R=c(103),z=c(104),Q=c(105),M=c(106),T=c(107),D=c(108),y=c(109),J=c(110),W=c(111),Y=c(112);function G(){var e=Object(n.useContext)(S),t=e.currentLayout,c=e.setCurrentLayout,i=Object(n.useContext)(C).signOut,s=Object(n.useState)(!1),r=Object(O.a)(s,2),a=r[0],o=r[1];return Object(p.jsx)("div",{id:"side-bar",className:a?"open":"close",children:Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{className:"list-item ".concat(a?"open":"close"),onClick:function(){o(!a)},children:[a?Object(p.jsx)(w.a,{}):Object(p.jsx)(X.a,{}),a?Object(p.jsx)("img",{id:"nav-logo",src:j,alt:"Logo"}):null]}),Object(p.jsxs)("li",{onClick:function(){return c("map")},className:"list-item ".concat("map"===t?"current":""," ").concat(a?"open":"close"),children:[Object(p.jsx)(L.a,{}),Object(p.jsx)("h2",{children:"Mapa"})]}),Object(p.jsxs)("li",{onClick:function(){return c("fleet")},className:"list-item ".concat("fleet"===t?"current":""," ").concat(a?"open":"close"),children:[Object(p.jsx)(R.a,{}),Object(p.jsx)("h2",{children:"Minha Frota"})]}),Object(p.jsxs)("li",{onClick:function(){return c("settings")},className:"list-item ".concat("settings"===t?"current":""," ").concat(a?"open":"close"),children:[Object(p.jsx)(z.a,{}),Object(p.jsx)("h2",{children:"Configura\xe7\xf5es"})]}),Object(p.jsxs)("li",{onClick:function(){return c("drivers")},className:"list-item ".concat("drivers"===t?"current":""," ").concat(a?"open":"close"),children:[Object(p.jsx)(Q.a,{}),Object(p.jsx)("h2",{children:"Motoristas"})]}),Object(p.jsxs)("li",{onClick:function(){return c("finances")},className:"list-item ".concat("finances"===t?"current":""," ").concat(a?"open":"close"),children:[Object(p.jsx)(M.a,{}),Object(p.jsx)("h2",{children:"Finan\xe7as"})]}),Object(p.jsxs)("li",{onClick:function(){return c("calls")},className:"list-item ".concat("calls"===t?"current":""," ").concat(a?"open":"close"),children:[Object(p.jsx)(T.a,{}),Object(p.jsx)("h2",{children:"Chamadas"})]}),Object(p.jsxs)("li",{onClick:function(){return c("filters")},className:"list-item ".concat("filters"===t?"current":""," ").concat(a?"open":"close"),children:[Object(p.jsx)(D.a,{}),Object(p.jsx)("h2",{children:"Filtros"})]}),Object(p.jsxs)("li",{onClick:function(){return c("estatistics")},className:"list-item ".concat("estatistics"===t?"current":""," ").concat(a?"open":"close"),children:[Object(p.jsx)(y.a,{}),Object(p.jsx)("h2",{children:"Estat\xedstica"})]}),Object(p.jsxs)("li",{onClick:function(){return c("routes")},className:"list-item ".concat("routes"===t?"current":""," ").concat(a?"open":"close"),children:[Object(p.jsx)(J.a,{}),Object(p.jsx)("h2",{children:"Rotas"})]}),Object(p.jsxs)("li",{onClick:function(){return c("checks")},className:"list-item ".concat("checks"===t?"current":""," ").concat(a?"open":"close"),children:[Object(p.jsx)(W.a,{}),Object(p.jsx)("h2",{children:"Check-Lists"})]}),Object(p.jsxs)("li",{onClick:i,className:"list-item ".concat(a?"open":"close"),children:[Object(p.jsx)(Y.a,{}),Object(p.jsx)("h2",{children:"Log out"})]})]})})}c(92);var K=c(113),V=c(116),P=c(114),q=c(20),H=c.n(q),Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAdCAYAAAAD8oRRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASnSURBVHgB1VhbTBxlFP5mdrgs11lCaIWKQy+mMWBIKUjSAtt4iUlNoNFGiT5sH/qgvkA0MT6YlvhQXwzlSUMfuj7YpNREeDCx+sCuQFwbKURr29haRkxbpBS2XLbrXub3/JPOsrvMSPfiNv2Szcw5859z9vznnO+fXQFxWHK1KnnQZvD/Qw0jdMDhnlaRBYjxgoSIgtyANit/dNXV3IgsQIoXBNjIKYvJ+Z1HIVQ+YWoYnfIictELoagU+d29SAXRq5OITHyjUERK5Lm+EvdPJ5EBEpJg0BSBUjEg7t4DG33MoC3cAigJFJVA2n8QKQWl9bbdTQiNnJLZwu3+NVdLebH7Qh/ShJgoCk8hR+CJ2D/4DNK+g7z2x6m1+pEmEpIQwBTkELxVl155G1eaXqX76p5VV8vUkqtRQYpIrkRWBi0VTE/9hveHJuF99nVIezoa+cCnmkhsAMzoVax9mga3xNRQW7gN6md9sMXaXUgX399YwadXwnixrhTvPZNHQ3+Rq/00n4dK3T97HsaHtH7D6TWxMNrs75s6YIEVI3Ba0Fb4JlWifm2G/KwaalmAOEoDP6yB/SkIwlSYhbxW50osiWR6zRUGFyrQUBjEC6WrG57Rt+nS2ZJuqM1Aw+8OI9yXnIy4bqApeAQYqpvFJzVzD7lacFEyM3S29MRr4/onfXr9ca0Ia5qI3IH1L7taugwpFjkTeh25V4Yb/+QjV/DRph2d3Xba6eySuRxfibTp9U2HH1VSBLnA3xEJH89VYS4syZqWf4zrdIolFjjGT008BvjlfiE+vLXVEP2CLVQnrrj2Oh+XBDh2FISwZb3qMkJ5isho4jcz5EOb28GltglLpvpiUcMJYjNOyXoyIpMF4t4pq3ngpTuzJONXunJwo9aSgD4D3Fm2YcTjJGFs2nba+c7yZdNzhKPEfUGgJFpMT7gvydmZRdnUkCdzonoOW/KyN8zDxHCn6OCzQmtxAB9tnd+g50mY9ghnAKsEjOf9dyqRLXDK/K8EjDWDdzeuuU/vfDwJNfnB4J31xYX2AjQ316O9vQmOirKYnreY0WaZYjApAauYI/4y05g0PUylmVDilb5AkX7lDt55txsVFeW63HnoeXz37QTOn5/QZX5SN9iDyAS8/3llDaQaM4qoTJUQR+Kdxjtsb98bc2bgpZf3wU47lbw2Xcwn+Ug1JgOTxbfUbR1W9FlTU2Wqr7bQp4PVpNjpxJT8wWhvmYhe4w2kWtKpk2gX8s2b89ixs3aD0dLisn69Fixw2yCm/QOf43KggNP714a8WczrwYIBiqn/OxJEod/h9vglj29YtfsSDTranpymOXGO/TCJ+oZdCeXlvbm4eE+/XwyJA3a3T0VmUDvaDnt4PC5sFvNuMHoyOaZg5tXpfENhUU2vBndW37ATDkc5Ll26hj+u/2WYur1jZ48gC3Duf83JBHHUkK1iCgx9nvGh48n2gqXjtsMueiU5bfpQYNOCGD7g8Qz7kSU8iMf/tpHNQ7IBz/i5HrNnNlhAnb08Xbe94QvGmIMyVUjFCVql3Rjwjp3rVtWrmXGrebyzD+LxRPjHD8Z89FvniGf8q8+tbP8FLJPUD3hpwiEAAAAASUVORK5CYII=",_=(c(93),Object(n.createContext)({}));function $(e){var t=Object(n.useState)(),c=Object(O.a)(t,2),i=(c[0],c[1],Object(n.useState)(15)),s=Object(O.a)(i,2),r=s[0],a=s[1],j=Object(n.useState)([]),o=Object(O.a)(j,2),l=o[0],d=o[1],b=Object(n.useState)([]),u=Object(O.a)(b,2),h=u[0],x=u[1],g=Object(n.useState)(),f=Object(O.a)(g,2),A=f[0],m=f[1];return Object(n.useEffect)((function(){v.get("all_last_coordinates").then((function(e){var t=e.data;d(t)})),v.get("all_drivers").then((function(e){var t=e.data;x(t)}))}),[]),Object(p.jsx)(_.Provider,{value:{cordOnFocus:A,setCordsOnFocus:function(e){console.log("oi");var t=l.filter((function(t){return t.driverId===e}));console.log(t[0].longitude),a(r+1),m(t[0])},cords:l,drivers:h,zoom:r},children:e.children})}function ee(){var e=Object(n.useContext)(_).cords,t=Object(n.useContext)(_),c=t.cordOnFocus;t.zoom;return Object(p.jsx)("div",{id:"map-cont",children:Object(p.jsxs)(K.a,{style:{width:"100%",height:"100%",zIndex:0},center:c?[c.latitude,c.longitude]:[-25.5415553,-54.5508768],zoom:15,scrollWheelZoom:!0,children:[Object(p.jsx)(V.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"}),e.map((function(e){return Object(p.jsx)(P.a,{icon:H.a.icon({iconUrl:Z,iconSize:[50,29]}),position:[e.latitude,e.longitude]},e.driverId)}))]})})}c(94);function te(){var e=Object(n.useState)(0),t=Object(O.a)(e,2),c=t[0],i=t[1],s=Object(n.useContext)(_),r=(s.cords,s.drivers);return Object(p.jsxs)("div",{id:"fleet-status-container",children:[Object(p.jsxs)("div",{id:"status-menu",children:[Object(p.jsx)("div",{onClick:function(){return i(0)},className:"status-menu-item ".concat(0===c?"clicked":""),children:Object(p.jsx)("h3",{children:"Ve\xedculos"})}),Object(p.jsx)("div",{onClick:function(){return i(1)},className:"status-menu-item ".concat(1===c?"clicked":""),children:Object(p.jsx)("h3",{children:"Mensagens"})})]}),Object(p.jsx)("div",{id:"content",children:0===c?Object(p.jsx)(ne,{content:r}):Object(p.jsx)(ce,{})})]})}function ce(){return Object(p.jsx)("ul",{id:"msg-list",children:Object(p.jsxs)("li",{children:[Object(p.jsx)("img",{src:"https://lh3.googleusercontent.com/a-/AOh14GiwlWQKHCsOvn5sAP98V_tADQHNMiGZe9j_D5pUCw=s96-c",alt:"profile"}),Object(p.jsxs)("div",{id:"msg-info1",children:[Object(p.jsx)("h3",{children:"Bruno Good"}),Object(p.jsx)("p",{children:"Boa tarde"})]}),Object(p.jsxs)("div",{id:"msg-info2",children:[Object(p.jsx)("p",{children:"14:30"}),Object(p.jsx)("div",{id:"msg-ball"})]})]})})}function ne(e){var t=e.content,c=Object(n.useContext)(_).setCordsOnFocus;return Object(p.jsx)("ul",{id:"vehicles-list",children:t.map((function(e){return Object(p.jsxs)("li",{onClick:function(){return c(e.driverId)},children:[Object(p.jsx)("img",{src:Z,alt:"carIcon"}),Object(p.jsxs)("div",{className:"text",children:[Object(p.jsx)("h4",{children:e.driverName}),Object(p.jsx)("p",{children:"\xdaltima atualiza\xe7\xe3o:"})]}),Object(p.jsx)("strong",{children:"90km/h"}),Object(p.jsx)("div",{className:"status-ball"})]},e.driverId)}))})}function ie(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"CheckLists"})})}function se(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"Drivers"})})}function re(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"Estatistics"})})}function ae(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"Filters"})})}function je(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"Finances"})})}function oe(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"Fleet"})})}function le(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"Routes"})})}function de(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"Settings"})})}function be(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"Calls"})})}var ue=c(115);c(95);function Oe(){var e,t=Object(n.useContext)(C).user;return Object(p.jsxs)("div",{id:"top-right-container",children:[Object(p.jsxs)("div",{id:"notications-icon",children:[Object(p.jsx)("div",{id:"notification-number",children:Object(p.jsx)("h3",{children:"12"})}),Object(p.jsx)(ue.a,{size:40,color:"#3F3D56"})]}),Object(p.jsx)("div",{id:"ball",children:Object(p.jsx)("img",{src:(e=t.photoURL,e||"https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"),alt:""})})]})}function he(e){switch(e){case"calls":return Object(p.jsx)(be,{});case"checks":return Object(p.jsx)(ie,{});case"drivers":return Object(p.jsx)(se,{});case"estatistics":return Object(p.jsx)(re,{});case"filters":return Object(p.jsx)(ae,{});case"finances":return Object(p.jsx)(je,{});case"fleet":return Object(p.jsx)(oe,{});case"map":return Object(p.jsx)(ee,{});case"routes":return Object(p.jsx)(le,{});case"settings":return Object(p.jsx)(de,{})}}function xe(){var e=Object(n.useContext)(S).currentLayout;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{id:"layout-screen-container",children:[Object(p.jsx)(G,{}),Object(p.jsx)(Oe,{}),he(e),Object(p.jsx)(te,{})]})})}function ge(){return Object(p.jsx)(F,{children:Object(p.jsx)($,{children:Object(p.jsxs)(f.c,{children:[Object(p.jsx)(f.a,{path:"/app",exact:!0,component:xe}),Object(p.jsx)(f.a,{path:"/",exact:!0,component:B})]})})})}function fe(){return Object(p.jsxs)(f.c,{children:[Object(p.jsx)(f.a,{path:"/sign-in",exact:!0,component:N}),";",Object(p.jsx)(f.a,{path:"/",exact:!0,component:B})]})}function Ae(){return Object(n.useContext)(C).isAuthenticated?Object(p.jsx)(ge,{}):Object(p.jsx)(fe,{})}var ve=function(){return Object(p.jsx)(a.a,{children:Object(p.jsx)(I,{children:Object(p.jsx)(Ae,{})})})};r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(ve,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.4e87aa83.chunk.js.map