<template>
  <section class="image-block">
    <header class="image-block__header">
      <h1 class="image-block-cta">
        {{ cta_message }}
      </h1>
    </header>
    <div class="image-block-banner full-width">
      <div class="overlay"></div>
      <img class="cropped"
           :src="image_url"
           :alt="cta_message"/>
    </div>
  </section>
</template>

<script>

export default {
  name: 'ImageBanner',
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
    image_url: {
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
  $blue-l: #4E8EC0;
  $gray: #4A4A4A;
  $gray-l:#bbbbbb;
  $mxw: 1240px;

  .image-block {
    position: relative;
    margin-bottom: $space;
    width: 100vw;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 600px) {
      height: auto
    }

    .image-block__header {
      max-width: $mxw;
      margin: 0 auto;
      z-index: 2;
      position: absolute;
      width: 100%;
      @media only screen and (max-width: 600px) {
        position: relative;
      }
    }

    .image-block-banner {
      overflow: hidden;
      position: relative;
      width: 100%;
      height: 100%;

      @media only screen and (max-width: 600px) {
        padding: $space;
        display:none;
      }

      img {
        width: 100%;
        height: auto;
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
        max-height: none;
      }
    }

    .image-block-cta {
      text-decoration: none;
      text-transform: uppercase;
      color: white;
      max-width: 60%;
      z-index: 3;
      display: flex;
      align-items: center;
      text-align: left;
      padding: $space;

      @media only screen and (max-width: 600px) {
        position: relative;
        top: auto;
        left: auto;
        max-width: none;
        // width: 100%;
        color: $blue;
        border-bottom: 1px solid $gray-l;
        text-align: center;
        margin: $space;
        display: block;

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
        @media only screen and (max-width: 600px) {
          display:none;
        }
    }

  }
</style>
