import { SearchbarStyle } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarStyle>
      <header className="Searchbar">
        <form
          className="form"
          onSubmit={event => {
            event.preventDefault();
            const queryValue = event.target.elements.query.value.trim();
            if (queryValue) {
              onSubmit(queryValue);
              event.target.reset();
            } else {
              alert('введіть запит');
            }
          }}
        >
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
          />
        </form>
      </header>
    </SearchbarStyle>
  );
};
