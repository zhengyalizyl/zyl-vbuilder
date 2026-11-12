import {ref} from 'vue';
export const useDisclosure = (opened?:boolean) => {
  const isOpen = ref(opened ?? false)
  const toggle = () => {
    isOpen.value = !isOpen.value
  }
  const open=()=>{
    isOpen.value = true
  }
  const close=()=>{
    isOpen.value = false
  }
  return {
    isOpen,
    toggle,
    open,
    close
  }
}
