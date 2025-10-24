"use client";

import { CustomCard } from "@/components/Card";
import { CustomForm } from "@/components/Form";
import { CustomInput } from "@/components/Input";
import { Button } from "@/components/ui/button";
import { LoginFormData, loginSchema } from "@/schema/login";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function LoginPage() {
  return (
    <LoginBackground>
      <LoginForm />
    </LoginBackground>
  );
}

function LoginBackground({ children }: { children: ReactNode }) {
  return (
    <div className="pt-24 bg-foreground h-dvh w-screen flex items-start justify-center">
      {children}
    </div>
  );
}

function LoginForm() {
  const router = useRouter();

  function handleSubmit(data: LoginFormData) {
    router.push("/operacional/gestao-de-requisicao");
    console.log(data);
  }

  const CardFooterComponents = (
    <Button form="login-form" type="submit" className="w-full">
      Entrar
    </Button>
  );

  return (
    <CustomCard title="Login" footer={CardFooterComponents}>
      <CustomForm
        schema={loginSchema}
        id="login-form"
        handleSubmit={handleSubmit}
        className="space-y-4"
        fields={[
          {
            fieldtype: "input",
            name: "cpf",
            label: "CPF",
            placeholder: "012.345.678-90",
          },
          {
            fieldtype: "input",
            name: "password",
            label: "Senha",
            type: "password",
          },
        ]}
      >
        <CustomInput name="cpf" label="CPF" placeholder="012.345.678-90" />
        <CustomInput name="password" label="Senha" type="password" />
      </CustomForm>
    </CustomCard>
  );
}
