// ===================================================================== Imports
import clsx from 'clsx';
import ReactMarkdown from 'react-markdown'

// ====================================================================== Params
/**
 * @param {Object} props.block
 */
// ====================================================================== Export
export default function TimelineBlock({ block }) {
  return (
    <div className="block timeline-block">

      <h2 className="h2 heading">{block.heading}</h2>

      <div className="timeline">
        {block.timeline && Array.isArray(block.timeline) && (
          block.timeline.map((row) => (
            <div
              key={row.date} 
              className="timeline-row">
              <div className="date-heading">
                {row.date}
              </div>
              <div className="event">
                <ReactMarkdown>
                  {row.event}
                </ReactMarkdown>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}
