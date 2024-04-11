import Person from "../types/person";
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

export const me: Person = {
    name: "asd",
    oraArrivo: new Date(1231231).toISOString(),
    oraUscita: new Date(3213123).toISOString(),
    stanza: 1,
    profilePic: "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
    get key() {
        return this.key = (this.name + this.oraArrivo + this.oraUscita + this.stanza + Math.random()).toString()
    },
    isInOffice: false
}
