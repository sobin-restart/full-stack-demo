<template>
    <div>
      <h1 class="text-2xl font-bold mb-4">User List Via Jenkins + Docker</h1>
      <div v-if="users.length === 0">No users found.</div>
      <ul v-else>
        <li v-for="user in users" :key="user.id">
          {{ user.name }} - {{ user.email }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  const users = await useUsers()
  </script>
  