import React, { useEffect } from 'react';
import { HistoryListItem, SlideButton } from '../'
import './history-list.css';

const HistoryList = ({ bgColor, listItems, onUpdatePage, onItemClick, pageIndex, maxPageIndex }) => {

  useEffect(() => {
    onUpdatePage(pageIndex)
  }, [listItems]);

  const onPrevPageClick = () =>
    pageIndex > 0 && onUpdatePage(pageIndex - 1);

  const onNextPageClick = () =>
    pageIndex < maxPageIndex && onUpdatePage(pageIndex + 1);

  return (
    <div
      className={`history-list 
        ${bgColor ? 'history-list__' + bgColor : ''}
      `}
    >
      <SlideButton
        key='sl-btn-left'
        duration='left'
        size='small'
        color='blue'
        onClick={onPrevPageClick}
      />

      <ul className="history-list-content">
        {
          listItems.length === 0 ? 'Загрузка...' : listItems.map(item =>
            <HistoryListItem item={item} key={item.id} onClick={() => onItemClick(item.id)} />)
        }
      </ul>

      <SlideButton
        key='sl-btn-right'
        duration='right'
        size='small'
        color='blue'
        onClick={onNextPageClick}
      />
    </div>
  );

}

export default HistoryList;