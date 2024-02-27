<script lang="ts">
import { defineComponent, ref } from 'vue';
import { NInput } from 'naive-ui';
import ITestCase from '@/interfaces/TestCase'

export default defineComponent({
    name: 'TestStepComponent',
    components: {
        NInput
    },
    props: {
        testData: {
            type: Object as ()=> ITestCase
        }
    }
})
</script>

<template>
    <n-input
        type="textarea"
        size="small"
        :default-value="testData ? testData.playback : null"
        disabled=true
        round
    />
    <n-input
        type="textarea"
        size="small"
        :default-value="testData ? testData.excepted : null"
        disabled=true
        round
    />
</template>