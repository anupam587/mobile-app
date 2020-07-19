import Product from '../models/product';
import { Image } from 'react-native';

import netflixImage from '../assets/images/Netflix.png';
const netflexImageUri = Image.resolveAssetSource(netflixImage).uri;

import primeImage from '../assets/images/prime.jpg';
const primeImageUri = Image.resolveAssetSource(primeImage).uri;

import edxImage from '../assets/images/EdX.jpeg';
const edxImageUri = Image.resolveAssetSource(edxImage).uri;

import altBalajiImage from '../assets/images/ALTBalaji.png';
const altBalajiImageUri = Image.resolveAssetSource(altBalajiImage).uri;

import byjusImage from "../assets/images/BYJUs.png";
const byjusImageUri = Image.resolveAssetSource(byjusImage).uri;

import topprImage from "../assets/images/toppr.png";
const topprImageUri = Image.resolveAssetSource(topprImage).uri;

import Zee5Image from "../assets/images/Zee5.png";
const Zee5ImageUri = Image.resolveAssetSource(Zee5Image).uri;

import timeImage from "../assets/images/Time.jpg";
const timeImageUri = Image.resolveAssetSource(timeImage).uri;

const PRODUCTS = [
  new Product(
    'p1',
    'Netflix',
    netflexImageUri,
    'Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more',
    29.99
  ),
  new Product(
    'p2',
    'Amazon Prime',
    primeImageUri,
    'Prime Video, also marketed as Amazon Prime Video, is an American Internet video on demand service that is developed, owned, and operated by Amazon. ',
    99.99
  ),
  new Product(
    'p3',
    'Edx',
    edxImageUri,
    'edX is a massive open online course provider created by Harvard and MIT. It hosts online university-level courses in a wide range of disciplines to a worldwide student body, including some courses at no charge. It also conducts research into learning based on how people use its platform.',
    8.99
  ),
  new Product(
    'p5',
    'Alt Balaji',
    altBalajiImageUri,
    'Watch Latest Web Series, Originals & Movies in HD Online. Choose from Genres like Thriller, Action, Adult, Comedy, Family Drama',
    2299.99
  ),
  new Product(
    'p6',
    'Byjus',
    byjusImageUri,
    "Online Courses for UPSC, K3, K10, K12, CBSE NCERT, ICSE, IIT-JEE & NEET available for e Learning ",
    5.49
  ),
  new Product(
    'p7',
    'Toppr',
    topprImageUri,
    "Toppr makes learning effective for you. Prepare for JEE Main, NEET, JEE Advanced, CBSE and other school exams.",
    5.49
  ),
  new Product(
    'p8',
    'Zee5',
    Zee5ImageUri,
    "Watch The Latest Shows Kaali2, REJCTX2, Kehne Ko Humsafar Hain 3, The Casino Only On ZEE5. Go On A Yearly Entertainment Ride Only With ZEE5 At Just Rs 999 INR. Subscribe Now. Multi-Device Support. SMART TV. Offline Viewing. Voice Search.",
    5.49
  ),
  new Product(
    'p9',
    'Time',
    timeImageUri,
    "Breaking news and analysis from TIME.com. Politics, world news, photos, video, tech reviews, health, science and entertainment news.",
    5.49
  )
];

export default PRODUCTS;
