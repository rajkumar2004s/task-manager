<script setup>
import { computed, ref, watch } from 'vue'
import { v4 as uuid } from 'uuid'

const emit = defineEmits(['preview-submitted'])

const task = ref('')
const priority = ref('')

const onSubmit = () => {
  if (task.value === '' || priority.value === '') {
    alert('Please fill the both fields !!')
    return
  }

  const newTask = {
    id: uuid(),
    task: task.value,
    priority: priority.value,
    isCompleted: false,
  }

  emit('preview-submitted', newTask)

  task.value = ''
  priority.value = ''
}

const error = ref('')
watch(task, (newTask) => {
  if (newTask.length > 20) {
    error.value = 'Task must be 20 characters or less.'
  } else {
    error.value = ''
  }
})
</script>

<template>
  <div class="container">
    <form class="form-card" @submit.prevent="onSubmit">
      <slot name="heading"></slot>
      <div class="form-group">
        <label>Task</label>
        <input v-model="task" type="text" placeholder="Enter task" />
        <p class="error">{{ error }}</p>
      </div>
      <div class="form-group">
        <label>Priority</label>
        <select v-model="priority" type="text">
          <option>High</option>
          <option>medium</option>
          <option>low</option>
        </select>
      </div>
      <button type="submit">Add Task</button>
    </form>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
.error {
  color: red;
  font-size: 18px;
}
.form-card {
  background-color: #f0f4f8;
  border: 1px solid #cbd5e1;
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  width: 300px;
}

h2 {
  margin-bottom: 20px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  font-family: 'Inter', sans-serif;
}

input,
select {
  padding: 8px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #d1d5db;
  outline: none;
}

button {
  margin-top: 10px;
  padding: 10px;
  background-color: #2563eb;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #1d4ed8;
}
</style>
