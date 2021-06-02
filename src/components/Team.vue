<template>
  <v-container fluid align="center">
    <h1 class="text-centered">Meet The Team</h1>
    <v-flex align="center">
      <v-card max-width="250">
        <v-img
          class="white--text align-end"
          height="200px"
        :src="require('../assets/pat.png')"
        >
        </v-img>

        <v-card-subtitle class="pb-0"> Patrity </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Backend Developer</div>

          <div>Over 15 years of experience with Java, Python.</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text> Share </v-btn>

          <v-btn color="orange" text> Explore </v-btn>
        </v-card-actions>
      </v-card>

      <v-card max-width="250">
        <v-img
          class="white--text align-end"
          height="200px"
        :src="require('../assets/andy.jpg')"
        >
        </v-img>

        <v-card-subtitle class="pb-0">ReverendDread</v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Backend Developer</div>

          <div>Java & Kotlin Developer</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text> Share </v-btn>

          <v-btn color="orange" text> Explore </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-container>
</template>
<script>
export default {
  name: "Team",
};
</script>