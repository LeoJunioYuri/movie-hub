declare module 'vuex' {
    import { Store as VuexStore } from 'vuex';

    export interface State {
      favorites: any[];
    }

    export const createStore: (options: any) => VuexStore<State>;
    export type Store<State> = VuexStore<State>;
}