import React from 'react'
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
  FacebookShareButton,
  // FacebookShareCount,
  EmailShareButton,
  EmailIcon,
} from 'react-share'
// import styles from "./ShareButtons.module.scss"

// FIXME: https://github.com/nfl/react-helmet/issues/26
// https://medium.com/bleeding-edge/it-can-work-easily-serverless-react-and-web-crawlers-7e2afbc39590#24fc

const ShareButtons = ({ url, size, options }) => {
  return (
    <>
      { /* <div className={ styles.fbShare }>
          <iframe
            className="fb"
            src={ `https://www.facebook.com/plugins/share_button.php?href=${encodeURIComponent(url)}&layout=button_count&size=small&mobile_iframe=true&appId=1463514533710955&width=89&height=20` }
          />
        </div> */ }
      <FacebookShareButton url={ url }>
        <FacebookIcon size={ size } round />
      </FacebookShareButton>
      {/* <FacebookShareCount url={ url } className={ styles.shareCount }>
         {count => count}
       </FacebookShareCount> */}
 
      <TwitterShareButton url={ url } title={ options.twitterTitle }>
        <TwitterIcon size={ size } round />
      </TwitterShareButton>

      <EmailShareButton
        url={ url }
        subject={ options.emailSubject }
        body={ options.emailBody }
      >
        <EmailIcon size={ size } round />
      </EmailShareButton>
    </>
  )
}

export default ShareButtons


