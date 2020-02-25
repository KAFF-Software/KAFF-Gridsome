<template>
  <Default>
    <DevModal :dev="modalDev" v-show="showModal" @close="closeModal" />
    <ParticleBG>
      <div id="header-container">
        <LogoKAFF @complete="showLogoText" />

        <h2>Community Driven</h2>

        <Typing size="25px">Who we are</Typing>
        <p>Keep Away From Fire is a team of over 60 artists, programmers, writers, level designers, voice actors, and more with a passion for Source Engine game development.</p>
      </div>
    </ParticleBG>
    <div class="empty-box"></div>
    <!-- necessary since KAFFheader oddly has no height (probably due to being a canvas object) -->

    <div class="boreal-alyph">
      <div>
        <Typing size="25px">Boreal Alyph</Typing>
        <p>
          Based on the Marc Laidlaw short story, Epistle 3, Boreal Alyph aims to capture Valve’s lost vision, and bring a fun, and satisfying end to the celebrated Half-Life series. Epistle 3 is a synopsis of Half-Life 2: Episode 3, written by ex-Valve writer, Marc Laidlaw (<a href="http://www.marclaidlaw.com/epistle-3/">found here</a>). Since its publication in the the 25th of August, 2017, Half-Life fans at Keep Away From Fire have been working hard to bring Epistle 3 to life in the source engine.
        </p>

        <p>We're bringing graphical upgrades with us, alongside brand new, up-to-date assets. Our goal for Boreal Alyph is to create not only an enjoyable series of maps, but an overhaul to many of Source’s out-of-date graphical capabilities, all the while still maintaining Half-Life 2’s look and feel.</p>
        <BaseButton href="/boreal-alyph">Learn More</BaseButton>
      </div>
      <a href="/boreal-alyph">
        <img src="/brand/ba_logo_icon.svg" alt="Boreal Alyph" />
      </a>
    </div>

    <div class="devs-container" id="dev-leads">
      <h1 class="dep-leads">Dev Leads</h1>
      <div class="card-container dev-leads">
        <div v-for="dev in devLeads" :key="dev.img">
          <DevCard :dev="dev" @pressed="openModal(dev)" />
        </div>
      </div>
      <h1 class="dep-leads">Department Leads</h1>
      <div class="card-container" :style="{ maxWidth: cardContainerWidth }">
        <div v-for="dev in depLeads" :key="dev.img">
          <DevCard :dev="dev" @pressed="openModal(dev)" />
        </div>
      </div>
    </div>

    <div class="stats-container">
      <div class="stats">
        <div>
          <img src="/icons/people.svg" alt="people" />
          <h3>40 Members and Counting</h3>
          <p>With talented members from many different creative industries, KAFF is a conglomeration of hard work and pure unadulterated expertise. Harnessing the skillful capabilities of the KAFF team, they strive to create a product not just visually appealing, but filled with enjoyable gameplay elements.</p>
        </div>
        <div>
          <img src="/icons/picture.svg" alt="picture" />
          <h3>Organized</h3>
          <p>Keep Away From Fire works with a hierarchy of leadership over departments. The team contains a multitude of proficient individuals, ranging from visual artists, to audio experts, to programmers, who report to their respective department leaders. These leaders assess the work, critique it, and then hand their near finished products to the dev leaders for a further assessment.</p>
        </div>
        <div>
          <img src="/icons/code.svg" alt="code" />
          <h3>Efficient</h3>
          <p>Meetings are no stranger to the members of KAFF, with discussions taking place often over directional challenges, member &amp; work management, and everything in between. Plans are put in place and executed as soon as the situation allows it. While there is a friendly atmosphere, there is consistently a striking mood of professionalism amongst the team.</p>
        </div>
      </div>
    </div>
  </Default>
</template>

<static-query>
query {
  allMembers {
    edges {
      node {
        fields {
          data {
            name
            nickname
            position
            img
            bio
            links {
              name
              url
            }
          }
        }
      }
    }
  }
}
</static-query>

<script>
import anime from "animejs";
import log from '../logs.js'

import Default from '@/layouts/Default';

import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

import ParticleBG from "@/components/ParticleBG";
import DevModal from "@/components/DevModal";
import Typing from "@/components/Typing";
import BaseButton from "@/components/BaseButton";
import DevCard from "@/components/DevCard";
import LogoKAFF from "@/components/animations/LogoKAFF.vue";

export default {
  name: "app",
  components: {
    TheHeader,
    TheFooter,
    ParticleBG,
    DevModal,
    Typing,
    BaseButton,
    DevCard,
    LogoKAFF,
    Default
  },
  data() {
    return {
      showModal: false,
      modalDev: {}
    };
  },
  mounted() {
    log();
  },
  computed: {
    devLeads() {
      return this.$static.allMembers.edges
        .map(item => item.node.fields.data)
        .filter(member => member.position === "Dev");
    },
    depLeads() {
      return this.$static.allMembers.edges
        .map(item => item.node.fields.data)
        .filter(member => member.position !== "Dev");
    },
    cardContainerWidth() {
      if (this.depLeads.length % 5 == 4 || this.depLeads.length % 5 == 0)
        return "900px";
      return "700px";
    }
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    openModal(dev) {
      this.modalDev = dev;
      this.showModal = true;
    },
    showLogoText() {
      anime({
        targets: "#header-container h2",
        duration: "400",
        easing: "easeInOutSine",
        opacity: 1,
        top: 0
      });
    }
  }
};
</script>

<style scoped lang="scss" src="./PublicKAFF.scss">
</style>
