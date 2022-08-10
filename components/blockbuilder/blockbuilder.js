// ===================================================================== Imports
import React from 'react';
import clsx from 'clsx';

import TextBlock from '../textblock/textblock.js';
import ImageBlock from '../imageblock/imageblock.js';

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
    return columns.hasOwnProperty(`push_${direction}`) ? columns[`push_${direction}`] : undefined;
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

  getComponent(type, block) {
    switch (type) {
      case 'text_block':
        return <TextBlock block={block} />;
      case 'image_block':
        return <ImageBlock block={block} />;
      case 'custom':
        return this.getCustomComponents(block.customizations);
      default:
        return false;
    }
  }

  // ====================================================== Template [Sectional]
  render(props) {
    const section = this.props.section
    console.log(section.block)
    return (
      <section className="sectional" id={section.id}>
        <div className={clsx(this.getGridClasses(section.grid))}>
          {section.block.map((column, i) => (
            <>
              {Object.entries(column).map(([key, value], j) => (
                <>
                  {key !== '__typename' &&
                    <div
                      key={`column-${i}-${key}`}
                      className={clsx(value.cols.num)}
                      data-push-left={this.getColumnPushCount(value.cols, 'left')}
                      data-push-right={this.getColumnPushCount(value.cols, 'right')}>
                      <div
                        data-block-id={`column-${j + 1}`}
                        className="column-content">
                        {this.getComponent(key, value)}
                      </div>
                    </div>
                  }
                </>
              ))}
            </>
          ))}
        </div>
      </section>
    );
  }
}

export default BlockBuilder;
