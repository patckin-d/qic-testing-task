<script setup lang="ts">
interface Props {
    title: string;
}

withDefaults(defineProps<Props>(), {
    title: '',
})

</script>

<template>
    <div class="base-card"  >
        <h1 class="base-card__title">{{ title }}</h1>
        <slot />
    </div>
</template>

<style scoped>
.base-card {
    background-color: #FFFFFF;
    border-radius: 32px;
    padding: 40px;
    width: 100%;
    max-width: 544px;
}

.base-card__title {
    text-align: center;
    font-size: 40px;
    line-height: 48px;
    color: #1c1c1c;
    margin-bottom: 32px;
}


@media (max-width: 544px) {
    .base-card {
        padding: 32px 16px 16px 16px;
    }

    .base-card__title {
        font-size: 32px;
        line-height: 40px;
    }
}
</style>
