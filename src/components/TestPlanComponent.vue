<template>
    <div class="test_plan_comp">
        <n-tree
            :data="testPlanData"
            label-field="name"
            key-field="key"
            block-line
            cascade
            expand-on-click
            checkable
            :on-load="handeleLoad"
            @update:checked-keys="handleCheckedKeysChange"
        >
        </n-tree>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {NTree, TreeOption} from 'naive-ui';
import axios from 'axios';
import ITestPlan from '@/interfaces/TestPlan';


export default defineComponent({
    name: 'TestPlanComponent',
    components: {
        NTree
    },
    data() {
        return {
            testPlanData: [] as ITestPlan[],
            id_test_case: NaN
        }
    },
    methods: {
        handeleLoad(node: TreeOption) {
            let result: TreeOption[];

            axios.get(`/api/test_plan/?id_parent=${node.id_test_plan}`)
            .then((response) => {
                result = response.data;
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
            if (checkedKeys && checkedKeys.length === 1) {
                let id: string = checkedKeys[0];
                if (id.includes('tc')) {
                    this.id_test_case = Number(id.slice(0, -2));
                    return;
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

<style scoped>
.test_plan_comp {
    font-size: 100px;
}
</style>