<template>
  <div class="filters">
    <div class="filters__left">
      <div class="filters__select-option">
        <img
          src="~/assets/images/icons/world.svg"
          alt=""
        >
        <p class="filters__select-option__title">
          국가
        </p>
      </div>

      <div class="filters__select-option">
        <img
          src="~/assets/images/icons/city.svg"
          alt=""
        >
        <p class="filters__select-option__title">
          도시
        </p>
      </div>
    </div>

    <div class="filters__right">
      <div class="filters__select-option">
        <img
          src="~/assets/images/icons/filter.svg"
          alt=""
        >
        <p class="filters__select-option__title">
          필터타입
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Filters',
}
</script>

<style lang="scss" scoped>
.filters {
  width: 100%;
  height: 4rem;
  border-bottom: 1.5px solid var(--border-light-gray);
  display: flex;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    height: 100%;
  }
  &__left {
    flex-basis: 40%;
    margin-right: auto;
    .filters__select-option {
      margin-right: 0.8rem;
    }
  }

  &__right {
    margin-left: auto;
  }

  &__select-option {
    display: flex;
    align-items: center;

    > img {
      width: 18px;
    }
    p {
      font-size: 1.4rem;
      font-weight: 500;
      margin-left: 0.3rem;
    }
  }
}
</style>
