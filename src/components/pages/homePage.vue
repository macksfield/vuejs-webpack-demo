<template>
  <div class="home">
    <video-banner
      :cta_message="cta_message"
      :video_url="video_url"
      :video_image="video_image"
    ></video-banner>
    <section class="container">
      <ul class="content-list">
        <li>
          <header>
            <h2>About</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. <br><br> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
            </p>
          </header>
        </li>
        <li class="milestones-cta">
          <header>
            <h2>Milestones</h2>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Find a <a data-fancybox href="https://vimeo.com/294617701">video description</a>.<br><br>
              To learn more specific details, please view this PDF here. <a href="./static/pdfs/example.pdf"
                                     target="_blank" download>Example PDF link</a>.
            </p>
            <button-animated
              :button_text="milestones_button_text"
              :button_link="milestones_button_link"
              :animation_type="milestones_button_animation"
            ></button-animated>
          </header>
        </li>
        <li class="faq-cta">
          <header>
            <h2>Frequently Asked Questions</h2>
            <p>
              Et harum quidem rerum facilis est et expedita distinctio.<br><br>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.
            </p>
            <button-animated
              :button_text="faq_button_text"
              :button_link="faq_button_link"
              :animation_type="faq_button_animation"
            ></button-animated>
          </header>
        </li>
        <li>
          <img src="../../assets/table_oof.png" alt="FAQ Questions">
        </li>
      </ul>
    </section>
    <full-width-banner
      :title="contact_banner_title"
      :content="contact_banner_content"
      :button_text="contact_banner_button_text"
      :button_link="contact_banner_button_link"
    ></full-width-banner>
  </div>
</template>

<style lang="scss" scoped>

  ////////////////////////////////////
  // Variables
  ////////////////////////////////////
  $space: 1rem;
  $blue: #2F5F87;
  $blue-l: #4E8EC0;
  $gray: #4A4A4A;

  section {
    width: 100%;

    /* Clear floats after the columns */
    // &:after {
    //   content: "";
    //   display: table;
    //   clear: both;
    // }

    // .column {
    //   float: left;
    //   width: 50%;

    //   @media only screen and (max-width: 600px) {
    //     width: 100%;
    //     float: initial;
    //   }

    //   img {
    //     width: calc(100% - 1rem);
    //     margin: $space;
    //     display:block;

    //     @media only screen and (max-width: 600px) {
    //       width: 100%;
    //       margin: 0;
    //     }
    //   }

    //     @media only screen and (min-width: 600px) {
    //         &:first-child {
    //           border-right: 1px solid $blue-l;

    //         }
    //     }
    // }

    .content-list {
      width: 100%;
      list-style: none;
      position: relative;
      padding: 0;
      display: flex;
      flex-wrap: wrap;

      li {
        width: 100%;

        @media only screen and (min-width: 600px) {
          width: 50%;
        }

        header {
          padding: $space*2 $space*2;
          min-height: 300px;
          position: relative;

          @media only screen and (max-width: 600px) {
            min-height: 0;
            padding: $space*2 $space 0;
            text-align: left;
          }

          h2 {
            color: $blue;
            margin-bottom: $space;
          }

          p {
            text-align: left;
            color: $gray;
          }

          p + button {
            margin-top: $space*2;

            @media only screen and (max-width: 600px) {
              margin-bottom: $space*2;
            }
          }
        }

        img {
          width: calc(100% - 1rem);
          margin: $space;
          display: block;

          @media only screen and (max-width: 600px) {
            margin: $space 0;
            width: 100%;
          }
        }

        // faq
        &.faq-cta {
          order: 2;
          position: relative;

          @media only screen and (min-width: 600px) {
            &:before {
              display: block;
              content: '';
              width: 1px;
              height: 140px;
              background-color: $blue-l;
              position: absolute;
              left: 0;
              top: 40%;
            }
          }

          @media only screen and (max-width: 600px) {
            background-color: $blue;
            color: white;
            order: 4;

            h2, p, button {
              color: white;
            }

            button {
              border-bottom: 1px solid whitesmoke;
            }
          }
        }

        &.milestones-cta {
          order: 3;
          header {
            text-align: left !important;
          }
        }

        &:last-child {
          order: 4;
          @media only screen and (max-width: 600px) {
            order: 2;
          }
        }
      }
    }
  }

</style>

<script>
import VideoBanner from '@/components/videoBanner'
import FullWidthBanner from '@/components/fullWidthBanner'
import ButtonAnimated from '@/components/buttonAnimated'

export default {
  name: 'homePage',
  components: {ButtonAnimated, FullWidthBanner, VideoBanner},
  data () {
    return {
      cta_message: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA',
      video_url: 'https://player.vimeo.com/video/483824462',
      video_image: './static/PWLTD.jpg',
      contact_banner_title: 'Contact',
      contact_banner_content: 'Have an additional question not addressed in the FAQ or want to share feedback? Please send an email to <a href="mailto:mail@maxtest.net">mail@maxtest.net</a>, and our team will share responses to frequently asked questions through the website as quickly as possible.',
      contact_banner_button_text: 'Contact',
      contact_banner_button_link: '/contact',
      faq_button_text: 'FAQ Page',
      faq_button_link: '/faq',
      faq_button_animation: 'fill',
      milestones_button_text: 'Milestones',
      milestones_button_link: '/milestones',
      milestones_button_animation: 'fill'
    }
  },
  metaInfo: {
    title: 'Maxfield\'s Vue Site',
    // override the parent template and just use the above title only
    titleTemplate: null
  }
}
</script>
