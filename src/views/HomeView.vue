<template>
  <div class="membershipContainer">
    <TotalMembershipsComponent />
    <MembersListComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import TotalMembershipsComponent from '@/components/TotalMembershipsComponent.vue'
import MembersListComponent from '@/components/MemberListComponent.vue'

export default {
  name: 'HomeView',
  components: {
    TotalMembershipsComponent,
    MembersListComponent
  }
}
</script>

<style lang="scss" scoped>
  .membershipContainer {
    display: grid;
    grid-template-columns: .27fr .73fr;
    height: calc(100vh - 6rem);
    position: relative;
  }
</style>