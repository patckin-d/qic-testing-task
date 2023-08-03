<script lang='ts' setup>
import LogoIcon from './icons/LogoIcon.vue';
import ProductStickerIcon from './icons/ProductStickerIcon.vue';
</script>

<template>
  <div class="logo">
    <LogoIcon class="logo-icon"/>
    <ProductStickerIcon class="logo-sticker" />
  </div>
</template>

<style scoped>


.logo {
  position: relative;
  height: 53px;
}

.logo-sticker {
    position: absolute;
    top: 5px;
    left: 80px;
    transform: rotate(-8deg);
}

@media (max-width: 544px) {
    .logo {
        height: 42px;
    }

    .logo-icon {
        max-width: 92px;
        height: auto;
    }

    .logo-sticker {
        max-width: 63px;
        height: auto;
        left: 70px;
    }
}
</style>