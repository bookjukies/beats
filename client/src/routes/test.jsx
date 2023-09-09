import useGlobal from "../hooks/useGlobal";

function Test() {
    const {data} = useGlobal()

  const originalArray = [...data]

  
    // Create an object to store the grouped items
    const groupedObject = {};
  
    // Loop through the original array and group items by their "producer" property
    for (const item of originalArray) {
      const producer = item.producer;
  
      if (!groupedObject[producer]) {
        groupedObject[producer] = [];
      }
  
      groupedObject[producer].push(item);
    }
  
    return (
      <div className="pt-28">
        {Object.entries(groupedObject).map(([producer, items]) => (
          <div key={producer} className="border p-4 mb-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{producer}</h2>
            <p className="mb-2">Total Price: {items.reduce((total, item) => total + item.price, 0)}</p>
            <ul>
              {items.map((item, index) => (
                <li key={index} className="mb-2">
                  <p><span className="font-bold">Name:</span> {item.name}</p>
                  <p><span className="font-bold">Price:</span> {item.price}</p>
                  {/* Add other properties as needed */}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  
  export default Test;
  

