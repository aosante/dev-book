import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../actions/post';
import styled from 'styled-components';

const Form = styled.form`
  textarea {
    display: block;
    padding: 0.4rem;
    font-size: 1.2rem;
    border: 0.5px solid var(--dark-color);
    background-color: var(--title-color);
    color: var(--light-color);
  }
`;

const PostForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Say Something...</h3>
      </div>
      <Form
        className="form my-1"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addPost({ text }));
          setText('');
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </Form>
    </div>
  );
};

export default PostForm;
