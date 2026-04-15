import Link from "next/link";

export default function RootRedirectPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-2xl font-semibold">Redirecting</h1>
      <p className="text-muted-foreground">
        If you are not redirected automatically, open the localized homepage.
      </p>
      <p>
        <Link href="/ru/" className="underline underline-offset-4">
          Go to Russian version
        </Link>
      </p>
      <script
        dangerouslySetInnerHTML={{
          __html: "window.location.replace('/ru/');",
        }}
      />
    </main>
  );
}
