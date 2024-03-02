import axios from "axios"
import ITestStep from "@/interfaces/TestStep";

const TestStepApi = {
    getTestSteps: async function (idTestPlan?: number) {
        if (!idTestPlan)
            return;

        try {
            const result = await axios.get(`/api/test_step/?id_test_case=${idTestPlan}`)
            return result.data;
        } catch (error) {
            console.log(error);
        }
    },
    createTestStep: async function (newTestStep: ITestStep[]){
        try {
            const result = await axios({
                method: 'post',
                url: '/api/test_step',
                data: newTestStep
            });
            return result.data;
        } catch(error) {
            console.log(error);
        }
    },
    updateTestStep: async function (testStep: ITestStep[]) {
        try {
            const result = await axios({
                method: 'put',
                url: '/api/test_step',
                data: testStep
            });
            return result.data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default TestStepApi;
