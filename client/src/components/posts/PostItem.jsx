import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { addLike, removeLike, deletePost } from '../../actions/post';
import styled from 'styled-components';

const Post = styled.div`
  .post {
    background-color: var(--card-color);
  }
  .post-buttons {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 700px) {
    .post-buttons {
      flex-direction: column;
    }
    .post-buttons .btn {
      margin-bottom: 1rem;
    }
  }
`;

const PostItem = ({
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <Post className="posts">
      <div className="post bg-dark p-1 my-1">
        <div>
          <Link to={`/profile/${user}`}>
            <img className="round-img" src={avatar} alt="" />
            <h4>{name}</h4>
          </Link>
        </div>
        <div>
          <p className="my-1">{text}</p>
          <p className="post-date">
            Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
          </p>
          {showActions ? (
            <div className="post-buttons">
              <button
                onClick={(_) => dispatch(addLike(_id))}
                type="button"
                className="btn btn-light"
              >
                <i className="fa fa-thumbs-up"></i>
                {likes.length > 0 && <span>{likes.length}</span>}
              </button>
              <button
                onClick={(_) => dispatch(removeLike(_id))}
                type="button"
                className="btn btn-light"
              >
                <i className="fa fa-thumbs-down"></i>
              </button>
              <Link to={`/posts/${_id}`} className="btn btn-primary">
                Discussion{' '}
                {comments.length > 0 && (
                  <span className="comment-count">{comments.length}</span>
                )}
              </Link>
              {!auth.loading && user === auth.user._id && (
                <button
                  onClick={(_) => dispatch(deletePost(_id))}
                  type="button"
                  className="btn btn-danger"
                >
                  <i className="fa fa-times"></i>
                </button>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </Post>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};

PostItem.defaultProps = {
  showActions: true,
};

export default PostItem;
