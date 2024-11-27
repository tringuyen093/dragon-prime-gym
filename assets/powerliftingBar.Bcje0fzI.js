import{d as a,j as e}from"./index.x42pGASC.js";import{S as r,A as i,N as n,a as o,_ as p}from"./navigation.BcL9TGo-.js";const l="/assets/1.Cpurn5vR.jpg",c="/assets/2.D2au5KMF.jpg",d="/assets/3.CfP5i3OM.jpg",u=a.div`
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
`,g=[l,c,d],h=()=>e.jsx(u,{children:e.jsx(r,{slidesPerView:1,spaceBetween:50,navigation:!0,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},modules:[i,n],className:"suplement-swiper",children:g.map((t,s)=>e.jsx(o,{children:e.jsx(p,{children:e.jsx("img",{src:t,alt:t,loading:"lazy"})})},s))})}),j=()=>e.jsx(h,{});export{j as default};
