import LoginForm from "@/components/pages/auth/login/LoginForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export const description =
  "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image.";

export const iframeHeight = "800px";

export const containerClassName = "w-full h-full p-4 lg:p-0";

export default function Dashboard() {
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
