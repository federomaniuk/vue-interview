<template>
  <div class="memberListContainer">
    <MemberCardComponent
    v-for="(member, index) in memberListGlobal"
    :Member="member"
    :key="index"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import MemberCardComponent from '@/components/UI/MemberCardComponent.vue'

export default {
  name: 'MemberListComponent',
  components: {
    MemberCardComponent,
  },
  data () {
    return {
      memberListGlobal: this.$store.state.memberList,
    }
  },
}
</script>

<style scoped lang="scss">
  .memberListContainer {
    background-color: $darkerGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    padding: 2rem;
  }
</style>
