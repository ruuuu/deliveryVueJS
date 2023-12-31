
<template>
 <!-- компонет Header: -->
  <header class="header">
      <div class="container">
        <div class="header-box">
          <router-link class="header-logo logo" to="/">
            <img src="../assets/img/logo.svg" alt="Логоти Delivery" />
          </router-link>

          <div class="header-controls">
            <button class="btn btn-primary">
              <img src="../assets/img/icons/user.svg" alt="Войти" />
              Войти
            </button>

            <button class="btn btn-outline" @click="openModal()" > <!-- повесили обработчик событя на кнопку, по нажатию вызовется openModal() -->
              <img src="../assets/img/icons/shopping-cart.svg" alt="Корзина" />
              В корзину
            </button>
          </div>
        </div>
      </div>
    </header>
</template>


<script setup>
  const emit = defineEmits(['toggleModal']) // придумали объекту название toggleModal

  const openModal = () => {
    emit('toggleModal');  // сообщаем App.vue что отрабоало  событие изменеия toggleModal
  }

</script>


// scoped нужен  чтобы др компоненты с таким же классами не подтягивали стили отсюда, то есть то  ИНКАПСУЛЯЦИЯ: 
<style scoped>  

  .header {
    min-height: 124px;
    display: flex;
    align-items: center;
    
  }


  .header-box{
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


  .header-controls{
    display: flex;
    align-items: center;
    justify-content: flex-end; /* элемент прижмется к правому краю */
    gap: 8px;
  }

</style>
