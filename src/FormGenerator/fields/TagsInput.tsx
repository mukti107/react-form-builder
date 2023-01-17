import React, { KeyboardEventHandler, useCallback } from "react";
import { useField } from "formik";

const TagInput = ({ ...props }) => {
  const [field, meta] = useField(props.field.name);
  const [tags, setTags] = React.useState<string[]>([]);
  const [newTag, setNewTag] = React.useState("");

  const addTag = useCallback(() => {
    if (newTag.length > 0 && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
        setNewTag("");
    }
    }, [newTag, tags]);

  const handleKeyPress:  KeyboardEventHandler<HTMLInputElement> = useCallback((event) => {
    if(event.key === 'Enter'){
        addTag();
    }
  }, [addTag]);

  return (
    <div>
        <label>{props.label}</label>
        <div className="input-group">
            <input        
                className="form-control"
                type="text"
                {...field}
                value={newTag}
                onKeyDown={handleKeyPress}
                onChange={(e) => setNewTag(e.target.value)}
            />
            {meta.touched && meta.error ? (
            <div>{meta.error}</div>
            ) : null}
            <div className="input-group-append">
                <button onClick={addTag} className="btn btn-outline-secondary" type="button">Add</button>
            </div>
        </div>
      <div className="list-group">
        {tags.map((tag) => (
            <div className="list-group-item">
                <span key={tag}>{tag}</span>
                <button type="button" className="close" aria-label="Close" onClick={() => setTags(tags.filter((t) => t !== tag))}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
