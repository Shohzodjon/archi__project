<script setup>
import {defineProps} from 'vue';
const props=defineProps({
    items:Array
})

const navigateTo=(route)=>{
    console.log('Navigating to:', route);
}

  </script>
<template>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" v-for="(item, index) in items" :key="index" :class="{ 'active': index === (items.length - 1) }">
          <a v-if="index !== (items.length - 1)" @click="navigateTo(item.route)">{{ item.label }}</a>
          <span v-else>{{ item.label }}</span>
        </li>
      </ol>
    </nav>
  </template>
  <style>
  .breadcrumb-item {
    display: inline-block
  }
  
  .breadcrumb-item + .breadcrumb-item::before {
    content: "\003E";
    padding: 0 5px;
    color: #6c757d;
  }
  
  .breadcrumb-item.active {
    color: #007bff;
  }
  </style>
  
