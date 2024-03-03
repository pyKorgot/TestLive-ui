import axios from "axios";
import { TreeOption } from 'naive-ui';

const TestPlanApi = {
    firstLoadTree: async function () {
        try {
            const result = await axios.get('/api/test_plan');
            return result.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    branchLoadTree: async function (id_test_plan: any) {
        const result: TreeOption[] = [];
        try {
            const test_plans = await axios.get(`/api/test_plan/?id_parent=${id_test_plan}`);
            const test_cases = await axios.get(`/api/test_case/?id_test_plan=${id_test_plan}`)
            result.push(...test_plans.data);
            result.push(...test_cases.data);
            return result;
        } catch (error) {
            console.log(error);
        }

        return result;
    },

    createTestPlan: async function (name: string, idParent?: number) {
        try {
            const result = await axios({
                method: 'post',
                url: '/api/test_plan',
                data: {
                    name: name,
                    id_parent: idParent
                }
            })
            return result.data;
        } catch (error) {
            console.log(error);
        }
    },

    createTestCase: async function (name: string, id_test_plan?: number) {
        try {
            const result = await axios({
                method: 'post',
                url: '/api/test_case/',
                data: {
                    id_test_plan: id_test_plan,
                    name: name
                }
            });
            return result.data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default TestPlanApi;

