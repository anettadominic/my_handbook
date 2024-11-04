import React, { Fragment } from "react";

import getYouTubeId from "get-youtube-id";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import SyntaxHighlighter from "react-syntax-highlighter";
import PortableText from "@sanity/block-content-to-react";

import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { urlFor } from "../../sanity";

const Image = ({ node }) => {
  const imageUrl = urlFor(node.asset).url();
  return <img src={imageUrl} alt={node.alt} />;
};

const Code = ({ node }) => {
  const { code, language } = node;

  if (!code) {
    return null;
  }

  return (
    <Fragment>
      <SyntaxHighlighter
        showLineNumbers
        showInlineLineNumbers
        style={dark}
        language={language || "text"}
      >
        {code}
      </SyntaxHighlighter>
    </Fragment>
  );
};

const YouTube = ({ node }) => {
  const { url } = node;
  const id = getYouTubeId(url);
  return <LiteYouTubeEmbed id={id}  aspectHeight={5} aspectWidth={12} />;

};

const PortableTextComponent = ({ content }) => {
  const serializers = {
    types: {
      image: Image,
      code: Code,
      youtube: YouTube,
    },
    marks: {
      link: (props) => {
        if (props.mark.href && props.mark.href.startsWith("http")) {
          return (
            <a href={props.mark.href} target="_blank" rel="noopener noreferrer">
              {props.children}
            </a>
          );
        }
        return <a href={props.mark.href}>{props.children}</a>;
      },
    },
  };

  return (
    <Fragment>
      <PortableText blocks={content} serializers={serializers} />
    </Fragment>
  );
};

export default PortableTextComponent;
