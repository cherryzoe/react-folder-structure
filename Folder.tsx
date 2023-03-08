import React, { Fragment, useState } from 'react';
import Icon from './Icon';

const Folder = ({ files }) => {
  
  const [expanded, setExpanded] = useState(false);
  
  const getFolderExtenion = (fileName) => {
    let arr = fileName.split('.');
    return arr[arr.length - 1].toLowerCase();
  };
  
  return (
    <div>
      <div className={`hover-styles`}
      style={divStyle}
      onClick={() => setExpanded(!expanded)}>
        {!files.isFolder && (
          <Icon
          name={getFolderExtenion(files.name)}
          style={{ height: '12px', marginRight: '4px', flexShrink: 0 }}
          />
          )}
        {files.isFolder && (
          <Fragment>
            {expanded ? 
              <CaretIcon name='caretDown' />
              :
                <CaretIcon name="caretRight" />
              }
          </Fragment>
        )}
        {files.name}
      </div>
      {/* recursive check following folders */}
      {files.isFolder && 
        expanded && 
        files.children.map((file, idx) => (
          <div style={{ paddingLeft: '20px' }}>
          <Folder files={file} />
        </div>))}
    </div>
  );
};

const divStyle = {
  color: '#fff',
  cursor: 'pointer',
  padding: '2px 4px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '5px',
};
const CaretIcon = ({name}) => {
  return <Icon name= {name} 
       style={{height: '12px', marginRight: '4px', flexShrink: 0}}
    /> 
}

export default Folder;
