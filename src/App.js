import { useState, useEffect } from "react";
import Header from "./components/Header";
import Feed from "./components/Feed";
import axios from "axios";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const App = () => {
  const POSTS_URL = "http://localhost:3001/posts";
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(10);
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#1f1f1f",
      },
      secondary: {
        main: "#d20404",
      },
    },
  });
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [showFavorites, setShowFavorites] = useState(false);
  const addToFavorites = (id) => {
    setFavorites([...favorites, id]);
  };
  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((element) => element !== id));
  };
  const toggleFavorites = (id) => {
    favorites.includes(id) ? removeFromFavorites(id) : addToFavorites(id);
  }
  const handleFavoritesClick = () => {
    setShowFavorites(true);
  };
  const loadMore =  () => {
     if (
       window.innerHeight + document.documentElement.scrollTop ===
       document.scrollingElement.scrollHeight
     ) {
      setLimit((limit) => (limit+10))
     }
  };

  useEffect(() => {
    const getPosts = async () => {
      const url =
        query === ""
          ? `${POSTS_URL}?_limit=${limit}`
          : `${POSTS_URL}?q=${query}`;
      const res = await axios.get(url);
      if (res.status === 200) {
        res.data.forEach((post, index) => {
          post.id = index;
        
        })
        setPosts(res.data);
        
      };
    };
    getPosts();
  }, [query, limit]);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  useEffect(() => {
    window.addEventListener("scroll", loadMore);
    return () => window.removeEventListener("scroll", loadMore);
  },[])

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App" >
        <Header
          handleFavoritesClick={handleFavoritesClick}
          setQuery={setQuery}
          favoritesCount={favorites.length}
        /> 
        <Feed posts={posts} showFavorites={showFavorites} favorites={favorites} toggleFavorites={toggleFavorites} />
      </div>
    </MuiThemeProvider>
  );
};;

export default App;
