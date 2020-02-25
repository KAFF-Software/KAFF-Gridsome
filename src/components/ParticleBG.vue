<template>
  <div id='particles-js'>
    <div id="content">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParticleBG',

  mounted() {
    require('particles.js')
    this.$nextTick(() => {
      this.initParticlesJS()
    })
  },

  methods: {
    initParticlesJS () {
      /* eslint-disable */
      particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 500,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#fff"
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 500,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
            },
            "size": {
                "value": 2,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "move": {
                "enable": true,
                "speed": 0.5,
                "direction": "right",
                "random": false,
                "straight": false,
                "out_mode": "out"
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": false,
                    "mode": "repulse"
                },
                "resize": true
            }
        },
        "retina_detect": true
    })
    }
  }

}
</script>

<style>
#particles-js {
    background: radial-gradient(closest-corner, #362323, #080808);
    position: absolute;
    top: -20px;

    width: 100%;
    height: 800px;
}

#content {
    position: absolute;
    top: 0;
    width: 100%;
    height: 800px;
}
</style>