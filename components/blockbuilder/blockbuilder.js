// ===================================================================== Imports
import React from 'react';
import clsx from 'clsx';
import CloneDeep from 'lodash/cloneDeep'

import TextBlock from '../textblock/textblock.js';
import ImageBlock from '../imageblock/imageblock.js';
import VideoBlock from '../videoblock/videoblock.js';

// ====================================================================== Export
class BlockBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.getGridClasses = this.getGridClasses.bind(this);
    this.getColumnPushCount = this.getColumnPushCount.bind(this);
    this.getCustomComponents = this.getCustomComponents.bind(this);
    this.getComponent = this.getComponent.bind(this);
  }

  // ================================================================= Functions
  getGridClasses(sectionGrid) {
    const classList = ['grid'];
    if (Array.isArray(sectionGrid) && sectionGrid.length > 0) {
      sectionGrid.forEach(className => classList.push(`-${className}`));
    }
    return classList.join('');
  }

  getColumnPushCount(columns, direction) {
    if (columns) {
      return columns.hasOwnProperty(`push_${direction}`) ? columns[`push_${direction}`] : undefined;
    }
    return false
  }

  getCustomComponents(customizations) {
    if (Array.isArray(customizations)) {
      return (
        <>
          {customizations.map((block, index) => (
            <React.Fragment key={`${block.type}_${index}`}>{this.getComponent(block)}</React.Fragment>
          ))}
        </>
      );
    }
    return false;
  }

  getComponent(typename, block) {
    if (typename && block) {
      const type = typename.toLowerCase()
      if (type.endsWith('text_block')) {
        return <TextBlock block={block} />;
      } else if (type.endsWith('image_block')) {
        return <ImageBlock block={block} />;
      } else if (type.endsWith('video_block')) {
        return <VideoBlock videolist={block} />;
      }  else if (type.endsWith('custom')) {
        return this.getCustomComponents(block.customizations);
      }
    }
    return false
  }

  // ====================================================== Template [Sectional]
  render(props) {
    const section = this.props.section
    const blocks = Array.isArray(section.block) ? section.block : []

    return (
      <section className="sectional" id={section.id}>
        <div className={clsx(this.getGridClasses(section.grid))}>
          {blocks.map((block, i) => (
            <div
              key={`column-${i}`}
              className={clsx(block?.cols?.num)}
              data-push-left={this.getColumnPushCount(block?.cols, 'left')}
              data-push-right={this.getColumnPushCount(block?.cols, 'right')}>
              <div
                data-block-id={`block-${i + 1}`}
                className="column-content">
                {this.getComponent(block?.__typename, block)}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default BlockBuilder;
