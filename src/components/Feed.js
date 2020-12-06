import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles } from "@material-ui/core";
import Post from "./Post";
import NoResources from './NoResources';

const Feed = (props) => {
  const { posts, showFavorites, toggleFavorites, favorites } = props;
  const classes = useFeedStyles();
  const postsToShow = showFavorites
    ? posts.filter((post) => favorites.includes(post.id))
    : posts;

  return (
      <Container className={classes.feed} maxWidth="md">
      {postsToShow.length > 0 ? (
        postsToShow.map((post) => (
          <Post
            key={post.id}
            post={post}
            favorite={favorites.includes(post.id)}
            toggleFavorites={toggleFavorites}
          />
        ))
      ) : (
        <NoResources message='Brak wpisów' />
      )}
    </Container>
  )
};

const useFeedStyles = makeStyles(() =>
  createStyles({
    feed: {
      marginTop: 100,
    },
  })
);

export default Feed;
