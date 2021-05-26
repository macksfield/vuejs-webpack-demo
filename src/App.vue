<template>
  <div>
    <div id="preLoader">
      <div id="preLoadContent">
        <svg class="loading-spinner" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="rotate(0 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#2f5f87">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(30 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#2f5f87">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(60 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#2f5f87">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(90 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#2f5f87">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(120 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#2f5f87">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(150 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#2f5f87">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(180 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#2f5f87">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(210 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#2f5f87">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(240 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#2f5f87">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(270 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#2f5f87">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(300 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#2f5f87">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(330 50 50)">
          <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#2f5f87">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
          </rect>
        </g></svg>
        <img src="@/assets/vue_webpack_logo.jpeg" alt="VueJS Webpack"/>
      </div>
      <div id="loadingOverlay"></div>
    </div>
    <div id="app" class="wrapper">
      <template v-if="!loading">
        <header-comp></header-comp>
        <transition name="page" mode="out-in">
        <router-view class="content"/>
        </transition>
        <footer-comp></footer-comp>
      </template>
    </div>
  </div>

</template>

<script>
import HeaderComp from './components/headerComp'
import FooterComp from './components/footerComp'
import jQuery from 'jquery'

window.jQuery = jQuery

export default {
  name: 'App',
  components: {FooterComp, HeaderComp},
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    setTimeout(this.siteLoaded, 3000, this)
  },
  methods: {
    siteLoaded (vm) {
      document.getElementById('preLoader').style.display = 'none'
      vm.loading = false
    }
  },
  metaInfo: {
    meta: [
      { charset: 'utf-8' },
      { name: 'description', hid: 'description', content: 'Max McCall | VueJS and Webpack Demo' },
      // Open Graph
      { name: 'og:title', content: 'VueJS Webpack' },
      { name: 'og:description', content: 'Max McCall | VueJS and Webpack Demo' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://max.engineering/' },
      { name: 'og:image', content: './static/PWLTD.jpg' },
      // Twitter Card
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@MaxfieldMcCall' },
      { name: 'twitter:title', content: 'VueJS Webpack' },
      { name: 'twitter:description', content: 'Max McCall | VueJS and Webpack Demo' },
      { name: 'twitter:image', content: './static/PWLTD.jpg' },
      { name: 'twitter:image:alt', content: 'VueJS Webpack' }
    ],
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'VueJS and Webpack Demo',
    // all titles will be injected into this template
    titleTemplate: '%s | Max McCall',
    htmlAttrs: {
      lang: 'en',
      amp: undefined
    }
  }
}
</script>

<style lang="scss">
  ////////////////////////////////////
  // Page Transition
  ////////////////////////////////////
  .page-enter-active, .page-leave-active {
    transition: opacity .1s;
  }
  .page-enter, .page-leave-to {
    opacity: 0;
  }

  ////////////////////////////////////
  // Variables
  ////////////////////////////////////
  $space: 1rem;
  $blue: #2F5F87;
  $blue-l: #4E8EC0;
  $gray: #4A4A4A;
  $gray-l: #f2f2f2;
  $mxw: 1240px;

  * {
    box-sizing: border-box;
    font-family: "Proxima Nova Rg", "Times New Roman", Times, serif;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin: 0 auto;
    overflow-x: hidden;

    a {
      text-decoration: none;
    }

    section.container {
      width: 100vw;
      max-width: $mxw;
      margin: 0 auto;

      @media only screen and (min-width: 600px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      &.full-width {
        max-width: none;
      }
    }
  }

  #preLoader {
    #loadingOverlay {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      background: black;
      opacity: 0.35;
    }
    #preLoadContent {
      text-align: center;
      position: fixed;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
    }
    svg {
      width: 20%;
      height: 20%;
    }
    img {
      z-index:1;
    }
  }

  ////////////////////////////////////
  // BASE Typography styles
  ////////////////////////////////////

  @font-face {
    font-family: 'Proxima Nova Rg';
    src: url('assets/fonts/ProximaNova-Regular.eot');
    src: url('assets/fonts/ProximaNova-Regular.eot?#iefix') format('embedded-opentype'),
    url('assets/fonts/ProximaNova-Regular.woff2') format('woff2'),
    url('assets/fonts/ProximaNova-Regular.woff') format('woff'),
    url('assets/fonts/ProximaNova-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  // ==============================
  // Font size mixin
  // ==============================
  //  default font scale bounding
  $font-lock-min: 768px !default;
  $font-lock-max: 1400px !default;

  //  font-size
  @mixin font-size(
    $min,                         // font-size
    $max: null,                   // optional maximum font size
    $lock-min: $font-lock-min,  // optional minimum viewport width
    $lock-max: $font-lock-max   // optional maximum viewport width
  ) {
    & {
      font-size: $min;
    }
    @if $max {
      @media (min-width: $lock-min) and (max-width: $lock-max) {
        & {
          font-size: calc(
            #{$min} +
            #{num($max) - num($min)} *
            (100vw - #{$lock-min}) /
            #{num($lock-max) - num($lock-min)}
          );
        }
      }
      @media (min-width: $lock-max) {
        & {
          font-size: $max;
        }
      }
    }
  }

  //  strip units helper function
  @function num($input) {
    @return $input/($input * 0 + 1);
  }

  html {
    font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-weight: 500;
  }

  %header-font-styles {
    font-kerning: normal;
    margin: 0;
    text-rendering: optimizeLegibility;
    line-height: 1.3;
    font-family: 'Poppins', sans-serif;
  }

  %font-styles {
    font-kerning: normal;
    text-rendering: optimizeLegibility;
    line-height: 1.4;
    margin: 0;
    font-weight: 300;
    font-family: 'Proxima Nova Rg', sans-serif;
  }

  h1, h2, h3 {
    @extend %header-font-styles;
  }

  a, h4, li, span, p, button, blockquote, input, textarea, fieldset, select, label {
    @extend %font-styles;
  }

  // h1 //////////////////////
  $h1-smallest: 22px;
  $h1-largest: 40px;

  // h2 //////////////////////
  $h2-smallest: 20px;
  $h2-largest: 32px;

  // h3 //////////////////////
  $h3-smallest: 18px;
  $h3-largest: 20px;

    // h4 //////////////////////
  $h4-smallest: 20px;
  $h4-largest: 32px;

  // p //////////////////////
  $p-smallest: 16px;
  $p-largest: 16px;

  // p //////////////////////
  $p-lg-smallest: 16px;
  $p-lg-largest: 20px;

  $video-title-smallest: 20px;
  $video-title-largest:30px;

  // button  //////////////////////
  $button-smallest: 16px;
  $button-largest: 18px;

  //  fluid scale based on default bounding
  :root {
    @include font-size(16px, 20px);
  }

  h1 {
    @include font-size($h1-smallest, $h1-largest)

    &.video-block-cta {
      @include font-size($video-title-smallest, $video-title-largest);
    }
  }

  h2 {
    text-transform: uppercase;
    @include font-size($h2-smallest, $h2-largest)
  }

  h3 {
    @include font-size($h3-smallest, $h3-largest)
  }

  h4 {
    @include font-size($h4-smallest, $h4-largest)
  }

  p {
    @include font-size($p-smallest, $p-largest)
  }

  p.large, .date {
    @include font-size($p-lg-smallest, $p-lg-largest)
  }

  .btn, button {
    @include font-size($button-smallest, $button-largest)
  }

  a.router-link-active:not([href='/']) {
    font-weight: bold;
  }

  html, body {
    margin: 0;
  }

  .content {
    position: relative;
    margin: 0 auto;
    min-height: calc(100vh - 220px);

    @media only screen and (min-width: 768px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      flex-direction: column;

      .sidebar__container {
        width: 30%;
        border-right: 2px solid $gray-l;
      }

      .milestone, .faq__container {
        width: 70%;
      }
    }
  }

</style>
