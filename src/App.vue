<script setup>
  import Header from './components/Header.vue';  // импортировали компонент Header.vue
  import Footer from './components/Footer.vue';  
  import Modal from './components/Modal.vue';  

// Вo Vue Компонент это как фукнция, а props это ее аргументы.  
// props - объект аргументов {title, name, time, price} корые перлаем в Компонент
  const isOpen = false;


</script>


<template>
<!-- основной компонет: -->
  <div class="page-wrapper">
    <Header />

    <main class="main">
      <router-view></router-view> <!-- на основании роутинга routes(в index.js), будет выводиться определенный компонет -->
    </main>

    <Modal />
    <Footer />
  </div>
</template>



<style scoped></style>
