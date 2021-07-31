import tf from "./Images/tf.jpg";
import dm from "./Images/dm.jpg";
import yu from "./Images/yu.jpg";
import cr from "./Images/cr.jpg";
import ra from "./Images/ra.jpg";

const ImageData2 = [tf, dm, yu, cr, ra];

const Data2 = [
    {
        id: 1,
        showTitle: "New Movie",
        showName: "Toofaan",
        showDescription: "An inspiring story about an orphan boy from the streets become a championship boxer.",
        showPoster: ImageData2[0],
        showLink: "https://www.primevideo.com/detail/Toofaan/0Q3HPPCDAH413A40429QS3587D?ref_=dvm_pds_gen_in_as_s_gt_dsaallwebd_mkw_1EJRA0tl-dc_pcrid_{adid}&mrntrk=slid__pgrid_67214826146_pgeo_1007768_x__ptid_dsa-19959388920",
        showRating: "4.6/10"

    },
    {
        id: 2,
        showTitle: "Romantic Movie",
        showName: "Dum Laga Ke Haisha (English Subtitled)",
        showDescription: "Prem, a school dropout, hesitantly marries an educated but overweight girl, Sandhya. However, the two come closer when they take part in a race, which involves Prem carrying Sandhya on his back.",
        showPoster: ImageData2[1],
        showLink: "https://www.amazon.com/Dum-Laga-Haisha-English-Subtitled/dp/B010SPK56A/ref=sr_1_4?crid=1KOMLXKLPRKQD&dchild=1&keywords=hindi+movies&qid=1627659200&s=instant-video&sprefix=hindi+%2Cinstant-video%2C643&sr=1-4",
        showRating: "7.5/10"

    },
    {
        id: 3,
        showTitle: "Family Movie",
        showName: "Yuvarathnaa",
        showDescription: "A principal stands up to the political elements to save his college and the future of his students. However, he is not alone in his fight.",
        showPoster: ImageData2[2],
        showLink: "https://www.google.com/search?q=yuvaratna+synopis&bih=664&biw=1536&rlz=1C1CHBF_enIN903IN904&hl=en&ei=aBwEYa7KM5Taz7sPmLuAgAg&oq=yuvaratna+synopis&gs_lcp=Cgdnd3Mtd2l6EAM6BwgAEEcQsAM6EQgAELADEIoDELcDENQDEOUCOgYIABANEB46BwgAELEDEEM6BAgAEAo6BAgAEEM6CgguEMcBEKMCEAo6CAgAEAcQChAeOgoIABCxAxCDARAKOggIABANEAUQHjoICAAQCBANEB46CggAEAgQDRAKEB5KBQhAEgExSgQIQRgAUOqsClj55wpgx-8KaAFwAXgAgAG0A4gBhh2SAQkwLjcuNi4xLjKYAQCgAQHIAQq4AQLAAQE&sclient=gws-wiz&ved=0ahUKEwiunvvTj4vyAhUU7XMBHZgdAIAQ4dUDCA8&uact=5",
        showRating: "6.6/10"

    },
    {
        id: 4,
        showTitle: "Kids Movie",
        showName: "Chicken Run",
        showDescription: "Award-winning DreamWorks animation from the Aardman team, telling the story of a band of chickens doomed to a life of egg-laying on a Yorkshire chicken farm. When a flamboyant American rooster arrives on the scene, the hens hope he can teach them to fly to freedom. However, when a chicken-pie making machine is installed, their need becomes urgent and they must devise other means of escape.",
        showPoster: ImageData2[3],
        showLink: "https://www.amazon.com/Chicken-Run-Peter-Lord/dp/B079J4S2VC/ref=sr_1_2?crid=3KNEMOSRFCFGI&dchild=1&keywords=kids+movies&qid=1627659811&s=instant-video&sprefix=kids+%2Cinstant-video%2C486&sr=1-2",
        showRating: "7.0/10"

    },
    {
        id: 5,
        showTitle: "Action Movie",
        showName: "Raazi",
        showDescription: "During the Indo-Pakistan War of 1971, an Indian spy is married into a Pakistani family by her father so that she can get some valuable information about the enemy.",
        showPoster: ImageData2[4],
        showLink: "https://www.amazon.com/Raazi-Alia-Bhatt/dp/B08KWRGL98/ref=sr_1_1?dchild=1&keywords=action+movies+in+hindi&qid=1627660187&s=instant-video&sr=1-1",
        showRating: "7.8/10"
    }
]

export default Data2;