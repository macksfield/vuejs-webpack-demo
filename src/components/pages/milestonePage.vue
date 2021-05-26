<template>
  <div>
    <image-banner
      :cta_message="'Milestones'"
      :image_url="'./static/boardroom.png'"
    ></image-banner>
    <section class="container">
      <div class="sidebar__container">
        <div class="sidebar__scrollContainer">
          <slide-menu
            :list_name="list_name"
            :list_items="list_items"
            :event_name="'milestonesFiltered'"
            :state_prop="'selectedMilestone'"
          ></slide-menu>
          <button-animated
            @click.native="scrollToTop"
            :button_text="'Scroll to Top'"
            :button_link="''"
            :animation_type="'fill'"
            title="Scroll to the top of the page."
          ></button-animated>
        </div>
      </div>
      <div class="mobile-nav">
        <button id="prevMilestone" @click="prevMilestone()" :disabled="store.state.selectedMilestone === 0"> &#x5e; </button>
        <button id="nextMilestone" @click="nextMilestone()" :disabled="store.state.selectedMilestone >= milestones.length - 1"> &#x5e; </button>
      </div>
      <div class="milestone">
        <article
          v-if="(store.state.selectedMilestone === index && isMobile) || !isMobile"
          v-for="(milestone, index) in milestones"
          :key="index"
          :id="index"
          >
          <h2>{{ milestone.title }}</h2>
          <div v-for="(block, index) in milestone.blocks" :key="index">
            <h3 v-if="block.header">{{block.header}}</h3>
            <template v-if="block.text">
              <p v-html="block.text"></p>
            </template>
            <template v-else-if="block.image">
              <img :src="block.image" :alt="milestone.title"/>
            </template>
            <template v-else-if="block.video">
              <video-banner
                :cta_message="block.video.overlay"
                :video_url="block.video.url"
                :video_image="block.video.image"
              ></video-banner>
            </template>
            <div class="buttonContainer" v-else-if="block.pdfLinks">
                <button-animated v-for="(pdfLink, pdfIndex) in block.pdfLinks" :key="pdfIndex"
                  :button_text="pdfLink.title"
                  :button_link="pdfLink.filepath"
                  :downloadLink="true"
                  :title="pdfTitle(pdfLink.title)"
                ></button-animated>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  ////////////////////////////////////
  // Variables
  ////////////////////////////////////
  $space: 1rem;
  $blue: #2F5F87;
  $blue-l:#4E8EC0;
  $blue-xl:rgba(78,142,192,0.3);
  $gray: #4A4A4A;
  $mxw: 1240px;

    .sidebar__container {
      padding-top: $space*3;
      -webkit-transition: all .5s ease;
      -moz-transition: all .5s ease;
      position: relative;
      overflow: hidden;

      .sidebar__scrollContainer {
      }

      @media only screen and (max-width: 768px) {
        display: none;
      }

      div h3 {
        text-align: center;
        display:block;
        margin-bottom: $space*2;

        .caret {
          display: none;
        }
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
          font-size: 17px;
        }
      }

      .sticky {
        position: fixed;
        width: 30%;
        max-width: $mxw*0.3;
        top: 0;
        bottom: 0;
      }
    }

  .milestone {
       padding: $space*2;
       text-align: left;

        article {
          margin-bottom: $space*4;

          h3 {
            margin-bottom: $space;
          }

          a.btn.fill {
            margin: 10px;
            padding: 10px;
          }

          section.video-block.container {
            width: auto !important;
            margin-bottom: $space*2 !important;
          }
        }

        @media only screen and (max-width: 768px) {
          padding: $space;
        }

       img {
         width: 100%;
         display:block;
         margin-bottom: $space*1.5;
       }

       h2 {
         margin-bottom: $space*1.5;
         color: $blue;
         text-align: left;

            @media only screen and (max-width: 768px) {
              text-align:center;
              max-width: 70%;
              margin-left: auto;
              margin-right: auto;
            }
       }

        p {
         text-align: left;
         color: $gray;
         margin-bottom: $space*1.5;
       }

       div, div h3 {
          color: $gray;
       }

    .buttonContainer {
      display: flex;
      flex-wrap: wrap;

      .btn {
        text-align: center;
      }
    }
  }

  .mobile-nav {
    display: none;
    @media only screen and (max-width: 768px) {
      display: block;
    }

    button {
      font-size: 30px;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: $blue-xl;
      border: 1px solid $blue-l;
      border-radius: 3px;
      color: $blue-l;

      &[disabled] {
        opacity: 0;
      }

      &#prevMilestone {
        left: $space;
        position: absolute;
        transform: rotate(-90deg);
      }
      &#nextMilestone {
        right: $space;
        position: absolute;
        transform: rotate(90deg);
      }
    }
  }
