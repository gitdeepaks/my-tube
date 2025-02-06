import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen items-center justify-center flex">
      {children}
    </div>
  );
};

export default layout;
