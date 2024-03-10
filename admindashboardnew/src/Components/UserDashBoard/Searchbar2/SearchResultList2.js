import { SearchResult2 } from "../Searchbar2/SearchResult2";
import "./SearchResultList2.css";

export const SearchResultsList2 = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result) => {
        return <SearchResult2 result={result} key={result.id} />;
      })}
    </div>
  );
};
