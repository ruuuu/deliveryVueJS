
<template>
   <footer class="footer">
      <div class="container">
        <div class="footer-box">
          <router-link class="footer-logo logo" to="/">
            <img src="../assets/img/logo.svg" alt="Логоти Delivery" />
          </router-link>

          <nav class="footer-nav">
            <ul>
              <li>
                <router-link to="">Ресторанам</router-link> <!-- ссылку a заменяем на router-link, href знаменям на to -->
              </li>
              <li>
                <router-link to="">Курьерам</router-link>
              </li>
              <li>
                <router-link to="">Пресс центр</router-link>
              </li>
              <li>
                <router-link to="">Контакты</router-link>
              </li>
            </ul>
          </nav>

          <div class="footer-social">
            <router-link to="">  <!-- ссылку a заменяем на router-link, href знаменям на to -->
               <img src="../assets/img/social/insta.svg" alt="instagram" />
            </router-link>
            <router-link to="">
               <img src="../assets/img/social/fb.svg" alt="fb" />
            </router-link>
            <router-link to="">
               <img src="../assets/img/social/vk.svg" alt="vk" />
            </router-link>
          </div>
        </div>
      </div>
   </footer>
</template>


<script setup>
   
</script>


<style scoped> /* scoped нужен  чтобы др компоненты с таким же классами не подтягивали стили отсюда, то есть то  ИНКАПСУЛЯЦИЯ */
  
  .footer{
    min-height: 156px;
    display: flex;
    align-items: center;
    padding: 60px 0;
  }

  .footer-box {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 36px;
    flex-wrap: wrap;
  }

  .footer-nav {
    flex-grow: 1;
   
  }

  .footer-nav  ul{
    display: flex;
    gap: 15px;
    align-items: center;
    flex-wrap: wrap;
  }

  .footer-nav  ul li a{
    color: #595959;
  }

  .footer-social {
    display: flex;
    gap: 21px;
    align-items: center;
    justify-content: flex-end;  /* флекс эемент прижмется к правому краю */
  }

</style>