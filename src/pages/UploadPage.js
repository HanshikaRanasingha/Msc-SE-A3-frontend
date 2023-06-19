import React from 'react';
import { Card } from '../components/card';
import { SubmitYourStory } from '../assets';
import Button from '../components/button';

import { ContactUsCard } from '../components/contactUsCard';
import styles from './image.module.scss';

import { Uploader } from 'uploader';
import { UploadButton } from 'react-uploader';
import { useParams } from 'react-router';

const uploader = Uploader({
  apiKey: 'free',
});

const options = { multi: true };

export const UploadPage = () => {
  const params = useParams();
  return (
    <React.Fragment>
      <div>
        <div style={{ marginTop: '64px' }} className="d-flex row">
          <div className="col">
            <h3 className="text-center">Working with our team</h3>
            <p>{`You're not just sharing your words with the world; you're inviting readers into your world. 
            Whether it's a piece of fiction or non-fiction, a personal essay or a news article, your story has 
            the power to inform, inspire, and entertain. We believe that every story deserves to be told, and that's 
            why we've created this platform for writers to share their work with a global audience. So, take a deep breath, 
            hit that submit button, and let your words take flight. We can't wait to see where they'll go.`}</p>
          </div>
          <div className="col">
            <img
              className={styles.poster}
              src={'https://startupsmagazine.co.uk/sites/default/files/2020-11/AdobeStock_291895827ed.jpg'}
            />
          </div>
          <div className="col">
            <li style={{ listStyleType: 'none' }}>
              <h3>1. Create</h3>
              <p>Upload static files to convert them into a suite of engaging assets. Ready to be published.</p>
            </li>
            <li style={{ listStyleType: 'none' }}>
              <h3>2. Publish</h3>
              <p>Publish digital content onto the platform and enrich it with links, videos and more. </p>
            </li>
            <li style={{ listStyleType: 'none' }}>
              <h3>3. Share</h3>
              <p>Share your work across various social media channels quickly, easily and in the right format.</p>
            </li>
            <li style={{ listStyleType: 'none' }}>
              <h3>4. Analyze</h3>
              <p>Track insights like readsand impressions and monetize your publications commission fee.</p>
            </li>
          </div>
        </div>
        <div style={{ marginTop: '64px' }} className="d-flex row">
          <h3 className="text-center">{`Bring your ${params.type} to life`}.</h3>
          <UploadButton
            uploader={uploader}
            options={options}
            onComplete={(files) => alert(files.map((x) => x.fileUrl).join('\n'))}
          >
            {({ onClick }) => (
              <Button label={'Upload'} color={'#ff1493'} buttonClick={onClick}>
                Upload
              </Button>
            )}
          </UploadButton>
        </div>
        <ContactUsCard />
      </div>
    </React.Fragment>
  );
};
