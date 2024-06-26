"use client";

import { toast } from "sonner";
import { Button } from "./ui/button";

const Test = () => {
  const handleClick = (mode) => {
    mode ? toast.success("Test success") : toast.success("Test success");
  };

  return (
    <Button variant="outline" onClick={() => handleClick(false)}>
      Test Toast
    </Button>
  );
};

export default Test;
