<script lang="ts">
import { defineComponent } from 'vue';
import { NLayout, NLayoutHeader, NLayoutContent, NSpace, NCard } from 'naive-ui';

import Organization from '@/interfaces/Organization';
import OrganizationAPI from '@/api/Organization';

export default defineComponent({
    name: 'OrganizationsView',
    components: {
        NSpace,
        NCard,
    },
    data() {
        return {
            organizationsData: [] as Organization[]
        }
    },
    mounted: async function() {
        this.organizationsData =  await OrganizationAPI.getOrganization();
    }
})
</script>

<template>
    <div style="height: 100vh; position: relative">
        <n-space vertical>
            <n-card
                v-for="item in organizationsData"
                :key="item.id_organization"
                :title="item.name_organization"
                style="margin-top: 5px;"
            />
        </n-space>
    </div>
</template>