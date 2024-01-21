import SearchHeader from '@/components/SearchHeader';
import './../globals.css';

export default function layout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
