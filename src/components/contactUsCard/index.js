import { Card } from '../card';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export const ContactUsCard = () => {
  return (
    <div style={{ width: '33%' }}>
      <Card
        title1={`Let's `}
        title2={'Contact Us'}
        btnLabel={'Submit'}
        isBoxShadowVisible={false}
        content={`You're not just sharing your words with the world; you're inviting readers into your world. Whether it's a piece of fiction or non-fiction, a personal essay or a news article, your story has the power to inform, inspire, and entertain. We believe that every story deserves to be told.
`}
        bottomContent={
          <div>
            <a href={'https://web.facebook.com/'}>
              <FacebookIcon sx={{ color: '#ff1493', paddingRight: '8px' }} />
            </a>
            <a href={'https://www.instagram.com/'}>
              <InstagramIcon sx={{ color: '#ff1493', paddingRight: '8px' }} />
            </a>
            <a href={'https://www.linkedin.com/'}>
              <LinkedInIcon sx={{ color: '#ff1493', paddingRight: '8px' }} />
            </a>
            <a href={'https://twitter.com/'}>
              <TwitterIcon sx={{ color: '#ff1493', paddingRight: '8px' }} />
            </a>
          </div>
        }
      />
    </div>
  );
};
