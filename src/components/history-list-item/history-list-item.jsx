import React from 'react';
import './history-list-item.css';

const HistoryListItem = ({ item, ...props }) => (
  <li className="history-list-item" {...props}>
    {item.name}
  </li>
);

export default HistoryListItem;