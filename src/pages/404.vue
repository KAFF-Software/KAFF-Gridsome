<template>
  <div>
    <main>
      <h1>Whoops!</h1>
      <h2>404 Page Not Found</h2>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import Default from '@/layouts/Default';
import TheFooter from '@/components/TheFooter';

export default {
  components: {
    Default,
    TheFooter
  }
}
</script>

<style scoped>
  main {
    height: 50vh;
    width: 100%;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>