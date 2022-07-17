
import { getRandomAgent } from './utils';
import { _FEMBED_ } from '../../@types/fembed';
import axios from 'axios';
import { exec } from 'child_process';

export default class Xtractor {

  /**
   * @param embeded Embeded is: "fembed", "gcloud", "feurl", "vcdn" or "embedsito" link.
   * @description Gets id from embeded param and make post request to fembed api.
   * @returns "_FEMBED_" object with requested id. See /@types/fembed for object properties.
   */
  static async extractFembed (embeded:string): Promise<_FEMBED_> {
    
    try {

      const id_regex = RegExp('(gcloud\.live|fembed\.com|feurl\.com|vcdn\.space|embedsito\.com)/(v|api/source)/([^(?|#)]*)');
  
      const id = embeded.match(id_regex);
      
      if (id) {

        const url = `https://www.fembed.com/api/source/${id[3]}`;
      
        // const post = await axios.post(url,{ 
        //   method:'post', 
        //   headers:{
        //     accept: '*/*',
        //     'set-fetch-mode':'cors',
        //     'x-requested-with':'XMLHttpRequest',
        //     'user-agent':getRandomAgent()
        //   }, 
        // });
        // const json = post.data;

        const data: _FEMBED_ = await new Promise((resolve, reject) => {

          exec('curl -X POST -H "Content-Type: application/json" '+url, (error, stdout, stderr) => {

            if (stdout) resolve(JSON.parse(stdout));

            if (error) reject({ success:false, data:error });
            
          });

        });
        
        console.log(data);
        
        return data;
      
      } else { throw Error("Url passed is not valid"); }
  
    } catch (error) { return { success:false, data:(error as Error).message }; }

  }

}