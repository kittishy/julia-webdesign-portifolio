
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface SearchBarProps {
  className?: string;
  onSearch?: (query: string) => void;
}

const SearchBar = ({ className, onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const { language } = useLanguage();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };
  
  return (
    <form onSubmit={handleSearch} className={cn("relative", className)}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={language === 'pt' ? "Buscar..." : "Search..."}
        className="search-bar pr-10"
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
        aria-label={language === 'pt' ? "Buscar" : "Search"}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      </button>
    </form>
  );
};

export default SearchBar;
