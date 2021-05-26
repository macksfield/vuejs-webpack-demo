<template>
  <section class="container video-block">
    <h1 v-html="cta_message" class="video-block-cta"></h1>
    <div class="video-block-banner">
      <a data-fancybox :href="video_url">
        <div class="overlay"></div>
        <img class="cropped"
             :src="video_image"
              :alt="cta_message"/>
        <div class="vimeo-play-button-wrapper">
          <img src="../assets/icon-play-btn.svg" alt="Play Button">
        </div>
      </a>
    </div>
  </section>
</template>

<script>
import '../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css'
import '../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js'

export default {
  name: 'videoBanner',
  // created: function () {
  //   let fancyScript = document.createElement('script')
  //   fancyScript.setAttribute('src', 'https://code.jquery.com/jquery-3.3.1.min.js')
  //   document.head.appendChild(fancyScript)
  // },
  data () {
    return {
      msg: 'baaaaaanner!'
    }
  },
  props: {
    cta_message: {
      type: String,
      required: false
    },
    video_url: {
      type: String,
      required: true
    },
    video_image: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">

  ////////////////////////////////////
  // Variables
  ////////////////////////////////////
  $space: 1rem;
  $blue: #2F5F87;
  $blue-l:#4E8EC0;
  $gray: #4A4A4A;

  .video-block {
    position: relative;
    margin-bottom: $space;

      .video-block-banner {
        height: 500px;
        overflow: hidden;
        position: relative;
        width: 100%;

        @media only screen and (max-width: 600px) {
          height: 200px;
        }

        img, svg {
          width: 100%;
        }
        svg {
          height: 250px;
        }
        img.cropped {
          bottom: 0;
          left: 0;
          margin: auto;
          position: absolute;
          right: 0;
          top: 0;
          min-height: 100%;
          min-width: 100%;
          width: auto;
          max-height: 120%;
        }
    }

    .video-block-cta {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      text-decoration: none;
      text-transform: uppercase;
      color: white;
      max-width: 47%;
      z-index: 3;
      display:flex;
      align-items:center;
      text-align: left;
      padding: $space;
      pointer-events: none;

      @media only screen and (max-width: 600px) {
        position: relative;
        top: auto;
        left: auto;
        color:$blue;
        max-width: none;
        width: 100%;
        padding: $space*1.5;
      }
    }

    .overlay {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      background: black;
      opacity: 0.35;
    }

    a {
      div.vimeo-play-button-wrapper {
        width: 15%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.5;
        transition: opacity 1s;
        -webkit-transition: opacity 1s;
        max-width: 100px;
        max-height: 100px;
        z-index: 2;
      }

      &:hover div.vimeo-play-button-wrapper {
        opacity: 1;
      }
    }

  }
</style>
