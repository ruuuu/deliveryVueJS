<script setup>
  
</script>


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
            <router-link class="products-card" to="/rest"> <!-- ссылку a заменяем на router-link, href знаменям на to -->
              <div class="products-card__image">
                <img src="../assets/img/cards/card1.jpg" alt="Пицца плюс" />
              </div>
              <div class="products-card__description">
                <div class="products-card__description-row">
                  <h4 class="products-card__description--title">Пицца плюс</h4>
                  <div class="products-card__description--beidge">60 мин</div>
                </div>

                <div class="products-card__description-row">
                  <div class="products-card__description-info">
                    <div class="products-card__description-info--rating">
                      <img src="../assets/img/star.svg" alt="Рейтинг заведения" /> 4.5
                    </div>
                    <div class="products-card__description-info--price">
                      От 550 ₽
                    </div>
                    <div class="products-card__description-info--group">
                      Пицца
                    </div>
                  </div>
                </div>
              </div>
            </router-link>

            <router-link class="products-card" to="/rest">
              <div class="products-card__image">
                <img src="../assets/img/cards/card1.jpg" alt="Пицца плюс" />
              </div>
              <div class="products-card__description">
                <div class="products-card__description-row">
                  <h4 class="products-card__description--title">Пицца плюс</h4>
                  <div class="products-card__description--beidge">60 мин</div>
                </div>

                <div class="products-card__description-row">
                  <div class="products-card__description-info">
                    <div class="products-card__description-info--rating">
                      <img src="../assets/img/star.svg" alt="Рейтинг заведения" /> 4.5
                    </div>
                    <div class="products-card__description-info--price">
                      От 550 ₽
                    </div>
                    <div class="products-card__description-info--group">
                      Пицца
                    </div>
                  </div>
                </div>
              </div>
            </router-link>

            <router-link class="products-card" to="/rest">
              <div class="products-card__image">
                <img src="../assets/img/cards/card1.jpg" alt="Пицца плюс" />
              </div>
              <div class="products-card__description">
                <div class="products-card__description-row">
                  <h4 class="products-card__description--title">Пицца плюс</h4>
                  <div class="products-card__description--beidge">60 мин</div>
                </div>

                <div class="products-card__description-row">
                  <div class="products-card__description-info">
                    <div class="products-card__description-info--rating">
                      <img src="../assets/img/star.svg" alt="Рейтинг заведения" /> 4.5
                    </div>
                    <div class="products-card__description-info--price">
                      От 550 ₽
                    </div>
                    <div class="products-card__description-info--group">
                      Пицца
                    </div>
                  </div>
                </div>
              </div>
            </router-link>

            <router-link class="products-card" to="/rest">
              <div class="products-card__image">
                <img src="../assets/img/cards/card1.jpg" alt="Пицца плюс" />
              </div>
              <div class="products-card__description">
                <div class="products-card__description-row">
                  <h4 class="products-card__description--title">Пицца плюс</h4>
                  <div class="products-card__description--beidge">60 мин</div>
                </div>

                <div class="products-card__description-row">
                  <div class="products-card__description-info">
                    <div class="products-card__description-info--rating">
                      <img src="../assets/img/star.svg" alt="Рейтинг заведения" /> 4.5
                    </div>
                    <div class="products-card__description-info--price">
                      От 550 ₽
                    </div>
                    <div class="products-card__description-info--group">
                      Пицца
                    </div>
                  </div>
                </div>
              </div>
            </router-link>

            <router-link class="products-card" to="/rest">
              <div class="products-card__image">
                <img src="../assets/img/cards/card1.jpg" alt="Пицца плюс" />
              </div>
              <div class="products-card__description">
                <div class="products-card__description-row">
                  <h4 class="products-card__description--title">Пицца плюс</h4>
                  <div class="products-card__description--beidge">60 мин</div>
                </div>

                <div class="products-card__description-row">
                  <div class="products-card__description-info">
                    <div class="products-card__description-info--rating">
                      <img src="../assets/img/star.svg" alt="Рейтинг заведения" /> 4.5
                    </div>
                    <div class="products-card__description-info--price">
                      От 550 ₽
                    </div>
                    <div class="products-card__description-info--group">
                      Пицца
                    </div>
                  </div>
                </div>
              </div>
            </router-link>

            <router-link class="products-card" to="/rest">
              <div class="products-card__image">
                <img src="../assets/img/cards/card1.jpg" alt="Пицца плюс" />
              </div>
              <div class="products-card__description">
                <div class="products-card__description-row">
                  <h4 class="products-card__description--title">Пицца плюс</h4>
                  <div class="products-card__description--beidge">60 мин</div>
                </div>

                <div class="products-card__description-row">
                  <div class="products-card__description-info">
                    <div class="products-card__description-info--rating">
                      <img src="../assets/img/star.svg" alt="Рейтинг заведения" /> 4.5
                    </div>
                    <div class="products-card__description-info--price">
                      От 550 ₽
                    </div>
                    <div class="products-card__description-info--group">
                      Пицца
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </section>
</template>



<style scoped>

</style>
