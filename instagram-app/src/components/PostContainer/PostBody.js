import React from "react";
import { TiHeartOutline } from "react-icons/ti";
import { FiMessageCircle } from "react-icons/fi";
import PropTypes from "prop-types";

const PostBody = ({
  thumbnailUrl,
  thumbnailAlt,
  username,
  imageUrl,
  imageAlt,
  likes,
  handleLikePost,
  postId
}) => (
  <div className="post-body">
    <div className="user-info">
      <img src={thumbnailUrl} alt={thumbnailAlt} /> <span>{username}</span>
    </div>
    <div className="post-image">
      <img src={imageUrl} alt={imageAlt} />
    </div>
    <div className="post-info">
      <div className="icons">
        <div className="heart">
          <TiHeartOutline onClick={() => handleLikePost(postId)} />
        </div>
        <div className="comments">
          <FiMessageCircle />
        </div>
      </div>
      <div className="likes">{likes} Likes</div>
    </div>
  </div>
);

PostBody.propTypes = {
  thumbnailUrl: PropTypes.string.isRequired,
  thumbnailAlt: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  likes: PropTypes.string,
  handleLikePost: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
};

export default PostBody;
