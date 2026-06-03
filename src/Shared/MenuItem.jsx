
const MenuItem = ({ item }) => {
    const { name, image, recipe, price } = item;
    return (
        <div className="flex space-x-4">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-25" src={image} alt="" />
            <div>
                <h3 className="uppercase"> {name}--------- </h3>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItem;