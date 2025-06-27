interface InfiniteScrollProps {
  logos: { src: string; alt: string }[];
}

function InfiniteScroll({ logos }: InfiniteScrollProps) {
  return (
    <div className="w-full overflow-hidden relative">
      <div
        className="flex gap-8 items-center"
        style={{
          animation: "scroll-left 50s linear infinite",
          whiteSpace: "nowrap",
          minWidth: "200%",
        }}
      >
        {/* Logos duplicated for seamless scroll */}
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-10 md:h-12 lg:h-14 gap-10 max-w-[120px] object-contain inline-block"
          />
        ))}
      </div>

      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
}

export default InfiniteScroll;
