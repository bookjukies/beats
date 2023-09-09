function groupItemsByTitle(cartItems) {
    const groupedObject = {};
  
    for (const item of cartItems) {
      const title = item.title;
  
      if (!groupedObject[title]) {
        groupedObject[title] = [];
      }
  
      groupedObject[title].push(item);
    }
  
    return groupedObject;
  }
  