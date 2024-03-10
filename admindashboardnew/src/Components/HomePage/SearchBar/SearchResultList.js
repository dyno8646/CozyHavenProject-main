import { SearchResult } from "./SearchResult";
import "./SearchResultList.css";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result) => {
        return <SearchResult result={result} key={result.id} />;
      })}
    </div>
  );
};
