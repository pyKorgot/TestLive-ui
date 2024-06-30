import axios from "axios";

const OrganizationAPI = {
    getOrganization: async function () {
        try {
            const result = await axios.get('/api/organization');
            return result.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
};

export default OrganizationAPI;
