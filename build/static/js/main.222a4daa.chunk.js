(this["webpackJsonpwould-you-rather"]=this["webpackJsonpwould-you-rather"]||[]).push([[0],Array(22).concat([function(e,t,a){e.exports=a.p+"static/media/avatar1.a442529d.svg"},function(e,t,a){e.exports=a.p+"static/media/avatar2.7f3eeb9d.svg"},function(e,t,a){e.exports=a.p+"static/media/avatar3.79c5652d.svg"},,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/avatar4.93b44984.svg"},function(e,t,a){e.exports=a.p+"static/media/avatar5.564fbbb9.svg"},function(e,t,a){e.exports=a.p+"static/media/404.e71d806c.svg"},,function(e,t,a){e.exports=a(68)},,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),s=a.n(o),c=a(16),i=a(3),u=a(6),l=a(17),m=a.n(l);function d(e){return{type:"SET_AUTHED_USER",authedUser:e}}var p=a(5),h=a(1),v=a(22),b=a.n(v),f=a(23),E=a.n(f),w=a(24),O=a.n(w),g={sarahedo:{id:"sarahedo",password:"sarahedo",name:"Sarah Edo",avatarURL:b.a,answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",password:"tylermcginnis",name:"Tyler McGinnis",avatarURL:E.a,answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",password:"johndoe",name:"John Doe",avatarURL:O.a,answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},j={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function y(e){var t=e.optionOneText,a=e.optionTwoText,n=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:n,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:a}}}function N(e){return Object.keys(g).includes(e)}function T(e,t,a,n){return function(r){if(r(function(e,t,a){return{type:"SAVE_QUESTION_ANSWER",authedUser:e,qid:t,answer:a}}(e,t,a)),N(n)&&N(e)&&(o=t,Object.keys(j).includes(o)))return function(e){var t=e.authedUser,a=e.qid,n=e.answer;return new Promise((function(e,r){setTimeout((function(){g=Object(h.a)(Object(h.a)({},g),{},Object(p.a)({},t,Object(h.a)(Object(h.a)({},g[t]),{},{answers:Object(h.a)(Object(h.a)({},g[t].answers),{},Object(p.a)({},a,n))}))),j=Object(h.a)(Object(h.a)({},j),{},Object(p.a)({},a,Object(h.a)(Object(h.a)({},j[a]),{},Object(p.a)({},n,Object(h.a)(Object(h.a)({},j[a][n]),{},{votes:j[a][n].votes.concat([t])}))))),e()}),500)}))}({authedUser:e,qid:t,answer:a});var o;console.log("It looks like the user or the question is not in the backend but still exists in the local storage. So, your answer is stored in local storage. Upon refresh, you might lose it.")}}function U(e,t,a){return function(n){var r;if(n({type:"ADD_QUESTION",formattedQuestion:y({optionOneText:e,optionTwoText:t,author:a})}),N(a))return r={optionOneText:e,optionTwoText:t,author:a},new Promise((function(e,t){var a=r.author,n=y(r);setTimeout((function(){j=Object(h.a)(Object(h.a)({},j),{},Object(p.a)({},n.id,n)),g=Object(h.a)(Object(h.a)({},g),{},Object(p.a)({},a,Object(h.a)(Object(h.a)({},g[a]),{},{questions:g[a].questions.concat([n.id])}))),e(n)}),1e3)}));console.log("There was a problem adding question to the backend, probably because the user is not in the backend while persisted in the local storage.")}}function q(e,t,a,n){return function(r){r(function(e,t,a,n){return{type:"ADD_USER",name:e,username:t,password:a,avatarURL:n}}(e,t,a,n))}}function x(e){return{type:"SET_CURRENT_TAB",currentTab:e}}var k=Object(c.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_USER":return Object(h.a)(Object(h.a)({},e),t.users);case"ADD_USER":return Object(h.a)(Object(h.a)({},e),{},Object(p.a)({},t.username,{id:t.username,password:t.password,name:t.name,avatarURL:t.avatarURL,answers:{},questions:[]}));case"SAVE_QUESTION_ANSWER":return Object(h.a)(Object(h.a)({},e),{},Object(p.a)({},t.authedUser,Object(h.a)(Object(h.a)({},e[t.authedUser]),{},{answers:Object(h.a)(Object(h.a)({},e[t.authedUser].answers),{},Object(p.a)({},t.qid,t.answer))})));case"ADD_QUESTION":return Object(h.a)(Object(h.a)({},e),{},Object(p.a)({},t.formattedQuestion.author,Object(h.a)(Object(h.a)({},e[t.formattedQuestion.author]),{},{questions:e[t.formattedQuestion.author].questions.concat([t.formattedQuestion.id])})));default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_QUESTIONS":return Object(h.a)(Object(h.a)({},e),t.questions);case"SAVE_QUESTION_ANSWER":return Object(h.a)(Object(h.a)({},e),{},Object(p.a)({},t.qid,Object(h.a)(Object(h.a)({},e[t.qid]),{},Object(p.a)({},t.answer,Object(h.a)(Object(h.a)({},e[t.qid][t.answer]),{},{votes:e[t.qid][t.answer].votes.concat([t.authedUser])})))));case"ADD_QUESTION":return Object(h.a)(Object(h.a)({},e),{},Object(p.a)({},t.formattedQuestion.id,t.formattedQuestion));default:return e}},authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"null",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTHED_USER":return t.authedUser;default:return e}},currentTab:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"null",t=arguments.length>1?arguments[1]:void 0;return"SET_CURRENT_TAB"===t.type?t.currentTab:e},loadingBar:l.loadingBarReducer}),S=a(33),R=Object(c.a)(S.a),I=a(10),C=a(11),P=a(13),A=a(12),L=a(4),Q=a(37);a(50);var _=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"would-you-rather-text"},"Would You Rather"),r.a.createElement(u.b,{to:"/user/signup/form"},r.a.createElement("button",{className:"landing-signup-button"},"Sign Up")),r.a.createElement("span",{className:"orText"},"OR"),r.a.createElement(u.b,{to:"/signin"},r.a.createElement("button",{className:"landing-signin-button"},"Sign In")))};a(52);var D=function(e){var t=e.label,a=e.inputName,n=e.onChange,o=e.value;return r.a.createElement("div",null,r.a.createElement("div",{className:"label"},t),"Password:"===t||"Repeat Password:"===t?r.a.createElement("input",{type:"password",value:o,onChange:function(e){return n(a,e.target.value)}}):r.a.createElement("input",{type:"text",value:o,onChange:function(e){return n(a,e.target.value)}}))},B=(a(53),a(34)),z=a.n(B),M=a(35),V=a.n(M),F=function(e){Object(P.a)(a,e);var t=Object(A.a)(a);function a(){var e;Object(I.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",username:"",password:"",repeatPassword:"",nonMatchingPasswords:!1,usernameTaken:!1,successfulAccount:!1,anyBlankField:!1},e.pickRandomAvatar=function(){var e=[b.a,E.a,O.a,z.a,V.a];return e[Math.floor(Math.random()*e.length)]},e.handleInput=function(t,a){switch(t){case"name":e.setState({name:a});break;case"username":e.setState({username:a});break;case"password":e.setState({password:a});break;case"repeatPassword":e.setState({repeatPassword:a})}},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.name,r=a.username,o=a.password,s=a.repeatPassword,c=e.props.users;if(n&&r&&o&&s)if(o!==s)e.setState({nonMatchingPasswords:!0,anyBlankField:!1,usernameTaken:!1,successfulAccount:!1,name:"",username:"",password:"",repeatPassword:""});else if(r in c)e.setState({usernameTaken:!0,nonMatchingPasswords:!1,successfulAccount:!1,anyBlankField:!1,name:"",username:"",password:"",repeatPassword:""});else{e.setState({successfulAccount:!0,usernameTaken:!1,nonMatchingPasswords:!1,anyBlankField:!1,name:"",username:"",password:"",repeatPassword:""});var i=e.pickRandomAvatar();e.props.dispatch(q(n,r,o,i))}else e.setState({anyBlankField:!0,nonMatchingPasswords:!1,usernameTaken:!1,successfulAccount:!1,name:"",username:"",password:"",repeatPassword:""})},e}return Object(C.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.username,n=e.password,o=e.repeatPassword,s=e.nonMatchingPasswords,c=e.usernameTaken,i=e.successfulAccount,l=e.anyBlankField;return r.a.createElement("div",{className:"signup-form-box"},r.a.createElement("div",{className:"name-input"},r.a.createElement(D,{label:"Name:",inputName:"name",onChange:this.handleInput,value:t})),r.a.createElement("div",{className:"username-input"},r.a.createElement(D,{label:"Username:",inputName:"username",onChange:this.handleInput,value:a})),r.a.createElement("div",{className:"password-input"},r.a.createElement(D,{label:"Password:",inputName:"password",onChange:this.handleInput,value:n})),r.a.createElement("div",{className:"repeat-password-input"},r.a.createElement(D,{label:"Repeat Password:",inputName:"repeatPassword",onChange:this.handleInput,value:o})),r.a.createElement("div",null,r.a.createElement("button",{className:"signup-signup-button",onClick:this.handleSubmit},"SIGN UP")),s&&r.a.createElement("p",{className:"account-creation-message"},"The passwords did not match. Please try again!"),c&&r.a.createElement("p",{className:"account-creation-message"},"The username is already taken. Please try another username!"),i&&r.a.createElement("p",{className:"account-creation-message"},"Account was created successfully. \xa0",r.a.createElement(u.b,{to:"/signin",style:{textDecoration:"none",color:"white"}},"Please click here to log in!")),l&&r.a.createElement("p",{className:"account-creation-message"},"You cannot leave any field blank. Please try again!"))}}]),a}(n.Component);var Y=Object(i.connect)((function(e){return{users:e.users}}))(F),W=(a(54),function(e){Object(P.a)(a,e);var t=Object(A.a)(a);function a(){var e;Object(I.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",incorrectCredentials:!1,anyBlankField:!1},e.handleInput=function(t,a){switch(t){case"username":e.setState({username:a});break;case"password":e.setState({password:a})}},e.handleSubmit=function(t){t.preventDefault();var a=e.props.match.params,n=a.param,r=a.param2,o=e.state,s=o.username,c=o.password,i=e.props.users;if(s&&c)if(i[s])if(i[s].password===c){switch(e.props.dispatch(d(s)),n){case"signin":case"questions":e.props.dispatch(x("home"));break;case"add":e.props.dispatch(x("newQuestion"));break;case"leaderboard":e.props.dispatch(x("leaderboard"));break;default:e.props.dispatch(x("home"))}"signin"===n?e.props.history.push("/questions"):void 0!==r?e.props.history.push("/".concat(n,"/").concat(r)):e.props.history.push("/".concat(n))}else e.setState({anyBlankField:!1,incorrectCredentials:!0,username:"",password:""});else e.setState({anyBlankField:!1,incorrectCredentials:!0,username:"",password:""});else e.setState({anyBlankField:!0,incorrectCredentials:!1,username:"",password:""})},e}return Object(C.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.anyBlankField,o=e.incorrectCredentials;return r.a.createElement("div",{className:"signin-form-box"},r.a.createElement("div",{className:"username-input"},r.a.createElement(D,{label:"Username:",inputName:"username",onChange:this.handleInput,value:t})),r.a.createElement("div",{className:"password-input"},r.a.createElement(D,{label:"Password:",inputName:"password",onChange:this.handleInput,value:a})),r.a.createElement("div",null,r.a.createElement("button",{className:"signin-signin-button",onClick:this.handleSubmit},"SIGN IN")),n&&r.a.createElement("p",{className:"account-creation-message"},"You cannot leave any field blank. Please try again!"),o&&r.a.createElement("p",{className:"account-creation-message"},"Either the username or password is incorrect. Please try again!"))}}]),a}(n.Component));var G=Object(i.connect)((function(e){return{users:e.users}}))(W),J=(a(55),function(e){Object(P.a)(a,e);var t=Object(A.a)(a);function a(){var e;Object(I.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleInput=function(t,a){e.setState(Object(p.a)({},t,a))},e.handleSubmit=function(t){t.preventDefault();var a=e.props.authedUser,n=e.state,r=n.optionOne,o=n.optionTwo;r&&o?(e.props.dispatch(U(r,o,a)),e.props.dispatch(x("home")),e.props.history.push("/questions")):alert("You cannot leave any field blank. Please fill both!"),e.setState({optionOne:"",optionTwo:""})},e}return Object(C.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"new-question-container"},r.a.createElement("div",{className:"new-question-title"},"Would You Rather"),r.a.createElement("input",{type:"text",placeholder:"Type your option one here...",className:"new-question-input",onChange:function(t){return e.handleInput("optionOne",t.target.value)},value:this.state.optionOne||""}),r.a.createElement("div",{className:"new-question-ortext"},"OR"),r.a.createElement("input",{type:"text",placeholder:"Type your option two here...",className:"new-question-input",onChange:function(t){return e.handleInput("optionTwo",t.target.value)},value:this.state.optionTwo||""}),r.a.createElement("div",{className:"submit-btn-container"},r.a.createElement("button",{type:"submit",className:"new-question-submit",onClick:this.handleSubmit},"SUBMIT")))}}]),a}(n.Component));var H=Object(i.connect)((function(e){return{authedUser:e.authedUser}}))(J);a(56);var $=function(e){var t=e.name,a=e.avatarURL,n=e.answersNumber,o=e.questionsNumber,s=e.score;return r.a.createElement("div",{className:"leadercard-row"},r.a.createElement("div",{className:"leadercard-column leader-avatar"},r.a.createElement("img",{src:a,alt:"User avatar",width:"91",height:"91"}),r.a.createElement("h1",null,t)),r.a.createElement("div",{className:"leadercard-column leader-numbers"},r.a.createElement("div",null,n),r.a.createElement("p",null,"Answered Questions"),r.a.createElement("div",null,o),r.a.createElement("p",null,"Created Questions")),r.a.createElement("div",{className:"leadercard-column leader-score"},r.a.createElement("div",{className:"scorecard"},r.a.createElement("h5",null,"Score"),r.a.createElement("h1",null,s))))};a(57);var K=Object(i.connect)((function(e){return{users:e.users}}))((function(e){var t=function(){var t=e.users,a=[];return Object.keys(t).forEach((function(e){var n=t[e],r=n.name,o=n.avatarURL,s=Object.keys(n.answers).length,c=n.questions.length,i=s+c;a.push({name:r,avatarURL:o,answersNumber:s,questionsNumber:c,score:i})})),a.sort((function(e,t){return t.score-e.score})),a}();return r.a.createElement("div",{className:"leadercards-container"},r.a.createElement("div",{className:"leadercard-container"},t.map((function(e,t){return r.a.createElement($,{name:e.name,avatarURL:e.avatarURL,answersNumber:e.answersNumber,questionsNumber:e.questionsNumber,score:e.score,key:t})}))))}));a(58),a(59);var X=function(e){var t=e.author,a=e.avatarURL;return r.a.createElement("div",{className:"avatar-container"},r.a.createElement("img",{src:a,alt:"User Avatar",width:"80",height:"80"}),r.a.createElement("div",null,t))};var Z=Object(i.connect)((function(e,t){var a=e.questions,n=e.users,r=e.authedUser,o=t.question_id,s=n[a[o].author];return{name:s.name,avatarURL:s.avatarURL,optionOneText:a[o].optionOne.text,optionOneVotesNumber:a[o].optionOne.votes.length,optionTwoText:a[o].optionTwo.text,optionTwoVotesNumber:a[o].optionTwo.votes.length,votedOption:n[r].answers[o]}}))((function(e){var t=e.name,a=e.avatarURL,n=e.optionOneText,o=e.optionOneVotesNumber,s=e.optionTwoText,c=e.optionTwoVotesNumber,i=e.votedOption,u=o+c,l=Math.round(o/u*100),m=Math.round(c/u*100);return r.a.createElement("div",{className:"results-row"},r.a.createElement("div",{className:"results-column results-left"},r.a.createElement(X,{author:t,avatarURL:a})),r.a.createElement("div",{className:"results-column results-right"},r.a.createElement("div",{className:"results-card-title"},"Results"),r.a.createElement("div",{className:"option-one-result-container",style:"optionOne"===i?{background:"#3473df"}:{background:"#30444e"}},"optionOne"===i&&r.a.createElement("div",{className:"badge"},"Your Vote"),r.a.createElement("p",{className:"answer-text"},n),r.a.createElement("div",{className:"progress-bar-container"},r.a.createElement("div",{className:"progress-bar",style:{width:"".concat(l,"%")}})),r.a.createElement("div",{className:"vote-count-container"},r.a.createElement("p",{className:"votes-count"},o," out of ",u," votes"),r.a.createElement("p",{className:"percentage"},l,"%"))),r.a.createElement("div",{className:"option-two-result-container",style:"optionTwo"===i?{background:"#3473df"}:{background:"#30444e"}},"optionTwo"===i&&r.a.createElement("div",{className:"badge"},"Your Vote"),r.a.createElement("p",{className:"answer-text"},s),r.a.createElement("div",{className:"progress-bar-container"},r.a.createElement("div",{className:"progress-bar",style:{width:"".concat(m,"%")}})),r.a.createElement("div",{className:"vote-count-container"},r.a.createElement("p",{className:"votes-count"},c," out of ",u," votes"),r.a.createElement("p",{className:"percentage"},m,"%")))))})),ee=(a(60),function(e){Object(P.a)(a,e);var t=Object(A.a)(a);function a(){var e;Object(I.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={vote:""},e.handleSubmit=function(t){t.preventDefault();var a=e.props,n=a.authedUser,r=a.question_id,o=a.author,s=e.state.vote;""===s?alert("You cannot leave it blank. Please choose one option!"):e.props.dispatch(T(n,r,s,o))},e}return Object(C.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.name,n=t.avatarURL,o=t.optionOneText,s=t.optionTwoText;return r.a.createElement("div",{className:"qcard-row"},r.a.createElement("div",{className:"qcard-column qcard-left"},r.a.createElement(X,{author:a,avatarURL:n})),r.a.createElement("div",{className:"qcard-column qcard-right"},r.a.createElement("div",{className:"qcard-card-title"},"Would You Rather"),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",id:"optionOne",name:"options",value:"optionOne",onChange:function(){return e.setState({vote:"optionOne"})}}),o),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",id:"optionTwo",name:"options",value:"optionTwo",onChange:function(){return e.setState({vote:"optionTwo"})}}),s),r.a.createElement("div",{className:"qcard-btn-container"},r.a.createElement("button",{className:"qcard-submit-btn",onClick:this.handleSubmit,disabled:""===this.state.vote},"SUBMIT"))))}}]),a}(n.Component));var te=Object(i.connect)((function(e,t){var a=e.users,n=e.questions,r=e.authedUser,o=t.question_id,s=n[o].author,c=a[s];return{authedUser:r,question_id:o,author:s,name:c.name,avatarURL:c.avatarURL,optionOneText:n[o].optionOne.text,optionTwoText:n[o].optionTwo.text}}))(ee),ae=(a(61),a(36)),ne=a.n(ae);var re=function(e){return r.a.createElement("div",{className:"not-found-container"},r.a.createElement("img",{src:ne.a,alt:"404 error"}))};var oe=Object(i.connect)((function(e){return{authedUser:e.authedUser,users:e.users,questions:e.questions}}))((function(e){var t=e.match.params.question_id,a=e.authedUser,n=e.users,o=e.questions;return r.a.createElement("div",null,o[t]?r.a.createElement("div",null,Object.keys(n[a].answers).includes(t)?r.a.createElement(Z,{question_id:t}):r.a.createElement(te,{question_id:t})):r.a.createElement(re,null))}));a(62);var se=Object(i.connect)((function(e){return{authedUser:e.authedUser,users:e.users}}))((function(e){var t=e.authedUser,a=e.users,n=a[t].name,o=a[t].avatarURL;return r.a.createElement("span",null,n,r.a.createElement("img",{src:o,alt:"User Avatar",width:"50",height:"50"}))}));a(63);var ce=Object(i.connect)((function(e){return{currentTab:e.currentTab,authedUser:e.authedUser}}))((function(e){var t=function(t){e.dispatch(x(t))},a=e.currentTab,n=e.authedUser;return r.a.createElement("div",{className:"navbar"},r.a.createElement(u.b,{to:"/questions",onClick:function(){return t("home")},className:"navbar-home-button ".concat("home"===a?"active":"passive")},"HOME"),r.a.createElement(u.b,{to:"/add",onClick:function(){return t("newQuestion")},className:"navbar-post-button ".concat("newQuestion"===a?"active":"passive")},"POST YOUR QUESTION"),r.a.createElement(u.b,{to:"/leaderboard",onClick:function(){return t("leaderboard")},className:"navbar-leaderboard-button ".concat("leaderboard"===a?"active":"passive")},"LEADERBOARD"),"null"!==n&&r.a.createElement("div",null,r.a.createElement(se,null),r.a.createElement(u.b,{to:"/signin",style:{textDecoration:"none"},onClick:function(){e.dispatch(d("null")),e.dispatch(x("null"))}},r.a.createElement("button",{className:"logout-button"},"LOG OUT"))))})),ie=a(15),ue=a.n(ie);a(64),a(65);var le=function(e){var t=e.questionId,a=e.author,n=e.avatarURL,o=e.optionOne;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column left"},r.a.createElement(X,{author:a,avatarURL:n})),r.a.createElement("div",{className:"column right"},r.a.createElement("div",{className:"card-title"},"Would You Rather"),r.a.createElement("div",{className:"question-teaser"},o," or ..."),r.a.createElement(u.b,{to:"/questions/".concat(t),style:{textDecoration:"none"}},r.a.createElement("button",{className:"view-poll-btn"},"VIEW POLL"))))},me=function(e){Object(P.a)(a,e);var t=Object(A.a)(a);function a(){var e;Object(I.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={currentTab:"unansweredQuestions"},e}return Object(C.a)(a,[{key:"fetchQuestions",value:function(){var e=this.props,t=e.users,a=e.questions,n=e.authedUser,r=Object.keys(t[n].answers),o=Object.keys(a).filter((function(e){return!r.includes(e)})),s=[];o.map((function(e){return s.push({questionId:e,author:t[a[e].author].name,avatarURL:t[a[e].author].avatarURL,optionOne:a[e].optionOne.text,optionTwo:a[e].optionTwo.text,timestamp:a[e].timestamp})})),s.sort((function(e,t){return t.timestamp-e.timestamp}));var c=[];return r.map((function(e){return c.push({questionId:e,author:t[a[e].author].name,avatarURL:t[a[e].author].avatarURL,optionOne:a[e].optionOne.text,optionTwo:a[e].optionTwo.text,timestamp:a[e].timestamp})})),c.sort((function(e,t){return t.timestamp-e.timestamp})),{unansweredQuestions:s,answeredQuestions:c}}},{key:"render",value:function(){var e=this,t=this.fetchQuestions(),a=t.unansweredQuestions,n=t.answeredQuestions,o=this.state.currentTab;return r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"content-header"},r.a.createElement("div",{className:"card-column card-left"},r.a.createElement("button",{className:"tab-title ".concat("unansweredQuestions"===o&&"active-tab"),onClick:function(){return e.setState({currentTab:"unansweredQuestions"})}},"UNANSWERED QUESTIONS")),r.a.createElement("div",{className:"card-column card-right"},r.a.createElement("button",{className:"tab-title ".concat("answeredQuestions"===o&&"active-tab"),onClick:function(){return e.setState({currentTab:"answeredQuestions"})}},"ANSWERED QUESTIONS"))),r.a.createElement("div",{className:"content-body"},"unansweredQuestions"===o&&a.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(le,{questionId:e.questionId,author:e.author,avatarURL:e.avatarURL,optionOne:e.optionOne}))})),"answeredQuestions"===o&&n.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(le,{questionId:e.questionId,author:e.author,avatarURL:e.avatarURL,optionOne:e.optionOne}))}))))}}]),a}(n.Component);me.propType={users:ue.a.object.isRequired,questions:ue.a.object.isRequired,authedUser:ue.a.string.isRequired};var de=Object(i.connect)((function(e){return{users:e.users,questions:e.questions,authedUser:e.authedUser}}))(me),pe=(a(66),function(e){Object(P.a)(a,e);var t=Object(A.a)(a);function a(){return Object(I.a)(this,a),t.apply(this,arguments)}return Object(C.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch((function(e){return e(Object(l.showLoading)()),Promise.all([new Promise((function(e,t){setTimeout((function(){return e(Object(h.a)({},g))}),1e3)})),new Promise((function(e,t){setTimeout((function(){return e(Object(h.a)({},j))}),1e3)}))]).then((function(t){var a=Object(Q.a)(t,2),n=a[0],r=a[1];e(function(e){return{type:"RECEIVE_USER",users:e}}(n)),e(function(e){return{type:"RECEIVE_QUESTIONS",questions:e}}(r)),e(Object(l.hideLoading)())}))}))}},{key:"render",value:function(){var e=this.props.authedUser;return r.a.createElement("div",null,r.a.createElement(m.a,null),"null"===e?r.a.createElement("div",null,r.a.createElement(ce,null),r.a.createElement(L.a,{exact:!0,path:"/",component:_}),r.a.createElement(L.a,{exact:!0,path:"/user/signup/form",component:Y}),r.a.createElement(L.a,{exact:!0,path:"/:param",component:G}),r.a.createElement(L.a,{exact:!0,path:"/:param/:param2",component:G})):r.a.createElement("div",null,r.a.createElement(ce,null),r.a.createElement(L.c,null,r.a.createElement(L.a,{exact:!0,path:"/questions",component:de}),r.a.createElement(L.a,{path:"/questions/:question_id",component:oe}),r.a.createElement(L.a,{path:"/add",component:H}),r.a.createElement(L.a,{path:"/leaderboard",component:K}),r.a.createElement(L.a,{component:re}))))}}]),a}(n.Component));var he=Object(i.connect)((function(e){return{authedUser:e.authedUser}}))(pe),ve=(a(67),Object(c.d)(k,R));s.a.render(r.a.createElement(i.Provider,{store:ve},r.a.createElement(u.a,null,r.a.createElement(he,null))),document.getElementById("root"))}]),[[38,1,2]]]);
//# sourceMappingURL=main.222a4daa.chunk.js.map