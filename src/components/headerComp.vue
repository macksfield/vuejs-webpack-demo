<template>
  <div id="header">
    <div id="header-inner">
      <router-link id="logo-box" to="/">
        <img src="../assets/vue_webpack_logo.jpeg" alt="VueJS Webpack">
      </router-link>
      <nav>
        <router-link to="/faq">FAQ</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/milestones">Milestones</router-link>
      </nav>
      <div id="hamburger" @click="openNav">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 90 90" enable-background="new 0 0 90 90" xml:space="preserve"><g><rect x="9" y="16" fill="#000000" width="72" height="10.9"></rect><rect x="9" y="39.1" fill="#000000" width="72" height="10.9"></rect><rect x="9" y="62.1" fill="#000000" width="72" height="10.9"></rect></g></svg>
      </div>
      <div id="mySidenav" class="sidenav">
        <div id="sideNavHeader">
          <h1>Menu</h1>
        </div>
        <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
        <router-link @click.native="closeNav" to="/">Home</router-link>
        <router-link @click.native="closeNav" to="/faq">FAQ</router-link>
        <slide-menu
          :list_name="list_name"
          :list_items="list_items"
          :event_name="'milestonesFiltered'"
          :state_prop="'selectedMilestone'"
        ></slide-menu>
        <router-link @click.native="closeNav" to="/contact">Contact</router-link>
        <router-link @click.native="closeNav" to="/terms">Terms of Use</router-link>
        <router-link @click.native="closeNav" to="/privacy">Privacy Policy</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SlideMenu from '@/components/slideMenu'

export default {
  name: 'headerComp',
  components: {
    SlideMenu
  },
  mounted: function () {
    this.$root.$on('milestonesFiltered', this.closeAndRedirect)
  },
  methods: {
    slideToggle: function (event) {
      // console.log(event.target)
      // event.preventDefault()
      // $(event.target).slideToggle()
    },
    closeAndRedirect: function () {
      this.closeNav()
      this.$router.push('milestones')
    },
    openNav: function () {
      document.getElementById('mySidenav').style.width = '100%'
    },
    closeNav: function () {
      document.getElementById('mySidenav').style.width = '0'
    }
  },
  data () {
    return {
      msg: 'Header!',
      list_name: 'Milestones',
      list_items: [
        { name: 'Milestone 1', route: 'milestones/#milestone-1' },
        { name: 'Milestone 2', route: 'milestones/#milestone-2' },
        { name: 'Milestone 3', route: 'milestones/#milestone-3' },
        { name: 'Milestone 4', route: 'milestones/#milestone-4' },
        { name: 'Milestone 5', route: 'milestones/#milestone-5' }
      ]
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

  $header--height-desktop: 130px;
  $header--height-mobile: 80px;

  div#header {
    height: $header--height-desktop;
    width: 100vw;
    position: relative;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 $space;

    @media (min-width: 1280px) {
        padding: 0;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
    }

    @media only screen and (max-width: 600px) {
      height: $header--height-mobile;
      padding: 0;
    }

    #header-inner {
      width: 1240px;
      margin: 0 auto;
      max-width: 100%;
      display:flex;
      align-items: center;
      justify-content: space-between;

      #logo-box {
        height: 90px;
        display: flex;
        align-items: center;

        img {
          max-width: 100%;
          max-height: 100%;

          @media only screen and (max-width: 600px) {
            width: 60vw;
            height: auto;
            margin: 0 $space;
            max-width: 250px;
          }
        }
      }

      & > nav {

      // @media only screen and (max-width: 600px) {
      //     display:flex;
      //     justify-content: center;
      //   }

        a {
          color: $blue;
          margin: 0 15px;

          @media only screen and (max-width: 600px) {
            display: none;
            color: white;
          }
        }
      }

      span {
        display: none;
        @media only screen and (max-width: 600px) {
          display: block;
        }
      }

      .menu {
        display: none;
        @media only screen and (max-width: 600px) {
          display: block;
        }
      }

      ////////////////////////////////////
      // Mobile menu
      ////////////////////////////////////
      #hamburger {
        width: 50px;
        height: 50px;
        background-size: 50px;
        background-repeat: no-repeat;
        display: none;
        margin: $space;
        cursor: pointer;
        transition: 0.3s;
        path {  }

        svg * {
          fill: $blue;
          transition: fill .8s ease;
        }

        &:hover svg * {
          fill: $gray;
        }

        @media only screen and (max-width: 600px) {
          display: block;
        }
      }

      #mySidenav {
        text-align: left;

        #sideNavHeader{
          text-transform:uppercase;
          // margin:0 30px 30px;
          padding:$space;
          // padding-bottom: 30px;
          border-bottom: 1px solid whitesmoke;
          h1 {
            font-size: 35px;
          }
        }

        a {
          padding:0 $space*1.5;
          margin-bottom: $space;
        }

        & > div {
          color: whitesmoke !important;
          padding:0 $space*1.5;
          margin-bottom: $space;

          h3 {
            color: whitesmoke;
            width: auto;
            display: block;
            font-weight: normal;
            font-size: 28px;
            font-family: "Proxima Nova Rg", sans-serif;
            margin-left: 0;
            text-align:left;
            font-weight: 300;
          }

          li {
            margin-left:1.5em;
            color:whitesmoke;
            font-size: 16px;
          }

          i {
            border-bottom: 0 solid whitesmoke;
            border-top: 10px solid whitesmoke;

            &.open {
              border-top-width: 0;
              border-bottom-width: 10px;
            }
          }
        }
      }

      /// vendor below
      /* The side navigation menu */
      .sidenav {
        height: 100%; /* 100% Full-height */
        width: 0; /* 0 width - change this with JavaScript */
        position: fixed; /* Stay in place */
        z-index: 5; /* Stay on top */
        top: 0; /* Stay at the top */
        left: 0;
        background-color: $blue; /* Black*/
        overflow-x: hidden; /* Disable horizontal scroll */
        // padding-top: 0px; /* Place content 60px from the top */
        transition: 0.3s; /* 0.5 second transition effect to slide in the sidenav */
        text-align: left;

          // a {
          //   padding-left: $space*1.5;
          //   margin-bottom:$space;
          // }

          // h3 {
          //   color: white;
          //   font-size: 25px;
          //   font-family: 'Proxima Nova Rg', sans-serif;
          //   font-weight: 300;
          // }

      }

      /* The navigation menu links */
      .sidenav a {
        // padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: whitesmoke;
        display: block;
        transition: 0.3s;
      }

      /* When you mouse over the navigation links, change their color */
      .sidenav a:hover {
        color: $gray;
        font-weight: bold;
      }

      /* Position and style the close button (top right corner) */
      .sidenav .closebtn {
        position: absolute;
        top: 5px;
        right:0;
        font-size: 50px;
        margin-left: 50px;
        padding: 0;
      }

      /* Style page content - use this if you want to push the page content to the right when you open the side navigation */
      #main {
        transition: margin-left .5s;
        padding: 20px;
      }

      /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
      @media screen and (max-height: 450px) {
        .sidenav {padding-top: 15px;}
        .sidenav a {font-size: 18px;}
      }
    }
  }
</style>
