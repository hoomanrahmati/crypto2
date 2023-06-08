import { NextApiRequest, NextApiResponse } from 'next';
import sampleNews from "../components/sampleNews.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // Handle GET request
        // res.status(200).json({ message: 'This is a GET request' });
        res.status(200).json(sampleNews);
    } else if (req.method === 'POST') {
        // Handle POST request
        res.status(200).json({ message: 'This is a POST request' });
    } else {
        // Handle other request methods
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}