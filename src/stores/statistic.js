
import { defineStore } from "pinia";

export const useStatisticStore = defineStore("statistic", {
  state: () => ({
    statistic: [],
  }),
  actions: {
    async fetchStatisticData(param) {
      const response = await fetch(`https://admin.archi.uz/api/${param}`);
      const data = await response.json();
      this.statistic = data.data;
    },
  },
});