<template>
  <section class="full-width">
    <div class="full-width-inner">
      <h2>{{title}}</h2>
      <p v-html="content"></p>
      <button-animated
        :button_text="button_text"
        :button_link="button_link"
        :animation_type="button_animation"
        :invertColors="true"
      ></button-animated>
    </div>
  </section>
</template>

<script>
import ButtonAnimated from '@/components/buttonAnimated'

export default {
  name: 'fullWidthBanner',
  components: {
    ButtonAnimated
  },
  data () {
    return {
      msg: 'full width banner!'
    }
  },
  props: {
    title: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: true
    },
    button_text: {
      type: String,
      required: false
    },
    button_link: {
      type: String,
      required: false
    },
    button_animation: {
      type: String,
      default: 'fill',
      required: false
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

  .full-width {
    width: 100vw;
    position: relative;
    background-color: $blue;
    text-align: center;
    vertical-align: middle;
    color: white;
    left: 0;
    right: 0;

    .full-width-inner {
      margin: 0 auto;
      padding: $space*3 $space;
      max-width: 800px;
    }

    h2 {
      text-transform: uppercase;
      margin-bottom: $space;
    }

    p {
      margin-bottom: $space;
    }
  }

  .home .full-width-inner  {
      @media only screen and (max-width: 600px) {
        background-color: white;
        text-align:left;
        color: $blue;

        p {
          color: $gray;
        }

       p  a {
        color: $blue;
        }

        button {
          color: $blue;
          border-bottom: 1px solid $blue;
        }
      }
  }
</style>
