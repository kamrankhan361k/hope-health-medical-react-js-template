const SidebarSearch = () => {
    return (
        <div className="widget-search-box">
            <form method="post">
                <input
                    name="search"
                    type="text"
                    id="search"
                    placeholder="Type &amp; Hit Enter..."
                />
            </form>
        </div>
    );
};

export default SidebarSearch;
