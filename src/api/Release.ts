import axios from "axios";

const ReleaseAPI = {
    getRelease: async function () {
        try {
            const result = await axios.get('/api/release');
            return result.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
};

export default ReleaseAPI;