import React, { useState, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = ({ 
  placeholder = "Search...", 
  onSearch, 
  onFilter,
  filters = [],
  suggestions = [],
  className = "",
  debounceMs = 300
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({});
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onSearch) {
        onSearch(searchTerm, selectedFilters);
      }
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedFilters, onSearch, debounceMs]);

  // Filter suggestions based on search term
  useEffect(() => {
    if (searchTerm && suggestions.length > 0) {
      const filtered = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 5);
      setFilteredSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setShowSuggestions(false);
      setFilteredSuggestions([]);
    }
  }, [searchTerm, suggestions]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (filterKey, value) => {
    const newFilters = {
      ...selectedFilters,
      [filterKey]: value
    };
    setSelectedFilters(newFilters);
    if (onFilter) {
      onFilter(newFilters);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSelectedFilters({});
    if (onSearch) {
      onSearch('', {});
    }
  };

  const clearFilter = (filterKey) => {
    const newFilters = { ...selectedFilters };
    delete newFilters[filterKey];
    setSelectedFilters(newFilters);
    if (onFilter) {
      onFilter(newFilters);
    }
  };

  return (
    <div className={`modern-search-container ${className}`}>
      {/* Main Search Bar */}
      <div className="search-bar-wrapper">
        <div className="search-input-container">
          <div className="search-icon">
            <i className="fas fa-search"></i>
          </div>
          <input
            type="text"
            className="modern-search-input"
            placeholder={placeholder}
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={() => setShowSuggestions(filteredSuggestions.length > 0)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          />
          {searchTerm && (
            <button className="clear-search-btn" onClick={clearSearch}>
              <i className="fas fa-times"></i>
            </button>
          )}
          {filters.length > 0 && (
            <button 
              className={`advanced-filter-btn ${isAdvancedOpen ? 'active' : ''}`}
              onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
            >
              <i className="fas fa-filter"></i>
              <span>Filters</span>
            </button>
          )}
        </div>

        {/* Search Suggestions */}
        {showSuggestions && (
          <div className="search-suggestions">
            {filteredSuggestions.map((suggestion, index) => (
              <div
                key={index}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <i className="fas fa-search suggestion-icon"></i>
                <span>{suggestion}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Advanced Filters */}
      {isAdvancedOpen && filters.length > 0 && (
        <div className="advanced-filters">
          <div className="filters-header">
            <h6><i className="fas fa-sliders-h"></i> Advanced Filters</h6>
            <button 
              className="close-filters-btn"
              onClick={() => setIsAdvancedOpen(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div className="filters-grid">
            {filters.map((filter) => (
              <div key={filter.key} className="filter-group">
                <label className="filter-label">
                  <i className={`fas ${filter.icon || 'fa-tag'}`}></i>
                  {filter.label}
                </label>
                
                {filter.type === 'select' ? (
                  <select
                    className="filter-select"
                    value={selectedFilters[filter.key] || ''}
                    onChange={(e) => handleFilterChange(filter.key, e.target.value)}
                  >
                    <option value="">All {filter.label}</option>
                    {filter.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : filter.type === 'range' ? (
                  <div className="range-container">
                    <input
                      type="range"
                      className="filter-range"
                      min={filter.min || 0}
                      max={filter.max || 100}
                      value={selectedFilters[filter.key] || filter.min || 0}
                      onChange={(e) => handleFilterChange(filter.key, e.target.value)}
                    />
                    <span className="range-value">{selectedFilters[filter.key] || filter.min || 0}</span>
                  </div>
                ) : (
                  <input
                    type="text"
                    className="filter-input"
                    placeholder={`Enter ${filter.label.toLowerCase()}`}
                    value={selectedFilters[filter.key] || ''}
                    onChange={(e) => handleFilterChange(filter.key, e.target.value)}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Active Filters Display */}
      {Object.keys(selectedFilters).length > 0 && (
        <div className="active-filters">
          <span className="active-filters-label">Active Filters:</span>
          {Object.entries(selectedFilters).map(([key, value]) => {
            if (!value) return null;
            const filter = filters.find(f => f.key === key);
            return (
              <div key={key} className="active-filter-tag">
                <span>{filter?.label || key}: {value}</span>
                <button onClick={() => clearFilter(key)}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
            );
          })}
          <button className="clear-all-filters" onClick={clearSearch}>
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;