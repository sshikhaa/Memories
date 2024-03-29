import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

// import component
import Post from './Post/Post';
// import styles
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();
  // checking posts exists or not
  if (!posts.length && !isLoading) return 'No posts';
  // jSX code
  return (
    isLoading ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts?.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;


// import React from 'react';
// import { Grid, CircularProgress } from '@material-ui/core';
// import { useSelector } from 'react-redux';

// import Post from './Post/Post';
// import useStyles from './styles';

// const Posts = ({ setCurrentId }) => {
//   const posts = useSelector((state) => state.posts);
//   const classes = useStyles();

//   return (
//     !posts.length ? <CircularProgress /> : (
//       <Grid className={classes.container} container alignItems="stretch" spacing={3}>
//         {posts.map((post) => (
//           <Grid key={post._id} item xs={12} sm={6} md={6}>
//             <Post post={post} setCurrentId={setCurrentId} /> {/*here is an example of prop drilling(setCurrentId) */}
//           </Grid>
//         ))}
//       </Grid>
//     )
//   );
// };

// export default Posts;