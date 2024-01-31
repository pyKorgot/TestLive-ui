<template>
    <n-collapse display-directive="show">
        <n-collapse-item
            v-for="testplan in testPlanData"
            :key="testplan.id_test_plan"
            :title="testplan.name"
            :name="testplan.id_test_plan"
        >
            <TestPlan :id-parent="testplan.id_test_plan"/>
            <TestCaseComponent
                :idTestPlan="testplan.id_test_plan"
            />
        </n-collapse-item>
    </n-collapse>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NCollapse, NCollapseItem } from 'naive-ui'
import TestCaseComponent from './TestCaseComponent.vue'
import ITestPlan from '@/interfaces/TestPlan';
import axios from 'axios';

export default defineComponent({
    name: 'TestPlan',
    components: {
        NCollapse,
        NCollapseItem,
        TestCaseComponent
    },
    props: {
        idParent: Number
    },
    data() {
        return {
            testPlanData: [] as ITestPlan[]
        }
    },
    methods: {
    },
    mounted() {
        axios.get(`/api/test_plan/?id_parent=${this.idParent}`)
        .then((response) => {
            this.testPlanData = response.data;
            console.log(this.testPlanData);
        }).catch(error => {
            console.log(error)
        })
    },
})
</script>

<style scoped>
</style>
