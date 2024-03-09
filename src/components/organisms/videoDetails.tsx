// components/VideoDetails.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

const VideoDetails: React.FC = () => {
    const [videoDetails, setVideoDetails] = useState<{ title: string; image: string } | null>(null);

    useEffect(() => {
        const fetchVideoDetails = async () => {
            try {
                const response = await axios.get('/api/videoDetails');
                setVideoDetails(response.data);
            } catch (error) {
                console.error('Error fetching video details:', error);
            }
        };
        fetchVideoDetails();
    }, []);

    if (!videoDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{videoDetails.title}</h2>
            {videoDetails.image && (
                <Image
                    src={videoDetails.image}
                    alt={videoDetails.title}
                    width={100}
                    height={100}
                />
            )}
        </div>
    );
};

export default VideoDetails;
