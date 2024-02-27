<template>

    <n-space vertical>

            <div
                v-for="item in testCaseData"
                :key="item.id_test_case"
            >
                <TestStepComponent
                    :testData="item"
                />
                <br />
            </div>
    </n-space>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NSpace } from 'naive-ui';
import axios from 'axios';
import ITestCase from '@/interfaces/TestCase'
import TestStepComponent from './TestStepComponent.vue';

export default defineComponent({
    name: 'TestCaseComponent',
    components: {
        NSpace,
        TestStepComponent,
    },
    props: {
        idTestCase: Number
    },
    data() {
        return {
            testCaseData: [] as ITestCase[]
        }
    },
    watch: {
        idTestCase(newVal, odlVal) {
            if (!newVal) {
                this.testCaseData = [];
                return;
            }

            axios.get(`/api/test_step/?id_test_case=${newVal}`)
            .then((response) => {
                this.testCaseData = response.data;
                console.log(this.testCaseData);
            }).catch(error => {
                console.log(error)
            })
        }
    },
    methods: {
    },
    mounted() {
        if (!this.idTestCase) {
            this.testCaseData = [];
            return;
        }

        axios.get(`/api/test_case/?id_test_plan=${this.idTestCase}`)
        .then((response) => {
            this.testCaseData = response.data;
            console.log(this.testCaseData);
        }).catch(error => {
            console.log(error)
        })
    },
})

</script>

<style scoped>
</style>