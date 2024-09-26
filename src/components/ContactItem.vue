<template>
  <Card>
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
          <input v-model="localContact.role" type="text" class="block mt-1 text-gray font-medium w-full">
        </template>

        <template v-else>
          <p class="font-medium cursor-text">{{ contact.name }}</p>
          <p class="text-gray cursor-text mt-1 truncate">
            {{ contact.description }}
          </p>
          <p class="text-gray font-medium cursor-text mt-1 truncate">
            {{ contact.role }}
          </p>
        </template>
      </div>

      <div
        class="flex items-center justify-center w-[40px] h-[40px] ml-2 rounded-full shrink-0 overflow-hidden
      border border-gray-medium bg-gray-ultra-light"
      >
        <span
          v-if="imageHasError || !contact.image"
          class="font-medium uppercase"
        >{{ nameAbbrv }}
        </span>

        <img
          v-else
          class="object-cover"
          :src="contact.image"
          alt="contact-logo"
          @error="imageHasError = true"
          @load="imageHasError = false"
        >
      </div>
    </div>

    <div class="flex justify-end mt-2 gap-2">
      <template v-if="editMode">
        <button
          class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
          @click.stop="editMode = false"
        >
          Cancel
        </button>

        <button
          class="text-blue-500 font-medium text-xs cursor-pointer hover:underline disabled:text-gray"
          :disabled="!isFormValid"
          @click.stop="onSave"
        >
          Save
        </button>
      </template>

      <template v-else>
        <button
          class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
          @click.stop="triggerEditMode"
        >
          Edit
        </button>

        <button
          class="text-red-500 font-medium text-xs cursor-pointer hover:underline"
          @click.stop="$emit('delete', contact)"
        >
          Delete
        </button>
      </template>
    </div>

    <template #footer>
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
    </template>
  </Card>
</template>

<script lang="ts" setup>
import { ref, nextTick, computed } from 'vue'
import type { IContact } from '@/types'
import IconEnvelope from '@/components/icons/IconEnvelope.vue'
import IconPhone from '@/components/icons/IconPhone.vue'
import Card from '@/components/Card.vue'

const props = defineProps<{
  contact: IContact
}>()

const emit = defineEmits(['delete', 'save'])

const inputRef = ref<HTMLInputElement>()

const localContact = ref<Omit<IContact, 'id'>>({
  name: '',
  description: '',
  image: '',
  role: ''
})

const nameAbbrv = computed(() => {
  return props.contact.name.split(' ').reduce((acc, cur) => {
    if (acc.length < 2) {
      acc = acc.concat(cur[0])
    }
    return acc
  }, '')
})

const editMode = ref(false)

const isFormValid = computed(() => {
  const { image, ...contact } = localContact.value
  return Object.values(contact).every(c => !!c)
})

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

const imageHasError = ref(false)
</script>
