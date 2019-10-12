<template>
  <div class="--row">
    <img :srcset="require('~/assets/images/bg1.jpg').srcSet" class="--cover">
    <div class="--gradient --row">
      <div class="intro --row --flex --fs">
        <div class="--ctr --row">
          <logo />
          <div class="intro__content --row">
            <h1 class="title">
              ULTR4
              <span>
                NBP
              </span>
            </h1>
            <h2 class="subtitle">
              A WICKED NUXT.js BOILERPLATE.
            </h2>
          </div>
        </div>
        <ul>
          <li>
            <a href="https://axios.nuxtjs.org/" target="_blank">
              Axios
            </a>
          </li>
          <li>
            <a href="https://pwa.nuxtjs.org/" target="_blank">
              PWA
            </a>
          </li>
          <li>
            <a href="https://www.npmjs.com/package/nuxt-webfontloader" target="_blank">
              Nuxt Webfont Loader
            </a>
          </li>
          <li>
            <a href="https://nuxtjs.org/faq/pre-processors/" target="_blank">
              SASS Loader
            </a>
          </li>
          <li>
            <a href="https://www.npmjs.com/package/nuxt-sass-resources-loader" target="_blank">
              SASS Resources Loader
            </a>
          </li>
          <li>
            <a href="https://github.com/geeogi/nuxt-responsive-loader" target="_blank">
              Nuxt Responsive Loader
            </a>
          </li>
          <li>
            <a href="https://github.com/hilongjw/vue-lazyload" target="_blank">
              Vue Lazyload
            </a>
          </li>
          <li>
            <a href="https://github.com/hilongjw/vue-lazyload" target="_blank">
              ESLint
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
$alpha-txt: rgba(255, 255, 255, 0.7);
.--cover {
  height: 100vh;
  width: auto;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-50%) translateY(0);
  z-index: 0;
}
.--gradient {
  background: rgb(94,244,255);
  background: linear-gradient(90deg, rgba(94,244,255,0.7) 0%, rgba(85,3,237,0.7) 100%);
}
.intro {
  .intro__content {
    h1 {
      color: $alpha-txt;
      display: block;
      font-weight: 800;
      font-size: 3em;
      letter-spacing: 1px;
      text-align: center;
      text-transform: uppercase;
      span {
        font-weight: 300;
      }
    }
    h2 {
      font-weight: 300;
      font-size: 1.4em;
      color: $alpha-txt;
      word-spacing: 5px;
      margin: 0 0 2em 0;
      text-align: center;
    }
  }
}
ul {
  position: absolute;
  bottom: 1em;
  text-align: center;
  li {
    display: inline-block;
    line-height: 1.3em;
    padding: 0 0 0 1em;
    &:nth-child(1){
      padding: 0;
      ::before {
        display: none;
      }
    }
    ::before {
      display: block;
      float: left;
      content: '';
      -webkit-border-radius: 100%;
      border-radius: 100%;
      height: 6px;
      transform: translateY(0.47em);
      width: 6px;
      margin-right: 1em;
      background-color: $alpha-txt;
    }
    a {
      color: $alpha-txt;
      display: block;
      font-size: 1.2em;
      line-height: 1.3em;
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
  }
}
@keyframes ani__intro {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media only screen and (min-width: 768px) {
  .--cover{
    transform: translateX(-25%) translateY(0);
  }
}
@media only screen and (min-width: 1024px) {
  .--cover{
    height: auto;
    width: 140vw;
    transform: translateX(-20vw) translateY(0);
  }
}
</style>
