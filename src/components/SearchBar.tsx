
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface Props {
  className?: string;
  onSearch?: (query: string) => void;
}

const SearchBar = ({ className, onSearch }: Props) => {
  const [query, setQuery] = useState('');
  const { language } = useLanguage();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && query.trim()) {
      onSearch(query.trim());
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className={cn(className)}>
      <input
        type="text"
        className="search-bar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={language === 'pt' ? 'Pesquisar por tradições...' : 'Search traditions...'}
        aria-label={language === 'pt' ? 'Pesquisar' : 'Search'}
      />
    </form>
  );
};

export default SearchBar;
