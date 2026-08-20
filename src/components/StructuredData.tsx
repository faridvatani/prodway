import { softwareApplicationJsonLd } from "@/src/lib/structured-data";

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(softwareApplicationJsonLd).replace(
          /</g,
          "\\u003c",
        ),
      }}
    />
  );
}
