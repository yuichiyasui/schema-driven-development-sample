import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center">
      <h1 className="text-3xl mb-10">Schema Driven Development</h1>

      <h2 className="text-xl mb-4">Examples</h2>
      <ul className="flex flex-col gap-y-2">
        <li>
          <Link href="/open-api" className="text-blue-500">
            Open API
          </Link>
        </li>
        <li>
          <Link href="/graphql" className="text-blue-500">
            GraphQL
          </Link>
        </li>
        <li>
          <Link href="/grpc" className="text-blue-500">
            Connect Web
          </Link>
        </li>
      </ul>
    </main>
  );
}
