
import { defineStore } from "pinia";

export const usePartnerStore = defineStore("partner", {
  state: () => ({
    partner: [],
  }),
  actions: {
    async fetchPartnerData(param) {
      const response = await fetch(`https://admin.archi.uz/api/${param}`);
      const data = await response.json();
      this.partner = data.data;
    },
  },
});