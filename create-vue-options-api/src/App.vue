<script>
export default {
  data() {
    return {
      name: "John Doe",
      status: "active",
      tasks: ["Task1", "Task2", "Task3"],
      link: "https://google.com",
    };
  },
  methods: {
    toggleStatus() {
      if (this.status === "active") {
        this.status = "pending";
      } else if (this.status === "pending") {
        this.status = "inactive";
      } else {
        this.status = "active";
      }
    },
  },
};
</script>

<template>
  <!-- templating a simple variable -->
  <h1>{{ name }}</h1>

  <!-- conditional rendering -->
  <p v-if="status === 'active'"> User is active</p>
  <p v-else-if="status === 'pending'"> User is pending</p>
  <p v-else> User is inactive</p>

  <!-- lists -->
  <h3>Tasks</h3>
  <ul>
    <li
      v-for="task in tasks"
      :key="task"
      >{{ task }}</li
    >
  </ul>

  <!-- you need to bind it if you want to use a variable, otherwise it would just be a string "link" -->
  <a
    v-bind:href="link"
    target="_blank"
    >Click here to go to the website</a
  >

  <!-- @click does the same -->
  <button v-on:click="toggleStatus">Change status</button>
  <!-- <button @click="toggleStatus">Change status</button> -->
</template>

<style scoped></style>
