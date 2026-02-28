import toast from "react-hot-toast";

export const errorToast = (message: string) => {
    toast.error(message, {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };