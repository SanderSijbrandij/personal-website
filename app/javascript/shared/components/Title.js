import React, { PureComponent } from 'react'

class Title extends PureComponent {
  render() {
    const { text, level, type, size } = this.props
    const classes = `${type} is-${size}`

    return (
      <span>
      { level == '1' && <h1 className={classes}>{text}</h1> }
      { level == '2' && <h2 className={classes}>{text}</h2> }
      { level == '3' && <h3 className={classes}>{text}</h3> }
      { level == '4' && <h4 className={classes}>{text}</h4> }
      { level == '5' && <h5 className={classes}>{text}</h5> }
      { level == '6' && <h6 className={classes}>{text}</h6> }
      { level == 'p' && <p className={classes}>{text}</p> }
      </span>
    )
  }
}

export default Title
