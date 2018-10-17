(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){},104:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(29),c=a.n(s),o=a(109),i=a(2),l=a(3),u=a(5),p=a(4),m=a(6),h=a(111),d=a(35),g=(a(42),a(11)),f=a(15),v=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.placeholder,n=t.name,s=t.type,c=t.value;return r.a.createElement("div",{className:"field"},r.a.createElement("label",null,n),r.a.createElement("input",{type:s,name:n,placeholder:a,value:c,onChange:function(t){return e.props.onChange(t)}}))}}]),t}(r.a.Component),E=a(13),b=a.n(E),k=function e(){var t=this;Object(i.a)(this,e),this.signup=function(e,a){return t.service.post("/signup",{username:e,password:a}).then(function(e){return e}).catch(function(e){return e.response})},this.login=function(e,a){return t.service.post("/login",{username:e,password:a}).then(function(e){return e}).catch(function(e){return e.response})},this.loggedin=function(){return t.service.get("/currentUser").then(function(e){return e}).catch(function(e){return e.response})},this.logout=function(){return t.service.get("/logout").then(function(e){return e}).catch(function(e){return e.response})},this.service=b.a.create({baseURL:"http://best-of-me.herokuapp.com//auth/",withCredentials:!0})},j=a(110),O=a(30),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).onChangeHandler=function(e){console.log(e.target.value);var t=e.target,n=t.name,r=t.value;a.setState(Object(f.a)({},n,r))},a.logIn=function(e){e.preventDefault();var t=a.state,n=t.email,r=t.password;a.setState({message:""}),console.log(n,r,a.state),a.service.login(n,r).then(function(e){200===e.status?(console.log(e),console.log(a.props),a.props.setUser(e.data),a.setState({redirect:!0})):(console.log(e.status),a.setState({email:"",password:"",message:e.data.message}))}).catch(function(e){console.log(Object(g.a)({},e)),a.setState(Object(g.a)({},e.data))})},console.log(e),a.state={email:"",password:""},a.service=new k,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.props.currentUser?r.a.createElement(j.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("div",null,this.state.message),r.a.createElement(v,{type:"email",name:"email",placeholder:"Email",onChange:this.onChangeHandler,value:this.state.email}),r.a.createElement(v,{type:"password",name:"password",placeholder:"*********",onChange:this.onChangeHandler,value:this.state.password}),r.a.createElement("button",{onClick:function(t){return e.logIn(t)}},"Login"),r.a.createElement(O.a,{to:"/auth/signup"},"Sign up"))}}]),t}(r.a.Component),U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).onChangeHandler=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(f.a)({},n,r))},a.signUp=function(e){e.preventDefault();var t=a.state,n=t.email,r=t.password;a.setState({message:""}),a.service.signup(n,r).then(function(e){201===e.status?a.setState({redirect:!0}):(console.log(e.status),a.setState({email:"",password:"",message:e.data.message}))}).catch(function(e){console.log(Object(g.a)({},e)),a.setState(Object(g.a)({},e.data))})},a.state={email:"",password:""},a.service=new k,a.redirect=!1,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.state.redirect?r.a.createElement(j.a,{to:"/auth/login"}):r.a.createElement("div",null,r.a.createElement("div",null,this.state.message),r.a.createElement(v,{type:"email",name:"email",placeholder:"Email",onChange:this.onChangeHandler,value:this.state.email}),r.a.createElement(v,{type:"password",name:"password",placeholder:"*********",onChange:this.onChangeHandler,value:this.state.password}),r.a.createElement("button",{onClick:function(t){return e.signUp(t)}},"Signup"),r.a.createElement(O.a,{to:"/auth/login"},"Log in"))}}]),t}(r.a.Component),x=function(e){function t(e){var a;return Object(i.a)(this,t),a=Object(u.a)(this,Object(p.a)(t).call(this,e)),console.log(e),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,null,r.a.createElement(d.a,{path:"/auth/signup",component:U}),r.a.createElement(d.a,{path:"/auth/login",render:function(){return r.a.createElement(y,{currentUser:e.props.currentUser,setUser:e.props.setUser})}}),r.a.createElement(d.a,{component:function(){return r.a.createElement("div",null,"404")}})))}}]),t}(r.a.Component),w=(a(66),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"progress-bar"},r.a.createElement("div",{className:"filler",style:{width:"".concat(this.props.percentage,"%")}}))}}]),t}(r.a.Component)),C=(a(68),a(16)),S=a.n(C),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).completeTask=function(e){var t=a.props.currentUser;a.service.put("/users/".concat(t._id,"/tasks/random"),{index:e}).then(function(e){if(200!==e.status)return Promise.reject(e);a.props.history.replace("/"),a.props.setUser(e.data)}).catch(function(e){return console.log(e)})},a.state={loading:!0},a.service=b.a.create({baseURL:"http://best-of-me.herokuapp.com/",withCredentials:!0}),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"initTasks",value:function(){var e=this,t=this.props.currentUser;this.service.get("/tasks/random").then(function(a){if(200===a.status){var n=a.data.map(function(e){return e._id});return e.service.put("/users/".concat(t._id,"/tasks"),{tasks:n})}return Promise.reject(a)}).then(function(a){t.tasks=a.data.tasks.map(function(e){return e.data}),e.setState({currentUser:t,loading:!1})}).catch(function(e){return console.log(e.response)})}},{key:"componentDidMount",value:function(){0===this.props.currentUser.tasks.length&&this.initTasks()}},{key:"render",value:function(){var e=S.a.parse(this.props.location.search).index;void 0!==e&&this.completeTask(e);var t=this.props.currentUser,a=t.level,n=(t.experience,t.background),s=t.pet,c=t.accessory,o=(t.experienceNextLevel,this.props.currentUser.tasks);return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"background"},r.a.createElement("div",{className:"level"},r.a.createElement(w,{percentage:50}),r.a.createElement("div",null,"Level ",a)),n||"default"," background",r.a.createElement("div",{className:"pet"},s||"BoM",r.a.createElement("div",null,c||"with out")),r.a.createElement("ul",{className:"tasks"},o.map(function(e,t){return e?r.a.createElement("li",{key:t},r.a.createElement(O.a,{to:"/tasks/".concat(e._id,"?index=").concat(t),className:"Oval"},r.a.createElement("p",{className:"OvalText"},e.name))):r.a.createElement("li",{key:t},r.a.createElement("div",{className:"Oval"}," "))}))))}}]),t}(r.a.Component),T=function(e){return console.log(e.match.params),r.a.createElement("div",null,"Diary")},A=(a(76),function(e){var t=e.location.pathname;return console.log(t),r.a.createElement("header",null,r.a.createElement(O.a,{to:"/"===t?"/profile":"/"},"/"===t?"profile":"back"),"Header",Object({NODE_ENV:"production",PUBLIC_URL:"/client",REACT_APP_API_URL:"http://best-of-me.herokuapp.com/"}).REACT_APP_PRUEBA)}),L=a(31),_=a.n(L),H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).setSelection=function(e,t,n){var r=a.state.selections;console.log(r,t,n),r[t]=e,console.log(r),console.log(a.props.history),a.props.history.push(n),a.setState({selections:r})},a.state=Object(g.a)({},_.a,{selections:{feelings:null,situations:null,happenings:null}}),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;console.log(this.state);var t=this.state,a=t.feelings,n=t.situations,s=t.happenings,c=t.selections,o=t.advises,i=this.props.match.params.id,l=Object(g.a)({},a),u="How you feeling?",p="happenings";c.feelings&&(l=Object(g.a)({},s),u="What happend?",p="situations"),c.happenings&&(l=Object(g.a)({},n),u="Where tou are?",p="advises"),c.situations&&(l=Object(g.a)({},o),u="Advise:");var m=[];for(var h in console.log(l,this.state.selections),l)l[h].option=h,m.push(l[h]);return console.log(m,this.props.match,p),r.a.createElement("div",null,r.a.createElement("h1",null,u),r.a.createElement("ul",null,m.map(function(t){return r.a.createElement("li",{key:t.text,onClick:function(){return e.setSelection(t.option,i,p)}},r.a.createElement("img",{src:t.image,alt:t.text}),r.a.createElement("p",null,t.text))})))}}]),t}(r.a.Component),P=a(108),R=a(36),W=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.items.map(function(e){return r.a.createElement("div",{key:e.name},r.a.createElement("img",{src:e.image,alt:e.name}),r.a.createElement("ul",null,r.a.createElement("li",null,e.name),r.a.createElement("li",null,e.description),r.a.createElement("li",null,e.price," ",r.a.createElement("button",null,"Comprar"))))}))}}]),t}(r.a.Component),B=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).service=b.a.create({baseURL:"http://best-of-me.herokuapp.com/",withCredentials:!0}),e.state={page:"accessory",loading:!0},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.service("/items").then(function(t){console.log(t.data),e.setState({items:t.data,loading:!1})}).catch(function(e){return console.log(e.response)})}},{key:"render",value:function(){this.props.match.params.id;if(console.log(this.state.items),this.state.loading)return r.a.createElement("div",{className:this.state.loading&&"App-logo"},"Shop");var e={};this.state.items.forEach(function(t){e[t.type]||(e[t.type]=[]),e[t.type].push(t)});var t=Object.values(e).map(function(e){return r.a.createElement(d.a,{path:"/shop/".concat(e[0].type.toLowerCase()),render:function(){return r.a.createElement(W,{items:e})}})});return r.a.createElement("div",null,r.a.createElement(P.a,{to:"/shop/accessories"},"Accessories"),r.a.createElement(P.a,{to:"/shop/pets"},"Pets"),r.a.createElement(P.a,{to:"/shop/backgrounds"},"Backgrounds"),r.a.createElement(R.a,{resistance:!0,replace:!0,enableMouseEvents:!0},t))}}]),t}(r.a.Component),M=(a(98),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).changeTask=function(e){var t=a.state.index,n=a.props.currentUser;a.service.put("/users/".concat(n._id,"/tasks/").concat(e._id),{index:t}).then(function(r){200===r.status?(n.tasks[t]=e,a.props.setUser({currentUser:n}),a.props.history.go(-2)):Promise.reject(r)}).catch(function(e){return console.log(e.response.data)})},a.state={loading:!0,tasks:null,index:S.a.parse(e.location.search).index},a.service=b.a.create({baseURL:"http://best-of-me.herokuapp.com/",withCredentials:!0}),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.service.get("/tasks").then(function(t){e.setState({tasks:t.data,loading:!1})}).catch(function(e){return console.log(e.response)})}},{key:"render",value:function(){var e=this;if(this.state.loading)return r.a.createElement("div",null,"loading");var t=this.state.tasks;return r.a.createElement("ul",{className:"Tasks"},t.map(function(t){return r.a.createElement("li",null,r.a.createElement("details",null,r.a.createElement("summary",null,r.a.createElement("h2",null,t.name,r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"}))),r.a.createElement("p",null,"+",t.points," points")),r.a.createElement("p",null,t.description),r.a.createElement("button",{onClick:function(){return e.changeTask(t)}},"Chose task")))}))}}]),t}(r.a.Component)),D=(a(100),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).completeTask=function(){var e=a.state,t=e.task,n=e.index;a.setState({taskToChange:{task:t,index:n}})},a.state={loading:!0,task:null,taskToChange:null,redirect:null,index:S.a.parse(a.props.location.search).index},a.service=b.a.create({baseURL:"http://best-of-me.herokuapp.com/",withCredentials:!0}),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.location.pathname;this.service.get(t).then(function(t){e.setState({task:t.data[0],loading:!1})}).catch(function(e){return console.log(e.response)})}},{key:"render",value:function(){var e=this.state.taskToChange;if(e)return r.a.createElement(j.a,{to:{pathname:"/",state:{taskToChange:e}}});if(this.state.loading)return r.a.createElement("div",null,"loading");var t=this.state,a=t.task,n=t.index;return a._id?r.a.createElement("div",{className:"Tasks"},r.a.createElement("h2",null,a.name),r.a.createElement("p",null,"+",a.points," points"),r.a.createElement("p",null,a.description),r.a.createElement("button",{onClick:this.completeTask},"Complete"),r.a.createElement(O.a,{to:"/?index=".concat(n)},"Complete"),r.a.createElement(O.a,{to:"/tasks?index=".concat(n)},"change")):r.a.createElement("div",null,"Task not found")}}]),t}(r.a.Component)),I=(a(102),function(){return r.a.createElement("footer",null,r.a.createElement(P.a,{to:"/"},"Home"),r.a.createElement(P.a,{to:"/speedHelp/feelings"},"Speed Help"),r.a.createElement(P.a,{to:"/diary"},"Diary"),r.a.createElement(P.a,{to:"/shop/accessories"},"Shop"))}),z=function(e){var t=e.currentUser;return r.a.createElement("div",null,r.a.createElement("img",{src:t.image,alt:t.username}),r.a.createElement("p",null,t.username))},J=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).service=new k,console.log(e),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;if(this.props.currentUser){var t=this.props.currentUser;return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,{path:"/",component:A}),r.a.createElement(h.a,null,r.a.createElement(d.a,{path:"/",exact:!0,render:function(a){return r.a.createElement(N,Object.assign({},a,{currentUser:t,setUser:e.props.setUser}))}}),r.a.createElement(d.a,{path:"/speedHelp/:id?",component:H}),r.a.createElement(d.a,{path:"/diary/:id(\\w+)?/:id2(\\w+)?",component:T}),r.a.createElement(d.a,{path:"/shop/:id(\\w+)?",component:B}),r.a.createElement(d.a,{path:"/tasks/:id(\\w+)",render:function(a){return r.a.createElement(D,Object.assign({},a,{currentUser:t,setUser:e.props.setUser}))}}),r.a.createElement(d.a,{path:"/tasks",render:function(a){return r.a.createElement(M,Object.assign({},a,{currentUser:t,setUser:e.props.setUser}))}}),r.a.createElement(d.a,{path:"/profile",render:function(){return r.a.createElement(z,{currentUser:t})}}),r.a.createElement(d.a,{component:function(){return r.a.createElement("div",null,"404")}})),r.a.createElement(d.a,{path:"/",component:I}))}return r.a.createElement(j.a,{to:"/auth/login"})}}]),t}(r.a.Component),V=a(34),$=a.n(V),q=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).setUser=function(t){e.setState({currentUser:t})},e.getUser=function(t){e.service.loggedin().then(function(t){200===t.status?e.setState({currentUser:t.data,loading:!1}):e.setState({loading:!1})}).catch(function(e){return console.log(e)})},e.state={currentUser:null,loading:!0},e.service=new k,e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.getUser()}},{key:"render",value:function(){var e=this;return this.state.loading?r.a.createElement("img",{className:"App-logo",alt:"loading",src:$.a}):r.a.createElement(h.a,null,r.a.createElement(d.a,{path:"/auth",render:function(){return r.a.createElement(x,{className:"App",currentUser:e.state.currentUser,setUser:e.setUser})}}),r.a.createElement(d.a,{path:"/",render:function(){return r.a.createElement(J,{className:"App",currentUser:e.state.currentUser,setUser:e.setUser})}}))}}]),t}(n.Component);a(104),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},31:function(e,t){e.exports={feelings:{ansiedad:{text:"Anxiety",image:""},angustia:{text:"Anguish",image:""},ira:{text:"Wrath",image:""},tristeza:{text:"Sadness",image:""},nose:{text:"I do not have it clear",image:""}},situations:{trabajo:{text:"Work",image:""},paseo:{text:"Taking a walk",image:""},fiesta:{text:"Partying",image:""},estudio:{text:"studying",image:""},casa:{text:"At home",image:""},amigos:{text:"With friends",image:""}},happenings:{rechazo:{text:"Rejection",image:""},acoso:{text:"Bullying",image:""},discusion:{text:"Discussion",image:""},ruptura:{text:"Breaking off",image:""},nada:{text:"Nothing Special",image:""}},advises:{advise1:{title:"Sugerencia 1",text:"texto de la sugerencia1"},advise2:{title:"Sugerencia 2",text:"texto de la sugerencia2"},advise3:{title:"Sugerencia 3",text:"texto de la sugerencia3"},advise4:{title:"Sugerencia 4",text:"texto de la sugerencia4"},advise5:{title:"Sugerencia 5",text:"texto de la sugerencia5"}}}},34:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},37:function(e,t,a){e.exports=a(106)},42:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},76:function(e,t,a){},98:function(e,t,a){}},[[37,2,1]]]);
//# sourceMappingURL=main.7f38c749.chunk.js.map