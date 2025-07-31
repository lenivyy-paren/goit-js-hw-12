import{a as q,S,i as n}from"./assets/vendor-BK_rxH-O.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function p(o,t=1){const s="https://vercel-api-proxy-six-fawn.vercel.app/api/proxy",i={source:"pixabay",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t};return(await q.get(s,{params:i})).data}const g=document.querySelector(".loader"),f=document.querySelector(".gallery"),h=document.querySelector(".load-more"),M=new S(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function y(o){const t=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:l,comments:w,downloads:x})=>`<li class="gallery-item">
              <a class="gallery-link" href=${i}>
                <img src=${s} alt="${e}" width="360" height="200"/>
                <div class="markup-image">
                  <ul>
                    <li class="markup-image-text">likes</li>
                    <li class="markup-image-value">${r}</li>      
                  </ul>
                  <ul>
                    <li class="markup-image-text">views</li>
                    <li class="markup-image-value">${l}</li>      
                  </ul>
                  <ul>
                    <li class="markup-image-text">comments</li>
                    <li class="markup-image-value">${w}</li>      
                  </ul>
                  <ul>
                    <li class="markup-image-text">downloads</li>
                    <li class="markup-image-value">${x}</li>      
                  </ul>
                </div>
              </a>
            </li>`).join("");f.insertAdjacentHTML("beforeend",t),M.refresh()}function $(){f.innerHTML=""}function v(){g.classList.add("visible")}function L(){g.classList.remove("visible")}function b(){h.classList.remove("hidden")}function u(){h.classList.add("hidden")}const m=document.querySelector(".form"),k=document.querySelector(".load-more");let c="",a=1,d=0;m.addEventListener("submit",async o=>{if(o.preventDefault(),c=o.target.elements["search-text"].value.trim(),a=1,c===""){n.error({message:"Form field must be filled in!",position:"topRight"});return}$(),u(),v();try{const t=await p(c,a);if(t.hits.length===0){n.warning({message:"No images found. Try again.",position:"topRight"});return}y(t.hits),d=Math.ceil(t.totalHits/15),a<d&&b()}catch{n.error({message:"Connection error. Try later.",position:"topRight"})}finally{L(),m.reset()}});k.addEventListener("click",async()=>{a+=1,v(),u();try{const o=await p(c,a);y(o.hits),a>=d?(u(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):b();const{height:t}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}catch{n.error({message:"Failed to load more images.",position:"topRight"})}finally{L()}});
//# sourceMappingURL=index.js.map
