import { useUser } from "@clerk/nextjs";
import Head from "next/head";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Spinner } from "~/components/ui/spinner";

const Home = () => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner size={16} />
      </div>
    );
  }

  if (isSignedIn) {
    window.location.href = "/dashboard";
  }

  return (
    <>
      <Head>
        <title>Finance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!isSignedIn && (
        <main className="flex min-h-screen flex-col items-center justify-center bg-background">
          <h1 className="text-4xl font-bold text-foreground sm:text-[4rem]">
            Finance Tracker
          </h1>
          <div className="grid grid-cols-1 gap-4 pt-20">
            <Link href="/sign-in">
              <Button className="w-full">Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button className="w-full text-foreground" variant="outline">
                Sign Up
              </Button>
            </Link>
          </div>
        </main>
      )}
    </>
  );
};

export default Home;
