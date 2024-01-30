<template>
    <n-collapse>
        <n-collapse-item
            v-for="testplan in testPlanData"
            :key="testplan.idTestPlan"
            :title="testplan.name"
            :name="testplan.idTestPlan"
        >
            <TestPlanComponent
                :idParent="testplan.idTestPlan"
            />
            <TestCaseComponent :id-test-plan="testplan.idTestPlan"/>
        </n-collapse-item>
    </n-collapse>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NCollapse, NCollapseItem } from 'naive-ui';
import TestPlanComponent from '@/components/TestPlanComponent.vue';
import TestCaseComponent from '@/components/TestCaseComponent.vue';

export default defineComponent({
    name: 'TestPlanView',
    components: {
        NCollapse,
        NCollapseItem,
        TestPlanComponent,
        TestCaseComponent
    },
    data() {
        return {
            testPlanData: [
                {
                    'idTestPlan': 1,
                    'name': 'Основное окно',
                    'idParent': null
                },
                {
                    'idTestPlan': 2,
                    'name': 'API',
                    'idParent': null
                },
                {
                    'idTestPlan': 3,
                    'name': 'База данных',
                    'idParent': null
                }
            ]
        }
    },
})
</script>

<style scoped>
</style>