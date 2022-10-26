import { Box } from "@chakra-ui/react";
import { INewsItem } from "../../types";

type props = {
  newsId: number;
  headline: INewsItem;
};

const Headline = ({ newsId, headline }: props) => {
  let headlineNo = 1;

  const getWebsiteDomain = (url: string) => {
    if (url) {
      let domain = url.split("/");
      return `(${domain[2]})`;
    }
    return "";
  };
  return (
    <Box className="headline pointer">
      {}
      <Box className="headline-no">
        <p>{newsId}.</p>
        <Box className="grayarrow" title="upvote"></Box>
      </Box>
      <Box className="headline-content">
        <Box className="headline-section">
          <a
            href={headline.url}
            className="main-headline link-style"
            target="_blank"
            rel="noreferrer"
          >
            {headline.title}
          </a>
          <p className="headline-website">{getWebsiteDomain(headline.url)}</p>
        </Box>
        <Box className="headline-comments">
          <p>{headline.score} points</p>
          <p>by {headline.by} </p>
          <p>58 minutes ago</p>
          <p>| hide</p>
          <p>| {headline.descendants} comments</p>
        </Box>
      </Box>
    </Box>
  );
};

export default Headline;
