import Person from "../types/person";

const defaultPeople: Person[] = [
    {
        name: 'Alice',
        oraArrivo: new Date('2024-04-10T08:00:00'),
        oraUscita: new Date('2024-04-10T17:00:00'),
        profilePic: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
        stanza: 2,
        get key() {
            return this.key = (this.name + this.oraArrivo + this.oraUscita + this.stanza + Math.random()).toString()
        }
    },
    {
        name: 'Bob',
        oraArrivo: new Date('2024-04-10T08:30:00'),
        oraUscita: new Date('2024-04-10T17:30:00'),
        profilePic: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
        stanza: 3,
        get key() {
            return this.key = (this.name + this.oraArrivo + this.oraUscita + this.stanza).toString()
        }
    },
    {
        name: 'Charlie',
        oraArrivo: new Date('2024-04-10T09:00:00'),
        oraUscita: new Date('2024-04-10T18:00:00'),
        profilePic: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
        stanza: 1,
        get key() {
            return this.key = (this.name + this.oraArrivo + this.oraUscita + this.stanza).toString()
        }
    },
    {
        name: 'Diana',
        oraArrivo: new Date('2024-04-10T08:45:00'),
        oraUscita: new Date('2024-04-10T17:45:00'),
        profilePic: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
        stanza: 4,
        get key() {
            return this.key = (this.name + this.oraArrivo + this.oraUscita + this.stanza).toString()
        }
    },
    {
        name: 'Victor',
        oraArrivo: new Date('2024-04-10T09:15:00'),
        oraUscita: new Date('2024-04-10T18:15:00'),
        profilePic: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
        stanza: 2,
        get key() {
            return this.key = (this.name + this.oraArrivo + this.oraUscita + this.stanza).toString()
        }
    }
];


export default defaultPeople;