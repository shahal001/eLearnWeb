interface HeadingAndParagraphProps {
  heading: string;
  paragraph: string;
}

function HeadingAndParagraph({ heading, paragraph }: HeadingAndParagraphProps) {
  return (
    <div className="space-y-2">
      <h1 className="font-bold text-xl font-playfair">{heading}</h1>
      <p className="text-sm">{paragraph}</p>
    </div>
  );
}

export default HeadingAndParagraph;
