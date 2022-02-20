<template>
  <button :class="btnClass" @click="$emit('click', $event)">
    <slot />
  </button>
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
button {
  background: $standardGradient01;
  border-radius: $standardRadius;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: .9rem;
  border: 0;
  transition: $standardTransition;
  outline: none !important;
}
button:focus {
  box-shadow: none !important;
  box-shadow: $standardShadow;
}

button:active {
  box-shadow: none !important;
  box-shadow: $standardShadow;
}
button:hover {
  box-shadow: $standardShadow;
  transform: $standardTransform;
  cursor: pointer;
}
</style>