<template>
  <Navbar />
  <Banner />
  <Objectives />
  <Projects />
</template>


<script>
import Navbar from "./components/Navbar.vue";
import Banner from './components/Banner.vue'
import Objectives from './components/Objectives.vue'
import Projects from './components/Projects.vue'

export default {
  name: "App",
  components: {
    Navbar,
    Banner,
    Objectives,
    Projects
  },
};
</script>

<style>
#app {
  background-color: #191d23;
}

.header {
    color: #F3F3F3;
    @apply font-raleway font-black text-headerTitle;
    
}

.headerDescription {
    color: #F3F3F3;
    @apply font-raleway font-black text-headerDescription;
    
}
</style>
