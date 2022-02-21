<template>
  <div class="totalMembershipsContainer">
    <p>Total Memberships Sold:</p>
    <p>{{ $store.state.totalSales }}</p>
  </div>
</template>

<style scoped lang="scss">
.totalMembershipsContainer {
  background-color: $darkGray;
  margin: 0;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  padding: .5rem;
}
p {
  margin: 0;
}
</style>
