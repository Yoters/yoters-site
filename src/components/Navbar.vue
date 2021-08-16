<template>
  <div
    style="height: 110px"
    class="flex justify-between xl:justify-around items-center w-full"
  >
    <img src="../assets/logo.svg" width="80" height="40" class="ml-10" />
    <ul class="wide-header" style="letter-spacing: 0.1em">
      <li><a href="#projects">Projects</a></li>
      <li><a href="#projects">Articles</a></li>
      <li><a href="#projects">The Team</a></li>
      <li><a href="https://discord.gg/">Discord</a></li>
    </ul>
    <div class="github-button-wide github-button">
      <svg style="width: 24px; height: 24px" class="mr-2" viewBox="0 0 24 24">
        <path
          fill="#FFF"
          d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
        />
      </svg>
      <p>Github</p>
    </div>
    <div
      class="hamburger-menu"
      style="background: #292929; letter-spacing: 0.1em; line-height: 1px"
      @click.prevent="toggleMenu"
    >
      <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
        <path fill="#FFF" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
      </svg>
    </div>
  </div>
  <div class="md:hidden" v-if="menu">
    <ul class="hidden-navbar">
      <li><a href="#projects">Projects</a></li>
      <li><a href="#projects">Articles</a></li>
      <li><a href="#projects">The Team</a></li>
      <li><a href="https://discord.gg/">Discord</a></li>
      <div class="github-button-hidden github-button">
        <svg style="width: 24px; height: 24px" class="mr-2" viewBox="0 0 24 24">
          <path
            fill="#FFF"
            d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
          />
        </svg>
        <p>Github</p>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu;
    },
  },
};
</script>

<style scoped>
.hidden-navbar {
  @apply ml-10 pb-5 text-white font-quick text-base;
  letter-spacing: 0.1em;
  font-weight: 700;
}

.hidden-navbar > li {
  @apply mb-2;
}

.wide-header {
  @apply hidden md:flex md:justify-around md:w-1/2 xl:w-1/3 one:w-1/3 2xl:w-1/4 font-quick text-base;
  font-weight: 700;
}

.github-button {
  background: #292929;
  letter-spacing: 0.1em;
  line-height: 1px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  transition: 0.4s;
  cursor: pointer;
  font-weight: 700;
  @apply items-center py-2 px-3 font-josefin mr-10 text-white;
}

.github-button p {
  line-height: 1.4em;
  max-height: 1.1em;
}

.github-button:hover {
  transform: scale(1.1);
}

.github-button-hidden {
  @apply flex mb-1;
  width: 118px;
}

.github-button-wide {
  @apply hidden md:flex;
}

.hamburger-menu {
  @apply flex items-center py-2 px-3 font-josefin font-bold text-white mr-10 md:hidden;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.4s;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.hamburger-menu:hover {
  transform: scale(1.1);
}

ul {
  transition: 0.9s;
}

li {
  transition: 0.2s;
  color: rgb(231, 231, 231);
}

li:hover {
  line-height: -0.1;
  color: white;
}

.wide-header li:hover {
  transform: scale(1.05);
}
</style>
