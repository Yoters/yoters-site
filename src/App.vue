<template>
  <Navbar />
  <div class="relative">
    <div class="banner-wrapper">
      <div>
        <p class="banner-title">A VERSATILE DEVELOPMENT TEAM</p>
        <p class="banner-description">
          Yoter’s is a team of developers who are vastly knowledgeable in modern
          technology. Helping you create you’re dream.
        </p>
      </div>
      <div class="banner-buttons">
        <button class="banner-button-articles">Our Articles</button>
        <button class="banner-button-contact">Contact Us</button>
      </div>
    </div>
    <div class="content-clear">
    </div>
    <img class="hidden lg:block" src="./assets/fullsizebanner.svg" />
    <img class="lg:hidden" src="./assets/fullsizebannerclear.svg" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  background-color: #191d23;
}

.content-clear {
  @apply lg:w-3/4 w-0
}

.banner-buttons {
  @apply mt-20 flex;
}

.banner-buttons button {
  @apply font-quick px-5;
  font-weight: 500;
  letter-spacing: 0.1em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-size: 1.1vw;
  min-width: 120px;
  width: 220px;
  min-height: 15px;
  max-height: 75px;
  white-space: nowrap;
}

.banner-button-articles {
  background-color: #292929;
  color: white;
  @apply mr-10;
}

.banner-button-contact {
  background-color: #FFFFFF;
  color: #292929;
  border: 3px solid #292929;
  padding-top: 1.10rem;
  padding-bottom: 1.10rem;
}

.banner-wrapper {
  @apply absolute md:my-12 xl:my-20 lg:mx-14 xl:mx-20  lg:w-3/12 flex flex-col;

}

.banner-title {
  @apply font-raleway mb-11;
  font-weight: 1000;
  max-width: 530px;
  color: #333333;
  letter-spacing: 0.03em;
  font-size: 3.2vw;
  line-height: 93%;
}

.banner-description {
  max-width: 520px;
  @apply font-quick flex;
  font-weight: 700;
  letter-spacing: 0.005em;
  font-size: 1.5vw;
  line-height: 121%;
  color: #333333;
}
</style>
