<template>
  <Default>
    <div class="header-section" data-tilt>
      <div class="header-content">
        <div class="logo-container">
          <LogoBA @complete="showText" />
        </div>
        <h1>A Source game based on Marc Laidlaw's Epistle 3</h1>
      </div>
    </div>
    <transition name="fade">
      <div class="news" id="news">
        <Typing size="1.5em">Featured News</Typing>
        <div class="article-boxes">
          <a
            v-for="(article, index) in articles"
            :key="index"
            class="article-box"
            :href="article.link"
          >
            <div class="bg-img"></div>
            <div class="text">
              <h3 class="title">{{ article.title }}</h3>
              <p>{{ article.description.substring(0, 80) }}...</p>
              <div class="article-footer">
                <h4>{{ article.date }}</h4>
                <h4>
                  by
                  <span class="name">{{ article.author }}</span>
                </h4>
              </div>
            </div>
          </a>
        </div>
      </div>
    </transition>
    <div class="container float-left" id="about">
      <div>
        <Typing size="1.5em">About Boreal Alyph</Typing>
        <p>
          Based on the Marc Laidlaw short story--Epistle 3--Boreal Alyph aims to capture Valve’s lost vision, and bring a fun, satisfying end to the celebrated Half-Life series. Epistle 3 is a synopsis of Half-Life 2: Episode 3, written by ex-Valve writer, Marc Laidlaw (
          <a href="http://www.marclaidlaw.com/epistle-3/">found here</a>). Since its publication on the the 25th of August, 2017, Half-Life fans at Keep Away From Fire have been working hard to bring Epistle 3 to life in the Source Engine.
        </p>
        <p>We're bringing graphical upgrades with us, alongside brand new, up-to-date assets. Our goal for Boreal Alyph is to create not only an enjoyable series of maps, but an overhaul to many of Source’s out-of-date graphical capabilities, all the while maintaining Half-Life 2’s look and feel.</p>
      </div>
    </div>
    <div class="faq container float-right">
      <ContainerFAQ />
    </div>
    <div class="container join" id="join">
      <div>
        <Typing size="1.5em">Join Us</Typing>
        <p>Keep Away From Fire is a team of 40 artists, programmers, writers, level designers, voice actors, and more striving to accurately recreate Marc Laidlaw's Epistle 3 story in the Source Engine. Our dedication to advancing the capabilites of the source engine while optimizing our production workflow allows us to efficiently and quickly move through our development cycle. Our organizational methods include an active development-only Discord, biweekly meetings, Phabricator, and GitHub.</p>
        <BaseButton href="/apply">Apply To The Team</BaseButton>
      </div>
    </div>
  </Default>
</template>

<static-query>
query {
  allArticle {
    edges {
      node {
        fields {
          data {
            author
            title
            date
            description
            link
          }
        }
      }
    }
  }
}

</static-query>

<script>
import anime from "animejs";

import Default from '@/layouts/Default';

import Typing from "@/components/Typing";
import BaseButton from "@/components/BaseButton";
import ContainerFAQ from "@/components/ContainerFAQ";
import LogoBA from "@/components/animations/LogoBA";

export default {
  metaInfo: {
    title: 'Boreal Alyph'
  },
  name: "app",
  components: {
    BaseButton,
    Typing,
    ContainerFAQ,
    LogoBA,
    Default
  },
  methods: {
    showText() {
      anime({
        targets: ".header-content h1",
        duration: "400",
        easing: "easeInOutSine",
        opacity: 1,
        top: 0
      });
    }
  },
  mounted() {
    if (window.pJSDom && window.pJSDom[0]) {
      window.pJSDom[0].pJS.fn.vendors.destroypJS();
      window["pJSDom"] = [];
    }
  },
  computed: {
    articles() {
      return this.$static.allArticle.edges.map(item => item.node.fields.data)
    }
  }
};
</script>

<style scoped lang="scss" src="./PublicBA.scss">
</style>
