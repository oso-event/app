export class Proposal {

    constructor(
        public id: number,
        public title: string,
        public speakers: string,
        public visible: boolean,
        public votes: number
    ) {}
}
