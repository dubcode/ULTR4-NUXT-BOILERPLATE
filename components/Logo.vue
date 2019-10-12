<template>
  <div id="logo" class="--row">
    <svg
      x="0px"
      y="0px"
      width="270.679px"
      height="234.414px"
      viewBox="-7.794 -4.5 270.679 234.414"
      enable-background="new -7.794 -4.5 270.679 234.414"
      xml:space="preserve"
    >
      <line
        fill="none"
        stroke="#fff"
        stroke-width="12"
        stroke-miterlimit="10"
        x1="224.846"
        y1="139.768"
        x2="31.14"
        y2="139.768"
      />
      <polygon
        fill="none"
        stroke="#fff"
        stroke-width="12"
        stroke-miterlimit="10"
        points="252.492,1.5 127.545,217.914 2.598,1.5 "
      />
    </svg>
  </div>
</template>
<style lang="scss">
#logo {
  opacity: 0.5;
  svg {
    height: auto;
    margin: 0 auto;
    max-width: 70px;
    width: 50%;
    line {
      animation: ani__01 4s;
      stroke-dasharray: 200;
      stroke-dashoffset: -400;
      animation-fill-mode: forwards;
      animation-delay: 2s;
      animation-iteration-count: infinite;
    }
    polygon {
      animation: ani__02 4s;
      stroke-dasharray: 600;
      stroke-dashoffset: -1200;
      animation-fill-mode: forwards;
      animation-delay: 2s;
      animation-iteration-count: infinite;
    }
  }
}
@keyframes ani__01 {
  0% {
    stroke-dashoffset: -400;
  }
  40% {
    stroke-dashoffset: 0;
  }
  60% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 400;
  }
}
@keyframes ani__02 {
  0% {
    stroke-dashoffset: -1200;
  }
  40% {
    stroke-dashoffset: 0;
  }
  60% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 1200;
  }
}
</style>
