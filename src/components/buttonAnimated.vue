<template>
  <a
    v-if="downloadLink"
    :href="button_link"
    :class="['btn', animation_type, {'invertColors': invertColors}]"
    :name="button_text"
    title="Download the button_text"
    download>
    {{button_text}}
  </a>
  <router-link
    v-else
    tag='button'
    :to="button_link"
    :name="button_text"
    :class="[animation_type, {'invertColors': invertColors}]">
    {{button_text}}
  </router-link>
</template>

<script>
import pdf from 'vue-pdf'

export default {
  name: 'buttonAnimated',
  components: {
    pdf
  },
  mounted: function () {
    // console.log('buttonAnimated mounted', this)
  },
  data () {
    return {
      msg: 'full width banner!'
    }
  },
  props: {
    animation_type: {
      type: String,
      required: false,
      default: 'fill'
    },
    button_text: {
      type: String,
      required: true
    },
    button_link: {
      type: String,
      required: true
    },
    downloadLink: {
      type: Boolean,
      required: false,
      default: false
    },
    invertColors: {
      type: Boolean,
      required: false,
      default: false
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
  $mxw: 1240px;

  button, .btn {
    position: relative;
    height: 45px;
    min-width: 150px;
    padding: 5px 1rem;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 2px;
    border: none;
    border-bottom: 1px solid $blue;
    color: $blue;
    outline: 0;
    overflow:hidden;
    background: none;
    z-index: 1;
    cursor: pointer;
    transition:         0.2s ease-in;
    -o-transition:      0.2s ease-in;
    -ms-transition:     0.2s ease-in;
    -moz-transition:    0.2s ease-in;
    -webkit-transition: 0.2s ease-in;

    &[disabled=disabled] {
      cursor: not-allowed;

      &.fill:before {
        background: $gray;
      }
    }
  }

  button + button {

      @media only screen and (min-width: 600px) {
        margin-left: $space;
      }
  }

  button.invertColors {
      a.btn {
          padding: 10px;
          margin: 10px;
      }
  }

  a.btn + a.btn {
      @media only screen and (min-width: 600px) {
        margin-left: $space;
      }
  }

  button.invertColors, .btn.invertColors {
    color: whitesmoke;
    border-bottom: 1px solid whitesmoke;

    &.fill:hover {
      color: $blue;
    }

    &.fill:before {
      background: whitesmoke;
    }
  }

  .fill:hover {
    color: whitesmoke;
  }

  .fill:before {
    content: "";
    position: absolute;
    background: $blue;
    bottom: 0;
    left: 0;
    right: 0;
    top: 100%;
    z-index: -1;
    -webkit-transition: top 0.09s ease-in;
  }

  .fill:hover:before {
    top: 0;
  }

  .fade:before{
    content:"→";
    position:absolute;
    color:#383736;
    left: 88%;
    opacity: 0;
    -webkit-transition: all 0.2s ease-in;
  }

  .fade:hover:before{
    left:91%;
    opacity:1;
  }

  .fade:hover {
    border: 0px #fff solid;
    -webkit-transform: scale(1.04,1.04);
    -webkit-transition: border 0.3s ease-out;
    -webkit-transition: transform 250ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
  }

  .arrow{
    text-align:left;
    padding-left:17px;
  }

  .arrow:before{
    content:"→";
    position:absolute;
    color:#383736;
    left: 83%;
    opacity: 0;
    -webkit-transition: all 250ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
  }

  .arrow:hover:before{
    left:84%;
    opacity:1;
  }

  .arrow:hover {
    width:170px;
  }

  .slide:after{
    content:"View Story";
    position:absolute;
    width:100%;
    height:100%;
    left:0;
    text-align:center;
    -webkit-transition: all 400ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
  }

  .slide:before {
    content:"Read it →";
    height:100%;
    width:100%;
    position:absolute;
    color:#383736;
    left:-100%;
    opacity: 0;
    -webkit-transition: all 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
  }

  .slide:hover{
    background:#383736;
  }

  .slide:hover:before{
    left:0;
    opacity:1;
    color:#fff;
  }
  .slide:hover:after{
    left:100%;
    opacity:0;
  }

  .slide.left:hover{
    background:none;
  }

  .slide.left:before {
    left:100%;
    color:#383736;
    -webkit-transition: all 425ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
  }

  .slide.left:hover:before{
    left:0;
  }

  .svg{
    -webkit-transition: all 150ms cubic-bezier(0.445, 0.050, 0.550, 0.950);
  }

  .svg:before{
    position:absolute;
    content:"";
    background: url(https://f.cl.ly/items/3H3A0D1N281a2T280F3o/heist.svg) no-repeat center center;
    width:100%;
    height:100%;
    top:0;
    left:0;
    z-index:-1;
    opacity:0;
    -webkit-transition: all 250ms cubic-bezier(0.230, 1.000, 0.320, 1.000);
  }

  .svg:after {
    content: "";
    position: absolute;
    background: #d19b26;
    bottom: 0;
    left: 0;
    right: 0;
    top: 100%;
    z-index: -2;
    -webkit-transition: all 250ms cubic-bezier(0.230, 1.000, 0.320, 1.000);
  }
  .svg:hover{
    color:white;
    border: 0px #d19b26 solid;
  }
  .svg:hover:before {
    opacity: .8;
  }
  .svg:hover:after {
    top: 0;
  }
</style>
<!--<script src="./HelloWorld.vue.js"></script>-->
<!--&lt;!&ndash; Add "scoped" attribute to limit CSS to this component only &ndash;&gt;-->
<!--<style src="./HelloWorld.vue.scss" lang="scss" scoped></style>-->
