<template>
  <v-container align="center" fluid="lg" class="mx-auto" style="max-width: 900px;">
    <h1 class="text-center pb-6">Meet The Team</h1>
      <v-row align-v="center" class="mx-auto" no-gutters>
        <v-col class="ma-3 mb-6 mx-5"> 
          <v-card max-width="250" class="mx-auto" style="height: 400px;">
            <v-img class="white--text align-end" height="250px" :src="require('../assets/pat.png')">
            </v-img>
          <v-card-subtitle class="pb-0"> Patrity </v-card-subtitle>
          <v-card-text class="text--primary">
          <div>Backend Developer</div>
          <div>Java, Python</div>
            </v-card-text>
            <v-card-actions>
            <v-btn color="orange" href="https://github.com/Patrity" text> 			
        <v-icon>mdi-github</v-icon> </v-btn>
            <v-btn color="orange" href="https://patrity.com" text> Portfolio </v-btn>
			</v-card-actions>
			</v-card>
			</v-col>


	<v-col class="ma-3 mx-5">
      <v-card max-width="250" class="mx-auto" style="height: 400px;">
        <v-img class="white--text align-end" height="250px" :src="require('../assets/andy.jpg')">
        </v-img>
        <v-card-subtitle class="pb-0">ReverendDread</v-card-subtitle>
        <v-card-text class="text--primary">
          <div>Backend Developer</div>
          <div>Java & Kotlin Developer</div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="orange" href="https://github.com/ReverendDread" text>Github</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
	<v-col class="ma-3 mx-5">
      <v-card max-width="250" class="mx-auto" style="height: 400px;">
        <v-img class="white--text align-end" height="250px" :src="require('../assets/rogers.jpg')">
        </v-img>
        <v-card-subtitle class="pb-0">Rogers</v-card-subtitle>
        <v-card-text class="text--primary">
          <div>Modeler</div>
          <div>Content Designer</div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="orange" href="https://www.rune-server.ee/runescape-development/rs2-client/models/687794-rogers-models.html" text>Portfolio</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    </v-row>


    <v-row align-v="center" class="mx-auto px-16" no-gutters>
		<v-col align-self="end" class="ma-3 mx-5">

      <v-card max-width="250" class="mx-auto" style="height: 400px;">
        <v-img class="white--text align-end" height="250px" :src="require('../assets/rspsi.webp')">
        </v-img>
        <v-card-subtitle class="pb-0">RSPSi</v-card-subtitle>
        <v-card-text class="text--primary">
          <div>Java Developer</div>
          <div>Backend, Game clients</div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="orange" href="https://github.com/PhotonGaming" text>Github</v-btn>
          <v-btn color="orange" href="https://www.rune-server.ee/black-market/virtual-items/selling/665606-rspsi-3d-map-editor.html" text>RSPS Map Editor</v-btn>
        </v-card-actions>
      </v-card>	  
		</v-col>

		<v-col align-self="start" class="ma-3 mx-5">
      <v-card max-width="250" class="mx-auto" style="height: 400px;">
        <v-img class="white--text align-end" height="200px" :src="require('../assets/rotinx.png')">
        </v-img>
        <v-card-subtitle class="pb-0">RotinX</v-card-subtitle>
        <v-card-text class="text--primary">
          <div>Front-End Developer</div>
          <div>Javascript, Kotlin, Python</div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="orange" href="https://github.com/Rotinx" text>Github</v-btn>
        </v-card-actions>
      </v-card>
		</v-col>
	</v-row>
  </v-container>
  
</template>

<script>
export default {
  name: "Team",
};
</script>