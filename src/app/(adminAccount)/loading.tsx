import React from "react";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="min-w-full h-screen flex justify-center items-center">
      <span className="loading loading-spinner text-primary"></span>
    </div>
  );
}
