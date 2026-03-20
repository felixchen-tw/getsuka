import React, { useState } from 'react';
import { timelineEvents } from '../../data/timelineData';
import './Timeline.scss';

const Timeline: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Decide how many recent events to show by default
  const INITIAL_COUNT = 5;
  const hasMore = timelineEvents.length > INITIAL_COUNT;
  
  // Since timeline seems chronological (oldest to newest),
  // we show the N most recent (the end of the array) when collapsed.
  const visibleEvents = isExpanded 
    ? timelineEvents 
    : timelineEvents.slice(-INITIAL_COUNT);

  return (
    <div className="timeline-wrapper">
      {/* Show more button at the top if there are older events hidden */}
      {hasMore && !isExpanded && (
        <div className="timeline-toggle-wrapper top">
          <button className="timeline-toggle-btn" onClick={() => setIsExpanded(true)}>
            ↑ 顯示更早的紀錄
          </button>
        </div>
      )}

      <div className="timeline-container">
        {visibleEvents.map((event, index) => {
          const isClickable = !!event.url;
          
          // The inner content of the card
          const cardContent = (
            <>
              <div className="event-date">{event.date}</div>
              <div className="event-title">
                {event.title}
                {isClickable && (
                  <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                )}
              </div>
            </>
          );

          return (
            <div className={`timeline-item ${isClickable ? 'is-clickable' : ''}`} key={index}>
              <div className="timeline-node"></div>
              {isClickable ? (
                <a href={event.url} target="_blank" rel="noopener noreferrer" className="timeline-card clickable-card">
                  {cardContent}
                </a>
              ) : (
                <div className="timeline-card">
                  {cardContent}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Show less button at the bottom after expanding */}
      {hasMore && isExpanded && (
        <div className="timeline-toggle-wrapper bottom">
          <button className="timeline-toggle-btn" onClick={() => setIsExpanded(false)}>
            ↓ 收起早期紀錄 
          </button>
        </div>
      )}
    </div>
  );
};

export default Timeline;
