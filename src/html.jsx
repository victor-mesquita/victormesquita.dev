import React from "react"

class HTML extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta name="description" content="Victor Mesquita - Desenvolvedor fullstack com experiência em .NET, Node, Ruby, React, Vue e Angular." />
          <meta property="og:title" content="Victor Mesquita - Desenvolvedor fullstack" />
          <meta property="og:image" content="https://avatars.githubusercontent.com/u/5200285" />
          <meta property="og:description" content="Desenvolvedor fullstack com experiência em .NET, Node, Ruby, React, Vue e Angular." />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
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
