import React from "react";
import { useField } from "formik";

const TagInput = ({ ...props }) => {
  const [field, meta] = useField(props.field.name);
  const [tags, setTags] = React.useState<string[]>([]);
  const [newTag, setNewTag] = React.useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (newTag.length > 0) {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          {...field}
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
        />
        {meta.touched && meta.error ? (
          <div>{meta.error}</div>
        ) : null}
        <button type="submit">Add Tag</button>
      </form>
      <div>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
