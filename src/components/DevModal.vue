<template>
  <div class="modal-container" :class="{ 'container-closing': closing }" @click="checkClickOutside">
    <div class="modal" ref="modal" :class="{ 'modal-closing': closing }">
      <div class="close-button" @click="close">X</div>
      <div>
        <img :src="image" alt="profile picture">
      </div>
      <div class="modal-text">
        <h2>{{ devName }}</h2>
        <h3>{{ dev.position }} Lead</h3>
        <div class="bio">
          <p v-for="text of bioParagraphs" :key="text">
            {{ text }}
          </p>
        </div>
      </div>
      <div class="links-container">
        <ul>
          <li v-for="(link, index) of dev.links" :key="index">
            <a :href="link.url">{{link.name}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DevModal',
  props: {
    dev: Object,
  },
  data() {
    return {
      closing: false,
    }
  },
  methods: {
    close() {
      this.closing = true;
      setTimeout(() => {
        this.$emit('close')
        this.closing = false;
      }, 250)
    },
    checkClickOutside(e) {
      const el = this.$refs.modal;

      // if this is the item or we clicked an item inside it, exit early
      if (el === event.target || el.contains(e.target)) return;

      this.close()
    }
  },
  computed: {
    devName() {
      const { name, nickname } = this.dev;

      if (!name && !nickname) return '[REDACTED]'
      
      if (name && !nickname) return name;

      if (nickname && !name) return nickname;

      const [first, last] = this.dev.name.split(' ');

      return `${first} "${nickname}" ${last}`;
    },
    bioParagraphs() {
      const { bio } = this.dev;
      if (!bio) return []
      return this.dev.bio.split('<br/>').map(p => p.trim());
    },
    image() {
      const { img } = this.dev;

      if (!img) return '#';
      return `/members/${img}`;
    }
  }
}
</script>

<style scoped lang="scss" src="./DevModal.scss">
</style>
