<script setup>
import { computed, ref } from 'vue'
import AddTask from '@/components/Addtask.vue'

const tasks = ref([])

const addTask = (newTask) => {
  tasks.value.push(newTask)
}

const removeTask = (index) => {
  tasks.value.splice(index, 1)
}

const getPriorityEmoji = (priority) => {
  const emojis = {
    high: '❤️',
    medium: '💙',
    low: '🤍',
  }
  return emojis[priority.toLowerCase()] || '❔'
}

const searchInput = ref('')
const heading = ref('Add New Task')

const filteredTasks = computed(() =>
  tasks.value.filter((task) => task.task.toLowerCase().includes(searchInput.value.toLowerCase())),
)

const Completedtask = computed(() => tasks.value.filter((task) => task.isCompleted))

const Uncompletedtask = computed(() => tasks.value.filter((task) => !task.isCompleted))
</script>

<template>
  <div class="bg">
    <div class="card">
      <AddTask @preview-submitted="addTask">
        <template #heading>
          <h3 class="h1">{{ heading }}</h3>
        </template>
      </AddTask>

      <div class="task-list">
        <h1>Tasks</h1>
        <input placeholder="Search Task" type="text" v-model="searchInput" />
        <ul v-if="filteredTasks.length">
          <li v-for="(task, index) in filteredTasks" :key="task.id" class="task-card">
            <div class="task">
              <input class="check" type="checkbox" v-model="task.isCompleted" />
              <p :class="task.isCompleted ? 'strike' : 'p1'">{{ task.task }}</p>
              <p :class="['priority', task.priority.toLowerCase()]">
                {{ task.priority }} {{ getPriorityEmoji(task.priority) }}
              </p>
            </div>
            <button @click="removeTask(index)">❌</button>
          </li>
        </ul>
        <p class="error" v-else>No tasks yet. Start adding!</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.h1 {
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  padding: 10px;
}
.strike {
  text-decoration: line-through;
  color: red;
}
.priority {
  font-weight: bold;
  font-size: 16px;
}
.high {
  color: rgb(167, 24, 24);
}
.medium {
  color: rgb(21, 89, 200);
}
.low {
  color: white;
}
.p1 {
  color: black;
  font-size: 20px;
  font-weight: bold;
}
h1 {
  margin-left: 40px;
  padding: 10px;
}
input {
  padding: 8px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #d1d5db;
  outline: none;
  margin-bottom: 15px;
  margin-left: 40px;
}
.bg {
  background-color: rgb(147, 167, 195);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  display: flex;
}
.task {
  display: flex;
  gap: 50px;
}
.task-list {
  margin-left: 100px;
  padding: 20px;
  font-family: 'Inter', sans-serif;
}
.task-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: #53f758;
  color: #010101;
  border: 1px solid #099fda;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  width: 30vw;
}
button {
  color: #dc2626;
  border: 1px solid #fca5a5;
  border-radius: 6px;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;
}
.task-card button:hover {
  background-color: #fecaca;
}
.error {
  margin-left: 40px;
}
</style>
