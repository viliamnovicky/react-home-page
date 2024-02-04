import styled from "styled-components";

const StyledSearch = styled.div`
    width: 20vw;
    height: 6rem;
    position: relative;
    margin-left: 2.5vw;
`

const Input = styled.input`
    width: calc(100% - 3.5rem);
    height: 4rem;
    font-size: 1.6rem;
    padding: 1rem;
    border-radius: 1rem;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
`

function Search({ query, setQuery, placeholder}) {
    return (
        <StyledSearch>
          <Input
            className="search__input"
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </StyledSearch>
      );
}

export default Search