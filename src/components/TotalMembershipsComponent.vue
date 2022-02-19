<template>
  <div class="totalMembershipsContainer">
    <p>Total Memberships Sold:</p>
    <p>36</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

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
