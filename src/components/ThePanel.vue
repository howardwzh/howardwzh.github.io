<template>
  <div class="panel pb-8 mb-8 border-b border-gray-200">
    <h2 class="title text-3xl pb-4">
      <slot name="title"></slot>
    </h2>
    <div class="details">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.panel {
  /* padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e0e0e0; */
}

.title {
  /* font-size: 2.5rem; */
}

.details {
}
.panel:last-of-type {
  margin-bottom: 0;
}
</style>
