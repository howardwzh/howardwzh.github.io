<template>
  <div class="item">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  position: relative;
  flex-grow: 1;
  flex-basis: 320px;
}

.details {
  flex: 1;
  margin-left: 1rem;
}
</style>
