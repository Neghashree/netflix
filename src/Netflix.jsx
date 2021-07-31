import dangal from "./Images/dangal.jpg";
import z from "./Images/z.jpg";
import gg from "./Images/gg.jpg";
import i from "./Images/i.jpg";
import fa from "./Images/fa.jpg";

const ImageData = [dangal, z, gg, i, fa];

const Data = [
    {
        id: 1,
        showTitle: "Award winning Movies on Netflix",
        showName: "Dangal",
        showDescription: "Mahavir Singh Phogat, a former wrestler, decides to fulfil his dream of winning a gold medal for his country by training his daughters for the Commonwealth Games despite the existing social stigmas.",
        showPoster: ImageData[0],
        showLink: "https://www.netflix.com/in/title/80166185",
        showRating: "8.4/10"
        
    },
    {
        id: 2,
        showTitle: "Award winning Movies on Netflix",
        showName: "Zindagi Na Milegi Dobara",
        showDescription: "Three friends on an adventurous road trip/bachelor party in Spain learn some lessons about themselves and each other that will change them forever.",
        showPoster: ImageData[1],
        showLink: "https://www.netflix.com/in/title/70202336",
        showRating: "8.2/10"
    
    },
    {
        id: 3,
        showTitle: "Popular on Netflix",
        showName: "Gunjan Saxena: The Kargil Girl",
        showDescription: "Flight Lieutenant Gunjan Saxena makes history in her journey from aspiring aviator to India’s first female combat pilot in the Kargil War.",
        showPoster: ImageData[2],
        showLink: "https://www.netflix.com/in/title/81292944",
        showRating: "5.3/10"
        
    },
    {
        id: 4,
        showTitle: "Sci-Fi & Fantasy",
        showName: "Interstellar",
        showDescription: "With humanity teetering on the brink of extinction, a group of astronauts travels through a wormhole in search of another inhabitable planet.",
        showPoster: ImageData[3],
        showLink: "https://www.netflix.com/in/title/70305903",
        showRating: "8.6/10"

    },
    {
        id: 5,
        showTitle: "Movies Based on Real Life",
        showName: "Fatherhood",
        showDescription: "A widowed new dad copes with doubts, fears, heartache and dirty diapers as he sets out to raise his daughter on his own. Inspired by a true story.",
        showPoster: ImageData[4],
        showLink: "https://www.netflix.com/in/title/81435227",
        showRating: "6.7/10"

    }
]

export default Data;