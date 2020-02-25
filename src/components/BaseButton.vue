<template>
    <a :href="link" class="button" :class="{'thin-btn': thin}" @click="$emit('pressed')">
      <slot></slot>
    </a>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    href: String,
    thin: {
      defualt: false,
      type: Boolean
    }
  },
  computed: {
    link() {
      if (!this.href) return
      if (this.href.startsWith('http') || this.href.startsWith('/')) return this.href
      return 'http://' + this.href
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  padding: 10px 20px;
  box-sizing: border-box;
  border: 2px var(--primary-color) solid;
  color: var(--primary-color);
  transition: 0.2s all;
  border-radius: 8px;
  line-height: 1em;
  transition: .25s;
}

.thin-btn {
  padding: 4px 20px;
}

.button:hover, .button:focus {
  background: var(--primary-color);
  color: white;
}
</style>
