import "../../style/common/Tag.css";

interface TagProps {
  title: string;
  color: string;
}

export default function Tag({ title, color }: TagProps) {
  const componentStyle = {
    backgroundColor: color,
  };

  return (
    <span style={componentStyle} className="tag-container">
      {title}
    </span>
  );
}
