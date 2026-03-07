import styles from './CommentCard.module.css';

const CommentCard = () => {
  const handleEdit = async () => {
    try {
      const response = await fetch(`${baseUrl}/posts/${postId}/comments`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();

      // logout if token expired
      if (response.status === 401) {
        logout();
      }

      if (!response.ok) {
        throw new Error(
          data.status?.[0]?.msg || data?.message || 'Failed to edit comment',
        );
      }

      console.log('Comment successfully edited');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async () => {};

  return <></>;
};

export { CommentCard };
