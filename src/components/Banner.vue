<template>
  <div class="banner-outerwrapper lg:relative">
    <div class="banner-wrapper lg:absolute w-full py-12 xl:py-20 lg:mx-14 xl:mx-20 lg:w-3/12 flex flex-col items-center lg:block bg-cover lg:bg-none">
      <div>
        <p class="banner-title font-raleway mb-11 text-5xl lg:text-bannerTitle px-2 font-black">A VERSATILE DEVELOPMENT TEAM</p>
        <p class="banner-description font-quick flex w-full sm:w-1/2 lg:w-full text-2xl lg:text-bannerDescription px-4 sm:px-0 font-bold">
          Yoter’s is a team of developers who are vastly knowledgeable in modern
          technology. Helping you create you’re dream.
        </p>
      </div>
      <div class="banner-buttons font-quick px-5 lg:text-bannerButtons mt-20 flex">
        <button class="banner-button-articles mr-10 text-white">Our Articles</button>
        <button class="banner-button-contact bg-white">Contact Us</button>
      </div>
    </div>
    <div class="content-clear lg:w-3/4 w-0"></div>
    <img class="hidden lg:block" src="../assets/fullsizebanner.svg" />
  </div>
</template>
<style scoped>

.content-clear {
  @apply lg:w-3/4 w-0
}

.banner-buttons {
  @apply mt-20 flex;
}

.banner-buttons button {
  @apply font-quick px-5 lg:text-bannerButtons;
  font-weight: 500;
  letter-spacing: 0.1em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  max-width: 220px;
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
  @apply lg:absolute w-full py-12 xl:py-20 lg:mx-14 xl:mx-20 lg:w-3/12 flex flex-col items-center lg:block;
  background: no-repeat url("../assets/fullsizebannerclear.svg");
  background-size: cover;
}

.banner-wrapper > div:first-child {
  @apply flex items-center flex-col text-center lg:text-left;
}

.banner-title {
  @apply font-raleway mb-11 text-4xl sm:text-5xl lg:text-bannerTitle px-2;
  font-weight: 1000;
  max-width: 530px;
  color: #333333;
  letter-spacing: 0.03em;
  line-height: 93%;
}

.banner-description {
  @apply font-quick flex w-full sm:w-1/2 lg:w-full text-2xl lg:text-bannerDescription px-4 sm:px-0;
  font-weight: 700;
  letter-spacing: 0.005em;
  
  line-height: 121%;
  color: #333333;
}
</style>
