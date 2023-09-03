import goodStorage from 'good-storage'

export class ImgUtil {
    static imgList: Record<string, string> = {}

    static storageImgList() {
        this.imgList = goodStorage.get('imgList') || {}
        if (this.isEmpty()) {
            this.loadAllImgs()
            goodStorage.set('imgList', this.imgList)
        }
    }
    static isEmpty() {
        return !Object.getOwnPropertyNames(this.imgList).length
    }

    static getImg(imgName: string) {
        // console.log(new URL(`${ImgUtil.imgList[imgName]}`, import.meta.url).href)
        // return new URL(`../assets/img/${imgName}`, import.meta.url).href
        return ImgUtil.imgList[imgName]
    }

    static loadAllImgs() {
        const imgMap = import.meta.glob('../assets/img/*.*')
        console.log("imgMap:", imgMap)

        this.loadAllImg(imgMap)
    }

    static loadAllImg(imgMap: Record<string, () => Promise<unknown>>) {
        //绝对路径
        let absolutePath: string = ""
        //图片名
        let imgName: string = ""
        for (let relativePath in imgMap) {
            absolutePath = imgMap[relativePath].name
            if (absolutePath) {
                imgName = absolutePath.substring(absolutePath.lastIndexOf("/") + 1)
                // this.imgList[imgName] = absolutePath
                this.imgList[imgName] = new URL(`../assets/img/${imgName}`, import.meta.url).href
            }
        }

    }

}