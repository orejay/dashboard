import { useMediaQuery } from "@mui/material";

const useIsMobile = () => useMediaQuery("(max-width:450px)");

export default useIsMobile;
