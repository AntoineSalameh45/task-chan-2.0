// pages/details/index.tsx

import { GetServerSideProps } from 'next';
import axios from 'axios';
import Navbar from '@/components/organisms/navbar';
import VideoDetails from '@/components/organisms/videoDetails';

/**
 * DetailsPage component displays details of a video.
 * It fetches data from the server-side and renders the video details.
 * @param title The title of the video.
 * @param image The URL of the video image.
 */
const DetailsPage: React.FC<{ title: string; image: string }> = ({ title, image }) => {
  return (
    <>
      {/* Render the Navbar component */}
      <Navbar />
      <div className='h-[100vh] w-[100vw] relative flex justify-center self-center flex-wrap overflow-x-hidden'>
        {/* Render the VideoDetails component with title and image */}
        <VideoDetails title={title} image={image} />
      </div>
    </>
  );
};

/**
 * Retrieves video details from the server-side.
 * @returns An object containing the title and image of the video.
 */
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    // Fetch data from the API
    const response = await axios.get('https://dev-api.almashhad.tv/api/videos/detailsElastic/182622880654874');
    const { result } = response.data.data;

    // Ensure that result is not undefined before destructuring its properties
    if (!result || typeof result !== 'object') {
      throw new Error('Invalid response format');
    }

    // Destructure title and image from result
    const { title, image } = result;

    return {
      props: {
        title,
        image,
      },
    };
  } catch (error) {
    console.error('Error fetching video details:', error);
    // Return an empty object or handle the error in a different way
    return {
      props: {}, // Empty object
    };
  }
};

export default DetailsPage;