import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center">
      <h1 className="text-3xl mb-10">Schema Driven Development</h1>

      <h2 className="text-xl mb-4">Examples</h2>
      <ul>
        <li>
          <Link href="/graphql" className="text-blue-700">
            GraphQL
          </Link>
        </li>
      </ul>
    </main>
  );
}
