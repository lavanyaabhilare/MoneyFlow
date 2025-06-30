import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

const TransactionForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Transaction created successfully");
      reset();
      router.push("/dashboard");
    }
  }, [searchParams, reset, router]);

  return (
    // Rest of the component code
  );
};

export default TransactionForm; 