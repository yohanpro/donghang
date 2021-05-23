<template>
  <v-card
    elevation="2"
    outlined
    shaped
    tile
    class="participant"
    @click="handleParticipantsDialog"
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
          alt="Participants image"
        >
      </div>
      <div class="participant__detail">
        <div class="allow-status">
          {{ isAllowed ? '수락됨' : '거절됨' }}
        </div>
        <div class="participant__detail__text">
          {{ participant.detail.textarea }}
        </div>
      </div>
    </div>

    <base-dialog
      :is-dialog-open="isDialogOpen"
      :handle-dialog="handleParticipantsDialog"
      @close="isDialogOpen = false"
      @handle-click-action-button="handleClickActionButton"
    >
      <template #header>
        <div class="dialog-header">
          <div class="participant__profile participant__profile--bigger">
            <img
              :src="participant.profile.imageUrl"
              alt=""
            >
          </div>
        </div>
      </template>
      <template #content>
        <div class="dialog-participant__summary">
          <div class="dialog-participant__summary__nickname">
            닉네임: {{ participant.nickname }}
          </div>
        </div>
        <div class="participant__detail__text participant__detail__text">
          {{ participant.detail.textarea }}
        </div>
      </template>
      <template #footer>
        <div>여기가 footer</div>
      </template>
    </base-dialog>
  </v-card>
</template>

<script>
export default {
  name: 'ParticipantsEntity',
  components: {
    BaseDialog: () => import('~/components/common/dialog/BaseDialog'),
  },
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
      isDialogOpen: false,
      isAllowed: false,
    }
  },
  computed: {
    isCardOwner () {
      return this.participant.id === this.auth.id
    },
  },
  methods: {
    handleParticipantsDialog () {
      this.isDialogOpen = true
    },
    handleClickActionButton (value) {
      this.isAllowed = value
      this.isDialogOpen = false
    },
  },
}
</script>

<style lang="scss" scoped>
.dialog-participant {
  &__summary {
    display: flex;
    flex-direction: column;
    align-items: 'center';
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 2rem;
    font-family: $nanum-gothic;
    color: black;
    &__nickname {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.dialog-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
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
    &--bigger {
      width: 40%;
      max-width: 250px;
      flex-basis: auto;
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
