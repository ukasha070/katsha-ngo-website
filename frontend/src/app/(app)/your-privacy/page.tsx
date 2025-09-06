// src/app/(app)/your-privacy/page.tsx
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { privacyPolicyType } from "@/lib/types";
import React from "react";

const PrivacyPolicyPage = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/legal/privacy-policy`,
    {
      next: { revalidate: 0 }, // 12 hours todo
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch privacy policy");
  }

  const data: privacyPolicyType = await res.json();

  return (
    <MaxWidthWrapper className="py-12">
      <div className="max-w-4xl px-2 py-6">
        <h1 className="text-4xl font-black mb-10">
          Privacy <span className="text-yellow-600">Policy</span>
        </h1>

        <div className="flex flex-col gap-1 mb-5">
          <div>
            <b>Effective Date:</b> {data.created_at}
          </div>
          <div>
            <b>Last Updated:</b> {data.updated_at}
          </div>
        </div>

        <div
          id="article-wrapper"
          dangerouslySetInnerHTML={{
            __html: data?.content || "No Privacy Policy available.",
          }}
        />
      </div>
    </MaxWidthWrapper>
  );
};

export default PrivacyPolicyPage;
