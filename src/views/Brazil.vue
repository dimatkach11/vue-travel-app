<template>
  <div>
    <h2>Brazil</h2>
    <button
      @click="showAsynchronous = !showAsynchronous"
      class="btn btn-primary"
    >
      Toggle Our Asynchronous Component
    </button>
    <div v-if="showAsynchronous">
      <Asynchronous />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Asynchronous: () =>
      import(
        /* webpackChunkName: "asynchronousComponent" */ "@/components/AsynchronousComponent.vue"
      ),
  },
  data() {
    return {
      showAsynchronous: false,
    };
  },
};
</script>
