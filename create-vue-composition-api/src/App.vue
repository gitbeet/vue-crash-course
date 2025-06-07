<script setup>
import { onMounted, ref } from "vue"; // similar to useState in react

const name = ref("John Doe");
const status = ref("active");
const tasks = ref(["Task1", "Task2", "Task3"]);
const newTask = ref("");

const toggleStatus = () => {
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};

const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    tasks.value = data.map((task) => task.title);
  } catch (error) {
    console.log("Error while fetching tasks: ", error);
  }
});
</script>

<template>
  <!-- templating a simple variable -->
  <h1 class="text-sm">{{ name }}</h1>

  <!-- conditional rendering -->
  <p v-if="status === 'active'"> User is active</p>
  <p v-else-if="status === 'pending'"> User is pending</p>
  <p v-else> User is inactive</p>

  <!-- .prevent === preventDefault -->
  <form @submit.prevent="addTask">
    <label for="newTask">Add task</label>
    <!-- v-model is similar to "value" in react -->
    <input
      v-model="newTask"
      type="text"
      id="newTask"
      name="newTask"
    />
    <button type="submit">Add task</button>
  </form>

  <!-- lists -->
  <h3>Tasks</h3>
  <ul>
    <li
      v-for="(task, index) in tasks"
      :key="task"
      ><span>{{ task }}</span
      ><button @click="deleteTask(index)">❌</button></li
    >
  </ul>
  <button @click="toggleStatus">Change status</button>
</template>

<style scoped></style>
