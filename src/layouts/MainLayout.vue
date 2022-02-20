<template>
  <div>
    <HeaderComponent />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from '../components/UI/HeaderComponent.vue'
export default {
  components: {
    HeaderComponent,
  }
}
</script>