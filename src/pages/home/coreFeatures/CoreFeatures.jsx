import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import './CoreFeatures.css';

const CoreFeatures = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/foodcategory')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="my-5 py-5 text-center d-md-flex mx-5 mx-md-0 justify-content-center align-items-center gap-3">
            {
                categories.map(categorie => <div className="border gap-3 frture-food my-2" key={categorie.id}>

                    <Image style={{ width: "32px", height: "32px" }} src={categorie.img} />

                    <span className="px-2"> {categorie.name}</span>
                </div>)
            }
        </div>
    );
};

export default CoreFeatures;