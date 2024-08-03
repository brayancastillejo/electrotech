import { ReactNode } from "react";

interface FormBackgroundProps {
  children: ReactNode;
}

export default function FormBackground({ children }: FormBackgroundProps) {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center bg-form-background bg-center md:bg-contain dark:bg-dark-form-background">
      {children}
    </section>
  );
}
