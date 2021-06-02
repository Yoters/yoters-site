import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);


const vuetify = new Vuetify({
    theme: {
        dark: true,
      themes: {
        dark: {
            primary: '#ff9800',
            secondary: '#ffc107',
            accent: '#ff5722',
            error: '#f44336',
            warning: '#ffeb3b',
            info: '#8bc34a',
            success: '#4caf50'
        }
      },
    },
  })

export default vuetify