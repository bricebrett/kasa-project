function HouseTags({ tags }) {
  return (
    <div className="house__tags">
      {tags.map((tag, index) => (
        <span key={index} className="house__tags-content">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default HouseTags;
