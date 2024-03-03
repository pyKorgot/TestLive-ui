export default interface ITestPlan {
    id_test_plan: number;
    name: string;
    id_parent?: number;
    isLeaf: false;
}
