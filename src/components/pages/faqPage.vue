<template>
  <div>
    <image-banner
      :cta_message="'Frequently Asked Questions'"
      :image_url="'./static/team_smiling_pointing.png'"
    ></image-banner>
    <section class="container">
    <div id="sidebar__container" class="sidebar__container" v-if="(mobileFAQSelected === false && isMobile) || !isMobile">
      <div class="sidebar__scrollContainer">
        <h4 class="sidebar__header">Search a question</h4>
        <div class="sidebar__subheader">Choose your topic and/or audience, then press 'Search'.</div>
        <slide-menu class="sidebar"
                    :list_name="topic_list_title"
                    :list_items="topic_list_items"
                    :event_name="'faqFiltered'"
                    :state_prop="'selectedTopic'"
                    :default_closed="true"
        ></slide-menu>
        <div id="and_or">
          <span @click="store.state.faqAnd = true" :class="{bold: store.state.faqAnd}">and</span>
          &nbsp;/&nbsp;
          <span @click="store.state.faqAnd = false" :class="{bold: store.state.faqAnd === false}">or</span>
        </div>
        <slide-menu class="sidebar"
                    :list_name="aud_list_name"
                    :list_items="aud_list_items"
                    :event_name="'faqFiltered'"
                    :state_prop="'selectedAudience'"
                    :default_closed="true"
        ></slide-menu>
        <button-animated
          @click.native="searchFaq"
          :button_text="'Search'"
          :button_link="''"
          :animation_type="'fill'"
          :disabled="store.state.selectedAudience === -1 && store.state.selectedTopic === -1"
          title="Please choose search parameters first."
        ></button-animated>
        <button-animated
          @click.native="clearFilters"
          :button_text="'Clear'"
          :button_link="''"
          :animation_type="'fill'"
          v-if="store.state.selectedAudience > -1 || store.state.selectedTopic > -1"
          title="Please choose search parameters first."
        ></button-animated>
      </div>
      </div>
      <div class="faq__container" v-if="(mobileFAQSelected && isMobile) || !isMobile">
        <header class="faq__header">
          <h4>Full List of Questions</h4>
          <p>Dolor magna eget est lorem. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. We are committed to providing you with answers to questions as we have them. You can scroll through below to find a full list of frequently asked questions, or filter the questions by topic and/or audience. You can also download a PDF of the full list of questions.</p>
          <p>If you don’t see your question here, visit our contact page and email <a href="mailto:mail@test.net">mail@test.net.</a> Our team will respond to frequently asked questions through this page as soon as possible.</p>
          <div class="buttonContainer">
            <button-animated
              :button_text="'Open as a PDF'"
              :button_link="'./static/pdfs/example.pdf'"
              :animation_type="'fill'"
              :downloadLink="true"
              :title="'Download a copy of the FAQ'"
            ></button-animated>
          </div>
        </header>
        <div class="faq__active-filters">
        <div v-if="store.state.selectedTopic > -1 || store.state.selectedAudience > -1"><p class="large">Here is the list of questions for:</p></div>
        <ul id="activeFilters">
          <li class="filter-tag" v-if="store.state.selectedTopic > -1">{{topic_list_items[store.state.selectedTopic].name}}</li>
          <li v-if="store.state.faqAnd && bothFiltersSelected">and</li>
          <li v-if="store.state.faqAnd === false && bothFiltersSelected">or</li>
          <li class="filter-tag" v-if="store.state.selectedAudience > -1">{{aud_list_items[store.state.selectedAudience].name}}</li>
        </ul>
        </div>
        <div id="noResults" v-if="myItemsFiltered.length === 0">No results found!</div>
      <VueFaqAccordion v-if="myItemsFiltered.length > 0" class="accordion__container" id="accordion-wrap"
                       :items="myItemsFiltered"
      />
      </div>
    </section>
    <full-width-banner
      v-if="(mobileFAQSelected === false && isMobile) || !isMobile"
      :title="contact_banner_title"
      :content="contact_banner_content"
      :button_text="contact_banner_button_text"
      :button_link="contact_banner_button_link"
    ></full-width-banner>
    <full-width-banner
      v-if="mobileFAQSelected && isMobile"
      :title="'Got a more specific question in mind?'"
      :content="'Use our tool to find your answer'"
      :button_text="'Search a question'"
      :button_link="''"
      @click.native="mobileFAQSelected = false"
    ></full-width-banner>
  </div>
</template>

<script>
import VueFaqAccordion from 'vue-faq-accordion'
import FullWidthBanner from '@/components/fullWidthBanner'
import SlideMenu from '@/components/slideMenu'
import { store } from '@/global/store'
import ImageBanner from '@/components/imageBanner'
import ButtonAnimated from '@/components/buttonAnimated'
import { faqs } from '@/global/faqs'
import jQuery from 'jquery'
window.jQuery = jQuery

