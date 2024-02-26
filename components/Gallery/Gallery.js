import Image from "next/image";

export const Gallery = ({ columns, cropImages, items }) => {
  let maxHeight = 0;
  let maxWidth = 0;

  console.log(cropImages);

  if (cropImages) {
    items.forEach((item) => {
      if (item.attributes.width > maxWidth) {
        maxWidth = item.attributes.width;
      }
      if (item.attributes.height > maxHeight) {
        maxHeight = item.attributes.height;
      }
    });
  }

  const columnWidth = 100 / columns;

  return (
    <div className="flex flex-wrap max-w-5xl mx-auto">
      {items.map((item) => (
        <div
          key={item.id}
          style={{ width: `${columnWidth}%` }}
          className="p-5 flex-grow"
        >
          <Image
            src={item.attributes.url}
            width={maxWidth || item.attributes.width}
            height={maxHeight || item.attributes.height}
            alt={item.attributes.alt}
            style={{ objectFit: "cover", height: "100%" }}
            loader={({ src }) => `${src}?url=http://localhost:10010`}
          />
        </div>
      ))}
    </div>
  );
};
