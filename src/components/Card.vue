<template>
    <div class="card inline-block mr-4 mb-4"
        :class="{ disabled: isDisabled }"
        :style="{
          height: `${(920 - 16 * 4) / Math.sqrt(cardsContexta.length) - 16}px`,
          width:`${((920 - 16 * 4) / Math.sqrt(cardsContexta.length) - 16) / 4 * 3 }px`,
          perspective: `${((920 - 16 * 4) / Math.sqrt(cardsContexta.length) - 16) / 4 * 3 * 2 }px`}"
          >
          
        <div
            class="
                card__inner
                w-full
                h-full
                relative
                transition
                ease-in-out
                duration-1000
                cursor-pointer
            "
            :class="{ 'is-flipped': isFlipped }"
            @click="onToggleFlipCard"
        >
            <div class="card__face card__face--front">
                <div
                    class="bg-contain bg-no-repeat bg-center h-full w-full"
                    style="background-image: url(icon_back.png)"
                ></div>
            </div>
            <div class="card__face card__face--back bg-light">
                <div
                    class="h-full w-full bg-contain bg-no-repeat bg-center"
                    :style="{ backgroundImage: `url(${imgBackFaceUrl})` }"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
          isDisabled: false,
          isFlipped: false,
        }
    },
    props: {
        carda: {
            type: [String, Number, Array, Object],
        },
        imgBackFaceUrl: {
            type: String,
            required: true,
        },
        cardsContexta: {
            type: Array,
            default: function() {
              return []
            }
        }
    },
    methods: {
        onToggleFlipCard() {
            if (this.isDisabled){
              return false
            }
            this.isFlipped = !this.isFlipped
            if (this.isFlipped) {
                this.$emit('onFlip', this.carda)
            }
        },
        onFlipBackCard() {
            this.isFlipped = false
        },
        onEnabledMode(){
          this.isDisabled = true
        }
    },
}
</script>

<style scoped lang="css">
/* .card {
  perspective: 100px;
} */
.card__inner {
    /* width: 100%;
    height: 100%;
    transition: ease-in-out 1s;  */
    transform-style: preserve-3d;
    /* cursor: pointer;
    position: relative; */
}
.card__inner.is-flipped {
    transform: rotateY(-180deg);
}
.disabled .card__inner{
  cursor: default;
}
.card__face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    overflow: hidden;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 0 3px 10px 3px rgba(0, 0, 0, 0.2);
}
.card__face--back {
    transform: rotateY(-180deg);
}
</style>
