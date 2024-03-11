import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// Define the type for the response data
type VideoDetails = {
    title: string;
    image: string;
};

// Define the type for the error response
type ErrorResponse = {
    error: string;
};

// Define the API handler function
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<VideoDetails | ErrorResponse>
) {
    try {
        // Retrieve the API URL from environment variables
        const apiUrl = process.env.API_URL; 
        if (!apiUrl) {
            throw new Error('API URL not defined in environment variables');
        }

        // Make a GET request to the API endpoint
        const response = await axios.get(apiUrl);

        // Extract the necessary data from the response
        const { result } = response.data.data;
        const { title, image } = result;

        // Ensure that the title and image are present in the response
        if (!title || !image) {
            throw new Error('Invalid response format');
        }

        // Send the extracted data in the response
        res.status(200).json({ title, image });
    } catch (error) {
        // Handle errors by logging and sending an error response
        console.error('Error fetching video details:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}