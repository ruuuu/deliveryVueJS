<script setup>
  import Header from './components/Header.vue';  // импортировали компонент Header.vue
  import Footer from './components/Footer.vue';  
  import Modal from './components/Modal.vue';  
  import { ref } from 'vue';


// Вo Vue Компонент это как фукнция, а props это ее аргументы.  
// props - объект аргументов {title, name, time, price} корые передааем в Компонент(аналог функция)
  const isOpen =ref(false);  // ref делает перменную реактивной(это есть в Vue3), Vue следит за состоняем(изменением) переменой


</script>


<template>
<!-- основной компонет: -->
  <div class="page-wrapper">
    <Header @toggleModal="isOpen = !isOpen" />   <!-- слушает собыие toggleModal, котрый запустит код напсианный в "" -->

    <main class="main">
      <router-view></router-view>   <!-- на основании роутинга routes(в index.js), будет выводиться определенный компонет -->
    </main>

    <Modal :isOpen="isOpen"  @toggleModal="isOpen = !isOpen"  />  <!-- чтобы значение true попало в перменную isOpen, ставим перед ней двоеточие(это называется binding) -->
    <Footer />
  </div>
</template>



<style scoped></style>
