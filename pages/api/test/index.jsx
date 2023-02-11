import nc from 'next-connect'
import Post from '../../../Modal/postModel'
import db from '../../../utils/dbConnect'

const handler = nc();

handler.get(async (req, res) =>
{
  await db.connect();
  try
  {
    const posts = await Post.find().populate('author').sort({createdAt:-1})

    res.status(200).json({
      posts
    })
  } catch (err)
  {
    res.status(404).json({
      success: false,
      message: err.message,
    });
  }
  await db.disconnect();

})
export default handler
