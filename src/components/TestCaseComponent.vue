<template>
    <n-space vertical>
        <n-button 
            v-for="item in getTestCase()"
            :key="item.idTestCase"
            size="small"
        >
            {{ item.name }}
        </n-button>
    </n-space>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NButton, NSpace } from 'naive-ui';

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
            testCaseData: [
                {
                    'idTestCase': 1,
                    'idTestPlan': 1,
                    'name': 'Проерка создания'
                },
                {
                    'idTestCase': 1,
                    'idTestPlan': 1,
                    'name': 'Проверка удаления'
                },
                {
                    'idTestCase': 1,
                    'idTestPlan': 7,
                    'name': 'Cоздание тест шага'
                }
            ]
        }
    },
    methods: {
        getTestCase() {
            this.testCaseData.forEach(el => console.log(el.idTestPlan));
            console.log(this.testCaseData)
            return this.testCaseData.filter((el) => el.idTestPlan === this.idTestPlan);
        }
    }
})

</script>

<style scoped>
</style>