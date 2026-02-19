import axios from "axios";

export const ApiInstance = axios.create({
  baseURL: "https://hiring-assignment.wobot.ai/api/v1",
  headers: {
    Authorization: `Bearer 4ApVMIn5sTxeW7GQ5VWeWiy`,
  },
});
