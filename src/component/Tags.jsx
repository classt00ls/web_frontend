import React from 'react';
import './Tag.css';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const ActiveFilters = ({ filters, onRemoveFilter,  onClearAllFilters }) => {
  const { t } = useTranslation();

  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>{t('filters.active_filters')}: </h3>
      {/* Botón para borrar todo */}
      <button 
        onClick={onClearAllFilters} 
        className="clear-all-button"
        style={{ marginBottom: '10px' }}
      >
        {t('filters.clear_all')}
      </button>
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
const Tags = () => {

  const dispatch = useDispatch();

  const selectedCategories = useSelector(state => state.filters.selectedCategories);

  console.log(selectedCategories)

  const filters = selectedCategories;

  const removeFilter = (filter) => {
    let actualCategories = selectedCategories;
    
          actualCategories = actualCategories.filter(filtered => filtered != filter);
     
        // Actualizamos los filtros
        dispatch({ type: 'CHANGE_FILTERS', selectedCategories: actualCategories });
        dispatch({ type: 'set', refreshTools: true });
  };

  const clearAllFilters = () => {
    
        dispatch({ type: 'CHANGE_FILTERS', selectedCategories: [] });
        dispatch({ type: 'CHANGE_FILTERS', prompt: '' });
        dispatch({ type: 'set', refreshTools: true });
  };

  return (
    <div>
      <ActiveFilters filters={filters} onRemoveFilter={removeFilter} onClearAllFilters={clearAllFilters}  />
    </div>
  );
};

export default Tags;