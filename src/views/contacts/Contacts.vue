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

  <el-tabs v-model="activeTab" class="demo-tabs" @tab-click="onTabClick">
    <el-tab-pane label="Card" name="card">
      <CardView />
    </el-tab-pane>
    <el-tab-pane label="Table" name="table">
      <TableView />
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import type { TabsPaneContext } from 'element-plus'

const { $routeNames } = useGlobalProperties()
const router = useRouter()
const route = useRoute()

const getCurrentTab = computed(() => {
  return route.query.tab?.toString() ?? 'card'
})
const activeTab = ref(getCurrentTab.value)

function onTabClick (tab: TabsPaneContext) {
  router.replace({ query: { tab: tab.paneName?.toString() } })
}

function createNewContact () {
  router.push({ name: $routeNames.upsertContact, params: { contactId: 'new' } })
}
</script>
