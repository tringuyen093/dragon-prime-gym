import{d as a,j as s}from"./index.gBm6umIt.js";import{S as r,A as o,N as i,a as c,_ as n}from"./index.BWEUxC03.js";const p="/assets/1.cpyN1bX2.jpg",l="/assets/2.CbOod7tJ.jpg",g="/assets/3.-pLQlnsX.jpg",d="/assets/4.1K5qRhP-.jpg",h="/assets/5.CyQgIKLC.jpg",j="/assets/6.Buq_zzhO.jpg",m="/assets/7.DkkYh39r.jpg",u="/assets/8.DRcZV3fp.jpg",k=a.div`
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
        object-position: center;
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
`,w=[p,l,g,d,h,j,m,u],y=()=>s.jsx(k,{children:s.jsx(r,{slidesPerView:1,spaceBetween:50,navigation:!0,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},modules:[o,i],className:"suplement-swiper",children:w.map((e,t)=>s.jsx(c,{children:s.jsx(n,{children:s.jsx("img",{src:e,alt:e,loading:"lazy"})})},t))})});export{y as default};
