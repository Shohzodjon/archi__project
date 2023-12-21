
import { defineStore } from "pinia";

export const useAdvantageStore = defineStore("advantage", {
  state: () => ({
    advantage: [],
  }),
  actions: {
    async fetchAdvantageData(param) {
      const response = await fetch(`https://admin.archi.uz/api/${param}`);
      const data = await response.json();
      this.advantage = data.data;
    },
  },
});