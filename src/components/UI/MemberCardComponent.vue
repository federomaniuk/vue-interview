<template>
  <div class="cardContainer">
    TEST
  </div>
</template>

<script>
export default {
  props: {
    to: { type: String, default: "#" },
    btnClass: { type: String, default: "btn btn-primary" },
    icon: { type: String }
  }
};
</script>

<style lang="scss">
.cardContainer {
  background-color: red;
  width: 100%;
}
</style>