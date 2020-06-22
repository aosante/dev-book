import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../actions/post';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import PostForm from './PostForm';
import styled from 'styled-components';

const PostsContainer = styled.div`
  margin: 6.5rem auto 0rem;
`;

const Posts = () => {
  const posts = useSelector((state) => state.post.posts);
  const loading = useSelector((state) => state.post.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    //eslint-disable-next-line
  }, [getPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <PostsContainer>
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        {' '}
        <i className="fa fa-user"></i> Welcome to the comunnity
      </p>
      <PostForm />
      <div className="posts">
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </PostsContainer>
  );
};

export default Posts;
