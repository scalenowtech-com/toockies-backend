import axios from "axios";
import { Response } from "express";
import { YOUTUBE_API_KEY } from "../config";

const latestVideo = async (req: any, res: Response) => {
  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=UCYOfkcNipCJZ1XfRdruzGNQ&type=video&order=date&maxResults=1&part=snippet`
    );

    res.json({
      data: data.items[0],
      error: null,
    });
  } catch (err: any) {
    const error = err.message || err;
    res.status(500).json({
      data: null,
      error,
    });
  }
};

export { latestVideo };
