
export function SinglePostImg({ src, altText, desc, isOriginSize = false }) {
  if (!src) {
    return null;
  }

  const imageStyle = isOriginSize
    ? { width: 'auto', height: 'auto', maxWidth: '100%' }
    : { width: '100%', height: 'auto' };

  return (
    <div className="single-img-block my-6 flex flex-col items-center justify-center">
      <img
        src={src}
        alt={altText || desc || 'Post Image'}
        className="post-img rounded-md shadow-lg"
        style={imageStyle}
        loading="lazy"
      />
      {desc && (
        <span className="text-sm text-gray-500 mt-2 italic text-center">
          {desc}
        </span>
      )}
    </div>
  );
}
