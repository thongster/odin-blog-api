const PostCard = ({ post, comments }) => {
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.content}</p>
      <p>{post.createdAt}</p>
      <p>{post.updatedAt}</p>
      <p>{post.published}</p>
      {comments.map((comment) => (
        <div>
          <p>{comment.text}</p>
          <p>{comment.createdAt}</p>
          <p>{comment.updatedAt}</p>
        </div>
      ))}
    </div>
  );
};

export { PostCard };
