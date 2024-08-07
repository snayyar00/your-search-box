/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */
import Head from "next/head";
// import { metadata } from "next-sanity/studio/metadata"
import { metadata } from "next-sanity/studio";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-static";

export { metadata } from "next-sanity/studio";

export default function StudioPage() {
  return (
    <>
      {" "}
      <Head>
        {Object.entries(metadata).map(([key, value]) => (
          <meta key={key} name={key} content={value as string | undefined} />
        ))}
      </Head>
      <NextStudio config={config} />
    </>
  );
}
