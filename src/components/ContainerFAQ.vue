<template>
    <div class="faq-container">
        <Typing size="1.5em">FAQ</Typing>
        <div class="sets-container" ref="faq-sets-container">
            <div class="faq-set" v-for="(faq, index) in faqs" :key="index">
                <p class="question">{{ faq.question }}</p>
                <p class="answer">{{ faq.answer }}</p>
            </div>
        </div>
        <div class="expand-faq" v-show="!expanded">
            <BaseButton @pressed="expandFAQ">Show More</BaseButton>
        </div>
    </div>
</template>

<static-query>
query {
  allFaqItem {
    edges {
      node {
        fields {
          data {
            question
            answer
          }
        }
      }
    }
  }
}
</static-query>

<script>
import Typing from '@/components/Typing'
import BaseButton from '@/components/BaseButton'
import anime from 'animejs'

export default {
    name: 'FAQ',
    components: {
        Typing,
        BaseButton
    },
    data() {
        return {
            expanded: false,
            height: 250
        }
    },
    methods: {
        expandFAQ() {
            anime({
                targets: '.sets-container',
                duration: '400',
                easing: 'easeInOutSine',
                maxHeight: this.potentialHeight,
            })
            anime({
                targets: '.expand-faq',
                duration: '400',
                easing: 'easeInOutSine',
                opacity: 0,
            })
            setTimeout(() => this.expanded = true, 200);
        },
        
    },
    computed: {
        potentialHeight() {
            //since FAQ height varies based on screen width, can't animate maxHeight to a specific amount with CSS without possibly cutting off some text
            //this function calculates the height by getting heights of inner elements and adding it to the grid gap.

            let height = 0;
            const container = this.$refs['faq-sets-container']
            let faqList = container.querySelectorAll('.faq-set')

            //gets how many columns set container has
            const columns = window.getComputedStyle(container).gridTemplateColumns
            const columnAmount = columns.split(' ').length

            if (columnAmount === 2) {
                //if 2 columns, calculate every other child (since the other child's height will conform due to grid) 
                faqList = container.querySelectorAll('.faq-set:nth-child(odd)')
            }
            for (const faq of Array.from(faqList)) {
                height += parseInt(window.getComputedStyle(faq).height)
            }
            //parseInt will cut off by the first string, so "30px 30px" will become 30
            const gridGap = parseInt(window.getComputedStyle(container).gridGap)

            return height + faqList.length * gridGap
        },
        faqs() {
            return this.$static.allFaqItem.edges.map(item => item.node.fields.data)
        }
    }
}
</script>

<style scoped lang="scss">
.faq-container {
    position: relative;
}

.sets-container {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    overflow: hidden;
    max-height: 250px;
}

.faq-set {
    font-size: 1.2em;
    text-align: left;
    max-width: 600px;

    .question {
        margin: 0;
        &:before {
            content: 'Q:';
            margin-right: 10px;
            color: var(--primary-color);
        }
    }
    .answer {
        margin: 0;
        &:before {
            content: 'A:';
            margin-right: 10px;
            color: var(--primary-color);
        }
    }
}

.expand-faq {
    position: relative;
    width: 100%;
    background: #2a2a2a;

    &:before {
        content: '';
        background: linear-gradient(#0000, #2a2a2a);
        position: absolute;
        top: -200px; left: 0;
        width: 100%;
        height: 200px;
    }
}

@media only screen and (max-width: 700px)  {
    .sets-container {
        grid-template-columns: 1fr;
        // overflow-y: scroll;
    }
}

</style>