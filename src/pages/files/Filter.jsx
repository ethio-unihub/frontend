import { useEffect, useState } from "react";

export const Filter = ({ url, set, search }) => {
  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  const [load, setLoad] = useState(false);
  const [tags, setTags] = useState([]);

  const getTags = async () => {
    setLoad(true);
    let response = await fetch(`${backendUrl}api/tags/`);
    let data = await response.json();
    setTags(data);
    setLoad(false);
  };

  useEffect(() => {
    getTags();
  }, [backendUrl]);
  const click = (id) => {
    if (url.indexOf(id) !== -1) {
      set(url.filter((a) => a !== id));
    } else {
      set([...url, id]);
    }
  };
  const f =
    "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
  const s =
    "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700";

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    search(null);
    const searchData = e.target.search.value.trim(); // Remove leading and trailing whitespace
    const sanitizedSearch = searchData.replace(/\s+/g, "+"); // Replace spaces with '+'
    // console.log(sanitizedSearch);
    search(sanitizedSearch);
    e.target.search.value = "";
    // Call any other functions if needed
  };

  return (
    <button
      type="button"
      className="max-w-md h-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Filter Files
      </h5>

      <form onSubmit={(e) => handleSubmit(e)}>
        <label
          for="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            name="search"
            autoComplete="off"
          />

          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      {!load ? (
        <div className="m-6 flex flex-wrap gap-2">
          {tags.map((t, index) => (
            <button
              key={index}
              onClick={() => click(t.id)}
              type="button"
              className={url.indexOf(t.id) !== -1 ? f : s}
            >
              {t.name}
            </button>
          ))}
        </div>
      ) : (
        <b className="w-full flex- justify-center items-center dark:text-white m-4 pt-4">
          {" "}
          Getting Tags.....
        </b>
      )}
    </button>
  );
};
