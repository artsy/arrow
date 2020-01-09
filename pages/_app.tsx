import App from 'next/app'
import React from 'react'
import { Theme } from '@artsy/palette'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Theme>
        <Component {...pageProps} />
      </Theme>
    )
  }
}
