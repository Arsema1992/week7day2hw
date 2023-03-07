 const tdContainer = document.getElementById('td')

 const todos = [
    {
      id: 1,
      title:'Laundry',
      description:'wash clothes'


    },
    {
        id: 2,
        title:'School',
        description:'do home work'
  
  
      },
      {
        id: 3,
        title:'Gym',
        description:'Do workouts'
  
  
      },

 {
      id: 4,
      title:'Grocries',
      description:'go to grocery store'


    },
    {
        id: 5,
        title:'Dog',
        description:'walk the dog'
  
  
      },
]
for (const todo of todos ) {
    tdContainer.innerHTML += `
    <div class="card" id="${todo.id}">
        <h2 class="title">${todo.title}</h2>
        <p class="description">${todo.description}</p>
    </div>
    `
}
for (const todo of todos ) {
    const todoE1 = document.getElementById(todo.id)
    todoE1.addEventListener('click', () =>{
        todoE1.remove()
    })
}