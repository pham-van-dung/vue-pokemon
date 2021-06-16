<template>
    <div class="screen w-full min-h-screen absolute top-0 left-0 z-10 bg-dark text-light">
      <div class="flex flex-wrap my-8 mx-auto"
          :style="{ width:`${(((920 - 16 * 4) / Math.sqrt(cardsContexts.length) - 16) / 4 * 3 + 16) * Math.sqrt(cardsContexts.length) }px`}">
        <card-flip
            v-for="(card, index) in cardsContexts"
            :key="index"
            :ref="`${index}`"
            :imgBackFaceUrl="`${card}.png`"
            :carda="{ index: index, value: card }"
            @onFlip="checkRule($event)"
            :cardsContexta="cardsContexts"
        >
        </card-flip>
      </div>
    </div>
</template>

<script>
import CardFlip from './Card.vue'
export default {
    components: {
        CardFlip,
    },
    props: {
        cardsContexts: {
            type: Array,
            default: function () {
                return []
            },
        },
    },
    data() {
        return {
            rules: [],
        }
    },
    methods: {
        checkRule(cardb) {
            if (this.rules.length === 2) return false

            this.rules.push(cardb)

            if (
                this.rules.length === 2 &&
                this.rules[0].value === this.rules[1].value
            ) {
                this.$refs[`${this.rules[0].index}`].onEnabledMode()
                this.$refs[`${this.rules[1].index}`].onEnabledMode()

                this.rules = []

                const disabledElements = document.querySelectorAll(
                    ".screen .card.disabled")
                if(disabledElements && disabledElements.length === this.cardsContexts.length - 2){
                    setTimeout(() => {
                        this.$emit("onFinish")
                    }, 920)
                }
            } else if (
                this.rules.length === 2 &&
                this.rules[0].value !== this.rules[1].value
            ) {
                // console.log("Wrong");
                setTimeout(() => {
                    this.$refs[`${this.rules[0].index}`].onFlipBackCard()
                    this.$refs[`${this.rules[1].index}`].onFlipBackCard()
                    this.rules = []
                }, 800)
                
            } else {
                return false
            }
        },
    },
}
</script>

<style>
</style>