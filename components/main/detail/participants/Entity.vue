<template>
  <v-card
    elevation="2"
    outlined
    shaped
    tile
    class="participant"
  >
    <button
      v-show="isCardOwner"
      class="button-delete-card"
    >
      <img
        src="~/assets/images/icons/trashcan.svg"
        alt="Delete"
      >
    </button>
    <div class="participant__wrapper">
      <div class="participant__profile">
        <img
          :src="participant.profile.imageUrl"
          alt=""
        >
      </div>
      <div class="participant__detail">
        <div class="allow-status">
          {{ isAllowed && '수락됨' }}
        </div>
        <div class="participant__detail__text">
          {{ participant.detail.textarea }}
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'ParticipantsEntity',
  props: {
    participant: {
      type: Object,
      default: () => {},
    },
    isAllowed: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      auth: {
        name: 'john',
        id: 1232313,
      },
    }
  },
  computed: {
    isCardOwner () {
      return this.participant.id === this.auth.id
    },
  },
}
</script>

<style lang="scss" scoped>
.allow-status {
  display: flex;
  width: 100%;
  background: #1976d2;
  justify-content: center;
  color: #fff;
  border-radius: 5px;
  align-items: center;
  font-size: 1.2rem;
  padding: 0.3rem 1rem;
  margin-bottom: 1rem;
}
.participant {
  width: 100%;
  height: 120px;
  margin-bottom: 2rem;
  position: relative;
  border-radius: 10px !important;

  &__wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
  }
  &__profile {
    width: 25%;
    flex-basis: 25%;
    max-width: 150px;
    height: 100%;
    overflow: hidden;
    margin-left: 1rem;
    display: flex;
    align-items: center;
    > img {
      width: 100%;
      border-radius: 50%;
    }
  }
  &__detail {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    padding: 1rem 1.5rem;
    overflow: hidden;
    &__text {
      flex: 1;
      overflow: scroll;
    }
  }
}

.button-delete-card {
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  right: -10px;
  top: -10px;
  overflow: hidden;
  background-color: #eee;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  > img {
    width: 80%;
    height: auto;
  }
}
</style>
