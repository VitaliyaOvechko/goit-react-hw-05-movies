import { getSearchMovie } from 'components/Api';
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setsearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  // console.log(query);

  useEffect(() => {
    if (query === '') {
      setMovies([]);
    }
    const getSearch = async () => {
      try {
        const results = await getSearchMovie(query);
        setMovies([...results.data.results]);
        console.log(results);
      } catch (error) {
        console.log(error);
      }
    };
    getSearch();
  }, [query]);

  const updateQueryString = evt => {
    const searchMovieName = evt.target.value;
    if (searchMovieName === '') {
      return setsearchParams({});
    }
    setsearchParams({ query: searchMovieName });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    updateQueryString();
  };

  return (
    <div>
      <input type="text" value={query} onChange={updateQueryString}></input>
      <button type="submit" onSubmit={handleSubmit}>
        Search
      </button>
      <div>
        <ul>
          {movies.map(({ id, title, poster_path }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <img
                  src={
                    // poster_path ?
                    `https://image.tmdb.org/t/p/w300/${poster_path}`
                    // : defaultPosterImage
                  }
                  alt={title}
                  width={240}
                ></img>
                <p>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Movies;

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const username = searchParams.get('username');

//   useEffect(() => {
//     // Тут виконуємо асинхронну операцію,
//     // наприклад HTTP-запит за інформацією про користувача
//     if (username === '') return;

//     async function fetchUser() {
//       const user = await FakeAPI.getUser(username);
//       setUser(user);
//     }

//     fetchUser();
//   }, [username]);

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     setSearchParams({ username: form.elements.username.value });
//     form.reset();
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="username" />
//         <button type="submit">Search</button>
//       </form>
//       {user && <UserInfo user={user} />}
//     </>
//   );
// };
