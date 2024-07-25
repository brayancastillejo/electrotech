import { ReactNode } from "react";

interface FormBackgroundProps {
  children: ReactNode;
}

export default function FormBackground({ children }: FormBackgroundProps) {
  return (
    <section className="bg-form-background flex min-h-screen w-full flex-col items-center justify-center bg-center md:bg-contain">
      {children}
    </section>
  );
}
