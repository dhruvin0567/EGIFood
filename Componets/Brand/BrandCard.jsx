import Image from "next/image";

export default function BrandCard({ logo, name }) {
  return (
    <div
      className="rounded-md bg-white shadow-sm px-6 py-3 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg focus-within:shadow-lg outline-none"
      role="figure"
      aria-label={`${name} logo`}
      tabIndex={0}
      style={{ padding: "12px 24px" }}
    >
      <div className="w-full aspect-[3/2] max-w-[11rem]">
        <div className="relative h-full w-full mx-auto">
          <Image
            src={logo}
            alt={`${name} logo`}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}
