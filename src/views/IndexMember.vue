<template>
  <div class="IndexMember">
      <NavbarMember/>
      <div class="profile">
          
      </div>
      <MenuhuayMember/>
      
  </div>
</template>

<script>
import NavbarMember from '../components/NavbarMember.vue'
import MenuhuayMember from '@/components/MenuhuayMember.vue'
import '../assets/css/flag-icon.css'
export default {
    components: {
        NavbarMember,
         MenuhuayMember,
  }
}
</script>

<style scoped>
    .IndexMember{
        height: 100vh;
        padding: 0;
        margin: 0;
    }
</style>