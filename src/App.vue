<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

      <v-spacer></v-spacer>

      <v-btn
        href="https://yoters.com"
        target="_blank"
        text
      >
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn
        href="https://github.com/Yoters"
        target="_blank"
        text
      >
      <v-spacer></v-spacer>
        <span class="mr-2">GitHub</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Header/>
        <v-divider></v-divider>
      <Team/>
        <v-divider></v-divider>
      <AboutUs/>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Team from './components/Team';
import AboutUs from './components/AboutUs';

export default {
  name: 'App',

  components: {
    Header,
    Team,
	AboutUs
  },

  data: () => ({
    //
  }),
};
</script>
