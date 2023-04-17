import React from 'react'
import styles from './styles.module.css'
import classnames from 'classnames'

export const Button = ({ type = 'default', text, ...props }) => {
  const buttonClass = classnames({
    [styles.button]: true,
    [styles.primary]: type === 'primary',
    [styles.default]: type === 'default',
    [styles.dashed]: type === 'dashed',
    [styles.text]: type === 'text',
    [styles.link]: type === 'link'
  })
  return (
    <button className={buttonClass} {...props}>
      {text}
    </button>
  )
}
