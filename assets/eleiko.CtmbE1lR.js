import{d as i,j as e}from"./index.Ba7oXqmG.js";import{S as a,A as r,N as o,a as n,_ as p}from"./index.DeAuuy0d.js";const l="/assets/1.CDDLfnL6.jpg",c="/assets/2.C_ZrLAIM.jpg",d="/assets/3.Dbr1NSrp.jpg",g="/assets/4.BOooRcwA.jpg",h=i.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }

  .swiper {
    margin: 0;
    height: 100%;

    .swiper-slide {
      height: 100%;
      aspect-ratio: 9 / 16;

      img {
        object-fit: cover;
      }
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: var(--color-gray-500);
  }

  .lazyload-wrapper {
    height: 100%;
  }
`,m=[l,c,d,g],j=()=>e.jsx(h,{children:e.jsx(a,{slidesPerView:1,spaceBetween:50,navigation:!0,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},modules:[r,o],className:"suplement-swiper",children:m.map((s,t)=>e.jsx(n,{children:e.jsx(p,{children:e.jsx("img",{src:s,alt:s,loading:"lazy"})})},t))})});export{j as default};
