import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a=document.querySelector(".feedback-form"),t={email:"",message:""},s="feedback-form-state";m();a.addEventListener("input",e=>{t[e.target.name]=e.target.value,localStorage.setItem(s,JSON.stringify(t))});a.addEventListener("submit",e=>{e.preventDefault(),console.log(t),a.reset(),localStorage.removeItem(s),t.email="",t.message=""});function m(){const e=JSON.parse(localStorage.getItem(s));e&&(t.email=e.email,t.message=e.message,a.elements.email.value=e.email,a.elements.message.value=e.message)}
//# sourceMappingURL=3-form.js.map
