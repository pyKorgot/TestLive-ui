<template>
    <!-- <n-collapse>
        <n-collapse-item
            v-for="testplan in testPlanData"
            :key="testplan.id_test_plan"
            :title="testplan.name"
            :name="testplan.id_test_plan"
        >
            <TestPlanComponent
                :idParent="testplan.id_test_plan"
            />
            <TestCaseComponent :id-test-plan="testplan.id_test_plan"/>
        </n-collapse-item>
    </n-collapse> -->
    awdwa
    <n-tree
        block-line
        cascade
        checkable
        :data="testPlanData"
        expand-on-click
        label-field="name"
        key-field="id_test_plan"
    >

    </n-tree>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { NCollapse, NCollapseItem } from 'naive-ui';
// import TestPlanComponent from '@/components/TestPlanComponent.vue';
// import TestCaseComponent from '@/components/TestCaseComponent.vue';
import { NTree } from 'naive-ui';
import axios from 'axios';
import ITestPlan from '@/interfaces/TestPlan';

export default defineComponent({
    name: 'TestPlanView',
    components: {
        NTree
        // NCollapse,
        // NCollapseItem,
        // TestPlanComponent,
        // TestCaseComponent
    },
    data() {
        return {
            // testPlanData: [] as ITestPlan[]
            testPlanData: [
                {
                    name: 'tst',
                    id_test_plan: 1,
                    children: [
                        {
                            name: 'tst1',
                            id_test_plan: 2,
                            children: null
                        }
                    ]
                }
            ]
        }
    },
    mounted() {
        // axios.get('/api/test_plan')
        // .then((response) => {
        //     this.testPlanData = response.data;
        //     console.log(this.testPlanData);
        // }).catch(error => {
        //     console.log(error)
        // })
    },
})
</script>

<style scoped>
</style>