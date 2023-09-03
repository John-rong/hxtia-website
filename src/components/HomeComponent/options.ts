
import { ImgUtil } from "../../utils/imgUtils"

const bgImg = ImgUtil.getImg('p2.png')
const logoImg = ImgUtil.getImg('tialogo.jpg')
const img1 = [ImgUtil.getImg('c2.jpg'), ImgUtil.getImg('c3.png'), ImgUtil.getImg('c1.jpg')]
const img2 = [ImgUtil.getImg('w3.png'), ImgUtil.getImg('w4.png'),ImgUtil.getImg('w1.jpg')]
const img3 = [ImgUtil.getImg('cxcy2.png'), ImgUtil.getImg('cxcy1.jpg')]
const img4 = [ImgUtil.getImg('1024.jpg'), ImgUtil.getImg('10244.png')]
const img5 = [ImgUtil.getImg('k1.png'),ImgUtil.getImg('k2.jpg')]
const img6 = [ImgUtil.getImg('z1.png'), ImgUtil.getImg('z2.png')]

export const CardOptions = {
    img: logoImg,
    bgimg: bgImg,
    fullname: '科技创新协会',
    title: 'HXTIA',
    subtitle1: '关于',
    subcontent1: '科技创新协会是华信软件学院下属的官方学术性协会，学院的创新性比赛或者院级项目一般都会由科协承办，我们致力于推动学院学生的科技创新能力培养和技术能力提升，发扬开源精神，为学院级互联网产品提供产出。我们有针对协会成员的技术培养方案，从长远来看，技术之路需要不断的铺垫，科协希望每个人都能发挥属于自己的光芒！',
    subtitle2: '理念',
    subcontent2: ['就像首页所展示的动画一样（如果太卡可能会成PPT/(ㄒoㄒ)/~~），群星在闪烁中辉映，视角从右上方划至左下方，正如时间从过去到未来，在最后一刻凝视，那些星空中零散的反射光芒成为科协的象征。这正是科协的理念所在，科协并不希望局限或束缚大家，而是鼓励每个人去追求自己认为正确的事情。当你勇于展现光芒时，科协因你而熠熠生辉！']
}

export const BigCardOptions = [
    {
        id: 1,
        img: img1,
        title: "程序设计大赛",
        text: "真正的战争，现在才开始！经历了一个学期的历练，真正的战斗才拉开序幕！在现场，你将与全院高手过招，一路披荆斩棘，走向院校的巅峰！本行动含金量极高，礼品丰厚，渴望同台竞技的你，不心动吗？"
    },
    {
        id: 2,
        img: img2,
        title: "网页设计大赛",
        text: "网页设计充满了创造与创新，也可以在不同人的手中展现出不同的一面，或神秘，或奇葩。那么在你的手中，他会变成什么样子呢？"
    },
    {
        id: 3,
        img: img3,
        title: "创新创意大赛",
        text: "创新创意创新创意创新创意创新创意创新创意创新创意创新创意创新创意创新创意"
    },
    {
        id: 4,
        img: img4,
        title: "1024程序员节",
        text: "什么是1024文化节？10月24日是程序员们共同的节日,1024即2的十次方，而1024MB又等于1GB，1G又与一级谐音，二进制也是计算机中的基础存储单元。象征着程序员在生活中稳步推进社会发展。为什么要举办1024程序员文化节呢？那当然是因为...拯救我们头秃的发际线"
    },
    {
        id: 5,
        img: img5,
        title: "科协小课堂",
        text: "想知道，学长学姐们走过的路吗？想在最短时间内，接受最多的干货吗？参加每周演习小讲堂，提升自我，前辈带你飞！"
    },
    {
        id: 6,
        img: img6,
        title: "华信作业板",
        text: "科协项目，尽情期待..."
    },
    {
        id: 7,
        img: [],
        title: "科协官网",
        text: "科协项目，尽情期待..."
    },
]

export const DepartmentOptions = [
    {
        id: 0,
        title: '活动部',
        position: '科技创新协会传统体系',
        text: '活动部是科技创新协会最具有活力的部门之一，为科协的活动提供了强有力的保障。院内的比赛及日常活动由活动部及成员进行策划、人员统筹、规则指定、场地租借、物资调配等等...活动部是最能够锻炼同学们执行力、组织力、凝聚力的部门，只要你有大胆新奇的想法，那就来活动部吧！',
    },
    {
        id: 1,
        title: '技术部',
        position: '科技创新协会传统体系',
        text: '技术部顾名思义，是一个比较偏向技术的部门，技术部里相较于其他部门更多的是技术交流，无论前端，后端，还是各种语言，都可以互相进行交流与帮助。在技术部，我们更多希望遇到的是有讨论意义的问题，而不是随意百度就能够找到答案的问题。当然也不全是聊技术，平时的一起发发癫犯犯病也挺好的，欢迎各位加入技术部！',
    },
    {
        id: 2,
        title: '运营部',
        position: '科技创新协会传统体系',
        text: '运营部是一个互帮互助的部门，在这里你可以感受到不一样的温馨，部门主要负责执行活动的宣传吸引挑战者报名，同时负责活动奖品以及品级的评判。对协会进行设计、运行、评价和改进工作，掌握协会经济命脉。加入我们带你了解不一样的科协。',
    },
    {
        id: 3,
        title: '项目组',
        position: '科技创新协会新体系',
        text: '项目组是科协新创立的部门，独立于其他三个部门，通过考核就可以直接加入项目组，不受其他部门限制，项目组主要负责学院以及科协项目的开发，维护',
    },
    {
        id: 4,
        title: '组织结构',
        position: '科技创新协会新体系',
        text: '会长 -- 部长 -- 部员 一一一一一一一一一一一一 会长3人; 活动部长6人;技术部长5人;运营部长4人',
    }
]