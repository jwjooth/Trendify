import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/app/shared/ui/select";
import { Input } from "@/app/shared/ui/input";
import type { ProductCategory, SortOption } from "@/app/service/type";

interface CategoryOption {
  value: string;
  label: string;
}

interface ProductFiltersProps {
  search: string;
  setSearch: (value: string) => void;
  category: ProductCategory | undefined;
  setCategory: (value: ProductCategory | undefined) => void;
  sort: SortOption;
  setSort: (value: SortOption) => void;
  categories: CategoryOption[];
  categoriesLoading: boolean;
}

export const ProductFilters = ({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
  categories,
  categoriesLoading,
}: ProductFiltersProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Input
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Select
        value={category || "all"}
        onValueChange={(v) =>
          setCategory(v === "all" ? undefined : (v as ProductCategory))
        }
      >
        <SelectTrigger className="w-full md:w-48">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>

          {categoriesLoading ? (
            <SelectItem value="loading" disabled>
              Loading...
            </SelectItem>
          ) : (
            categories.map((c) => (
              <SelectItem key={c.value} value={c.value}>
                {c.label}
              </SelectItem>
            ))
          )}
        </SelectContent>
      </Select>

      <Select
        value={sort}
        onValueChange={(v) => setSort(v as SortOption)}
      >
        <SelectTrigger className="w-full md:w-48">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">Newest</SelectItem>
          <SelectItem value="price-asc">Price ↑</SelectItem>
          <SelectItem value="price-desc">Price ↓</SelectItem>
          <SelectItem value="rating">Rating</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
