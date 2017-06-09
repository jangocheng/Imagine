import * as React from 'react'
import * as classnames from 'classnames'

type RadioGroupProps = {
  value: any
  data: any[]
  onChange (value: any): void
  renderItem? (value: any): React.ReactNode
  itemValue? (value: any): any
  className?: string
}

export default class RadioGroup<T> extends React.PureComponent<RadioGroupProps, {}> {
  handleClick = (value: any) => {
    this.props.onChange(value)
  }

  render () {
    const { renderItem, itemValue, className } = this.props

    return (
      <div className={classnames('radio-group', className)}>
        {
          this.props.data.map((item: T) => {
            const value = itemValue(item)

            return (
                <div
                  key={value}
                  className={classnames('radio-item', {
                    '-checked': value === this.props.value,
                  })}
                  onClick={() => this.handleClick(value)}
                >
                {renderItem(item)}
              </div>
            )
          })
        }
      </div>
    )
  }

  static defaultProps = {
    renderItem (item: any) {
      return item
    },

    itemValue (item: any) {
      return item
    }
  }
}