<template>
  <div @click="$emit('pressed', dev)" class="card">
    <img :src="'members/' + dev.img" :alt="dev.name">
    <h2>
      {{dev.name.split(' ')[0]}}
      <div class="nickname">
        <span v-show="dev.name.length">"</span>
        <span>{{dev.nickname}}</span>
        <span v-show="dev.name.length">"</span>
      </div>
      {{dev.name.split(' ')[1]}}
    </h2>
    <h3>{{dev.position}} Lead</h3>
  </div>
</template>

<script>
export default {
  name: 'DevCard',
  props: {
    dev: Object,
  },
  data() {
    return {
      firstName: 0
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  margin: 20px;
  padding: 10px 15px;
  border: 1px solid #0000;
  border-radius: 4px;
  cursor: pointer;
  transition: .25s;
  line-height: 1.4em;
  text-align: center;

  animation: fade-in 1s;
  @keyframes fade-in {
    from {
      opacity: 0;
      max-height: 0px;
      padding: 0;
    }
    to {
      opacity: 1;
      max-height: 600px;
    }
  }

  &:hover {
    border-color: white;
    transform: scaleX(1.1) scaleY(1.1);
  }

}


img {
  border-radius: 50%;
  height: 100px;
  width: 100px;
}

h2 {
  font-weight: 800;
  margin: 10px 0;
  padding: 0;
  font-size: 1em;
  
  .nickname {
    line-height: 1em;
  }
}

h3 {
  color: #fff8;
  font-weight: 200;
  margin: 0;
  padding: 0;
  font-size: 1.05em;
}
</style>
