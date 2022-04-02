import { Request, Response } from 'express';
import shortUrl from '../models/shortUrl.model';

export async function createShortUrl(req: Request, res: Response) {
  //Get the destination from the request body
  const { destination } = req.body;

  const newUrl = await shortUrl.create({ destination });

  return res.send(newUrl);

  //Create a shortUrl
  //Return  the shortRrl
}

export async function handleRedirect(req: Request, res: Response) {
  const { shortId } = req.params;
  const short = await shortUrl.findOne({ shortId }).lean();
  if (!short) {
    return res.sendStatus(404);
  }
  return res.redirect(short?.destination);
}
