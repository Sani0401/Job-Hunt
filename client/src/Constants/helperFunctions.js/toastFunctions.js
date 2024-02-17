import { ToastContainer, toast } from "react-toastify";

const logged = () =>
toast.success("Logged in Sucessfully!", {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
});
const Failed = () =>
toast.error("Error,Check Email Password!", {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
 
});

export  {logged, Failed};