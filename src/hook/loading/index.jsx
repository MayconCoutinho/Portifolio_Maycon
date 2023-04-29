import { useState, useEffect } from "react";

export const Loading = (loadingTrue, loadingFalse) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  const handleLoad = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1 * 1000);
  };

  return loading && loading ? loadingTrue : loadingFalse;
};
