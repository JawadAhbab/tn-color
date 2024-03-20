export declare class Contrast {
    private bgcolor;
    private fgcolor;
    private size;
    private largeAA;
    private smallAA;
    private largeAAA;
    private smallAAA;
    constructor(bgcolor: string, fgcolor: string, size?: number);
    private get large();
    get contrast(): number;
    get passAA(): boolean;
    get passAAA(): boolean;
}
