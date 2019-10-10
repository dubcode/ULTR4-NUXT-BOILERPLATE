<template>
  <div class="container --row">
    <div class="--row --flex --fs">
      <div>
        <logo />
        <div class="intro --row">
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
          <a href="https://www.npmjs.com/package/nuxt-imagemin" target="_blank">
            Nuxt Imagemin
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
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
$alpha-txt: rgba(255, 255, 255, 0.7);

.container {
  background: rgb(94,244,255);
  background: linear-gradient(90deg, rgba(94,244,255,0.7) 0%, rgba(85,3,237,0.7) 100%);
  padding: 0 1em;
}
.intro {
  opacity: 0;
  animation: ani__intro 1.5s;
  animation-fill-mode: forwards;
  animation-delay: 2s;
  h1 {
    display: block;
    font-weight: 800;
    font-size: 3em;
    color: $alpha-txt;
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
ul {
  position: absolute;
  bottom: 1em;
  text-align: center;
  opacity: 0;
  transform: translateY(1em);
  animation: ani__ul 1.5s;
  animation-fill-mode: forwards;
  animation-delay: 2s;
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
@keyframes ani__ul {
  from {
    opacity: 0;
    transform: translateY(1em);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
