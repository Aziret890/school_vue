<template>
  <header data-aos="fade-down" data-aos-duration="1100" class="header mt-[1pc]">
    <div class="container">
      <div class="header__content flex justify-between items-center">
        <div class="header__content__logo">
          <img src="/public/svg/logo.svg" alt="logo iamge" />
        </div>
        <div
          class="header__adaptive__none flex justify-end gap-36 items-center w-full"
        >
          <nav class="header__content__nav">
            <li>Наши курсы</li>
            <li>Кайдзен клуб</li>
            <li>Путешествия</li>
            <li>Магазин</li>
          </nav>
          <div class="header__content__btns flex items-center">
            <button class="header__content__btns__button">Войти</button>
          </div>
        </div>
        <div class="dropdown">
          <div
            @click="isOpen"
            :class="state.value ? 'off-screen-menu active' : 'off-screen-menu'"
          >
            <ul>
              <li><a href="#">home</a></li>
              <li><a href="#">about</a></li>
              <li><a href="#">contact</a></li>
            </ul>
          </div>

          <nav>
            <div
              @click="isOpen"
              :class="state.value ? 'ham-menu active' : 'ham-menu'"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref } from "vue";

const state = ref(true);
function isOpen() {
  state.value = !state.value;
  console.log(state.value);
}
</script>
<style lang="scss">
.header {
  .dropdown {
    display: none;
  }
  &__adaptive__none {
    display: block;
  }
  &__content {
    &__nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 60%;
      min-width: 50%;

      li {
        color: rgb(144, 153, 163);
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0%;
        text-align: left;
      }
    }
    &__btns {
      max-width: 200px;

      &__button {
        border-radius: 15px;
        box-shadow: 0px 8px 20px 0px rgba(26, 92, 255, 0.2);
        background: rgb(26, 92, 255);
        color: rgb(255, 255, 255);
        font-family: Poppins;
        font-size: 14px;
        font-weight: 900;
        line-height: 21px;
        padding: 10px 27px;

        letter-spacing: 0%;
        text-align: left;
      }
    }
  }

  @media (max-width: 818px) {
    .header__adaptive__none {
      gap: 70px;
      .header__content__nav {
        gap: 10px;
      }
    }
  }

  @media (max-width: 700px) {
    &__content {
      &__btns {
        max-width: 110px;

        &__button {
          padding: 7px 16px;
          letter-spacing: 0.5px;
        }
      }
    }
  }
  @media (max-width: 676px) {
    &__content {
      .header__adaptive__none {
        display: none;
      }
    }
    .dropdown {
      display: block;
      a {
        color: white;
      }
      a:visited {
        color: white;
      }
      a:hover {
        color: #6f86ff;
      }

      body {
        background-color: rgb(65, 71, 97);
        font-family: sans-serif;
      }

      .off-screen-menu {
        background-color: rgb(34, 37, 49);
        height: 100vh;
        width: 100%;
        max-width: 450px;
        position: fixed;
        top: 0;
        right: -450px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 3rem;
        transition: 0.3s ease;
      }
      .off-screen-menu.active {
        right: 0;
      }

      /* nav */
      nav {
        padding: 1rem;
        display: flex;
        background-color: rgb(34, 37, 49);
      }

      /* ham menu */
      .ham-menu {
        height: 50px;
        width: 40px;
        margin-left: auto;
        position: relative;
      }
      .ham-menu span {
        height: 5px;
        width: 100%;
        background-color: #6f86ff;
        border-radius: 25px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: 0.3s ease;
      }
      .ham-menu span:nth-child(1) {
        top: 25%;
      }
      .ham-menu span:nth-child(3) {
        top: 75%;
      }
      .ham-menu.active span {
        background-color: white;
      }
      .ham-menu.active span:nth-child(1) {
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      }
      .ham-menu.active span:nth-child(2) {
        opacity: 0;
      }
      .ham-menu.active span:nth-child(3) {
        top: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }
}
</style>
