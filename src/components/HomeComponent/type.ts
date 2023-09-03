export interface CardPorps {
    bgimg: string,
    img: string,
    fullname: string,
    title: string,
    subtitle1: string,
    subcontent1: string,
    subtitle2: string,
    subcontent2: string[]

}

export interface BigCardPorps {
    id: number,
    img: string[],
    title: string,
    text: string
}

export interface DepartmentPorps {
    id: number,
    title: string,
    position: string,
    text: string,
}

export interface TcbfileList {
    code?: string | undefined;
    message?: string | undefined;
    fileID: string;
    tempFileURL: string;
    download_url?: string | undefined;
}
