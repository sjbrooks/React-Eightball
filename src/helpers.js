
function choice(items){
  let randomIndex =  Math.floor(Math.random() * items.length);
  return items[randomIndex]
}




export default choice