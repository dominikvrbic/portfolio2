import { useWindowSize } from "react-use";
import { MediaBreakpoint } from "../types/enums";
export function useBreakpoint() {
  const { width } = useWindowSize();
  const res = {
    sm: width <= MediaBreakpoint.SM,
    md: width > MediaBreakpoint.SM && width <= MediaBreakpoint.MD,
    lg: width > MediaBreakpoint.MD && width <= MediaBreakpoint.LG,
    xl: width > MediaBreakpoint.XL
  };

  return res;
}
