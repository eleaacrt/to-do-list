// https://blog.logrocket.com/create-search-bar-react-from-scratch/
// -> search bar en react

export const SearchBar = ({ setSearch }) => {
    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    };

    return (
        <form className="form--searchbar">
            <div>
                <label htmlFor="search" hidden>Recherche</label>
                <input
                    type="text"
                    id="search"
                    placeholder="Recherche"
                    onChange={handleSearchChange}
                />
            </div>
        </form>
    );
}

