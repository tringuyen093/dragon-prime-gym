import{d as a,j as e}from"./index.gBm6umIt.js";import{S as i,A as r,N as o,a as n,_ as p}from"./index.BWEUxC03.js";const l="/assets/1.Cpurn5vR.jpg",c="/assets/2.D2au5KMF.jpg",d="/assets/3.CfP5i3OM.jpg",g=a.div`
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
`,h=[l,c,d],w=()=>e.jsx(g,{children:e.jsx(i,{slidesPerView:1,spaceBetween:50,navigation:!0,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},modules:[r,o],className:"suplement-swiper",children:h.map((t,s)=>e.jsx(n,{children:e.jsx(p,{children:e.jsx("img",{src:t,alt:t,loading:"lazy"})})},s))})});export{w as default};
