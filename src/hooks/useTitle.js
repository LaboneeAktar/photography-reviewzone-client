import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Photography ReviewZone`;
  }, [title]);
};
export default useTitle;
