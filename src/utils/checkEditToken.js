import { useNavigate } from "react-router";

export const checkEditToken = (path) => {
  const navigate = useNavigate();
  if (path === "edit" && sessionStorage.getItem("editToken") !== id) navigate("/notFound");
};
