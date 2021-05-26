<template>
  <section class="container">
    <div class="full-page">
      <header>
        <h1>Privacy Policy</h1>
      </header>

      <h3>Read our policies:</h3>
      <a href="https://www.fakelink.org">Privacy Policy</a>
      <br>
      <a href="https://www.fakelink.org">Other Information</a>
      <br>
      <h3>Questions and Further Information</h3>
      Have feedback? Couldn't find the information you needed?
      <button-animated
        :button_text="'Contact Us'"
        :button_link="'/contact'"
        :animation_type="'fill'"
      ></button-animated>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  ////////////////////////////////////
  // Variables
  ////////////////////////////////////
  $space: 1rem;
  $blue: #2F5F87;
  $blue-l: #4E8EC0;
  $gray: #4A4A4A;
  $gray-l: #dddddd;
  $mxw: 1240px;

  .full-page {
    text-align: left;
    color: $gray;

    @media only screen and (max-width: 1260px) {
        padding: 0 $space;
      }

    h2 {
      margin-top: $space*3;

    }

    ul {
      list-style: none;
    }

    header {
     text-align: center;
     margin: $space*2 auto;
     display:block;
     width: calc(100% - 2rem);

          @media only screen and (min-width: 768px) {
            width: 50%;
          }

      h1{
        padding-bottom:$space;
        color: $blue;
        border-bottom: 1px solid $gray;
      }

      .date {
        padding-bottom:$space;
        color: $blue;
        display: block;
        text-align: center;

      }
    }

    h3 {
      margin: $space*1.5 0;
    }

    button {
      display: block;
      margin: 2rem 0;
    }
  }
</style>
<script>
import ButtonAnimated from '@/components/buttonAnimated'

export default {
  name: 'privacyPage',
  components: {
    ButtonAnimated
  },
  data () {
    return {
      msg: 'privacy!'
    }
  },
  metaInfo: {
    title: 'Privacy Policy'
  }
}
</script>
