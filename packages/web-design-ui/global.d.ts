// GlobalComponents是给volar识别的
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    MedoaRecord: (typeof import('@zhcy/ui'))['MedoaRecord'];
  }
}
export {};
