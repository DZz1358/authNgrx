import { Injectable } from '@angular/core';

@Injectable()
export class PersistanceService {

  setToken(key: string, data: any){
    try{
      localStorage.setItem(key, JSON.stringify(data))
    } catch (e){
      console.error('error saving to localStorage', e)
    }
  }

  getToken(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key)!)
    } catch (e) {
      console.error('error getting')
      return null
    }
  }

}
