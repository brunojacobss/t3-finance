import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignUp appearance={{ baseTheme: dark }} redirectUrl={"/dashboard"} />
    </div>
  );
}
