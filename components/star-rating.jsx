const StarRating = ({ rating }) => {
  const starts = new Array(rating).fill(0);

  return (
    <>
      {starts.map((star, ind) => (
        <svg
          key={ind}
          className="w-6 h-6 text-yellow-600"
          fill="#000"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.074 3.299a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.074 3.3c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.074-3.3a1 1 0 00-.364-1.118L2.377 8.726c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.074-3.3z" />
        </svg>
      ))}
    </>
  );
};

export default StarRating;
