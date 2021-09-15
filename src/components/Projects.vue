<template>
  <div>
    <p class="header">Our Projects</p>
    <p class="headerDescription">Pellentesque ornare eu ipsum quis rutrum. Aenean sit amet magna ultrices, blandit urna posuere, vestibulum purus.</p>
    <div class="wrapper">
      <div class="card-wrapper">
        <p class="title">MOONCRAFT</p>
        <p class="description">
          Cras ut risus pulvinar, aliquam lorem id, lobortis tellus. In hac
          habitasse platea dictumst. Nullam eu felis vitae lacus cursus
          fringilla vel vel lorem.
        </p>
        <div class="tag">
          <p>SERVER</p>
        </div>
      </div>
      <div class="card-wrapper">
        <p class="title">MOONCRAFT</p>
        <p class="description">
          Cras ut risus pulvinar, aliquam lorem id, lobortis tellus. In hac
          habitasse platea dictumst. Nullam eu felis vitae lacus cursus
          fringilla vel vel lorem.
        </p>
        <div class="tag">
          <p>SERVER</p>
        </div>
      </div>
      <div class="card-wrapper">
        <p class="title">MOONCRAFT</p>
        <p class="description">
          Cras ut risus pulvinar, aliquam lorem id, lobortis tellus. In hac
          habitasse platea dictumst. Nullam eu felis vitae lacus cursus
          fringilla vel vel lorem.
        </p>
        <div class="tag">
          <p>SERVER</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  @apply flex items-center justify-around flex-wrap mt-16;
}

.card-wrapper {
  @apply mr-16 ml-16 mt-8 flex flex-col;
  width: 410px;
  height: 200px;
  background: linear-gradient(84.1deg, rgba(0, 0, 0, 0.69) 21.15%, rgba(0, 0, 0, 0.15) 100%), url(../assets/mooncraft.svg);
}

.title {
  @apply font-extrabold font-raleway text-2xl pt-4 pl-6;
  letter-spacing: 0.1em;
  color: #f3f3f3;
}

.description {
  @apply font-medium font-quick pt-2 pl-6;
  letter-spacing: -0.04em;
  max-width: 320px;
  line-height: 119.5%;
  color: #d1d1d1;
}

.tag {
  @apply flex justify-end items-end h-full
}

.tag p {
  @apply bg-white px-2 m-3 font-quick font-bold text-sm
}
</style>
