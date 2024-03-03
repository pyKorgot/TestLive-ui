<script lang="ts">
import { defineComponent, ref } from 'vue';
import { NButton, NModal, NInput, NCard } from 'naive-ui';

import TestPlanApi from '@/api/TestPlan';

export default defineComponent ({
    name: 'TestPlanHeaderComponent',
    components: {
        NButton, NModal, NInput, NCard
    },
    props: {
        id_test_plan: Number,
    },
    emits: [
        'reloadTree'
    ],
    data() {
        return {
            showModalAddTestPlan: ref(false),
            showModalAddTestCase: ref(false),
            nameCreateTestCase: 'New Test Case',
            nameCreateTestPlan: 'New Folder'
        }
    },
    methods: {
        onSaveCreateTestCase: async function () {
            const idTestPlan = this.id_test_plan;
            const nameNewTestCase = this.nameCreateTestCase;
            const result = await TestPlanApi.createTestCase(nameNewTestCase, idTestPlan);
            if (result) {
                this.$emit('reloadTree', true);
                this.showModalAddTestCase = false;
            }
        },
        onCloseCreateTestCase: function () {
            this.showModalAddTestCase = false;
        },
        onSaveCreateTestPlan: async function () {
            const idTestPlan = this.id_test_plan;
            const nameNewTestPlan = this.nameCreateTestPlan;
            const result = await TestPlanApi.createTestPlan(nameNewTestPlan, idTestPlan);
            if (result) {
                this.$emit('reloadTree', true);
                this.showModalAddTestPlan = false;
            }

        },
        onCloseCreateTestPlan: function () {
            this.showModalAddTestPlan = false;
        }
    }   
});
</script>

<template>
    <n-button
        style="height: 18px; float: right; margin: 5px;" 
        type="primary"
        @click="showModalAddTestPlan = true"
    >
        Add Folder
    </n-button>
    <n-button
        style="height: 18px; float: right; margin: 5px;"
        type="info"
        :disabled="!id_test_plan"
        @click="showModalAddTestCase = true"
    >
        Add Test Case
    </n-button>

    <n-modal v-model:show="showModalAddTestCase">
        <n-card
            style="width: 600px"
            title="Create Test Case"
            :bordered="false"
            size="huge"
            role="dialog"
            aria-modal="true"
        >
            <n-input
                v-model:value="nameCreateTestCase"
                placeholder="Name Test Case"
                style="width: 500px;"
            />

            <template #footer>
                <n-button 
                    @click="onSaveCreateTestCase"
                >
                    Save
                </n-button>
                <n-button
                    @click="onCloseCreateTestCase"
                >
                    Cancel
                </n-button>
            </template>

        </n-card>
    </n-modal>

    <n-modal v-model:show="showModalAddTestPlan">
        <n-card
            style="width: 600px"
            title="Create Test Plan"
            :bordered="false"
            size="huge"
            role="dialog"
            aria-modal="true"
        >
            <n-input
                v-model:value="nameCreateTestPlan"
                style="width: 500px;"
            />

            <template #footer>
                <n-button
                    @click="onSaveCreateTestPlan"
                >
                    Save
                </n-button>
                <n-button
                    @click="onCloseCreateTestPlan"
                >
                    Cancel
                </n-button>
            </template>

        </n-card>
    </n-modal>
</template>