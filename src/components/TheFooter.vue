<template>
  <div class="footer">
    <div class="social-media">
      <g-link v-for="item in icons" :key="item.name" :to="item.link">
        <img :src="item.icon" :alt="item.name" />
      </g-link>
    </div>
    <div class="credits">
      <p class="developers">
        <span>Developed by EmNudge.</span>
        <span class="inline-theme">
          <Typing overrideWidth="10px" mode="border" :thin="true">Theme</Typing>
          <span class="spacer" />
          by Liam Dyer.
        </span>
      </p>
      <p class="email">
        Email:
        <a href="mailto:contact@kaffsoftware.com">
          <i>contact@kaffsoftware.com</i>
        </a>
      </p>
      <p>Copyright © {{ years }} | Keep Away From Fire</p>
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
import Typing from "../components/Typing";

export default {
  name: "TheFooter",
  components: {
    Typing
  },
  computed: {
    icons() {
      return this.$static.allSocialIcon.edges.map(item => {
        const { name, icon, color, link } = item.node.fields.data;

        return { name, icon: `/icons/social/${icon}`, color, link };
      });
    },
    years() {
      const currYear = (new Date).getFullYear()
      return `2017-${currYear}`
    }
  }
};
</script>

<style scoped lang="scss">
.spacer {
  margin-right: -5px;
}
.footer {
  position: relative;
  color: white;
  background: #222;
  text-align: center;

  &:before {
    content: "";
    background-image: url("/thin_wave.svg");
    background-size: 3000px 62px;
    background-position: center bottom;
    background-repeat: no-repeat;
    display: block;
    position: absolute;
    transform: rotate(180deg);
    top: -62px;
    width: 100%;
    height: 62px;
  }

  > div {
    padding: 0 20px;
  }
}

.email a {
  color: var(--primary-color)
}

.social-media {
  img {
    height: 60px;
    margin: 5px;
    transition: 0.15s;

    &:hover {
      filter: brightness(1.1);
      transform: scale(1.2);
    }
  }
}

.credits {
  margin: 30px 0;

  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 5px;

  p {
    margin: 0;
  }

  .developers {
    margin: 0 auto;
    max-width: 450px;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
      padding: 0 5px;
    }
  }
}

@media only screen and (max-width: 500px) {
  .credits {
    display: flex;
    flex-direction: column;
    > * { padding-bottom: 5px; }
    
    .developers {
      flex-direction: column;
      > *:first-child {
        padding-bottom: 5px;
      }
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
