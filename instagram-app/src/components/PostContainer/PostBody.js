import React from "react";
import { TiHeartOutline } from "react-icons/ti";
import { FiMessageCircle } from "react-icons/fi";
import PropTypes from "prop-types";
import { Username } from "../../Styles/Reusables/Username";
import styled from "styled-components";

const UserThumbnail = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  padding: 1rem;
`;

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
      <UserThumbnail src={thumbnailUrl} alt={thumbnailAlt} />
      <Username fontWeight="bold">{username}</Username>
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
  thumbnailAlt: PropTypes.string,
  username: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  likes: PropTypes.number,
  handleLikePost: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired
};

export default PostBody;
