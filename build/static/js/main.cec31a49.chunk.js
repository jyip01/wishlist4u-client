(this["webpackJsonpwishlist4u-client"]=this["webpackJsonpwishlist4u-client"]||[]).push([[0],{20:function(e,t,n){},23:function(e,t,n){e.exports=n(44)},28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(21),i=n.n(s),o=n(7),c=n(14),l=n(1),u=n(2),h=n(4),m=n(3),d=r.a.createContext({listWishList:[],error:null,setError:function(){},clearError:function(){},setListWishList:function(){},addList:function(){}}),p=d,f=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={listWishList:[],error:null},e.setListWishList=function(t){e.setState({listWishList:t})},e.setError=function(t){console.error(t),e.setState({error:t})},e.clearError=function(){e.setState({error:null})},e.addList=function(t){e.setListWishList([].concat(Object(c.a)(e.state.listWishList),[t]))},e}return Object(u.a)(n,[{key:"render",value:function(){var e={listWishList:this.state.listWishList,error:this.state.error,setError:this.setError,clearError:this.clearError,setListWishList:this.setListWishList,addList:this.addList};return r.a.createElement(d.Provider,{value:e},this.props.children)}}]),n}(a.Component),E={list_title:"",list_description:"",user:{}},v={wish_title:"",wish_url:"",user:{}},_=r.a.createContext({list:E,wishes:[v],error:null,setError:function(){},clearError:function(){},setList:function(){},clearList:function(){},setWishes:function(){},addWish:function(){},updateWish:function(){},deleteWish:function(){}}),g=_,L=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={list:E,wishes:[v],error:null},e.setError=function(t){console.error(t),e.setState({error:t})},e.clearError=function(){e.setState({error:null})},e.setList=function(t){e.setState({list:t})},e.setWishes=function(t){e.setState({wishes:t})},e.clearList=function(){e.setList(E),e.setWishes([])},e.addWish=function(t){e.setWishes([].concat(Object(c.a)(e.state.wishes),[t]))},e.updateWish=function(){},e.deleteWish=function(){},e}return Object(u.a)(n,[{key:"render",value:function(){var e={list:this.state.list,wishes:this.state.wishes,error:this.state.error,setError:this.setError,clearError:this.clearError,setList:this.setList,setWishes:this.setWishes,clearList:this.clearList,addWish:this.addWish,updateWish:this.updateWish,deleteWish:this.deleteWish};return r.a.createElement(_.Provider,{value:e},this.props.children)}}]),n}(a.Component),b=n(5),j=n(11);n(46),n(28);function y(){return r.a.createElement("span",{className:"Hyph"},"   -   ")}function w(e){var t=e.className,n=Object(j.a)(e,["className"]);return r.a.createElement("button",Object.assign({className:["Button",t].join(" ")},n))}function W(e){var t=e.className,n=Object(j.a)(e,["className"]);return r.a.createElement("input",Object.assign({className:["Input",t].join(" ")},n))}function O(e){var t=e.className,n=Object(j.a)(e,["className"]);return r.a.createElement("span",Object.assign({className:["Required",t].join(" ")},n),"*")}function N(e){var t=e.className,n=e.list,a=Object(j.a)(e,["className","list"]),s=["Section",n&&"Section--list",t].filter(Boolean).join(" ");return r.a.createElement("section",Object.assign({className:s},a))}var k="https://fierce-plains-04234.herokuapp.com/api",S="wishlist4u-client-auth-token",A=(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_KEY,{saveAuthToken:function(e){window.localStorage.setItem(S,e)},getAuthToken:function(){return window.localStorage.getItem(S)},clearAuthToken:function(){window.localStorage.removeItem(S)},hasAuthToken:function(){return!!A.getAuthToken()},makeBasicAuthToken:function(e,t){return window.btoa("".concat(e,":").concat(t))}}),T=A,F=(n(29),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleLogoutClick=function(){T.clearAuthToken()},e}return Object(u.a)(n,[{key:"renderLogoutLink",value:function(){return r.a.createElement("div",{className:"Header__logged-in"},r.a.createElement(o.b,{onClick:this.handleLogoutClick,to:"/"},"Logout"))}},{key:"renderLoginLink",value:function(){return r.a.createElement("div",{className:"Header__not-logged-in"},r.a.createElement(o.b,{to:"/register"},"Create an account"),r.a.createElement(y,null),r.a.createElement(o.b,{to:"/login"},"Log in"))}},{key:"render",value:function(){return r.a.createElement("nav",{className:"Header"},r.a.createElement("h1",null,r.a.createElement(o.b,{to:"/"},"WishList4U")),T.hasAuthToken()?this.renderLogoutLink():this.renderLoginLink())}}]),n}(a.Component));function P(e){var t=e.component,n=Object(j.a)(e,["component"]),a=t;return r.a.createElement(b.b,Object.assign({},n,{render:function(e){return T.hasAuthToken()?r.a.createElement(a,e):r.a.createElement(b.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}function x(e){var t=e.component,n=Object(j.a)(e,["component"]),a=t;return r.a.createElement(b.b,Object.assign({},n,{render:function(e){return T.hasAuthToken()?r.a.createElement(b.a,{to:"/"}):r.a.createElement(a,e)}}))}var C={getLists:function(){return fetch("".concat(k,"/lists"),{headers:{}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},postList:function(e,t){return fetch("".concat(k,"/lists"),{method:"POST",headers:{"content-type":"application/json",authorization:"bearer ".concat(T.getAuthToken())},body:JSON.stringify({list_title:e,list_description:t})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},getList:function(e){return fetch("".concat(k,"/lists/").concat(e),{headers:{authorization:"bearer ".concat(T.getAuthToken())}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},deleteList:function(e){return fetch("".concat(k,"/lists/").concat(e),{method:"DELETE",headers:{authorization:"bearer ".concat(T.getAuthToken())}}).then((function(e){return e.ok?e:e.json().then((function(e){return Promise.reject(e)}))}))},getWishLists:function(e){return fetch("".concat(k,"/lists/").concat(e,"/wishes"),{headers:{authorization:"bearer ".concat(T.getAuthToken())}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},postWish:function(e,t,n){return fetch("".concat(k,"/wishes"),{method:"POST",headers:{"content-type":"application/json",authorization:"bearer ".concat(T.getAuthToken())},body:JSON.stringify({list_id:e,wish_title:t,wish_url:n})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},editWish:function(e,t,n,a){return fetch("".concat(k,"/wishes/").concat(t),{method:"PATCH",headers:{"content-type":"application/json",authorization:"bearer ".concat(T.getAuthToken())},body:JSON.stringify({id:t,wish_title:n,wish_url:a,list_id:e})}).then((function(e){return e.ok?null:e.json().then((function(e){return Promise.reject(e)}))}))},deleteWish:function(e){return fetch("".concat(k,"/wishes/").concat(e),{method:"DELETE",headers:{authorization:"bearer ".concat(T.getAuthToken())}}).then((function(e){return e.ok?e:e.json().then((function(e){return Promise.reject(e)}))}))}},B=(n(35),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).deleteListButtonHandler=function(t){C.deleteList(t).then(e.props.onDelete)},e.renderDeleteButton=function(t){var n=e.props.list;return T.hasAuthToken()?r.a.createElement(w,{className:"Button__DeleteList",onClick:function(t){return e.deleteListButtonHandler(n.id)}},"Delete List"):r.a.createElement(r.a.Fragment,null," ")},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.list;return r.a.createElement("div",{className:"ListWishList__Container"},r.a.createElement(o.b,{to:"/list/".concat(e.id),className:"ListWishList"},r.a.createElement("header",{className:"ListWishList__header"},r.a.createElement("h2",{className:"ListWishList__heading"},e.list_title)),r.a.createElement("p",{className:"ListWishList__description"},e.list_description)),r.a.createElement(this.renderDeleteButton,null))}}]),n}(a.Component)),D=(n(36),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(t){t.preventDefault();var n=t.target,a=n.list_title,r=n.list_description;C.postList(a.value,r.value).then(e.context.addList).then((function(){r.value="",a.value=""})).then(e.props.addedList).catch(e.context.setError)},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{className:"ListForm",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"List_Title"},r.a.createElement("label",{htmlFor:"ListForm__list_title"},"List Title: ",r.a.createElement(O,null)),r.a.createElement(W,{name:"list_title",type:"text",required:!0,id:"ListForm__list_title"})),r.a.createElement("div",{className:"List_Description"},r.a.createElement("label",{htmlFor:"ListForm__list_description"},"Description:"),r.a.createElement(W,{name:"list_description",type:"text",id:"ListForm__list_description"})),r.a.createElement(w,{className:"Button__CreateList",type:"submit"},"Create New List"))}}]),n}(a.Component));D.contextType=p;n(37);var R=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={add:!1},e.landingPageLogin=function(){return T.hasAuthToken()?r.a.createElement(r.a.Fragment,null," "):r.a.createElement("div",{className:"WishListPage__Landing"},r.a.createElement("h2",{className:"WishListPage__Landing-header"},"Welcome to WishList4U"),r.a.createElement("p",null,"We've added some lists to get you started, before adding your own list or making new wishes, please Login or Create an Account."),r.a.createElement("p",null," If you're just here to demo the app please use the credentials below:"),r.a.createElement("ul",{className:"WishListPage__Landing-demo-credentials"},r.a.createElement("li",null,"User Name: Test_User"),r.a.createElement("li",null,"Password: P@ssword1")))},e.addListButtonHandler=function(){e.state.add?e.setState({add:!1}):e.setState({add:!0})},e.addedList=function(){e.setState({add:!1})},e.refreshLists=function(){C.getLists().then(e.context.setListWishList).catch(e.context.setError)},e.renderLists=function(){var t=e.context.listWishList;return(void 0===t?[]:t).map((function(t){return r.a.createElement(B,{onDelete:e.refreshLists,key:t.id,list:t})}))},e.renderAddButton=function(){return T.hasAuthToken()?r.a.createElement(w,{className:"Button__AddList",onClick:function(){return e.addListButtonHandler()}},"+ Add New List"):r.a.createElement("p",{className:"AddPlaceHolder"},"Please ",r.a.createElement(o.b,{className:"signinLink",to:"/login"},"login")," or ",r.a.createElement(o.b,{className:"signinLink",to:"/register"},"create an account")," to add a new list")},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.context.clearError(),C.getLists().then(this.context.setListWishList).catch(this.context.setError)}},{key:"render",value:function(){var e=this.context.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(this.landingPageLogin,null),r.a.createElement(N,{list:!0,className:"WishListPage"},e?r.a.createElement("p",{className:"red"},"There was an error, try again"):this.renderLists()),r.a.createElement(N,{className:"WishListPage__ButtonAndFormContainer"},r.a.createElement(this.renderAddButton,null),this.state.add?r.a.createElement(D,{addedList:this.addedList,addList:this.addListsButtonHandler}):null))}}]),n}(a.Component);R.contextType=p;n(20);var H=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(t){t.preventDefault();var n=e.context.list,a=t.target,r=a.wish_title,s=a.wish_url;C.postWish(n.id,r.value,s.value).then(e.context.addWish).then((function(){r.value="",s.value=""})).then(e.props.addWish).catch(e.context.setError)},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{className:"WishForm",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"wish_title"},r.a.createElement("label",{htmlFor:"WishForm__wish_title"},"Wish Title: ",r.a.createElement(O,null)),r.a.createElement(W,{name:"wish_title",type:"text",required:!0,id:"WishForm__wish_title"})),r.a.createElement("div",{className:"wish_url"},r.a.createElement("label",{htmlFor:"WishForm__wish_url"},"Wish URL:"),r.a.createElement(W,{name:"wish_url",type:"text",id:"WishForm__wish_url"})),r.a.createElement(w,{className:"Button__MakeNewWish",type:"submit"},"Make a wish"))}}]),n}(a.Component);H.contextType=g;var U=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={title:null,url:null},e.handleSubmit=function(t){t.preventDefault();var n=e.context.list,a=t.target,r=a.wish_title,s=a.wish_url;C.editWish(n.id,e.props.id,r.value,s.value).then((function(){return C.getWishLists(n.id).then(e.context.setWishes).then(e.props.edit).catch(e.context.setError)})).then((function(){e.setState({title:null})})).catch(e.context.setError)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"WishForm",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"wish_title"},r.a.createElement("label",{htmlFor:"WishForm__wish_title"},"Wish Title:"),r.a.createElement(W,{name:"wish_title",type:"text",required:!0,id:"WishForm__wish_title",value:null==this.state.title?this.props.title:this.state.title,onChange:function(t){return e.setState({title:t.target.value})}})),r.a.createElement("div",{className:"wish_url"},r.a.createElement("label",{htmlFor:"WishForm__wish_url"},"Wish URL:"),r.a.createElement(W,{name:"wish_url",type:"text",id:"WishForm__wish_url",value:null==this.state.url?this.props.url:this.state.url,onChange:function(t){return e.setState({url:t.target.value})}})),r.a.createElement(w,{className:"Button__ChangeWish",type:"submit"},"Change wish"))}}]),n}(a.Component);U.contextType=g;n(38);var I=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={edit:!1},e.editWishButtonHandler=function(){e.setState({edit:!1})},e.deleteWishButtonHandler=function(t){C.deleteWish(t).then(e.props.onDelete(t))},e}return Object(u.a)(n,[{key:"renderWish",value:function(){var e=this;return r.a.createElement("li",{className:"WishList__wish card"},this.state.edit?r.a.createElement(U,{id:this.props.id,title:this.props.title,url:this.props.url,edit:this.editWishButtonHandler}):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"WishList__wish_title title"},this.props.title),r.a.createElement("p",{className:"WishList__wish_url"},r.a.createElement("a",{href:this.props.url},this.props.url))),r.a.createElement(w,{className:"Button__EditWish",onClick:function(t){e.state.edit?e.setState({edit:!1}):e.setState({edit:!0})}},"Edit Wish"),r.a.createElement(w,{className:"Button__DeleteWish",onClick:function(t){return e.deleteWishButtonHandler(e.props.id)}},"- Delete Wish"))}},{key:"render",value:function(){return this.renderWish()}}]),n}(a.Component);I.contextType=g;n(39);var q=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={add:!1,reduce:!1},e.getList=function(){var t=e.props.match.params.listId;e.context.clearError(),C.getList(t).then(e.context.setList).catch(e.context.setError),C.getWishLists(t).then(e.context.setWishes).catch(e.context.setError)},e.addWishButtonHandler=function(){e.state.add?e.setState({add:!1}):e.setState({add:!0})},e.onDelete=function(t){e.getList()},e.WishLists=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;return r.a.createElement("ul",{className:"WishList__wishes"},t.map((function(t){return r.a.createElement(I,{onDelete:e.onDelete,listId:n,key:t.id+t.id,id:t.id,title:t.wish_title,url:t.wish_url})})))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getList()}},{key:"componentWillUnmount",value:function(){this.context.clearList()}},{key:"renderList",value:function(){var e=this,t=this.context,n=t.list,a=t.wishes;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,n.list_title),r.a.createElement("p",null,n.list_description),this.WishLists(a,n.id),r.a.createElement(w,{className:"Button__AddWish",onClick:function(){return e.addWishButtonHandler()}}," + Add New Wish "),this.state.add?r.a.createElement(H,{addWish:this.addWishButtonHandler}):null)}},{key:"render",value:function(){var e,t=this.context,n=t.error,a=t.list;return e=n?"List doesn't exist"===n.error?r.a.createElement("p",{className:"red"},"List not found"):r.a.createElement("p",{className:"red"}," There was an error "):a.id?this.renderList():r.a.createElement("div",{className:"loading"}),r.a.createElement(N,{className:"WishList"},e)}}]),n}(a.Component);q.defaultProps={match:{params:{}}},q.contextType=g;var J={postLogin:function(e){return fetch("".concat(k,"/auth/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},postUser:function(e){return fetch("".concat(k,"/users"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}},z=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={error:null},e.handleSubmitJwtAuth=function(t){t.preventDefault(),e.setState({error:null});var n=t.target,a=n.user_name,r=n.password;J.postLogin({user_name:a.value,password:r.value}).then((function(t){a.value="",r.value="",T.saveAuthToken(t.authToken),e.props.onLoginSuccess()})).catch((function(t){e.setState({error:t.error})}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{className:"LoginForm",onSubmit:this.handleSubmitJwtAuth},r.a.createElement("div",{role:"alert"},e&&r.a.createElement("p",{className:"red"},e)),r.a.createElement("div",{className:"user_name"},r.a.createElement("label",{htmlFor:"LoginForm__user_name"},"User Name"),r.a.createElement(W,{required:!0,name:"user_name",type:"text",id:"LoginForm__user_name"})),r.a.createElement("div",{className:"password"},r.a.createElement("label",{htmlFor:"LoginForm__password"},"Password"),r.a.createElement(W,{required:!0,name:"password",type:"password",id:"LoginForm__password"})),r.a.createElement(w,{type:"submit"},"Login"))}}]),n}(a.Component);z.defaultProps={onLoginSuccess:function(){}};n(40);var K=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleLoginSuccess=function(){var t=e.props,n=t.location,a=t.history,r=(n.state||{}).from||"/";a.push(r)},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(N,{className:"LoginPage"},r.a.createElement("h2",null,"Login"),r.a.createElement(z,{onLoginSuccess:this.handleLoginSuccess}))}}]),n}(a.Component);K.defaultProps={location:{},history:{push:function(){}}};var M=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={error:null},e.handleSubmit=function(t){t.preventDefault();var n=t.target,a=n.preferred_name,r=n.user_name,s=n.password;e.setState({error:null}),J.postUser({user_name:r.value,password:s.value,preferred_name:a.value}).then((function(t){a.value="",r.value="",s.value="",e.props.onRegistrationSuccess()})).catch((function(t){e.setState({error:t.error})}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{className:"RegistrationForm",onSubmit:this.handleSubmit},r.a.createElement("div",{role:"alert"},e&&r.a.createElement("p",{className:"red"},e)),r.a.createElement("div",{className:"preferred_name"},r.a.createElement("label",{htmlFor:"RegistrationForm__preferred_name"},"Preferred Name ",r.a.createElement(O,null)),r.a.createElement(W,{name:"preferred_name",type:"text",required:!0,id:"RegistrationForm__preferred_name"})),r.a.createElement("div",{className:"user_name"},r.a.createElement("label",{htmlFor:"RegistrationForm__user_name"},"User Name ",r.a.createElement(O,null)),r.a.createElement(W,{name:"user_name",type:"text",required:!0,id:"RegistrationForm__user_name"})),r.a.createElement("div",{className:"password"},r.a.createElement("label",{htmlFor:"RegistrationForm__password"},"Password ",r.a.createElement(O,null)),r.a.createElement(W,{name:"password",type:"password",required:!0,id:"RegistrationForm__password"})),r.a.createElement(w,{type:"submit"},"Register"))}}]),n}(a.Component);M.defaultProps={onRegistrationSuccess:function(){}};n(41);var V=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleRegistrationSuccess=function(t){e.props.history.push("/login")},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(N,{className:"RegistrationPage"},r.a.createElement("h2",null,"Register"),r.a.createElement(M,{onRegistrationSuccess:this.handleRegistrationSuccess}))}}]),n}(a.Component);V.defaultProps={history:{push:function(){}}};var Y=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(N,{className:"NotFoundPage"},r.a.createElement("h2",null,"404 - Page not found"),r.a.createElement("p",null,"Try going back to your previous page."))}}]),n}(a.Component),G=(n(42),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App__header"},r.a.createElement(b.b,{component:F})),r.a.createElement("main",{className:"App__main"},this.state.hasError&&r.a.createElement("p",{className:"red"},"There was an error! Oh no!"),r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/",component:R}),r.a.createElement(x,{path:"/login",component:K}),r.a.createElement(x,{path:"/register",component:V}),r.a.createElement(P,{path:"/list/:listId",component:q}),r.a.createElement(b.b,{component:Y}))))}}],[{key:"getDerivedStateFromError",value:function(e){return console.error(e),{hasError:!0}}}]),n}(a.Component));n(43);i.a.render(r.a.createElement(o.a,null,r.a.createElement(f,null,r.a.createElement(L,null,r.a.createElement(G,null)))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.cec31a49.chunk.js.map