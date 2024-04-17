import { User } from "firebase/auth"

export type apiObj = {
    title: string,
    backdrop_path: string,
    release_date: string,
    overview: string
}

export type movieRow = {
    title: string,
    url: string
}

export type movie = {
    id: string | number
    title: string;
    backdrop_path: string;
    poster_path: string
}
export type movieItemProps = {
    movie: movie;
}

export type AuthContextType = {
    user: User | null;
    signUp: (email: string, password: string) => void;
    logIn: (email: string, password: string) => void;
    logOut: () => void;
}