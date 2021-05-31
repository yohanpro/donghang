<template>
  <div class="floating-button-wrapper">
    +
  </div>
</template>
<script>
export default {
  name: 'FloatingButton',
}
</script>

<style lang="scss" scoped>
.floating-button-wrapper {
  width: 12.5vw;
  height: 12.5vw;
  max-width: 60px;
  max-height: 60px;
  position: absolute;
  display: flex;
  align-items: center;
  background-color: #0c9;
  box-shadow: 2px 2px 3px #999;
  color: #fff;
  border-radius: 50%;
  justify-content: center;
  right: 5vw;
  bottom: 13vh;
  cursor: pointer;
  font-size: 3rem;
}
</style>
