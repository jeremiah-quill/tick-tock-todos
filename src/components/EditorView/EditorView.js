import React from 'react';

const EditorView = ({ handleSave, closeEditor }) => {
  return (
    <div>
      <div className="border-2 p-2">
        <h1>test title</h1>
        <p>test description</p>
        <div className="flex">
          <div className="ml-auto">flag</div>
        </div>
      </div>
      <button onClick={handleSave}>save</button>
      <button onClick={closeEditor}>cancel</button>
    </div>
  );
};

export default EditorView;
