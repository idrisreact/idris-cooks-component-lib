import React, { ButtonHTMLAttributes } from "react";

export interface MyComponentProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export const Button: React.FC<MyComponentProps> = (props) => {
  const { title } = props;
  return <button {...props}>{title}</button>;
};
