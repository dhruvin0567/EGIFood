import Image from "next/image";

const ProductCard = ({ imageSrc, title, price, oldPrice, badgeText }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {badgeText ? (
        <span className="absolute left-2 top-2 z-10 rounded-md bg-red-500 px-2 py-1 text-xs font-medium text-white">
          {badgeText}
        </span>
      ) : null}
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          priority={false}
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="line-clamp-2 min-h-[3rem] text-sm font-semibold text-gray-900">
          {title}
        </h3>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-emerald-600">${price}</span>
            {oldPrice ? (
              <span className="text-sm text-gray-400 line-through">
                ${oldPrice}
              </span>
            ) : null}
          </div>
          <button
            className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
