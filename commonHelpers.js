import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f,i as h}from"./assets/vendor-77e16229.js";const n=document.querySelector(".btn-start"),i=document.querySelector("#datetime-picker"),y=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]");n.disable=!0;let a,c;f("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=new Date;a=e[0],a<=t?(h.error({message:"Please choose a date in the future",position:"topRight"}),n.disable=!0):n.disable=!1}});n.addEventListener("click",()=>{const e=a.getTime();n.disable=!0,i.disable=!0,c=setInterval(()=>{const t=Date.now(),o=e-t;if(o<=0){clearInterval(c),n.disable=!1,i.disable=!1;return}const r=T(o);q(r)},1e3)});function T(e){const u=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:u,hours:d,minutes:l,seconds:m}}function q({days:e,hours:t,minutes:o,seconds:r}){y.textContent=s(e),p.textContent=s(t),b.textContent=s(o),S.textContent=s(r)}function s(e){return e.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
