
<template>
  <section class="banner">
    <div class="container">
      <div class="banner-item">
        <h2 class="banner-item-title">Онлайн-сервис доставки еды на дом</h2>
        <p class="banner-item-subtitle">
              Блюда из любимого ресторана привезет курьер в перчатках, маске и с
              антисептиком
        </p>
      </div>
    </div>
  </section>

  <section class="products">
    <div class="container">
      <div class="products-header">
            <h3 class="products-header-title">Рестораны</h3>
            <input
              class="products-header-search"
              type="text"
              placeholder="Поиск блюд и ресторанов"
            />
      </div>

      <div class="products-wrapper" id="rests-container">
            <router-link class="products-card"  v-for="item in restaurantsArray"  :key="item.id"  :to="`/rest?id=${item.id}`"> <!-- ссылку <a> заменяем на router-link, href знаменям на to. Для каждого шаблона добавляем ключ key(значение ключа должо быть уникальным). Тк значения key и to меняются, поэтому ставим двоеточие передними  -->
              <div class="products-card__image">
                <img :src="getUrl(item.image)" alt="{{ item.title }}" /> <!-- Тк значения src меняется, поэтому ставим двоеточие передним -->
              </div>
              <div class="products-card__description">
                <div class="products-card__description-row">
                  <h4 class="products-card__description--title"> {{ item.title }} </h4>
                  <div class="products-card__description--beidge"> {{ item.time }} мин </div>
                </div>

                <div class="products-card__description-row">
                  <div class="products-card__description-info">
                    <div class="products-card__description-info--rating">
                      <img src="../assets/img/star.svg" alt="Рейтинг заведения" /> {{ item.rating }}
                    </div>
                    <div class="products-card__description-info--price"> От {{ item.price }}₽ </div>
                    <div class="products-card__description-info--group"> {{ item.type }} </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </section>
</template>



<script setup>

  import { restaurantsArray } from '../constants/restaurants'; 
 
  const getUrl = (name) => {
    return new URL(`../assets/img/cards/${name}`, import.meta.url);
  };

</script>



<style scoped>

</style>
