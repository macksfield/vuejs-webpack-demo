<template>
  <footer id="footer">
    <div id="footer-inner">
      <router-link to="/">Home</router-link>
      <router-link to="/terms">Terms of Use</router-link>
      <router-link to="/privacy">Privacy Policy</router-link>
      <router-link to="/faq">FAQ</router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footerComp',
  data () {
    return {
      msg: 'footer!'
    }
  }
}
</script>

<style lang="scss" scoped>

  ////////////////////////////////////
  // Variables
  ////////////////////////////////////
  $space: 1rem;
  $blue: #2F5F87;
  $blue-l:#4E8EC0;
  $gray: #4A4A4A;

  footer {
    border-top: 1px solid gray;
    height: 100px;
    line-height: 100px;
    padding: $space 0;
    width: 100%;
    position: relative;
    display:flex;
    align-items:center;

    @media only screen and (max-width: 600px) {
      height: auto;
      text-align: center;
      padding: $space 0;
    }

    #footer-inner {
      width: 1240px;
      margin: 0 auto;
      max-width: 100%;

      @media only screen and (max-width: 600px) {
        display:flex;
        flex-wrap: wrap;
      }

      a {
        color: $blue;
         padding: $space/2 $space;

        @media only screen and (max-width: 600px) {
          width: 50%;
          text-align: left;
        }

        @media only screen and (min-width: 600px) {
           float: right;
        }

        &:first-of-type {
          float: left;
        }
      }
    }
  }
</style>
<!--<script src="./HelloWorld.vue.js"></script>-->
<!--&lt;!&ndash; Add "scoped" attribute to limit CSS to this component only &ndash;&gt;-->
<!--<style src="./HelloWorld.vue.scss" lang="scss" scoped></style>-->
