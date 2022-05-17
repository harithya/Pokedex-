import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import RootStackList from './page-types';

export type PageProps<RouteName extends keyof RootStackList = keyof RootStackList> = NativeStackScreenProps<RootStackList, RouteName>;
export type useNavigationProps = NativeStackNavigationProp<RootStackList>;


// Http Types
export interface PokemonResultProps {
    num: number,
    name: string,
    image: string,
    type: string[],
}


export interface SearchStateProps {
    data: string
}

export interface ReducerProps {
    type: string,
    payload: any
}

export interface StatsResultProps {
    total: number,
    hp: number,
    attack: number,
    defense: number,
    speedAttack: number,
    speedDefense: number,
    speed: number
}


export interface PokemonDetailProps {
    num: number,
    name: string,
    hp: number,
    colorTheme: string
}
export interface PokemonDetailStateProps {
    data: PokemonDetailProps
}

