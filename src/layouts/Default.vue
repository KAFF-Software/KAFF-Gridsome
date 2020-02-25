<template>
  <div>
    <TheHeader />

    <main>
      <slot />
    </main>

    <TheFooter />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import TheFooter from '@/components/TheFooter.vue'
import TheHeader from '@/components/TheHeader.vue'

export default {
  components: {
    TheFooter,
    TheHeader,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');

:root {
  --bg: #222;
  --text-col: white;
  --main-font: Roboto;
  --primary-color: #cf222c;
}

body {
  font-family: var(--main-font), "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background: var(--bg);
  color: var(--text-col);
}

main a {
  color: var(--primary-color)
}
</style>
