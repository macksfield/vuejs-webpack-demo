<template>
   <section class="container">
    <div class="full-page">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC

      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

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

<script>
import ButtonAnimated from '@/components/buttonAnimated'

export default {
  name: 'termsPage',
  components: {
    ButtonAnimated
  },
  data () {
    return {
      msg: 'terms!'
    }
  },
  metaInfo: {
    title: 'Terms of Use'
  }
}
</script>

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
    // width: 85%;
    text-align: left;
    margin: 0 auto $space*2 auto;

    h1{
      margin: $space*2 auto;
      padding-bottom:$space;
      color: $blue;
      text-align: center;
      border-bottom: 1px solid $gray;
      width: 50%
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
