import Image from "next/image";

const vars = {
  VERCEL: process.env.VERCEL,
  CI: process.env.CI,
  VERCEL_ENV: process.env.VERCEL_ENV,
  VERCEL_TARGET_ENV: process.env.VERCEL_TARGET_ENV,
  VERCEL_URL: process.env.VERCEL_URL,
  VERCEL_BRANCH_URL: process.env.VERCEL_BRANCH_URL,
  VERCEL_PROJECT_PRODUCTION_URL: process.env.VERCEL_PROJECT_PRODUCTION_URL,
  VERCEL_REGION: process.env.VERCEL_REGION,
  VERCEL_DEPLOYMENT_ID: process.env.VERCEL_DEPLOYMENT_ID,
  VERCEL_PROJECT_ID: process.env.VERCEL_PROJECT_ID,
  VERCEL_SKEW_PROTECTION_ENABLED: process.env.VERCEL_SKEW_PROTECTION_ENABLED,
  VERCEL_AUTOMATION_BYPASS_SECRET: process.env.VERCEL_AUTOMATION_BYPASS_SECRET,
  VERCEL_OIDC_TOKEN: process.env.VERCEL_OIDC_TOKEN,
  VERCEL_GIT_PROVIDER: process.env.VERCEL_GIT_PROVIDER,
  VERCEL_GIT_REPO_SLUG: process.env.VERCEL_GIT_REPO_SLUG,
  VERCEL_GIT_REPO_OWNER: process.env.VERCEL_GIT_REPO_OWNER,
  VERCEL_GIT_REPO_ID: process.env.VERCEL_GIT_REPO_ID,
  VERCEL_GIT_COMMIT_REF: process.env.VERCEL_GIT_COMMIT_REF,
  VERCEL_GIT_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA,
  VERCEL_GIT_COMMIT_MESSAGE: process.env.VERCEL_GIT_COMMIT_MESSAGE,
  VERCEL_GIT_COMMIT_AUTHOR_LOGIN: process.env.VERCEL_GIT_COMMIT_AUTHOR_LOGIN,
  VERCEL_GIT_COMMIT_AUTHOR_NAME: process.env.VERCEL_GIT_COMMIT_AUTHOR_NAME,
  VERCEL_GIT_PREVIOUS_SHA: process.env.VERCEL_GIT_PREVIOUS_SHA,
  VERCEL_GIT_PULL_REQUEST_ID: process.env.VERCEL_GIT_PULL_REQUEST_ID,
};

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "monospace",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <ul style={{ maxWidth: "100%", overflow: "auto", padding: "1rem" }}>
        {Object.entries(vars).map(([key, value]) => (
          <li
            key={key}
            style={{
              listStyleType: "none",
              whiteSpace: "pre",
              padding: "0.125rem",
            }}
          >
            {key}: {value || "(( env vars are set only on Vercel ))"}
          </li>
        ))}
      </ul>
      <style>{`
        li:hover {
          background-color: color-mix(in oklch, var(--foreground) 5%, transparent);
        }
      `}</style>
    </main>
  );
}
