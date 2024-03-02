<template>
    <div style="height: 100vh; position: relative">
        <n-layout position="absolute">
            <n-layout-header style="height: 64px; padding: 24px" bordered>
                TestLive
            </n-layout-header>

            <n-layout has-sider position="absolute" style="top: 64px; bottom: 64px; height: 100%">
                <n-split 
                    direction="horizontal"
                    :default-size="0.7"
                    :min="0.3"
                    :max="0.7"
                >
                    <template #1>
                        <TestPlanComponent @id_test_case="(id_test_case) => id_test_case_from_tree = id_test_case" />
                    </template>
                    
                    <template #2>
                        <div>
                            <TestCaseComponent :idTestCase="id_test_case_from_tree"/>
                        </div>
                    </template>
                </n-split>
            </n-layout>
        </n-layout>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NLayout, NLayoutHeader, NSplit } from 'naive-ui';
import TestPlanComponent from '@/components/test_plan/TestPlanComponent.vue';
import TestCaseComponent from '@/components/test_case/TestCaseComponent.vue';

export default defineComponent({
    name: 'TestPlanView',
    components: {
        NLayout,
        NLayoutHeader,
        NSplit,
        TestPlanComponent,
        TestCaseComponent
    },
    data() {
        return {
            id_test_case_from_tree: NaN
        }
    }
})

</script>

<style scoped>
</style>