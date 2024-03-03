<script lang="ts">
import { defineComponent, ref } from 'vue';
import { NInput, NForm } from 'naive-ui';
import ITestStep from '@/interfaces/TestStep'

export default defineComponent({
    name: 'TestStepComponent',
    components: {
        NInput,
        NForm
    },
    props: {
        testData: {
            type: Object as ()=> ITestStep
        },
        editableMode: Boolean
    },
    emits: ['testData'],
    data() {
        return {
            stepForm: ref({
                playbackStep: '',
                exceptedStep: '' 
            })
        }
    },
    watch: {
        stepForm () {
            this.$emit('testData', this.stepForm);
        }
    }
})
</script>

<template>
    <n-form
        :model="stepForm"
    >
        <n-input
            type="textarea"
            size="small"
            placeholder="Playback"
            :default-value="testData ? testData.playback : null"
            :disabled="editableMode"
            v-model:value="stepForm.playbackStep"
            round
        />
        <n-input
            type="textarea"
            size="small"
            placeholder="Excepted Result"
            :default-value="testData ? testData.excepted : null"
            :disabled="editableMode"
            round
        />
    </n-form>
    {{ stepForm.playbackStep }}
</template>