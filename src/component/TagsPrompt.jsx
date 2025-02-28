import React from 'react';
import './Tag.css';
import { useDispatch, useSelector } from 'react-redux';

const ActiveFilters = ({ filters, onRemoveFilter }) => {

  return (
    <div style={{ marginTop: '20px' }}>
      
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filters.map((filter, index) => (
          <div
            key={index}
            style={{
              background: '#e0e0e0',
              borderRadius: '15px',
              padding: '5px 10px',
              margin: '5px',
              display: 'flex',
              alignItems: 'center',
              fontSize: '14px',
            }}
          >
            <span>{filter}</span>
            <button
              onClick={() => onRemoveFilter(filter)}
              style={{
                marginLeft: '10px',
                backgroundColor: 'transparent',
                border: 'none',
                color: 'red',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente principal de la interfaz
// Componente principal de la interfaz
const TagsPrompt = () => {

  const dispatch = useDispatch();

  const prompt = useSelector(state => state.filters.prompt);

  let filters = prompt ? [prompt] : [];

  const removeFilter = (filter) => {
     
        // Actualizamos los filtros
        dispatch({ type: 'CHANGE_FILTERS', prompt: '' });
        dispatch({ type: 'set', refreshTools: true });
  };

  return (
    <div>
      <ActiveFilters filters={filters} onRemoveFilter={removeFilter}  />
    </div>
  );
};

export default TagsPrompt;