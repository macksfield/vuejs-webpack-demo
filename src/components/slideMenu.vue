<template>
  <div>
    <h3 @click="toggleMenu">{{list_name}}&nbsp;<i :class="['caret', {'open': default_closed}]"></i></h3>
      <ul class="sub-menu" v-bind:style= "[default_closed ? {'display': 'none'} : '']">
      <li
        v-for="(list_item, index) in list_items"
        :key="index"
        :class="{ active: index === getProp }"
        @click="selectAction(index)">
        {{list_item.name}}
      </li>
    </ul>
  </div>

</template>

<script>
import { store } from '@/global/store'
import jQuery from 'jquery'
window.jQuery = jQuery

export default {
  name: 'slideMenu',
  data () {
    return {
      store: store
    }
  },
  methods: {
    toggleMenu (event) {
      let subMenu = event.target.parentNode.querySelector('ul')
      let caret = event.target.querySelector('i')
      caret.classList.toggle('open')
      jQuery(subMenu).slideToggle('fast')
    },
    selectAction (index) {
      store.setAction(this.state_prop, index)
      store.setAction(this.state_prop + 'Object', this.list_items[index])
      // this.$root.$emit(this.state_prop, index)
      this.$root.$emit(this.event_name, index)
    }
  },
  computed: {
    getProp: function () {
      return store.state[this.state_prop]
    }
  },
  props: {
    list_items: {
      type: Array,
      required: true
    },
    list_name: {
      type: String,
      required: true
    },
    event_name: {
      type: String,
      required: true
    },
    state_prop: {
      type: String,
      required: true
    },
    default_closed: {
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

  div {
    cursor: pointer;
    font-weight: bold;
    padding: $space;

    h3 {
      color: $blue;
      text-align: left;
      width: 100%;
      display:flex;
      align-items: center;
      justify-content: space-between;
    }

    ul {
      font-weight: normal;
      margin: 10px;
      font-size: 20px;
      list-style: none;
      padding: 0;

      li {
        padding: 5px;
        color:$blue;

        &:hover {
          font-weight: bold;
        }
        &.active {
         font-weight: bold;
        }
      }
    }
  }
  .caret {

    pointer-events: none;
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 10px solid $blue;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: 0 solid $blue;
    overflow: hidden;
    transition: 200ms ease;
  }

  .caret.open {
    border-top-width: 0;
    border-bottom-width: 10px;
  }
</style>
