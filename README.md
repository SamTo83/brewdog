# BrewDog API

[You can check out my game by clicking on this link](https://samto83.github.io/brewdog/)

![BrewDog page](https://github.com/SamTo83/brewdog/blob/master/brewdog.PNG)

## The functionality of the App
The Brewdog API has been fetched to the application which allows me to be able to search and filter the available beers in the database.

## The design  
### The App consist of: 
* Created a dark mode version to compensate the brewdog brand.
* Has functionality to search or filter the BrewDog items
* You can also filter the range of the Alcohol by Volume or International Bittering Units


## The code 
* The content of the app is to fetch the BrewDog API and present the findings in mobile or desktop mode. 

 ```
 export const App = () => {
  const [beers, setBeers] = useState([]);
  const [showNav, setShowNav] = useState(false);
  const [nameText, setNameText] = useState();
  const [abvMin, setAbvMin] = useState(0);
  const [abvMax, setAbvMax] = useState(10);
  const [ibuMin, setIbuMin] = useState(0);
  const [ibuMax, setIbuMax] = useState(200);
  const [isClassic, setIsClassic] = useState(false);

  const fetchBeers = () => {
    const nameStr = nameText ? `&beer_name=${nameText}` : "";
    const abvMinStr = `&abv_gt=${abvMin}`;
    const abvMaxStr = `&abv_lt=${abvMax}`;
    const ibuMinStr = `&ibu_gt=${ibuMin}`;
    const ibuMaxStr = `&ibu_lt=${ibuMax}`;
    const isClassicStr = isClassic ? `&brewed_before=01-2011` : "";

    
    const url = `https://api.punkapi.com/v2/beers?per_page=80${nameStr}${abvMinStr}${abvMaxStr}${ibuMinStr}${ibuMaxStr}${isClassicStr}`
    fetch(url)
    .then((response) => response.json())
    .then(data => setBeers(data));
  }

  useEffect(() => {
    fetchBeers();
  }, []);
}; 
```