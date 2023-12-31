
<template>
 <!-- модалка: -->
    <div class="cart-modal__overlay"  :class="{open: isOpen}"  @click.self="closeModal()"><!-- добавится наш класс "open", если isOpen=true. click.self будет отслушивать клик только на этот элемент(а не во вложенные) -->
      <div class="cart-modal">
          <div class="cart-modal__header">
            <h2 class="cart-modal__header-title">Корзина</h2>
            <span class="cart-modal__header-close" @click="closeModal()"> <!-- повесили обработчик событя на кнопку, по нажатию вызовется closeModal() -->
              <img src="../assets/img/icons/close.svg" alt="Кнопка закрытия" />
            </span>
          </div>

          <div class="cart-modal__body">
            <div class="cart-item">
              <p class="cart-item__title">Ролл угорь стандарт</p>
              <div class="cart-item__controls">
                <div class="cart-item__controls-price">250 ₽</div>
                <button class="btn btn-outline">-</button>
                <span class="cart-item__controls-count"> 1 </span>
                <button class="btn btn-outline">+</button>
              </div>
            </div>

            <div class="cart-item">
              <p class="cart-item__title">Ролл угорь стандарт</p>
              <div class="cart-item__controls">
                <div class="cart-item__controls-price">250 ₽</div>
                <button class="btn btn-outline">-</button>
                <span class="cart-item__controls-count"> 1 </span>
                <button class="btn btn-outline">+</button>
              </div>
            </div>

            <div class="cart-item">
              <p class="cart-item__title">Ролл угорь стандарт</p>
              <div class="cart-item__controls">
                <div class="cart-item__controls-price">250 ₽</div>
                <button class="btn btn-outline">-</button>
                <span class="cart-item__controls-count"> 1 </span>
                <button class="btn btn-outline">+</button>
              </div>
            </div>

            <div class="cart-item">
              <p class="cart-item__title">Ролл угорь стандарт</p>
              <div class="cart-item__controls">
                <div class="cart-item__controls-price">250 ₽</div>
                <button class="btn btn-outline">-</button>
                <span class="cart-item__controls-count"> 1 </span>
                <button class="btn btn-outline">+</button>
              </div>
            </div>
          </div>

          <div class="cart-modal__footer">
            <div class="cart-modal__footer-price">1250 ₽</div>
            <div class="cart-modal__footer-controls">
              <button class="btn btn-primary">Оформить заказ</button>
              <button class="btn btn-outline">Отмена</button>
            </div>
          </div>
      </div>
    </div>
</template>



<script setup>
  //props
  const { isOpen } = defineProps({isOpen: Boolean});  // деструктурируем ответ

  const emit = defineEmits(['toggleModal']) // придумали объекту название toggleModal

  const closeModal = () => {
    emit('toggleModal');  // сообщаем App.vue что отрабоало  событие изменеия toggleModal
  } 

</script>



<style scoped>

  .cart-modal__overlay {  /* оверлей-область котрая окружает модалку */ 
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.40);
  }

  .cart-modal__overlay.open{
    display: flex;
  } 

  .cart-modal {
    max-width: 780px;
    width: 100%;
    padding: 40px;
    background-color: #FFFFFF;
    border-radius: 5px;
  }

  .cart-modal__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 48px;
  }

  .cart-modal__header-title{
    color: #000000;
    font-size: 36px;
    font-weight: 700;
  }

  .cart-modal__header-close{
    cursor: pointer;
  }

  .cart-modal__body{
    margin-bottom: 60px;
  }

  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    color: #000000;
  }

  .cart-item:not(:last-child) {
    padding: 5px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #D9D9D9;
  }

  .cart-item__title {
    line-height: 32px;
  }

  .cart-item__controls {
    display: flex;
    align-items: center;
    /* gap: 48px; */

  }

  .cart-item__controls-price {
    margin-right: 45px;
    font-size: 20px;
    font-weight: 700;
    line-height: 32px; 
  }

  .cart-item__controls button{
    border-radius: 2px;
    border: 1px solid #40A9FF;
    background-color: #FFFFFF;
    color: #40A9FF;
  }

  .cart-item__controls-count {
    margin-left: 15px;
    margin-right: 15px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px
  }

  .cart-modal__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 10px;
  }

  .cart-modal__footer-price{
    padding: 5px 20px;
    border-radius: 5px;
    background-color: #262626;
    color: #FAFAFA;
    font-size: 20px;
    font-weight: 700;
  }

  .cart-modal__footer-controls{
    display: flex;
    gap: 10px;
  }

</style>