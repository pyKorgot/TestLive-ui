<script lang="ts">
import { defineComponent } from 'vue';
import { NSpace, NCard, NLayout, NLayoutHeader, NButton } from 'naive-ui';
import Release from '@/interfaces/Release'
import ReleaseAPI from '@/api/Release';

export default defineComponent({
    name: 'ReleaseView',
    components: {
        NSpace,
        NCard,
        NLayout,
        NLayoutHeader,
        NButton,
    },
    data() {
        return {
            releasesData: [] as Release[]
        }
    },
    mounted: async function() {
        this.releasesData =  await ReleaseAPI.getRelease();
    }
})

</script>

<template>
    <div style="height: 100vh; position: relative">
        <n-layout position="absolute">
            <n-layout-header
                style="height: 30px"
                bordered
            >
            <n-button
                style="height: 18px; float: right; margin: 5px;" 
                type="primary"
                @click="showModalAddTestPlan = true"
            >
                Add Release
            </n-button>
            </n-layout-header>
            <n-space vertical>
                <n-card
                    v-for="item in releasesData"
                    :key="item.id_release"
                    :title="item.name"
                    style="margin-top: 5px;"
                />
            </n-space>
        </n-layout>
    </div>
</template>

<style scoped>
</style>