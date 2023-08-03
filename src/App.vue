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
            Реализовать выпадающий список с масками телефонов получаемых с бека и поле для ввода номера телефона с валидацией. <br>
            <ol>
              <li>С бека по урлу <b>`/countries`</b> получаем список стран для которых надо вывести маски.</li>
              <li>С бека по урлу <b>`/masks?countries=ru,ca`</b> получаем список масок для отображения. Параметр <b>`countries`</b> обязательный, и должен содержать коды стран.</li>
              <li>По умолчанию в поле ввода отображается маска для страны <b>`uae`</b></li>
              <li>Доступные маски должны отображаться в выпадающем списке в формате: <b>${Название страны} ${Маска}</b></li>
              <li>По клику на кнопку "Send" валидируем телефон. Если валидация прошла успешно, то скриываем форму и отображаем текст "Thanks". Иначе отображаем ошибку "Invalid format" </li>
              <li>Требования к валидации: Номер телефона должен состоять из 12 символов.</li>
            </ol>

            <h2 class="task-subtitle">Опционально:</h2>
            <ol>
              <li>Если телефон уже был отправлен, то при перезагрузке страницы он должен отображаться в инпуте</li>
              <li>Сначала должна отображаться кнопка "Start", по клику на которую появляется лоадер и только после успешного получения всех данных отображается форма.</li>
            </ol>

            <h2 class="task-subtitle">Подсказки:</h2>
            <ol>
              <li>Используется библиотека наших собственных компонентов @qic/ui-components</li>
              <li>Для выпадающего списка можно использовать нативный тэг select, стили для него уже написаны</li>
              <li>Из нашей библиотеки для лоадера можно использовать компонент VLoader, а для кнопки компонент BaseButton (есть событие click и пропс disabled)</li>
              <li>Для работы с API используется хук useApi. У него есть метод get, который принимает url и параметры для запроса, возвращает промис.</li>
            </ol>
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