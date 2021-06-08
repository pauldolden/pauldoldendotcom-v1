import React from "react";

interface PostProps {
  children: React.ReactNode;
}

export const Post = ({ children }: PostProps) => {
  return <div>{children}</div>;
};
