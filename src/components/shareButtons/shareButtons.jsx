import React from 'react';
import './shareButtons.scss';
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  LinkedinIcon,
  TelegramIcon,
  EmailIcon,
} from 'react-share';

const ShareButtons = () => {
  const url = window.location.href;
  const title = 'Check this product';
  const description = 'This is a great product for you.';
  const imageUrl =
    'https://firebasestorage.googleapis.com/v0/b/lasmartblind.appspot.com/o/logo220x_transparent.png?alt=media&token=e33a53a2-1ba0-49b5-a8ca-6b93bd95f4e5';

  return (
    <div className="d-flex gap-1">
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <PinterestShareButton url={url} title={title} summary={description} media={imageUrl}>
        <PinterestIcon size={32} round />
      </PinterestShareButton>

      <TelegramShareButton url={url} title={title}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>

      <LinkedinShareButton url={url} title={title} summary={description}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <EmailShareButton url={url} subject={title} body={description}>
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  );
};

export default ShareButtons;
