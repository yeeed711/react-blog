import { useEffect, useState } from "react";
import axios from "axios";

export default function useAxios() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get("./data.json").then((respones) => {
      setData(respones.data);
    });
  }, []);

  return { data };
}
