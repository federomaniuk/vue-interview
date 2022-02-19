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
$boxShadow: 0 .5rem .75rem rgba(88, 185, 238, .5);
button {
  background: linear-gradient(295deg, $primaryColor 0%, $secondaryColor 100%);
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
  box-shadow: $boxShadow;
}

button:active {
  box-shadow: none !important;
  box-shadow: $boxShadow;
}
button:hover {
  box-shadow: $boxShadow;
  transform: $standardTransform;
  cursor: pointer;
}
</style>