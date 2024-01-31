<template>
    <n-space vertical>
        <n-button 
            v-for="item in testCaseData"
            :key="item.id_test_case"
            size="small"
        >
            {{ item.name }}
        </n-button>
    </n-space>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NButton, NSpace } from 'naive-ui';
import axios from 'axios';
import ITestCase from '@/interfaces/TestCase'

export default defineComponent({
    name: 'TestCaseComponent',
    components: {
        NButton,
        NSpace,
    },
    props: {
        idTestPlan: Number
    },
    data() {
        return {
            testCaseData: [] as ITestCase[]
        }
    },
    methods: {
    },
    mounted() {
        axios.get(`/api/test_case/?id_test_plan=${this.idTestPlan}`)
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