export default {
  name: 'faqPage',
  components: {
    VueFaqAccordion, FullWidthBanner, SlideMenu, ImageBanner, ButtonAnimated
  },
  beforeMount () {
    window.addEventListener('resize', this.handleResize)
    // window.addEventListener('scroll', this.sidebarScroll(this))
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
    // window.removeEventListener('resize', this.sidebarScroll)
  },
  mounted: function () {
    this.$root.$on('faqFiltered', this.filterSelected)
    this.myItemsFiltered = this.myItems
  },
  computed: {
    isMobile: function () {
      return this.windowWidth <= 768
    },
    bothFiltersSelected: function () {
      return this.store.state.selectedTopic > -1 && this.store.state.selectedAudience > -1
    }
  },
  methods: {
    handleResize: function () {
      this.windowWidth = window.innerWidth
    },
    // cross browser is buggy
    // sidebarScroll: function (vm) {
    //   return function (event) {
    //     if (!vm.isMobile) {
    //       let sidebarContainer = jQuery(vm.$el.querySelector('.sidebar__container'))
    //       let sidebar = jQuery(vm.$el.querySelector('.sidebar__scrollContainer'))
    //       let top = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0)
    //       let sidebarHeight = 1200 || sidebar.height() // make static since making it responsive will take too long
    //       if (sidebarContainer.offset().top < top && (sidebarContainer.height() - sidebarHeight + sidebarContainer.offset().top) > top) {
    //         sidebar.css('top', top - sidebarContainer.offset().top)
    //       } else if (sidebarContainer.offset().top > top) {
    //         sidebar.css('top', 0)
    //       }
    //     }
    //   }
    // },
    clearFilters: function () {
      store.state.selectedAudience = -1
      store.state.selectedTopic = -1
      this.myItemsFiltered = this.myItems
    },
    searchFaq: function () {
      this.myItemsFiltered = (this.bothFiltersSelected === true && this.store.state.faqAnd === true) ? this.myItems.filter(this.filterFaq(this)) : this.myItems.filter(this.filterFaq(this))
      if (this.isMobile) {
        this.mobileFAQSelected = true
      }
    },
    filterSelected: function (passedData) {
      // console.log(passedData);
    },
    filterFaq: function (vm) {
      return function (element) {
        let aud = vm.store.state.selectedAudienceObject.tag
        let top = vm.store.state.selectedTopicObject.tag
        if (vm.bothFiltersSelected === true && vm.store.state.faqAnd === true) {
          return vm.arrayContains(aud, element.filterTags) && vm.arrayContains(top, element.filterTags)
        } else {
          return vm.arrayContains(aud, element.filterTags) || vm.arrayContains(top, element.filterTags)
        }
      }
    },
    arrayContains: function (needle, arrhaystack) {
      return (arrhaystack.indexOf(needle) > -1)
    }
  },
  data () {
    return {
      store: store,
      windowWidth: window.innerWidth,
      myItems: faqs,
      myItemsFiltered: [],
      topic_list_title: 'Choose your topic',
      topic_list_items: [
        {name: 'Topic One', route: 'faq/#topic-1', tag: 'topic-1'},
        {name: 'Topic Two', route: 'faq/#topic-2', tag: 'topic-2'},
        {name: 'Topic Three', route: 'faq/#topic-3', tag: 'topic-3'},
        {name: 'Topic Four', route: 'faq/#topic-4', tag: 'topic-4'},
        {name: 'Topic Five', route: 'faq/#topic-4', tag: 'topic-4'},
        {name: 'Topic Six', route: 'faq/#topic-5', tag: 'topic-5'},
        {name: 'Topic Seven', route: 'faq/#topic-6', tag: 'topic-6'}
      ],
      aud_list_name: 'Choose your audience',
      aud_list_items: [
        {name: 'Audience One', route: 'faq/#audience-1', tag: 'audience-1'},
        {name: 'Audience Two', route: 'faq/#audience-2', tag: 'audience-2'},
        {name: 'Audience Three', route: 'faq/#audience-3', tag: 'audience-3'},
        {name: 'Audience Four', route: 'faq/#audience-4', tag: 'audience-4'},
        {name: 'Audience Five', route: 'faq/#audience-5', tag: 'audience-5'}
      ],
      contact_banner_title: "Don't see the answer you are looking for?",
      contact_banner_content: 'Dolor sed viverra ipsum nunc. Blandit aliquam etiam erat velit scelerisque in dictum. Fermentum iaculis eu non diam phasellus vestibulum. Fames ac turpis egestas sed tempus urna. Ut faucibus pulvinar elementum integer. Nascetur ridiculus mus mauris vitae ultricies leo.',
      contact_banner_button_text: 'Contact',
      contact_banner_button_link: '/contact',
      mobileFAQSelected: true
    }
  },
  metaInfo: {
    title: 'FAQ'
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
  $gray-l: #f2f2f2;
  $mxw: 1240px;

     .sub-menu {
       li {
         text-align: left;

         &:last-child {
           padding-bottom: 0;
         }
       }
     }

  #and_or {
    // border-bottom: 2px solid $gray-l;
    margin: 1rem;
    padding: .5rem;
      span {
        cursor: pointer;
        color: $blue;
    }
  }

  .sidebar__container {
    padding-bottom:50px;
    padding-top: 0;
    position: relative;
    overflow: hidden;
    color: $gray;

    .sidebar__scrollContainer {
      position: relative;
    }

    .sticky {
      position: fixed;
      width: 30%;
      max-width: $mxw*0.3;
      top: 0;
      bottom: 0;

      &.stuck {
        position: absolute;
        width: auto;
        max-width: 372px;
      }
    }

      @media only screen and (max-width: 768px) {
        width:100%;
      }

    .sidebar__header {
      text-align: left;
      padding: $space $space 0;
      font-size: 30px;
    }

    .sidebar__subheader {
      font-size: 16px;
      font-weight: 300;
      text-align: left;
      padding: 1rem 1rem 1rem;
    }

    .sub-menu {
      li {
        text-align: left;

        &:last-child {
          padding-bottom: 0;
        }
      }
    }
    #and_or {
      span {
        cursor: pointer;
        color: $blue;

        &:hover {
          color: black;
        }
      }
      .bold {
        font-weight: bold;
      }
    }
  }

  #noResults {
    margin: 10px auto;
  }

  // tyring to be as specific as possible to override npm package styles
  .faq__container {
      margin: 0;
      max-width: none;
      position: relative;

      .buttonContainer {
        text-align: center;
        margin: $space*2 0;

        @media only screen and (min-width: 768px) {
          position: absolute;
          top: 0;
          right: 0;
          margin: $space*0.5 0;
          padding: 1rem 1rem 0.25rem;
        }

        a.btn {
          margin: 20px 0;
          padding: 10px;
        }
      }

      @media only screen and (max-width: 768px) {
        padding: $space;
      }

      .faq__active-filters {
          color: $gray;

          p.large {
            @media only screen and (max-width: 768px) {
              padding-top: $space;
            }
          }

          ul {
          list-style:none;
          text-align:center;
          padding: 0;
          margin: 1em 0;

          li {
            display: inline;
            font-size: 17px;
            color: $gray;
            font-weight: bold;

            &.filter-tag {
              color: $blue;
              display: inline;
              font-weight:300;

            }
          }
        }
      }

  }

  .faq__header {
    text-align:left;
    padding: $space $space $space/4;

    @media only screen and (max-width: 768px) {
         padding: 0 $space $space/4;
    }

    h4, p {
      margin-bottom: $space;
      color: $gray;
      display: block;
    }

  }

  .accordion {
    border: 0px solid $blue-l !important;
    margin-bottom: $space;
    padding: 0 $space/2;
  }

  .accordion__item  {
    border: 1px solid $blue-l !important;
    border-radius: 3px;
    margin-bottom: $space/2 !important;
    position: relative;
  }

  .accordion__title {
    display:flex !important;
    padding: $space/1.5 !important;
    color: $gray !important;
    overflow: hidden;
    position: relative;

    &:before {
      content:'';
      display:block;
      height: 100%;
      width: $space*2.3;
      position:absolute;
      background-color: $blue-l;
      opacity: .25;
      left: 0;
      top: 0;
      bottom: 0;
    }

    &:hover {
      color: $blue-l !important;
    }

    .accordion__title-text {
      padding-left: $space*2.5 !important;
      text-align:left !important;
    }

  }

  .accordion__title + div p  {
      padding: $space !important;
      color: $gray !important;

      br {
        display: block;
        margin-bottom: $space;
      }
    padding: $space !important;
    color: $gray !important;
  }

  .accordion__title_active {
    border-bottom: 1px solid $blue-l !important;
    .accordion__title-text {
      color: $blue-l !important;
    }
  }

  .accordion__toggle-button, .accordion__toggle-button_active,  .accordion__toggle-button:hover {
    float: left !important;
    position: absolute !important;

    &::before, &::after {
      background: $blue !important;
      display:block;
    }
  }

</style>
