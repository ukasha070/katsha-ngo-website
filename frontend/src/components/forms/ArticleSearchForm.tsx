"use client";

import React, { FormEvent } from "react";
import CustomBtn from "../buttons/CustomBtn";
import { Search } from "lucide-react";
import { useStore } from "@/hooks/useStore";
import { setSearchQs } from "@/store/slice/searchFormSlice";
import { sanitizeSearchQuery } from "@/lib/utils";
import { useRouter } from "next/navigation";

const ArticleSearchForm = () => {
  const router = useRouter();

  const dispatch = useStore().dispatch;
  const state = useStore().searchBoxState;

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    const qs = sanitizeSearchQuery(state.searchQs);
    router.push(`/articles?search=${qs}`);
  }

  return (
    <div>
      <div>
        <form onSubmit={onSubmit} method="get">
          <div className="border-b-2 border-black/30 flex items-center justify-center gap-2">
            <input
              placeholder="Search articles"
              className="form-input h-14 rounded-none border-none font-bold text-3xl"
              value={state.searchQs}
              onChange={(e) => dispatch(setSearchQs(e.target.value))}
            />

            <CustomBtn
              type="submit"
              className="h-14 w-12 flex items-center justify-center"
            >
              <Search />
            </CustomBtn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArticleSearchForm;
