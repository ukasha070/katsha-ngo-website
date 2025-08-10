"use client";
import React from "react";
/**
 * components
 */
import { X } from "lucide-react";
import { useStore } from "@/hooks/useStore";
import CustomBtn from "../buttons/CustomBtn";
import MaxWidthWrapper from "../MaxWidthWrapper";
import FadeInOutWrapper from "../FadeInOutWrapper";
import { closeSearchForm, setSearchQs } from "@/store/slice/searchFormSlice";

const SearchForm = () => {
  const { state, dispatch } = useStore();

  return (
    <FadeInOutWrapper isVisible={state.searchForm.isOpen}>
      <div>
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-start justify-center z-50">
          <div className="relative w-full">
            <MaxWidthWrapper className="max-w-11/12 lg:max-w-7/12 w-full mt-42">
              <form action="" className="w-full">
                <div className="form-input-container mb-4">
                  <input
                    type="text"
                    name="search"
                    value={state.searchForm.searchQs}
                    onChange={(e) => dispatch(setSearchQs(e.target.value))}
                    className="font-bold text-3xl h-fit border-b-2 oultine-none w-full p-5 outline-none"
                    placeholder="Search for Articles, Blogs ..."
                  />
                </div>
                <CustomBtn
                  type="submit"
                  className="h-fit bg-white p-4 px-6 font-semibold"
                >
                  <span>Search Now</span>
                </CustomBtn>
              </form>
            </MaxWidthWrapper>

            <div className="absolute top-10 right-10">
              <CustomBtn
                type="button"
                onClick={() => dispatch(closeSearchForm())}
                className="p-3 bg-white rounded-md"
              >
                <X />
              </CustomBtn>
            </div>
          </div>
        </div>
      </div>
    </FadeInOutWrapper>
  );
};

export default SearchForm;
