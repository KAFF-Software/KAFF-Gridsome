<template>
  <div
    class="typing"
    :class="{typing: true, 'border-type': borderType, 'after-type': !borderType}"
    :style="{
      fontSize: size, 
      borderRightWidth: overrideWidth, 
      margin: thin ? '' : '10px 0'
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Typing',
  props: {
    mode: {
      type: String,
      default: 'after',
      validator(val) {
        return ['border', 'after'].includes(val)
      }
    },
    overrideWidth: {
      type: String,
      default: '15px'
    },
    size: String,
    thin: Boolean,
  },
  data() {
    return {
      borderType: this.mode ? this.mode.toLowerCase() === 'border' : false
    }
  }
}
</script>

<style scoped>
  .typing {
    font-weight: 800;
    color: #cf222c;
    display: inline-block;
    letter-spacing: .3em;
  }

  .border-type {
    padding: -10px;
    letter-spacing: 4px;
    padding-right: 5x;
    border-right: 15px solid #cf222caa;
    animation: border-typing 1s linear infinite;
  }

  @keyframes border-typing {
    0% {
      border-color: #0000;
    }
    1% {
      border-color: #cf222caa;;
    }
    50% {
      border-color: #cf222caa;;
    }
    51% {
      border-color: #0000;
    }
    100% {
      border-color: #0000;
    }
  }

  .after-type {
    position: relative;
  }

  .after-type:after {
    content: '';
    background: #cf222caa;
    width: 15px;
    height: 100%;
    position: absolute;
    top: 0; right: -20px;
    animation: after-typing 1s linear infinite;
  }

  @keyframes after-typing {
    0% {
      opacity: 0;
    }
    1% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    51% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
</style>
