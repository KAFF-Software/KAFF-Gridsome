<template>
  <div>
    <main>
      <h1>Redirecting...</h1>
      <p>If you have not been redirected, <a :href="link">click here.</a></p>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: 'https://docs.google.com/forms/d/1kVE9HpoBgjYdY9Q7S5OYCoTh6Be9hTcyyITr0lyypJ4'
    }
  },
  mounted() {
    document.location.href = this.link;
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