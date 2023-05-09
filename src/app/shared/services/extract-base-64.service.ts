import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ExtractBase64Service {

  constructor(private sanitizer: DomSanitizer) { }

  extractBase64 = async ($event:any)=> new Promise((resolve, reject) => {
    try{
      const unsafeImg = window.URL.createObjectURL($event);
      const img = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base:null
        });
      };
    }catch(e){
    }
  })
}