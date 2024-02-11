"use client";

import { Command, CommandInput, CommandList } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { MovieCommandItems } from "./movie-command-items";

export type MovieSearchBarProps = {
  className?: string;
};

export function MovieSearchBar({ className }: MovieSearchBarProps) {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  return (
    <Command
      className={cn("rounded-lg border shadow-md", className)}
      shouldFilter={false}
    >
      <CommandInput
        placeholder="Search a movie..."
        value={search}
        onValueChange={setSearch}
      />
      <CommandList>
        <MovieCommandItems movieQuery={debouncedSearch} />
      </CommandList>
    </Command>
  );
}
