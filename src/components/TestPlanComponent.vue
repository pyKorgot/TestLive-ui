<template>
    <n-collapse display-directive="show">
        <n-collapse-item
            v-for="testplan in getChildren()"
            :key="testplan.idTestPlan"
            :title="testplan.name"
            :name="testplan.idTestPlan"
        >
            <TestPlan :id-parent="testplan.idTestPlan"/>
            <TestCaseComponent
                :idTestPlan="testplan.idTestPlan"
            />
        </n-collapse-item>
    </n-collapse>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NCollapse, NCollapseItem } from 'naive-ui'
import TestCaseComponent from './TestCaseComponent.vue'

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
            testPlanData: [
                {
                    'idTestPlan': 4,
                    'name': 'Создание тест плана',
                    'idParent': 1
                },
                {
                    'idTestPlan': 5,
                    'name': 'Создание тест кейса',
                    'idParent': 1
                },
                {
                    'idTestPlan': 6,
                    'name': 'Создание тест шага',
                    'idParent': 1
                },
                {
                    'idTestPlan': 7,
                    'name': 'Запрос на создание',
                    'idParent': 2
                },
                {
                    'idTestPlan': 8,
                    'name': 'Соответствие сущностей',
                    'idParent': 3
                },
                {
                    'idTestPlan': 9,
                    'name': 'Сущность тест плана',
                    'idParent': 8
                },
                {
                    'idTestPlan': 10,
                    'name': 'Сущность тест кейса',
                    'idParent': 8
                }
            ]
        }
    },
    methods: {
        getChildren() {
            return this.testPlanData.filter((el) => el.idParent === this.idParent);
        }
    }
})
</script>

<style scoped>
</style>
