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

<style>
button {
  background: linear-gradient(295deg, rgba(48,83,220,1) 0%, rgba(88,185,238,1) 100%);
  border-radius: .5rem;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: .9rem;
  border: 0;
}
button:focus {
  outline: none !important;
  box-shadow: none !important;
}
.btn:hover {
  transition: 0.15s;
}
</style>