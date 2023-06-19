import React from 'react';
import { Card } from '../components/card';
import { SubmitYourStory, SubmitAPhoto, SubmitAAdvertisement } from '../assets';

import { ContactUsCard } from '../components/contactUsCard';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div style={{ display: 'inline' }}>
        <div className="d-flex row">
          <div className="col">
            <Card
              title1={'Submit a '}
              title2={'Story'}
              image={SubmitYourStory}
              btnLabel={'Submit'}
              content={`You're not just sharing your words with the world; you're inviting readers into your world. Whether it's a piece of fiction or non-fiction, a personal essay or a news article, your story has the power to inform, inspire, and entertain. We believe that every story deserves to be told, and that's why we've created this platform for writers to share their work with a global audience. 
              So, take a deep breath, hit that submit button, and let your words take flight. We can't wait to see where they'll go.`}
              handleButtonClick={() => navigate('/upload/Story')}
            />
          </div>
          <div className="col">
            <Card
              title1={'Submit a '}
              title2={'Photo'}
              image={SubmitAPhoto}
              btnLabel={'Submit'}
              content={`You're not just sharing an image; it's a chance to showcase your unique perspective and creativity with the world. Our platform is designed to highlight the beauty and diversity of the world through the lens of our community of photographers. So, whether it's a stunning landscape, a candid portrait, or an abstract masterpiece, we invite you to share your vision with us. 
              Let your photograph speak a thousand words and inspire others to see the world through your eyes.`}
              handleButtonClick={() => navigate('/upload/Photo')}
            />
          </div>
          <div className="col">
            <Card
              title1={'Submit a '}
              title2={'Advertisement'}
              image={SubmitAAdvertisement}
              btnLabel={'Submit'}
              content={`It is an opportunity to showcase your product or service to a global audience. Our platform provides a targeted and engaged audience to help you get the most out of your advertising efforts. Our website attracts a diverse group of visitors, from avid shoppers to industry professionals, making it the perfect platform to reach your target market. 
              So, whether you're looking to boost sales or increase brand awareness, we invite you to submit your advertisement and let us help you achieve your business goals.`}
              handleButtonClick={() => navigate('/upload/Advertisement')}
            />
          </div>
        </div>
        <ContactUsCard />
      </div>
    </React.Fragment>
  );
};
