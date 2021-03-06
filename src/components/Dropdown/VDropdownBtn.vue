<template>
  <button
    :class=classes
    :data-tooltip=tooltipData
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
import Layout from '@/mixins/layout';
import Tooltip from '@/mixins/tooltip';
import Animations from '@/mixins/animations';

export default {
  mixins: [
    Layout,
    Tooltip,
    Animations,
  ],

  props: {
    onClick: {
      type: Function,
      default: () => 1,
    },
    animated: {
      type: Boolean,
      default: false,
    },
    btnStyle: {
      type: String,
      default: '',
    },
    tiny: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    extraLarge: {
      type: Boolean,
      default: false,
    },
    loadingLeft: {
      type: Boolean,
      default: false,
    },
    loadingRight: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      const buttonStyles = ['accent', 'outline', 'outline-inverted', 'transparent', 'light', 'dark', 'black'];
      const btnStyle = buttonStyles.includes(this.btnStyle) ? this.btnStyle : null;

      const classes = {
        'btn-dropdown': true,
        'btn-animated': this.animated,
        [`btn-${this.btnStyle}`]: btnStyle != null,
        'btn-tiny': this.tiny,
        'btn-small': this.small,
        'btn-large': this.large,
        'btn-xlarge': this.extraLarge,
        'animated loading loading-left': this.loadingLeft,
        'animated loading loading-right': this.loadingRight,
      };

      return Object.assign(
        this.layoutMixins,
        this.tooltipMixins,
        this.animationsMixins,
        classes,
      );
    },
  },
};
</script>
