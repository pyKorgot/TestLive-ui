<template>
    <div class="test_plan_comp">
        <n-layout position="absolute">
            <n-layout-header
                style="height: 30px"
                bordered
            >
                <n-button
                    style="height: 18px; float: right; margin: 5px;" 
                    type="primary"
                >
                    Add Folder
                </n-button>
                <n-button
                    style="height: 18px; float: right; margin: 5px;"
                    type="info"
                    :disabled="!id_test_plan"
                >
                    Add Test Case
                </n-button>
            </n-layout-header>

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
            >
            </n-tree>
        </n-layout>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {NTree, TreeOption, NLayoutHeader, NButton} from 'naive-ui';
import axios from 'axios';
import ITestPlan from '@/interfaces/TestPlan';


export default defineComponent({
    name: 'TestPlanComponent',
    components: {
        NTree,
        NLayoutHeader,
        NButton
    },
    data() {
        return {
            testPlanData: [] as ITestPlan[],
            id_test_plan: NaN as number
        }
    },
    emits: ['id_test_case'],
    methods: {
        handeleLoad(node: TreeOption) {
            let result: TreeOption[] = [];

            axios.get(`/api/test_plan/?id_parent=${node.id_test_plan}`)
            .then((response) => {
                result.push(...response.data);
            }).catch(error => {
                console.log(error);
            })

            axios.get(`/api/test_case/?id_test_plan=${node.id_test_plan}`)
            .then((response) => {
                result.push(...response.data);
            }).catch(error => {
                console.log(error);
            })

            return new Promise<void>((resolve) => {
                setTimeout(() => {
                    node.children = result;
                    resolve();
                }, 1000)
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
    mounted() {
        axios.get('/api/test_plan')
        .then((response) => {
            this.testPlanData = response.data;
            console.log(this.testPlanData);
        }).catch(error => {
            console.log(error)
        })
    },
})
</script>
