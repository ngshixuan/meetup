import { MongoClient } from "mongodb";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://shixuan:4I8ccgKvZcPxBGTl@cluster0.yaga4kk.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: 'Meetup inserted!' });
    }
}

export default handler;