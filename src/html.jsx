import React from "react"


class HTML extends React.Component {
  render() {
    return (
      <html lang="en" className="min-height-full">
        <head>
          <meta name="description" content="" />
          <meta property="og:title" content="" />
          <meta property="og:image" content="" />
          <meta property="og:description" content="" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body className="min-height-full" {...this.props.bodyAttributes}>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

export default HTML
