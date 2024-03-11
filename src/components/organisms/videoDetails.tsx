/**
 * VideoDetails Component
 * 
 * This component displays details of a video, including its title and image.
 */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

interface VideoDetailsProps {
  title: string;
  image: string;
}

const VideoDetails: React.FC = () => {
  const [videoDetails, setVideoDetails] = useState<VideoDetailsProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await axios.get('/api/videoDetails');
        setVideoDetails(response.data);
      } catch (error) {
        console.error('Error fetching video details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchVideoDetails();
  }, []);

  if (loading) {
    // Loading state
    return (
      <div className="flex justify-center items-center h-full">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-violet-900"></div>
      </div>
    );
  }

  if (!videoDetails) {
    // Error state if videoDetails is null
    return (
      <div className='mt-[100px] w-fit h-fit p-12 bg-[#ffffff69] border-2 border-red-500'>
        Error fetching data
      </div>
    );
  }

  return (
    // Render video details
    <div className='mt-[100px] w-fit h-fit p-12 bg-[#ffffff69] border-2 border-violet-900'>
      {videoDetails.image && (
        // Display image if available
        <div style={{ border: '2px solid rgb(76, 29, 149)' }}>
          <Image
            src={videoDetails.image}
            alt={videoDetails.title}
            width={400}
            height={300}
          />
        </div>
      )}
      <h2 className='text-violet-900'>Title: {videoDetails.title}</h2>
    </div>
  );
};

export default VideoDetails;