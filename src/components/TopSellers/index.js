import { v4 as uuidv4 } from 'uuid'
import './index.css'
import AirbnbSlick from '../AirbnbSlick'
const tsList = [
    {id: uuidv4(),rating: 4.98,count: 3327,city: 'italy',description: 'Pasta with the Grandmas' ,price: 2679,imgUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-active_media/original/1a9f2a4a-e613-4dfe-b871-1a2ec4841f04.jpg'},
    {id: uuidv4(),rating: 4.91,count: 2596,city: 'Spain',description: 'Pizza with the Grandmas',price: 1299,imgUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-media_library/original/83b203b9-f0b4-4070-ae38-c10628bef92f.jpeg'},
    {id: uuidv4(),rating: 4.97,count: 488,city: 'Japan',description: 'Paneer with the Grandmas',price: 671,imgUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1655371-active_media/original/dc85993f-4cd3-423d-b854-a729343870d7.jpeg'},
    {id: uuidv4(),rating: 4.86,count: 594,city: 'Poland',description: 'Ice-cream with the Grandmas',price: 1299,imgUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1661135-poster/original/027394e3-d502-4cb8-9f7f-9a88f41551ba.jpeg'},
    {id: uuidv4(),rating: 4.90,count: 2603,city: 'UnitedKingdom',description: 'Burger with the Grandmas',price: 1567,imgUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1671726-media_library/original/b46e34b1-a167-446d-b0b7-b54be0739f8b.jpg'},
    {id: uuidv4(),rating: 4.82,count: 120,city: 'France',description: 'Noodles with the Grandmas',price: 1137,imgUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1718920-media_library/original/ca228931-6da0-4f13-96ec-a4079eaeb6c1.jpg'},
    { id: uuidv4(), rating: 4.93, count: 1102, city: 'UnitedStates', description: 'Biryani with the Grandmas', price: 1102, imgUrl: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2563542-poster/original/391d04f5-6823-4a9b-a7e4-c86968325e7c.jpeg' },
    { id: uuidv4(), rating: 4.99, count: 208, city: 'Indonesia', description: 'Pulao with the Grandmas', price: 208, imgUrl: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-4366820-media_library/original/63e0bfe2-59c4-441c-90fa-dcc56013015d.jpeg' },
    { id: uuidv4(), rating: 4.95, count: 817, city: 'Greece', description: 'Chicken with the Grandmas', price: 1438, imgUrl: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-3421552-media_library/original/4e01e709-8b2f-4451-8ed6-19fa1b6e36ba.jpeg' },
    { id: uuidv4(), rating: 4.96, count: 525, city: 'SouthAfrica', description: 'Prawns with the Grandmas', price: 2144, imgUrl: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-3134396-active_media/original/e4f5bfb7-d45e-477b-a49f-e1bd7f85bcf0.jpg' },
    { id: uuidv4(), rating: 4.92, count: 2332, city: 'India', description: 'Pakodi with the Grandmas', price: 2473, imgUrl: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-4333910-media_library/original/89897bac-6354-4e9f-8800-d204cc39001f.jpeg' },
    {id: uuidv4(),rating: 4.94,count: 2579,city: 'Ukraine',description: 'Fish with the Grandmas',price: 1390,imgUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1827402-active_media/original/109175cd-581c-4ab3-bb17-a865d2b4352d.jpg'},
]

const TopSellers = () => (
    <div className='ts-cont'>
        <h1 className='ts-head'>Top sellers</h1>
        <AirbnbSlick tripsData={tsList} />
    </div>
    
)

export default TopSellers