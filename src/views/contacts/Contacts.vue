<template>
  <div class="flex items-center gap-4 mb-5">
    <h3 class="font-medium m-0">Contact list</h3>

    <el-button :type="$elComponentType.primary" @click="createNewContact">
      <template #icon>
        <IconPlus class="w-5 h-5" />
      </template>
      Add Contact
    </el-button>

    <el-button
      class="!ml-0"
      :type="$elComponentType.danger"
      @click="$router.replace({ name: $routeNames.login })"
    >
      Logout
    </el-button>
  </div>

  <el-tabs v-model="activeTab" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="Card" :name="$routeNames.contactsCardView">
      <RouterView />
    </el-tab-pane>
    <el-tab-pane label="Table" :name="$routeNames.contactsTableView">
      <RouterView />
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import type { TabsPaneContext } from 'element-plus'

const { $routeNames } = useGlobalProperties()
const router = useRouter()
const route = useRoute()

const currentTab = computed(() => {
  if (route.name === $routeNames.contactsTableView) {
    return $routeNames.contactsTableView
  }
  return $routeNames.contactsCardView
})

const activeTab = ref(currentTab.value)

const handleClick = (tab: TabsPaneContext) => {
  router.push({ name: tab.paneName?.toString() })
}

function createNewContact () {
  router.push({ name: $routeNames.upsertContact, params: { contactId: 'new' } })
}
</script>
