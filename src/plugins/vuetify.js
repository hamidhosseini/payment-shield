import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        juicyRed: '#E50046',
        webGrey: '#2C3536',
        limeGreen: '#D1D834'
      },
    },
  },
})

export default vuetify