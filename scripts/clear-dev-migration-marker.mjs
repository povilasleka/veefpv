// `payload migrate` blocks on an interactive y/N prompt if it finds a "dev"
// sentinel row (batch = -1) in payload_migrations — left behind whenever
// Payload's local-dev push-mode schema sync runs against this database
// (e.g. NODE_ENV isn't "production" for some invocation). That prompt has no
// non-interactive override, so it hangs forever in CI/Vercel builds. Since
// the sentinel is just bookkeeping (removing it doesn't touch real applied
// migrations or any actual data), clearing it before `payload migrate` runs
// keeps the build from ever getting stuck on it.
import { Client } from "pg";

const client = new Client({ connectionString: process.env.DATABASE_URL });
await client.connect();

try {
  const { rowCount } = await client.query("DELETE FROM payload_migrations WHERE batch = -1");
  if (rowCount > 0) {
    console.log(`Cleared ${rowCount} dev-mode migration marker(s).`);
  }
} catch (err) {
  // 42P01 = undefined_table — payload_migrations doesn't exist yet on a
  // brand-new database, so there's nothing to clear.
  if (err.code !== "42P01") {
    throw err;
  }
} finally {
  await client.end();
}
