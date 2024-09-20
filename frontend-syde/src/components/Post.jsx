function Post(prop) {
    return (
        <div className="container mt-5 p-4 bg-light rounded shadow-sm">
            <h2 className="text-center mb-4">Posts</h2>
            {prop.posts.length === 0 ? (
                <p className="text-center">No posts available</p>
            ) : (
                <div className="list-group">
                    {prop.posts.map((post) => (
                        <div
                            key={post._id}
                            className="list-group-item mb-3 bg-white rounded shadow-sm"
                        >
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>

                            <div className="container d-flex justify-content-between bg-secondary p-1 rounded bg-opacity-50 ">
                                <div className="align-self-center">
                                    By {post.author.name}
                                </div>

                                <button
                                    className="btn btn-danger btn-sm "
                                    onClick={() => prop.handleDelete(post._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Post;
