<template>
  <v-dialog
    :value="isDialogOpen"
    width="500"
    class="dialog-container"
    @click:outside="$emit('close')"
  >
    <v-card>
      <v-card-title class="headline">
        <slot name="header" />
      </v-card-title>
      <v-card-text>
        <slot name="content" />
      </v-card-text>
      <div
        v-if="hasFooter"
        class="dialog-footer"
        :class="[confirmColor]"
      >
        <slot name="footer">
          <div @click="$emit('close')" />
        </slot>
      </div>

      <!-- <v-card-actions>
        <v-spacer />
        <v-btn
          color="green darken-1"
          text
          @click="$emit('handle-click-action-button', true)"
        >
          수락
        </v-btn>
        <v-btn
          color="green darken-1"
          text
          @click="$emit('handle-click-action-button', false)"
        >
          거절
        </v-btn>
      </v-card-actions> -->
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'BaseDialog',
  props: {
    isDialogOpen: {
      type: Boolean,
      default: false,
      required: true,
    },
    handleActionButton: {
      type: Function,
      default: () => {},
    },
    hasFooter: {
      type: Boolean,
      default: true,
    },
    confirmColor: {
      type: String,
      default: 'blue',
    },
  },
}
</script>

<style lang="scss" scoped>
.dialog-container {
  padding: 1rem;
}
.headline {
  margin-bottom: 2.5rem;
}

.dialog-footer {
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
}
</style>
