<template>
  <header class="header">
    <strong>
      <g-link to="/">
        <img src="/brand/ba_logo_icon.svg" alt="ba logo">
      </g-link>
    </strong>
    <nav class="nav">
      <g-link to="/">Our Team</g-link>
      <g-link to="/boreal-alyph/">News</g-link>
      <g-link to="/boreal-alyph/">About</g-link>
      <g-link to="/boreal-alyph/">Join Us</g-link>
    </nav>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped lang="scss">
  nav {
    display: flex;

    a {
      color: white;
      text-decoration: none;
      padding: 10px;
    }
  }
</style>