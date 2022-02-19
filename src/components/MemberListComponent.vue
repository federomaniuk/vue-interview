<template>
  <div class="memberListContainer">
    <MemberCardComponent />
    <MemberCardComponent />
    <MemberCardComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import MemberCardComponent from '@/components/UI/MemberCardComponent.vue'

export default {
  name: 'HomeView',
  components: {
    MemberCardComponent,
  }
}
</script>

<style scoped lang="scss">
  .memberListContainer {
    background-color: blue;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    padding: 2rem;
  }
</style>
