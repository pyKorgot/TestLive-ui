<script lang="ts">
import { defineComponent, ref } from 'vue';
import { NSpace, NLayout, NLayoutHeader, NButton, NInput, NInputGroup } from 'naive-ui';

import ITestStep from '@/interfaces/TestStep';
import TestStepApi from '@/api/TestStep'

export default defineComponent({
    name: 'TestCaseComponent',
    components: {
        NSpace,
        NLayout,
        NLayoutHeader,
        NButton,
        NInput,
        NInputGroup,
    },
    props: {
        idTestCase: Number
    },
    data() {
        return {
            testStepData: [] as ITestStep[],
            editableMode: ref(false),
        }
    },
    watch: {
        idTestCase: async function (newVal, odlVal) {
            if (!newVal) {
                this.testStepData = [];
                this.editableMode = false;
                return;
            }
            this.testStepData = await TestStepApi.getTestSteps(newVal);
        }
    },
    methods: {
        onAddTestStepButtonClick() {
            this.testStepData.push({
                id_test_case: this.idTestCase,
            })
        },
        onSaveButtonClick: async function () {
            const newSteps: ITestStep[] = [];
            const updateSteps: ITestStep[] = [];
            this.testStepData.forEach(step => {
                if (step.id_test_step) 
                    updateSteps.push(step);
                else 
                    newSteps.push(step);
            });
            let resultUpdate = false;
            let resultCreate = false;
            if (updateSteps.length)
                resultUpdate = await TestStepApi.updateTestStep(updateSteps);
            if (newSteps)
                resultCreate = await TestStepApi.createTestStep(newSteps);

            if (resultUpdate || resultCreate) {
                this.testStepData = await TestStepApi.getTestSteps(this.idTestCase);
                this.editableMode = false;
            }
            console.log(newSteps);
            console.log(updateSteps);
        },
        onDiscardButtonClick: async function () {
            this.testStepData = await TestStepApi.getTestSteps(this.idTestCase);
            this.editableMode = false;
            
        }
    },
})

</script>

<template>
    <n-layout>
        <n-space vertical>
                <n-layout-header
                    style="height: 30px"
                    bordered
                >
                    <n-button
                        style="height: 18px; float: right; margin: 5px;" 
                        type="primary"
                        @click="editableMode = true"
                        :disabled="!idTestCase"
                        v-show='!editableMode'
                    >
                        Edit
                    </n-button>
                    <n-button
                        style="height: 18px; float: right; margin: 5px;" 
                        type="warning"
                        v-show='editableMode && idTestCase'
                        @click="onDiscardButtonClick"
                    >
                        Discard
                    </n-button>
                    <n-button
                        style="height: 18px; float: right; margin: 5px;" 
                        type="success"
                        v-show='editableMode && idTestCase'
                        @click="onSaveButtonClick"
                    >
                        Save
                    </n-button>
                    <n-button
                        style="height: 18px; float: right; margin: 5px;" 
                        type="info"
                        v-show='editableMode && idTestCase'
                        @click="onAddTestStepButtonClick"
                    >
                        Add Step
                    </n-button>
                </n-layout-header>

                <div
                    v-for="item in testStepData"
                    :key="item.id_test_step"
                >
                    <n-input-group>
                        <span
                            style="font-size: 17px; margin: 0 5px 0 5px;"
                        >
                            {{ item.number_step }}
                        </span>
                        <n-input
                            type="text"
                            size="small"
                            placeholder="Name Step"
                            :disabled="!editableMode"
                            v-model:value="item.name_step"
                        />
                    </n-input-group>

                    <n-input
                        type="textarea"
                        size="small"
                        placeholder="Playback"
                        :disabled="!editableMode"
                        v-model:value="item.playback"
                    />
                    <n-input
                        type="textarea"
                        size="small"
                        placeholder="Excepted Result"
                        :disabled="!editableMode"
                        v-model:value="item.excepted"
                    />

                    <br />
                </div>
            </n-space>
    </n-layout>
</template>

<style scoped>
</style>