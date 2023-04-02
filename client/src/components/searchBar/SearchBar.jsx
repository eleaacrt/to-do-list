export const SearchBar = ({ setTasks }) => {
    return (
        <form className="form--searchbar">
            <div>
                <label htmlFor="search" hidden>Recherche</label>
                <input
                    type="text"
                    id="search"
                    placeholder="Recherche"
                />
            </div>
        </form>
    )
}
