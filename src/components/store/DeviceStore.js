import { makeAutoObservable } from 'mobx'
export default class DeviceStore {
   constructor() {
      this._types = [
         { id: 1, name: 'Refrigerator' },
         { id: 2, name: 'Smartphone' },
         { id: 3, name: 'TV' },
         { id: 4, name: 'PC' },
         { id: 5, name: 'Games' },

      ]
      this._brands = [
         { id: 1, name: 'Samsung' },
         { id: 2, name: 'Apple' },
         { id: 3, name: 'Lenovo' },
         { id: 4, name: 'Asus' },
      ]
      this._devices = [
         { id: 1, name: 'iphon 12 pro', price: 212112, reting: 5, img: '' },
         { id: 2, name: 'iphon 12 pro', price: 212112, reting: 5, img: '' },
         { id: 3, name: 'iphon 12 pro', price: 212112, reting: 5, img: '' },
         { id: 4, name: 'iphon 12 pro', price: 212112, reting: 5, img: '' },
         { id: 5, name: 'iphon 12 pro', price: 212112, reting: 5, img: '' },
      ]
      this._selectedType = {}
      this._selectedBrand = {}
      makeAutoObservable(this)
   }
   setTypes(types) {
      this._types = types
   }
   setBrands(brands) {
      this._brands = brands
   }
   setDevices(devices) {
      this._devices = devices
   }
   setSelectedType(type) {
      this._selectedType = type
   }
   setSelectedBrand(brand) {
      this._selectedBrand = brand
   }

   get types() {
      return this._types
   }
   get brands() {
      return this._brands
   }
   get devices() {
      return this._devices
   }
   get selectedType() {
      return this._selectedType
   }
   get selectedBrand() {
      return this._selectedBrand
   }

}
