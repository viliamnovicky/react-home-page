import "../css/Search.css";

export default function Search({ query, setQuery, placeholder }) {
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
