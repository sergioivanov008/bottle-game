export interface AppBodyType {
  colorScheme: (number | null)[][],
  changeBottle(id: number): void,
}

export interface BottleType {
  sсheme: (number | null)[],
  id: number,
  changeBottle(id: number): void,
}

export interface WaterType {
  colorNumber: number | null,
}
