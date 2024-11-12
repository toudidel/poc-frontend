<template>
  <div class="justify-content-center align-items-center vh-100">
    <h1>Secured Page</h1>
    <div>This page is secured and requires authentication.</div>
    <div>
      <button @click="reload">Reload</button>
    </div>
    <div>Data: {{ date }}</div>
    <ul>
      <li v-for="item in uids" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {EventService} from "~/service/EventService";

definePageMeta({
  middleware: 'auth'
})

let date = ref('')
let uids = ref([])
let events = ref('')

onMounted(async () => {
  reload()
})

const reload = async () => {
  try {
    const eventService = new EventService()
    const {data: events} = await eventService.securedOne()
    date.value = events.date
    uids.value = events.uuids
  } catch (error) {
    console.error('Read failed', error);
  }
}
</script>
