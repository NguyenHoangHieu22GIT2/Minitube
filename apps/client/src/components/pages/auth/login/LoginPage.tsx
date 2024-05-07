import LoginForm from "@/components/pages/auth/login/LoginForm";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="w-full bg-zinc-800 text-white lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <LoginForm />
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/login-bg.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className=" w-full h-[100vh] object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
