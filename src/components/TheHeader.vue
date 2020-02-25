<template>
  <div class="header-container" ref="header">
    <header>
      <div id="image-container">
        <g-link to="/">
          <img src="/brand/kaff_short.svg" alt="KAFF Logo">
        </g-link>
        <g-link to="/boreal-alyph/">
          <img src="/brand/ba_logo_icon.svg" alt="Boreal Alyph Logo">
        </g-link>
      </div>
      <nav>
        <ul>
          <li>
            <a @click="moveToTeam">Our Team</a>
          </li>
          <li>
            <a @click="moveToNews">News</a>
          </li>
          <li>
            <a @click="moveToAbout">About</a>
          </li>
          <li>
            <a @click="moveToJoin">Join Us</a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
import VueScrollTo from 'vue-scrollto'

export default {
  name: 'TheHeader',
  mounted() {
    const header = this.$refs.header
    document.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 50) {
        header.classList.add('not-top');
      } else if (document.documentElement.scrollTop === 0) {
        header.classList.remove('not-top');
      }
    })
  },
  methods: {
    moveToTeam() {
      if (window.location.href.includes('boreal')) {
        this.$router.push(
          '/',
          () => setTimeout(() => this.scrollTo('dev-leads'), 300)
        )
        return
      }
      this.scrollTo('dev-leads')
    },
    moveToNews() {
      if (!window.location.href.includes('boreal')) {
        this.$router.push(
          '/boreal-alyph',
          () => setTimeout(() => this.scrollTo('news'), 300)
        )
        return
      }
      this.scrollTo('news')
    },
    moveToAbout() {
      if (!window.location.href.includes('boreal')) {
        this.$router.push(
          '/boreal-alyph',
          () => setTimeout(() => this.scrollTo('about'), 300)
        )
        return
      }
      this.scrollTo('about', -100)
    },
    moveToJoin() {
      if (!window.location.href.includes('boreal')) {
        this.$router.push(
          '/boreal-alyph',
          () => setTimeout(() => this.scrollTo('join'), 300)
        )
        return
      }
      this.scrollTo('join', -50)
    },
    scrollTo(id, offset = 0) {
      VueScrollTo.scrollTo(document.getElementById(id), 1000, {
        container: 'body',
        easing: 'ease',
        offset: offset,
        force: true,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true
      })
    }
  }
}
</script>

<style scoped lang="scss">
.header-container {
  background: #0001;
  position: fixed;
  width: 100%;
  /* required to add this in order for sticky to work for some reason */
  top: 0;
  z-index: 100;

  animation: non-scrolling-header .25s;
  animation-fill-mode: forwards; 
}

@keyframes non-scrolling-header {
  from {
    background: #000a;
    padding: 10px 0;
  }
  to {
    background: #0001;
    padding: 40px 0;
  }
}

.not-top {
  animation: scrolling-header .25s;
  animation-fill-mode: forwards; 
}

@keyframes scrolling-header {
  from {
    background: #0001;
    padding: 40px 0;
  }
  to {
    background: #000a;
    padding: 10px 0;
    margin: 0 auto;
  }
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1100px;
  padding: 0 100px;
  margin: 0 auto;

  color: white;

  * {
    margin: 0; 
    padding: 0;
  }
}

nav {
  a {
    padding: 5px 15px;
    font-size: 1.2em;
    position: relative;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: .25s;

    &:hover {
      cursor: pointer;
      color: white;
      
      &:hover:after {
        width: 100%;
      }
    }

    &:after {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      margin: auto;
      width: 0%;
      content: '.';
      color: transparent;
      background: #aaa;
      height: 1px;
      transition: 0.2s all;
    }
  }

  ul {
    display: flex;
    list-style: none;
  }
}



#image-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 40px;
    filter: brightness(1);
    transition: .25s;
    padding: 5px;
  }

  a {
    transition: .25s;

    &:first-child {
      margin-right: 20px;
      position: relative;

      &:after {
        height: 100%;
        content: '';
        background: white;
        width: 1px;
        position: absolute;
        right: -10px;
      }
    }

    &:hover {
      filter: brightness(1.2);
    }
  }
}

@media only screen and (max-width: 1100px)  {
  header {
    padding: 0 50px;
  }
}
@media only screen and (max-width: 850px)  {
  header {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    nav { display: none; }
  }
}
</style>
