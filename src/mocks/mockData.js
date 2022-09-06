const arrProds = [{id: '1', tittle: 'Rice', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores saepe nihil sed!', price: 200, category: 'carajo'},
    {id: '2' , tittle: 'Chicken', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus temporibus atque ratione.', price: 500, category: 'nuevo'},
    {id: '3', tittle: 'Eggs', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, assumenda in. Amet!', price:700, category: 'carajo'},
    {id: '4', tittle: 'Milk', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A fuga fugit quod.', price: 600, category: 'nuevo'},
    {id: '5', tittle: 'Cereal', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fuga debitis ducimus?', price: 350, category: 'carajo'},
    {id: '6', tittle: 'flour', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus magni voluptatem reprehenderit?', price: 900, category: 'nuevo'}]

const promiseProds = new Promise ((res)=>{
        res(arrProds)
    
  });

export default promiseProds