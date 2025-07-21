interface productTagProps {
  tag: string;
}

function productTag({ tag }: productTagProps) {
  return (
    <span className="text-xs font-medium text-blue-500 bg-blue-100 px-2 py-0.5 rounded inline-block mt-2">
      {tag}
    </span>
  );
}

export default productTag;
