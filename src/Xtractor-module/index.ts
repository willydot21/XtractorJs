
import { _FEMBED_ } from '../../@types/fembed';
import axios from 'axios';
import { JSDOM } from 'jsdom';
import { XtractorError } from '../../@types/xtractor';
import { getRandomAgent } from './utils';

export default class Xtractor {

  /**
   * @param embedded Embedded is: "fembed", "gcloud", "feurl", "vcdn" or "embedsito" link.
   * @description Gets id from embedded param and make post request to fembed api.
   * @returns "_FEMBED_" object with requested id. See /@types/fembed for object properties.
   */
  static async extractFembed (embedded:string): Promise<_FEMBED_> {
    
    try {
      
      const id_regex = RegExp('(gcloud\.live|fembed\.com|feurl\.com|vcdn\.space|embedsito\.com)/(v|api/source)/([^(?|#)]*)');
  
      const id = embedded.match(id_regex);
      
      if (id) {

        const url = `https://www.fembed.com/api/source/${id[3]}`;

        const post = await axios.post(url, {
          'mode':'no-cors',
          'headers':{
            'User-Agent': getRandomAgent(),
            'Referrer-Policy':'no-referrer'
          }
        });

        const data = await post.data;
        
        return data;
      
      } else { throw Error("Url passed is not valid"); }
  
    } catch (error) { return { success:false, data:(error as Error).message }; }

  }

  static async extractStreamTape (embedded:string): Promise<string | XtractorError> {

    const req = await axios.get(embedded,{url:embedded});

    const body:string = await req.data;

    const doc = new JSDOM(body);

    const { window } = doc;

    const { document } = window;

    if ( body.includes('&token=') ) {

      const regex = atob("JnRva2VuPShbXlxzXSopXCdcKQ==");

      const pattern = new RegExp(regex, 'm');

      const matcher = body.match(pattern);

      if (matcher && matcher.length) {
        
        const match = matcher[1];

        const robotLink = document.querySelector('#robotlink');

        if (robotLink && robotLink.textContent) {

          const removedFakeToken = robotLink.textContent.slice(
            0, robotLink.textContent.lastIndexOf('=')+1
          );

          const url = 'https:/'+removedFakeToken+match;

          return url;

        }// end if textcontent exist.

      }// end if match.

    }// end if token exist.

    return {success:false, data:'No token found'}

  }

}