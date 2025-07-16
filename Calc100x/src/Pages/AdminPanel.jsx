import React, { useState, useMemo } from 'react';
import './AdminPanel.css';
import calculators from '../Data/CalculatorsData.json';

const AdminPanel = () => {
  const [calcList, setCalcList] = useState(calculators);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this calculator?');
    if (confirmDelete) {
      setCalcList(calcList.filter(calc => calc.id !== id));
    }
  };

  const categories = useMemo(() => {
    const unique = Array.from(new Set(calculators.map(calc => calc.category)));
    return ['All', ...unique];
  }, []);

  const filteredCalculators = useMemo(() => {
    return calcList.filter(calc => {
      const matchesSearch = calc.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'All' || calc.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category, calcList]);

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <div className="right-controls">
          <div className="total-count">Total: {calcList.length}</div>
          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="category-select"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <button className="add-btn">+ Add New Calculator</button>
        </div>
      </div>

      <table className="admin-table">
        <thead >
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCalculators.map(calc => (
            <tr key={calc.id}>
              <td>{calc.id}</td>
              <td>{calc.name}</td>
              <td>{calc.category}</td>
              <td className="actions">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(calc.id)}>Delete</button>
              </td>
            </tr>
          ))}
          {filteredCalculators.length === 0 && (
            <tr>
              <td colSpan="4" className="no-results">No calculators found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
