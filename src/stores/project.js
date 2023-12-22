
import { defineStore } from "pinia";

export const useProjectStore = defineStore("project", {
  state: () => ({
    projects: [],
    projectDetail:[],
    otherProject:[]
  }),
  actions: {
    async fetchProjectData(param) {
      const response = await fetch(`https://admin.archi.uz/api/${param}`);
      const data = await response.json();
      this.projects = data.data;
    },
    async fetchProjectDetail(param) {
        const response = await fetch(`https://admin.archi.uz/api/projects/${param}`);
        const data = await response.json();
        this.projectDetail = data.data;
        this.otherProject=data
      },
    
  },
});