
import axios from 'axios';
import { _FEMBED_ } from '../../@types/fembed';

export default class Xtractor {

  static async extractFembed (embeded:string): Promise<_FEMBED_> {
    
    try {

      const id_regex = RegExp('(gcloud\.live|fembed\.com|feurl\.com|vcdn\.space|embedsito\.com)/(v|api/source)/([^(?|#)]*)');
  
      const id = embeded.match(id_regex);
      
      if (id) {
  
        const url = `https://www.fembed.com/api/source/${id[3]}`;
        
        const post = await axios(url, { method:'post' });
    
        const json = await post.data;

        return json;
      
      } else { throw Error("Url passed is not valid"); }
  
    } catch (error) { return { success:false, data:(error as Error).message }; }

  }

}