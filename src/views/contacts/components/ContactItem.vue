<template>
  <el-card body-style="padding: 0;">
    <div class="p-5">
      <div class="flex">
        <div class="flex-grow text-sm truncate" @click.stop>
          <template v-if="editMode">
            <input
              ref="inputRef"
              v-model="localContact.name"
              type="text"
              class="block font-medium w-full"
            >
            <input v-model="localContact.description" type="text" class="block mt-1 text-gray w-full">
          </template>

          <template v-else>
            <p class="font-medium cursor-text">{{ contact.name }}</p>
            <p class="text-gray cursor-text mt-1 truncate">
              {{ contact.description }}
            </p>
          </template>
        </div>

        <ContactAvatar class="ml-2" :contact-name="contact.name" :contact-image="contact.image" />
      </div>

      <div class="flex justify-end mt-2 gap-2">
        <template v-if="editMode">
          <span
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            @click.stop="editMode = false"
          >Cancel</span>

          <span
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            @click.stop="onSave"
          >Save</span>
        </template>

        <template v-else>
          <span
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            @click.stop="triggerEditMode"
          >Edit</span>

          <span
            class="text-red-500 font-medium text-xs cursor-pointer hover:underline"
            @click.stop="$emit('delete', contact)"
          >Delete</span>
        </template>
      </div>
    </div>

    <div class="flex text-sm font-medium text-gray-dark border-t border-gray-ultra-light" @click.stop>
      <div class="flex items-center justify-center flex-1 py-4 cursor-pointer hover:text-gray">
        <IconEnvelope />
        <span class="ml-3">Email</span>
      </div>
      <div
        class="flex items-center justify-center flex-1 py-4 border-l
            border-gray-ultra-light cursor-pointer hover:text-gray"
      >
        <IconPhone />
        <span class="ml-3">Call</span>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
const props = defineProps<{
  contact: IContact
}>()

const emit = defineEmits(['delete', 'save'])

const inputRef = ref<HTMLInputElement>()

const localContact = ref<IContact>({
  id: 0,
  name: '',
  description: '',
  image: ''
})

const editMode = ref(false)

async function triggerEditMode () {
  editMode.value = true
  localContact.value = { ...props.contact }
  await nextTick()
  inputRef.value?.focus()
}

function onSave () {
  emit('save', localContact.value)
  editMode.value = false
}
</script>
