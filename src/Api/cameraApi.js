import { ApiInstance } from "../Utils/ApiInstance";
import toast from "react-hot-toast";

const getCamerasData = async () => {
  try {
    const response = await ApiInstance.get("/fetch/cameras");
    return response.data;
  } catch (error) {
    console.log("Error fetching camera data:", error);
    toast.error(error.response?.data?.message || "Failed to fetch camera data");
  }
};

const updateCameraStatus = async ({ id, status }) => {
  try {
    const response = await ApiInstance.post("/update/camera/status", {
      id,
      status,
    });
    toast.success(response.message || "Camera status updated successfully");
  } catch (error) {
    console.log("Error updating camera status:", error);
    toast.error(
      error.response?.data?.message || "Failed to update camera status",
    );
  }
};

export { getCamerasData, updateCameraStatus };
