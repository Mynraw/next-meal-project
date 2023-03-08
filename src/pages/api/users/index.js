import dbConnect from "@/lib/dbConnect";
const handler = async(req, res) => {
    await dbConnect();
    res.status(200).json({message: "works?"});

}

export default handler;
