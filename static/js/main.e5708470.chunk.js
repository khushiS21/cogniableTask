(this.webpackJsonpusersapp=this.webpackJsonpusersapp||[]).push([[0],{184:function(e,c,l){},185:function(e,c,l){"use strict";l.r(c);var s=l(1),t=l.n(s),a=l(67),i=l.n(a),r=(l(79),l(7)),n=l(2),j=(l(80),l(0)),o=function(){var e=Object(n.e)();return Object(j.jsxs)("div",{className:"nav-container",children:[Object(j.jsx)("h5",{className:"mb-4",children:"Update learners info"}),Object(j.jsxs)("ul",{className:"nav-list",children:[Object(j.jsx)(r.b,{to:"/forms/general",children:Object(j.jsxs)("li",{className:"/forms/general"===e.pathname?"visited":"",children:[Object(j.jsx)("div",{className:"nav-icon"})," ",Object(j.jsx)("p",{children:"General info"})," ",Object(j.jsx)("img",{src:"/next.png",alt:""})]})}),Object(j.jsx)(r.b,{to:"/forms/personal",children:Object(j.jsxs)("li",{className:"/forms/personal"===e.pathname?"visited":"",children:[Object(j.jsx)("div",{className:"nav-icon"})," ",Object(j.jsx)("p",{children:"Personal info"})," ",Object(j.jsx)("img",{src:"/next.png",alt:""})]})})]})]})},d=function(){return Object(j.jsx)("div",{className:"forms-container",children:Object(j.jsx)(o,{})})},b=l(32),h=l(31),m=l(74),x=l(8),O=x.c().shape({firstName:x.d().min(2,"Too Short!").max(50,"Too Long!").required("Required"),email:x.d().email("Invalid email"),number:x.d().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid"),birthdate:x.a("invalid date"),zip:x.d().min(5,"Too short").max(5,"Max 5 digits")}),u=function(){var e=Object(n.f)(),c=Object(m.a)({accept:"image/jpeg, image/png, .pdf"}),l=c.acceptedFiles,s=c.fileRejections,t=c.getRootProps,a=c.getInputProps,i=l.map((function(e){return Object(j.jsxs)("li",{children:[e.path," - ",e.size," bytes"]},e.path)})),r=s.map((function(e){var c=e.file,l=e.errors;return Object(j.jsxs)("li",{children:[c.path," - ",c.size," bytes",Object(j.jsx)("ul",{children:l.map((function(e){return Object(j.jsx)("li",{children:e.message},e.code)}))})]},c.path)}));return Object(j.jsx)("div",{className:"general-form-container",children:Object(j.jsx)(h.a,{initialValues:{firstName:"",lastName:"",clientId:"",email:"",number:"",birthdate:"",gender:"",streetAddress:"",city:"",state:"",country:"",zip:""},validationSchema:O,onSubmit:function(c,l){l.setSubmitting;e("/forms/personal")},children:function(e){var c=e.values,l=e.errors,s=e.touched,n=e.handleChange,o=e.handleBlur,d=e.handleSubmit,h=e.isSubmitting,m=e.setFieldValue;return Object(j.jsxs)("form",{onSubmit:d,className:"row",children:[Object(j.jsx)("h5",{children:"Edit basic information"}),Object(j.jsxs)("div",Object(b.a)(Object(b.a)({},t({className:"drop-style"})),{},{children:[Object(j.jsx)("input",Object(b.a)({},a())),Object(j.jsx)("p",{className:"heading",children:"Drag and drop to upload logo"}),Object(j.jsx)("p",{children:".jpeg .png .pdf etc"}),Object(j.jsxs)("aside",{children:[Object(j.jsx)("ul",{className:"accepted",children:i}),Object(j.jsx)("ul",{className:"rejected",children:r})]})]})),Object(j.jsxs)("div",{className:"mb-2 mt-2 col-6",children:[Object(j.jsx)("div",{className:"row align-items-center",children:Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("label",{htmlFor:"firstName",className:"form-label",children:"First Name*"})})}),Object(j.jsx)("input",{type:"text",name:"firstName",onChange:n,value:c.firstName,className:"form-control input-field",placeholder:"Placeholder",onBlur:o}),l.firstName&&s.firstName&&Object(j.jsx)("div",{className:"error",children:l.firstName})]}),Object(j.jsxs)("div",{className:"mb-2 mt-2 col-6",children:[Object(j.jsx)("div",{className:"row align-items-center",children:Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("label",{htmlFor:"name",className:"form-label",children:"Last Name"})})}),Object(j.jsx)("input",{type:"text",name:"lastName",onChange:n,value:c.lastName,className:"form-control  input-field",onBlur:o,placeholder:"Placeholder"})]}),Object(j.jsxs)("div",{className:"mb-2 mt-2 col-6",children:[Object(j.jsx)("div",{className:"row align-items-center",children:Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("label",{htmlFor:"clientId",className:"form-label",children:"Client ID"})})}),Object(j.jsx)("input",{type:"text",name:"clientId",onChange:n,value:c.clientId,className:"form-control  input-field",placeholder:"Placeholder",onBlur:o})]}),Object(j.jsxs)("div",{className:"mb-2 mt-2 col-6",children:[Object(j.jsx)("div",{className:"row align-items-center",children:Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"})})}),Object(j.jsx)("input",{type:"email",name:"email",onChange:n,value:c.email,className:"form-control input-field",onBlur:o,placeholder:"Placeholder"}),l.email&&s.email&&Object(j.jsx)("div",{className:"error",children:l.email})]}),Object(j.jsxs)("div",{className:"mb-2 mt-2 col-6",children:[Object(j.jsx)("div",{className:"row align-items-center",children:Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("label",{htmlFor:"number",className:"form-label",children:"Cell no"})})}),Object(j.jsx)("input",{type:"tel",name:"number",onChange:n,value:c.number,className:"form-control input-field",placeholder:"Placeholder",onBlur:o}),l.number&&s.number&&Object(j.jsx)("div",{className:"error",children:l.number})]}),Object(j.jsxs)("div",{className:"mb-2 mt-2 col-6",children:[Object(j.jsx)("div",{className:"row align-items-center",children:Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("label",{htmlFor:"birthdate",className:"form-label",children:"Date of birth"})})}),Object(j.jsx)("input",{type:"date",name:"birthdate",onChange:n,value:c.birthdate,className:"form-control input-field",placeholder:"Placeholder",onBlur:o})]}),Object(j.jsxs)("div",{className:"mb-2 mt-2 row",children:[Object(j.jsx)("label",{className:"form-check-label col-2",children:"Gender"}),Object(j.jsxs)("div",{className:"col-10 row",role:"group",children:[Object(j.jsxs)("div",{className:"form-check col",children:[Object(j.jsx)("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",value:c.gender,placeholder:"Placeholder",onChange:function(e){m("gender","male")},onBlur:function(e){m("gender",e.target.value)}}),Object(j.jsx)("label",{className:"form-check-label",htmlFor:"flexRadioDefault1",children:"Male"})]}),Object(j.jsxs)("div",{className:"form-check col",children:[Object(j.jsx)("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",value:c.gender,placeholder:"Placeholder",onChange:function(e){m("gender","female")},onBlur:function(e){m("gender",e.target.value)}}),Object(j.jsx)("label",{className:"form-check-label",htmlFor:"flexRadioDefault1",children:"Female"})]}),Object(j.jsxs)("div",{className:"form-check col",children:[Object(j.jsx)("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2",value:c.gender,placeholder:"Placeholder",onChange:function(e){m("gender","other")},onBlur:function(e){m("gender",e.target.value)}}),Object(j.jsx)("label",{className:"form-check-label",htmlFor:"flexRadioDefault2",children:"Other"})]})]})]}),Object(j.jsx)("h5",{children:"Add Location"}),Object(j.jsxs)("div",{className:"mb-2 mt-2 col-6",children:[Object(j.jsx)("div",{className:"row align-items-center",children:Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("label",{htmlFor:"streetAddress",className:"form-label",children:"Street Address"})})}),Object(j.jsx)("input",{type:"text",name:"streetAddress",onChange:n,value:c.streetAddress,className:"form-control input-field",placeholder:"Placeholder",onBlur:o}),l.streetAddress&&s.streetAddress&&Object(j.jsx)("div",{className:"error",children:l.streetAddress})]}),Object(j.jsxs)("div",{className:"mb-2 mt-2 col-lg-6",children:[Object(j.jsx)("label",{htmlFor:"city",className:"form-label",children:"City"}),Object(j.jsxs)("select",{className:"form-select",name:"city",value:c.city,placeholder:"Placeholder",onChange:n,onBlur:o,children:[Object(j.jsx)("option",{disabled:!0,children:"Select City"}),Object(j.jsx)("option",{value:"munbai",children:"Mumbai"}),Object(j.jsx)("option",{value:"delhi",children:"Delhi"}),Object(j.jsx)("option",{value:"goa",children:"Goa"}),Object(j.jsx)("option",{value:"ambala",children:"Ambala"})]}),l.city&&s.city&&Object(j.jsx)("div",{className:"error",children:l.city})]}),Object(j.jsxs)("div",{className:"mb-2 mt-2 col-lg-6",children:[Object(j.jsx)("label",{htmlFor:"state",className:"form-label",children:"State"}),Object(j.jsxs)("select",{className:"form-select",name:"state",value:c.state,placeholder:"Placeholder",onChange:n,onBlur:o,children:[Object(j.jsx)("option",{disabled:!0,children:"Select state"}),Object(j.jsx)("option",{value:"haryana",children:"Haryana"}),Object(j.jsx)("option",{value:"maharashtra",children:"Maharashtra"})]}),l.state&&s.state&&Object(j.jsx)("div",{className:"error",children:l.state})]}),Object(j.jsxs)("div",{className:"mb-2 mt-2 col-lg-6",children:[Object(j.jsx)("label",{htmlFor:"country",className:"form-label",children:"Country"}),Object(j.jsxs)("select",{className:"form-select",name:"country",value:c.country,placeholder:"Placeholder",onChange:n,onBlur:o,children:[Object(j.jsx)("option",{disabled:!0,children:"Select Country"}),Object(j.jsx)("option",{value:"india",children:"India"}),Object(j.jsx)("option",{value:"america",children:"America"})]}),l.country&&s.country&&Object(j.jsx)("div",{className:"error",children:l.country})]}),Object(j.jsxs)("div",{className:"mb-2 mt-2 col-6",children:[Object(j.jsx)("div",{className:"row align-items-center",children:Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("label",{htmlFor:"zip",className:"form-label",children:"zip code"})})}),Object(j.jsx)("input",{type:"number",name:"zip",onChange:n,value:c.zip,className:"form-control input-field",placeholder:"Placeholder",onBlur:o}),l.zip&&s.zip&&Object(j.jsx)("div",{className:"error",children:l.zip})]}),Object(j.jsxs)("div",{className:"mb-2 mt-2 col-12 submit",children:[Object(j.jsx)("div",{children:"close"}),Object(j.jsx)("button",{type:"submit",disabled:h,children:"Save and Update"})]})]})}})})},p=x.c().shape({height:x.b().required("feild cannot be empty"),weight:x.b().required("feild cannot be empty")}),g=function(){return Object(j.jsx)("div",{className:"personal-form-container",children:Object(j.jsx)(h.a,{initialValues:{allergicTo:"",height:"",weight:"",ssn:"",language:""},validationSchema:p,onSubmit:function(e,c){c.setSubmitting},children:function(e){var c=e.values,l=e.errors,s=e.touched,t=e.handleChange,a=e.handleBlur,i=e.handleSubmit,r=e.isSubmitting;e.setFieldValue;return Object(j.jsxs)("form",{onSubmit:i,className:"row",children:[Object(j.jsx)("h5",{children:"Edit personal information"}),Object(j.jsxs)("div",{className:"mb-2 mt-2 col-12",children:[Object(j.jsx)("div",{className:"row align-items-center",children:Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("label",{htmlFor:"allergicTo",className:"form-label",children:"Allergic To"})})}),Object(j.jsx)("input",{type:"text",name:"allergicTo",onChange:t,value:c.allergicTo,className:"form-control input-field",placeholder:"Placeholder",onBlur:a}),l.allergicTo&&s.allergicTo&&Object(j.jsx)("div",{className:"error",children:l.allergicTo})]}),Object(j.jsxs)("div",{className:"mb-2 mt-2 col-12",children:[Object(j.jsx)("div",{className:"row align-items-center",children:Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("label",{htmlFor:"height",className:"form-label",children:"Height in inch*"})})}),Object(j.jsx)("input",{type:"number",name:"height",onChange:t,value:c.height,className:"form-control  input-field",onBlur:a,placeholder:"Placeholder"}),l.height&&s.height&&Object(j.jsx)("div",{className:"error",children:l.height})]}),Object(j.jsxs)("div",{className:"mb-2 mt-2 col-12",children:[Object(j.jsx)("div",{className:"row align-items-center",children:Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("label",{htmlFor:"weight",className:"form-label",children:"Weight in inch*"})})}),Object(j.jsx)("input",{type:"number",name:"weight",onChange:t,value:c.weight,className:"form-control  input-field",placeholder:"Placeholder",onBlur:a}),l.weight&&s.weight&&Object(j.jsx)("div",{className:"error",children:l.weight})]}),Object(j.jsxs)("div",{className:"mb-2 mt-2 col-12",children:[Object(j.jsx)("div",{className:"row align-items-center",children:Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("label",{htmlFor:"ssn",className:"form-label",children:"SSN"})})}),Object(j.jsx)("input",{type:"number",name:"ssn",onChange:t,value:c.ssn,className:"form-control input-field",onBlur:a,placeholder:"Placeholder"}),l.ssn&&s.ssn&&Object(j.jsx)("div",{className:"error",children:l.ssn})]}),Object(j.jsxs)("div",{className:"mb-2 mt-2 col-lg-12",children:[Object(j.jsx)("label",{htmlFor:"language",className:"form-label",children:"City"}),Object(j.jsxs)("select",{className:"form-select",name:"city",value:c.language,placeholder:"Placeholder",onChange:t,onBlur:a,children:[Object(j.jsx)("option",{disabled:!0,children:"Select Language"}),Object(j.jsx)("option",{value:"english",children:"English"}),Object(j.jsx)("option",{value:"hindi",children:"Hindi"}),Object(j.jsx)("option",{value:"french",children:"French"}),Object(j.jsx)("option",{value:"spanish",children:"Spanish"})]})]}),Object(j.jsxs)("div",{className:"mb-2 mt-2 col-12 submit",children:[Object(j.jsx)("div",{children:"close"}),Object(j.jsx)("button",{type:"submit",disabled:r,children:"Save and Update"})]})]})}})})},f=l(5),N=function(){var e=Object(s.useState)([]),c=Object(f.a)(e,2),l=c[0],t=c[1],a=Object(s.useState)([]),i=Object(f.a)(a,2),n=i[0],o=i[1],d=Object(s.useState)(!0),b=Object(f.a)(d,2),h=b[0],m=b[1];Object(s.useEffect)((function(){x()}));var x=function(){fetch("/data/MOCK_DATA.json").then((function(e){return e.json()})).then((function(e){t(e)})).catch((function(e){console.log(e)}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("section",{children:[Object(j.jsxs)("header",{children:[Object(j.jsxs)("div",{className:"page-heading",children:[Object(j.jsx)("h2",{children:"Learners"}),Object(j.jsx)("p",{children:"Partners/Learners"})]}),Object(j.jsxs)("div",{className:"searches",children:[Object(j.jsx)("input",{type:"text",placeholder:"search by name",className:"searchName",onChange:function(e){return function(e){e.target.value?m(!1):m(!0),console.log(e.target.value);var c=null===l||void 0===l?void 0:l.filter((function(c){return c.name.includes(e.target.value)}));o(c)}(e)}}),Object(j.jsx)("input",{type:"text",placeholder:"search by emaill",className:"searchEmail",onChange:function(e){return function(e){e.target.value?m(!1):m(!0),console.log(e.target.value);var c=null===l||void 0===l?void 0:l.filter((function(c){return c.email.includes(e.target.value)}));o(c)}(e)}}),Object(j.jsx)("input",{type:"text",placeholder:"search by case manager",className:"searchManager",onChange:function(e){return function(e){e.target.value?m(!1):m(!0),console.log(e.target.value);var c=null===l||void 0===l?void 0:l.filter((function(c){return c.caseManager.includes(e.target.value)}));o(c)}(e)}}),Object(j.jsx)("button",{className:"search-button",children:"search"})]})]}),Object(j.jsxs)("div",{className:"user-top",children:[Object(j.jsx)("p",{className:"userHead",children:"User"}),Object(j.jsx)("p",{className:"emailHead",children:"Email"}),Object(j.jsx)("p",{className:"loginHead",children:"Last Login"}),Object(j.jsx)("p",{className:"managerHead",children:"Case Manager"}),Object(j.jsx)("p",{className:"tagsHead",children:"Tags"}),Object(j.jsx)("p",{className:"intervention",children:"Intervention"})]})]}),Object(j.jsxs)("ul",{className:"user-list",children:[n&&n.map((function(e){var c=e.id,l=e.name,s=e.email,t=e.lastLogin,a=e.caseManager,i=e.tags,n=e.image,o=e.contact;return Object(j.jsxs)("li",{className:"users",children:[Object(j.jsxs)("div",{className:"user-detail",children:[Object(j.jsx)("img",{className:"img",alt:"pic",src:n}),Object(j.jsxs)("div",{className:"credentials",children:[Object(j.jsx)("p",{children:l}),Object(j.jsx)("p",{className:"phone",children:o})]})]}),Object(j.jsx)("div",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check-circle"})}),Object(j.jsxs)("div",{className:"email",children:[Object(j.jsx)("i",{className:"far fa-envelope"}),Object(j.jsxs)("p",{children:[" ",s]})]}),Object(j.jsxs)("div",{className:"login-detail",children:[Object(j.jsx)("i",{className:"far fa-user"}),Object(j.jsx)("p",{children:t})]}),Object(j.jsx)("div",{className:"manager",children:a}),Object(j.jsx)("div",{className:"tags",children:i}),Object(j.jsxs)("div",{className:"btn",children:[Object(j.jsx)(r.b,{to:{pathname:"/details",state:e},children:Object(j.jsx)("button",{children:"Veiw details"})}),Object(j.jsx)("i",{class:"fas fa-ellipsis-v"})]})]},c)})),h&&l&&l.map((function(e){var c=e.id,l=e.name,s=e.email,t=e.lastLogin,a=e.caseManager,i=e.tags,n=e.image,o=e.contact;return Object(j.jsxs)("li",{className:"users",children:[Object(j.jsxs)("div",{className:"user-detail",children:[Object(j.jsx)("img",{className:"img",alt:"pic",src:n}),Object(j.jsxs)("div",{className:"credentials",children:[Object(j.jsx)("p",{children:l}),Object(j.jsx)("p",{className:"phone",children:o})]})]}),Object(j.jsx)("div",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check-circle"})}),Object(j.jsxs)("div",{className:"email",children:[Object(j.jsx)("i",{className:"far fa-envelope"}),Object(j.jsxs)("p",{children:[" ",s]})]}),Object(j.jsxs)("div",{className:"login-detail",children:[Object(j.jsx)("i",{className:"far fa-user"}),Object(j.jsx)("p",{children:t})]}),Object(j.jsx)("div",{className:"manager",children:a}),Object(j.jsx)("div",{className:"tags",children:i}),Object(j.jsxs)("div",{className:"btn",children:[Object(j.jsx)(r.b,{to:{pathname:"/details",state:e},children:Object(j.jsx)("button",{children:"Veiw details"})}),Object(j.jsx)("i",{class:"fas fa-ellipsis-v"})]})]},c)}))]})]})},v=(l(184),function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"top ",children:[Object(j.jsx)("i",{}),Object(j.jsx)(r.b,{to:"/",children:Object(j.jsx)("p",{children:"Back to home"})})]}),Object(j.jsxs)("section",{className:"main",children:[Object(j.jsxs)("div",{className:"left-container",children:[Object(j.jsxs)("div",{className:"person-detail",children:[Object(j.jsx)("img",{src:"/data/pic.jpg",alt:"person"}),Object(j.jsxs)("div",{className:"person-creds ",children:[Object(j.jsx)("h4",{children:"Cristofer Dias"}),Object(j.jsx)("p",{style:{color:"grey"},children:"+394584838338"}),Object(j.jsx)("p",{style:{color:"grey"},children:"James.Boats@la.com"}),Object(j.jsxs)("p",{style:{color:"grey"},children:["DOB: ",Object(j.jsx)("span",{style:{fontWeight:"bold",color:"black"},children:"12 june 1995"})]}),Object(j.jsxs)("p",{style:{color:"grey"},children:["Gender:",Object(j.jsx)("span",{style:{fontWeight:"bold",color:"black"},children:"Male"})]}),Object(j.jsxs)("p",{style:{color:"grey"},children:["Adress:",Object(j.jsx)("span",{style:{fontWeight:"bold",color:"black"},children:" 3/B, 4th Floor,Plot,Rd 19/A,banglore 1214"})]})]})]}),Object(j.jsxs)("div",{className:"records",children:[Object(j.jsxs)("div",{className:"top-button",children:[Object(j.jsx)("button",{children:"Peak"}),Object(j.jsx)("button",{children:"Cogniable"}),Object(j.jsx)("button",{children:"Research Participant "})]}),Object(j.jsx)("div",{className:"records-head",children:Object(j.jsx)("h5",{children:"Records"})}),Object(j.jsxs)("div",{className:"basis",children:[Object(j.jsxs)("ul",{className:"listOne",children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("i",{class:"fa fa-circle","aria-hidden":"true"}),Object(j.jsx)("p",{style:{color:"grey"},children:"Allergic to:"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("i",{class:"fa fa-circle","aria-hidden":"true"}),Object(j.jsx)("p",{style:{color:"grey"},children:"Height:"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("i",{class:"fa fa-circle","aria-hidden":"true"}),Object(j.jsx)("p",{style:{color:"grey"},children:"Weight:"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("i",{class:"fa fa-circle","aria-hidden":"true"}),Object(j.jsx)("p",{style:{color:"grey"},children:"Diagnosis:"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("i",{class:"fa fa-circle","aria-hidden":"true"}),Object(j.jsx)("p",{style:{color:"grey"},children:"Date Of Diagno:"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("i",{class:"fa fa-circle","aria-hidden":"true"}),Object(j.jsx)("p",{style:{color:"grey"},children:"SSN/Aadhar:"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("i",{class:"fa fa-circle","aria-hidden":"true"}),Object(j.jsx)("p",{style:{color:"grey"},children:"Languages:"})]})]}),Object(j.jsxs)("ul",{className:"listTwo",children:[Object(j.jsx)("li",{children:Object(j.jsx)("p",{style:{fontWeight:"bold",color:"black"},children:"Meat and Nut"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{style:{fontWeight:"bold",color:"black"},children:"5'6in"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{style:{fontWeight:"bold",color:"black"},children:"56kg"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{style:{fontWeight:"bold",color:"black"},children:"N/a"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{style:{fontWeight:"bold",color:"black"},children:"N/a"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{style:{fontWeight:"bold",color:"black"},children:"11544111dd234"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{style:{fontWeight:"bold",color:"black"},children:"English|Hindi"})})]})]})]}),Object(j.jsx)("div",{className:"guardian-info",children:Object(j.jsxs)("ul",{className:"guardian-list",children:[Object(j.jsx)("li",{children:Object(j.jsx)("h5",{children:"Guardians info"})}),Object(j.jsx)("li",{children:Object(j.jsxs)("p",{style:{color:"grey"},children:["Guardians Name:",Object(j.jsx)("span",{style:{fontWeight:"bold",color:"black"},children:"    Cristopher"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("p",{style:{color:"grey"},children:["Guardians Cell No.",Object(j.jsx)("span",{style:{fontWeight:"bold",color:"black"},children:"    +327473828383"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("p",{style:{color:"grey"},children:["Fathers Name",Object(j.jsx)("span",{style:{fontWeight:"bold",color:"black"},children:"   Crist"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("p",{style:{color:"grey"},children:["Fathers cell no.",Object(j.jsx)("span",{style:{fontWeight:"bold",color:"black"},children:"   +8532478253298732"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("p",{style:{color:"grey"},children:["Mothers name;",Object(j.jsx)("span",{style:{fontWeight:"bold",color:"black"},children:"  Adrea"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("p",{style:{color:"grey"},children:["mothers cell no.",Object(j.jsx)("span",{style:{fontWeight:"bold",color:"black"},children:"   +2834210492429"})]})})]})})]}),Object(j.jsxs)("div",{className:"right-container",children:[Object(j.jsxs)("div",{className:"top-right",children:[Object(j.jsx)("p",{children:"Status"}),Object(j.jsx)("button",{className:"active-button",children:"active"}),Object(j.jsx)(r.b,{to:"/forms",children:Object(j.jsx)("button",{className:"update-button",children:"update info"})})]}),Object(j.jsxs)("div",{className:"genral-info-container",children:[Object(j.jsxs)("ul",{className:"genralListOne",children:[Object(j.jsx)("li",{children:Object(j.jsx)("h5",{children:"Genral info"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{style:{color:"grey"},children:"Admission no.:"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{style:{color:"grey"},children:"Admission date :"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{style:{color:"grey"},children:"Created at:"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{style:{color:"grey"},children:"Last login:"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{style:{color:"grey"},children:"Clinic location:"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{style:{color:"grey"},children:"location Ctegories:"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{style:{color:"grey"},children:"joined at:"})})]}),Object(j.jsxs)("ul",{className:"genralListTwo",children:[Object(j.jsx)("li",{children:Object(j.jsx)("p",{style:{fontWeight:"bold",color:"black"},children:"Admission no.:"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{style:{fontWeight:"bold",color:"black"},children:"Admission date :"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{style:{fontWeight:"bold",color:"black"},children:"Created at"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{style:{fontWeight:"bold",color:"black"},children:"Last login:"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{style:{fontWeight:"bold",color:"black"},children:"Clinic location"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{style:{fontWeight:"bold",color:"black"},children:"location Ctegories:"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{style:{fontWeight:"bold",color:"black"},children:"joined at:"})})]})]}),Object(j.jsxs)("div",{className:"staff",children:[Object(j.jsxs)("ul",{classname:"staffListOne",children:[Object(j.jsx)("li",{children:Object(j.jsx)("h5",{children:"Staff assigned"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{style:{color:"grey"},children:"case manager:"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{style:{color:"grey"},children:"authorised:"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{style:{color:"grey"},children:"staff:"})})]}),Object(j.jsxs)("ul",{className:"staffListTwo",children:[Object(j.jsx)("li",{children:Object(j.jsx)("p",{style:{color:"grey"},children:"Anmie Global"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{style:{color:"voilet",fontWeight:"bold "},children:"Samuel John"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{style:{color:"grey"},children:"..."})})]})]})]})]})]})});var y=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(r.a,{children:Object(j.jsxs)(n.c,{children:[Object(j.jsx)(n.a,{path:"/",exact:!0,element:Object(j.jsx)(N,{})}),Object(j.jsx)(n.a,{path:"/forms",element:Object(j.jsx)(d,{})}),Object(j.jsx)(n.a,{path:"/details",element:Object(j.jsx)(v,{})}),Object(j.jsx)(n.a,{path:"/forms/general",exact:!1,element:Object(j.jsx)(u,{})}),Object(j.jsx)(n.a,{path:"/forms/personal",exact:!1,element:Object(j.jsx)(g,{})})]})})})};i.a.render(Object(j.jsx)(t.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))},79:function(e,c,l){},80:function(e,c,l){}},[[185,1,2]]]);
//# sourceMappingURL=main.e5708470.chunk.js.map