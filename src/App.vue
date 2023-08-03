<script setup lang="ts">
import VLogo from './components/systemComponents/VLogo.vue';
import VCard from './components/systemComponents/VCard.vue';
import MainComponent from './components/MainComponent.vue';
import { BaseAccordion } from '@qic/ui-components';


</script>

<template>
  <div class="content">
    <VLogo />

    <VCard title="Testing task" class="card">
      <div class="card__content">
        <BaseAccordion>
          <template v-slot:title>
            <h2>Задание</h2>
          </template>
          <template v-slot:content>
            Будет доступно после начала интервью
          </template>
        </BaseAccordion>

        <!-- Все правки должны быть внутри MainComponent -->
        <MainComponent />


      </div>
    </VCard>
  </div>
</template>

<style scoped>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    width: 100%;
    background-color: #F1F4F6;
    min-height: 100vh;
    padding-block: 40px;
  }

  .card__content{
    display: grid;
    gap: 24px;
  }

  .task-subtitle{
    padding-block: 14px;
  }
</style>