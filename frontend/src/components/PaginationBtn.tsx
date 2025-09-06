"use client";

import { useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useId } from "react";

import { usePagination } from "@/hooks/use-pagination";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  paginationItemsToDisplay?: number;
};

export default function PaginationBtn({
  currentPage,
  totalPages,
  paginationItemsToDisplay = 3,
}: PaginationProps) {
  const id = useId();
  const router = useRouter();
  const searchParams = useSearchParams();

  const { pages, showLeftEllipsis, showRightEllipsis } = usePagination({
    currentPage,
    totalPages,
    paginationItemsToDisplay,
  });

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    router.push(`?${params.toString()}`); // updates the URL
  };

  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <Pagination>
          <PaginationContent className="sm:gap-3">
            {/* Prev */}
            <PaginationItem>
              <PaginationLink
                onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
                aria-disabled={currentPage === 1}
                className={`cursor-pointer aria-disabled:pointer-events-none aria-disabled:opacity-50 w-fit bg-accent ring ring-black/20 pr-5 pl-3 h-12`}
              >
                <ChevronLeftIcon size={16} />
                <p>Back</p>
              </PaginationLink>
            </PaginationItem>

            {showLeftEllipsis && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {pages.map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => goToPage(page)}
                  isActive={page === currentPage}
                  className="cursor-pointer"
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            {showRightEllipsis && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {/* Next */}
            <PaginationItem>
              <PaginationLink
                onClick={() =>
                  currentPage < totalPages && goToPage(currentPage + 1)
                }
                aria-disabled={currentPage === totalPages}
                className={`aria-disabled:pointer-events-none aria-disabled:opacity-50 w-fit bg-accent ring ring-black/20 pl-5 pr-3 h-12 cursor-pointer`}
              >
                <span>Next</span>
                <ChevronRightIcon size={16} />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      {/* Jump to page */}
      <div className="flex items-center gap-3 max-sm:hidden">
        <Label htmlFor={id}>Go to page</Label>
        <Input
          id={id}
          type="number"
          min={1}
          max={totalPages}
          defaultValue={String(currentPage)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const value = Number((e.target as HTMLInputElement).value);
              if (value >= 1 && value <= totalPages) {
                goToPage(value);
              }
            }
          }}
          className="w-14"
        />
      </div>
    </div>
  );
}
