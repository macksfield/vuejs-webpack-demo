<template>
  <div>
    <section class="row container">
      <div class="column">
        <img src="../../assets/writing_woman.jpg" alt="Contact Us">
      </div>
      <header class="column">
        <h1>Contact</h1>
        <p class="large">
          Vel pharetra vel turpis nunc. Lacus laoreet non curabitur gravida arcu. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Integer quis auctor elit sed vulputate. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Dictumst quisque sagittis purus sit. Faucibus pulvinar elementum integer enim neque.
        </p>
      </header>
    </section>
  </div>
</template>

<style lang="scss">
  ////////////////////////////////////
  // Variables
  ////////////////////////////////////
  $space: 1rem;
  $blue: #2F5F87;
  $blue-l:#4E8EC0;
  $gray: #4A4A4A;
  $mxw: 1240px;

  .row {
    @media only screen and (max-width: 768px) {
      width: 100%;
      float: initial;
      display:flex;
      flex-wrap: wrap;
    }
    h1 {
      text-transform: uppercase;
    }
    /* Clear floats after the columns */
    &:after {
      content: "";
      display: table;
      clear: both;
    }

    .column {
      float: left;
      width: 50%;

    @media only screen and (max-width: 768px) {
       width: 100%;
      }

      &:first-child {
        @media only screen and (max-width: 768px) {
          order: 2;
          }
      }

      &:nth-child(2) {
        @media only screen and (max-width: 768px) {
          order: 1;
          }
      }

      & > div {
        text-align: left;

      }

      img {
        width: 100%;
        display: block;
      }
    }

   header {
      padding: $space*2;

      h1 {
        color: $blue;
        margin-bottom: $space;
        text-align: left;
      }

      p {
        text-align:left;
        a {
          color: $blue;
          font-weight: bold;
        }
      }
    }
  }
</style>

<script>
import FullWidthBanner from '@/components/fullWidthBanner'
export default {
  name: 'ContactPage',
  components: {FullWidthBanner},
  data () {
    return {
      title: 'Contact'
    }
  },
  metaInfo: {
    title: 'Contact Us'
  }
}
</script>
