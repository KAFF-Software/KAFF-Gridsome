<template>
  <div class="footer">
    <div class="social-media">
      <g-link v-for="item in icons" :key="item.name" :to="item.link">
        <img :src="item.icon" :alt="item.name">
      </g-link>
    </div>
    <div class="credits">
      <p>Developed by EmNudge.<span class="inline-theme"><Typing overrideWidth="10px" mode="border">Theme</Typing> by Liam Dyer.</span></p>
      <p class="theme"><Typing overrideWidth="10px" mode="border">Theme</Typing> by Liam Dyer.</p>
      <p class="email">Email: <i>contact@kaffsoftware.com</i></p>
      <p>Copyright © 2017-2019 | Keep Away From Fire</p>
    </div>
  </div>
</template>

<static-query>
query {
  allSocialIcon {
    edges {
      node {
        fields {
          data {
            name
            icon
            color
            link
          }
        }
      }
    }
  }
}
</static-query>

<script>
import Typing from '../components/Typing'

export default {
  name: 'TheFooter',
  components: {
    Typing
  },
  computed: {
    icons() {
      return this.$static.allSocialIcon.edges.map(item => {
        const { name, icon, color, link } = item.node.fields.data;
        
        return { name, icon: `/icons/social/${icon}`, color, link }
      })
    }
  }
}
</script>

<style scoped lang="scss">

.footer {
  position: relative;
  color: white;
  background: #222;
  text-align: center;

  &:before {
    content: '';
    background-image: url('/thin_wave.svg');
    background-size: 3000px 62px;
    background-position: center bottom;
    background-repeat: no-repeat;
    display: block;
    position: absolute;
    transform: rotate(180deg);
    top: -62px;
    width: 100%;
    height: 62px
  }

  > div {
    padding: 0 20px;
  }
}

.social-media {
  img {
    height: 60px;
    margin: 5px;
    transition: .15s;

    &:hover {
      filter: brightness(1.1);
      transform: scale(1.2);
    }
  }
}

.credits {
  margin: 30px 0;

  P { margin: 0; }

  .inline-theme {
    padding-left: 10px;
    div {
      margin-right: 5px;
    }
  }

  .theme {
    display: none;
    div {
      margin-right: 5px;
    }
  }

  .email {
    margin-bottom: 10px;
  }
}

@media only screen and (max-width: 500px) {
  .credits {
    .theme {
      display: block;
    }
    .inline-theme {
      display: none;
    }
  }

  .social-media {
    a {
      width: 3px;
      height: 3px;
    }
  }
}
</style>
