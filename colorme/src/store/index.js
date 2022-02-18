import { createStore } from 'vuex';
import { generateRandomColor, textColorBasedOnBgColor } from '@/store/utils.js';
import { Color } from '@/models/color';

export default createStore({
  state: {
    colorPrimary: '#ffffff',
    colorPrimaryText: '#000000',
    colorPrimaryClamped: '#ffffff',
  },

  getters: {
    getColorPrimary: state => {
      return state.colorPrimary;
    },
    getColorPrimaryText: state => {
      return state.colorPrimaryText;
    },
    getColorPrimaryClamped: state => {
      return state.colorPrimaryClamped;
    },
  },

  mutations: {
    updateColorPrimary(state, colorString) {
      state.colorPrimary = colorString;
    },
    updateColorPrimaryText(state, colorString) {
      state.colorPrimaryText = colorString;
    },
    updateColorPrimaryClamped(state, colorString) {
      state.colorPrimaryClamped = colorString;
    },
  },

  actions: {
    updateColorPrimary({ commit }, colorString) {
      // console.log(`updateColorPrimary - colorString: ${colorString}`);
      if (!colorString) {
        const newColor = Color.random();
        const newColorText = newColor.textColor();
        const colorPrimaryClampedHex = newColor.chroma.luminance(0.5).saturate(1).hex();
        // console.log(newColor);
        commit('updateColorPrimary', newColor.toString());
        commit('updateColorPrimaryText', newColorText);
        commit('updateColorPrimaryClamped', colorPrimaryClampedHex);
      } else {
        const newColor = new Color(colorString);
        const newColorText = newColor.textColor();
        const colorPrimaryClampedHex = newColor.chroma.luminance(0.5).saturate(1).hex();
        // console.log(newColor);
        commit('updateColorPrimary', newColor.toString());
        commit('updateColorPrimaryText', newColorText);
        commit('updateColorPrimaryClamped',colorPrimaryClampedHex);
      }
    },
  },

  modules: {},
});
