import { NextApiRequest, NextApiResponse } from 'next';
import MongoClient from "mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { firstname, lastname, username, email, password } = req.body;

      // Connect to MongoDB
      const uri = 'mongodb+srv://adminhrm:amdin1232antu@cluster0.kxborby.mongodb.net/';
      const client = new MongoClient(uri);
      await client.connect();

      // Access the database and collection
      const db = client.db('your-database-name');
      const collection = db.collection('users');

      // Create a new user document
      const user = {
        firstname,
        lastname,
        username,
        email,
        password,
      };

      // Insert the user document into the collection
      await collection.insertOne(user);

      // Close the MongoDB connection
      await client.close();

      // Return a response
      res.status(200).json({ message: 'User signed up successfully' });
    } catch (error: any) {
      console.error('Sign Up failed', error.message);
      res.status(500).json({ message: 'Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}