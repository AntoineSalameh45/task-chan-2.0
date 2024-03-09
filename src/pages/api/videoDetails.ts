import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type VideoDetails = {
    title: string;
    image: string;
};

type ErrorResponse = {
    error: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<VideoDetails | ErrorResponse>
) {
    try {
        const response = await axios.get('https://dev-api.almashhad.tv/api/videos/detailsElastic/182622880654874');
        const { title, image } = response.data;
        res.status(200).json({ title, image });
    } catch (error) {
        console.error('Error fetching video details:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
