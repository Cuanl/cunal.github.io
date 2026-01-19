export function MultipleImgBlock({ imgList = [], isOriginSize = false }) {
  if (!imgList || imgList.length === 0) {
    return null;
  }

  const imageStyle = isOriginSize
    ? { width: 'auto', height: 'auto', maxWidth: '100%' }
    : { width: '100%', height: 'auto' };

  return (
    <div className="multiple-img-block my-6 flex flex-wrap gap-4 justify-center">
      {imgList.map((imgSrc, index) => (
        <img
          key={index}
          src={imgSrc}
          alt={`Image ${index + 1}`}
          className="post-img rounded-md shadow-lg"
          style={imageStyle}
          loading="lazy"
        />
      ))}
    </div>
  );
}