</style>

<script>
import { milestones } from '@/global/milestones'
import SlideMenu from '@/components/slideMenu'
import { store } from '@/global/store'
import ImageBanner from '@/components/imageBanner'
import ButtonAnimated from '@/components/buttonAnimated'
import VideoBanner from '@/components/videoBanner'
import jQuery from 'jquery'
window.jQuery = jQuery

export default {
  name: 'MilestonePage',
  components: {
    SlideMenu, ImageBanner, ButtonAnimated, VideoBanner
  },
  beforeMount () {
    window.addEventListener('scroll', this.sidebarScroll(this))
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.sidebarScroll)
    window.removeEventListener('resize', this.handleResize)
  },
  mounted: function () {
    this.$root.$on('milestonesFiltered', this.milestoneSelected)
    document.documentElement.scrollTop = 0
    this.milestoneRoute()
  },
  computed: {
    isMobile () {
      return this.windowWidth <= 600
    }
  },
  methods: {
    handleResize: function () {
      this.windowWidth = window.innerWidth
      let sidebarContainer = jQuery(this.$el.querySelector('.sidebar__container'))
      if (sidebarContainer.offset().top > window.scrollY) {
        jQuery(this.$el.querySelector('.sidebar__scrollContainer')).removeClass('sticky')
      }
    },
    sidebarScroll: function (vm) {
      return function (event) {
        if (!vm.isMobile) {
          let sidebarContainer = jQuery(vm.$el.querySelector('.sidebar__container'))
          let sidebar = jQuery(vm.$el.querySelector('.sidebar__scrollContainer'))
          let top = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0)
          sidebarContainer.offset().top < top ? sidebar.addClass('sticky') : sidebar.removeClass('sticky')
        }
      }
    },
    milestoneSelected: function (passedData) {
      store.state.selectedMilestone = passedData
      this.$router.push('#' + (passedData + 1))
      let container = this.$el.getElementsByTagName('article')
      if (container[passedData]) {
        this.scrollToTargetAdjusted(container[passedData])
      }
    },
    milestoneRoute: function () {
      var hash = this.$router.currentRoute.hash
      var pattern = /[0-9]+/g
      var urlNumber = pattern.exec(hash)
      if (urlNumber) {
        this.milestoneSelected(urlNumber - 1)
      }
    },
    prevMilestone: function () {
      store.state.selectedMilestone = store.state.selectedMilestone > 0 ? store.state.selectedMilestone - 1 : store.state.selectedMilestone
    },
    nextMilestone: function () {
      store.state.selectedMilestone = store.state.selectedMilestone < this.milestones.length - 1 ? store.state.selectedMilestone + 1 : store.state.selectedMilestone
    },
    scrollToTop: function () {
      jQuery('html, body').animate({ scrollTop: 0 })
    },
    scrollToTargetAdjusted: function (element) {
      let headerOffset = 35
      let elementPosition = jQuery(element).offset().top
      let offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    },
    pdfTitle: function (title) {
      return 'Download the ' + title + ' (PDF).'
    }
  },
  data () {
    return {
      msg: 'milesstones!',
      store: store,
      milestones: milestones,
      activeIndex: store.state.selectedMilestone,
      windowWidth: window.innerWidth,
      list_name: 'Quick Links',
      list_items: [
        { name: 'Milestone 1', route: 'milestones/#milestone-1' },
        { name: 'Milestone 2', route: 'milestones/#milestone-2' },
        { name: 'Milestone 3', route: 'milestones/#milestone-3' },
        { name: 'Milestone 4', route: 'milestones/#milestone-4' },
        { name: 'Milestone 5', route: 'milestones/#milestone-5' }
      ]
    }
  },
  metaInfo: {
    title: 'Milestones'
  }
}
</script>
