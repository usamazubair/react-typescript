import { useState, useEffect } from "react";

type LoaderProps = {
  status: "loading" | "success" | "error";
};

function Loader({ status }: LoaderProps) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (status === "loading") {
      return setMessage("Loading....");
    }
    if (status === "success") {
      return setMessage("Data Fetched Successfully");
    }
    setMessage("Error fetching data");
  }, [status]);

  return (
    <div>
      <h2>Status: {message}</h2>
    </div>
  );
}

export default Loader;
