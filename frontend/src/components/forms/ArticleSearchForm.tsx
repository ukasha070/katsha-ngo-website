"use client";

import React, { FormEvent, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// utils
import { useStore } from "@/hooks/useStore";
import { sanitizeSearchQuery } from "@/lib/utils";

// components
import { Search } from "lucide-react";
import CustomBtn from "../buttons/CustomBtn";
import { setSearchQs } from "@/store/slice/searchFormSlice";

const ArticleSearchForm = () => {
  const params = useSearchParams();
  const searchParam = params.get("search");

  const router = useRouter();

  const dispatch = useStore().dispatch;
  const state = useStore().searchBoxState;

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    const qs = sanitizeSearchQuery(state.searchQs);
    if (qs) {
      router.push(`/articles?search=${qs}`);
    }
  }

  useEffect(() => {
    if (searchParam) dispatch(setSearchQs(String(searchParam)));
  }, []);

  return (
    state.searchQs && (
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
    )
  );
};

export default ArticleSearchForm;
