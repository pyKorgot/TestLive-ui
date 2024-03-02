<script lang="ts">
import { defineComponent, ref } from 'vue';
import {NTree, TreeOption, NLayoutHeader, NLayoutContent} from 'naive-ui';

import ITestPlan from '@/interfaces/TestPlan';
import TestPlanApi from '@/api/TestPlan'
import TestPlanHeaderComponent from '@/components/test_plan/TestPlanHeaderComponent.vue';


export default defineComponent({
    name: 'TestPlanComponent',
    components: {
        NTree,
        NLayoutHeader,
        NLayoutContent,
        TestPlanHeaderComponent
    },
    data() {
        return {
            testPlanData: [] as ITestPlan[],
            id_test_plan: NaN as number,
            reloadTree: ref(false)
        }
    },
    emits: [
        'id_test_case'
    ],
    methods: {
        handeleLoad: async function (node: TreeOption) {
            const result = await TestPlanApi.branchLoadTree(node.id_test_plan)

            return new Promise<void>((resolve) => {
                setTimeout(() => {
                    node.children = result;
                    resolve();
                }, 300)
            })
        },
        handleCheckedKeysChange (checkedKeys: string[]) {
            this.$emit('id_test_case', NaN);
            this.id_test_plan = NaN;
            if (checkedKeys && checkedKeys.length === 1) {
                let id: string = checkedKeys[0];
                if (id.includes('tc')) {
                    this.$emit('id_test_case', Number(id.slice(0, -2)));
                    return;
                } else if (id.includes('tp')) {
                    this.id_test_plan = Number(id.slice(0, -2));
                }
            }
        },
    },
    watch: {
        reloadTree: async function (newVal, oldVal) {
            if (newVal) {
                this.testPlanData = await TestPlanApi.firstLoadTree();
                this.reloadTree = false;
            }
        }
    },
    mounted: async function() {
        this.testPlanData = await TestPlanApi.firstLoadTree();
    },
})
</script>

<template>
    <div class="test_plan_comp">
        <n-layout position="absolute">
            <n-layout-header
                style="height: 30px"
                bordered
            >
                <TestPlanHeaderComponent
                    :id_test_plan="id_test_plan"
                    @reloadTree="(reload_tree) => reloadTree = !!reload_tree"
                />
            </n-layout-header>

            <n-layout-content>
                <n-tree
                    :data="testPlanData"
                    label-field="name"
                    key-field="key"
                    block-line
                    allow-checking-not-loaded=false
                    expand-on-click
                    checkable
                    :on-load="handeleLoad"
                    @update:checked-keys="handleCheckedKeysChange"
                />
            </n-layout-content>
        </n-layout>
    </div>
</template>
