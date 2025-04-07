import PropTypes from "prop-types";

/**
 * HOUSE TAGS COMPONENT
 */
function HouseTags({ tags }) {
  return (
    <div className="house__tags">
      {/* Loop through the tags array and display each tag */}
      {tags.map((tag, index) => (
        <span key={index} className="house__tags-content">
          {tag}
        </span>
      ))}
    </div>
  );
}

HouseTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HouseTags;
