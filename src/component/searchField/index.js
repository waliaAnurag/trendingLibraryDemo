'use client';

import { useState } from 'react';
import InputBoxStyles from '../styles/inputFieldStyles.module.css'
const SearchField = () => {
  const [search, setSearch] = useState('');

  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className={InputBoxStyles.inputStyles}
      placeholder="Search..."
    />
  );
};

export default SearchField;
