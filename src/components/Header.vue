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
            <button class="w-[60px]">
              <img src="/public/svg/translate.svg" alt="" />
            </button>
            <button class="header__content__btns__button">Войти</button>
          </div>
        </div>
        <div class="dropdown">
          <!-- bwepbnwepobnwepobnweprobnweponbs -->
          <div>
            <img src="/public/svg/dropDown.svg" alt="" />
          </div>
          <div  class="dropdown__content-active">
            <nav>
              <li>home</li>
              <li>cnwqpovnqwp</li>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup></script>
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
      &__content {
        margin: 200px auto;
        position: relative;
        transform: perspective(600px) translate(0, -100%) rotateX(45deg);
        transition: all 0.8s ease 0s;
        opacity: 0;
        // fmwqf[]
      }
      &__content-active {
        transform: perspective(600px) translate(0, 0) rotateX(0deg);
        opacity: 1;
      }
    }
  }
}
</style>
