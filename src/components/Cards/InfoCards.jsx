const InfoCard = ({ image, title, description, buttonText, onButtonClick }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <div className="w-full h-48 flex items-center justify-center">
          {image ? (
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="Card Image"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">No Image Available</span>
            </div>
          )}
        </div>
        <div className="px-6 py-4">
          {title && <div className="font-bold text-xl mb-2">{title}</div>}
          {description && <p className="text-gray-700 text-base">{description}</p>}
        </div>
        {buttonText && onButtonClick && (
          <div className="px-6 pt-4 pb-2">
            <button
              className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-600"
              onClick={onButtonClick}
            >
              {buttonText}
            </button>
          </div>
        )}
      </div>
    );
  };
  
  export default InfoCard;
  