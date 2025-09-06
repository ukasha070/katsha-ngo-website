import { useQuery } from "@tanstack/react-query";
import { articleType, paginatedResponseType } from "@/lib/types";

interface FetchArticlesParams {
  category?: string | null;
  tags?: string | null;
  success?: boolean;
  page?: number;
  search: string | null;
  is_featured?: boolean | null;
  is_fundraise?: boolean | null;
}

async function fetchArticles(
  params: FetchArticlesParams
): Promise<paginatedResponseType<articleType>> {
  const query = new URLSearchParams();

  if (params.tags) query.set("tags", params.tags);
  if (params.category) query.set("category", params.category);
  if (params.search) query.set("search", String(params.search));
  if (params.success) query.set("success", String(params.success));
  if (params.is_featured) query.set("is_featured", String(params.is_featured));
  if (params.is_fundraise)
    query.set("is_fundraise", String(params.is_fundraise));

  query.set("page", String(params.page ?? 1));

  const res = await fetch(`/api/articles?${query.toString()}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch articles");

  return res.json();
}

async function fetchArticle(slug: string): Promise<articleType> {
  const res = await fetch(`/api/articles/${slug}/`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch articles");

  return res.json();
}

export function useArticles(params: FetchArticlesParams) {
  const { data, error, isLoading, isFetching, isError, refetch, failureCount } =
    useQuery({
      queryKey: ["articles", params],
      queryFn: () => fetchArticles(params),
      staleTime: 1000 * 60,
      retry: 3,
      retryDelay: 1000,
    });

  return {
    data,
    error,
    isLoading,
    isFetching,
    failureCount,
  };
}

export function useArticle(slug: string) {
  return useQuery({
    queryKey: ["article", slug],
    queryFn: () => fetchArticle(slug),
    staleTime: 1000 * 60,
    retry: 3,
    retryDelay: 1000,
  });
}
