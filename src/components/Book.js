function Book(props) {
  return (
    <div className="card-container">
      <img
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
        alt="Books"
        height="200"
      />
      <div className="desc">
        <h2><a href={"/show-book/" + props.id}>{props.title}</a></h2>
        <h3>{props.author}</h3>
        <p>{props.description}</p>
      </div>
      <button 
          type="button" 
          className="remove-card"
          aria-label="Close"
          onClick={() => { props.removeCard(props.id) }}
      >X</button>
    </div>
  );
}

export default Book;