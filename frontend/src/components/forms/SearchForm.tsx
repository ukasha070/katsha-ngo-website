"use client";
import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
// components
import CustomBtn from "../buttons/CustomBtn";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { closeSearchForm, setSearchQs } from "@/store/slice/searchFormSlice";
import { closeSidebar } from "@/store/slice/appSidebarSlice";

// utils
import { sanitizeSearchQuery } from "@/lib/utils";

// hooks
import { useStore } from "@/hooks/useStore";

const SearchForm = () => {
  const state = useStore().searchBoxState;
  const dispatch = useStore().dispatch;

  const router = useRouter();

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    const qs = sanitizeSearchQuery(state.searchQs);
    router.push(`/articles?search=${qs}`);
    dispatch(closeSearchForm());
    dispatch(closeSidebar());
  }

  return (
    state.isOpen && (
      <div>
        <div
          className="overlay-container"
          onClick={() => dispatch(closeSearchForm())}
        />
        <MaxWidthWrapper className="fixed max-w-xl top-4/12 md:top-1/2 left-1/2 -translate-1/2 z-60 w-full">
          <form onSubmit={onSubmit} className="w-full">
            <div className="form-input-container mb-4 bg-accent">
              <input
                type="text"
                name="search"
                value={state.searchQs}
                onChange={(e) => dispatch(setSearchQs(e.target.value))}
                className="font-bold text-3xl h-fit border-b-2 oultine-none w-full p-5 outline-none"
                placeholder="Search for Articles, Blogs ..."
              />
            </div>
            <CustomBtn
              type="submit"
              className="h-fit bg-yellow-500 w-full sm:w-fit p-4 px-6 font-semibold"
            >
              <span>Search Now</span>
            </CustomBtn>
          </form>
        </MaxWidthWrapper>
      </div>
    )
  );
};

export default SearchForm;
