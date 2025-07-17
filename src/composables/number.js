import { ref } from 'vue'

function useNumber() {
  const count = ref(0)
  //   const doubleCount = computed(() => count.value * 2)

  //   const increment = () => count.value++
  //   const decrement = () => count.value--

  return { count }
}

export default useNumber
