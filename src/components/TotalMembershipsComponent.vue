<template>
  <div class="totalMembershipsContainer">
    <p>Total Memberships Sold:</p>
    <p>{{ $store.state.totalSales }}</p>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.totalMembershipsContainer {
  background-color: $darkGray;
  margin: 0;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 1.5rem;
}
p {
  margin: 0;
}
</style>
