import React, { forwardRef } from 'react';

export interface MyComponentProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
type Ref = HTMLButtonElement;
export const Button = forwardRef<Ref, MyComponentProps>((props, ref) => {
  const { children } = props;
  return (
    <button ref={ref} type="button" {...props}>
      {children}
    </button>
  );
});
